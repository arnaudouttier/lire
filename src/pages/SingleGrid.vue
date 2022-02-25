<template>
  <section
    @click="closeSidebar()"
    class="singlegrid"
    :class="{ activeSidebar: this.$store.state.sidebarActive }"
    v-if="this.$store.state.sidebarActive"
  >
    <button class="btn sidebar-close" @click="sidebarActive()"></button>
    <Post v-for="post in singlePost" :key="post.id" :post="post" />
    <RelatedPost />
    <GoBack />
  </section>
</template>

<script>
import Post from '@/components/Post.vue'
import RelatedPost from '@/components/RelatedPost.vue'
import GoBack from '@/components/GoBack.vue'

export default {
  name: 'SingleGrid',
  components: {
    Post,
    RelatedPost,
    GoBack
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  mounted () {
    this.closeSidebar()
  },
  methods: {
    closeSidebar () {
      const sideBar = document.querySelector('.singlegrid .activeSidebar')
      if (sideBar) {
        alert('e')
      }
    },
    sidebarActive () {
      this.$store.commit('sidebarActive')
    }
  },
  computed: {
    singlePost () {
      return this.posts.filter(
        (post) => post.id === parseInt(this.$route.params.id)
      )
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/scss/style.scss";
.singlegrid {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: rgb(255, 255, 255);
  color: $secondary_color;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 0;
  height: 100%;
  overflow: scroll;
  transition: max-width 4s ease;
  z-index: 999;

  &.activeSidebar {
    max-width: 50%;
  }
}

.sidebar-close {
  padding: 30px;
  align-self: end;

  &::before,
  &::after {
    content: " ";
    position: absolute;
    background-color: $primary_color;
    height: 2px;
    width: 30px;
  }

  &::before {
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }

  &:hover {
    &::before,
    &::after {
      transition: all 0.4s ease-in-out;
      background-color: rgb(0, 0, 0);
    }
  }
}
</style>
