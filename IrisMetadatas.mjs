import { AbstractEnumMetadataBuilder, AbstractDoubleMetadataBuilder, AbstractBooleanMetadataBuilder, AbstractMetadataBuilder } from "./IrisBuilders";
import { getUnitObject } from "./IrisUnits"

export var UserMetadatas = {
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
    UtilizationTargetPerDayPreference: new AbstractDoubleMetadataBuilder("UtilizationTargetPerDayPreference", "Time",
        function getUpperBound(unit) {
	    return getUnitObject(unit).convert(24, "Hours");
	},
	function getLowerBound(unit) {
	    return getUnitObject(unit).convert(1, "Hours");
	}
	function getDefault(unit) {
	    return getUnitObject(unit).convert(8, "Hours");
	},
	function getDecimalsForDisplay() {
            return 0;
        }),
    IdlingThresholdPreference: new AbstractDoubleMetadataBuilder("IdlingThresholdPreference", "Speed",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(20, "MilesPerHour");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(1, "MilesPerHour");
        },
        function getDefault(unit) {
            return getUnitObject(unit).convert(4, "MilesPerHour");
        },
        function getDecimalsForDisplay() {
            return 0;
        }),
    SpeedingThresholdPreference: new AbstractDoubleMetadataBuilder("SpeedingThresholdPreference", "Speed",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(150, "MilesPerHour");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(50, "MilesPerHour");
        },
        function getDefault(unit) {
            return getUnitObject(unit).convert(80, "MilesPerHour");
        },
        function getDecimalsForDisplay() {
            return 0;
        }),
    LowFuelThresholdPreference: new AbstractDoubleMetadataBuilder("LowFuelThresholdPreference", "None",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(99, "None");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(1, "None");
        },
        function getDefault(unit) {
            return 20;
        },
        function getDecimalsForDisplay() {
            return 0;
        }),
    LongDriveTimeThresholdPreference: new AbstractDoubleMetadataBuilder("LongDriveTimeThresholdPreference", "Time",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(8, "Hours");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(1, "Minutes");
        },
        function getDefault(unit) {
            return getUnitObject(unit).convert(2, "Hours");
        },
        function getDecimalsForDisplay() {
            return 0;
        }),
    NightDriveTimeThresholdPreference: new AbstractDoubleMetadataBuilder("NightDriveTimeThresholdPreference", "Time",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(6, "Hours");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(1, "Minutes");
        },
        function getDefault(unit) {
            return getUnitObject(unit).convert(1, "Hours");
        },
        function getDecimalsForDisplay() {
            return 0;
        }),
    AmbientTemperatureThresholdPreference: new AbstractDoubleMetadataBuilder("AmbientTemperatureThresholdPreference", "Time",
        function getUpperBound(unit) {
            return getUnitObject(unit).convert(150, "Fahrenheit");
        },
        function getLowerBound(unit) {
            return getUnitObject(unit).convert(-100, "Fahrenheit");
        },
        function getDefault(unit) {
            return getUnitObject(unit).convert(31, "Fahrenheit");
        },
        function getDecimalsForDisplay() {
            return 0;
        }),
    MigrationInProgress: new AbstractBooleanMetadataBuilder("MigrationInProgress", "None",
        function getDefault(unit) {
            return false;
        }),
    MigrationOfDrivesInProgress: new AbstractBooleanMetadataBuilder("MigrationOfDrivesInProgress", "None",
        function getDefault(unit) {
            return false;
        }),	
    SubscriptionActive: new AbstractBooleanMetadataBuilder("SubscriptionActive", "None",
        function getDefault(unit) {
            return false;
        })
};

export var VehicleMetadatas = {
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
            return getUnitObject(unit).convert(500, "USGallons");
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
            return getUnitObject(unit).convert(20, "Liters");
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
            return getUnitObject(unit).convert(100000, "Pounds");
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

Object.freeze(UserMetadatas);

Object.freeze(VehicleMetadatas);