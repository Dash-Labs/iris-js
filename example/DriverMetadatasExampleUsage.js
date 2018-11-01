function getMetadata(driver) {

    // TimeZone
    /**
     * See {@link https://momentjs.com/timezone/} for more details
     */
    var timeZone = UserMetadatas.TimeZonePreference.get(driver);

    // Locale
    /**
     * See {@link https://momentjs.com/} for more details
     */
    var locale = UserMetadatas.LocalePreference.get(driver);

    // Distance preference
    var distance = UserMetadatas.DistancePreference.get(driver);
    var distanceName = distance.name;
    var distanceLabel = distance.label;
    var distanceAbbreviation = distance.abbreviation;
    var distanceDigitLabel = distance.digitLabel;

    // Fuel Efficiency preference
    var fuelEfficiency = UserMetadatas.FuelEfficiencyPreference.get(driver);
    var fuelEfficiencyName = fuelEfficiency.name;
    var fuelEfficiencyLabel = fuelEfficiency.label;
    var fuelEfficiencyAbbreviation = fuelEfficiency.abbreviation;
    var fuelEfficiencyDigitLabel = fuelEfficiency.digitLabel;

    // Speed preference
    var speed = UserMetadatas.SpeedPreference.get(driver);
    var speedName = speed.name;
    var speedLabel = speed.label;
    var speedAbbreviation = speed.abbreviation;
    var speedDigitLabel = speed.digitLabel;

    // Temperature preference
    var temperature = UserMetadatas.TemperaturePreference.get(driver);
    var temperatureName = temperature.name;
    var temperatureLabel = temperature.label;
    var temperatureAbbreviation = temperature.abbreviation;
    var temperatureDigitLabel = temperature.digitLabel;

    // Volume preference
    var volume = UserMetadatas.VolumePreference.get(driver);
    var volumeName = volume.name;
    var volumeLabel = volume.label;
    var volumeAbbreviation = volume.abbreviation;
    var volumeDigitLabel = volume.digitLabel;

    // Weight preference
    var weight = UserMetadatas.WeightPreference.get(driver);
    var weightName = weight.name;
    var weightLabel = weight.label;
    var weightAbbreviation = weight.abbreviation;
    var weightDigitLabel = weight.digitLabel;

    // Pressure preference
    var pressure = UserMetadatas.PressurePreference.get(driver);
    var pressureName = pressure.name;
    var pressureLabel = pressure.label;
    var pressureAbbreviation = pressure.abbreviation;
    var pressureDigitLabel = pressure.digitLabel;

    // Electricity preference
    var electricity = UserMetadatas.ElectricityPreference.get(driver);
    var electricityName = electricity.name;
    var electricityLabel = electricity.label;
    var electricityAbbreviation = electricity.abbreviation;
    var electricityDigitLabel = electricity.digitLabel;

    // Idling preference
    var idling = UserMetadatas.IdlingThresholdPreference.get(driver);

    // Speeding preference
    var speeding = UserMetadatas.SpeedingThresholdPreference.get(driver);

}

function getMetadataValuesForUpdate(driver) {

    // TimeZone - an enumeration type
    var timeZoneIds = moment.tz.names();

    // Locale - an enumeration type
    var locales = moment.locales();

    // Distance preference - an enumeration type
    var distance = UserMetadatas.DistancePreference.getMetadata(driver);
    var allowedValues = distance.enumerationValues;

    // Fuel Efficiency preference - an enumeration type
    var fuelEfficiency = UserMetadatas.FuelEfficiencyPreference.getMetadata(driver);
    var allowedValues = fuelEfficiency.enumerationValues;

    // Speed preference - an enumeration type
    var speed = UserMetadatas.SpeedPreference.getMetadata(driver);
    var allowedValues = speed.enumerationValues;

    // Temperature preference - an enumeration type
    var temperature = UserMetadatas.TemperaturePreference.getMetadata(driver);
    var allowedValues = temperature.enumerationValues;

    // Volume preference - an enumeration type
    var volume = UserMetadatas.VolumePreference.getMetadata(driver);
    var allowedValues = volume.enumerationValues;

    // Weight preference - an enumeration type
    var weight = UserMetadatas.WeightPreference.getMetadata(driver);
    var allowedValues = weight.enumerationValues;

    // Pressure preference - an enumeration type
    var pressure = UserMetadatas.PressurePreference.getMetadata(driver);
    var allowedValues = pressure.enumerationValues;

    // Electricity preference - an enumeration type
    var electricity = UserMetadatas.ElectricityPreference.getMetadata(driver);
    var allowedValues = pressure.enumerationValues;

    // Idling - any number type
    var idlingMetadata = UserMetadatas.IdlingThresholdPreference.getMetadata(driver);
    // lowest number allowed
    var lowest = idlingMetadata.lowerBound;
    // highest number allowed
    var highest = idlingMetadata.upperBound;

    // Speeding - any number type
    var speedingMetadata = UserMetadatas.SpeedingThresholdPreference.getMetadata(driver);
    // lowest number allowed
    var lowest = speedingMetadata.lowerBound;
    // highest number allowed
    var highest = speedingMetadata.upperBound;
}

function createDriverForUpdate(existingDriver, name, email, phoneNumber, timeZone,
                               locale, distancePreference, fuelEfficiencyPreference, speedPreference,
                               temperaturePreference, volumePreference, weightPreference,
                               pressurePreference, electricityPreference, idlingThreshold, idlingUnit,
                               speedingThreshold, speedingUnit) {
    var builder = new DriverUpdateBuilder(existingDriver);

    if ((name != null) && (name !== existingDriver.name)) {
        builder.withName(name);
    }

    if ((email != null) && (email !== existingDriver.email)) {
        builder.withEmail(email);
    }

    if ((phoneNumber != null) && (phoneNumber !== existingDriver.phoneNumber)) {
        builder.withPhoneNumber(phoneNumber);
    }

    if (timeZone != null) {
        builder.withTimeZonePreference(timeZone);
    }

    if (locale != null) {
        builder.withLocalePreference(locale);
    }

    if (distancePreference != null) {
        builder.withDistancePreference(distancePreference);
    }

    if (fuelEfficiencyPreference != null) {
        builder.withFuelEfficiencyPreference(fuelEfficiencyPreference);
    }

    if (speedPreference != null) {
        builder.withSpeedPreference(speedPreference);
    }

    if (temperaturePreference != null) {
        builder.withTemperaturePreference(temperaturePreference);
    }

    if (volumePreference != null) {
        builder.withVolumePreference(volumePreference);
    }

    if (weightPreference != null) {
        builder.withWeightPreference(weightPreference);
    }

    if (pressurePreference != null) {
        builder.withPressurePreference(pressurePreference);
    }

    if (electricityPreference != null) {
        builder.withElectricityPreference(electricityPreference);
    }

    if (idlingThreshold != null) {
        builder.withIdlingThresholdPreference(idlingThreshold, idlingUnit);
    }

    if (speedingThreshold != null) {
        builder.withSpeedingThresholdPreference(speedingThreshold, speedingUnit);
    }

    return builder.buildUpdate();

}