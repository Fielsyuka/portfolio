<template>
  <div class="pagination">
    <router-link v-bind:to="prev" class="pagination__prev">
      <svg class="pagination__svg" width="50px" height="8px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="prev != 'none'">
        <path d="M50 5 L0 5 L10 0" stroke="#ccc" stroke-width="1" fill="none" stroke-linecap="square"></path>
      </svg>
      <p class="pagination__text" v-if="prev != 'none'">Prev</p>
    </router-link>
    <router-link v-bind:to="next" class="pagination__next">
      <p class="pagination__text" v-if="next != 'none'">Next</p>
      <svg class="pagination__svg" width="50px" height="8px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="next != 'none'">
        <path d="M0 5 L50 5 L40 0" stroke="#ccc" stroke-width="1" fill="none" stroke-linecap="square"></path>
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
  // position: fixed;
  // bottom: 0;
  display: flex;
  justify-content: space-between;
  // width: $page-width-sp;
  // height: 100px;
  // border-top: 1px solid #eee;
  // background-color: #fff;
  margin-top: 80px;

  .pagination__prev,
  .pagination__next {
    display: flex;
    align-items: center;
    .pagination__text {
      margin: 0 20px;
    }
    .pagination__svg path {
      stroke: $color-line;
      stroke-dasharray: 100px;
      animation: line-draw 2.2s linear 1s infinite  forwards;
    }
  }
}



@include media-pc {
  .pagination {
  }
}
</style>