const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      padding: '1rem', // 16px
    },
    colors: {
      background: '#f2f2f2',
      white: '#fffdfa',
      dark: '#00001a',
      gunmetal: '#5e607a',
      vermillion: '#f15d51',
      silver: '#c5c6ce',
      yellow: '#e9aa52',
    },
    fontSize: {
      xs: ['.875rem', '1.5rem'], // 14px
      base: ['0.9375rem', '1.625rem'], // 15px
      sm: ['1.125rem', '1.5rem'], // 18px
      md: ['1.25rem', '1.5rem'], // 20px
      lg: ['2rem', '2rem'], // 32px
      xl: ['2.5rem', '2.5rem'], // 40px
      '2xl': ['3.5rem', '3.5rem'], // 56px
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      padding: {
        13: '0.8125rem', // 13px
        31: '1.9375rem', // 31px
        61: '3.8125rem', // 61px
      },
      letterSpacing: {
        btn: '4.375px',
      },
      backdropBrightness: {
        nav: '10',
      },
    },
  },
  plugins: [],
};
