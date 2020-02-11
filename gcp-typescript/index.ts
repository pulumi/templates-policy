import * as gcp from "@pulumi/gcp";
import { PolicyPack, validateResourceOfType } from "@pulumi/policy";

new PolicyPack("gcp-typescript", {
    policies: [{
        name: "storage-bucket-no-public-read",
        description: "Prohibits setting the publicRead or publicReadWrite permission on GCP Storage buckets.",
        enforcementLevel: "mandatory",
        validateResource: validateResourceOfType(gcp.storage.BucketACL, (acl, args, reportViolation) => {
            if (acl.predefinedAcl === "public-read" || acl.predefinedAcl === "public-read-write") {
                reportViolation("Storage buckets acl cannot be set to public-read or public-read-write.");
            }
        }),
    }],
});
