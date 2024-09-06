/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': "#4F46E5",
      'secondary': "#F9FAFB",
      'tertiary': "#EDECFC",
      red: colors.red,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      blue: colors.blue,
      green: colors.green,
      slate: colors.slate,
      emerald: colors.emerald
    },
    extend: {},
  },
  plugins: [],
}