/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B9DF8",
        secondary: "#ffffff",
        border: "#e5eaf2",
        text: "#424242",
        tabTextColor: '#424242',
        shadowColor: 'rgba(0, 0, 0, 0.2)'
      },

      boxShadow: {
        primary: "0 35px 80px -15px rgba(0, 0, 0, 0.3)",
        secondary: "2px 2px 20px 2px rgba(0, 0, 0, 0.3)",
      },
    },

    screens: {
      '640px': '640px',
      '400px': '400px',
      '425px': '425px',
      '1024px': '1024px',
      '1260px': '1260px',
      '1404px': '1404px',
      '2000px': '2000px',
    },

    animation: {
      'infinite-scroll': 'infinite-scroll 20s linear infinite',
      'infinite-second-scroll': 'infinite-second-scroll 20s linear infinite',
      'customSpin': 'animate-spin 10s linear infinite',
      'customPulse': 'animate-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      },
      'infinite-second-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(100%)' },
      },
      'animate-spin':{
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
      'animate-pulse':{
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '.5' },
      }
    }
  },
  plugins: [],
};
