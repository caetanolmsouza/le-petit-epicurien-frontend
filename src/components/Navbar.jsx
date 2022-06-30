import React from "react";
import "../App.css";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarUpButtons">
        <button>Home</button>
        <button>My Reservations</button>
        <div>
          <button>SignUp</button>
          <button>LogIn</button>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
