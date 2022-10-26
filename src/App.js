import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "components/common/ProtectedRoute";
import CreatePost from "pages/admin/CreatePost";
import AdminDashboard from "pages/admin/Dashboard";
import EditPost from "pages/admin/EditPost";
import AdminLogin from "pages/admin/Login";
import ManagePosts from "pages/admin/ManagePosts";
import ManageUsers from "pages/admin/ManageUsers";
import Login from "pages/Login";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import { BlogUpload, Post, PostCategory, Posts } from "pages/posts";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Register from "pages/Register";

const App = () => (
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

      <Route exact path="/:name" element={<Post />} />
      <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/category/:name" element={<PostCategory />} />
      <Route exact path="/home" element={<Posts />} />
      <Route exact path="/" element={<Main />} />

      <Route exact path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
