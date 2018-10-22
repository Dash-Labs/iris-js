function validateNumber(number) {
    if (Number(number) === Number.NaN) {
        throw Error("Invalid parameter: number is expected");
    }
}

function validateBoolean(boolean) {
    if (boolean !== false && boolean !== true) {
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
            throw Error("Unknown unit type: " + enumType);
    }
}

function getUnitObject(unit, enumType) {
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
        case "None":
            return None;
        default:
            throw Error("Unknown unit: " + unit);
    }
}