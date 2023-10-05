import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi/policy-manager";

new PolicyPack("kubernetes-premium-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            // vendors: ["kubernetes"],
            // services: ["apps", "core", "rbac"],
            // severities: ["medium", "high", "critical"],
            // topics: ["encryption"],
            // frameworks: ["pcidss"]
        }, "mandatory"),
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
