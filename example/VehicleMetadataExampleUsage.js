function getMetadata(vehicle) {

    // Odometer [in user's Unit.Distance preference]
    var odometer = VehicleMetadatas.Odometer.get(vehicle);

    // Fuel Type
    var fuel = VehicleMetadatas.FuelType.get(vehicle);
    var fuelName = fuel.name;
    var fuelLabel = fuel.label;
    var fuelAbbreviation = fuel.abbreviation;

    // Engine Displacement [in Unit.Volume.Liters]
    var displacement = VehicleMetadatas.EngineDisplacement.get(vehicle);

    // City expected fuel efficiency [in user's Unit.FuelEfficiency preference]
    var cityFuelEfficiency = VehicleMetadatas.CityFuelEfficiency.get(vehicle);

    // Highway expected fuel efficiency [in user's Unit.FuelEfficiency preference]
    var highwayFuelEfficiency = VehicleMetadatas.HighwayFuelEfficiency.get(vehicle);

    // Tank size [in user's Unit.Volume preference]
    var tankSize = VehicleMetadatas.TankSize.get(vehicle);

    // Oil type
    var oil = VehicleMetadatas.OilType.get(vehicle);
    var oilName = oil.name;
    var oilLabel = oil.label;
    var oilAbbreviation = oil.abbreviation;

    // Engine Cylinders
    var engineCylinders = VehicleMetadatas.EngineCylinders.get(vehicle);

    // Horsepower
    var horsePower = VehicleMetadatas.HorsePower.get(vehicle);

    // Weight
    var weight = VehicleMetadatas.Weight.get(vehicle);

    // StartStop
    var startStop = VehicleMetadatas.StartStop.get(vehicle);

    // Battery Group Size
    var batteryGroupSize = VehicleMetadatas.BatteryGroupSize.get(vehicle);
    var batteryGroupSizeName = batteryGroupSize.name;
    var batteryGroupSizeLabel = batteryGroupSize.label;
    var batteryGroupSizeAbbreviation = batteryGroupSize.abbreviation;

    // Battery Capacity [in user's Unit.Electricity preference]
    var batteryCapacity = VehicleMetadatas.BatteryCapacity.get(vehicle);

    // Battery Cold Cranking Amps
    var batteryColdCrankingAmps = VehicleMetadatas.BatteryColdCrankingAmps.get(vehicle);

}

function getMetadataValuesForUpdate(vehicle) {
    // Odometer - any number type
    var odometerMetadata = VehicleMetadatas.Odometer.getMetadata(vehicle);
    // lowest number allowed
    var lowest = odometerMetadata.lowerBound;
    // highest number allowed
    var highest = odometerMetadata.upperBound;

    // Fuel Type - an enumeration type
    var fuelMetadata = VehicleMetadatas.FuelType.getMetadata(vehicle);
    var allowedValues = fuelMetadata.enumerationValues;

    // Engine Displacement - a number type
    var engineDisplacementMetadata = VehicleMetadatas.EngineDisplacement.getMetadata(vehicle);
    // lowest number allowed
    var lowest = engineDisplacementMetadata.lowerBound;
    // highest number allowed
    var highest = engineDisplacementMetadata.upperBound;

    // City expected fuel efficiency - a number type
    var cityFuelEfficiencyMetadata = VehicleMetadatas.CityFuelEfficiency.getMetadata(vehicle);
    // lowest number allowed
    var lowest = cityFuelEfficiencyMetadata.lowerBound;
    // highest number allowed
    var highest = cityFuelEfficiencyMetadata.upperBound;

    // Highway expected fuel efficiency - a number type
    var highwayFuelEfficiencyMetadata = VehicleMetadatas.HighwayFuelEfficiency.getMetadata(vehicle);
    // lowest number allowed
    var lowest = highwayFuelEfficiencyMetadata.lowerBound;
    // highest number allowed
    var highest = highwayFuelEfficiencyMetadata.upperBound;

    // Tank size - a number type
    var tankSizeMetadata = VehicleMetadatas.TankSize.getMetadata(vehicle);
    // lowest number allowed
    var lowest = tankSizeMetadata.lowerBound;
    // highest number allowed
    var highest = tankSizeMetadata.upperBound;

    // Oil type - an enumeration type
    var oilMetadata = VehicleMetadatas.OilType.getMetadata(vehicle);
    var allowedValues = oilMetadata.enumerationValues;

    // Engine Cylinders - a number type
    var engineCylindersMetadata = VehicleMetadatas.EngineCylinders.getMetadata(vehicle);
    // lowest number allowed
    var lowest = engineCylindersMetadata.lowerBound;
    // highest number allowed
    var highest = engineCylindersMetadata.upperBound;

    // Horsepower - a number type
    var horsePowerMetadata = VehicleMetadatas.HorsePower.getMetadata(vehicle);
    // lowest number allowed
    var lowest = horsePowerMetadata.lowerBound;
    // highest number allowed
    var highest = horsePowerMetadata.upperBound;

    // Weight - a number type
    var weightMetadata = VehicleMetadatas.Weight.getMetadata(vehicle);
    // lowest number allowed
    var lowest = weightMetadata.lowerBound;
    // highest number allowed
    var highest = weightMetadata.upperBound;

    // StartStop - a boolean type
    var startStopMetadata = VehicleMetadatas.StartStop.getMetadata(vehicle);

    // Battery Group Size - an enumeration type
    var batteryGroupSizeMetadata = VehicleMetadatas.BatteryGroupSize.getMetadata(vehicle);
    var allowedValues = batteryGroupSizeMetadata.enumerationValues;

    // Battery Capacity - a number type
    var batteryCapacityMetadata = VehicleMetadatas.BatteryCapacity.getMetadata(vehicle);
    // lowest number allowed
    var lowest = batteryCapacityMetadata.lowerBound;
    // highest number allowed
    var highest = batteryCapacityMetadata.upperBound;

    // Battery Cold Cranking Amps - a number type
    var batteryColdCrankingAmpsMetadata = VehicleMetadatas.BatteryColdCrankingAmps.getMetadata(vehicle);
    // lowest number allowed
    var lowest = batteryColdCrankingAmpsMetadata.lowerBound;
    // highest number allowed
    var highest = batteryColdCrankingAmpsMetadata.upperBound;
}

function createVehicleForUpdate(adminUser, existingVehicle, make, model, year, name,
                                defaultDriver, vin, odometer,fuel, engineDisplacement,
                                cityFuelEconomy, highwayFuelEconomy, tankSize, oil,
                                engineCylinders, horsePower, weight, startStop, batteryGroupSize,
                                batteryCapacity, batteryColdCrankingAmps) {
    var builder = new VehicleUpdateBuilder(existingVehicle.id);

    if ((make != null) && (make !== existingVehicle.make)) {
        builder.withMake(make);
    }

    if ((model != null) && (model !== existingVehicle.model)) {
        builder.withModel(model);
    }

    if ((year != null) && (year !== existingVehicle.year)) {
        builder.withYear(year);
    }

    if ((name != null) && (name !== existingVehicle.name)) {
        builder.withName(name);
    }

    if ((defaultDriver != null) && (defaultDriver.id != null) && (defaultDriver.id !== existingVehicle.defaultDriverId)) {
        builder.withDefaultDriverId(defaultDriver);
    }

    if ((vin != null) && vin !== existingVehicle.vin) {
        builder.withVin(vin);
    }

    if (odometer != null) {
        builder.withOdometer(odometer, VehicleMetadatas.DistancePreference.get(adminUser).name);
    }

    if (fuel != null) {
        builder.withFuelType(fuel);
    }

    if (engineDisplacement != null) {
        builder.withEngineDisplacement(engineDisplacement, Liters);
    }

    if (cityFuelEconomy != null) {
        builder.withCityFuelEfficiency(cityFuelEconomy, VehicleMetadatas.FuelEfficiencyPreference.get(adminUser).name);
    }

    if (highwayFuelEconomy != null) {
        builder.withHighwayFuelEfficiency(highwayFuelEconomy, VehicleMetadatas.FuelEfficiencyPreference.get(adminUser).name);
    }

    if (tankSize != null) {
        builder.withTankSize(tankSize, VehicleMetadatas.VolumePreference.get(adminUser).name);
    }

    if (oil != null) {
        builder.withOilType(oil);
    }

    if (engineCylinders != null) {
        builder.withEngineCylinders(engineCylinders);
    }

    if (horsePower != null) {
        builder.withHorsePower(horsePower);
    }

    if (weight != null) {
        builder.withWeight(engineDisplacement, VehicleMetadatas.WeightPreference.get(adminUser).name);
    }

    if (startStop != null) {
        builder.withStartStopEngine(startStop);
    }

    if (batteryGroupSize != null) {
        builder.withBatteryGroupSize(batteryGroupSize);
    }

    if (batteryCapacity != null) {
        builder.withBatteryCapacity(batteryCapacity, VehicleMetadatas.ElectricityPreference.get(adminUser));
    }

    if (batteryColdCrankingAmps != null) {
        builder.withBatteryColdCrankingAmps(batteryColdCrankingAmps);
    }

    return builder.buildUpdate();

}