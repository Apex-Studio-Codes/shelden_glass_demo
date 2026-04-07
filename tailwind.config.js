/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: '#4a7c65',
        'sage-dark': '#3a6352',
        'sage-light': '#6a9c85',
        'sage-pale': '#e8f0ec',
        cream: '#fdfaf6',
        charcoal: '#2c3a33',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
