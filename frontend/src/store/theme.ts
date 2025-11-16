import { create } from "zustand";

interface ThemeState {
  dark: boolean;
  toggle: () => void;
}

export const useTheme = create<ThemeState>((set) => ({
  dark: localStorage.getItem("darkMode") === "true",
  toggle: () =>
    set((state) => {
      const newMode = !state.dark;
      localStorage.setItem("darkMode", String(newMode));
      return { dark: newMode };
    }),
}));
