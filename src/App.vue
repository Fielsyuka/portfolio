<template>
  <div id="app">
    <toggle-menu @toggle-menu="toggleMenu"></toggle-menu>
    <header class="l-header">
      <h1 class="site-title">Portfolio<span class="site-title__sub">Yuka.K</span> </h1>
    </header>
    <main class="l-main">
      <div class="l-main__inner l-wrap">
        <transition name="blur" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>
    <aside class="l-aside">
      <global-nav></global-nav>
    </aside>
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
      const target = document.querySelector('.l-aside');
      if(this.menuActive === false) {
        target.classList.remove('is-active');
      } else {
        target.classList.add('is-active');
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