


import api from "@/api/api";
import { useMutation } from "@tanstack/react-query";


interface new_user {
  first_name?: string;
  lastname?: string;
  email?: string;
  password?: string;
}

export const registerUser = async (user: new_user) => {
  const { data } = await api.post("/auth/register", user);
  return data;
};

export const useRegisterUser = () => {
  return useMutation({ mutationFn: (user: new_user) => registerUser(user) });
};