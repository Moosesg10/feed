import React, { useContext } from "react";
import {contextGlobal} from "../context/index.contex";

export const FormPost = () => {
    const context = useContext(contextGlobal)
    const{handleFromPost, SubtmitPost , setDataPost,setCreate} =context
        const Close = () =>{
          setDataPost({
            autor: "",
            title: "",
            descripcion: "",
            file: "",
          })
          setCreate(false)
        }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        width: "100%"
      }}
    >
      <div style={{width:"30%", display:"flex", justifyContent:"flex-end"}}>
      <button style={{textAlign:"end"}} onClick={Close}>X</button>
      </div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          justifyContent: "center",
        }}
      >
        <input type="text" name="title" onBlur={handleFromPost} required />
        <textarea  type="text" name="descripcion" onBlur={handleFromPost} maxLength={250} required />
        <input type="file" name="file" onBlur={handleFromPost} required/>
        <button onClick={SubtmitPost}>Submit</button>
      </form>
    </div>
  );
};

