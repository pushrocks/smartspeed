"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartspeed.plugins");
exports.standardExport = 'Hi there! :) This is a exported string';
class Smartspeed {
    /**
     * the constructor
     * @param optionsArg
     */
    constructor(optionsArg) {
        this.measurements = [];
        this.unitname = optionsArg.unitname;
        this.timeFrameInMilliSeconds = optionsArg.timeFrameInMilliSeconds;
    }
    /**
     * triggers measurement
     */
    submitMeasurement(measurementNumber) {
        this.startMeasurement();
        this.measurements.push({
            pointInTime: new Date(),
            measurement: measurementNumber
        });
        plugins.smartdelay.delayFor(this.timeFrameInMilliSeconds)
            .then(() => {
            this.measurements.pop();
        });
    }
    startMeasurement() {
        if (!this.startTime) {
            this.startTime = new Date();
        }
    }
    getSpeed() {
        let addedMeasurement = 0;
        for (let measurement of this.measurements) {
            addedMeasurement = addedMeasurement + measurement.measurement;
        }
        return addedMeasurement;
    }
}
exports.Smartspeed = Smartspeed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUErQztBQUVwQyxRQUFBLGNBQWMsR0FBRyx3Q0FBd0MsQ0FBQTtBQVlwRTtJQUtFOzs7T0FHRztJQUNILFlBQVksVUFBeUM7UUFMN0MsaUJBQVksR0FBd0IsRUFBRSxDQUFBO1FBTTVDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQTtRQUNuQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixDQUFBO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQixDQUFFLGlCQUF5QjtRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixXQUFXLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDdkIsV0FBVyxFQUFFLGlCQUFpQjtTQUMvQixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7YUFDdEQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNULElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxnQkFBZ0IsR0FBVyxDQUFDLENBQUE7UUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDMUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQTtRQUMvRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFBO0lBQ3pCLENBQUM7Q0FDRjtBQTFDRCxnQ0EwQ0MifQ==