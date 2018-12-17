function Identifiable(id) {
    this.id = id;
}

function MetadataContainer(metadata) {
    this.metadata = metadata;
}

function EndTimestamped(endDateTime) {
    this.endDateTime = endDateTime;
}

function Timestamped(dateTime) {
    this.dateTime = dateTime;
}

export function Metadata(id, name, value, type, enumerationValues, lowerBound, upperBound, unitType, unit) {
    Identifiable.call(this, id);
    this.name = name;
    this.value = value;
    this.type = type;
    this.enumerationValues = enumerationValues;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.unitType = unitType;
    this.unit = unit;
}

export function AdminUser(id, name, email, phoneNumber, companyName, imageUrl, location, vehicles, drivers, metadata) {
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

export function Driver(id, adminUserId, name, email, phoneNumber, imageUrl, metadata) {
    Identifiable.call(this, id);
    this.adminUserId = adminUserId;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.imageUrl = imageUrl;
    this.metadata = metadata;
}

export function Vehicle(id, adminUserId, defaultDriverId, vin, name, make, model, year, imageUrl,
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

function DriverInfo(driver, dateTime, endDateTime, score, scoreComponents, latest) {
    Timestamped.call(this, dateTime);
    EndTimestamped.call(this, endDateTime);
    this.driver = driver;
    this.score = score;
    this.scoreComponents = scoreComponents;
    this.latest = latest;
}

export function isDriverActivelyDriving(driverInfo) {
    return driverInfo.latest != null
}

function Location(id, dateTime, type, latitude, longitude, altitude, bearing,
                  accuracy, speed, speedUnit, address, addressLineTwo, locality,
                  state, postalCode, country, deviceTypeId, mapImageUrl,
                  successfullyMapImaged, mapImagedCount, successfullyReverseGeocoded, reverseGeocodingCount) {
    Identifiable.call(this, id);
    Timestamped.call(this, dateTime);
    this.type = type;
    this.latitude = latitude;
    this.longitude = longitude;
    this.altitude = altitude;
    this.bearing = bearing;
    this.accuracy = accuracy;
    this.speed = speed;
    this.speedUnit = speedUnit;
    this.address = address;
    this.addressLineTwo = addressLineTwo;
    this.locality = locality;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;
    this.deviceTypeId = deviceTypeId;
    this.mapImageUrl = mapImageUrl;
    this.successfullyMapImaged = successfullyMapImaged;
    this.mapImagedCount = mapImagedCount;
    this.successfullyReverseGeocoded = successfullyReverseGeocoded;
    this.reverseGeocodingCount = reverseGeocodingCount;
}

export function forUserUpdate(id, dateTime, address) {
    return new Location(id, dateTime, "User", null, null, null, null, null, null, null, address, null, null, null, null,
        null, String(null), null, null, null, null, null);
}

export function EnumDisplay(label, enumValue) {
    this.label = label;
    this.enumValue = enumValue;
}

function VehicleInfo(vehicle, dateTime, endDateTime, score, scoreComponents, latest, latestEngineLightAlert) {
    Timestamped.call(this, dateTime);
    EndTimestamped.call(this, endDateTime);
    this.vehicle = vehicle;
    this.score = score;
    this.scoreComponents = scoreComponents;
    this.latest = latest;
    this.latestEngineLightAlert = latestEngineLightAlert;
}

export function isVehicleActivelyDriving(vehicleInfo) {
    return (vehicleInfo.latest != null) && (vehicleInfo.latest.endDateTime == null);
}

export function isHealthy(vehicleInfo) {
    return (vehicleInfo.latestEngineLightAlert == null) || (vehicleInfo.latestEngineLightAlert.resolvedDateTime != null);
}