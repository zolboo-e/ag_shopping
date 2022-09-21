const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "40px",
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#e0e5e8",
          secondary: "#f4f6f8",
        },
        primary: "#458df6",
      },
    },
    fontFamily: {
      sans: ["Fira Sans Condensed", ...defaultTheme.fontFamily.sans],
    },
    // screens: {
    //   lg: "1280px",
    // },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#458df6",
        },
        // dark: {
        //   ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
        //   primary: "#458df6",
        // },
      }
    ]
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),

    plugin((helpers) => {
      _addBase(helpers);
      _addComponents(helpers);
      _addUtilities(helpers);
    }),

  ],
};

const _addBase = ({ addBase, theme }) => {
  addBase({
    p: {
      fontSize: "0.875rem",
      lineHeight: "1.4",
    },
  });
};
const _addComponents = ({ addComponents, theme }) => {
  addComponents({
    ".login-layout": {
      display: "grid",
      [`@media (min-width: ${theme("screens.lg")})`]: {gridTemplateColumns: "640px 1fr"},
      [`@media (min-width: ${theme("screens.xl")})`]: {gridTemplateColumns: "760px 1fr"},
      [`@media (min-width: ${theme("screens.2xl")})`]: {gridTemplateColumns: "1160px 1fr"},
    },
  });
};
const _addUtilities = ({ addUtilities }) => {
  addUtilities({
    ".bg-footer": {
      background: "linear-gradient(to right, #292d33 50%, #1f2226 50%)",
    },
  });
};
