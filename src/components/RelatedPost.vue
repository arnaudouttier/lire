<template>
  <section class="related_posts">
    <h4>Related Posts</h4>
    <div class="related_posts_content">
      <router-link
        v-for="post in relatedPost"
        :key="post.slug"
        :to="{
          name: this.$store.state.toolerid
            ? 'RelatedPostShowrid'
            : 'RelatedPostShow',
          params: { relatedpostSlug: post.slug },
        }"
      >
        <article class="related_post">
          <div class="post_header">
            <h5>{{ post.title }}</h5>
          </div>
        </article>
      </router-link>
    </div>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'RelatedPost',
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
    relatedPost () {
      return this.posts.filter((post) => {
        return (
          post.category === this.$route.params.category && post.id !== this.id
        )
      })
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/style.scss';

.related_post {
  text-align: left;
  margin-bottom: 3.2rem;

  .post_header {
    position: relative;
    display: inline-block;

    &::after {
      height: 2px;
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      background: $primary_color;
      transition: width 0.5s ease;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
    h5 {
      font-size: 2rem;
    }
  }
}
</style>
