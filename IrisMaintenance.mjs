import {getDisplayName} from "./IrisBuilders";

function Urgency(name) {
    this.name = name
}

export var No = new Urgency("No");
Object.freeze(No);
export var Low = new Urgency("Low");
Object.freeze(Low);
export var Medium = new Urgency("Medium");
Object.freeze(Medium);
export var High = new Urgency("High");
Object.freeze(High);

function MaintenanceType(name) {
    this.name = name;
    this.display = getDisplayName(name);
}

export var OilChange = new MaintenanceType("OilChange");
Object.freeze(OilChange);
export var OilFilterChange = new MaintenanceType("OilFilterChange");
Object.freeze(OilFilterChange);
export var TireRotation = new MaintenanceType("TireRotation");
Object.freeze(TireRotation);
export var SparkPlugChange = new MaintenanceType("SparkPlugChange");
Object.freeze(SparkPlugChange);
export var TireAlignment = new MaintenanceType("TireAlignment");
Object.freeze(TireAlignment);
export var AirFilterChange = new MaintenanceType("AirFilterChange");
Object.freeze(AirFilterChange);
export var FuelFilterChange = new MaintenanceType("FuelFilterChange");
Object.freeze(FuelFilterChange);
export var BrakeService = new MaintenanceType("BrakeService");
Object.freeze(BrakeService);
export var BrakeFluidChange = new MaintenanceType("BrakeFluidChange");
Object.freeze(BrakeFluidChange);
export var CoolingSystemService = new MaintenanceType("CoolingSystemService");
Object.freeze(CoolingSystemService);
export var CoolantChange = new MaintenanceType("CoolantChange");
Object.freeze(CoolantChange);
export var AccessoryBeltService = new MaintenanceType("AccessoryBeltService");
Object.freeze(AccessoryBeltService);
export var TimingBeltService = new MaintenanceType("TimingBeltService");
Object.freeze(TimingBeltService);
export var SuspensionService = new MaintenanceType("SuspensionService");
Object.freeze(SuspensionService);
export var WiperBladeChange = new MaintenanceType("WiperBladeChange");
Object.freeze(WiperBladeChange);
export var TransmissionFluidChange = new MaintenanceType("TransmissionFluidChange");
Object.freeze(TransmissionFluidChange);
export var MajorService = new MaintenanceType("MajorService");
Object.freeze(MajorService);
export var MinorService = new MaintenanceType("MinorService");
Object.freeze(MinorService);
export var TuneUp = new MaintenanceType("TuneUp");
Object.freeze(TuneUp);
export var EngineLight = new MaintenanceType("EngineLight");
Object.freeze(EngineLight);
export var BatteryChange = new MaintenanceType("BatteryChange");
Object.freeze(BatteryChange);
export var EmissionsFail = new MaintenanceType("EmissionsFail");
Object.freeze(EmissionsFail);