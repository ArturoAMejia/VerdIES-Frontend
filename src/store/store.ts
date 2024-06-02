
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authSlice, IAuthState } from "./slices/auth/authSlice";


type Store = IAuthState;

export const useAppStore = create<Store>()(
  persist(
    (...set) => ({
      ...authSlice(...set),
    }),
    { name: "store" }
  )
);