<template>
  <article class="post" v-for="post in posts" v-bind:key="post.id">
    <div class="post-header">
      <img src="" alt="" />
    </div>
    <div class="post-content">
      <h3 class="post-content-title">{{ post.title }}</h3>
      <h5 class="post-content-meta">{{ post.meta }}</h5>
      <p class="post-content-text">{{ post.content }}</p>
      <a class="post-content-link" href="">{{ postButton }}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      posts: [
        {
          id: 1,
          title: 'The Necessity of Silence',
          meta: 'November 23, 2016 | 1 min read',
          content:
            'This is an interview book of world film composers. Silence, which indicates the space without sound, its existential meaning is just equivalent to the technique of “leaving blank” in Chinese painting. From nothing comes from nothing, “leaving blank” doesn’t mean empty but roots in the essence of everything.'
        },
        {
          id: 2,
          title: 'Pascal',
          meta: 'November 19, 2016 | 1 min read',
          content: 'Kubrick does not have one single rigid role: it is not only a bookstore but also a café and a publisher. 3 versions of shop card are thus created for Kubrick with same set of keywords highlighted but varied in description, to tell its diversity and richness'
        }
      ],
      postButton: 'Read more'
    }
  }
}
</script>

<style scoped lang="scss"></style>
