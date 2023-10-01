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
          100: '#E5C643',
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
          800: '#D9D9D9',
          900: '#8E8E8E',
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
