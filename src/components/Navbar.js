import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "assets/images";

const Navbar = ({ fixed }) => {
  const [shown, setShown] = useState(false);

  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className={!fixed ? "item nav-logo-contain" : "nav-logo-contain"}>
          <img className="nav-logo" src={logo} alt="Nav Logo" />

          {shown ? (
            <i
              className="fa fa-close toggle-icon"
              onClick={() => setShown(false)}
            ></i>
          ) : (
            <i
              className="fa fa-bars toggle-icon"
              onClick={() => setShown(true)}
            ></i>
          )}
        </div>

        <div
          className={!fixed ? "nav-menu item" : "nav-menu"}
          style={{ left: shown ? "60%" : "" }}
        >
          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/home" ? "link active" : "link"
            }
            to="/home"
          >
            Home
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/business"
                ? "link active"
                : "link"
            }
            to="/category/business"
          >
            Business
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/entertainment"
                ? "link active"
                : "link"
            }
            to="/category/entertainment"
          >
            Entertainment
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/politics"
                ? "link active"
                : "link"
            }
            to="/category/politics"
          >
            Politics
          </Link>
        </div>

        <div
          className={!fixed ? "nav-menu item" : "nav-menu"}
          style={{ left: shown ? "60%" : "" }}
        >
          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/sports"
                ? "link active"
                : "link"
            }
            to="/category/sports"
          >
            Sports
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/articles"
                ? "link active"
                : "link"
            }
            to="/category/articles"
          >
            Articles
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/ICT"
                ? "link active"
                : "link"
            }
            to="/category/ICT"
          >
            ICT
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/fashion"
                ? "link active"
                : "link"
            }
            to="/category/fashion"
          >
            Fashion
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
