<template>
  <div>
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import PageNav from '@/components/PageNav.vue'
export default {

  name: 'Skills',
  components: {
    PageNav
  }
}
</script>
<style lang="css" scoped>
</style>