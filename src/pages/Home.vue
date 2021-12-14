<template>
  <main role="main" class="site-main">
    <Post />
  </main>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'Home',
  components: {
    Post
  }
}
</script>

<style  lang="scss">
.site-main {
  max-width: 780px;
  margin: 0 auto;
}
</style>
