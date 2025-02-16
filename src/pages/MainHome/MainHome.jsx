import React from "react";
import { Link, useNavigate } from "react-router";

const MainHome = (props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home?a=1&b=2");
  };

  const handleLoginFacebook = () => {
    props?.setLogin?.(true);
  };

  return (
    <div>
      {/* <a href="/home">Navigate to home</a> */}

      {/* <Link to="/home">Navigate to home</Link> */}

      <button onClick={handleNavigate}>Navigate to home</button>

      <button onClick={handleLoginFacebook}>login facebook</button>
    </div>
  );
};

export default MainHome;
