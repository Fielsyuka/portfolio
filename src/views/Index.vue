<template>
  <div class="page-wrapper">
    <div class="l-main__section section-top">
      <p class="top-catch">
        <span class="top-catch__fixed">I enjoy...</span>
        <span class="top-catch__move" v-html="currentCatch"></span>
        <span class="top-catch__line"></span>
      </p>
      <p class="top-paragraph">初めまして、ゆかです。<br>まずは<router-link to="/About-me">自己紹介</router-link>をさせてください :)</p>
      <pagination prev="none" next="/About-me"></pagination>
    </div>
  </div>
</template>
<script>
import anime from "animejs"
import Pagination from '@/components/Pagination.vue'

export default {
  name: 'Index',
  components: {
    Pagination
  },
  data() {
    return {
      catchArr: ['Coding', 'Creating', 'Challenging'],
      num: 0,
      currentCatch: '',
    }
  },
  watch: {
    currentCatch() {
      setTimeout(() => {
        this.fadeInDown();
      }, 1)
    }
  },
  mounted() {
    this.updateCatch();
    setInterval(() => {
      this.updateCatch();
    }, 5000);
  },
  methods: {
    splitText(val) {
      return val.replace(/\S/g, '<span class="js-move-letter">$&</span>');
    },
    updateCatch() {
      const length = this.catchArr.length;
      this.num += 1;
      if (this.num > length - 1) {
        this.num = 0;
      }
      const newCatch = this.catchArr[this.num];
      this.currentCatch = this.splitText(newCatch);
    },
    fadeInDown() {
      const target = '.top-catch__move .js-move-letter';
      anime.timeline()
        .add({
          targets: target,
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 120 + 20 * i
        }, ).add({
          targets: target,
          translateX: [0, -30],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1400,
          delay: (el, i) => 100 + 20 * i
        });
    }
  }
}
</script>
<style lang="scss">
@import "../assets/scss/_mixin.scss";

// top
.section-top {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  margin-left: -($padding-pc);
  padding-top: 30%;
  position: relative;
}

.top-catch {
  overflow-x: hidden;
  position: relative;
  color: $color-theme;
  font-family: $accent-font;

  .top-catch__fixed {
    margin-left: $padding-pc;
    color: $color-theme;
    font-family: $accent-font;
    font-size: rem(20);
    font-weight: 300;
    line-height: 2.5;
    letter-spacing: .16em;
    transition: all .2s;
  }

  .top-catch__move {
    margin-left: $padding-pc;
    padding-bottom: 10px;
    text-shadow: 3px 3px 2px rgba(165, 214, 16, 0.5);
    color: $color-theme;
    font-family: $accent-font;
    display: block;
    font-size: rem(36);
    font-weight: 300;
    letter-spacing: .16em;
  }

  .top-catch__line {
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

.top-paragraph {
  margin-top: 70px;
  padding-left: $padding-pc;
  color: $color-base;
  font-family: $base-font;
  font-size: rem(14);
  letter-spacing: .2em;
  line-height: 1.8;
}
@include media-pc {
  .top-catch {
    .top-catch__fixed {
      margin-left: $padding-pc;
      font-size: rem(20);
    }

    .top-catch__move {
      margin-left: $padding-pc;
      font-size: rem(40);
    }
  }
}
</style>