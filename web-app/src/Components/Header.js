import {FaBars, FaTimes} from "react-icons/fa";
import React from "react";
import "./Header.css";

function Header () {
  return (
  <header>
  <h3>Logo
  </h3>
  <nav>
    <a href="/">Food</a>
    <a href="/">Drinks</a>
    <a href="/">Contact Us</a>
  <button>
    <FaTimes/>
  </button>
  </nav>
  <button>
    <FaBars/>
  </button>
  </header>

  );
};

export default Header;