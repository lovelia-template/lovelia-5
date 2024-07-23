/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        lg: '7rem',
        xl: '15rem',
        '2xl': '23rem',
      },
    },
    extend: {
      screens: {
        '3xs': '320px',
        '2xs': '480px',
        xs: '540px',
      },
      colors: {
        'primary-1': '#32312D',
        'primary-2': '#DFDEDA',
        'primary-3': '#85612B',
        'primary-4': '#AC997D',
        'primary-5': '#E9E3E3',
      },
      fontFamily: {
        merriweather: 'Merriweather',
        montserrat: 'Montserrat',
        gotu: 'Gotu',
        kaushanscript: 'Kaushan Script',
      },
    },
  },
  plugins: [],
}
