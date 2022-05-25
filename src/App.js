/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserProvider } from "./context/UserContext";
import { Blog, BlogCategory, Blogs, BlogUpload } from "pages/blog";
import Login from "pages/Login";
import Main from "pages/Main";
import Register from "pages/Register";
import NotFound from "pages/NotFound";
import UserDisplayNav from "components/common/UserDisplayNav";

const App = () => {
  return (
    <UserProvider>
      <ToastContainer autoClose />
      <UserDisplayNav />

      <Routes>
        <Route exact path="/upload/post" element={<BlogUpload />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/:name" element={<Blog />} />
        <Route exact path="/category/:name" element={<BlogCategory />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Blogs />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
