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
@import "./src/assets/scss/style.scss";
</style>
