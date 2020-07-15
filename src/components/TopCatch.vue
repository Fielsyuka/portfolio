<template>
  <div class="top-catch">
    <div class="top-catch__flower">
      <svg :class="lists[0].classSvg" viewBox="-1 -1 146 142" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="#b5b5b5" stroke-width="1" fill="none" fill-rule="evenodd">
          <path d="M72.0143885,69.4964029 C85.1079137,42.8831365 91.6546763,26.0688453 91.6546763,19.0535295 C91.6546763,8.53055572 82.8614199,0 72.0143885,0 C61.1673571,0 52.3741007,8.53055572 52.3741007,19.0535295 C52.3741007,26.0688453 58.9208633,42.8831365 72.0143885,69.4964029 Z" fill="#f7d8e3" class="fl-html"></path>
          <path d="M103.23741,86.618705 C116.330935,60.0054386 122.877698,43.1911475 122.877698,36.1758317 C122.877698,25.6528579 114.084441,17.1223022 103.23741,17.1223022 C92.3903787,17.1223022 83.5971223,25.6528579 83.5971223,36.1758317 C83.5971223,43.1911475 90.1438849,60.0054386 103.23741,86.618705 Z" transform="translate(103.237410, 51.870504) rotate(60.000000) translate(-103.237410, -51.870504)" fill="#9fd0fc" class="fl-wp"></path>
          <path d="M102.230216,121.870504 C115.323741,95.2572372 121.870504,78.4429461 121.870504,71.4276302 C121.870504,60.9046564 113.077247,52.3741007 102.230216,52.3741007 C91.3831844,52.3741007 82.5899281,60.9046564 82.5899281,71.4276302 C82.5899281,78.4429461 89.1366906,95.2572372 102.230216,121.870504 Z" transform="translate(102.230216, 87.122302) scale(1, -1) rotate(60.000000) translate(-102.230216, -87.122302)" fill="#ffebb2" class="fl-js"></path>
          <path d="M72.0143885,140 C85.1079137,113.386734 91.6546763,96.5724425 91.6546763,89.5571266 C91.6546763,79.0341528 82.8614199,70.5035971 72.0143885,70.5035971 C61.1673571,70.5035971 52.3741007,79.0341528 52.3741007,89.5571266 C52.3741007,96.5724425 58.9208633,113.386734 72.0143885,140 Z" transform="translate(72.014388, 105.251799) scale(1, -1) translate(-72.014388, -105.251799)" fill="#abeccf" class="fl-vue"></path>
          <path d="M40.7913669,86.618705 C53.8848921,60.0054386 60.4316547,43.1911475 60.4316547,36.1758317 C60.4316547,25.6528579 51.6383983,17.1223022 40.7913669,17.1223022 C29.9443355,17.1223022 21.1510791,25.6528579 21.1510791,36.1758317 C21.1510791,43.1911475 27.6978417,60.0054386 40.7913669,86.618705 Z" transform="translate(40.791367, 51.870504) scale(-1, 1) rotate(60.000000) translate(-40.791367, -51.870504)" fill="#b8eaf8" class="fl-react"></path>
          <path d="M40.7913669,121.870504 C53.8848921,95.2572372 60.4316547,78.4429461 60.4316547,71.4276302 C60.4316547,60.9046564 51.6383983,52.3741007 40.7913669,52.3741007 C29.9443355,52.3741007 21.1510791,60.9046564 21.1510791,71.4276302 C21.1510791,78.4429461 27.6978417,95.2572372 40.7913669,121.870504 Z" transform="translate(40.791367, 87.122302) scale(-1, -1) rotate(60.000000) translate(-40.791367, -87.122302)" class="fl-6"></path>
        </g>
      </svg>
    </div>
    <div class="top-catch__text">
      <router-link class="top-catch__text__main" :class="lists[0].classText" :to="lists[0].link" v-html="currentName" v-bind:style="this.lists[0].style"></router-link>
      <router-link class="top-catch__text__sub" :to="lists[0].link">
        Works<svg class="top-catch__arrow" width="40px" height="5px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <path d="M0 4 L30 4 L20 0" stroke="#b5b5b5" stroke-width="1" fill="none" stroke-linecap="square"></path>
        </svg>
      </router-link>
    </div>
  </div>
</template>
<script>
import anime from "animejs"

export default {

  name: 'TopCatch',

  data() {
    return {
      lists: [
        {
          classSvg: 'is-html',
          name: 'HTML & CSS',
          link: '/Works/HTML-and-CSS',
          classText: 'shadow-html'
        },
        {
          classSvg: 'is-wp',
          name: 'Wordpress',
          link: '/Works/Wordpress',
          classText: 'shadow-wordpress'
        },
        {
          classSvg: 'is-js',
          name: 'Javascript',
          link: '/Works/Javascript',
          classText: 'shadow-javascript'
        },
        {
          classSvg: 'is-vue',
          name: 'Vue.js',
          link: '/Works/Vue',
          classText: 'shadow-vue'
        },
        {
          classSvg: 'is-react',
          name: 'React.js',
          link: '/Works/React',
          classText: 'shadow-react'
        }
      ],
      currentName: '',
    }
  },
  watch: {
    currentName() {
      setTimeout(() => {
        this.fadeInOut();
      }, 1);
    }
  },
  mounted() {
    this.updateList();
    setInterval(() => {
      this.updateList();
    }, 5000);
  },
  methods: {
    splitText(val) {
      return val.replace(/\S/g, '<span class="js-move-letter">$&</span>');
    },
    updateList() {
      this.lists.push(this.lists.shift());
      this.currentName = this.splitText(this.lists[0].name);


    },
    fadeInOut() {
      const target = '.top-catch__text__main .js-move-letter';
      anime.timeline()
        .add({
          targets: target,
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1800,
          delay: (el, i) => 120 + 20 * i
        }, ).add({
          targets: target,
          translateX: [0, -20],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1800,
          delay: (el, i) => 100 + 20 * i
        });
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.top-catch {
  position: relative;
  width: 100%;
  text-align: center;
}

.top-catch__flower {
  width: 48%;
  max-width: 180px;
  margin: 0 auto;

  svg {
    max-width: 100%;

    path {
      fill-opacity: 0;
    }

    &.is-html path.fl-html {
      animation: fill-show .2s linear 1 forwards;
    }

    &.is-wp path.fl-wp {
      animation: fill-show .2s linear 1 forwards;
    }

    &.is-js path.fl-js {
      animation: fill-show .2s linear 1 forwards;
    }

    &.is-vue path.fl-vue {
      animation: fill-show .2s linear 1 forwards;
    }

    &.is-react path.fl-react {
      animation: fill-show .2s linear 1 forwards;
    }
  }
}

.top-catch__text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  line-height: 1;
}

.top-catch__text__main {
  display: block;
  color: $color-base;
  font-family: $accent-font;
  font-size: rem(26);
  font-weight: 300;
  letter-spacing: .12em;
}

.top-catch__text__sub {
  display: block;
  margin-top: 50px;
  font-family: $accent-font;
  font-size: rem(14);
  font-weight: 300;
  letter-spacing: .12em;
  text-align: right;
}
.top-catch__arrow {
  margin-left: .8em;
}

@include media-breakpoint-up-md {
  .top-catch {
    display: flex;
    align-items: center;
    padding: 0 50px;
  }

  .top-catch__text {
    width: 70%;
    margin-left: 10%;
    margin-top: 0;
    text-align: left;
  }

  .top-catch__text__main {
    font-size: rem(32);
  }

  .top-catch__text__sub {
    margin-top: 30px;
    text-align: left;
  }
}

@include media-breakpoint-up-lg {
  .top-catch {
    padding: 0 30px;
  }

  .top-catch__flower {
    width: 44%;
    max-width: 192px;
  }

  .top-catch__text__main {
    font-size: rem(34);
  }
}

@keyframes fill-show {
  0% {
    fill-opacity: 0;
  }

  100% {
    fill-opacity: 1;
  }

}
</style>