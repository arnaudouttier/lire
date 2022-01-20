<template>
  <section class="home" :class="{ activerid: this.$store.state.toolerid }">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </section>
  <router-view />
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
@media (min-width: 768px) {
  .home {
    &.activerid {
      max-height: 100vh;
      overflow: scroll;
      display: grid;
      grid-gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-template-rows: auto;
      grid-auto-flow: dense;
    }
  }
}
</style>
