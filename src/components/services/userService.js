import http from "./httpService";

export async function register(user) {
  return await http.post(`/auth/signup`, {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}
