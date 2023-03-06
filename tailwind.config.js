/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/{component,module}/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#001628'
      }
    }
  },
  plugins: []
}
