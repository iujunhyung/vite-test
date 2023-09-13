import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

function ReactComponent() {
  const [count, setCount] = useState(0)

  return (
    <>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export function renderReactComponent() {
  const root = document.createElement('span');
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ReactComponent  />
    </React.StrictMode>,
  )
  return root
}