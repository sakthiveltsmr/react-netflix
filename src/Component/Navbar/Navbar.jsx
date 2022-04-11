import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="lef">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix"
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movie</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
