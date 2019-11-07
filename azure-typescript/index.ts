import * as azure from "@pulumi/azure";
import { PolicyPack, typedRule } from "@pulumi/policy";
import * as assert from "assert";

new PolicyPack("azure-typescript", {
    policies: [{
        name: "storage-container-no-public-read",
        description: "Prohibits setting the public permission on Azure Storage Blob Containers.",
        enforcementLevel: "mandatory",
        rules: [
            typedRule(azure.storage.Container.isInstance, it => assert.ok(it.containerAccessType !== "blob"
                && it.containerAccessType !== "container",
                "You cannot set blob or container access on an Azure Storage Container. " +
                "Read more about read access here: " +
                "https://docs.microsoft.com/en-us/azure/storage/blobs/storage-manage-access-to-resources")),
        ],
    }],
});
