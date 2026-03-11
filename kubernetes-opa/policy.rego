package kubernetes

# METADATA
# title: No Privileged Containers
# description: Containers must not run in privileged mode.
# custom:
#   message: Set securityContext.privileged to false.
deny_privileged[msg] {
    input.type == "kubernetes:apps/v1:Deployment"
    container := input.spec.template.spec.containers[_]
    container.securityContext.privileged == true
    msg := sprintf("Container '%s' in Deployment '%s' must not run in privileged mode", [container.name, input.__name])
}
