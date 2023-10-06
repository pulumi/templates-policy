import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi/compliance-policy-manager";

new PolicyPack("aws-cis-compliance-ready-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            vendors: ["aws"],
            // services: ["alb", "apigateway", "apigatewayv2", "appflow", "athena", "cloudfront", "ebs", "ec2", "ecr", "efs", "eks", "elb", "iam", "kms", "lambda", "rds", "s3", "secretsmanager"],
            // severities: ["critical", "high", "low", "medium"],
            // topics: ["availability", "backup", "container", "cost", "documentation", "encryption", "kubernetes", "logging", "network", "performance", "permissions", "resilience", "security", "storage", "vulnerability"],
            frameworks: ["cis"] // Other available frameworks: cis", "iso27001", "pcidss
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
