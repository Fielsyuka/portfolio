<template>
  <div class="toggle-menu" @click="toggleMenu">
  </div>
</template>

<script>
export default {

  name: 'ToggleMenu',

  data () {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.toggle-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  position: fixed;
  top: 27px;
  right: 20px;
  width: 50px;
  height: 24px;
  z-index: 9999;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 6px;
    right: 0;
    width: 26px;
    height: 1px;
    background-color: $color-base;
    animation: rotate-bar-02 .3s linear reverse;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 6px;
    right: 0;
    width:  18px;
    height: 1px;
    background-color: $color-base;
    animation: rotate-bar-01 .3s linear reverse;
  }
  &.is-active {
    &::before {
      animation: rotate-bar-01 .3s linear forwards;
    }
    &::after {
      animation: rotate-bar-02 .3s linear forwards;
    }  }
}
@keyframes rotate-bar-01 {
  0% {
    opacity: 1;
    transform: rotate(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    width: 16px;
    transform: rotate(-405deg) translate(-6px, 2px);
  }
}
@keyframes rotate-bar-02 {
  0% {
    opacity: 1;
    transform: rotate(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    width: 16px;
    transform: rotate(405deg) translate(-6px, -2px);
  }
}
@include media-pc {
  .toggle-menu {
    display: none;
  }
}
</style>