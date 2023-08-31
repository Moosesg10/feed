import React, { useContext, useEffect } from "react";
import { contextGlobal } from "../context/index.contex";
import { useNavigate } from "react-router-dom";

export const FormUser = () => {

  const context = useContext(contextGlobal)


  const { HandleFormUser,SubtmitUser,createUser}= context
const navigate = useNavigate()
useEffect(() => {
    if(!createUser)navigate('/')
}, [createUser])


  return (

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
        }}
      >
        <input type="text" name="name"  onBlur={HandleFormUser} required/>
        <input type="text" name="correo"  onBlur={HandleFormUser} required/>
        <input type="text" name="password"  onBlur={HandleFormUser} required/>
        <button onClick={SubtmitUser}>Enviar</button>
      </form>

  );
};


