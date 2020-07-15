<template>
  <div class="page-content">
    <h3 class="page-content__title"><slot name="title"></slot></h3>
    <p class="page-content__intro"><slot name="intro"></slot></p>
  </div>
</template>

<script>
export default {

  name: 'PageContent',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.page-content__title {
  font-size: rem(18);

}
</style>