const path = require('path')

function overwriteFromEnv(object, envvars) {
  for (const prop of Object.keys(envvars)) {
    const value = process.env[envvars[prop]]
    if (value) {
      object[prop] = value
    }
  }
}

module.exports = function nuxtFirebase(moduleOptions) {
  let options = Object.assign({}, this.options.firebase, moduleOptions)

  overwriteFromEnv(options, {
    apiKey: 'FIREBASE_API_KEY',
    authDomain: 'FIREBASE_AUTH_DOMAIN',
    databaseURL: 'FIREBASE_DATABASE_URL',
    storageBucket: 'FIREBASE_STORAGE_BUCKET',
    messagingSenderId: 'FIREBASE_MESSAGING_SENDER_ID',
    projectId: 'FIREBASE_PROJECT_ID'
  })

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options
  })
}
