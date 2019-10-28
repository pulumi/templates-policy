import * as aws from "@pulumi/aws";
import { PolicyPack, typedRule } from "@pulumi/policy";
import * as assert from "assert";

new PolicyPack("aws-typescript", {
    policies: [{
        name: "s3-no-public-read",
        description: "Prohibits setting the publicRead or publicReadWrite permission on AWS S3 buckets.",
        enforcementLevel: "mandatory",
        rules: [
            typedRule(aws.s3.Bucket.isInstance, it => assert.ok(it.acl !== "public-read"
                && it.acl !== "public-read-write",
                "You cannot set public-read or public-read-write on an S3 bucket. " +
                "Read more about ACLs here: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html")),
        ],
    }],
});
