/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
      },
    },

    extend: {
      colors: {
        background: "rgba(var(--background),<alpha-value>)",

        foreground: "rgba(var(--foreground),<alpha-value>)",
        "muted-foreground": "rgba(var(--muted-foreground),<alpha-value>)",

        primary: "rgba(var(--clr-primary),<alpha-value>)",
      },
      fontFamily: {
        prosto_one: ["var(--font-prosto-one)"],
        poppins: ["var(--font-poppins)"],
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
