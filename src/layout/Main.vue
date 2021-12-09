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
  width: 90%;
  margin: 0 auto 6rem auto;
}
</style>
