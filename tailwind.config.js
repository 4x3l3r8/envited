/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px"
    // },
    extend: {
      colors: {
        primary1: '#240D57',
        primary2: '#501FC1',
        primary3: '#8456EC',
        primary4: '#E87BF8',
        sec1: '#CCB6FF',
        sec2: '#EDE5FF',
        sec3: '#F6F2FF',
        alert1: '#FFD7E0',
        alert2: '#E61445',
        alert3: '#D3FFE2',
        alert4: '#00805E',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
