import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme =
    typeof window !== "undefined" && localStorage.getItem("chat-theme");
  const initialTheme = savedTheme || "coffee";

  // Immediately set the theme on <html>
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", initialTheme);
  }

  return {
    theme: initialTheme,
    setTheme: (theme) => {
      localStorage.setItem("chat-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      set({ theme });
    },
  };
});
