function Unit(name, label, abbreviation, digitLabel, convert) {
    this.name = name;
    this.label = label;
    this.abbreviation = abbreviation;
    this.digitLabel = digitLabel;
    this.convert = convert;
}

function Distance(name, label, abbreviation, digitLabel, convert, toMiles, toKilometers) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toMiles = toMiles;
    this.toKilometers = toKilometers;
}

var Miles = new Distance("Miles", "miles", "mi", "m",
    function convert(distance, unit) {
        return getUnitObject(unit).toMiles(distance);
    },
    function toMiles(distance) {
        validateNumber(distance);
        return distance;
    },
    function toKilometers(distance) {
        validateNumber(distance);
        return distance * 1.60934;
    });
Object.freeze(Miles);

var Kilometers = new Distance("Kilometers", "kilometers", "km", "k",
    function convert(distance, unit) {
        return getUnitObject(unit).toKilometers(distance);
    },
    function toMiles(distance) {
        validateNumber(distance);
        return distance * 0.621371;
    },
    function toKilometers(distance) {
        validateNumber(distance);
        return distance;
    });
Object.freeze(Kilometers);

function Temperature(name, label, abbreviation, digitLabel, convert, toCelsius, toFahrenheit) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toCelsius = toCelsius;
    this.toFahrenheit = toFahrenheit;
}

var Celsius = new Temperature("Celsius", "Celsius", "°C", "C",
    function convert(temperature, unit) {
        return getUnitObject(unit).toCelsius(temperature);
    },
    function toCelsius(temperature) {
        validateNumber(temperature);
        return temperature;
    },
    function toFahrenheit(temperature) {
        validateNumber(temperature);
        return ((temperature * 9) / 5) + 32;
    });
Object.freeze(Celsius);

var Fahrenheit = new Temperature("Fahrenheit", "Fahrenheit", "°F", "F",
    function convert(temperature, unit) {
        return getUnitObject(unit).toFahrenheit(temperature);
    },
    function toCelsius(temperature) {
        validateNumber(temperature);
        return ((temperature - 32) * 5) / 9;
    },
    function toFahrenheit(temperature) {
        validateNumber(temperature);
        return temperature;
    });
Object.freeze(Fahrenheit);

function Volume(name, label, abbreviation, digitLabel, convert, toCubicFoot, toLiters, toUSGallons, toImperialGallons) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toCubicFoot = toCubicFoot;
    this.toLiters = toLiters;
    this.toUSGallons = toUSGallons;
    this.toImperialGallons = toImperialGallons;
}

var CubicFoot = new Volume("CubicFoot", "cubic foot", "cu ft", "cf",
    function convert(capacity, unit) {
        return getUnitObject(unit).toCubicFoot(capacity);
    },
    function toCubicFoot(capacity) {
        validateNumber(capacity);
        return capacity;
    },
    function toLiters(capacity) {
        validateNumber(capacity);
        return capacity * 28.3168;
    },
    function toUSGallons(capacity) {
        validateNumber(capacity);
        return capacity * 7.48052;
    },
    function toImperialGallons(capacity) {
        validateNumber(capacity);
        return capacity * 6.22884;
    });
Object.freeze(CubicFoot);

var Liters = new Volume("Liters", "liter", "l", "l",
    function convert(capacity, unit) {
        return getUnitObject(unit).toLiters(capacity);
    },
    function toCubicFoot(capacity) {
        validateNumber(capacity);
        return capacity * 0.0353147;
    },
    function toLiters(capacity) {
        validateNumber(capacity);
        return capacity;
    },
    function toUSGallons(capacity) {
        validateNumber(capacity);
        return capacity * 0.264172;
    },
    function toImperialGallons(capacity) {
        validateNumber(capacity);
        return capacity * 0.219969;
    });
Object.freeze(Liters);

var USGallons = new Volume("USGallons", "us gallon", "gal", "g",
    function convert(capacity, unit) {
        return getUnitObject(unit).toUSGallons(capacity);
    },
    function toCubicFoot(capacity) {
        validateNumber(capacity);
        return capacity * 0.133681;
    },
    function toLiters(capacity) {
        validateNumber(capacity);
        return capacity * 3.78541;
    },
    function toUSGallons(capacity) {
        validateNumber(capacity);
        return capacity;
    },
    function toImperialGallons(capacity) {
        validateNumber(capacity);
        return capacity * 0.832674;
    });
Object.freeze(USGallons);

var ImperialGallons = new Volume("ImperialGallons", "imperial gallon", "gal", "g",
    function convert(capacity, unit) {
        return getUnitObject(unit).toImperialGallons(capacity);
    },
    function toCubicFoot(capacity) {
        validateNumber(capacity);
        return capacity * 0.160544;
    },
    function toLiters(capacity) {
        validateNumber(capacity);
        return capacity * 4.54609;
    },
    function toUSGallons(capacity) {
        validateNumber(capacity);
        return capacity * 1.20095;
    },
    function toImperialGallons(capacity) {
        validateNumber(capacity);
        return capacity;
    });
Object.freeze(ImperialGallons);

function Pressure(name, label, abbreviation, digitLabel, convert, toPoundsPerSquareInch, toKilopascals) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toPoundsPerSquareInch = toPoundsPerSquareInch;
    this.toKilopascals = toKilopascals;
}

var PoundsPerSquareInch = new Pressure("PoundsPerSquareInch", "pounds per square inch", "psi", "p",
    function convert(pressure, unit) {
        return getUnitObject(unit).toPoundsPerSquareInch(pressure);
    },
    function toPoundsPerSquareInch(pressure) {
        validateNumber(pressure);
        return pressure;
    },
    function toKilopascals(pressure) {
        validateNumber(pressure);
        return pressure * 6.89475729;
    });
Object.freeze(PoundsPerSquareInch);

var Kilopascals = new Pressure("Kilopascals", "kilopascal", "kPa", "k",
    function convert(pressure, unit) {
        return getUnitObject(unit).toKilopascals(pressure);
    },
    function toPoundsPerSquareInch(pressure) {
        validateNumber(pressure);
        return pressure * 0.145037738;
    },
    function toKilopascals(pressure) {
        validateNumber(pressure);
        return pressure;
    });
Object.freeze(Kilopascals);

function FuelEfficiency(name, label, abbreviation, digitLabel, distance, volume, ratio, factor,
                        convert, toMilesPerUSGallon, toMilesPerImperialGallon, toKilometersPerLiter,
                        toLitersPer100Kilometer, toLitersPer10Kilometer) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.distance = distance;
    this.volume = volume;
    this.ratio = ratio;
    this.factor = factor;
    this.toMilesPerUSGallon = toMilesPerUSGallon;
    this.toMilesPerImperialGallon = toMilesPerImperialGallon;
    this.toKilometersPerLiter = toKilometersPerLiter;
    this.toLitersPer100Kilometer = toLitersPer100Kilometer;
    this.toLitersPer10Kilometer = toLitersPer10Kilometer;
}

var MilesPerUSGallon = new FuelEfficiency("MilesPerUSGallon", "liters per 100km", "l/100km", "l/100km",
    Miles, USGallons, "DistanceOverVolume", 1,
    function convert(fuelEfficiency, unit) {
        getUnitObject(unit).toMilesPerUSGallon(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerImperialGallon");
    },
    function toKilometersPerLiter(fuelEfficiency) {
        return convert(fuelEfficiency, this.name, "KilometersPerLiter");
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer100Kilometer");
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer10Kilometer");
    });
Object.freeze(MilesPerUSGallon);

var MilesPerImperialGallon = new FuelEfficiency("MilesPerImperialGallon", "miles per imperial gallon", "mpg", "mpg",
    Miles, ImperialGallons, "DistanceOverVolume", 1,
    function convert(fuelEfficiency, unit) {
        getUnitObject(unit).toMilesPerImperialGallon(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerUSGallon");
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "KilometersPerLiter");
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer100Kilometer");
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer10Kilometer");
    });
Object.freeze(MilesPerImperialGallon);

var KilometersPerLiter = new FuelEfficiency("KilometersPerLiter", "kilometers per liter", "kpl", "kpl",
    Kilometers, Liters, "DistanceOverVolume", 1,
    function convert(fuelEfficiency, unit) {
        getUnitObject(unit).toKilometersPerLiter(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerUSGallon");
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerImperialGallon");
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer100Kilometer");
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer10Kilometer");
    });
Object.freeze(KilometersPerLiter);

var LitersPer100Kilometer = new FuelEfficiency("LitersPer100Kilometer", "liters per 100km", "l/100km", "l/100km",
    Kilometers, Liters, "VolumeOverDistance", 100,
    function convert(fuelEfficiency, unit) {
        getUnitObject(unit).toLitersPer100Kilometer(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerUSGallon");
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerImperialGallon");
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "KilometersPerLiter");
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer10Kilometer");
    });
Object.freeze(LitersPer100Kilometer);

var LitersPer10Kilometer = new FuelEfficiency("LitersPer10Kilometer", "liters per 10km", "l/10km", "l/10km",
    Kilometers, Liters, "VolumeOverDistance", 10,
    function convert(fuelEfficiency, unit) {
        getUnitObject(unit).toLitersPer10Kilometer(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerUSGallon");
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "MilesPerImperialGallon");
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "KilometersPerLiter");
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convert(fuelEfficiency, this.name, "LitersPer100Kilometer");
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    });
Object.freeze(LitersPer10Kilometer);

function convert(fuelEfficiency, from, to) {
    switch (from.ratio) {
        case "DistanceOverVolume":
            return convertFromDistanceOverVolume(fuelEfficiency, from, to);
        case "VolumeOverDistance":
            return convertFromVolumeOverDistance(fuelEfficiency, from, to);
        default:
            throw new Error("Unknown ratio type" + from.ratio);
    }
}

function convertFromDistanceOverVolume(fuelEfficiency, from, to) {
    var distance = to.distance.convert(fuelEfficiency, from.distance);
    var volume = to.volume.convert(from.factor, from.volume);
    if (volume === 0) {
        return 0;
    }
    switch (to.ratio) {
        case "DistanceOverVolume":
            return distance / volume;
        case "VolumeOverDistance":
            var divisor = distance / volume;
            if (divisor === 0) {
                return 0;
            }
            return (to.factor / divisor);
        default:
            throw new Error("Unknown ratio type" + from.ratio);
    }
}

function convertFromVolumeOverDistance(fuelEfficiency, from, to) {
    var volume = to.volume.convert(fuelEfficiency, from.volume);
    var distance = to.distance.convert(from.factor, from.distance);
    if (distance === 0) {
        return 0;
    }
    switch (to.ratio) {
        case "DistanceOverVolume":
            var divisor = volume / distance;
            if (divisor === 0) {
                return 0;
            }
            return to.factor / divisor;
        case "VolumeOverDistance":
            if (from.ratio === "VolumeOverDistance") {
                distance = distance / to.factor;
            }
            return volume / distance;
        default:
            throw new Error("Unknown ratio type" + from.ratio);
    }
}

function Speed(name, label, abbreviation, digitLabel, convert, toMilesPerHour, toKilometerPerHour, toMetersPerSecond) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toMilesPerHour = toMilesPerHour;
    this.toKilometerPerHour = toKilometerPerHour;
    this.toMetersPerSecond = toMetersPerSecond;
}

var MilesPerHour = new Speed("MilesPerHour", "miles per hour", "mph", "m/h",
    function convert(speed, unit) {
        return getUnitObject(unit).toMilesPerHour(speed);
    },
    function toMilesPerHour(speed) {
        validateNumber(speed);
        return speed;
    },
    function toKilometerPerHour(speed) {
        validateNumber(speed);
        return speed * 1.60934;
    },
    function toMetersPerSecond(speed) {
        validateNumber(speed);
        return speed * 0.44704;
    });
Object.freeze(MilesPerHour);

var KilometerPerHour = new Speed("KilometerPerHour", "kilometers per hour", "kph", "k/h",
    function convert(speed, unit) {
        return getUnitObject(unit).toKilometerPerHour(speed);
    },
    function toMilesPerHour(speed) {
        validateNumber(speed);
        return speed * 0.621371;
    },
    function toKilometerPerHour(speed) {
        validateNumber(speed);
        return speed;
    },
    function toMetersPerSecond(speed) {
        validateNumber(speed);
        return speed * 0.277778;
    });
Object.freeze(KilometerPerHour);

var MetersPerSecond = new Speed("MetersPerSecond", "meters per second", "mss", "m/s",
    function convert(speed, unit) {
        return getUnitObject(unit).toMetersPerSecond(speed);
    },
    function toMilesPerHour(speed) {
        validateNumber(speed);
        return speed * 2.23694;
    },
    function toKilometerPerHour(speed) {
        validateNumber(speed);
        return speed * 3.6;
    },
    function toMetersPerSecond(speed) {
        validateNumber(speed);
        return speed;
    });
Object.freeze(MetersPerSecond);

function Electricity(name, label, abbreviation, digitLabel, convert, toAmpHour, toMilliAmpHour) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toAmpHour = toAmpHour;
    this.toMilliAmpHour = toMilliAmpHour;
}

var AmpHour = Electricity("AmpHour", "amp hour", "Ahr", "A",
    function convert(value, unit) {
        return getUnitObject(unit).toAmpHour(value);
    },
    function toAmpHour(value) {
        validateNumber(value);
        return value;
    },
    function toMilliAmpHour(value) {
        validateNumber(value);
        return value * 1000;
    });
Object.freeze(AmpHour);

var MilliAmpHour = Electricity("MilliAmpHour", "milliamp hour", "mAhr", "mA",
    function convert(value, unit) {
        return getUnitObject(unit).toMilliAmpHour(value);
    },
    function toAmpHour(value) {
        validateNumber(value);
        return value / 1000;
    },
    function toMilliAmpHour(value) {
        validateNumber(value);
        return value;
    });
Object.freeze(MilliAmpHour);

function Weight(name, label, abbreviation, digitLabel, convert, toPounds, toKilograms) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toPounds = toPounds;
    this.toKilograms = toKilograms;
}

var Pounds = new Weight("Pounds", "pounds", "lbs", "lb",
    function convert(weight, unit) {
        return getUnitObject(unit).toKilograms(weight);
    },
    function toPounds(weight) {
        validateNumber(weight);
        return weight;
    },
    function toKilograms(weight) {
        validateNumber(weight);
        return weight * 0.453592;
    });
Object.freeze(Pounds);

var Kilograms = new Weight("Kilograms", "kilograms", "kg", "kg",
    function convert(weight, unit) {
        return getUnitObject(unit).toPounds(weight);
    },
    function toPounds(weight) {
        validateNumber(weight);
        return weight * 2.20462;
    },
    function toKilograms(weight) {
        validateNumber(weight);
        return weight;
    });
Object.freeze(Kilograms);

var None = new  Unit("None", "", "", "",
    function convert(value, unit) {
            validateNumber(value);
            return value;
        });
Object.freeze(None);