import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/scss/destyle.scss";
import "./assets/scss/base.scss";
import "./assets/scss/js.scss";
import "./assets/scss/layout/layout.scss";
import "./assets/scss/components/animation.scss";
import "./assets/scss/components/line.scss";
import "./assets/scss/components/text-shadow.scss";
import "./assets/scss/components/works.scss";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
