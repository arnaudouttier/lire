<template>
  <article class="post">
    <div class="post_header">
      <h3 class="post_title">
        <router-link
          v-if="!this.$store.state.toolerid"
          :to="{
            name: 'Single',
            params: { category: post.category, id: post.id, slug: post.slug },
          }"
          >{{ post.title }}
        </router-link>
        <router-link
          v-if="this.$store.state.toolerid"
          :to="{
            name: 'SingleridPost',
            params: { category: post.category, id: post.id, slug: post.slug },
          }"
          >SInelridPost
        </router-link>
      </h3>
      <div class="post_meta">
        <p>
          posted in <span class="meta">{{ post.category }}</span
          >on<span class="meta">{{ post.date }}</span> by<span class="meta">{{
            post.author
          }}</span>
        </p>
      </div>
      <img
        class="featured_image"
        v-if="post.featured_image"
        :src="require('@/assets/images/' + post.featured_image)"
        :alt="post.slug"
      />
    </div>
    <div class="post_content">
      <div class="post_content_text">
        <p>{{ post.content }}</p>
      </div>
      <div class="post_content_link">
        <router-link
          :to="{
            name: 'Single',
            params: { category: post.category, id: post.id, slug: post.slug },
          }"
          >{{ postBtn }}
        </router-link>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      postBtn: 'Contuning reading'
    }
  },
  props: {
    post: {
      type: Object,
      required: true
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
.post_title {
  font-size: 2.1rem;
  margin-bottom: 3.2rem;
}
.post_meta {
  display: none;
}

.post_content_text {
  margin-bottom: 3.2rem;
  font-size: 1.6rem;
  text-align: justify;
}
.post_content_link {
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
    margin-bottom: 12rem;
  }
  .post_title {
    font-size: 3rem;
    margin: 0;
  }

  .post_meta {
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
    }
  }
}
</style>
