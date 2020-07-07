<template>
  <div class="page-wrapper">
    <div class="l-main__section section-top">
      <div class="top-catch">
        <p class="top-catch__main">初めまして、ゆかです。<br>まずは<router-link to="/About-me">自己紹介</router-link>をさせてください :)</p>        
      </div>
      <pagination prev="none" next="/About-me"></pagination>
    </div>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Index',
  components: {
    Pagination
  }
}
</script>
<style lang="scss">
@import "../assets/scss/_mixin.scss";

// top
.section-top {
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-direction: column;
  padding-top: 30%;
  position: relative;
  height: 100vh;
}
.top-catch {
  // text-align: center;
  
  .top-catch__main {
    color: $color-base;
    font-family: $base-font;
    font-size: rem(18);
    letter-spacing: .2em;
    line-height: 2.6;
  }
}
</style>