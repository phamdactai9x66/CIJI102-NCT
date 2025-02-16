import React from "react";
import { Outlet } from "react-router";

const User = () => {
  return (
    <div>
      <button>user1</button>
      <button>user2</button>

      <div>render info of user</div>
      <Outlet />
    </div>
  );
};

export default User;
