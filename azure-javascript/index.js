"use strict";
const azure = require("@pulumi/azure");
const policy = require("@pulumi/policy");

new policy.PolicyPack("azure-typescript", {
    policies: [{
        name: "storage-container-no-public-read",
        description: "Prohibits setting the public permission on Azure Storage Blob Containers.",
        enforcementLevel: "mandatory",
        validateResource: policy.validateTypedResource(azure.storage.Container, (container, args, reportViolation) => {
            if (container.containerAccessType === "blob" || container.containerAccessType === "container") {
                reportViolation(
                    "You cannot set blob or container access on an Azure Storage Container. " +
                    "Read more about read access here: " +
                    "https://docs.microsoft.com/en-us/azure/storage/blobs/storage-manage-access-to-resources");
            }
        }),
    }],
});
