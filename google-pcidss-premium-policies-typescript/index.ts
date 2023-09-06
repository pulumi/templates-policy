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
new PolicyPack("google-pcidss-premium-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            vendors: ["google"],
            // services: ["compute", "accesscontextmanager", "analyticshub", "apigateway", "appengine", "artifactregistry", "assuredworkloads", "beyondcorp", "bigqueryconnection", "bigqueryreservation", "billingbudgets", "binaryauthorization", "cloudbuild", "cloudfunctions", "cloudidentity", "cloudresourcemanager", "cloudscheduler", "cloudsupport", "cloudtasks", "cloudtrace", "composer", "contactcenteraiplatform", "container", "containeranalysis", "datacatalog", "dataform", "datafusion", "datalabeling", "datamigration", "dataproc", "datastream", "deploymentmanager", "dialogflow", "discoveryengine", "dns", "documentai", "domains", "eventarc", "file", "firebase", "firebaseappcheck", "firebasedatabase", "firebasehosting", "firebaseml", "firestore", "gameservices", "genomics", "gkehub", "healthcare", "integrations", "managedidentities", "memcache", "metastore", "migrationcenter", "networkconnectivity", "networkmanagement", "networksecurity", "networkservices", "osconfig", "oslogin", "policysimulator", "privateca", "pubsub", "recommendationengine", "redis", "remotebuildexecution", "retail", "runtimeconfig", "secretmanager", "securitycenter", "servicedirectory", "sqladmin", "toolresults", "tpu", "translate", "vmmigration", "vpcaccess", "websecurityscanner", "workflowexecutions", "workflows", "workstations"],
            // severities: ["critical", "medium"],
            // topics: ["encryption", "network", "alpha", "api", "beta", "unstable"],
            frameworks: ["pcidss"] // Other available frameworks: cis", "iso27001", "pcidss
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
