/* eslint-disable */

// define devices and controls //
var motorDrive

// this is run once //
function setup () {
  motorDrive = new TwoWheelDrive()
}

const fwd = async function() {
  motorDrive.setMotorPowers(0.5,0.5)
  await sleep(1000)
  motorDrive.setMotorPowers(0,0)
  await sleep(1000)
}

const spin = async function() {
  motorDrive.setMotorPowers(0.5,-0.5)
  await sleep(1000)
  motorDrive.setMotorPowers(0,0)
  await sleep(1000)
}

let stop= false
let count = 0;
// this is run at update rate //
const loop = async function () {
  if (count >= 3) return
  await fwd()
  await spin()
  stop = true
  count++
}
