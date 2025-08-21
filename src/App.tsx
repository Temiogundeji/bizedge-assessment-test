import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "./store"
import { increment, decrement } from "./features/counterSlice"
import { Button } from "@/components/ui/button"

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Redux Counter: {count}</h1>
      <div className="flex gap-2">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button variant="secondary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  )
}

export default App
