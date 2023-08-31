import { createContext, useState } from "react";
import { Posts, getDataUser } from "./index.controllers";
import { API } from "../ConstGloblas";

export const contextGlobal = createContext();
export const ProviderContext = ({ children }) => {
  const [dataPost, setDataPost] = useState({
    autor: "",
    title: "",
    descripcion: "",
    file: "",
  });
  const [datas, setDatas] = useState([
    {
      id: "",
      title: "",
      nameImg: "",
      autor: "",
    },
  ]);
  const [create, setCreate] = useState(false);
  const [dataPostUser, setDataPostUser] = useState([
    {
      id: "",
      title: "",
      nameImg: "",
      autor: "",
    },
  ]);
  const [dataUser, setDataUser] = useState([
    {
      name: "",
      correo: "",
      password: "",
    },
  ]);

  const [createUser, setCreateUser] = useState(false);
  const [User, setUser] = useState({
    correo: "",
    password: "",
  });
  const [login, setLogin] = useState(false);
  const [createbtn, setCreatebtn] = useState(false);
  const [routeDetails, setRouteDetails] = useState("");
  const [navigateDetails, setNavigateDetails] = useState(false);
  const [pgainaTotal, setPgainaTotal] = useState(0);
  const [loader, setLoader] = useState(false);
  const [pag, setPag] = useState(0);
  const [erros, setErros] = useState(false);
  const [files, setFiles] = useState({});

  const Getpost = async (params = [0, 6]) => {
    setLoader(true);
    const desde = params[0];
    const hasta = params[1];
    const res = await fetch(`${API}post?inicio=${desde}`);
    const response = await res.json();
    if (res.status != 200) {
      setDatas(response);
      setLoader(false);
      return setErros(true);
    }

    fetch(`${API}getImages?inicio=${desde}`).then((respo) => {
      respo.json()
      .then((reso) => {
        setDatas(reso.data);
        setPgainaTotal(response.numberpag);
        setDataPost({ ...dataPost, autor: dataUser.name });
        setLoader(false);
      });
    });
  };

  const handleFromPost = (e) => {
    let title, file, descripcion;

    if (e.currentTarget.name === "title") {
      title = e.currentTarget.value;
      setDataPost({ ...dataPost, title: title });
    }
    if (e.currentTarget.name === "descripcion") {
      descripcion = e.currentTarget.value;
      setDataPost({ ...dataPost, descripcion: descripcion });
    }
    if (e.currentTarget.name === "file") {
      file = e.currentTarget.files;
      setDataPost({ ...dataPost, file: file[0] });
      setFiles(file[0]);
    }
  };

  const getPostUser = async (name) => {
    const params = name || dataUser.name;

    const res = await fetch(`http://localhost:3000/user/${params}`);
    const response = await res.json();
    setDataPostUser(response);
  };

  const SubtmitPost = (e) => {
    e.preventDefault();

    Posts(dataPost, Getpost, getPostUser, setCreate, files);
  };
  const CreateUsers = (e) => {
    setCreateUser(true);
  };
  const CreatePost = () => {
    setCreate(true);
  };

  const HandleFormUser = (e) => {
    e.preventDefault();

    let correo, name, password;

    if (e.currentTarget.name === "name") {
      name = e.currentTarget.value;
      setDataUser({ ...dataUser, name: name });
    }
    if (e.currentTarget.name === "correo") {
      correo = e.currentTarget.value;
      setDataUser({ ...dataUser, correo: correo });
    }
    if (e.currentTarget.name === "password") {
      password = e.currentTarget.value;
      setDataUser({ ...dataUser, password: password });
    }
  };
  const DeletePost = async (id, name) => {
    const optionsDelete = {
      method: "DELETE",
    };
    const confirmas = confirm(
      "Esta seguro de eliminar el post con el ID :" + id
    );
    if (confirmas) {
      await fetch(`http://localhost:3000/post-delete/${id}`, optionsDelete);
      await fetch(`http://localhost:3000/file-delte/${name}`, optionsDelete);
      getPostUser();
      Getpost();
    }
  };
  const SubtmitUser = async (e) => {
    e.preventDefault();
    const optionsUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    };
    const res = await fetch("http://localhost:3000/create-user", optionsUser);
    if (res.status === 200) alert("Usuario Creado");
    setCreateUser(false);
  };

  const handleSubtmit = async (e) => {
    let correo, password;

    if (e.currentTarget.name === "password") {
      password = e.currentTarget.value;
      setUser({ ...User, password });
    }
    if (e.currentTarget.name === "correo") {
      correo = e.currentTarget.value;
      setUser({ ...User, correo });
    }
  };

  const Login = (e) => {
    e.preventDefault();
    getDataUser(setDataUser, setCreatebtn, setLogin, User, getPostUser);
  };

  const getOnePost = async () => {
    const res = await fetch(`${API}post${routeDetails}`);
    const response = await res.json();
    setDatas(response);
  };

  const context = {
    handleFromPost,
    dataPost,
    SubtmitPost,
    datas,
    Getpost,
    create,
    getPostUser,
    createUser,
    CreateUsers,
    CreatePost,
    create,
    DeletePost,
    dataPostUser,
    HandleFormUser,
    dataUser,
    SubtmitUser,
    handleSubtmit,
    login,
    getDataUser,
    Login,
    createbtn,
    setLogin,
    setRouteDetails,
    routeDetails,
    getOnePost,
    setNavigateDetails,
    navigateDetails,
    setDataUser,
    setDataPostUser,
    pgainaTotal,
    loader,
    setLoader,
    setPag,
    pag,
    erros,
    setDataPost,
    setCreate,
  };

  return (
    <contextGlobal.Provider value={context}>{children}</contextGlobal.Provider>
  );
};
