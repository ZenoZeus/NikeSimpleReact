import React from "react";

const Navigation = () => {
  return (
    <>
      <nav className="navbar">
        <img src=".\srcImages\brand_logo.png" alt="" />
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button>LOGIN</button>
      </nav>
    </>
  );
};

export default Navigation;
