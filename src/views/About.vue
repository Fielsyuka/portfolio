<template>
  <section class="l-main__section section-about">
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
        <p>東京の片隅で3人の男の子を育てています。</p>
        <p>在宅で働くフリーランスコーダーです。</p>
        <p>フロントエンド専門です。</p>
      </template>
    </page-card>
    <pagination prev="/" next="/Works"></pagination>
  </section>
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
.section-who {
}
</style>