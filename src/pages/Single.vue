<template>
  <main role="main" class="site-main">
    <article class="post" v-for="post in filterSinglePost" v-bind:key="post.id">
      <div class="post-header">
        <h3 class="post-header-title">{{ post.title }}</h3>
        <div class="post-header-meta">
          <p>
            posted in <span class="meta meta-category">{{ post.category }}</span
            >on<span class="meta meta-date">{{ post.date }}</span> by<span
              class="meta meta-author"
              >{{ post.author }}</span
            >
          </p>
        </div>
        <img :src="post.image" alt="" />
      </div>
      <div class="post-content">
        <div class="post-content-text">
          <p>{{ post.content }}</p>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'Single',
  data () {
    return {
      posts: [
        {
          id: 1,
          image: require('../assets/images/blog-01-500x182.jpg'),
          title: 'The Necessity of Silence',
          postTag: 'the-necessity-of-silence',
          category: 'Ville',
          date: 'February 5, 2013',
          author: 'Louis',
          content:
            'This is an interview book of world film composers. Silence, which indicates the space without sound, its existential meaning is just equivalent to the technique of “leaving blank” in Chinese painting. From nothing comes from nothing, “leaving blank” doesn’t mean empty but roots in the essence of everything.'
        },
        {
          id: 2,
          title: 'Web Design is 95% Typography',
          postTag: 'web-design-is-95%-typography',
          category: 'Web',
          date: 'February 2, 2013',
          author: 'Arnaud',
          content:
            'Kubrick does not have one single rigid role: it is not only a bookstore but also a café and a publisher. 3 versions of shop card are thus created for Kubrick with same set of keywords highlighted but varied in description, to tell its diversity and richness'
        },
        {
          id: 3,
          title: 'HTML5 and SEO',
          postTag: 'html-and-seo',
          category: 'Bar',
          date: 'February 1, 2013',
          author: 'Victor',
          content:
            'Sed feugiat consectetur enim, in feugiat dui pharetra eget. Donec quis nunc diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis non risus eu risus auctor vulputate. Nunc id lorem at nulla ornare vestibulum sagittis vel diam. Nulla magna quam, dignissim id pellentesque at, rhoncus vitae sem. Mauris leo velit, condimentum ut condimentum ac, aliquet ac turpis. Donec in orci arcu.'
        }
      ],
      currentIdPost: ''
    }
  },
  mounted () {
    const route = useRoute()
    this.currentIdPost = route.params.name
  },
  computed: {
    filterSinglePost () {
      return this.posts.filter((post) => post.postTag === this.currentIdPost)
    }
  }
}
</script>

<style lang="scss"></style>
