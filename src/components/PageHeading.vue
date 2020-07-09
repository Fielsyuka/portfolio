<template>
  <div class="page-heading">
    <h2 class="page-heading__text" v-html="title"></h2>
    <span class="page-heading__line"></span>
  </div>
</template>
<script>
import anime from "animejs"

export default {
  name: 'PageHeading',
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.title = this.splitText(this.$route.name);
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
          targets: '.page-heading__text .js-move-letter',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 120 + 30 * i
        });
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.page-heading {
  overflow-x: hidden;
  position: relative;
  margin-bottom: 40px;
  margin-left: -($padding-sp);

  .page-heading__text {
    margin-left: $padding-sp;
    padding-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(202, 214, 16, .5);
    color: $color-theme;
    font-family: $accent-font;
    display: block;
    font-size: rem(26);
    font-weight: 300;
    letter-spacing: .16em;
  }

  .letter {
    display: inline-block;
    opacity: 0;
  }

  .page-heading__line {
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 1px;
    background-color: $color-line;
    animation: slide-in-x .6s ease-in-out forwards;
  }
}
.letter {
    display: inline-block;
    opacity: 0;
}

@include media-pc {
  .page-heading {
    margin-left: -($padding-pc);
    .page-heading__text {
      margin-left: $padding-pc;
    }

    .page-heading__line {
      left: -($padding-pc);
    }
  }
}

@keyframes line-draw {
  0% {
    stroke-dashoffset: 160px;
  }

  80% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>