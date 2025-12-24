/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Metal Palette
        metal: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        silver: {
          light: '#e8e8ed',
          DEFAULT: '#c7c7cc',
          dark: '#8e8e93',
        },
        platinum: {
          light: '#f5f5f7',
          DEFAULT: '#d2d2d7',
          dark: '#86868b',
        },
        premium: {
          gold: '#b8936e',
          bronze: '#a67c52',
          steel: '#6b7280',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-metal': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-premium': 'linear-gradient(to right, #f5f5f7, #e8e8ed)',
        'gradient-dark': 'linear-gradient(to bottom, #09090b, #18181b)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'monospace'],
      },
      boxShadow: {
        'premium': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'inner-premium': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
