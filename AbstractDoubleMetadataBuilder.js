function AbstractDoubleMetadataBuilder(name, unit, getUpperBound, getLowerBound, getDefault) {
    AbstractMetadataBuilder.call(this, name, "Number", unit,
        function convertToExpected(value, unit) {
            if (value != null && value.length !== 0) {
                validateNumber(value);
                return value;
            } else {
                return getDefault(unit);
            }
        }, getDefault);
    this.getUpperBound = getUpperBound;
    this.getLowerBound = getLowerBound;
}
