/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "../Navbar";
import Search from "../Search";

const Header = () => {
  const [navFixed, setNavFixed] = useState(false);

  const setNavbar = () => {
    if (window.scrollY > 100) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  window.addEventListener("scroll", () => setNavbar());

  return (
    <>
      <header className={!navFixed ? "header" : "header fixed"}>
        <Search />

        <Navbar fixed={navFixed} />
      </header>
    </>
  );
};

export default Header;
