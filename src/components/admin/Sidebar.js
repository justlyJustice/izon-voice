import { logo } from "assets/images";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, handleClose }) => {
  return (
    <div className={isOpen ? "aside-bar slide" : "aside-bar"}>
      <div className="img-contain">
        <Link to={`/dashboard`} onClick={handleClose}>
          <img src={logo} alt="Side Logo" />
        </Link>

        <i className="fa-solid fa-xmark" onClick={handleClose}></i>
      </div>

      <div className="menu-contain">
        <NavLink
          to={`/posts/create-post`}
          className="menu-item"
          onClick={handleClose}
        >
          <i
            className="fa-solid 
            fa-circle-plus"
          ></i>{" "}
          Create Post
        </NavLink>

        <NavLink
          to={`/posts/manage-posts`}
          className="menu-item"
          onClick={handleClose}
        >
          <i className="fa-solid fa-signs-post"></i> Manage all Posts
        </NavLink>

        <NavLink
          to={`/users/manage-users`}
          className="menu-item"
          onClick={handleClose}
        >
          <i className="fa-sharp fa-solid fa-users"></i> Manage Users
        </NavLink>
      </div>

      <div className="sign-out-contain">
        <Link to={`#`} className={`link`}>
          Logout, Admin <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
