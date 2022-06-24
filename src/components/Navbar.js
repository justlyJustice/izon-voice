import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "assets/images";

const Navbar = ({ fixed }) => {
  const [shown, setShown] = useState(false);

  const location = useLocation();
  const node = useRef();

  const close = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }

    // outside click

    setShown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", close);

    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, [shown]);

  return (
    <>
      <nav className="navbar">
        <div className={!fixed ? "item nav-logo-contain" : "nav-logo-contain"}>
          <img className="nav-logo" src={logo} alt="Nav Logo" />

          {shown ? (
            <i
              className="fa fa-close toggle-icon"
              onClick={() => setShown(false)}
              ref={node}
            ></i>
          ) : (
            <i
              className="fa fa-bars toggle-icon"
              onClick={() => setShown(true)}
              ref={node}
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
              location && location.pathname === "/category/agriculture"
                ? "link active"
                : "link"
            }
            to="/category/agriculture"
          >
            Agriculture
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
              location && location.pathname === "/category/culture"
                ? "link active"
                : "link"
            }
            to="/category/culture"
          >
            Culture
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/social"
                ? "link active"
                : "link"
            }
            to="/category/social"
          >
            Social
          </Link>

          <Link
            onClick={() => setShown(false)}
            className={
              location && location.pathname === "/category/security"
                ? "link active"
                : "link"
            }
            to="/category/security"
          >
            Security
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
