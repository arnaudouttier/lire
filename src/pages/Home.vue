<template>
  <section
    class="home masonry"
    :class="{ activerid: this.$store.state.toolerid }"
  >
    <Post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @resizeMasonryItems="resizeAllMasonryItems()"
    />
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
  },
  updated () {
    this.resizeAllMasonryItems()
  },
  methods: {
    resizeMasonryItem (item) {
      const grid = document.querySelector('.masonry')
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
      item.style.MinHeight = '200px'
    },
    resizeAllMasonryItems () {
      const allPostItems = document.querySelectorAll('.post')

      for (let i = 0; i < allPostItems.length; i++) {
        this.resizeMasonryItem(allPostItems[i])
      }
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
      grid-auto-rows: 0;
    }
  }
}
</style>
