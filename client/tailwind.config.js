/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        80: "24rem",
      },
      height: {
        100: "26rem",
        101: "60rem",
      },
      maxWidth: {
        "3xl": "70rem",
      },
      screens: {
        mobile: { max: "640px" },
      },
    },
  },
  plugins: [],
};
