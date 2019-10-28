"use strict";
const aws = require("@pulumi/aws");
const policy = require("@pulumi/policy");
const assert = require("assert")

new policy.PolicyPack("aws-javascript", {
    policies: [{
        name: "s3-no-public-read",
        description: "Prohibits setting the publicRead or publicReadWrite permission on AWS S3 buckets.",
        enforcementLevel: "mandatory",
        rules: [
            policy.typedRule(aws.s3.Bucket.isInstance, it => assert.ok(it.acl !== "public-read" &&
                it.acl !== "public-read-write",
                "You cannot set public-read or public-read-write on an S3 bucket. " +
                "Read more about ACLs here: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html")),
        ],
    }],
});
