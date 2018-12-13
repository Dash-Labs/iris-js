function VehicleUpdateBuilder(id) {
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