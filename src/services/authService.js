/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import JwtDecode from "jwt-decode";

const tokenKey = "token";

export const getJwt = () => {
  return localStorage.getItem(tokenKey);
};

http.setJwt(getJwt());

export const login = async (userObj) => {
  const response = await http.post(`/auth/signin`, {
    email: userObj.email,
    password: userObj.password,
  });

  localStorage.setItem(tokenKey, response.data.token);

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

export const loginWithJwt = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
};

export const logout = () => {
  localStorage.removeItem(tokenKey);
};

export const googleAuth = (tokenId) => {
  return http.post("/google-auth", {
    token: tokenId,
  });
};

export default {
  login,
  googleAuth,
  loginWithJwt,
  logout,
  currentUser,
  getJwt,
};
