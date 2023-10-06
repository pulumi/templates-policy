import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi/compliance-policy-manager";

new PolicyPack("google-cis-compliance-ready-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            vendors: ["google"],
            // services: ["compute", "accesscontextmanager", "analyticshub", "apigateway", "appengine", "artifactregistry", "assuredworkloads", "beyondcorp", "bigqueryconnection", "bigqueryreservation", "billingbudgets", "binaryauthorization", "cloudbuild", "cloudfunctions", "cloudidentity", "cloudresourcemanager", "cloudscheduler", "cloudsupport", "cloudtasks", "cloudtrace", "composer", "contactcenteraiplatform", "container", "containeranalysis", "datacatalog", "dataform", "datafusion", "datalabeling", "datamigration", "dataproc", "datastream", "deploymentmanager", "dialogflow", "discoveryengine", "dns", "documentai", "domains", "eventarc", "file", "firebase", "firebaseappcheck", "firebasedatabase", "firebasehosting", "firebaseml", "firestore", "gameservices", "genomics", "gkehub", "healthcare", "integrations", "managedidentities", "memcache", "metastore", "migrationcenter", "networkconnectivity", "networkmanagement", "networksecurity", "networkservices", "osconfig", "oslogin", "policysimulator", "privateca", "pubsub", "recommendationengine", "redis", "remotebuildexecution", "retail", "runtimeconfig", "secretmanager", "securitycenter", "servicedirectory", "sqladmin", "toolresults", "tpu", "translate", "vmmigration", "vpcaccess", "websecurityscanner", "workflowexecutions", "workflows", "workstations"],
            // severities: ["critical", "medium"],
            // topics: ["encryption", "network", "alpha", "api", "beta", "unstable"],
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
