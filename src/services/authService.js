/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import JwtDecode from "jwt-decode";

const tokenKey = "token";
const adminTokenKey = "adminTokenKey";

export const getJwt = () => {
  return localStorage.getItem(tokenKey);
};

export const getAdminJwt = () => {
  return localStorage.getItem(adminTokenKey);
};

http.setJwt(getJwt());

export const login = async (userObj) => {
  const response = await http.post(`auth/login`, {
    email: userObj.email,
    password: userObj.password,
  });

  switch (response.data.email) {
    case "admin@izonvoice.ng":
      localStorage.setItem(adminTokenKey, response.data.token);
      break;

    default:
      const jwt = response.data.token;
      localStorage.setItem(tokenKey, jwt);
      break;
  }

  return response;
};

// Getting the current user
function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return JwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const currentUser = getCurrentUser();

// Getting the admin
function getAdmin() {
  try {
    const jwt = localStorage.getItem(adminTokenKey);
    return JwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const admin = getAdmin();

export const loginWithJwt = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
};

export const logout = () => {
  localStorage.removeItem(tokenKey);
};

export const logoutAdmin = () => {
  localStorage.removeItem(adminTokenKey);
};

export const googleAuth = async (tokenId) => {
  const res = await http.post("/google-auth", {
    token: tokenId,
  });

  if (res.ok) {
    loginWithJwt(res.data.data);
  }
};

export default {
  admin,
  currentUser,
  getJwt,
  googleAuth,
  login,
  loginWithJwt,
  logout,
  logoutAdmin,
};
