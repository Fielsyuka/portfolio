<template>
  <div class="pagination">
    <router-link v-bind:to="prev" class="pagination__prev">
      <p class="pagination__text" v-if="prev != 'none'">Prev</p>
      <svg class="pagination__svg" width="50px" height="9px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="prev != 'none'">
        <path d="M50 8 L0 8 L10 0" stroke="#ccc" stroke-width="1" fill="none" stroke-linecap="square"></path>
      </svg>
    </router-link>
    <router-link v-bind:to="next" class="pagination__next">
      <p class="pagination__text" v-if="next != 'none'">Next</p>
      <svg class="pagination__svg" width="50px" height="9px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="next != 'none'">
        <path d="M0 8 L50 8 L40 0" stroke="#ccc" stroke-width="1" fill="none" stroke-linecap="square"></path>
      </svg>
    </router-link>
  </div>
</template>
<script>
export default {

  name: 'Pagination',
  props: {
    prev: String,
    next: String
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_mixin.scss";

.pagination {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  .pagination__prev,
  .pagination__next {
    display: flex;
    align-items: center;
    margin: 0 20px;
    .pagination__text {
      margin: 0 10px;
    }
    .pagination__svg path {
      stroke: $color-line;
      stroke-dasharray: 80px;
      animation: line-draw 1.4s linear 1s infinite  forwards;
    }
  }
}

@keyframes line-draw {
  0% {
    stroke-dashoffset: 80px;
  }
  80% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>