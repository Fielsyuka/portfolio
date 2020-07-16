<template>
  <section class="section-about">
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="About me" class="shadow-about"></page-heading>
      <h3 class="page-subtitle">[ ゆか ]</h3>
      <p class="page-overview">30歳未経験でWEB業界に入り、現在{{num}}年目になりました。その間に2回の出産を経ているので実務経験は{{actual}}年程度です。3人のやんちゃな男の子を育てています。</p>
      <p class="page-overview">色々な業種のお仕事を経験してきましたが、私にはWEBのお仕事がピカイチです。</p>
      <h4 class="page-heading01">経歴</h4>
    </div>
    <div class="l-main__footer l-wrap">
      <page-footer>
        <pagination :prev="prev" :next="next"></pagination>
      </page-footer>      
    </div>
  </section>
</template>
<script>
import PageNav from '@/components/PageNav.vue'
import PageHeading from '@/components/PageHeading.vue'
import PageFooter from '@/components/PageFooter.vue'
import Pagination from '@/components/Pagination.vue'


export default {
  name: 'About-me',
  components: {
    PageNav,
    PageHeading,
    PageFooter,
    Pagination,
  },
  data() {
    return {
      prev: {
        name: "Top",
        link: "/"
      },
      next: "none",
      start: 2017,
      num: '',
      actual: ''
    }
  },
  mounted() {
    const date = new Date();
    const year = date.getFullYear();
    this.num = year - this.start;
    this.actual = this.num - 1;
  },
  methods: {
    splitText(val) {
      return val.replace(/\S/g, '<span class="letter">$&</span>');
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/_mixin.scss";

//who
.section-who {}
</style>