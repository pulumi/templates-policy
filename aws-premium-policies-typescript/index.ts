import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi-premium-policies/policy-manager";

/**
 * To use Pulumi Premium Policies (beta), please look into the README.md for more information.
 */

new PolicyPack("aws-premium-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            // vendors: ["aws"],
            // services: ["ec2", "s3", "apigateway"],
            // severities: ["medium", "high"],
            // topics: ["encryption"],
            // frameworks: ["pcidss"]
        }, "mandatory" ),
    ],
});

policyManager.displaySelectionStats({
    displayGeneralStats: true,
    displayModuleInformation: true,
    displaySelectedPolicyNames: true,
});
