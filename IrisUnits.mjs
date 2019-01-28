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

export var Miles = new Distance("Miles", "Miles", "mi", "m",
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

export var Kilometers = new Distance("Kilometers", "Kilometers", "km", "k",
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

export var Celsius = new Temperature("Celsius", "Celsius", "°C", "C",
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

export var Fahrenheit = new Temperature("Fahrenheit", "Fahrenheit", "°F", "F",
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

export var CubicFoot = new Volume("CubicFoot", "Cubic Foot", "cu ft", "cf",
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

export var Liters = new Volume("Liters", "Liter", "l", "l",
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

export var USGallons = new Volume("USGallons", "US Gallon", "gal", "g",
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

export var ImperialGallons = new Volume("ImperialGallons", "Imperial Gallon", "gal", "g",
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

export var PoundsPerSquareInch = new Pressure("PoundsPerSquareInch", "PSI", "psi", "p",
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

export var Kilopascals = new Pressure("Kilopascals", "kPa", "kPa", "k",
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

export var MilesPerUSGallon = new FuelEfficiency("MilesPerUSGallon", "MPG", "mpg", "mpg",
    Miles, USGallons, "DistanceOverVolume", 1,
    function convert(fuelEfficiency, unit) {
        return getUnitObject(unit).toMilesPerUSGallon(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerImperialGallon);
    },
    function toKilometersPerLiter(fuelEfficiency) {
        return convertWithRatio(fuelEfficiency, this, KilometersPerLiter);
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer100Kilometer);
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer10Kilometer);
    });
Object.freeze(MilesPerUSGallon);

export var MilesPerImperialGallon = new FuelEfficiency("MilesPerImperialGallon", "MPG (imperial)", "mpg", "mpg",
    Miles, ImperialGallons, "DistanceOverVolume", 1,
    function convert(fuelEfficiency, unit) {
        return getUnitObject(unit).toMilesPerImperialGallon(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerUSGallon);
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, KilometersPerLiter);
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer100Kilometer);
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer10Kilometer);
    });
Object.freeze(MilesPerImperialGallon);

export var KilometersPerLiter = new FuelEfficiency("KilometersPerLiter", "KPL", "kpl", "kpl",
    Kilometers, Liters, "DistanceOverVolume", 1,
    function convert(fuelEfficiency, unit) {
        return getUnitObject(unit).toKilometersPerLiter(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerUSGallon);
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerImperialGallon);
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer100Kilometer);
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer10Kilometer);
    });
Object.freeze(KilometersPerLiter);

export var LitersPer100Kilometer = new FuelEfficiency("LitersPer100Kilometer", "L/100KM", "l/100km", "l/100km",
    Kilometers, Liters, "VolumeOverDistance", 100,
    function convert(fuelEfficiency, unit) {
        return getUnitObject(unit).toLitersPer100Kilometer(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerUSGallon);
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerImperialGallon);
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, KilometersPerLiter);
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer10Kilometer);
    });
Object.freeze(LitersPer100Kilometer);

export var LitersPer10Kilometer = new FuelEfficiency("LitersPer10Kilometer", "L/10KM", "l/10km", "l/10km",
    Kilometers, Liters, "VolumeOverDistance", 10,
    function convert(fuelEfficiency, unit) {
        return getUnitObject(unit).toLitersPer10Kilometer(fuelEfficiency);
    },
    function toMilesPerUSGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerUSGallon);
    },
    function toMilesPerImperialGallon(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, MilesPerImperialGallon);
    },
    function toKilometersPerLiter(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, KilometersPerLiter);
    },
    function toLitersPer100Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return convertWithRatio(fuelEfficiency, this, LitersPer100Kilometer);
    },
    function toLitersPer10Kilometer(fuelEfficiency) {
        validateNumber(fuelEfficiency);
        return fuelEfficiency;
    });
Object.freeze(LitersPer10Kilometer);

function convertWithRatio(fuelEfficiency, from, to) {
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
    var distance = to.distance.convert(fuelEfficiency, from.distance.name);
    var volume = to.volume.convert(from.factor, from.volume.name);
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
    var volume = to.volume.convert(fuelEfficiency, from.volume.name);
    var distance = to.distance.convert(from.factor, from.distance.name);
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

export var MilesPerHour = new Speed("MilesPerHour", "MPH", "mph", "m/h",
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

export var KilometerPerHour = new Speed("KilometerPerHour", "KPH", "kph", "k/h",
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

export var MetersPerSecond = new Speed("MetersPerSecond", "MPS", "mps", "m/s",
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

export var AmpHour = new Electricity("AmpHour", "Amp Hours", "Ahr", "A",
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

export var MilliAmpHour = new Electricity("MilliAmpHour", "Milliamp Hours", "mAhr", "mA",
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

export var Pounds = new Weight("Pounds", "Pounds", "lbs", "lb",
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

export var Kilograms = new Weight("Kilograms", "Kilograms", "kg", "kg",
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

function Time(name, label, abbreviation, digitLabel, convert, toMilliseconds, toSeconds, toMinutes, toHours) {
    Unit.call(this, name, label, abbreviation, digitLabel, convert);
    this.toMilliseconds = toMilliseconds;
    this.toSeconds = toSeconds;
    this.toMinutes = toMinutes;
    this.toHours = toHours;
}

export var Milliseconds = new Time("Milliseconds", "ms", "ms",
    function toMilliseconds(time) {
        return time;
    },
    function toSeconds(time) {
        return time == null ? null : time / 1000;
    },
    function toMinutes(time) {
        return time == null ? null : time / (1000 * 60);
    },
    function toHours(time) {
        return time == null ? null : time / (1000 * 60 * 60);
    });
Object.freeze(Milliseconds);

export var Seconds = new Time("Seconds", "sec", "s",
    function toMilliseconds(time) {
        return time == null ? null : time * 1000;
    },
    function toSeconds(time) {
        return time;
    },
    function toMinutes(time) {
        return time == null ? null : time / 60;
    },
    function toHours(time) {
        return time == null ? null : time / (60 * 60);
    });
Object.freeze(Seconds);

export var Minutes = new Time("Minutes", "min", "m",
    function toMilliseconds(time) {
        return time == null ? null : time * 1000 * 60;
    },
    function toSeconds(time) {
        return time == null ? null : time * 60;
    },
    function toMinutes(time) {
        return time;
    },
    function toHours(time) {
        return time == null ? null : time / 60;
    });
Object.freeze(Minutes);

export var Hours = new Time("Hours", "hr", "h",
    function toMilliseconds(time) {
        return time == null ? null : time * 1000 * 60 * 60;
    },
    function toSeconds(time) {
        return time == null ? null : time * 60 * 60;
    },
    function toMinutes(time) {
        return time == null ? null : time * 60;
    },
    function toHours(time) {
        return time;
    });
Object.freeze(Hours);

export var Instance = new Unit("Instance", "", "", "",
    function convert(value, unit) {
        validateNumber(value);
        return value;
    });
Object.freeze(Instance);

export function Type(name, label, abbreviation) {
    this.name = name;
    this.label = label;
    this.abbreviation = abbreviation;
}

function Fuel(name, label, abbreviation) {
    Type.call(this, name, label, abbreviation);
}

function Oil(name, label, abbreviation) {
    Type.call(this, name, label, abbreviation);
}

function BatteryGroupSize(name, label, abbreviation) {
    Type.call(this, name, label, abbreviation);
}

export var Regular = new Fuel("Regular", "Regular Gasoline", "regular");
Object.freeze(Regular);
export var Plus = new Fuel("Plus", "Plus Gasoline", "plus");
Object.freeze(Plus);
export var PremiumFuel = new Fuel("Premium", "Premium Gasoline", "premium");
Object.freeze(PremiumFuel);
export var Diesel = new Fuel("Diesel", "Diesel", "diesel");
Object.freeze(Diesel);
export var E85 = new Fuel("E85", "Ethanol 85", "E85");
Object.freeze(E85);
export var Electric = new Fuel("Electric", "Electric", "electric");
Object.freeze(Electric);
export var CNG = new Fuel("CNG", "Compressed Natural Gas", "CNG");
Object.freeze(CNG);
export var LPG = new Fuel("LPG", "Liquefied Petroleum Gasoline", "LPG");
Object.freeze(LPG);

export var Standard = new Oil("Standard", "Standard", "std");
Object.freeze(Standard);
export var PremiumOil = new Oil("Premium", "Premium", "prem");
Object.freeze(PremiumOil);
export var HighPremium = new Oil("HighPremium", "High Premium", "high prem");
Object.freeze(HighPremium);

export var BCI_21 = new BatteryGroupSize("BCI_21", "21", "21");
Object.freeze(BCI_21);
export var BCI_22F = new BatteryGroupSize("BCI_22F", "22F", "22F");
Object.freeze(BCI_22F);
export var BCI_22HF = new BatteryGroupSize("BCI_22HF", "22HF", "22HF");
Object.freeze(BCI_22HF);
export var BCI_22NF = new BatteryGroupSize("BCI_22NF", "22NF", "22NF");
Object.freeze(BCI_22NF);
export var BCI_22R = new BatteryGroupSize("BCI_22R", "22R", "22R");
Object.freeze(BCI_22R);
export var BCI_24 = new BatteryGroupSize("BCI_24", "24", "24");
Object.freeze(BCI_24);
export var BCI_24F = new BatteryGroupSize("BCI_24F", "24F", "24F");
Object.freeze(BCI_24F);
export var BCI_24H = new BatteryGroupSize("BCI_24H", "24H", "24H");
Object.freeze(BCI_24H);
export var BCI_24R = new BatteryGroupSize("BCI_24R", "24R", "24R");
Object.freeze(BCI_24R);
export var BCI_24T = new BatteryGroupSize("BCI_24T", "24T", "24T");
Object.freeze(BCI_24T);
export var BCI_25 = new BatteryGroupSize("BCI_25", "25", "25");
Object.freeze(BCI_25);
export var BCI_26 = new BatteryGroupSize("BCI_26", "26", "26");
Object.freeze(BCI_26);
export var BCI_26R = new BatteryGroupSize("BCI_26R", "26R", "26R");
Object.freeze(BCI_26R);
export var BCI_27 = new BatteryGroupSize("BCI_27", "27", "27");
Object.freeze(BCI_27);
export var BCI_27F = new BatteryGroupSize("BCI_27F", "27F", "27F");
Object.freeze(BCI_27F);
export var BCI_27H = new BatteryGroupSize("BCI_27H", "27H", "27H");
Object.freeze(BCI_27H);
export var BCI_29NF = new BatteryGroupSize("BCI_29NF", "29NF", "29NF");
Object.freeze(BCI_29NF);
export var BCI_33 = new BatteryGroupSize("BCI_33", "33", "33");
Object.freeze(BCI_33);
export var BCI_34 = new BatteryGroupSize("BCI_34", "34", "34");
Object.freeze(BCI_34);
export var BCI_34R = new BatteryGroupSize("BCI_34R", "34R", "34R");
Object.freeze(BCI_34R);
export var BCI_35 = new BatteryGroupSize("BCI_35", "35", "35");
Object.freeze(BCI_35);
export var BCI_36R = new BatteryGroupSize("BCI_36R", "36R", "36R");
Object.freeze(BCI_36R);
export var BCI_40R = new BatteryGroupSize("BCI_40R", "40R", "40R");
Object.freeze(BCI_40R);
export var BCI_41 = new BatteryGroupSize("BCI_41", "41", "41");
Object.freeze(BCI_41);
export var BCI_42 = new BatteryGroupSize("BCI_42", "42", "42");
Object.freeze(BCI_42);
export var BCI_43 = new BatteryGroupSize("BCI_43", "43", "43");
Object.freeze(BCI_43);
export var BCI_45 = new BatteryGroupSize("BCI_45", "45", "45");
Object.freeze(BCI_45);
export var BCI_46 = new BatteryGroupSize("BCI_46", "46", "46");
Object.freeze(BCI_46);
export var BCI_47 = new BatteryGroupSize("BCI_47", "47", "47");
Object.freeze(BCI_47);
export var BCI_48 = new BatteryGroupSize("BCI_48", "48", "48");
Object.freeze(BCI_48);
export var BCI_49 = new BatteryGroupSize("BCI_49", "49", "49");
Object.freeze(BCI_49);
export var BCI_50 = new BatteryGroupSize("BCI_50", "50", "50");
Object.freeze(BCI_50);
export var BCI_51 = new BatteryGroupSize("BCI_51", "51", "51");
Object.freeze(BCI_51);
export var BCI_51R = new BatteryGroupSize("BCI_51R", "51R", "51R");
Object.freeze(BCI_51R);
export var BCI_52 = new BatteryGroupSize("BCI_52", "52", "52");
Object.freeze(BCI_52);
export var BCI_53 = new BatteryGroupSize("BCI_53", "53", "53");
Object.freeze(BCI_53);
export var BCI_54 = new BatteryGroupSize("BCI_54", "54", "54");
Object.freeze(BCI_54);
export var BCI_55 = new BatteryGroupSize("BCI_55", "55", "55");
Object.freeze(BCI_55);
export var BCI_56 = new BatteryGroupSize("BCI_56", "56", "56");
Object.freeze(BCI_56);
export var BCI_57 = new BatteryGroupSize("BCI_57", "57", "57");
Object.freeze(BCI_57);
export var BCI_58 = new BatteryGroupSize("BCI_58", "58", "58");
Object.freeze(BCI_58);
export var BCI_58R = new BatteryGroupSize("BCI_58R", "58R", "58R");
Object.freeze(BCI_58R);
export var BCI_59 = new BatteryGroupSize("BCI_59", "59", "59");
Object.freeze(BCI_59);
export var BCI_60 = new BatteryGroupSize("BCI_60", "60", "60");
Object.freeze(BCI_60);
export var BCI_61 = new BatteryGroupSize("BCI_61", "61", "61");
Object.freeze(BCI_61);
export var BCI_62 = new BatteryGroupSize("BCI_62", "62", "62");
Object.freeze(BCI_62);
export var BCI_63 = new BatteryGroupSize("BCI_63", "63", "63");
Object.freeze(BCI_63);
export var BCI_64 = new BatteryGroupSize("BCI_64", "64", "64");
Object.freeze(BCI_64);
export var BCI_65 = new BatteryGroupSize("BCI_65", "65", "65");
Object.freeze(BCI_65);
export var BCI_70 = new BatteryGroupSize("BCI_70", "70", "70");
Object.freeze(BCI_70);
export var BCI_71 = new BatteryGroupSize("BCI_71", "71", "71");
Object.freeze(BCI_71);
export var BCI_72 = new BatteryGroupSize("BCI_72", "72", "72");
Object.freeze(BCI_72);
export var BCI_73 = new BatteryGroupSize("BCI_73", "73", "73");
Object.freeze(BCI_73);
export var BCI_74 = new BatteryGroupSize("BCI_74", "74", "74");
Object.freeze(BCI_74);
export var BCI_75 = new BatteryGroupSize("BCI_75", "75", "75");
Object.freeze(BCI_75);
export var BCI_76 = new BatteryGroupSize("BCI_76", "76", "76");
Object.freeze(BCI_76);
export var BCI_78 = new BatteryGroupSize("BCI_78", "78", "78");
Object.freeze(BCI_78);
export var BCI_85 = new BatteryGroupSize("BCI_85", "85", "85");
Object.freeze(BCI_85);
export var BCI_86 = new BatteryGroupSize("BCI_86", "86", "86");
Object.freeze(BCI_86);
export var BCI_90 = new BatteryGroupSize("BCI_90", "90", "90");
Object.freeze(BCI_90);
export var BCI_91 = new BatteryGroupSize("BCI_91", "91", "91");
Object.freeze(BCI_91);
export var BCI_92 = new BatteryGroupSize("BCI_92", "92", "92");
Object.freeze(BCI_92);
export var BCI_93 = new BatteryGroupSize("BCI_93", "93", "93");
Object.freeze(BCI_93);
export var BCI_95R = new BatteryGroupSize("BCI_95R", "95R", "95R");
Object.freeze(BCI_95R);
export var BCI_96R = new BatteryGroupSize("BCI_96R", "96R", "96R");
Object.freeze(BCI_96R);
export var BCI_97R = new BatteryGroupSize("BCI_97R", "97R", "97R");
Object.freeze(BCI_97R);
export var BCI_98R = new BatteryGroupSize("BCI_98R", "98R", "98R");
Object.freeze(BCI_98R);

export function validateNumber(number) {
    if (Number(number) === Number.NaN) {
        throw Error("Invalid parameter: number is expected");
    }
}

export function validateBoolean(boolean) {
    if (boolean !== false && boolean !== true) {
        throw Error("Invalid parameter: boolean is expected");
    }
}

export function getEnumerationValues(enumType){
    switch (enumType) {
        case "Distance":
            return ["Miles", "Kilometers"];
        case "Temperature":
            return ["Celsius", "Fahrenheit"];
        case "Volume":
            return ["CubicFoot", "Liters", "USGallons", "ImperialGallons"];
        case "Pressure":
            return ["PoundsPerSquareInch", "Kilopascals"];
        case "FuelEfficiency":
            return ["MilesPerUSGallon", "MilesPerImperialGallon", "KilometersPerLiter", "LitersPer100Kilometer", "LitersPer10Kilometer"];
        case "Speed":
            return ["MilesPerHour", "KilometerPerHour", "MetersPerSecond"];
        case "Electricity":
            return ["AmpHour", "MilliAmpHour"];
        case "Weight":
            return ["Pounds", "Kilograms"];
        case "Fuel":
            return ["Regular", "Plus", "Premium", "Diesel", "E85", "Electric", "CNG", "LPG"];
        case "Oil":
            return ["Standard", "Premium", "HighPremium"];
        case "BatteryGroupSize":
            return["BCI_21", "BCI_22F", "BCI_22HF", "BCI_22NF", "BCI_22R", "BCI_24", "BCI_24F",
                "BCI_24H", "BCI_24R", "BCI_24T", "BCI_25", "BCI_26", "BCI_26R", "BCI_27", "BCI_27F",
                "BCI_27H", "BCI_29NF", "BCI_33", "BCI_34", "BCI_34R", "BCI_35", "BCI_36R", "BCI_40R",
                "BCI_41", "BCI_42", "BCI_43", "BCI_45", "BCI_46", "BCI_47", "BCI_48", "BCI_49", "BCI_50",
                "BCI_51", "BCI_51R", "BCI_52", "BCI_53", "BCI_54", "BCI_55", "BCI_56", "BCI_57", "BCI_58",
                "BCI_58R", "BCI_59", "BCI_60", "BCI_61", "BCI_62", "BCI_63", "BCI_64", "BCI_65", "BCI_70",
                "BCI_71", "BCI_72", "BCI_73", "BCI_74", "BCI_75", "BCI_76", "BCI_78", "BCI_85", "BCI_86",
                "BCI_90", "BCI_91", "BCI_92", "BCI_93", "BCI_95R", "BCI_96R", "BCI_97R", "BCI_98R"];
        default:
            throw Error("Unknown unit type: " + enumType);
    }
}

export function getUnitObject(unit, enumType) {
    switch (unit) {
        case "Miles":
            return Miles;
        case "Kilometers":
            return Kilometers;
        case "Celsius":
            return Celsius;
        case "Fahrenheit":
            return Fahrenheit;
        case "CubicFoot":
            return CubicFoot;
        case "Liters":
            return Liters;
        case "USGallons":
            return USGallons;
        case "ImperialGallons":
            return ImperialGallons;
        case "PoundsPerSquareInch":
            return PoundsPerSquareInch;
        case "Kilopascals":
            return Kilopascals;
        case "MilesPerHour":
            return MilesPerHour;
        case "KilometerPerHour":
            return KilometerPerHour;
        case "MetersPerSecond":
            return MetersPerSecond;
        case "MilesPerUSGallon":
            return MilesPerUSGallon;
        case "MilesPerImperialGallon":
            return MilesPerImperialGallon;
        case "KilometersPerLiter":
            return KilometersPerLiter;
        case "LitersPer100Kilometer":
            return LitersPer100Kilometer;
        case "LitersPer10Kilometer":
            return LitersPer10Kilometer;
        case "AmpHour":
            return AmpHour;
        case "MilliAmpHour":
            return MilliAmpHour;
        case "Pounds":
            return Pounds;
        case "Kilograms":
            return Kilograms;
        case "Milliseconds":
            return Milliseconds;
        case "Seconds":
            return Seconds;
        case "Minutes":
            return  Minutes;
        case "Hours":
            return Hours;
        case "Instance":
            return Instance;
        case "Regular":
            return Regular;
        case "Plus":
            return Plus;
        case "Premium":
            if (enumType === "Oil") {
                return PremiumOil
            } else if (enumType === "Fuel") {
                return PremiumFuel;
            } else {
                throw Error("Unknown unit: " + unit);
            }
        case "Diesel":
            return Diesel;
        case "E85":
            return E85;
        case "Electric":
            return Electric;
        case "CNG":
            return CNG;
        case "LPG":
            return LPG;
        case "Standard":
            return Standard;
        case "HighPremium":
            return HighPremium;
        case "BCI_21":
            return BCI_21;
        case "BCI_22F":
            return BCI_22F;
        case "BCI_22HF":
            return BCI_22HF;
        case "BCI_22NF":
            return BCI_22NF;
        case "BCI_22R":
            return BCI_22R;
        case "BCI_24":
            return BCI_24;
        case "BCI_24F":
            return BCI_24F;
        case "BCI_24H":
            return BCI_24H;
        case "BCI_24R":
            return BCI_24R;
        case "BCI_24T":
            return BCI_24T;
        case "BCI_25":
            return BCI_25;
        case "BCI_26":
            return BCI_26;
        case "BCI_26R":
            return BCI_26R;
        case "BCI_27":
            return BCI_27;
        case "BCI_27F":
            return BCI_27F;
        case "BCI_27H":
            return BCI_27H;
        case "BCI_29NF":
            return BCI_29NF;
        case "BCI_33":
            return BCI_33;
        case "BCI_34":
            return BCI_34;
        case "BCI_34R":
            return BCI_34R;
        case "BCI_35":
            return BCI_35;
        case "BCI_36R":
            return BCI_36R;
        case "BCI_40R":
            return BCI_40R;
        case "BCI_41":
            return BCI_41;
        case "BCI_42":
            return BCI_42;
        case "BCI_43":
            return BCI_43;
        case "BCI_45":
            return BCI_45;
        case "BCI_46":
            return BCI_46;
        case "BCI_47":
            return BCI_47;
        case "BCI_48":
            return BCI_48;
        case "BCI_49":
            return BCI_49;
        case "BCI_50":
            return BCI_50;
        case "BCI_51":
            return BCI_51;
        case "BCI_51R":
            return BCI_51R;
        case "BCI_52":
            return BCI_52;
        case "BCI_53":
            return BCI_53;
        case "BCI_54":
            return BCI_54;
        case "BCI_55":
            return BCI_55;
        case "BCI_56":
            return BCI_56;
        case "BCI_57":
            return BCI_57;
        case "BCI_58":
            return BCI_58;
        case "BCI_58R":
            return BCI_58R;
        case "BCI_59":
            return BCI_59;
        case "BCI_60":
            return BCI_60;
        case "BCI_61":
            return BCI_61;
        case "BCI_62":
            return BCI_62;
        case "BCI_63":
            return BCI_63;
        case "BCI_64":
            return BCI_64;
        case "BCI_65":
            return BCI_65;
        case "BCI_70":
            return BCI_70;
        case "BCI_71":
            return BCI_71;
        case "BCI_72":
            return BCI_72;
        case "BCI_73":
            return BCI_73;
        case "BCI_74":
            return BCI_74;
        case "BCI_75":
            return BCI_75;
        case "BCI_76":
            return BCI_76;
        case "BCI_78":
            return BCI_78;
        case "BCI_85":
            return BCI_85;
        case "BCI_86":
            return BCI_86;
        case "BCI_90":
            return BCI_90;
        case "BCI_91":
            return BCI_91;
        case "BCI_92":
            return BCI_92;
        case "BCI_93":
            return BCI_93;
        case "BCI_95R":
            return BCI_95R;
        case "BCI_96R":
            return BCI_96R;
        case "BCI_97R":
            return BCI_97R;
        case "BCI_98R":
            return BCI_98R;
        default:
            throw Error("Unknown unit: " + unit);
    }
}