<template>
  <div id="app">
    <header class="l-header">
      <h1 class="site-title">My Portfolio<span class="site-title__sub">- Yuka.K -</span> </h1>
    </header>
    <main class="l-main">
      <div class="l-main__inner l-wrap">
        <transition name="blur" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>
    <aside class="l-aside">
      <toggle-menu></toggle-menu>
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
    }
  },
  mounted() {
  },
  methods: {

  },
}
</script>
<style lang="scss">

// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }
</style>