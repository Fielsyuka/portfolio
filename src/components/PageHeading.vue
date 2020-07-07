<template>
  <div class="page-heading">
    <h2 class="page-heading__text">
      <slot></slot>
    </h2>
<!--     <div class="page-heading__line">
      <svg width="160" height="1">
        <line x1="0" y1="0" x2="160" y2="0" />
      </svg>
    </div> -->
  </div>
</template>
<script>
export default {

  name: 'PageHeading',
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.page-heading {
  position: relative;
  
  .page-heading__text {
    display: inline-block;
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 14px;
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    font-size: rem(24);
    color: $color-theme;
    line-height: 1;
    letter-spacing: .1em;
  }
  .page-heading__line {
    position: absolute;
    top: 30px;
    left: -($padding-sp);
    line {
      stroke: $color-line;
      stroke-width: 1px;
      stroke-dasharray: 160px;
      stroke-dashoffset: 160px;
      animation: line-draw .6s linear 1  forwards;
    }
  }

  // &::after {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   bottom: 0;
  //   left: -($padding-sp);
  //   width: calc(100% + 50px);
  //   height: 1px;
  //   background-color: $color-line;
  // }
}

@include media-pc {
  .page-heading {
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