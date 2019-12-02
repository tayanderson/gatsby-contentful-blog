module.exports = {
  theme: {
    important: true,
    extend: {
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#C70505',
        secondary:'#0D0D0D',
        highlight: '#F24C3D',
        grey: '#D9D9D9',
        darkgrey: '#595959',
        pink: '#FFF4EE'
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      maxWidth: {
        'centered': '760px',
        'wide': '1800px',
      },
      zIndex: {
        '-10': '-10',
      },
      inset: {
        '1/2': '50%',
      }
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-transforms')(),
  ],
}
