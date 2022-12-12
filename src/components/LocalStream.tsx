import useHook from './LocalStream.hook'

type Props = {
  cameraId: string
}

const LocalStream = ({ cameraId }: Props) => {
  const { ref } = useHook(cameraId)

  return (
    <video ref={ref} autoPlay muted playsInline className="max-h-full flex-auto"></video>
  )
}

export default LocalStream
