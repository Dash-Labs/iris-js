import {UserMetadatas} from "./IrisMetadatas";
import {High, Medium, Low, No} from "./IrisMaintenance";
import {getUnitObject} from "./IrisUnits";

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

export function Metadata(id, name, value, displayValue, type, enumerationValues, lowerBound, upperBound, unitType, unit) {
    Identifiable.call(this, id);
    this.name = name;
    this.value = value;
    this.displayValue = displayValue;
    this.type = type;
    this.enumerationValues = enumerationValues;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.unitType = unitType;
    this.unit = unit;
}

export function AdminUser(id, name, email, phoneNumber, companyName, imageUrl, location, vehicles, drivers, linkedAccounts, metadata) {
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
    this.linkedAccounts = linkedAccounts;
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

export function Drive(id, adminUserId, vehicleId, driverId, dateTime, endDateTime, startTimeZoneId, endTimeZoneId,
                      startLocation, endLocation, startLocationTag, endLocationTag, startWeather, endWeather,
                      minimumBatteryVoltageAtStart, startFuelPercentage, endFuelPercentage, distanceDriven,
                      distanceUnit, averageSpeed, speedUnit, averageFuelEfficiency, fuelEfficiencyUnit, fuelEfficiencyEstimated,
                      totalFuelConsumed, fuelConsumedUnit, idlingDuration, speedingDuration, computedIdlingSpeedingDateTime, scores, alerts) {
    Identifiable.call(this, id);
    Timestamped.call(this, dateTime);
    EndTimestamped.call(this, endDateTime);
    this.adminUserId = adminUserId;
    this.vehicleId = vehicleId;
    this.driverId = driverId;
    this.startTimeZoneId = startTimeZoneId;
    this.endTimeZoneId = endTimeZoneId;
    this.startLocation = startLocation;
    this.endLocation = endLocation;
    this.startLocationTag = startLocationTag;
    this.endLocationTag = endLocationTag;
    this.startWeather = startWeather;
    this.endWeather = endWeather;
    this.minimumBatteryVoltageAtStart= minimumBatteryVoltageAtStart;
    this.startFuelPercentage= startFuelPercentage;
    this.endFuelPercentage = endFuelPercentage;
    this.distanceDriven = distanceDriven;
    this.distanceUnit = distanceUnit;
    this.averageSpeed = averageSpeed;
    this.speedUnit = speedUnit;
    this.averageFuelEfficiency = averageFuelEfficiency;
    this.fuelEfficiencyUnit = fuelEfficiencyUnit;
    this.fuelEfficiencyEstimated = fuelEfficiencyEstimated;
    this.totalFuelConsumed = totalFuelConsumed;
    this.fuelConsumedUnit = fuelConsumedUnit;
    this.idlingDuration = idlingDuration;
    this.speedingDuration = speedingDuration;
    this.computedIdlingSpeedingDateTime = computedIdlingSpeedingDateTime;
    this.scores = scores;
    this.alerts = alerts;
    this.getStartDateFormatted = function getStartDateFormatted() {
        return this.getStartDateFormattedWithUser(null);
    };
    this.getStartDateFormattedWithUser = function getStartDateFormattedWithUser(user) {
        return this.getDateFormatted(user, dateTime, startTimeZoneId);
    };
    this.getEndDateFormatted = function getEndDateFormatted() {
        return this.getEndDateFormattedWithUser(null);
    };
    this.getEndDateFormattedWithUser = function getEndDateFormattedWithUser(user) {
        return this.getDateFormatted(user, endDateTime, endTimeZoneId);
    };
    this.getDateFormatted = function getDateFormatted(user, dateTime, timeZoneId) {
        if (dateTime == null) {
            return "";
        }
        var userTimeZone = user == null ? moment.tz.guess() : UserMetadatas.TimeZonePreference().getOrDefault(user, "Instance");
        var driveTimeZone = timeZoneId == null ? userTimeZone : timeZoneId;
        var formatPattern = "MM/DD/YY";
        return moment.tz(dateTime, driveTimeZone).format(formatPattern);
    };
    this.getStartTimeFormatted = function getStartTimeFormatted() {
        return this.getStartTimeFormattedWithUser(null);
    };
    this.getStartTimeFormattedWithUser = function getStartTimeFormattedWithUser(user) {
        return this.getTimeFormatted(user, dateTime, startTimeZoneId);
    };
    this.getEndTimeFormatted = function getEndTimeFormatted() {
        return this.getEndTimeFormattedWithUser(null);
    };
    this.getEndTimeFormattedWithUser = function getEndTimeFormattedWithUser(user) {
        return this.getTimeFormatted(user, endDateTime, endTimeZoneId);
    };
    this.getTimeFormatted = function getTimeFormatted(user, dateTime, timeZoneId) {
        if (dateTime == null) {
            return "";
        }
        var userTimeZone = user == null ? moment.tz.guess() : UserMetadatas.TimeZonePreference().getOrDefault(user, "Instance");
        var driveTimeZone = timeZoneId == null ? userTimeZone : timeZoneId;
        var formatPattern = userTimeZone == driveTimeZone ?  "h:mm a" : "h:mm a Z";
        return moment.tz(dateTime, driveTimeZone).format(formatPattern);
    };
}

function DriverInfo(driver, dateTime, endDateTime, score, scoreComponents, latest, lastKnownLocation) {
    Timestamped.call(this, dateTime);
    EndTimestamped.call(this, endDateTime);
    this.driver = driver;
    this.score = score;
    this.scoreComponents = scoreComponents;
    this.latest = latest;
    this.lastKnownLocation = lastKnownLocation;
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

function VehicleInfo(vehicle, dateTime, endDateTime, score, scoreComponents, latest, latestEngineLightAlert, lastKnownLocation) {
    Timestamped.call(this, dateTime);
    EndTimestamped.call(this, endDateTime);
    this.vehicle = vehicle;
    this.score = score;
    this.scoreComponents = scoreComponents;
    this.latest = latest;
    this.latestEngineLightAlert = latestEngineLightAlert;
    this.lastKnownLocation = lastKnownLocation;
}

export function isVehicleActivelyDriving(vehicleInfo) {
    return (vehicleInfo.latest != null) && (vehicleInfo.latest.endDateTime == null);
}

export function isHealthy(vehicleInfo) {
    return (vehicleInfo.latestEngineLightAlert == null) || (vehicleInfo.latestEngineLightAlert.resolvedDateTime != null);
}

function Maintenance(id, vehicleId, type, dateTime, dueDate, highUrgencyDays, mediumUrgencyDays, lowUrgencyDays, title, notes, iconImageUrl,
                     iconHighlightImageUrl, estimatedCost, estimatedCostCurrencyCode, actualCost, actualCostCurrencyCode, serviceDateTime,
                     maintenanceProvider, serviceNotes) {
    this.id = id;
    this.vehicleId = vehicleId;
    this.type = type;
    this.dateTime = dateTime;
    this.dueDate = dueDate;
    this.highUrgencyDays = highUrgencyDays;
    this.mediumUrgencyDays = mediumUrgencyDays;
    this.lowUrgencyDays = lowUrgencyDays;
    this.title = title;
    this.notes = notes;
    this.iconImageUrl = iconImageUrl;
    this.iconHighlightImageUrl = iconHighlightImageUrl;
    this.estimatedCost = estimatedCost;
    this.estimatedCostCurrencyCode = estimatedCostCurrencyCode;
    this.actualCost = actualCost;
    this.actualCostCurrencyCode = actualCostCurrencyCode;
    this.serviceDateTime = serviceDateTime;
    this.maintenanceProvider = maintenanceProvider;
    this.serviceNotes = serviceNotes;
    this.getUrgency = function getUrgency() {
        return this.getUrgencyWithTime(Date.now())
    };
    this.getUrgencyWithTime = function getUrgencyWithTime(from) {
        if (dueDate == null || highUrgencyDays == null || mediumUrgencyDays == null || lowUrgencyDays == null) {
            return null;
        }
        var days = Math.round((from - dueDate) / 86400000);
        if (days >= highUrgencyDays) {
            return High;
        } else if (days >= mediumUrgencyDays) {
            return Medium;
        } else if (days >= lowUrgencyDays) {
            return Low;
        }
        return No;
    };
}

function MaintenanceDuration(distancePerMaintenance, distanceUnit, millisecondsPerMaintenance, absoluteDueDate) {
    this.distancePerMaintenance = distancePerMaintenance;
    this.distanceUnit = distanceUnit;
    this.millisecondsPerMaintenance = millisecondsPerMaintenance;
    this.absoluteDueDate = absoluteDueDate;
}

export function fromDistance(distancePerMaintenance, user) {
    var unit = UserMetadatas.DistancePreference.getOrDefault(user);
    return new MaintenanceDuration(distancePerMaintenance, unit, null, null);
}

export function fromDuration(millisecondsPerMaintenance) {
    return new MaintenanceDuration(null, null, millisecondsPerMaintenance, null);
}

export function fromAbsoluteDueDate(absoluteDueDate) {
    return new MaintenanceDuration(null, null, null, absoluteDueDate);
}