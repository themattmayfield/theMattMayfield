const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "500px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "matt-dark": "#212121",
        "matt-darknav": "rgba(33,33,33)",
        "matt-lightnav": "rgba(255,255,255, .95)",
        "matt-textlight": "#F0F0F0",
        "matt-textdark": "#333333",
        "custom-darkgray": "#1B1B1B",
        "custom-lightgray": "#CECECE",
        portfolioInfo: "#1c1c1c",
      },
      transitionProperty: {
        height: "height",
      },
      transitionDuration: {
        0: "0ms",
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ["dark"],
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
