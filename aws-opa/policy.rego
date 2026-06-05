package aws

# METADATA
# title: No Public S3 Bucket ACLs
# description: S3 bucket ACLs must not use public-read or public-read-write.
# custom:
#   message: Set the ACL to 'private' or remove it entirely.
deny_public_buckets[msg] {
    input.type == "aws:s3/bucketAcl:BucketAcl"
    input.acl == "public-read"
    msg := sprintf("S3 bucket ACL '%s' must not have public-read ACL", [input.__name])
}

deny_public_buckets[msg] {
    input.type == "aws:s3/bucketAcl:BucketAcl"
    input.acl == "public-read-write"
    msg := sprintf("S3 bucket ACL '%s' must not have public-read-write ACL", [input.__name])
}
