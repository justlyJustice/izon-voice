import http from "./httpService";

export async function register(user) {
  return await http.post(`/auth/signup`, {
    name: user.name,
    email: user.email,
    password: user.password,
  });
}

export const getUsers = async () => {
  return await http.get(`/users`);
};

export const deleteUser = async (userId) => {
  return await http.delete(`/users/${userId}`);
};
