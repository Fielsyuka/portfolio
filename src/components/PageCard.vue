<template>
  <div class="page-card">
<!--     <div class="svg-rect">
      <svg v-bind:width="width" v-bind:height="height">
        <rect x="0" y="0" v-bind:width="width" v-bind:height="height" v-bind:stroke-dashoffset="length" v-bind:stroke-dasharray="length" fill="none" stroke="#6f8f79" stroke-width="1">
        </rect>
      </svg>
    </div> -->
    <div class="page-card__inner">
      <div class="page-card__picture">
        <slot name="image"></slot>
        <div class="page-card__picture__title">
          <slot name="title"></slot>
        </div>
      </div>
      <div class="page-card__texts">
        <slot name="texts"></slot>
      </div>
    </div>
  </div>
</template>
<script>
// import anime from 'animejs'

export default {
  name: 'PageCard',
  components: {},
  data() {
    return {
      width: '100',
      height: '100',
      length: '1000'
    }
  },
  // mounted() {
  //   this.handleSize();
  //   window.addEventListener('resize', this.handleSize);
  // },
  // methods: {
  //   handleSize() {
  //     const card = document.querySelector('.page-card');
  //     this.width = card.clientWidth;
  //     this.height = card.clientHeight;
  //     this.length = (parseInt(card.clientWidth) + parseInt(card.clientHeight)) *2;
  //   }
  // }
}
</script>
<style lang="scss">
@import "../assets/scss/_mixin.scss";

.page-card__picture {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
}

.page-card__picture__title {
  letter-spacing: .1em;
  line-height: 1.8;
}
.page-card__texts {
  position: relative;
  margin-top: 20px;
  line-height: 2;
  letter-spacing: .1em;
}
.svg-rect {
  position: fixed;
  top: 80px;
  right: 6vw;
  z-index: 1;
}

.svg-rect rect {
  animation: 1s dash .5s linear forwards;
}

@keyframes dash {
  from {
    /*stroke-dashoffset: 822;*/
  }

  to {
    stroke-dashoffset: 0;
  }
}
</style>