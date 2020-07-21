<template>
  <section class="section-about">
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <div class="l-main__section l-wrap">
      <page-heading page-name="About me" class="shadow-about"></page-heading>
      <h3 class="page-subtitle">[ ゆか ]</h3>
      <div class="page-overview clearfix">
        <div class="page-overview__image"><img src="@/assets/images/me.jpg" alt="me"></div>
        <div class="page-overview__text">
          <p>30歳未経験でWEB業界に入り、現在{{num}}年目になりました。その間に2回の出産を経ているので実務経験は{{actual}}年程度です。3人のやんちゃな男の子を育てています。色々な業種のお仕事を経験してきましたが、私にはWEBのお仕事がピカイチです！</p>
        </div>
      </div>
      <h4 class="page-heading01">経歴</h4>
      <ul class="page-list">
        <li>Niagara College（カナダ）卒業。</li>
        <li>JALグループ会社へ入社し、国際線グランドスタッフ（地上勤務職）を約2年経験。</li>
        <li>地方公務員へ転職し、一般事務職を約7年経験。</li>
        <li>公務員を退職しWEB業界へ。実務未経験でWEBデザイン会社のスタートアップメンバーとしてコーダーを務める｡1年半後、妊娠のため退社しフリーランス活動を始める。</li>
      </ul>
    </div>
    <div class="l-main__footer l-wrap">
      <page-footer>
        <pagination :prevSlug="prevSlug" :prevName="prevName"></pagination>
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
      prevSlug: '/',
      prevName: 'Top',
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