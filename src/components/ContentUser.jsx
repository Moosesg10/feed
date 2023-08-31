import React, { useContext } from "react";
import { contextGlobal } from "../context/index.contex";
import { useState } from "react";
import { ModalUpdate } from "./Update/ModalUpdate";

const ContentUser = () => {
    const context = useContext(contextGlobal)
    const DeletePost = context.DeletePost
    const dataPostUser = context.dataPostUser
    const [show, setShow] = useState(false);
    const [ID, setID] = useState("")

  return (
    <>
      <div className="contendor-dash">
        {dataPostUser.map((data, index) => (
          <div className="post-dash" key={index}>
            <img
              src={`http://localhost:3000/download/${data.nameImg}`}
              alt=""
              className="image-dash"
            />
            <nav style={{ display: "flex", justifyContent: "center" , gap:"0.5em",border:"thin solid #fff", borderRadius:"5em", width:"100px", padding:"0.2rem"}}>
              <button onClick={() => DeletePost(data.id,data.nameImg)} className="btn-accion">Delete</button>
              <button className="btn-accion" onClick={() =>{
                setID(data.id)
                setShow(true)
                }}>Edit</button>
            </nav>
          </div>
        ))}
        {show &&  <ModalUpdate setShow={setShow} ID={ID}/>}
      </div>
    </>
  );
};

export default ContentUser;
