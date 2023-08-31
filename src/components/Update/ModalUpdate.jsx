import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { API } from "../../ConstGloblas";
import { contextGlobal } from "../../context/index.contex";

export const ModalUpdate = ({ setShow, ID }) => {
    const context = useContext(contextGlobal)
    const {setDataPostUser} = context
  const [updatePost, setUpdatePost] = useState({
    title: "",
    nameImg: "",
    descripcion: "",
    file: "",
  });
  const handleClose = () => setShow(false);
  let title, descripcion, file;
  const handleUpdate = (e) => {
    if (e.target.name === "title") {
      title = e.target.value;
      setUpdatePost({ ...updatePost, title: title });
    }
    if (e.target.name === "descripcion") {
      descripcion = e.target.value;
      setUpdatePost({ ...updatePost, descripcion: descripcion });
    }
    if (e.target.name === "file") {
      file = e.target.files;
      setUpdatePost({ ...updatePost, file: file[0] });
    }
  };

  const UpdatePost = async () => {


    const formdata = new FormData();
    formdata.append("file", updatePost.file);
    const updateimage = {
      method: "POST",
      body: formdata,
    };
    const dataUpdate = {
      title: updatePost.title,
      nameImg: updatePost.file.name,
      descripcion: updatePost.descripcion,
    };
    const optios = {
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(dataUpdate)
    }
    const updateimg = await fetch(`${API}chage-images`, updateimage);
    const updateposts = await fetch(`${API}post-update/${ID}`, optios);
    const resposne = await updateposts.json()
    setDataPostUser(resposne)
    handleClose()
    
  };

  const Subtmit = () => {
    UpdatePost();
  };
  return createPortal(
    <div className="modal is-open">
      <div className="modal-container">
        <header
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <button onClick={handleClose}>X</button>
        </header>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input type="text" name="title" onBlur={handleUpdate} />
          <textarea
            type="text"
            name="descripcion"
            maxLength={250}
            onBlur={handleUpdate}
          />
          <label htmlFor="File" style={{ color: "#222" }}>
            Change Images
            <input
              hidden
              type="file"
              name="file"
              id="File"
              onChange={handleUpdate}
            />
          </label>
        </form>
        <button onClick={Subtmit}>Aceptar</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
