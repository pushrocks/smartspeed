import { expect, tap } from 'tapbundle'
import * as smartspeed from '../ts/index'
import * as smartdelay from 'smartdelay'

let testSmartspeed: smartspeed.Smartspeed

tap.test('first test', async () => {
  testSmartspeed = new smartspeed.Smartspeed({
    unitname: 'operations',
    timeFrameInMilliSeconds: 1000
  })
})

tap.test('should submit a measurement', async () => {
  testSmartspeed.submitMeasurement(10)
})

tap.test('should get speed', async () => {
  let speed = testSmartspeed.getSpeed()
  console.log(`The current speed is ${speed}`)
  expect(speed).to.equal(10)
})

tap.test('speed should drop after one second', async () => {
  await smartdelay.delayFor(1100)
  let speed = testSmartspeed.getSpeed()
  console.log(`The current speed is ${speed}`)
  expect(speed).to.equal(0)
})

tap.start()
