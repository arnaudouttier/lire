<template>
  <article class="post">
    <div class="post_header">
      <h3 class="post_title">{{ post.title }}</h3>
      <div class="post_meta">
        <p>
          Category<span class="meta">{{ post.category }}</span
          >on<span class="meta">{{ post.date }}</span>
          <span class="meta">Auteur {{ post.author }}</span>
        </p>
      </div>
      <img
        v-if="post.featured_image"
        :src="require('@/assets/images/' + post.featured_image)"
        :alt="post.slug"
      />
    </div>
    <div class="post_content">
      <div class="post_content_text">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'singlePost',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
