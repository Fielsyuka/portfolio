import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/destyle.scss";
import "./assets/scss/base.scss";
import "./assets/scss/js.scss";
import "./assets/scss/animation.scss";
import "./assets/scss/layout.scss";
import "./assets/scss/components.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
