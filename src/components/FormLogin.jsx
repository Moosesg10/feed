import React, { useContext } from 'react'
import { contextGlobal } from '../context/index.contex'

const FormLogin = () => {

    const context = useContext(contextGlobal)
    const handleSubtmit = context.handleSubtmit
    const Login = context.Login
  return (
 
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        justifyContent: "center",
      }}
    >
      <input type="text" name="correo" onBlur={handleSubtmit} />
      <input type="text" name="password" onBlur={handleSubtmit} />
      <button onClick={Login}>Submit</button>
    </form>

  )
}

export default FormLogin
