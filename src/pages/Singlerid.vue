<template>
  <section
    class="singlerid"
    :class="{ activerSidebar: this.$store.state.sidebarActive }"
    v-if="this.$store.state.sidebarActive"
  >
    <button class="btn sidebar_close" @click="sidebarActive()"></button>
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
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: rgb(0, 0, 0);
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

.sidebar_close {
  width: 30px;
  height: 30px;
  border: 0 !important;
  padding: 0;
  background-color: transparent;
  margin: 1rem 1rem 6rem 1rem;
  align-self: end;

  &::before,
  &::after {
    content: ' ';
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
}
</style>
