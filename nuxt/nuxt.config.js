const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.bootcss.com/jquery/3.1.0/jquery.min.js' },
      { src: 'https://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js' }
      // { src: 'https://s22.cnzz.com/z_stat.php?id=1273275200&web_id=1273275200' },
      // { src: './js/backurl.js' }
      // { src: 'static/js/bootstrap.min.js' }
      // { src: 'https://cdn.bootcss.com/jquery.qrcode/1.0/jquery.qrcode.min.js' }
      // { src: './js/ie10-viewport-bug-workaround.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/style/ncuhome.css',
    '~assets/style/main.css',
    '~static/css/bootstrap.min.css',
    '~static/css/font-awesome.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
