/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

import useUser from "hooks/useUser";
import auth from "services/authService";

const UserDisplayNav = () => {
  const [shown, setShown] = useState(false);
  const { user } = useUser();

  const handleLogout = () => {
    auth.logout();

    window.location = "/home";

    setShown(false);
  };

  if (!user) return null;

  return (
    <div className="user-nav">
      <div className="icon-container" onClick={() => setShown((prev) => !prev)}>
        <i className="fa-solid fa-user-circle icon" />

        <i className="fa-solid fa-chevron-down chevron" />
      </div>

      {shown && (
        <div className="dropdown-menu">
          <div className="name-contain">
            <i className="fa-solid fa-walking"></i> <span>{user.name}</span>
          </div>

          <hr />

          <Link to="#" className="logout-link" onClick={handleLogout}>
            <i className="fa fa-arrow-right"></i> Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserDisplayNav;
