<template>
  <article class="related_post">
    <div class="post_header">
      <h5>{{ post.title }}</h5>
    </div>
  </article>
</template>

<script>
export default {
  name: 'RelatedPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/style.scss";

.related_post {
  text-align: left;
  margin-bottom: 3.2rem;

  .post_header {
    position: relative;
    display: inline-block;

    &::after {
      height: 2px;
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      background: $primary_color;
      transition: width .5s ease;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
    h5{
        font-size: 2rem;
    }
  }
}
</style>
