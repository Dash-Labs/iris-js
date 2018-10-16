function Metadata(id, name, value, type, enumerationValues, lowerBound, upperBound, unitType, unit) {
    Identifiable.call(this, id);
    this.name = name;
    this.value = value;
    this.type = type;
    this.enumerationValues = enumerationValues;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.unitType = unitType;
    this.unit = unit;
}