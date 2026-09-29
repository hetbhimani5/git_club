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
        gitdark: {
          950: '#06090e',
          900: '#0d1117',
          850: '#131922',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
          500: '#484f58',
          400: '#8b949e',
          300: '#b1bac4',
          200: '#c9d1d9',
          100: '#f0f6fc',
        },
        gitgreen: {
          DEFAULT: '#238636',
          hover: '#2ea043',
          glow: '#3fb950',
          light: '#2da44e',
        },
        gitpurple: {
          DEFAULT: '#8957e5',
          light: '#a371f7',
        },
        gitblue: {
          DEFAULT: '#1f6feb',
          light: '#58a6ff',
        },
        gitorange: {
          DEFAULT: '#d29922',
          light: '#f0883e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(63, 185, 80, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(163, 113, 247, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(88, 166, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
