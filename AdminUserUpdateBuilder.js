function AdminUserUpdateBuilder(id) {
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