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
    transition: all .3s;
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
    transition: all .3s;
  }
  &.is-active {
    &::before {
      width: 16px;
      transform: rotate(-405deg) translate(-6px, 2px);
      transition: all .3s;
    }
    &::after {
      width: 16px;
      transform: rotate(405deg) translate(-6px, -2px);
      transition: all .3s;
    }
  }
}

@include media-pc {
  .toggle-menu {
    display: none;
  }
}
</style>