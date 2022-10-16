import { Link } from "react-router-dom";

import DashboardWrapper from "components/admin/Wrapper";

const AdminDashboard = () => {
  return (
    <DashboardWrapper>
      <div className="cards">
        <Link className="card" to={`/posts/create-post`}>
          <div className="overlay"></div>
          <i className="fa-solid fa-plus-circle"></i>
          <h4>Create Post</h4>
        </Link>

        <Link className="card" to={`/posts/manage-posts`}>
          <div className="overlay"></div>
          <i className="fa-solid fa-trash"></i>
          <h4>Manage all Posts</h4>
        </Link>

        <Link className="card" to={`/users/manage`}>
          <div className="overlay"></div>
          <i className="fa-solid fa-users"></i>
          <h4>Manage Users</h4>
        </Link>
      </div>

      <p className="copy-text">Copyright &copy; Izon Voice</p>
    </DashboardWrapper>
  );
};

export default AdminDashboard;
