module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          DEFAULT: '#ffffff',
          secondary: '#f8f9fa',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          secondary: '#343a40',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};