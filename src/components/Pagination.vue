<template>
  <div class="pagination">
    <router-link
      v-if="prevSlug != undefined"
      :to="{
        name: 'SkillsDetail',
        params: { slug: prevSlug }
      }"
      class="pagination__prev"
    >
      <svg class="pagination__svg" width="40px" height="5px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M30 4 L0 4 L10 0" stroke="#ccc" stroke-width="1" fill="none" stroke-linecap="square"></path>
      </svg>
      <p class="pagination__text">{{ prevName }}</p>
    </router-link>
    <router-link
      v-if="nextSlug != undefined"
      :to="{
        name: 'SkillsDetail',
        params: { slug: nextSlug }
      }"
      class="pagination__next"
    >
      <p class="pagination__text">{{ nextName }}</p>
      <svg class="pagination__svg" width="40px" height="5px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M0 4 L30 4 L20 0" stroke="#ccc" stroke-width="1" fill="none" stroke-linecap="square"></path>
      </svg>
    </router-link>
  </div>
</template>
<script>
export default {

  name: 'Pagination',
  props: {
    prevName: String,
    prevSlug: String,
    nextName: String,
    nextSlug: String
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
  display: flex;
  justify-content: space-between;

  .pagination__prev,
  .pagination__next {
    display: flex;
    align-items: center;
    .pagination__text {
      margin: 0 10px;
      font-size: rem(12);
      letter-spacing: .1em;
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