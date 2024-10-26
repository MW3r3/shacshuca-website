/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "default-blue": "#1679AB",
      },
      textColor: {
        "default-blue": "#1679AB",
      },
      fontFamily: {
        arial: ["Arial, sans-serif"],
      },
    },
  },
  plugins: [],
};
