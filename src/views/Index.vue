<template>
  <div class="section-top">
    <div class="l-main__header">
      <page-nav></page-nav>
    </div>
    <div class="l-main__section l-wrap">
      <top-catch></top-catch>
    </div>
    <div class="l-main__footer l-wrap">
      <page-footer><p class="copyright">Copyright © Portfolio Yuka.K. All rights reserved.</p></page-footer>
    </div>
  </div>
</template>
<script>
import PageNav from '@/components/PageNav.vue'
import PageFooter from '@/components/PageFooter.vue'
import TopCatch from '@/components/TopCatch.vue'

export default {
  name: 'Index',
  components: {
    PageNav,
    PageFooter,
    TopCatch
  },
  data() {
    return {
    }
  },
  watch: {
  },
  mounted() {

  },
  methods: {
  }
}
</script>
<style lang="scss">
@import "../assets/scss/_mixin.scss";

.section-top {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .l-main__section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.copyright {
  color: $color-sub;
  font-size: rem(10);
  letter-spacing: .05em;
  text-align: center;
  
}

</style>