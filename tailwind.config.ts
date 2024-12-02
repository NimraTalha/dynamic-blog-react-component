module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
         
        },
      },
      animation: {
        'color-change': 'colorChange 3s infinite',
      },
    },
  },
  plugins: [],
};
