function VehicleInfo(vehicle, dateTime, endDateTime, score, scoreComponents, latest, latestEngineLightAlert) {
    Timestamped.call(this, dateTime);
    EndTimestamped.call(this, endDateTime);
    this.vehicle = vehicle;
    this.score = score;
    this.scoreComponents = scoreComponents;
    this.latest = latest;
    this.latestEngineLightAlert = latestEngineLightAlert;
}

function isActivelyDriving(vehicleInfo) {
    return (vehicleInfo.latest != null) && (vehicleInfo.latest.endDateTime == null);
}

function isHealthy(vehicleInfo) {
    return (vehicleInfo.latestEngineLightAlert == null) || (vehicleInfo.latestEngineLightAlert.resolvedDateTime != null);
}