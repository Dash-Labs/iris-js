function AbstractEnumMetadataBuilder(name, enumType, unit, getDefault) {
    AbstractMetadataBuilder.call(this, name, "Enumeration", unit,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                return value;
            } else {
                return getDefault(unit);
            }
    }, getDefault);
    this.enumType = enumType;
    this.getEnumerationValues = getEnumerationValues(enumType);
}