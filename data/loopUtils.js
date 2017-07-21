const sleep = async function (ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const keepRunning = async function () {
  await sleep(1000)
  await loop().then(() => setTimeout(keepRunning, 100))
}

const doIt = async function () {
  keepRunning()
}

window.doIt = doIt
