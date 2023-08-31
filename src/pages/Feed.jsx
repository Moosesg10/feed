import React, { useContext, useEffect } from "react";
import { contextGlobal } from "../context/index.contex";
import ContentFeed from "../components/ContentFeed";
import { useNavigate } from "react-router-dom";
import { FormPost } from "../components/FormPost";
import { Paginador } from "../components/Paginador";
import { Loader } from "../components/Loader";
import Error from "../components/Error";

const Feed = () => {
  const context = useContext(contextGlobal);
  const {
    create,
    CreatePost,
    createbtn,
    navigateDetails,
    routeDetails,
    loader,
    pag,
    pgainaTotal,
    erros,
  } = context;

  const navigate = useNavigate();

  const PostDetails = () => {
    return navigate(routeDetails);
  };

  useEffect(() => {
    if (navigateDetails) PostDetails();
  }, [navigateDetails]);

  return erros === false ? (
    <div style={{ width: "100%", height: "80%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
          alignItems: "center",
          marginRight: "4.8em",
        }}
      >
        {createbtn && (
          <button onClick={CreatePost} className="create">
            Crear post
          </button>
        )}
      </div>
      {create && <FormPost />}
       <Paginador />
      {!loader && <ContentFeed />}
      {loader && <Loader />}
   {pgainaTotal <=0  ? "": <div
        style={{ display: "flex", justifyContent: "flex-end", width: "97%" }}
      >
        <p>
          Pagina {pag} de {pgainaTotal}
        </p>
      </div>}
    </div>
  ) : (
    <Error />
  );
};

export default Feed;
