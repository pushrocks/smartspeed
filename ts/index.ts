import * as plugins from './smartspeed.plugins'

export let standardExport = 'Hi there! :) This is a exported string'

export interface ISmartSpeedConstructorOptions {
  unitname: string
  timeFrameInMilliSeconds: number
}

interface ISpeedMeasurement {
  pointInTime: Date
  measurement: number
}

export class Smartspeed {
  unitname: string
  timeFrameInMilliSeconds: number
  startTime: Date
  private measurements: ISpeedMeasurement[] = []
  /**
   * the constructor
   * @param optionsArg
   */
  constructor(optionsArg: ISmartSpeedConstructorOptions) {
    this.unitname = optionsArg.unitname
    this.timeFrameInMilliSeconds = optionsArg.timeFrameInMilliSeconds
  }

  /**
   * triggers measurement
   */
  submitMeasurement (measurementNumber: number) {
    this.startMeasurement()
    this.measurements.push({
      pointInTime: new Date(),
      measurement: measurementNumber
    })
    plugins.smartdelay.delayFor(this.timeFrameInMilliSeconds)
      .then(() => {
        this.measurements.pop()
      })
  }

  startMeasurement () {
    if (!this.startTime) {
      this.startTime = new Date()
    }
  }

  getSpeed () {
    let addedMeasurement: number = 0
    for (let measurement of this.measurements) {
      addedMeasurement = addedMeasurement + measurement.measurement
    }
    return addedMeasurement
  }
}
