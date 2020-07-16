<template>
  <div>
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="Javascript" class="shadow-javascript"></page-heading>
      <p class="page-subtitle">[ Works ]</p>
      <p class="page-overview">WEB制作の実務では主にjQueryやライブラリを使用しますが、Javascriptの理解を深めるために業務外でWEBアプリを制作してアウトプットをしています。</p>
      <h3 class="page-heading01">制作実績</h3>
      <works-item>
        <template v-slot:name>家計簿WEBアプリ</template>
        <template v-slot:time-1>2018.09</template>
        <template v-slot:time-2>約14日間</template>
        <template v-slot:texts>準備中</template>
      </works-item>
      <works-item>
        <template v-slot:name>サイト内検索</template>
        <template v-slot:time-1>2020.04</template>
        <template v-slot:time-2>約3日間</template>
        <template v-slot:texts>医療従事者向け書籍をWEBページ化するコーディングのお仕事の中で実装したものを改めて見直し、機能を追加したものです。</template>
      </works-item>

    </div>
    <div class="l-main__footer l-wrap">
      <page-footer>
        <pagination :prev="prev" :next="next"></pagination>
      </page-footer>      
    </div>
  </div>
</template>
<script>
import PageNav from '@/components/PageNav.vue'
import PageHeading from '@/components/PageHeading.vue'
import PageFooter from '@/components/PageFooter.vue'
import WorksItem from '@/components/WorksItem.vue'
import Pagination from '@/components/Pagination.vue'

export default {

  name: 'Javasctipt',
  components: {
    PageNav,
    PageHeading,
    PageFooter,
    WorksItem,
    Pagination,
  },
  data() {
    return {
      prev: {
        name: 'Wordpress',
        link: '/works/wordpress'
      },
      next: {
        name: 'Vue',
        link: '/works/vue'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>