import * as plugins from './smartspeed.plugins'

export let standardExport = 'Hi there! :) This is a exported string'

export interface ISmartSpeedConstructorOptions {
  unitname: string
  timeFrameInMilliSeconds: number
}

export class Smartspeed {
  unitname: string
  timeFrameInMilliSeconds: number
  startTime: Date
  lastMeasurement: number
  /**
   * the constructor
   * @param optionsArg
   */
  constructor(optionsArg: ISmartSpeedConstructorOptions) {
    
  }

  /**
   * triggers measurement
   */
  submitMeasurement (measurementNumber: number) {
    this.startMeasurement()
    this.lastMeasurement = this.lastMeasurement + measurementNumber
  }

  startMeasurement() {
    if (!this.startTime) {
      this.startTime = new Date()
    }
  }
}
