import React, { useState } from "react";
import ReactCoin from "../assets/react.svg";

// eslint-disable-next-line react/prop-types
const HeaderLayout = ({ handleStack }) => {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    handleStack(e.target.value);
  };

  return (
    <div className="header">
      <section className="searchBox">
        <label htmlFor="searchBox" style={{ height: 24 }}>
          <img src={ReactCoin} width={24} height={24} alt="" />
        </label>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          id="searchBox"
          placeholder="Search Items"
        />
      </section>

      <section className="btnNewItem">
        <button>New Item</button>
      </section>
    </div>
  );
};

export default HeaderLayout;
