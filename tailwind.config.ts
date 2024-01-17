/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5FCB39',
        primaryLight: '#5FCB3933',
        textSecondary: '#616161',
        textPrimary: '#2D3436',
      },
    },
  },
  plugins: [],
}
