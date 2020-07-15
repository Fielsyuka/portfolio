<template>
  <div class="works-item">
    <h4 class="works-item__name"><slot name="name"></slot></h4>
    <p class="works-item__time">
      <span><slot name="time-1"></slot></span> / 
      <span><slot name="time-2"></slot></span>
    </p>
    <p class="works-item__texts"><slot name="texts"></slot></p>
  </div>
</template>

<script>
export default {

  name: 'WorksItem',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>