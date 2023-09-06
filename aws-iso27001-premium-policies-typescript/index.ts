import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi-premium-policies/policy-manager";

/**
 * 📝
 * To use Pulumi Premium Policies (beta),
 * please read the README.md file for more information.
 *
 * ⚠️
 * Using Pulumi Premium Policies as demonstrated below
 * doesn't imply nor grant automatic compliance.
 *
 * The customer (you) is solely responsible for doing
 * its due diligence on meeting these compliance
 * requirements and working with its auditor(s) in
 * order to obtain the certification(s) they wish.
 * ⚠️
 */
new PolicyPack("aws-iso27001-premium-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            vendors: ["aws"],
            // services: ["alb", "apigateway", "apigatewayv2", "appflow", "athena", "cloudfront", "ebs", "ec2", "ecr", "efs", "eks", "elb", "kms", "lambda", "rds", "s3", "secretsmanager"],
            // severities: ["critical", "high", "low", "medium"],
            // topics: ["availability", "backup", "container", "cost", "documentation", "encryption", "kubernetes", "logging", "network", "performance", "permissions", "resilience", "security", "storage", "vulnerability"],
            frameworks: ["iso27001"] // Other available frameworks: cis", "iso27001", "pcidss", "soc2
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
