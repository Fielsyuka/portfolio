<template>
  <section class="l-main__section section-works">
    <page-heading></page-heading>
    <pagination prev="/About-me" next="none"></pagination>
  </section>
</template>

<script>
import PageHeading from '@/components/PageHeading.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Works',
  components: {
    PageHeading,
    Pagination,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
</style>