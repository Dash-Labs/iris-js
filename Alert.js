function Alert(id, dateTime, type, driverId, vehicleId, title, description, location, dtcs, resolvedDateTime) {
    Identifiable.call(this, id);
    Timestamped.call(this, dateTime);
    this.type = type;
    this.driverId = driverId;
    this.vehicleId = vehicleId;
    this.title = title;
    this.description = description;
    this.location = location;
    this.dtcs = dtcs;
    this.resolvedDateTime = resolvedDateTime;
}