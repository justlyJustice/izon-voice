import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Blog, BlogCategory, Blogs, BlogUpload } from "pages/blog";
import Login from "pages/Login";
import Main from "pages/Main";
import Register from "pages/Register";
import NotFound from "pages/NotFound";
import ProtectedRoute from "components/common/ProtectedRoute";
import PrivacyPolicy from "pages/PrivacyPolicy";
import AdminLogin from "pages/admin/Login";
import AdminDashboard from "pages/admin/Dashboard";
import CreatePost from "pages/admin/CreatePost";
import ManagePosts from "pages/admin/ManagePosts";
import ManageUsers from "pages/admin/ManageUsers";

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        {/* Admin Routes */}
        <Route exact path="/auth/admin" element={<AdminLogin />} />
        <Route exact path="/dashboard" element={<AdminDashboard />} />
        <Route exact path="/auth/admin" element={<AdminLogin />} />
        <Route exact path="/posts/create-post" element={<CreatePost />} />
        <Route exact path="/posts/manage-posts" element={<ManagePosts />} />
        <Route exact path="/users/manage-users" element={<ManageUsers />} />

        <Route
          exact
          path="/upload/post"
          element={
            <ProtectedRoute>
              <BlogUpload />
            </ProtectedRoute>
          }
        />

        <Route exact path="/:name" element={<Blog />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/category/:name" element={<BlogCategory />} />
        <Route exact path="/home" element={<Blogs />} />
        <Route exact path="/" element={<Main />} />

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
