<template>
  <div>
    <div class="l-main__section l-wrap">
      <page-heading :page-name="skill.name" :class="skill.shadowClass"></page-heading>
      <p class="page-subtitle">[ Works ]</p>
      <div class="page-overview">
        <div class="page-overview__text">
          <p>{{ skill.overview }}</p>
        </div>
      </div>
      <h3 class="page-heading01">制作実績</h3>
      <works-item v-for="experience in skill.experiences" :key="experience.name">
        <template v-slot:name>{{ experience.name }}</template>
        <template v-slot:date>{{ experience.date }}</template>
        <template v-slot:time>{{ experience.time }}</template>
        <template v-slot:texts>{{ experience.description }}</template>
        <template v-slot:image v-if="experience.image">
          <h5 class="page-heading02">制作物イメージ</h5>
          <img :src="require('@/assets/images/' + experience.image)" alt="制作物キャプチャ">
        </template>
        <template v-slot:source v-if="experience.source">
          <h5 class="page-heading02">ソースコード</h5>
          <a :href="experience.source" target=_blank>{{ experience.source }}</a> 
        </template>
      </works-item>
    </div>
    <div class="l-main__footer l-wrap">
      <page-footer>
        <pagination :prevName="prev.name" :prevSlug="prev.slug" :nextName="next.name" :nextSlug="next.slug"></pagination>
      </page-footer>
    </div>
  </div>
</template>
<script>
import store from "@/store.js";
import PageHeading from '@/components/PageHeading.vue'
import PageFooter from '@/components/PageFooter.vue'
import WorksItem from '@/components/WorksItem.vue'
import Pagination from '@/components/Pagination.vue'
export default {

  name: 'SkillsDetail',
  components: {
    PageHeading,
    PageFooter,
    WorksItem,
    Pagination,
  },

  data() {
    return {
      slug: this.$route.params.slug,
      prevId: '',
      nextId: ''
    }
  },
  created() {
    this.handlePagination();
  },
  methods: {
    handlePagination() {
      const prevNum = this.skill.id - 1;
      const nextNum = this.skill.id + 1;
      const length = store.skills.length;
      this.prevId = prevNum === 0 ? length : prevNum;
      this.nextId = nextNum > length ? 1 : nextNum;
    }
  },
  computed: {
    skill() {
      return store.skills.find(
        skill => skill.slug === this.slug
      )
    },
    prev() {
      return store.skills.find(
        skill => skill.id === this.prevId
      )
    },
    next() {
            return store.skills.find(
        skill => skill.id === this.nextId
      )

    }
  }
}
</script>
<style lang="css" scoped>
</style>