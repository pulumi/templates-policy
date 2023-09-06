import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi-premium-policies/policy-manager";

/**
 * 📝
 * To use Pulumi Premium Policies (beta),
 * please read the README.md file for more information.
 */
new PolicyPack("google-premium-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            // vendors: ["google"],
            // services: ["compute", "apigateway"],
            // severities: ["medium", "high", "critical"],
            // topics: ["encryption", "network", "alpha", "api", "beta", "unstable"],
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
