<template>
  <div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="React" class="shadow-react"></page-heading>
      <p class="page-subtitle">[ Works ]</p>
      <p class="page-overview">Wordpressの新エディター「Gutenberg（グーテンベルク）」に対応したテーマ制作を目指し、カスタムブロックのスキルを得るためにReactの勉強を始めました。実務ではまだ作っていませんが、練習の過程で制作したものを掲載します。</p>
      <h3 class="page-heading01">制作実績</h3>
      <works-item>
        <template v-slot:name>ハイライト</template>
        <template v-slot:time-1>**</template>
        <template v-slot:time-2>**</template>
        <template v-slot:texts>ブログでよく見かける、蛍光マーカーのようなハイライトをつける機能です。</template>
      </works-item>
      <works-item>
        <template v-slot:name>社員紹介カスタムブロック</template>
        <template v-slot:time-1>**</template>
        <template v-slot:time-2>**</template>
        <template v-slot:texts>準備中</template>
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
import PageHeading from '@/components/PageHeading.vue'
import PageFooter from '@/components/PageFooter.vue'
import WorksItem from '@/components/WorksItem.vue'
import Pagination from '@/components/Pagination.vue'

export default {

  name: 'React',
  components: {
    PageHeading,
    PageFooter,
    WorksItem,
    Pagination,
  },
  data() {
    return {
      prev: {
        name: "Vue",
        link: "/works/vue"
      },
      next: {
        name: "HTML & CSS",
        link: "/works/html-and-css"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>