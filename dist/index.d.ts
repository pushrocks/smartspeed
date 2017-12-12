export declare let standardExport: string;
export interface ISmartSpeedConstructorOptions {
    unitname: string;
    timeFrameInMilliSeconds: number;
}
export declare class Smartspeed {
    unitname: string;
    timeFrameInMilliSeconds: number;
    startTime: Date;
    private measurements;
    /**
     * the constructor
     * @param optionsArg
     */
    constructor(optionsArg: ISmartSpeedConstructorOptions);
    /**
     * triggers measurement
     */
    submitMeasurement(measurementNumber: number): void;
    startMeasurement(): void;
    getSpeed(): number;
}
