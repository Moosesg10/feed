import React, { useContext, useEffect, useState } from "react";
import { API } from "../ConstGloblas";
import { contextGlobal } from "../context/index.contex";
import Modals from "../components/Modal";
import { StatsUser } from "../components/StatsUser";
export const Profile = () => {
  const [dataUpdate, setDataUpdate] = useState({
    file: "",
    nameImage:""
  });

  const context = useContext(contextGlobal);
  const [show, setShow] = useState(false);
  const [prev, setPrev] = useState(false);

  const handleShow = () => setShow(true);
  const { id, avatar, name, correo } = context.dataUser;
  const { setDataUser, setLoader } = context;

  const handleData = async (e) => {
    let file = e.currentTarget.files;
    if (e.target.name === "file") {
      setDataUpdate({ ...dataUpdate, file: file[0] });
      setPrev(true);
    }
  };

  const Update = async () => {
    
    const formData = new FormData();
    formData.append("file", dataUpdate.file);

    console.log(dataUpdate.nameImage)
    const data = {
      avatar: dataUpdate.nameImage,
    };

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const optionsUploas = {
      method: "POST",
      body: formData,
    };

   fetch(`${API}uplodaAvatar?nameImag=${dataUpdate.nameImage}`, optionsUploas).then(() => {
    fetch(`${API}profile/${id}`, options).then(
     async (res) => {
        const datas = await res.json();
        setDataUser(datas[0]);
      }
    )
   }
   )
  };

  const Preview = async () => {
    setLoader(true)
    const formData = new FormData();
    formData.append("file", dataUpdate.file);
    const optionsUploas = {
      method: "POST",
      body: formData,
    };
   fetch(`${API}preview-upload`, optionsUploas).then((res) =>{
    res.text().then((nameimage) =>{
      const file =dataUpdate.file
      setDataUpdate({ file , nameImage:nameimage})
      handleShow()
      setLoader(false)
    }
    )
   });
  
    
  
  };
  useEffect(() => {
    if (prev) Preview();
  }, [prev]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "thin solid #fff",
          borderRadius: "5em",
          padding: "2em",
        }}
      >
        <img
          src={`http://localhost:3000/avatar/${avatar}`}
          alt=""
          style={{ padding: "0", width: "300px", height: "400px" }}
        />
        <div>
          <p>Autor : {name}</p>
          <p>Correo : {correo}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <form>
              <label
                htmlFor="File"
                style={{
                  width: "auto",
                  border: "thin solid #382468cc",
                  padding: "0.5em",
                  borderRadius: "2em",
                  cursor: "pointer",
                }}
              >
                Change Your Avatar
                <input
                  hidden
                  type="file"
                  name="file"
                  id="File"
                  onChange={handleData}
                />
              </label>
            </form>
            <button
              style={{
                width: "auto",
                border: "thin solid #382468cc",
                padding: "0.5em",
                borderRadius: "2em",
                cursor: "pointer",
                backgroundColor: "transparent",
                color: "#fff",
              }}
            >
              Editar perfil
            </button>
          </div>
        </div>
      </div>

      {show && (
        <Modals
          data={dataUpdate}
          update={Update}
          show={show}
          setShow={setShow}
          setDataUpdate={setDataUpdate}
          setPrev={setPrev}
        />
      )}
      <StatsUser />
    </div>
  );
};
