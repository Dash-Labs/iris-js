var VehicleMetadatas = {
    Odometer: new AbstractDoubleMetadataBuilder("Odometer", "Distance",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(5000000, "Miles");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(0, "Miles");
        },
        function getDefault(unit) {
            return unit == null ? 0 : getUnitObject(unit).convert(0, "Miles");
        }),
    TankSize: new AbstractDoubleMetadataBuilder("TankSize", "Volume",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(50, "USGallons");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(0, "USGallons");
        },
        function getDefault(unit) {
            return unit == null ? 13 : getUnitObject(unit).convert(13, "USGallons");
        }),
    FuelType: new AbstractEnumMetadataBuilder("FuelType", "Fuel", "None",
        function getDefault(unit) {
            return "Regular";
        }),
    EngineDisplacement: new AbstractDoubleMetadataBuilder("EngineDisplacement", "Volume",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(10, "Liters");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(0, "Liters");
        },
        function getDefault(unit) {
            return unit == null ? 1.2 : getUnitObject(unit).convert(1.2, "Liters");
        }),
    CityFuelEfficiency: new AbstractDoubleMetadataBuilder("CityFuelEfficiency", "FuelEfficiency",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(250, "MilesPerUSGallon");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(0, "MilesPerUSGallon");
        },
        function getDefault(unit) {
            return unit == null ? 22 : getUnitObject(unit).convert(22, "MilesPerUSGallon");
        }),
    HighwayFuelEfficiency: new AbstractDoubleMetadataBuilder("HighwayFuelEfficiency", "FuelEfficiency",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(250, "MilesPerUSGallon");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(0, "MilesPerUSGallon");
        },
        function getDefault(unit) {
            return unit == null ? 26 : getUnitObject(unit).convert(26, "MilesPerUSGallon");
        }),
    Weight: new AbstractDoubleMetadataBuilder("Weight", "Weight",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(20000, "Pounds");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(0, "Pounds");
        },
        function getDefault(unit) {
            return unit == null ? 4000 : getUnitObject(unit).convert(4000, "Pounds");
        }),
    EngineCylinders: new AbstractDoubleMetadataBuilder("EngineCylinders", "None",
        function getUpperBound(unit) {
            return 24;
        },
        function getLowerBound(unit) {
            return 0;
        },
        function getDefault(unit) {
            return 4;
        }),
    BatteryCapacity: new AbstractDoubleMetadataBuilder("BatteryCapacity", "Electricity",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(210, "AmpHour");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(0, "AmpHour");
        },
        function getDefault(unit) {
            return unit == null ? 70 : getUnitObject(unit).convert(70, "AmpHour");
        }),
    StartStop: new AbstractBooleanMetadataBuilder("StartStop", "None",
        function getDefault(unit) {
            return false;
        }),
    BatteryGroupSize: new AbstractEnumMetadataBuilder("BatteryGroupSize", "BatteryGroupSize", "None",
        function getDefault(unit) {
            return "BCI_24";
        }),
    BatteryColdCrankingAmps: new AbstractDoubleMetadataBuilder("BatteryColdCrankingAmps", "None",
        function getUpperBound(unit) {
            return 1500;
        },
        function getLowerBound(unit) {
            return 0;
        },
        function getDefault(unit) {
            return 600;
        }),
    HorsePower: new AbstractDoubleMetadataBuilder("HorsePower", "None",
        function getUpperBound(unit) {
            return 1000;
        },
        function getLowerBound(unit) {
            return 0;
        },
        function getDefault(unit) {
            return 120;
        }),
    OilType: new AbstractEnumMetadataBuilder("OilType", "Oil", "None",
        function getDefault(unit) {
            return "Standard";
        }),
    LicensePlate: new AbstractMetadataBuilder("LicensePlate", "Text", "None",
        function convertToExpected(value, unit) {
            return value;
        },
        function getDefault(unit) {
            return "";
        })
};

Object.freeze(VehicleMetadatas);