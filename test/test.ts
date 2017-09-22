import { expect, tap } from 'tapbundle'
import * as smartspeed from '../ts/index'

let testSmartspeed: smartspeed.Smartspeed

tap.test('first test', async () => {
  testSmartspeed = new smartspeed.Smartspeed({
    unitname: 'operations',
    timeFrameInMilliSeconds: 1000
  })
})

tap.test('', async () => {
  testSmartspeed.submitMeasurement(10)
})

tap.start()
