<template>
  <div class="toggle-menu">
    <p class="toggle-button">Menu</p>
  </div>
</template>

<script>
export default {

  name: 'ToggleMenu',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.toggle-menu {
  position: fixed;
  top: 30px;
  left: -40px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -6px;
    right: -4px;
    width: 80px;
    height: 1px;
    background-color: $color-point;
  }
}
.toggle-button {
  padding-right: 8px;
  color: $color-point;
  font-size: rem(14);
  letter-spacing: .1em;
}

@include media-pc {
  .toggle-menu {
    display: none;
  }
}
</style>