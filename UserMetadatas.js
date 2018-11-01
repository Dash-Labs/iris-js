var UserMetadatas = {
    DistancePreference: new AbstractEnumMetadataBuilder("DistancePreference", "Distance", "None",
        function getDefault(unit) {
            return "Miles";
        }),
    TemperaturePreference: new AbstractEnumMetadataBuilder("TemperaturePreference", "Temperature", "None",
        function getDefault(unit) {
            return "Fahrenheit";
        }),
    VolumePreference: new AbstractEnumMetadataBuilder("VolumePreference", "Volume", "None",
        function getDefault(unit) {
            return "USGallons";
        }),
    PressurePreference: new AbstractEnumMetadataBuilder("PressurePreference", "Pressure", "None",
        function getDefault(unit) {
            return "PoundsPerSquareInch";
        }),
    PressurePreference: new AbstractEnumMetadataBuilder("PressurePreference", "Pressure", "None",
        function getDefault(unit) {
            return "PoundsPerSquareInch";
        }),
    WeightPreference: new AbstractEnumMetadataBuilder("WeightPreference", "Weight", "None",
        function getDefault(unit) {
            return "Pounds";
        }),
    ElectricityPreference: new AbstractEnumMetadataBuilder("ElectricityPreference", "Electricity", "None",
        function getDefault(unit) {
            return "AmpHour";
        }),
    FuelEfficiencyPreference: new AbstractEnumMetadataBuilder("FuelEfficiencyPreference", "FuelEfficiency", "None",
        function getDefault(unit) {
            return "MilesPerUSGallon";
        }),
    SpeedPreference: new AbstractEnumMetadataBuilder("SpeedPreference", "Speed", "None",
        function getDefault(unit) {
            return "MilesPerHour";
        }),
    TimeZonePreference: new AbstractMetadataBuilder("TimeZonePreference", "Text", "None",
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                return value;
            } else {
                return this.getDefault(unit);
            }
        },
        function getDefault(unit) {
            return "America/New_York";
        }),
    LocalePreference: new AbstractMetadataBuilder("LocalePreference", "Text", "None",
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                return value;
            } else {
                return this.getDefault(unit);
            }
        },
        function getDefault(unit) {
            return "en_US";
        }),
    IdlingThresholdPreference: new AbstractDoubleMetadataBuilder("IdlingThresholdPreference", "Speed",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(20, "MilesPerHour");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(1, "MilesPerHour");
        },
        function getDefault(unit) {
            return 4;
        }),
    SpeedingThresholdPreference: new AbstractDoubleMetadataBuilder("SpeedingThresholdPreference", "Speed",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(150, "MilesPerHour");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(50, "MilesPerHour");
        },
        function getDefault(unit) {
            return 80;
        })
};

Object.freeze(UserMetadatas);