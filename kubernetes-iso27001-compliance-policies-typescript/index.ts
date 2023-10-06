import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi/compliance-policy-manager";

new PolicyPack("kubernetes-iso27001-compliance-ready-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            vendors: ["kubernetes"],
            // services: ["admissionregistration", "apiextensions", "apiregistration", "apps", "auditregistration", "autoscaling", "batch", "certificates", "coordination", "core", "discovery", "events", "extensions", "flowcontrol", "networking", "node", "policy", "rbac", "resource", "scheduling", "settings", "storage"],
            // severities: ["critical", "high", "low", "medium"],
            // topics: ["alpha", "api", "availability", "beta", "cost", "network", "runtime", "security", "unstable", "usability"],
            frameworks: ["iso27001"] // Other available frameworks: iso27001", "pcidss
        }, "advisory"),
    ],
});

/**
 * Optional✔️: Display additional stats and helpful
 * information when the policy pack is evaluated.
 */
policyManager.displaySelectionStats({
    displayGeneralStats: true,
    displayModuleInformation: true,
    displaySelectedPolicyNames: true,
});
