<template>
  <section class="related_posts">
    <h4>Related Posts</h4>
    <div class="related_posts_content">
      <router-link
        class="related_post_link"
        v-for="post in relatedPost"
        :key="post.slug"
        :to="{
          name: this.$store.state.toolerid
            ? 'RelatedPostShowGrid'
            : 'RelatedPostShow',
          params: { relatedPostSlug: post.slug },
        }"
      >
        <article
          class="related_post"
          v-if="post.featured_image"
          :style="{
            backgroundImage:
              'url(' + require(`@/assets/images/${post.featured_image}`) + ')',
          }"
        >
          <h5>{{ post.title }}</h5>
          <div class="post_meta_related">
            <p>
              Category<span class="meta">{{ post.category }}</span
              >on<span class="meta">{{ post.date }}</span
              >Auteur<span class="meta">{{ post.author }}</span>
            </p>
          </div>
        </article>
      </router-link>
    </div>
    <router-view class="related_post_view" />
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
  computed: {
    relatedPost () {
      return this.posts.filter(
        (post) =>
          post.category === this.$route.params.category && post.id !== this.id
      )
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/style.scss";

.related_post {
  margin-bottom: 1rem;
  padding: 1rem;
  color: rgb(255, 255, 255);
  position: relative;
  background-size: cover;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: $primary_color;
    opacity: 0.4;
  }
  h5 {
    margin-top: 12.8rem;
    font-size: 2rem;
    position: relative;
    z-index: 99;
  }
}

.post_meta_related {
  position: relative;
  z-index: 99;
  font-size: 1rem;

  span {
    display: inline-block;
    margin: 0 1rem 0 0.5rem;
    font-family: $primary_font_bold;
    text-transform: uppercase;
    font-weight: 700;
  }
}

.related_post_view {
  margin: 10rem 0;
}

@media (min-width: 992px) {
  .related_posts_content {
    display: flex;
    justify-content: space-between;
    column-gap: 1rem;
  }
}
</style>
