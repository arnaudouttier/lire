<template>
  <section>
    <h1>{{ RelatedPost.title }}</h1>
  </section>
</template>
<script>
export default {
  name: 'RelatedPostShowrid',
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  props: {
    relatedpostSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    RelatedPost () {
      return this.posts.find((post) => post.slug === this.relatedpostSlug)
    }
  }
}
</script>
