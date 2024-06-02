import api from "@/api/api";
import { useMutation } from "@tanstack/react-query";

interface new_user {
  name?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}

const registerUser = async (user: new_user) => {
  const { data } = await api.post("/auth/register", user);
  return data;
};

const loginUser = async (user: { email?: string; password?: string }) => {
  const { data } = await api.post("/auth/login", user);
  return data;
};

export const useRegisterUser = () => {
  return useMutation({ mutationFn: (user: new_user) => registerUser(user) });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (user: { email?: string; password?: string }) =>
      loginUser(user),
  });
};
