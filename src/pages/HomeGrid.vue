<template>
  <section
    class="home Homegrid"
    :class="{ activegrid: this.$store.state.toolerid }"
  >
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'HomeGrid',
  components: {
    Post
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  mounted () {
    setTimeout(() => {
      this.resizeAllMasonryItems()
    }, 1000)
  },
  methods: {
    resizeMasonryItem (item) {
      const grid = document.querySelector('.Homegrid')
      const rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
      )
      const rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
      )

      const rowSpan = Math.ceil(
        (item.querySelector('.post-content').getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      )
      item.style.gridRowEnd = 'span ' + rowSpan
    },
    resizeAllMasonryItems () {
      document.querySelectorAll('.post').forEach((p) => {
        this.resizeMasonryItem(p)
      })
    }
  }
}
</script>

<style  lang="scss">
@media (min-width: 768px) {
  .home {
    &.activegrid {
      padding: 2rem;
      max-height: 100vh;
      overflow: scroll;
      display: grid;
      column-gap: 2rem;
      row-gap: 5rem;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-auto-rows: 0;
    }
  }
}
</style>
