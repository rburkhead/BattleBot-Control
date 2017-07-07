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

// this is run at update rate //
const loop = async function () {
  await fwd()
  await fwd()
  await fwd()
  // console.log(Date.now() - start)
}
