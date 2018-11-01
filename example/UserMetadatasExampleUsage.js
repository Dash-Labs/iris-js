function getMetadata(adminUser) {

    // TimeZone
    var timeZone = UserMetadatas.TimeZonePreference.get(adminUser);

    // Locale
    var locale = UserMetadatas.LocalePreference.get(adminUser);

    // Distance preference
    var distance = UserMetadatas.DistancePreference.get(adminUser);
    var distanceName = distance.name;
    var distanceLabel = distance.label;
    var distanceAbbreviation = distance.abbreviation;
    var distanceDigitLabel = distance.digitLabel;

    // Fuel Efficiency preference
    var fuelEfficiency = UserMetadatas.FuelEfficiencyPreference.get(adminUser);
    var fuelEfficiencyName = fuelEfficiency.name;
    var fuelEfficiencyLabel = fuelEfficiency.label;
    var fuelEfficiencyAbbreviation = fuelEfficiency.abbreviation;
    var fuelEfficiencyDigitLabel = fuelEfficiency.digitLabel;

    // Speed preference
    var speed = UserMetadatas.SpeedPreference.get(adminUser);
    var speedName = speed.name;
    var speedLabel = speed.label;
    var speedAbbreviation = speed.abbreviation;
    var speedDigitLabel = speed.digitLabel;

    // Temperature preference
    var temperature = UserMetadatas.TemperaturePreference.get(adminUser);
    var temperatureName = temperature.name;
    var temperatureLabel = temperature.label;
    var temperatureAbbreviation = temperature.abbreviation;
    var temperatureDigitLabel = temperature.digitLabel;

    // Volume preference
    var volume = UserMetadatas.VolumePreference.get(adminUser);
    var volumeName = volume.name;
    var volumeLabel = volume.label;
    var volumeAbbreviation = volume.abbreviation;
    var volumeDigitLabel = volume.digitLabel;

    // Weight preference
    var weight = UserMetadatas.WeightPreference.get(adminUser);
    var weightName = weight.name;
    var weightLabel = weight.label;
    var weightAbbreviation = weight.abbreviation;
    var weightDigitLabel = weight.digitLabel;

    // Pressure preference
    var pressure = UserMetadatas.PressurePreference.get(adminUser);
    var pressureName = pressure.name;
    var pressureLabel = pressure.label;
    var pressureAbbreviation = pressure.abbreviation;
    var pressureDigitLabel = pressure.digitLabel;

    // Electricity preference
    var electricity = UserMetadatas.ElectricityPreference.get(adminUser);
    var electricityName = electricity.name;
    var electricityLabel = electricity.label;
    var electricityAbbreviation = electricity.abbreviation;
    var electricityDigitLabel = electricity.digitLabel;

    // Idling preference
    var idling = UserMetadatas.IdlingThresholdPreference.get(adminUser);

    // Speeding preference
    var speeding = UserMetadatas.SpeedingThresholdPreference.get(adminUser);

}

function getMetadataValuesForUpdate(adminUser) {

    // TimeZone - an enumeration type
    /**
     * See {@link https://momentjs.com/timezone/} for more details
     */
    var timeZoneIds = moment.tz.names();

    // Locale - an enumeration type
    /**
     * See {@link https://momentjs.com/} for more details
     */
    var locales = moment.locales();

    // Distance preference - an enumeration type
    var distance = UserMetadatas.DistancePreference.getMetadata(adminUser);
    var allowedValues = distance.enumerationValues;

    // Fuel Efficiency preference - an enumeration type
    var fuelEfficiency = UserMetadatas.FuelEfficiencyPreference.getMetadata(adminUser);
    var allowedValues = fuelEfficiency.enumerationValues;

    // Speed preference - an enumeration type
    var speed = UserMetadatas.SpeedPreference.getMetadata(adminUser);
    var allowedValues = speed.enumerationValues;

    // Temperature preference - an enumeration type
    var temperature = UserMetadatas.TemperaturePreference.getMetadata(adminUser);
    var allowedValues = temperature.enumerationValues;

    // Volume preference - an enumeration type
    var volume = UserMetadatas.VolumePreference.getMetadata(adminUser);
    var allowedValues = volume.enumerationValues;

    // Weight preference - an enumeration type
    var weight = UserMetadatas.WeightPreference.getMetadata(adminUser);
    var allowedValues = weight.enumerationValues;

    // Pressure preference - an enumeration type
    var pressure = UserMetadatas.PressurePreference.getMetadata(adminUser);
    var allowedValues = pressure.enumerationValues;

    // Electricity preference - an enumeration type
    var electricity = UserMetadatas.ElectricityPreference.getMetadata(adminUser);
    var allowedValues = pressure.enumerationValues;

    // Idling - any number type
    var idlingMetadata = UserMetadatas.IdlingThresholdPreference.getMetadata(adminUser);
    // lowest number allowed
    var lowest = idlingMetadata.lowerBound;
    // highest number allowed
    var highest = idlingMetadata.upperBound;

    // Speeding - any number type
    var speedingMetadata = UserMetadatas.SpeedingThresholdPreference.getMetadata(adminUser);
    // lowest number allowed
    var lowest = speedingMetadata.lowerBound;
    // highest number allowed
    var highest = speedingMetadata.upperBound;
}

function createAdminUserForUpdate(existingAdminUser, name, companyName, phoneNumber, address, timeZone,
                                  locale, distancePreference, fuelEfficiencyPreference, speedPreference,
                                  temperaturePreference, volumePreference, weightPreference, pressurePreference,
                                  electricityPreference, idlingThreshold, idlingUnit, speedingThreshold, speedingUnit) {
    var builder = new AdminUserUpdateBuilder(existingAdminUser.id);

    if ((name != null) && (name !== existingAdminUser.name)) {
        builder.withName(name);
    }

    if ((companyName != null) && (companyName !== existingAdminUser.companyName)) {
        builder.withCompanyName(companyName);
    }

    if ((phoneNumber != null) && (phoneNumber !== existingAdminUser.phoneNumber)) {
        builder.withPhoneNumber(phoneNumber);
    }

    if ((address != null) && ((existingAdminUser.location == null) || (address !== existingAdminUser.location.address))) {
        builder.withAddress(address);
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