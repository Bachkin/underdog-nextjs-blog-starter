const colors = require("./colors")

const primaryColor = colors.neonGreen
const primary = {
  light: primaryColor[400],
  DEFAULT: primaryColor[500],
  dark: primaryColor[600],
  ...primaryColor,
}

const secondaryColor = colors.neonOrange
const secondary = {
  light: secondaryColor[300],
  DEFAULT: secondaryColor[400],
  dark: secondaryColor[500],
  ...secondaryColor,
}

const lightColor = colors.lightPurple
const light = {
  light: colors.white,
  DEFAULT: lightColor[50],
  dark: lightColor[100],
  accent: lightColor[300],
  ...lightColor,
}

const darkColor = colors.deepPurple
const dark = {
  accent: darkColor[400],
  light: darkColor[500],
  DEFAULT: darkColor[800],
  dark: darkColor[900],
  ...darkColor,
}

const danger = colors.rubin

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light,
        dark,
        danger,
        primary,
        secondary,
        ...colors,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
