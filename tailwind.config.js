/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgMain: '#171717',
        bgCard: '#222222',
        bgBorder: '#444444',
        accentRed: '#DA0037',
        accentRedHover: '#B0002C',
        textMain: '#EDEDED',
        textMuted: '#A1A1AA',
        darkCard: '#1E1E1E',
        darkSurface: '#252525',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'red-glow': '0 0 25px -5px rgba(218, 0, 55, 0.4)',
        'red-glow-lg': '0 0 40px -5px rgba(218, 0, 55, 0.5)',
      }
    },
  },
  plugins: [],
}
