<template>
  <article class="post" v-for="post in posts" v-bind:key="post.id">
    <div class="post-header">
      <h3 class="post-header-title">{{ post.title }}</h3>
      <h5 class="post-header-meta">{{ post.meta }}</h5>
      <img :src="post.image" alt="" />
    </div>
    <div class="post-content">
      <div class="post-content-text">
        <p>{{ post.content }}</p>
      </div>
      <div class="post-content-link">
        <a href="">{{ postButton }}</a>
      </div>
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
          image: require('../assets/images/blog-01-500x182.jpg'),
          title: 'The Necessity of Silence',
          meta: 'November 23, 2016 | 1 min read',
          content:
            'This is an interview book of world film composers. Silence, which indicates the space without sound, its existential meaning is just equivalent to the technique of “leaving blank” in Chinese painting. From nothing comes from nothing, “leaving blank” doesn’t mean empty but roots in the essence of everything.'
        },
        {
          id: 2,
          title: 'Web Design is 95% Typography',
          meta: 'November 19, 2016 | 1 min read',
          content:
            'Kubrick does not have one single rigid role: it is not only a bookstore but also a café and a publisher. 3 versions of shop card are thus created for Kubrick with same set of keywords highlighted but varied in description, to tell its diversity and richness'
        }
      ],
      postButton: 'Read more'
    }
  }
}
</script>

<style scoped lang="scss">
.post {
  text-align: center;
  padding: 1.6rem 0;
}
.post-header-title {
  font-size: 2.1rem;
}
.post-header-meta {
  display: none;
}
.post-content-text {
  padding: 0.8rem 0;
  font-size: 1.6rem;
  text-align: justify;
}
.post-content-link {
  max-width: 250px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 1.4rem;
  border-bottom: 1px dotted #ccc;
  letter-spacing: 2px;
  padding: 0.6rem;
}
</style>
