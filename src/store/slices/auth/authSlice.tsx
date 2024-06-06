import { IUser } from "@/interfaces";
import { StateCreator } from "zustand";

export interface IAuthState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  logout: () => void;
  isAuth: boolean;
}

export const authSlice: StateCreator<IAuthState> = (set) => ({
  user: null,
  isAuth: false,
  setUser: (user: IUser) => set({ user, isAuth: true }),
  logout: () => set({ user: null, isAuth: false }),
});
