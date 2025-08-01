/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F3FF',
          100: '#CCE7FF',
          200: '#99CFFF',
          300: '#66B7FF',
          400: '#339FFF',
          500: '#0078D4', // primary color
          600: '#0060AB',
          700: '#004883',
          800: '#00305A',
          900: '#001D32',
        },
        secondary: {
          50: '#E6F7ED',
          100: '#CCEEDA',
          200: '#99DDB5',
          300: '#66CC90',
          400: '#4CBF78',
          500: '#34A853', // secondary color
          600: '#2A864A',
          700: '#1F6538',
          800: '#154325',
          900: '#0A2112',
        },
        accent: {
          50: '#FFF3E6',
          100: '#FFE8CC',
          200: '#FFD099',
          300: '#FFB966',
          400: '#FFA333',
          500: '#FF8C00', // accent color
          600: '#CC7000',
          700: '#995400',
          800: '#663800',
          900: '#331C00',
        },
        success: {
          50: '#E9F7EF',
          100: '#D3F0DF',
          200: '#A7E1BF',
          300: '#7BD29F',
          400: '#4FC37F',
          500: '#27AE60',
          600: '#1F8B4D',
          700: '#176839',
          800: '#0F4626',
          900: '#072313',
        },
        warning: {
          50: '#FFF9E6',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#F1C40F',
          600: '#C19D0C',
          700: '#917609',
          800: '#614E06',
          900: '#302703',
        },
        error: {
          50: '#FEE9E7',
          100: '#FDD3CF',
          200: '#FBA7A0',
          300: '#F97B71',
          400: '#F75042',
          500: '#E74C3C',
          600: '#B93D30',
          700: '#8B2E24',
          800: '#5C1F18',
          900: '#2E0F0C',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};