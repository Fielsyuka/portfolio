<template>
  <div class="main-nav l-wrap">
      <nav class="main-nav__inner">
        <ul class="main-nav__list">
          <li><router-link to="/works/html-and-css">HTML & CSS</router-link></li>
          <li><router-link to="/works/wordpress">Wordpress</router-link></li>
          <li><router-link to="/works/javascript">Javascript</router-link></li>
          <li><router-link to="/works/vue">Vue</router-link></li>
          <li><router-link to="/works/react">React</router-link></li>
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
  height: 50px;
  line-height: 50px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: $padding-sp * 2;
    height: 50px;
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
    height: 70px;
    line-height: 70px;
    padding-left: $padding-md;

    &::after {
      height: 70px;
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