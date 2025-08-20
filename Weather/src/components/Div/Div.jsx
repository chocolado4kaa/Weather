import "./Div.scss"

const Div = ({ children, className = null }) => {
  return (
    <div className={`div flex flex-col justify-start relative  ${className}`}>
      {children}
    </div>
  )
}

export default Div;