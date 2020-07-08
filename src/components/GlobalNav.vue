<template>
  <div class="global-nav">
    <nav>
      <ul class="nav__list">
        <li class="nav__list-item"><router-link to="/">トップ</router-link></li>
        <li class="nav__list-item"><router-link to="/About-me">自己紹介</router-link></li>
        <li class="nav__list-item"><router-link to="/Works">実績</router-link></li>
      </ul> 
    </nav>
  </div>
</template>

<script>
export default {

  name: 'GlobalNav',

  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
    $route() {
      this.closeMenu();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.nav__list {
  list-style: none;
}
.nav__list-item {
  
}
.nav__list-item > a {
  display: block;
  position: relative;
  padding: 1em;
  color: $color-base;
  font-family: $base-font;
  font-size: rem(15);
  font-weight: 300;
  letter-spacing: .15em;
  transition: filter .3s;
  transition: opacity .5s;
}
.nav__list-item > a:hover {
  opacity: .3;
  filter: blur(1px);
  text-decoration: none;
  transition: filter .3s;
  transition: opacity .5s;
}
.nav__list-item > a.router-link-exact-active {
  color: $color-line;
  font-weight: 500;
}
// .nav__list-item > a.router-link-exact-active:hover {
//   opacity: 1;
//   filter: blur(0);
// }
.nav__list-item > a.router-link-exact-active::after{
  content: "";
  display: block;
  position: absolute;
  top: 1.7em;
  left: -20px;
  width: 20px;
  height: 1px;
  background-color: $color-line;
  animation: clip-line .3s linear reverse;
}
// //clip
// @keyframes clip-line {
//   0% {
//     clip: rect(auto,20vw,auto,auto);
//   }
//   85% {
//     clip: rect(auto,10px,auto,auto);
//   }
//   100% {
//     clip: rect(auto,auto,auto,auto);
//   }
// }

</style>