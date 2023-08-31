import React, { useContext, useEffect } from "react";
import { contextGlobal } from "../context/index.contex";
import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu";

export const Headers = () => {
    const context = useContext(contextGlobal);
    const {
      CreateUsers,
      login,
      setLogin,
      createUser
    }=context

    const navigate = useNavigate()
    const Logins = () => {
        return navigate("/login");
      };
    useEffect(() => {
      if(createUser)navigate("/create-user")
    }, [createUser])

  return (
    <header style={{display:"flex",justifyContent:"space-between",alignItems:"center", paddingInline:"2em", width:"1200px"}}>
     
        <h1>Hype Post News</h1>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {login ? (
          <>
           <Menu/>
          </>
        ) : (
          <>
            <button onClick={CreateUsers}>Crear Users</button>
            <button onClick={Logins}>Login</button>
          </>
        )}
      </nav>
    </header>
  );
};
