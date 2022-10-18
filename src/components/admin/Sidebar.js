import { logo } from "assets/images";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="aside-bar">
      <Link to={`/dashboard`}>
        <img src={logo} alt="Side Logo" />
      </Link>

      <div className="menu-contain">
        <NavLink to={`/posts/create-post`} className="menu-item">
          <i
            className="fa-solid 
            fa-circle-plus"
          ></i>{" "}
          Create Post
        </NavLink>

        <NavLink to={`/posts/manage-posts`} className="menu-item">
          <i className="fa-solid fa-signs-post"></i> Manage all Posts
        </NavLink>

        <NavLink to={`/users/manage`} className="menu-item">
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
