<template>
  <div class="toggle-menu" @click="toggleMenu">
    <p class="toggle-button"><span>menu</span></p>
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
  top: 30px;
  right: 10px;
  width: 50px;
  height: 26px;
  z-index: 9999;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -6px;
    right: -10px;
    width: 20px;
    height: 1px;
    background-color: $color-point;
  }
}
.toggle-button {
  // padding-right: 8px;
  color: $color-point;
  font-size: rem(12);
  letter-spacing: .1em;
}

@include media-pc {
  .toggle-menu {
    display: none;
  }
}
</style>