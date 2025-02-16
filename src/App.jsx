import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import CardDetail from "./pages/CardDetail/CardDetail";
import Home2 from "./pages/Home2/Home2";
import User from "./pages/User/User";
import User1 from "./pages/User1/User1";
import User2 from "./pages/User2/User2";
import MainHome from "./pages/MainHome/MainHome";
import RequiredAuth from "./Components/RequiredAuth";

const App = () => {
  const [login, setLogin] = React.useState(false);
  // static route
  // dynamic route
  // nested route
  // protected route
  // component Link
  // useNavigate
  // useSearchParams

  return (
    <React.Fragment>
      {login ? "user is login" : "user is not login"}
      <Routes>
        <Route index element={<MainHome setLogin={setLogin} />} />

        {/* this route require auth */}

        <Route element={<RequiredAuth login={login} />}>
          <Route path="/home" element={<Home2 />}>
            <Route index element={<Home />} />
            <Route path=":idCard" element={<CardDetail />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/user" element={<User />}>
          {/* route1 */}
          <Route path="user1" element={<User1 />} />
          {/* route1 */}
          <Route path="user2" element={<User2 />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
