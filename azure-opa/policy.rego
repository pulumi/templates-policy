package azure

# METADATA
# title: No Public Storage Containers
# description: Storage containers must not allow public access.
# custom:
#   message: Set containerAccessType to 'private' or remove it entirely.
deny_public_containers[msg] {
    input.type == "azure-native:storage:BlobContainer"
    input.publicAccess != "None"
    msg := sprintf("Storage container '%s' must not allow public access", [input.__name])
}
