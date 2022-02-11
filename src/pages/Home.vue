<template>
  <div>
    <section class="home" :class="{ active: this.$store.state.toolerid }">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </section>
  </div>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'Home',
  components: {
    Post
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
