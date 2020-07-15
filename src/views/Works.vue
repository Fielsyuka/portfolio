<template>
  <section class="section-works">
    <div class="l-main__header">
      <main-nav></main-nav>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import MainNav from '@/components/MainNav.vue'
// import MainFooter from '@/components/MainFooter.vue'


export default {
  name: 'Works',
  components: {
    MainNav,
    
    // MainFooter,
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss">

</style>