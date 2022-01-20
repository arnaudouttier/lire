<template>
  <section
    class="singleridPost"
    :class="{ activerid: this.$store.state.toolerid }"
  >
    <p>sinle rid post</p>
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
  computed: {
    singlePost () {
      return this.posts.filter((post) => post.id === this.id)
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/style.scss';
.singleridPost {
  background: red;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 0;
  height: 100%;

  &.activerid {
    max-width: 50%;
  }
}
</style>
