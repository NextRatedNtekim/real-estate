/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFCFA',
          100: '#FAF8F4',
          200: '#F0EDE6',
          300: '#E4DFD6',
        },
        charcoal: {
          900: '#1A1A1A',
          800: '#2C2C2C',
          700: '#3E3E3E',
        },
        stone: {
          500: '#6B6560',
          400: '#8A847E',
          300: '#B0A9A3',
        },
        gold: {
          500: '#C8A96E',
          400: '#D4B980',
          300: '#E0CC9A',
          100: '#F5EDD6',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garant"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem',   { lineHeight: '1',    letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
