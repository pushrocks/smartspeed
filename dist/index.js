"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardExport = 'Hi there! :) This is a exported string';
class Smartspeed {
    /**
     * the constructor
     * @param optionsArg
     */
    constructor(optionsArg) {
    }
    /**
     * triggers measurement
     */
    submitMeasurement(measurementNumber) {
        this.startMeasurement();
        this.lastMeasurement = this.lastMeasurement + measurementNumber;
    }
    startMeasurement() {
        if (!this.startTime) {
            this.startTime = new Date();
        }
    }
}
exports.Smartspeed = Smartspeed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVXLFFBQUEsY0FBYyxHQUFHLHdDQUF3QyxDQUFBO0FBT3BFO0lBS0U7OztPQUdHO0lBQ0gsWUFBWSxVQUF5QztJQUVyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUIsQ0FBRSxpQkFBeUI7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFBO0lBQ2pFLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUM3QixDQUFDO0lBQ0gsQ0FBQztDQUNGO0FBMUJELGdDQTBCQyJ9