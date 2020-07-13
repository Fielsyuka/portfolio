<template>
  <div class="l-main__wrapper">
    <section class="l-main__section section-about l-wrap">
      <page-heading></page-heading>
      <page-card>
        <template v-slot:image>
          <!-- <img src="../assets/images/yuka.jpg" alt="Yuka"> -->
          <!-- <draw-picture file-name="yuka.jpg"></draw-picture> -->
        </template>
        <template v-slot:title>
          <p class="font-small font-subcolor">WEBコーダー</p>
          <h3 class="font-large">ゆか <span class="font-small">[ Yuka ]</span></h3>
        </template>
        <template v-slot:texts>
          <p>東京の片隅に暮らすフリーランスWEBコーダーです。</p>
          <p>30歳未経験でWEB業界に入り、現在{{num}}年目になりました。<br>...が、その間に2回の出産を経ているので実務経験は{{actual}}年程度です。</p>
          <p>レスポンシブコーディングとWordpressのテーマ制作が得意です。<br>最近はJavasctiptに魅了され、VueやReactを学んでいます。<br></p>
          <p>近い将来、フロントエンドエンジニアになる予定です！（希望）</p>
        </template>
      </page-card>
      <pagination prev="/" next="/Works"></pagination>
    </section>
  </div>
</template>
<script>
// import DrawPicture from '@/components/DrawPicture.vue'
import PageHeading from '@/components/PageHeading.vue'
import PageCard from '@/components/PageCard.vue'
import Pagination from '@/components/Pagination.vue'


export default {
  name: 'About-me',
  components: {
    PageHeading,
    PageCard,
    Pagination,
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