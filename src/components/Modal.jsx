import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { contextGlobal } from "../context/index.contex";
import { Loader } from "./Loader";
function Modals({ data, update, show, setShow, setDataUpdate, setPrev }) {
  const context = useContext(contextGlobal);
  const { loader } = context;

  const [newUrl, setNewUrl] = useState(
    `http://localhost:3000/preview/${data.nameImage}`
  );
  const [nameFile, setNameFile] = useState(data.nameImage);
  const Subtmit = (e) => {
    console.log("paso")
    update();
    setPrev(false);
    setShow(false);
    setNewUrl("");
    setNameFile("");
  };

  const Cancel = async () => {
    const res = await fetch(
      `http://localhost:3000/delete-preview/${data.nameImage}`
    );
    setNewUrl("");
    setNameFile("");
    setDataUpdate({
      file: "",
    });
    setPrev(false);
    setShow(false);
  };

  return createPortal(
    <div className="modal is-open">
      <div className="modal-container">
        {loader ? (
          <Loader />
        ) : (
          <>
            <header
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <button onClick={Cancel}>X</button>
            </header>
            <img src={newUrl} alt="avatar" width="200px" height="200px" />
            <p style={{ color: "#222" }}>
              Esta por cambiar tu Avatar por : {nameFile}
            </p>
            <button onClick={Subtmit}>Aceptar</button>
            <button onClick={Cancel}>Cancelar</button>
          </>
        )}
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modals;
