<template>
  <div class="site">
    <Header />
    <main class="site_main">
      <router-view :key="this.$route.path" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";
.site {
  max-width: 90%;
  margin: 0 auto;
}

.site_main {
  max-width: 780px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .site {
    max-width: 80%;
    margin: 0 auto;
  }
}
</style>
