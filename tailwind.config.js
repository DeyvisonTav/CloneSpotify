module.exports = {
  content: [
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/img/bursts.svg')",
        'spotify-theme-mobile': "url('/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
      fontSize: {
        '9xl': '9rem'
      }
    },
  },
  plugins: [],
}