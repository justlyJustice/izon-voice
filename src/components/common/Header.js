/* eslint-disable no-unused-vars */
import useUser from "hooks/useUser";
import { useState } from "react";
import Navbar from "../Navbar";
import Search from "../Search";

const Header = () => {
  const [navFixed, setNavFixed] = useState(false);
  const { user } = useUser();

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
        {user && (
          <div className="user-container">
            <div className="icon-contain">
              <i className="fa-solid fa fa-user-circle"></i>
              <i className="fa-solid fa fa-angle-down"></i>

              <div className="dropdown">
                <div className="name-contain">
                  <h4>{user.name}</h4>
                </div>
              </div>
            </div>
          </div>
        )}

        <Search />
        <Navbar fixed={navFixed} />
      </header>
    </>
  );
};

export default Header;
