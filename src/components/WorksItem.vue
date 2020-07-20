<template>
  <div class="works-item">
    <h4 class="works-item__name"><slot name="name"></slot></h4>
    <p class="works-item__time">
      <span><slot name="date"></slot></span> / 
      <span><slot name="time"></slot></span>
    </p>
    <p class="works-item__texts"><slot name="texts"></slot></p>
    <div class="works-item__image"><slot name="image"></slot></div>
    <div class="works-item__source"><slot name="source"></slot></div>
  </div>
</template>

<script>
export default {

  name: 'WorksItem',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";
.works-item {
  margin-left: 46px;
}
.works-item + .works-item {
  margin-top: 40px;
}

.works-item__name {
  position: relative;
  color: $color-base;
  font-size: rem(16);
  letter-spacing: .1em;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 12px;
    left: -46px;
    width: 30px;
    height: 1px;
    background-color: $color-line;
  }
}
.works-item__time {
  margin-top: 5px;
  color: $color-theme;
  font-size: rem(12);
  letter-spacing: .1em;
}
.works-item__texts {
  margin-top: 12px;
  line-height: 1.8;
  text-align: justify;
}
.works-item__image {
  > img {
    display: block;
    width: 100%;
    margin: 20px 0;
  }
}
.works-item__source {
  margin-top: 30px;
}

@include media-breakpoint-up-md {
  .works-item__image {
    > img {
      width: 70%;
    }
  }
}
</style>