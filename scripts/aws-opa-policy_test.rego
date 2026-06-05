package aws

test_deny_public_read_acl {
    count(deny_public_buckets) > 0 with input as {
        "type": "aws:s3/bucketAcl:BucketAcl",
        "__name": "my-bucket-acl",
        "acl": "public-read",
    }
}

test_deny_public_read_write_acl {
    count(deny_public_buckets) > 0 with input as {
        "type": "aws:s3/bucketAcl:BucketAcl",
        "__name": "my-bucket-acl",
        "acl": "public-read-write",
    }
}

test_allow_private_acl {
    count(deny_public_buckets) == 0 with input as {
        "type": "aws:s3/bucketAcl:BucketAcl",
        "__name": "my-bucket-acl",
        "acl": "private",
    }
}

test_ignore_deprecated_bucket_acl {
    count(deny_public_buckets) == 0 with input as {
        "type": "aws:s3/bucket:Bucket",
        "__name": "my-bucket",
        "acl": "public-read",
    }
}
