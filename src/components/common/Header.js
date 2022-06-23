/* eslint-disable no-unused-vars */
import { logo } from "assets/images";
import useUser from "hooks/useUser";
import { useState } from "react";
import { Link } from "react-router-dom";
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
      <header className={navFixed ? "header fixed" : "header"}>
        <div className="first-div">
          {user && (
            <div className="user-display">
              <div className="avatar">
                {user.image && (
                  <img src={logo} className="user-image" alt="Izon voice" />
                )}

                {!user.image && <i className="fa-solid fa fa-user-circle"></i>}
                <i className="fa-solid fa fa-angle-down"></i>

                <div className="dropdown">
                  <div className="name-contain">
                    <i className="fa-solid fa-walking"></i>{" "}
                    <span>{user.name}</span>
                  </div>

                  <hr />

                  <Link className="logout-link" to={`#`}>
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          )}

          <Search />
        </div>

        <Navbar fixed={navFixed} />
      </header>
    </>
  );
};

export default Header;
