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
new PolicyPack("kubernetes-iso27001-premium-policies-typescript", {
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
