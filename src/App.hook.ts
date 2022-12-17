import { useEffect, useState } from 'react'

const useHook = () => {
  const [cameraIds, setCameraIds] = useState<string[]>([])
  const [cameraId, setCameraId] = useState('')

  useEffect(() => {
    const handleCamerasChange = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const cameras = devices.filter(device => device.kind === 'videoinput')
      setCameraIds(cameras.map(camera => camera.deviceId))
    }

    handleCamerasChange()
    navigator.mediaDevices.addEventListener('devicechange', handleCamerasChange)
  }, [])

  const handleClick = async () => {
    if (cameraIds.length <= 1) {
      return
    }
    if (cameraIds.indexOf(cameraId) === -1) {
      setCameraId(cameraIds[1])
      return
    }
    else {
      setCameraId(cameraIds[cameraIds.indexOf(cameraId) + 1] || cameraIds[0])
      return
    }
  }

  return { cameraId, handleClick }
}

export default useHook
