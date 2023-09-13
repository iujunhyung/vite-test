import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import "./lit-element";
import ReactComponent from './react-component'

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>여기버튼</button>
        <h1>Count: {count}</h1>
      </div>

      <hr />

      <div>
        <h1>Hello Lit</h1>  
        <my-element count={count}></my-element>
      </div>

      <hr />

      <div>
        <h1>Hello React</h1>
        <ReactComponent count={count} />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)