import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi/policy-manager";

/**
 * 📝
 * To use Pulumi Premium Policies (beta),
 * please read the README.md file for more information.
 */
new PolicyPack("azure-premium-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            // vendors: ["azure"],
            // services: ["compute", "containerservice", "storage"],
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
