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
import EditPost from "pages/admin/EditPost";
import ManagePosts from "pages/admin/ManagePosts";
import ManageUsers from "pages/admin/ManageUsers";

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        {/* Admin Routes */}
        <Route exact path="/auth/admin" element={<AdminLogin />} />

        <Route
          exact
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/posts/create-post"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/posts/manage/:slug"
          element={
            <ProtectedRoute>
              <EditPost />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/posts/manage-posts"
          element={
            <ProtectedRoute>
              <ManagePosts />
            </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/users/manage-users"
          element={
            <ProtectedRoute>
              <ManageUsers />
            </ProtectedRoute>
          }
        />

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
