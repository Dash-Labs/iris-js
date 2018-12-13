function AbstractEnumMetadataBuilder(name, enumType, unit, getDefault) {
    AbstractMetadataBuilder.call(this, name, "Enumeration", unit,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                return getUnitObject(value, enumType);
            } else {
                return getUnitObject(getDefault(unit));
            }
        }, getDefault);
    this.enumType = enumType;
    this.getEnumerationValues = function() {
        return getEnumerationValues(enumType);
    };
    this.getEnumerationDisplayValues = function() {
        let enumDisplays = [];
        let enumValues = getEnumerationValues(enumType);
        for (enumValue in enumValues) {
            let unitObject = getUnitObject(enumValue, enumType);
            let label = unitObject.name;
            if (unitObject instanceof Type) {
                label = unitObject.label;
            }
            enumDisplays.push(new EnumDisplay(label, enumValue));
        }
        return enumDisplays;
    };
}