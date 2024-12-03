/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '640px',
      'tablet-large': '768px',
      desktop: '1200px',
    },

    colors: {
      black: '#18171F',
      gray: '#817D92',
      white: '#E6E5EA',
      red: '#F64A4A',
      orange: '#FB7C58',
      yellow: '#F8CD65',
      'neon-green': '#A4FFAF',
      'gray-dark': '#24232C',
    },

    fontFamily: {
      sans: ['JetBrainsMono', 'monospace'],
    },

    spacing: {
      4: '4px',
      8: '8px',
      10: '10px',
      12: '12px',
      16: '16px',
      18: '18px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
      66: '66px',
      72: '72px',
      80: '80px',
      96: '96px',
      152: '152px',
      540: '540px',
    },

    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
