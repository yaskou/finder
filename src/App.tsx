import useHook from './App.hook'
import LocalStream from './components/LocalStream'

function App() {
  const { cameraId, onClick } = useHook()

  return (
    <article onClick={onClick} className="h-[100svh] bg-zinc-900 p-6 flex justify-center items-center">
      <LocalStream cameraId={cameraId} />
    </article>
  )
}

export default App
