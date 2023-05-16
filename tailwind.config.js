import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  fontFamily: {
    sans: ['Ubuntu', 'sans-serif'],
  },
  theme: {
    extend: {
      colors: {
        'black-100': '#544C4C',
        'gray-100': '#F5F5F5',
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#84482A',
          'base-100': '#F5EDD8',
          secondary: '#71B7A2',
          accent: '#E1BA53',
          neutral: '#F2E9E4',

          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#e74c3c',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
