import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/destyle.scss";
import "./assets/scss/base.scss";
import "./assets/scss/effect.scss";
import "./assets/scss/layout.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
