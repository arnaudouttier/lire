<template>
  <article class="post">
    <div class="post_header">
      <h3 class="post_title">{{ post.title }}</h3>
      <div class="post_meta">
        <p>
          posted in <span class="meta">{{ post.category }}</span
          >on<span class="meta">{{ post.date }}</span> by<span class="meta">{{
            post.author
          }}</span>
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
  name: 'Single',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
