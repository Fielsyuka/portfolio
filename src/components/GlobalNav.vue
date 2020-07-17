<template>
  <div class="global-nav">
    <nav>
      <ul class="global-nav__list">
        <li class="global-nav__list-item">
          <router-link to="/">Top</router-link>
        </li>
        <li class="global-nav__list-item">
          <router-link :to="{name: 'About'}">About me</router-link>
        </li>
        <li class="global-nav__list-item">
            Skills
          <ul class="global-nav__sublist">
            <li class="global-nav__sublist-item" v-for="skill in skills" :key="skill.id">
              <router-link :to="{
                name: 'SkillsDetail',
                params: { slug: skill.slug }
              }">
                {{ skill.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import store from "@/store.js";
export default {

  name: 'GlobalNav',

  data() {
    return {
      skills: store.skills
    };
  },
  methods: {},
  watch: {
    $route() {
      this.$emit('close-menu');
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.global-nav__list {
  list-style: none;
}

.global-nav__list-item {
  padding: 0 1em;
  color: $color-base;
  font-family: $accent-font;
  font-size: rem(15);
  font-weight: 300;
  letter-spacing: .15em;
}

.global-nav__list-item > a {
  display: block;
  position: relative;
  padding-bottom: 1.5em;
  color: $color-base;
  font-family: $accent-font;
  font-size: rem(15);
  font-weight: 300;
  letter-spacing: .15em;
  transition: filter .3s;
  transition: opacity .5s;
}

.global-nav__list-item > a:hover {
  opacity: .3;
  filter: blur(1px);
  text-decoration: none;
  transition: filter .3s;
  transition: opacity .5s;
}

.global-nav__list-item > a.router-link-exact-active,
.global-nav__sublist-item > a.router-link-exact-active {
  color: $color-sub;
}

.global-nav__list-item > a.router-link-exact-active::after,
.global-nav__sublist-item > a.router-link-exact-active::after {
  content: "";
  display: block;
  position: absolute;
  top: .8em;
  right: -150px;
  width: 100px;
  height: 1px;
  background-color: $color-line;
}
.global-nav__sublist {
  list-style: none;
  padding-top: 1.5em;
  padding-left: 1.5em;

}
.global-nav__sublist-item > a {
  display: block;
  position: relative;
  padding-bottom: 1.5em;
  color: $color-base;
  font-family: $accent-font;
  font-size: rem(15);
  font-weight: 300;
  letter-spacing: .15em;
  transition: filter .3s;
  transition: opacity .5s;
}

@include media-breakpoint-up-md {
  .global-nav__list-item > a.router-link-exact-active::after,
  .global-nav__sublist-item > a.router-link-exact-active::after {
    right: -22vw;
    width: 20vw;
  }
}
</style>