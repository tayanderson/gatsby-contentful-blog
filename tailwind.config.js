module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    important: true,
    extend: {
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#A53333',
        secondary:'#3D3D3D',
        highlight: '#BF5656',
        grey: '#E6E8E6',
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        darkgrey: '#595959',
        pink: '#eaddd3',
        cream: {
          default: '#FCF7F0',
          light: '#FFFFF7',
          lighter: '#FFFFFA'
        },
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
