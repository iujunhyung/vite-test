import { useState } from 'react'

export default function ReactComponent(props: { count: number }) {
  const [count, setCount] = useState(0)

  return (
    <>
        <p>Current count: {props.count}</p>
        <p>Local count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}