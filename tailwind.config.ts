import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple:  '#13008a',
          purpleAlt: '#5e17eb',
          pink:    '#ff5bc0',
          cyan:    '#5ce1e6',
        },
      },
      fontFamily: {
        display: ['Frank Ruhl Libre', 'serif'],
        body:    ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
