import React from "react";
import AddNote from "../addnote/AddNote";
import Logo from "../logo/Logo";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <AddNote />
    </div>
  );
};

export default Navbar;
