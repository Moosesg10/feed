import { API } from "../ConstGloblas";

export const getDataUser = async (
  setDataUser,
  setCreatebtn,
  setLogin,
  User,
  getPostUser
) => {
  const data = {
    password: User.password,
    correo: User.correo,
  };
  const optionsuser = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${API}users/${User.correo}`, optionsuser);
    if (response.status != 200) throw await response.json();
    const res = await response.json();
    setDataUser(res[0]);
    setCreatebtn(true);
    await getPostUser(res[0].name);
    setLogin(true);
  } catch (error) {
    console.log(error);
  }
};

export const Posts = async (
  dataPost,
  Getpost,
  getPostUser,
  setCreate,
) => {
  const fil = dataPost.file;

  const Fomdata = new FormData();
  Fomdata.append("file", fil);

  const optionsUploads = {
    method: "POST",
    body: Fomdata,
  };

  fetch(`${API}uploads`, optionsUploads).then(async (res) => {
    const nameimage = await res.text();
    const data = {
      autor: dataPost.autor,
      title: dataPost.title,
      nameImg: nameimage,
      descripcion: dataPost.descripcion,
    };
    const optionsDatabases = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${API}create-post`, optionsDatabases).then(async (res) => {
      Getpost();
      getPostUser();
      setCreate(false);
    });
  });
};
