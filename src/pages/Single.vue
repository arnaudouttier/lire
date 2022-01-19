<template>
  <section class="single">
    <SinglePost v-for="post in singlePost" :key="post.id" :post="post" />
    <RelatedPosts />
  </section>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import RelatedPosts from '@/components/RelatedPosts.vue'

export default {
  name: 'Single',
  components: {
    SinglePost,
    RelatedPosts
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    singlePost () {
      return this.posts.filter((post) => post.id === this.id)
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/style.scss';

.related_posts {
  margin: 6.4rem 0 12.8rem 0;

  h4 {
    display: inline-block;
    margin-bottom: 6.4rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      height: 2px;
      width: 100%;
      background: $primary_color;
    }
  }
}
</style>
