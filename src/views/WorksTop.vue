<template>
  <div>
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="Works" class="shadow-works"></page-heading>
      <p class="page-overview">静的コーディングとWordpress構築の実務制作実績、Javascriptとフレームワークの制作実績をご紹介します。</p>
      <h3 class="page-heading01">主な制作実績</h3>

    </div>
    <div class="l-main__footer l-wrap">
      <page-footer>
        <pagination :prev="prev" :next="next"></pagination>
      </page-footer>      
    </div>
  </div>
</template>
<script>
import PageHeading from '@/components/PageHeading.vue'
import PageNav from '@/components/PageNav.vue'
import PageFooter from '@/components/PageFooter.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'WorksTop',
  components: {
    PageHeading,
    PageNav,
    PageFooter,
    Pagination,
  },
  data() {
    return {
      prev: {
        name: 'Top',
        link: '/'
      },
      next: 'none'
    }
  },
  watch:{

  }
}
</script>
<style lang="scss">

</style>