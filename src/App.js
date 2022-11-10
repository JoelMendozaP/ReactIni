import { useState } from 'react'

function App() {
  const [color, setcolor] = useState('red')

  function onSubmit() {
    const simbolos = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color = color + simbolos[Math.floor(Math.random() * 16)]
    }
    setcolor(color)
  }

  return (
    <div className="App">
      <input type="text" onChange={onSubmit} />
      <div
        style={{
          width: '200px',
          height: '200px',
          background: color,
        }}
        // onClick={onSubmit}
        // onMouseEnter={onSubmit}
        // onMouseOut={onSubmit}
        // onChange={onSubmit}
      ></div>
    </div>
  )
}

export default App
