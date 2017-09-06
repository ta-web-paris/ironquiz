import Vue from 'vue'
import Vuefire from 'vuefire'
import Firebase from 'firebase'

const propName = '$fb'

const firebasePlugin = {
  install() {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype[propName]) {
      Vue.prototype[propName] = Firebase.initializeApp({
        apiKey: '<%= options.apiKey %>',
        authDomain: '<%= options.authDomain %>',
        databaseURL: '<%= options.databaseURL %>',
        storageBucket: '<%= options.storageBucket %>'
      })
    }
  }
}

Vue.use(firebasePlugin)
Vue.use(Vuefire)

export default ctx => {
  const { app, store } = ctx

  app[propName] = Vue.prototype[propName]
  ctx[propName] = Vue.prototype[propName]
  if (store) {
    store[propName] = Vue.prototype[propName]
  }
}
