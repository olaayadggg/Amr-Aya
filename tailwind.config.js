/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FDFBF7', 100: '#FAF7F0', 200: '#F4ECE1', 300: '#EAE0D0' },
        gold: { 300: '#E6CA85', 400: '#D4AF37', 500: '#C59B27', 600: '#A9821C' },
        olive: { 50: '#F4F6F0', 100: '#E4E9DA', 600: '#5F6955', 800: '#343B2C', 900: '#23281E' },
        charcoal: { 800: '#272B28', 900: '#1D211E' },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Amiri', 'serif'],
        display: ['Playfair Display', 'Amiri', 'serif'],
        sans: ['Montserrat', 'Amiri', 'sans-serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
