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
          <p>30歳でWEB業界に入り、現在フリーランス{{num}}年目になりました。3人のやんちゃな男の子を育てています。色々な業種のお仕事を経験してきましたが、私にはWEBのお仕事がピカイチです！</p>
        </div>
      </div>
      <h4 class="page-heading01">経歴</h4>
      <ul class="page-list">
        <li>Niagara College（カナダ）卒業。</li>
        <li>JALグループ会社へ入社し、国際線グランドスタッフ（地上勤務職）を約2年経験。</li>
        <li>地方公務員へ転職し、一般事務職を約5年経験。</li>
        <li>公務員を退職しWEB業界へ。実務未経験でWEBデザイン会社のスタートアップメンバーとしてコーダーを務める｡1年半後、妊娠のため退社しフリーランス活動を始める。</li>
      </ul>
       <h4 class="page-heading01">リンク</h4>
       <h5 class="page-heading02">ブログ</h5>
       <p><a href="https://fiels-web.com" target="_blank">anchoko.</a></p>
       <h5 class="page-heading02">SNS</h5>
       <p><a href="https://twitter.com/Fiels19" target="_blank">Twitter</a></p>
    </div>
    <div class="l-main__footer l-wrap">
      <page-footer>
        <router-link :to="{ name: 'Top' }" class="pagination__prev">
          <svg class="pagination__svg" width="40px" height="5px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M30 4 L0 4 L10 0" stroke="#ccc" stroke-width="1" fill="none" stroke-linecap="square"></path>
          </svg>
          <p class="pagination__text">Top</p>
        </router-link>
      </page-footer>
    </div>
  </section>
</template>
<script>
import PageNav from '@/components/PageNav.vue'
import PageHeading from '@/components/PageHeading.vue'
import PageFooter from '@/components/PageFooter.vue'


export default {
  name: 'About-me',
  components: {
    PageNav,
    PageHeading,
    PageFooter,
  },
  data() {
    return {
      start: 2017,
      num: '',
      actual: ''
    }
  },
  mounted() {
    const date = new Date();
    const year = date.getFullYear();
    this.num = year - this.start + 1;
    // this.actual = this.num - 1;
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

</style>