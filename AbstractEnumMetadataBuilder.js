function AbstractEnumMetadataBuilder(name, enumType, unit, getDefault) {
    AbstractMetadataBuilder.call(this, name, "Enumeration", unit,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                return getUnitObject(value);
            } else {
                return getUnitObject(getDefault(unit));
            }
        }, getDefault);
    this.enumType = enumType;
    this.getEnumerationValues = function() {
        return getEnumerationValues(enumType);
    };
}