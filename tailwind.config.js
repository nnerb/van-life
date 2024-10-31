/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter-regular": ['Regular'],
        "inter-medium": ['Medium'],
        "inter-bold": ['Bold'],
        "inter-extra-bold": ['Extra-Bold'],
        "inter-black": ['Black']
      }
    },
  },
  plugins: [],
}

