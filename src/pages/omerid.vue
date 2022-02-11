<template>
  <div>
    <section
      class="home omerid"
      :class="{ active: this.$store.state.toolerid }"
    >
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
  },
  updated () {
    setTimeout(() => {
      this.resizeAllMasonryItems()
    }, 500)
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
      console.log(rowSpan)
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
    &.active {
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
