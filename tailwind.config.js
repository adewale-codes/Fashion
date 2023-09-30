/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'modal': "url('./app/assets/modal.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          200: '#FAE157',
          400: '#ADEAC6',
          500: '#84DFA9',
          600: '#CEF2DD',
          700: '#0ABF53',
          800: '#089F45',
          900: '#077F37',
        },
        secondary: {
          50:  '#FFF1E7',
          100: '#FB964C',
          200: '#9595A5',
          300: '#727288',
          400: '#4F4E6A',
          500: '#5D5D65',
          600: '#0C0B0B',
          700: '#180626',
          800: '#2B282D',
          900: '#2C2B4C',
          1000:'#D5D5DB',
          1100:'#F8F9FA',
          1200:'#F1F3F5',
          1300:'#18182C',
          1400:'#F1E5FF',
          1500:'#5A3AB7',
          1600:'#FFF1E7',
          1700:'#1DBC86',
          1800:'#33CA70',
          1900:'#B9B8C3',
          2000:'#0F0E26',
          2100:'#3F4242'
        },
        grays: {
          100: '#f8f9fa'
        }
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
      },
      fontFamily: {
        body: ['var(--font-anderson-grotesk)'],
        heading: ['var(--font-neue-machina)']
      },
      keyframes: {
        'fly-in-bottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fly-in-bottom': 'fly-in-bottom 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
