<template>
  <section>
    <article class="post">
      <div class="post-header">
        <h3 class="post-title">{{ RelatedPost.title }}</h3>
        <div class="post-meta">
          <p>
            posted in <span class="meta">{{ RelatedPost.category }}</span
            >on<span class="meta">{{ RelatedPost.date }}</span> by<span
              class="meta"
              >{{ RelatedPost.author }}</span
            >
          </p>
        </div>
        <img
          class="featured-image"
          v-if="RelatedPost.featured_image"
          :src="require('@/assets/images/' + RelatedPost.featured_image)"
          :alt="RelatedPost.slug"
        />
      </div>
      <div class="post-main">
        <div class="post-main-text">
          <p>{{ RelatedPost.content }}</p>
        </div>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  name: 'RelatedPostShow',
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  props: {
    relatedPostSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    RelatedPost () {
      return this.posts.find((post) => post.slug === this.relatedPostSlug)
    }
  }
}
</script>
