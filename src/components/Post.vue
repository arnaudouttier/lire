<template>
  <article class="post">
    <div class="post-content">
      <div class="post-header">
        <h3 class="post-title">
          <router-link
            @click="sidebarActive"
            :to="{
              name: this.$store.state.toolerid ? 'SingleGrid' : 'Single',
              params: { category: post.category, id: post.id, slug: post.slug },
            }"
            >{{ post.title }}
          </router-link>
        </h3>
        <div class="post-meta">
          <p>
            Category<span class="meta">{{ post.category }}</span
            >on<span class="meta">{{ post.date }}</span> Author<span
              class="meta"
              >{{ post.author }}</span
            >
          </p>
        </div>
        <div class="img-post">
          <img
            class="featured-image"
            v-if="post.featured_image"
            :src="require('@/assets/images/' + post.featured_image)"
            :alt="post.slug"
          />
        </div>
      </div>
      <div class="post-main">
        <div class="post-main-text">
          <p>{{ post.content }}</p>
        </div>
        <div class="post-main-link">
          <router-link
            v-if="!this.$store.state.sidebarActive"
            @click="sidebarActive"
            :to="{
              name: this.$store.state.toolerid ? 'SingleGrid' : 'Single',
              params: { category: post.category, id: post.id, slug: post.slug },
            }"
            >{{ postBtn }}
          </router-link>
        </div>
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
  },
  methods: {
    sidebarActive () {
      if (this.$store.state.toolerid) {
        this.$store.commit('sidebarActive')
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.post {
  margin-bottom: 6.4rem;
}
.post-title {
  font-size: 2.1rem;
  margin-bottom: 3.2rem;
}
.post-meta {
  display: none;
}

.home {
  &.img-post {
    overflow: hidden;

    & .featured-image {
      transform: scale(1.1);
    }

    &:hover {
      & .featured-image {
        transition: transform 0.9s ease-in-out;
        transform: scale(1.12) rotate(1deg);
      }
    }
  }
}

.post-main-text {
  margin-bottom: 3.2rem;
  font-size: 1.6rem;
  text-align: justify;
}

.post-main-link {
  display: inline;
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 2px;
  position: relative;

  a {
    &::before {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -4px;
      background-color: $primary_color;
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    &:hover {
      &::before {
        content: "";
        opacity: 1;
      }
    }

    &::after {
      content: "→";
      margin-left: 0.8rem;
    }
  }
}

.single .post-main-link {
  display: none;
}

@media (min-width: 768px) {
  .post {
    margin-bottom: 12rem;
  }
  .post-title {
    font-size: 3rem;
    margin: 0;
  }

  .post-meta {
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
