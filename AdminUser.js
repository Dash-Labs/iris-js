function AdminUser(id, name, email, phoneNumber, companyName, imageUrl, location, vehicles, drivers, metadata) {
    Identifiable.call(this, id);
    MetadataContainer.call(this, metadata);
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.companyName = companyName;
    this.imageUrl = imageUrl;
    this.location = location;
    this.vehicles = vehicles;
    this.drivers = drivers;
}