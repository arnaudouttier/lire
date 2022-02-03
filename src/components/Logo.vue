<template>
  <div class="site-logo">
    <h1>
      <router-link to="/">Lire</router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      logoText: 'Lire'
    }
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables.scss';

h1 {
  font-family: $primary_font_bold;
  font-size: 3.2rem;
}
</style>
