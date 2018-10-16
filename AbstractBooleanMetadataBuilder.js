function AbstractBooleanMetadataBuilder(name, unit, getDefault) {
    AbstractMetadataBuilder.call(this, name, "Boolean", unit,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                validateBoolean(value);
                return value;
            } else {
                return getDefault(unit);
            }
        }, getDefault);
}
