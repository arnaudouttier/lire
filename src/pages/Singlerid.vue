<template>
  <section
    class="singlerid"
    :class="{ activerSidebar: this.$store.state.sidebarActive }"
    v-if="this.$store.state.sidebarActive"
  >
    <button @click="sidebarActive()"><span>X</span></button>
    <SinglePost v-for="post in singlePost" :key="post.id" :post="post" />
    <RelatedPost :id="id" />
    <GoBack />
  </section>
</template>

<script>
import SinglePost from '@/components/SinglePost.vue'
import RelatedPost from '@/components/RelatedPost.vue'
import GoBack from '@/components/GoBack.vue'

export default {
  name: 'Single',
  components: {
    SinglePost,
    RelatedPost,
    GoBack
  },
  data () {
    return {
      posts: this.$store.state.posts
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    sidebarActive () {
      this.$store.commit('sidebarActive')
    }
  },
  computed: {
    singlePost () {
      return this.posts.filter((post) => post.id === this.id)
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/style.scss';
.singlerid {
  padding: 2rem;
  background: red;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 0;
  height: 100%;
  overflow: scroll;

  &.activerSidebar {
    max-width: 50%;
  }
}
</style>
