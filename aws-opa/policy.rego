package aws

# METADATA
# title: No Public S3 Buckets
# description: S3 buckets must not use public-read ACLs.
# custom:
#   message: Set the ACL to 'private' or remove it entirely.
deny_public_buckets[msg] {
    input.type == "aws:s3/bucket:Bucket"
    input.acl == "public-read"
    msg := sprintf("S3 bucket '%s' must not have public-read ACL", [input.__name])
}
