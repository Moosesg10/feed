import React, { useContext } from 'react'
import { contextGlobal } from '../context/index.contex'

const Error = () => {
    const context = useContext(contextGlobal)
    const{datas,erros}=context
  
    return (
    erros &&<div style={{width:"100%",height:"100%" , display:"flex", justifyContent:"center",alignItems:"center"}}>
    <h1 style={{backgroundColor:"red"}}>{datas.message}</h1>
  </div>
  )
}

export default Error
