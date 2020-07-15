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
  overflow-x: hidden;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: $padding-sp * 2;
    height: calc(100% - 1px);
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
      color: $color-base;
      font-size: rem(12);
      letter-spacing: .1em;
    }
  }
}


@include media-breakpoint-up-md {
  .main-nav__list {
    li a {
      margin-right: 24px;
    }
  }
}

@include media-breakpoint-up-lg {

}
</style>