function Vehicle(id, adminUserId, defaultDriverId, vin, name, make, model, year, imageUrl,
    stockImageUrl, makeLogoImageUrl, metadata, vinDecoded) {
    Identifiable.call(this, id);
    MetadataContainer.call(this, metadata);
    this.adminUserId = adminUserId;
    this.defaultDriverId = defaultDriverId;
    this.vin = vin;
    this.name = name;
    this.make = make;
    this.model = model;
    this.year = year;
    this.imageUrl = imageUrl;
    this.stockImageUrl = stockImageUrl;
    this.makeLogoImageUrl = makeLogoImageUrl;
    this.vinDecoded = vinDecoded;
}