import React, { useContext, useEffect, useState } from "react";
import { contextGlobal } from "../context/index.contex";
import { useLocation, useNavigate } from "react-router-dom";

export const Menu = () => {
  const context = useContext(contextGlobal);
  const { setLogin } = context;
  const { avatar } = context.dataUser;

  const navigate = useNavigate();
  const [mostar, setMostar] = useState(false);
  const [btndash, setBtndash] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/dashboard") {
      setBtndash(true);
    } else {
      setBtndash(false);
    }
  }, [pathname]);

  const Dashboard = () => {
    return navigate("/dashboard");
  };

  const Feed = () => {
    return navigate("/");
  };

  const Logout = () => {
    setLogin(false);
    return navigate("/");
  };

  const MenuMostar = (e) => {
    if (e.target.name === "abrir") {
      setMostar(true);
    } else {
      setMostar(false);
    }
  };
  const Profile = () => {
    return navigate("/profile");
  };
  return (
    <div>
      {!mostar && (
        <img
          src={`http://localhost:3000/avatar/${avatar}`}
          alt="avatar"
          onClick={MenuMostar}
          width="40px"
          height="40px"
          name="abrir"
          style={{ borderRadius: "50%", cursor: "pointer" }}
        />
      )}
      {mostar && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
            position: "absolute",
            top: "1vh",
            right: "2vw",
            gap: "0.5em",
            backgroundColor: "#242323ad",
            borderRadius: "2em",
            width: "100px",
            border: "thin solid #fff",
            padding: "0.7em",
            zIndex: "999",
          }}
        >
          <img
            src={`http://localhost:3000/avatar/${avatar}`}
            alt=""
            width="40px"
            height="40px"
            onClick={MenuMostar}
            name="cerrar"
            style={{ borderRadius: "50%", cursor: "pointer" }}
          />
          {btndash ? (
            <button className="butto-menu" onClick={Feed}>
              Feed
            </button>
          ) : (
            <button className="butto-menu" onClick={Dashboard}>
              Dashboard
            </button>
          )}
          <button className="butto-menu" onClick={Profile}>
            Profile
          </button>
          <button className="butto-menu" onClick={Logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
