function validateNumber(number) {
    if (Number(number) === Number.NaN) {
        throw Error("Invalid parameter: number is expected");
    }
}

function validateBoolean(boolean) {
    if (boolean.toLowerCase() !== "false" && boolean.toLowerCase() !== "true") {
        throw Error("Invalid parameter: boolean is expected");
    }
}

function getEnumerationValues(enumType){
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
            throw Error(String.format("Unknown unit type: %s", enumType));
    }
}

function getUnitObject(unit) {
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
        case "None":
            return None;
        default:
            throw Error(String.format("Unknown unit: %s", unit));
    }
}