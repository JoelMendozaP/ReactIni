import './ButtonDef.css'

const ButtonDef = (props) => {
  const {
    children,
    onClick,
    background = 'black',
    fontSize = '20px',
    ...rest
  } = props

  return (
    <button
      onClick={onClick}
      style={{
        background: background,
        fontSize: fontSize,
        ...rest,
      }}
      className="ButtonDef"
    >
      {children}
    </button>
  )
}

export default ButtonDef
