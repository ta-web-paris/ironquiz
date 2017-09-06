module.exports = {
  mode: 'spa',
  modules: [
    [
      '~/modules/firebase',
      {
        authDomain: 'ironquiz-for-ironhack.firebaseapp.com',
        databaseURL: 'https://ironquiz-for-ironhack.firebaseio.com',
        projectId: 'ironquiz-for-ironhack'
      }
    ]
  ],
  head: {
    title: 'ironquiz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Realtime quiz application for bootcamps'
      }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            emitWarning: true,
            failOnWarning: !ctx.dev,
            failOnError: !ctx.dev
          }
        })
      }
    }
  }
}
