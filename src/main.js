import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
// import env from './env'

// const mock = true;
// if (mock) {
//   require('./mock/api')
// }

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

//axios.defaults.baseURL = env.baseURL

//Interface error interception
axios.interceptors.response.use((response) => {
  let res = response.data

  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
