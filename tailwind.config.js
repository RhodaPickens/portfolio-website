
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
        'xs': '320px', // small phones
        'sm': '640px', // large phones
        'md': '768px', // tablets
        'lg': '1024px', // laptops
        'xl': '1280px',  // desktops
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}