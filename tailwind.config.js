/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      mrdafoe:['Mr Dafoe', 'cursive'],
      ooohbaby:['Oooh Baby', 'cursive'],
      kaushanscript:['Kaushan Script', 'cursive'],
      kings:['Kings', 'cursive'],
      rocksalt:['Rock Salt', 'cursive']
    },

    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        custom: ['Fleur De Leah', 'cursive']
      },

      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

