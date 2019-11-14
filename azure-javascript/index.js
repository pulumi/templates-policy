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
                    "Azure Storage Container must not have blob or container access set. " +
                    "Read more about read access here: " +
                    "https://docs.microsoft.com/en-us/azure/storage/blobs/storage-manage-access-to-resources");
            }
        }),
    }],
});
