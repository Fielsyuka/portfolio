<template>
  <h2 class="page-heading" v-html="title"></h2>
</template>
<script>
import anime from "animejs"

export default {
  name: 'PageHeading',
  props: {
    pageName: String
  },
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.title = this.splitText(this.pageName);
  },
  mounted() {
    setTimeout(() => {
      this.fadeInDown();
    }, 100);
  },
  methods: {
    splitText(val) {
      return val.replace(/\S/g, '<span class="js-move-letter">$&</span>');
    },
    fadeInDown() {
      anime.timeline()
        .add({
          targets: '.page-heading .js-move-letter',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 120 + 30 * i
        });
    },
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.page-heading {
  color: $color-base;
  font-family: $accent-font;
  font-size: rem(30);
  letter-spacing: .16em;
}

@include media-pc {
  .page-heading {


  }
}
</style>