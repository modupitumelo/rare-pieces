/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'blue': '#87CEEB',
          'light-blue': '#B0E0E6',
          'dark-blue': '#4682B4',
          'navy': '#2C5282',
          'cream': '#F8FAFC',
          'soft-blue': '#E0F2FE',
        }
      }
    },
  },
  plugins: [],
};
