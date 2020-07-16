<template>
  <div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="Vue" class="shadow-vue"></page-heading>
      <p class="page-subtitle">[ Works ]</p>
      <p class="page-overview">Vue説明</p>
      <h3 class="page-heading01">制作実績</h3>
      <works-item>
        <template v-slot:name>ショッピングリスト</template>
        <template v-slot:time-1>2020.06</template>
        <template v-slot:time-2>約10日間</template>
        <template v-slot:texts>準備中</template>
      </works-item>
      <works-item>
        <template v-slot:name>当サイト Portfolio</template>
        <template v-slot:time-1>2020.07</template>
        <template v-slot:time-2>約20日間</template>
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

  name: 'Vue',
  components: {
    PageHeading,
    PageFooter,
    WorksItem,
    Pagination,
  },
  data() {
    return {
      prev: {
        name: "Javascript",
        link: "/works/javascript"
      },
      next: {
        name: "React",
        link: "/works/react"
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>