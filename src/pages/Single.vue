<template>
  <section class="single">
    <SinglePost v-for="post in singlePost" :key="post.id" :post="post" />
    <section class="related_posts">
      <h4>Related Posts</h4>
      <div class="related_posts_content">
        <router-link
          v-for="post in relatedPost"
          :key="post.id"
          :to="{ name: 'Post', params: { id: post.id, slug: post.slug } }"
        >
          <RelatedPost :post="post" />
        </router-link>
      </div>
    </section>
  </section>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import RelatedPost from '@/components/RelatedPost.vue'

export default {
  name: 'Single',
  components: {
    SinglePost,
    RelatedPost
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  computed: {
    getPostSlug () {
      return this.$route.params.slug
    },
    singlePost () {
      return this.posts.filter((post) => post.slug === this.getPostSlug)
    },
    relatedPost () {
      return this.posts.filter((post) => post.slug !== this.getPostSlug)
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/style.scss";

.related_posts {
  margin: 6.4rem 0 12.8rem 0;

  h4 {
    display: inline-block;
    margin-bottom: 6.4rem;
    position: relative;

    &::after {
      content: "";
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
