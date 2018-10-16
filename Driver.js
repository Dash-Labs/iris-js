function Driver(id, adminUserId, name, email, phoneNumber, imageUrl, metadata) {
    Identifiable.call(this, id);
    this.adminUserId = adminUserId;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.imageUrl = imageUrl;
    this.metadata = metadata;
}