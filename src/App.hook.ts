import { useState } from 'react'

const useHook = () => {
  const [cameraId, setCameraId] = useState('')

  const onClick = async () => {
    const cameraIds = await navigator.mediaDevices.enumerateDevices().then(devices => {
      return devices.filter(device => {
        return device.kind === 'videoinput'
      }).map(camera => {
        return camera.deviceId
      })
    })
    if (cameraIds.length <= 1) {
      setCameraId(cameraIds[0])
      return
    }
    if (cameraIds.indexOf(cameraId) === -1) {
      setCameraId(cameraIds[1])
      return
    }
    else {
      setCameraId(cameraIds[cameraIds.indexOf(cameraId) + 1])
      return
    }
  }

  return { cameraId, onClick }
}

export default useHook
