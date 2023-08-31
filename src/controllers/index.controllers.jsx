import { useContext } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { contextGlobal } from "../context/index.contex"

export const HandleNaviagate = ({redirecTO, children}) => {
    const context = useContext(contextGlobal)
    const { login } = context
    
    if(login === true){
     return <Navigate to={redirecTO} />
    }
  
   return children ? children : <Outlet/>
}


