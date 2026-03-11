package gcp

# METADATA
# title: No Public Storage Buckets
# description: Storage buckets must not allow public access via allUsers or allAuthenticatedUsers.
# custom:
#   message: Remove allUsers or allAuthenticatedUsers from the bucket's IAM bindings.
deny_public_buckets[msg] {
    input.type == "gcp:storage/bucketIAMMember:BucketIAMMember"
    input.member == "allUsers"
    msg := sprintf("Storage bucket IAM member '%s' must not grant access to allUsers", [input.__name])
}
