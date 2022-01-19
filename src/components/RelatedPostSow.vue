<template>
  <section>
    <h1>{{ post.title }}</h1>
    {{ post.id }}
  </section>
</template>
<script>
export default {
  name: 'RelatedPostSow',
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
    post () {
      return this.posts.find((post) => post.slug === this.relatedpostSlug)
    }
  }
}
</script>
