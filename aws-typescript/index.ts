import * as aws from "@pulumi/aws";
import { PolicyPack, validateResourceOfType } from "@pulumi/policy";

new PolicyPack("aws-typescript", {
    policies: [{
        name: "s3-no-public-read",
        description: "Prohibits setting the publicRead or publicReadWrite permission on AWS S3 bucket ACLs.",
        enforcementLevel: "mandatory",
        validateResource: validateResourceOfType(aws.s3.BucketAcl, (bucketAcl, args, reportViolation) => {
            if (bucketAcl.acl === "public-read" || bucketAcl.acl === "public-read-write") {
                reportViolation(
                    "You cannot set public-read or public-read-write on an S3 bucket ACL. " +
                    "Read more about ACLs here: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html");
            }
        }),
    }],
});
