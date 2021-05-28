import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div class="navbar">
        <Link className="" to={"/"}>
          Home
        </Link>

        <Link to={"/login"} className="nav-link">
          Login
        </Link>
        <Link to={"/register"} className="nav-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Nav;
