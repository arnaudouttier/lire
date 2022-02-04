<template>
  <div class="social_navigation">
    <a href="https://github.com/arnaudouttier"> gitub</a>
    <a href="#">Frotend Mentor </a>
    <a href="https://www.frontendmentor.io/profile/arnaudouttier">Vercel </a>
    <p>{{ currentDateTime() }}</p>
  </div>
</template>

<script>
export default {
  name: 'SocialMenu',
  methods: {
    currentDateTime () {
      const current = new Date()
      const dateYears = current.getFullYear()
      return dateYears
    }
  }
}
</script>

<style scoped lang="scss">
.social_navigation {
  a,
  p {
    display: block;
  }
}
</style>
