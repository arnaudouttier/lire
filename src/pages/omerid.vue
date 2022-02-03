<template>
  <section
    class="home omerid"
    :class="{ activerid: this.$store.state.toolerid }"
  >
    <p>Masonry</p>
    <Post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      v-on:activeMasonryFunction="resizeAllMasonryItems()"
    />
  </section>
  <router-view />
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'omerid',
  components: {
    Post
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  mounted () {
    this.resizeAllMasonryItems()
  },
  methods: {
    resizeMasonryItem (item) {
      const grid = document.querySelector('.home')
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
      )
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
      )

      const rowSpan = Math.ceil(
        (item.querySelector('.post_content').getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      )
      item.style.gridRowEnd = 'span ' + rowSpan
    },
    resizeAllMasonryItems () {
      document.querySelectorAll('.post').forEach((p) => {
        console.log(p)
        this.resizeMasonryItem(p)
      })
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
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-auto-rows: 0;
    }
  }
}
</style>
