import { create } from "zustand";

interface UserState {
  user: any;
  setUser: (u: any) => void;
}

export const useUser = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
