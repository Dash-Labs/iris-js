import { Type, getUnitObject, getEnumerationValues, validateNumber, validateBoolean} from "./IrisUnits"
import { Metadata, AdminUser, Vehicle, Driver, EnumDisplay, forUserUpdate} from "./IrisObjects"
import { UserMetadatas, VehicleMetadatas } from "./IrisMetadatas"

function MetadataBuilder(getMetadata, get, getOrDefault, getDefault, build) {
    this.getMetadata = getMetadata;
    this.get = get;
    this.getOrDefault = getOrDefault;
    this.getDefault = getDefault;
    this.build = build;
}

export function AbstractMetadataBuilder(name, metadataType, unitType, convertToExpected, getDefault) {
    MetadataBuilder.call(this,
        function getMetadata(container) {
            if (container == null || container.metadata == null || container.metadata.length === 0) {
                return null;
            }
            for (var i = 0; i < container.metadata.length; i++) {
                var element = container.metadata[i];
                if (element != null && name != null && name === element.name) {
                    return element;
                }
            }
        },
        function get(container) {
            var element = this.getMetadata(container);
            return element == null ? null : convertToExpected(element.value, element.unit);
        },
        function getOrDefault(container, unit) {
            var value = this.get(container);
            return (value == null) ? this.getDefault(unit) : value;
        },
        getDefault,
        function build(id, value, unit) {
            if (id == null || id.length === 0) {
                throw new Error("id cannot be null or empty");
            }
            return new Metadata(id + "::" + name, name, value, this.valueToDisplayString(value), this.getType(), this.getEnumerationValues(), this.getLowerBound(unit),
                this.getUpperBound(unit), this.getUnitType(), unit);
        });
    this.name = name;
    this.metadatType = metadataType;
    this.getDisplay = function getDisplay() {
        return getDisplayName(name);
    };
    this.convertToExpected = convertToExpected;
    this.valueToDisplayString = function valueToDisplayString(value) {
        return value;
    };
    this.getType = function() {
        return metadataType;
    };
    this.getEnumerationValues = function getEnumerationValues() {
        return null;
    };
    this.getEnumerationDisplayValues = function getEnumerationDisplayValues() {
        return null;
    };
    this.getUpperBound = function getUpperBound(unit) {
        return null;
    };
    this.getLowerBound = function getLowerBound(unit) {
        return null;
    };
    this.getUnitType = function getUnitType() {
        return unitType;
    };
}

export function AbstractBooleanMetadataBuilder(name, unitType, getDefault) {
    AbstractMetadataBuilder.call(this, name, "Boolean", unitType,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                validateBoolean(value);
                return value;
            } else {
                return getDefault(unit);
            }
        }, getDefault);
}

export function AbstractDoubleMetadataBuilder(name, unitType, getUpperBound, getLowerBound, getDefault, getDecimalsForDisplay) {
    AbstractMetadataBuilder.call(this, name, "Number", unitType,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                validateNumber(value);
                return value;
            } else {
                return getDefault(unit);
            }
        }, getDefault);
    this.valueToDisplayString = function valueToDisplayString(value) {
        if (value != null && value.length !== 0) {
            validateNumber(value);
            return parseFloat(value).toFixed(getDecimalsForDisplay());
        } else {
            return "";
        }
    };
    this.getUpperBound = getUpperBound;
    this.getLowerBound = getLowerBound;
}

export function AbstractEnumMetadataBuilder(name, enumType, unitType, getDefault) {
    AbstractMetadataBuilder.call(this, name, "Enumeration", unitType,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                return getUnitObject(value, enumType);
            } else {
                return getUnitObject(getDefault(unit), enumType);
            }
        }, getDefault);
    this.enumType = enumType;
    this.getEnumerationValues = function() {
        return getEnumerationValues(enumType);
    };
    this.getEnumerationDisplayValues = function() {
        var enumDisplays = [];
        var enumValues = getEnumerationValues(enumType);
        for (var enumValue in enumValues) {
            var unitObject = getUnitObject(enumValue, enumType);
            var label = unitObject.name;
            if (unitObject instanceof Type) {
                label = unitObject.label;
            }
            enumDisplays.push(new EnumDisplay(label, enumValue));
        }
        return enumDisplays;
    };
}

export function AdminUserUpdateBuilder(id) {
    if (id == null || id.length === 0) {
        throw new Error("id can not be null or empty");
    }
    this.id = id;
    this.name = null;
    this.phoneNumber = null;
    this.companyName = null;
    this.address = null;
    this.distancePreference = null;
    this.temperaturePreference = null;
    this.volumePreference = null;
    this.pressurePreference = null;
    this.weightPreference = null;
    this.electricityPreference = null;
    this.fuelEfficiencyPreference = null;
    this.speedPreference = null;
    this.timeZonePreference = null;
    this.localePreference = null;
    this.idlingThresholdPreference = null;
    this.speedingThresholdPreference = null;
    this.withName = function(name) {
        this.name = name;
        return this;
    };
    this.withPhoneNumber = function(phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    };
    this.withCompanyName = function(companyName) {
        this.companyName = companyName;
        return this;
    };
    this.withAddress = function(address) {
        this.address = address;
        return this;
    };
    this.withDistancePreference = function(distancePreference) {
        this.distancePreference = UserMetadatas.DistancePreference.build(id, distancePreference, "None");
        return this;
    };
    this.withTemperaturePreference = function(temperaturePreference) {
        this.temperaturePreference = UserMetadatas.TemperaturePreference.build(id, temperaturePreference, "None");
        return this;
    };
    this.withVolumePreference = function(volumePreference) {
        this.volumePreference = UserMetadatas.VolumePreference.build(id, volumePreference, "None");
        return this;
    };
    this.withPressurePreference = function(pressurePreference) {
        this.pressurePreference = UserMetadatas.PressurePreference.build(id, pressurePreference, "None");
        return this;
    };
    this.withWeightPreference = function(weightPreference) {
        this.weightPreference = UserMetadatas.WeightPreference.build(id, weightPreference, "None");
        return this;
    };
    this.withElectricityPreference = function(electricityPreference) {
        this.electricityPreference = UserMetadatas.ElectricityPreference.build(id, electricityPreference, "None");
        return this;
    };
    this.withFuelEfficiencyPreference = function(fuelEfficiencyPreference) {
        this.fuelEfficiencyPreference = UserMetadatas.FuelEfficiencyPreference.build(id, fuelEfficiencyPreference, "None");
        return this;
    };
    this.withSpeedPreference = function(speedPreference) {
        this.speedPreference = UserMetadatas.SpeedPreference.build(id, speedPreference, "None");
        return this;
    };
    this.withTimeZonePreference = function(timeZone) {
        this.timeZonePreference = UserMetadatas.TimeZonePreference.build(id, timeZone, "None");
        return this;
    };
    this.withLocalePreference = function(locale) {
        this.localePreference = UserMetadatas.LocalePreference.build(id, locale, "None");
        return this;
    };
    this.withIdlingThresholdPreference = function(idlingThresholdPreference, idlingUnit) {
        this.idlingThresholdPreference = UserMetadatas.IdlingThresholdPreference.build(id, idlingThresholdPreference, idlingUnit);
        return this;
    };
    this.withSpeedingThresholdPreference = function(speedingThresholdPreference, speedingUnit) {
        this.speedingThresholdPreference = UserMetadatas.SpeedingThresholdPreference.build(id, speedingThresholdPreference, speedingUnit);
        return this;
    };
    this.buildUpdate = function() {
        var metadata = new Array(8);
        if (this.distancePreference != null) {
            metadata.push(this.distancePreference);
        }
        if (this.temperaturePreference != null) {
            metadata.push(this.temperaturePreference);
        }
        if (this.volumePreference != null) {
            metadata.push(this.volumePreference);
        }
        if (this.pressurePreference != null) {
            metadata.push(this.pressurePreference);
        }
        if (this.weightPreference != null) {
            metadata.push(this.weightPreference);
        }
        if (this.electricityPreference != null) {
            metadata.push(this.electricityPreference);
        }
        if (this.fuelEfficiencyPreference != null) {
            metadata.push(this.fuelEfficiencyPreference);
        }
        if (this.speedPreference != null) {
            metadata.push(this.speedPreference);
        }
        if (this.timeZonePreference != null) {
            metadata.push(this.timeZonePreference);
        }
        if (this.localePreference != null) {
            metadata.push(this.localePreference);
        }
        if (this.idlingThresholdPreference != null) {
            metadata.push(this.idlingThresholdPreference);
        }
        if (this.speedingThresholdPreference != null) {
            metadata.push(this.speedingThresholdPreference);
        }
        return new AdminUser(this.id, this.name, null, this.phoneNumber, this.companyName, null, this.address == null ? null : forUserUpdate(this.id, Date.now(), this.address), null, null, metadata);
    }
}

export function VehicleUpdateBuilder(id) {
    if (id == null || id.length === 0) {
        throw new Error("id cannot be null or empty");
    }
    this.id = id;
    this.defaultDriverId = null;
    this.vin = null;
    this.name = null;
    this.make = null;
    this.model = null;
    this.year = null;
    this.odometer = null;
    this.tankSize = null;
    this.fuelType = null;
    this.engineDisplacement = null;
    this.cityFuelEfficiency = null;
    this.highwayFuelEfficiency = null;
    this.weight = null;
    this.engineCylinders = null;
    this.batteryCapacity = null;
    this.startStop = null;
    this.batteryGroupSize = null;
    this.batteryColdCrankingAmps = null;
    this.horsePower = null;
    this.oilType = null;
    this.licensePlate = null;
    this.withDefaultDriverId = function withDefaultDriverId(defaultDriverId) {
        this.defaultDriverId = defaultDriverId;
        return this;
    };
    this.withVin = function withVin(vin) {
        this.vin = vin;
        return this;
    };
    this.withName = function withName(name) {
        this.name = name;
        return this;
    };
    this.withMake = function withMake(make) {
        this.make = make;
        return this;
    };
    this.withModel = function withModel(model) {
        this.model = model;
        return this;
    };
    this.withYear = function withYear(year) {
        this.year = year;
        return this;
    };
    this.withOdometer = function withOdometer(odometer, distanceUnit) {
        this.odometer = VehicleMetadatas.Odometer.build(id, odometer, distanceUnit);
        return this;
    };
    this.withTankSize = function withTankSize(tankSize, volumeUnit) {
        this.tankSize = VehicleMetadatas.TankSize.build(id, tankSize, volumeUnit);
        return this;
    };
    this.withFuelType = function withFuelType(fuel) {
        this.fuelType = VehicleMetadatas.FuelType.build(id, fuel, "None");
        return this;
    };
    this.withEngineDisplacement = function withEngineDisplacement(engineDisplacement, volumeUnit) {
        this.engineDisplacement = VehicleMetadatas.EngineDisplacement.build(id, engineDisplacement, volumeUnit);
        return this;
    };
    this.withCityFuelEfficiency = function withCityFuelEfficiency(cityFuelEfficiency, fuelEfficiencyUnit) {
        this.cityFuelEfficiency = VehicleMetadatas.CityFuelEfficiency.build(id, cityFuelEfficiency, fuelEfficiencyUnit);
        return this;
    };
    this.withHighwayFuelEfficiency = function withHighwayFuelEfficiency(highwayFuelEfficiency, fuelEfficiencyUnit) {
        this.highwayFuelEfficiency = VehicleMetadatas.HighwayFuelEfficiency.build(id, highwayFuelEfficiency, fuelEfficiencyUnit);
        return this;
    };
    this.withWeight = function withWeight(weight, weightUnit) {
        this.weight = VehicleMetadatas.Weight.build(id, weight, weightUnit);
        return this;
    };
    this.withEngineCylinders = function withEngineCylinders(engineCylinders) {
        this.engineCylinders = VehicleMetadatas.EngineCylinders.build(id, engineCylinders, "None");
        return this;
    };
    this.withBatteryCapacity = function withBatteryCapacity(batteryCapacity, electricityUnit) {
        this.batteryCapacity = VehicleMetadatas.BatteryCapacity.build(id, batteryCapacity, electricityUnit);
        return this;
    };
    this.withStartStopEngine = function withStartStopEngine(startStop) {
        this.startStop = VehicleMetadatas.StartStop.build(id, startStop, "None");
        return this;
    };
    this.withBatteryGroupSize = function withBatteryGroupSize(batteryGroupSize) {
        this.batteryGroupSize = VehicleMetadatas.BatteryGroupSize.build(id, batteryGroupSize, "None");
        return this;
    };
    this.withBatteryColdCrankingAmps = function withBatteryColdCrankingAmps(batteryColdCrankingAmps) {
        this.batteryColdCrankingAmps = VehicleMetadatas.BatteryColdCrankingAmps.build(id, batteryColdCrankingAmps, "None");
        return this;
    };
    this.withHorsePower = function withHorsePower(horsePower) {
        this.horsePower = VehicleMetadatas.HorsePower.build(id, horsePower, "None");
        return this;
    };
    this.withOilType = function withOilType(oilType) {
        this.oilType = VehicleMetadatas.OilType.build(id, oilType, "None");
        return this;
    };
    this.withLicensePlate = function withLicensePlate(licensePlate) {
        this.licensePlate = VehicleMetadatas.LicensePlate.build(id, licensePlate, "None");
        return this;
    };
    this.buildUpdate = function() {
        var metadata = new Array(14);
        if (this.odometer != null) {
            metadata.push(this.odometer);
        }
        if (this.tankSize != null) {
            metadata.push(this.tankSize);
        }
        if (this.fuelType != null) {
            metadata.push(this.fuelType);
        }
        if (this.engineDisplacement != null) {
            metadata.push(this.engineDisplacement);
        }
        if (this.cityFuelEfficiency != null) {
            metadata.push(this.cityFuelEfficiency);
        }
        if (this.highwayFuelEfficiency != null) {
            metadata.push(this.highwayFuelEfficiency);
        }
        if (this.weight != null) {
            metadata.push(this.weight);
        }
        if (this.engineCylinders != null) {
            metadata.push(this.engineCylinders);
        }
        if (this.batteryCapacity != null) {
            metadata.push(this.batteryCapacity);
        }
        if (this.startStop != null) {
            metadata.push(this.startStop);
        }
        if (this.batteryGroupSize != null) {
            metadata.push(this.batteryGroupSize);
        }
        if (this.batteryColdCrankingAmps != null) {
            metadata.push(this.batteryColdCrankingAmps);
        }
        if (this.horsePower != null) {
            metadata.push(this.horsePower);
        }
        if (this.oilType != null) {
            metadata.push(this.oilType);
        }
        if (this.licensePlate != null) {
            metadata.push(this.licensePlate);
        }
        return new Vehicle(this.id, null, this.defaultDriverId, this.vin, this.name, this.make,
            this.model, this.year, null, null, null, metadata, null);
    }
}

export function DriverUpdateBuilder(id) {
    if (id == null || id.length === 0) {
        throw new Error("id cannot be null or empty");
    }
    this.id = id;
    this.name = null;
    this.email = null;
    this.phoneNumber = null;
    this.distancePreference = null;
    this.temperaturePreference = null;
    this.volumePreference = null;
    this.pressurePreference = null;
    this.weightPreference = null;
    this.electricityPreference = null;
    this.fuelEfficiencyPreference = null;
    this.speedPreference = null;
    this.timeZonePreference = null;
    this.localePreference = null;
    this.idlingThresholdPreference = null;
    this.speedingThresholdPreference = null;
    this.withName = function(name) {
        this.name = name;
        return this;
    };
    this.withEmail = function(email) {
        this.email = email;
        return this;
    };
    this.withPhoneNumber = function(phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    };
    this.withDistancePreference = function(distancePreference) {
        this.distancePreference = UserMetadatas.DistancePreference.build(id, distancePreference, "None");
        return this;
    };
    this.withTemperaturePreference = function(temperaturePreference) {
        this.temperaturePreference = UserMetadatas.TemperaturePreference.build(id, temperaturePreference, "None");
        return this;
    };
    this.withVolumePreference = function(volumePreference) {
        this.volumePreference = UserMetadatas.VolumePreference.build(id, volumePreference, "None");
        return this;
    };
    this.withPressurePreference = function(pressurePreference) {
        this.pressurePreference = UserMetadatas.PressurePreference.build(id, pressurePreference, "None");
        return this;
    };
    this.withWeightPreference = function(weightPreference) {
        this.weightPreference = UserMetadatas.WeightPreference.build(id, weightPreference, "None");
        return this;
    };
    this.withElectricityPreference = function(electricityPreference) {
        this.electricityPreference = UserMetadatas.ElectricityPreference.build(id, electricityPreference, "None");
        return this;
    };
    this.withFuelEfficiencyPreference = function(fuelEfficiencyPreference) {
        this.fuelEfficiencyPreference = UserMetadatas.FuelEfficiencyPreference.build(id, fuelEfficiencyPreference, "None");
        return this;
    };
    this.withSpeedPreference = function(speedPreference) {
        this.speedPreference = UserMetadatas.SpeedPreference.build(id, speedPreference, "None");
        return this;
    };
    this.withTimeZonePreference = function(timeZone) {
        this.timeZonePreference = UserMetadatas.TimeZonePreference.build(id, timeZone, "None");
        return this;
    };
    this.withLocalePreference = function(locale) {
        this.localePreference = UserMetadatas.LocalePreference.build(id, locale, "None");
        return this;
    };
    this.withIdlingThresholdPreference = function(idlingThresholdPreference, idlingUnit) {
        this.idlingThresholdPreference = UserMetadatas.IdlingThresholdPreference.build(id, idlingThresholdPreference, idlingUnit);
        return this;
    };
    this.withSpeedingThresholdPreference = function(speedingThresholdPreference, speedingUnit) {
        this.speedingThresholdPreference = UserMetadatas.SpeedingThresholdPreference.build(id, speedingThresholdPreference, speedingUnit);
        return this;
    };
    this.buildUpdate = function() {
        var metadata = new Array(8);
        if (this.distancePreference != null) {
            metadata.push(this.distancePreference);
        }
        if (this.temperaturePreference != null) {
            metadata.push(this.temperaturePreference);
        }
        if (this.volumePreference != null) {
            metadata.push(this.volumePreference);
        }
        if (this.pressurePreference != null) {
            metadata.push(this.pressurePreference);
        }
        if (this.weightPreference != null) {
            metadata.push(this.weightPreference);
        }
        if (this.electricityPreference != null) {
            metadata.push(this.electricityPreference);
        }
        if (this.fuelEfficiencyPreference != null) {
            metadata.push(this.fuelEfficiencyPreference);
        }
        if (this.speedPreference != null) {
            metadata.push(this.speedPreference);
        }
        if (this.timeZonePreference != null) {
            metadata.push(this.timeZonePreference);
        }
        if (this.localePreference != null) {
            metadata.push(this.localePreference);
        }
        if (this.idlingThresholdPreference != null) {
            metadata.push(this.idlingThresholdPreference);
        }
        if (this.speedingThresholdPreference != null) {
            metadata.push(this.speedingThresholdPreference);
        }
        return new Driver(this.id, null, this.name, this.email, this.phoneNumber, null, metadata);
    }
}

function getDisplayName(name) {
    return getDisplayNameWithCapitalize(name, false);
}

function getDisplayNameWithCapitalize(name, onlyFirstCapitalize) {
    if (name == null || name.length === 0) {
        return name;
    }
    var displayName = "";
    var words = name.split(/(?=[A-Z])/);
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        word = word.trim().toLowerCase();
        if (word.length === 0) {
            continue;
        }
        if (onlyFirstCapitalize && (i > 0)) {
            displayName += word;
        } else {
            displayName += word.substring(0, 1).toUpperCase();
            displayName += word.substring(1);
        }
        if (i !== (words.length - 1)) {
            displayName += " ";
        }
    }
    return displayName;
}