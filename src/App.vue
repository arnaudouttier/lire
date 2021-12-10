<template>
  <div class="site">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Main from './layout/Main.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/style.scss';

.site {
  max-width: 90%;
  margin: 0 auto;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .site {
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
