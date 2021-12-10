<template>
  <main role="main" class="site-main">
    <Post />
  </main>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'Main',
  components: {
    Post
  }
}
</script>

<style scoped lang="scss">
.site-main {
  max-width: 780px;
  margin: 0 auto;
}
</style>
