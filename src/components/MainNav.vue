<template>
  <div class="main-nav l-wrap">
      <nav class="main-nav__inner">
        <ul class="main-nav__list">
          <li><a href="">HTML & CSS</a></li>
          <li><a href="">Wordpress</a></li>
          <li><a href="">Javascript</a></li>
          <li><a href="">Vue</a></li>
          <li><a href="">React</a></li>
        </ul>
      </nav>
      <span class="c-animation-line-left"></span>
    </div>
</template>

<script>
export default {

  name: 'MainNav',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixin.scss";

.main-nav {
  position: relative;
  height: 60px;
  line-height: 60px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: $padding-sp * 2;
    height: 60px;
    background: linear-gradient(-90deg, rgba(255,255,255,1) 0, rgba(255,255,255,.6) 100%);
    z-index: 10;
  }
}

.main-nav__inner {
  overflow-x: auto;
  position: relative;  
  width: 100%;
}

.main-nav__list {
  display: flex;
  li {
    flex-shrink: 0;
    a {
      display: block;
      margin-right: 20px;
      // padding: 20px 0 18px;
      color: $color-base;
      font-size: rem(12);
      letter-spacing: .1em;
    }
  }
}


@include media-breakpoint-up-md {
  .main-nav {
    height: 80px;
    line-height: 80px;
    padding-left: $padding-md;

    &::after {
      height: 80px;
    }
  }
  .main-nav__list {
    li a {
      margin-right: 24px;
    }
  }
}

@include media-breakpoint-up-lg {
  .main-nav {
    height: 100px;
    line-height: 100px;
    padding-left: $padding-pc;
    &::after {
      height: 100px;
    }
  }
}
</style>