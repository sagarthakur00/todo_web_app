/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        darkbg: "#1e1e2f",
        darkcard: "#2a2a40"
      }
    },
  },
  plugins: [],
};
