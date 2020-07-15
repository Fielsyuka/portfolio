<template>
  <div class="section-top">
    <div class="l-main__header">
      <main-nav></main-nav>
    </div>
    <div class="l-main__section l-wrap">
      <top-catch></top-catch>
    </div>
    <div class="l-main__footer l-wrap">
      <main-footer></main-footer>
    </div>
  </div>
</template>
<script>
import MainNav from '@/components/MainNav.vue'
import MainFooter from '@/components/MainFooter.vue'
import TopCatch from '@/components/TopCatch.vue'

export default {
  name: 'Index',
  components: {
    MainNav,
    MainFooter,
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

</style>