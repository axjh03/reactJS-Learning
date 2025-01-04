import React from "react";
import { Link, NavLink, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/blog")}>Blog</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </>
  );
}

export default Header;
