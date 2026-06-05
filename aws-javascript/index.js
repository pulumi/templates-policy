"use strict";
const aws = require("@pulumi/aws");
const policy = require("@pulumi/policy");

new policy.PolicyPack("aws-javascript", {
    policies: [{
        name: "s3-no-public-read",
        description: "Prohibits setting the publicRead or publicReadWrite permission on AWS S3 bucket ACLs.",
        enforcementLevel: "mandatory",
        validateResource: policy.validateResourceOfType(aws.s3.BucketAcl, (bucketAcl, args, reportViolation) => {
            if (bucketAcl.acl === "public-read" || bucketAcl.acl === "public-read-write") {
                reportViolation(
                    "You cannot set public-read or public-read-write on an S3 bucket ACL. " +
                    "Read more about ACLs here: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html");
            }
        }),
    }],
});
