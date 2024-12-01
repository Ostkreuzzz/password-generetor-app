/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#18171F',
      gray: '#817D92',
      white: '#E6E5EA',
      red: '#F64A4A',
      orange: '#FB7C58',
      yellow: '#F8CD65',
      'neon-green': '#A4FFAF6',
      'gray-dark': '#24232C',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    spacing: {
      sm: '16px',
      md: '32px',
      lg: '16px',
      xl: '24px',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
