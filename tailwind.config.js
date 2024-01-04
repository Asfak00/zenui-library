/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B9DF8",
        secondary: "#ffffff",
        border: "#e5eaf2",
        text: "#424242",
      },

      boxShadow: {
        primary: "0 35px 80px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
