import { logo } from "assets/images";
import { Link, NavLink } from "react-router-dom";

const AdminWrapper = ({ children }) => {
  return (
    <section className="admin-contain">
      <div className="aside-bar">
        <img src={logo} alt="Side Logo" />

        <div className="menu-contain">
          <NavLink to={`/admin/create-post`} className="menu-item">
            Create Post <i className="fa-solid fa-circle-plus"></i>
          </NavLink>

          <NavLink to={`#`} className="menu-item">
            Delete a Post <i className="fa-solid fa-circle-plus"></i>
          </NavLink>

          <NavLink to={`#`} className="menu-item">
            Manage Users <i className="fa-solid fa-circle-plus"></i>
          </NavLink>
        </div>

        <div className="sign-out-contain">
          <Link to={`#`} className={`link`}>
            Logout, Admin
          </Link>
        </div>
      </div>

      {/* 
      <div className="div-main-contain">{children}</div> */}
    </section>
  );
};

export default AdminWrapper;
