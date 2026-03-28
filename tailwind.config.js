
module.exports = {
  darkMode: false,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
    },
    screens: {
        'xl': { max: '1400px' },
        'lg': { max: '1150px' },
        'md': { max: '767px' },
        'sm': { max: '659px' },
        'xs': { max: '393px' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}