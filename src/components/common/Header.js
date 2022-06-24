/* eslint-disable no-unused-vars */
import { logo } from "assets/images";
import useUser from "hooks/useUser";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "services/authService";
import Navbar from "../Navbar";
import Search from "../Search";

const Header = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useUser();
  const node = useRef();

  const setNavbar = () => {
    if (window.scrollY > 100) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  const open = (e) => {
    setShowDropdown(true);
  };

  const close = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    // outside click

    setShowDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [showDropdown]);

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

                {!user.image && (
                  <i
                    className="fa-solid fa fa-user-circle"
                    onClick={open}
                    ref={node}
                  ></i>
                )}
                <i className="fa-solid fa fa-angle-down"></i>
              </div>

              {showDropdown && (
                <div className="dropdown">
                  <div className="name-contain">
                    <i className="fa-solid fa-walking"></i>{" "}
                    <span>{user.name}</span>
                  </div>

                  <hr />

                  <Link
                    className="logout-link"
                    to={`#`}
                    onClick={() => {
                      logout();

                      window.location.href = "/home";
                    }}
                  >
                    Logout
                  </Link>
                </div>
              )}
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
