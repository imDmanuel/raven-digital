/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0C1117",
        "medium-blue": "#1B2837",
        primary: "#003ADB",
      },
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "5rem",
        // md: "5rem",
        // lg: "8rem",
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "6rem",
      },
    },
  },
  plugins: [],
};
