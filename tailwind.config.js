/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bento-bg': '#0f0f11',
        'bento-card': '#1c1c1e',
        'bento-border': '#2c2c2e',
        'neon-green': '#00ff00',
        'neon-purple': '#bd00ff',
      }
    },
  },
  plugins: [],
}