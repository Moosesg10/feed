import { Route, Routes } from "react-router-dom";
import Logins from "./pages/Logins";
import Feed from "./pages/Feed";
import { CreateUsers } from "./pages/CreateUsers";
import { DashBoardUser } from "./pages/DashBoardUser";
import { HandleNaviagate } from "./controllers/index.controllers";
import { useContext } from "react";
import { contextGlobal } from "./context/index.contex";
import { PostDetails } from "./pages/PostDetails";
import { Headers } from "./components/Headers";
import { Menu } from "./components/Menu";
import { Profile } from "./pages/Profile";

const Apps = () => {
  const context = useContext(contextGlobal);
  const { routeDetails } = context;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Headers />
              <Feed />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <HandleNaviagate redirecTO="/">
              <Logins />
            </HandleNaviagate>
          }
        />
        <Route path="/create-user" element={<CreateUsers />} />
        <Route
          path="/dashboard"
          element={
            <div style={{ display: "flex", flexDirection: "column" }}>
             <div style={{display:"flex", justifyContent:"flex-end", width:"98%", marginTop:"2em"}}>
              <Menu/>
             </div>
              <DashBoardUser />
            </div>
          }
        />
        <Route path={"/create-user"} element={<CreateUsers />} />
        <Route path={routeDetails} element={<PostDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Apps;
