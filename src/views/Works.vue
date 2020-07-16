<template>
  <section class="section-works">
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <router-view></router-view>
  </section>
</template>
<script>
import PageNav from '@/components/PageNav.vue'

export default {
  name: 'Works',
  components: {
    PageNav,
  },
  data() {
    return {

    }
  },
  watch:{

  }
}
</script>
<style lang="scss">

</style>