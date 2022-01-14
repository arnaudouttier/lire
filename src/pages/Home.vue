<template>
  <section class="home">
    <Posts v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<script>
import Posts from '../components/Posts.vue'

export default {
  name: 'Home',
  components: {
    Posts
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  }
}
</script>

<style  lang="scss">
</style>
