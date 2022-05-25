/* eslint-disable import/no-anonymous-default-export */
import http from "./httpService";
import JwtDecode from "jwt-decode";

const tokenKey = "token";

export const getJwt = () => {
  return localStorage.getItem(tokenKey);
};

http.setJwt(getJwt());

export const login = async (user) => {
  const { data } = await http.post(`/auth/signin`, {
    email: user.email,
    password: user.password,
  });

  const jwt = data.token;
  localStorage.setItem(tokenKey, jwt);

  return data;
};

// Google user function
export function setGoogleUser() {
  fetch(`${process.env.REACT_APP_API_URL}auth/login/success`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Crendentials": true,
      "Allow-Crendentials": true,
      "Access-Control-Allow-Origin":
        process.env.NODE_ENV === "development"
          ? "http://localhost:8000/"
          : "http://izonvoice.ng/",
    },
  })
    .then((res) => {
      if (res.status === 200) return res.json();
      else {
        return;
      }
    })
    .then(({ token }) => {
      if (!token) return null;

      localStorage.setItem(tokenKey, token);
    })
    .catch((ex) => {});
}

setGoogleUser();

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

export const loginWithGoogle = () => {
  window.open(process.env.REACT_APP_API_URL + "auth/google", "_self");
};

export default {
  login,
  loginWithGoogle,
  loginWithJwt,
  logout,
  currentUser,
  getJwt,
};
