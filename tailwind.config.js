const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941c6",
          800: "#53389E",
          900: "#42307D",
        },
        gray: {
          50: "#F9FAFB",
          300: "#D0D5DD",
          500: "#667085",
        },
        success: {
          50: "#ECFDF3",
          700: "#027A48",
        },
      },
      fontSize: {
        "display-xs": [
          "1.438rem",
          {
            lineHeight: "2.375rem",
          },
        ],
        "display-sm": [
          "1.875rem",
          {
            lineHeight: "2.375rem",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
