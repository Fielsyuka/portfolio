<template>
  <div id="app">
    <toggle-menu @toggle-menu="toggleMenu"></toggle-menu>
    <header class="l-header">
      <h1><router-link to="/" class="site-title">Portfolio<span class="site-title__sub">Yuka.K</span></router-link></h1>
    </header>
    <main class="l-main">
      <div class="l-main__inner">
          <transition name="blur" mode="out-in">
            <router-view />
          </transition>

      </div>
    </main>
    <aside class="l-aside">
      <global-nav @close-menu="closeMenu"></global-nav>
    </aside>
    <div v-show="menuActive" class="l-modal" @click="closeMenu"></div>
  </div>
</template>
<script>
  import ToggleMenu from '@/components/ToggleMenu.vue'
  import GlobalNav from '@/components/GlobalNav.vue'
  export default {
  name: 'App',
  components: {
    ToggleMenu,
    GlobalNav,

  },
  data(){
    return {
      menuActive: false
    }
  },
  mounted() {
  },
  watch: {
    menuActive() {
      const aside = document.querySelector('.l-aside');
      const button = document.querySelector('.toggle-menu');
      if(this.menuActive === false) {
        aside.classList.remove('is-active');
        button.classList.remove('is-active');
      } else {
        aside.classList.add('is-active');
        button.classList.add('is-active');
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive
    },
    closeMenu() {
      this.menuActive = false
    }
  },
}
</script>
<style lang="scss">

// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }
</style>