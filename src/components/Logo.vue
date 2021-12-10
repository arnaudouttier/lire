<template>
  <div class="site-logo">
    <h1>
      <a href="#">{{ logoText }}</a>
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
  font-family: $logo_font;
  font-size: 6.4rem;
}

a {
  border-bottom: 1px dotted #ccc;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  h1 {
    font-size: 9.2rem;
  }
}
</style>
