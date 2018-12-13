function AbstractMetadataBuilder(name, metadataType, unit, convertToExpected, getDefault) {
    MetadataBuilder.call(this,
        function getMetadata(container) {
            if (container == null || container.metadata == null || container.metadata.length === 0) {
                return null;
            }
            for (var i = 0; i < container.metadata.length; i++) {
                var element = container.metadata[i];
                if (element != null && name != null && name === element.name) {
                    return element;
                }
            }
        },
        function get(container) {
            var element = this.getMetadata(container);
            return element == null ? null : convertToExpected(element.value, element.unit);
        },
        function getOrDefault(container, unit) {
            var value = this.get(container);
            return (value == null) ? this.getDefault(unit) : value;
        },
        getDefault,
        function build(id, value, unit) {
            if (id == null || id.length === 0) {
                throw new Error("id cannot be null or empty");
            }
            return new Metadata(id + "::" + name, name, value, this.getType(), this.getEnumerationValues(), this.getLowerBound(unit),
                this.getUpperBound(unit), this.getUnitType(), getUnitObject(unit).name);
        });
    this.name = name;
    this.metadatType = metadataType;
    this.unit = unit;
    this.getDisplay = function getDisplay() {
        return getDisplayName(name);
    };
    this.convertToExpected = convertToExpected;
    this.getType = function() {
        return metadataType;
    };
    this.getEnumerationValues = function getEnumerationValues() {
        return null;
    };
    this.getEnumerationDisplayValues = function getEnumerationDisplayValues() {
        return null;
    };
    this.getUpperBound = function getUpperBound(unit) {
        return null;
    };
    this.getLowerBound = function getLowerBound(unit) {
        return null;
    };
    this.getUnitType = function getUnitType() {
        return unit;
    };
}