function DriverInfo(driver, dateTime, endDateTime, score, scoreComponents, latest) {
    Timestamped.call(this, dateTime);
    EndTimestamped.call(this, endDateTime)
    this.driver = driver;
    this.score = score;
    this.scoreComponents = scoreComponents;
    this.latest = latest;
}

function isActivelyDriving(driverInfo) {
    return driverInfo.latest != null
}