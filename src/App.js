import { useState } from 'react'
import ButtonDef from './components/button/ButtonDef'

const App = () => {
  const [swit, setSwit] = useState(true)
  const [swit2, setSwit2] = useState(true)

  function handleChange() {
    setSwit(!swit)
  }
  function handleChange2() {
    setSwit2(!swit2)
  }

  const comp1 = (
    <div>
      <span>asdasd</span>
      <h3>asdasd</h3>
    </div>
  )

  const comp2 = (
    <div className="">
      <ButtonDef
        onClick={handleChange2}
        background="orange"
        border="3px solid gray"
      >
        Adicionar
      </ButtonDef>
      {swit2 ? (
        <div>
          <h3>Joel</h3>
        </div>
      ) : (
        <ButtonDef background="orange" border="3px solid gray">
          Restar
        </ButtonDef>
      )}
    </div>
  )

  return (
    <div>
      <button onClick={handleChange}>cambiar</button>
      {swit ? comp1 : comp2}
      {/* <ButtonDef background="orange" border="3px solid gray">
        Adicionar
      </ButtonDef>
      <ButtonDef
        fontSize="10px"
        color="white"
        margin="10px"
        border="3px solid gray"
        boxShadow="6px 6px 2px rgba(0,0,0,0.8)"
      >
        Adicionar
      </ButtonDef>
      <H3></H3> */}
      {/* <TableDef /> */}
    </div>
  )
}

export default App
