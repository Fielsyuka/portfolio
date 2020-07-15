<template>
  <div class="global-nav">
    <nav>
      <ul class="nav__list">
        <li class="nav__list-item"><router-link to="/">Top</router-link></li>
        <li class="nav__list-item"><router-link to="/About-me">About me</router-link></li>
        <li class="nav__list-item"><router-link to="/Works">Works</router-link></li>
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
      this.$emit('close-menu');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.nav__list {
  list-style: none;
}
.nav__list-item > a {
  display: block;
  position: relative;
  padding: 1em;
  color: $color-base;
  font-family: $accent-font;
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
  color: $color-sub;
}

.nav__list-item > a.router-link-exact-active::after{
  content: "";
  display: block;
  position: absolute;
  top: 1.7em;
  right: -150px;
  width: 100px;
  height: 1px;
  background-color: $color-line;
}

</style>