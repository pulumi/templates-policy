import { PolicyPack } from "@pulumi/policy";
import { policyManager } from "@pulumi/compliance-policy-manager";

new PolicyPack("azure-iso27001-compliance-ready-policies-typescript", {
    policies:[
        ...policyManager.selectPolicies({
            vendors: ["azure"],
            // services: ["compute", "containerservice", "aadiam", "agfoodplatform", "alertsmanagement", "apicenter", "apimanagement", "app", "appcomplianceautomation", "appplatform", "attestation", "authorization", "automanage", "automation", "autonomousdevelopmentplatform", "avs", "azureactivedirectory", "azurearcdata", "azuredata", "azureplaywrightservice", "azuresphere", "azurestack", "azurestackhci", "billing", "blockchain", "blueprint", "cache", "cdn", "changeanalysis", "chaos", "communication", "confidentialledger", "confluent", "connectedvmwarevsphere", "containerinstance", "containerregistry", "containerstorage", "costmanagement", "customproviders", "dashboard", "databoxedge", "databricks", "datalakeanalytics", "datamigration", "dataprotection", "datareplication", "datashare", "dbformariadb", "dbformysql", "dbforpostgresql", "delegatednetwork", "deploymentmanager", "desktopvirtualization", "devcenter", "devhub", "devices", "documentdb", "dynamics365fraudprotection", "easm", "edgeorder", "education", "elastic", "elasticsan", "engagementfabric", "eventgrid", "eventhub", "extendedlocation", "fluidrelay", "hanaonazure", "hardwaresecuritymodules", "hdinsight", "healthbot", "healthcareapis", "hybridcloud", "hybridcompute", "hybridconnectivity", "hybridcontainerservice", "hybridnetwork", "insights", "intune", "iotcentral", "iotfirmwaredefense", "kubernetes", "kubernetesconfiguration", "kusto", "loadtestservice", "logic", "logz", "m365securityandcompliance", "machinelearning", "machinelearningcompute", "machinelearningexperimentation", "machinelearningservices", "maintenance", "managednetwork", "managednetworkfabric", "maps", "media", "migrate", "mixedreality", "mobilenetwork", "mobilepacketcore", "netapp", "network", "networkcloud", "notificationhubs", "openenergyplatform", "operationalinsights", "operationsmanagement", "portal", "powerplatform", "professionalservice", "providerhub", "purview", "quantum", "quota", "recommendationsservice", "redhatopenshift", "relay", "resourceconnector", "resourcegraph", "resources", "scom", "scvmm", "search", "security", "securitydevops", "securityinsights", "servicebus", "servicefabric", "servicefabricmesh", "servicelinker", "servicenetworking", "signalrservice", "sql", "sqlvirtualmachine", "storagecache", "storagemover", "storagepool", "streamanalytics", "synapse", "syntex", "testbase", "timeseriesinsights", "videoanalyzer", "visualstudio", "voiceservices", "web", "webpubsub", "windowsesu", "workloads"],
            // severities: ["high", "medium"],
            // topics: ["authentication", "encryption", "kubernetes", "network", "security", "storage", "api", "preview", "unstable"],
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
