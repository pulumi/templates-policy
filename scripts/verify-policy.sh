#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TS_PKG="${ROOT}/aws-typescript"
JS_PKG="${ROOT}/aws-javascript"
PY_PKG="${ROOT}/aws-python"
OPA_POLICY="${ROOT}/aws-opa/policy.rego"
OPA_TESTS="${ROOT}/scripts/aws-opa-policy_test.rego"

failures=0

log() {
    printf '==> %s\n' "$*"
}

run_check() {
    local name="$1"
    shift

    log "$name"
    if "$@"; then
        printf '    ok\n'
    else
        printf '    failed\n' >&2
        failures=$((failures + 1))
    fi
}

require_command() {
    local name="$1"
    if ! command -v "$name" >/dev/null 2>&1; then
        printf 'missing required command: %s\n' "$name" >&2
        exit 1
    fi
}

verify_opa() {
    require_command opa
    opa test "$OPA_POLICY" "$OPA_TESTS" -v
}

verify_typescript() {
    require_command npm
    require_command npx

    (
        cd "$TS_PKG"
        npm install --silent
        npx --yes -p typescript@5 tsc --noEmit --skipLibCheck -p tsconfig.json
    )
}

verify_javascript() {
    require_command npm
    require_command npx

    (
        cd "$JS_PKG"
        npm install --silent
        npx --yes -p typescript@5 tsc --allowJs --checkJs --noEmit --skipLibCheck \
            --module commonjs --moduleResolution node --target es6 --strict index.js
    )
}

# aws-python/__main__.py is the Python policy pack entry point: pulumi policy new
# aws-python scaffolds it, and Pulumi loads it at preview/up to run the pack's rules.
verify_python() {
    require_command python
    require_command pipx

    local requirement module

    (
        cd "$PY_PKG"
        python -m py_compile __main__.py

        while IFS= read -r requirement || [ -n "$requirement" ]; do
            [ -z "$requirement" ] && continue
            case "$requirement" in
                pulumi-policy*) module=pulumi_policy ;;
                pulumi-aws*) module=pulumi_aws ;;
                *)
                    printf 'unsupported requirement: %s\n' "$requirement" >&2
                    return 1
                    ;;
            esac
            pipx run --spec "$requirement" python -c "import ${module}"
        done < requirements.txt
    )
}

main() {
    run_check "OPA policy tests" verify_opa
    run_check "TypeScript typecheck (aws-typescript)" verify_typescript
    run_check "JavaScript typecheck (aws-javascript)" verify_javascript
    run_check "Python compile/import check (aws-python)" verify_python

    if [ "$failures" -ne 0 ]; then
        printf '%d check(s) failed\n' "$failures" >&2
        exit 1
    fi

    log "all policy checks passed"
}

main "$@"
