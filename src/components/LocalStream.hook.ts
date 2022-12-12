import { useEffect, useRef } from 'react'

const useHook = (cameraId: string = '') => {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: cameraId
      }
    }).then(stream => {
      ref.current!.srcObject = stream
    })
  }, [cameraId])

  return { ref }
}

export default useHook
