const sleep = async function (ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const keepRunning = async function () {
  await window.loop().then(() => setTimeout(keepRunning, 100))
}

const doIt = async function () {
  keepRunning()
}
