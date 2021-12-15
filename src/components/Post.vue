<template>
  <article class="post" v-for="post in posts" v-bind:key="post.id">
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
      <img
        class="featured_image"
        v-if="post.featured_image"
        :src="post.featured_image"
        :alt="post.altfeatured_image"
      />
    </div>
    <div class="post-content">
      <div class="post-content-text">
        <p>{{ post.content }}</p>
      </div>
      <div class="post-content-link">
        <router-link :to="{ name: 'Post', params: { slug: post.postSlug } }">{{
          postButton
        }}</router-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  data () {
    return {
      posts: [
        {
          id: 1,
          featured_image: require('../assets/images/blog-01-500x182.jpg'),
          altImage: 'robot picture',
          title: 'The Necessity of Silence',
          postSlug: 'the-necessity-of-silence',
          category: 'Ville',
          date: 'February 5, 2013',
          author: 'Louis',
          content:
            'This is an interview book of world film composers. Silence, which indicates the space without sound, its existential meaning is just equivalent to the technique of “leaving blank” in Chinese painting. From nothing comes from nothing, “leaving blank” doesn’t mean empty but roots in the essence of everything.'
        },
        {
          id: 2,
          title: 'Web Design is 95% Typography',
          postSlug: 'web-design-is-typography',
          category: 'Web',
          date: 'February 2, 2013',
          author: 'Arnaud',
          content:
            'Kubrick does not have one single rigid role: it is not only a bookstore but also a café and a publisher. 3 versions of shop card are thus created for Kubrick with same set of keywords highlighted but varied in description, to tell its diversity and richness'
        },
        {
          id: 3,
          title: 'HTML5 and SEO',
          postSlug: 'html-and-seo',
          category: 'Bar',
          date: 'February 1, 2013',
          author: 'Victor',
          content:
            'Sed feugiat consectetur enim, in feugiat dui pharetra eget. Donec quis nunc diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis non risus eu risus auctor vulputate. Nunc id lorem at nulla ornare vestibulum sagittis vel diam. Nulla magna quam, dignissim id pellentesque at, rhoncus vitae sem. Mauris leo velit, condimentum ut condimentum ac, aliquet ac turpis. Donec in orci arcu.'
        }
      ],
      postButton: 'Continue reading'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.post {
  text-align: center;
  margin-bottom: 6.4rem;
}
.post-header-title {
  font-size: 2.1rem;
  margin-bottom: 3.2rem;
}
.post-header-meta {
  display: none;
}

.post-content-text {
  margin-bottom: 3.2rem;
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

  a {
    &::after {
      content: '→';
      margin-left: 0.8rem;
    }
  }
}

@media (min-width: 768px) {
  .post {
    margin-bottom: 8rem;
  }
  .post-header-title {
    font-size: 3rem;
    margin: 0;
  }

  .post-header-meta {
    display: block;
    padding: 1.6rem 0;
    color: #aaa;
    font-weight: 400;
    font-size: 1.3rem;
    letter-spacing: 1px;

    .meta {
      margin: 0 0.5rem;
      color: #333;
      border-bottom: 1px dotted #ccc;

      &:hover {
        text-shadow: none;
        color: $secondary_color;
        background: $selection_bg_color;
      }
    }
  }
}
</style>
