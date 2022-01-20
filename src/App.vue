<template>
  <div class="site" :class="{ activerid: this.$store.state.toolerid }">
    <Header />
    <main class="site_main">
      <router-view :key="this.$route.path" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './commons/Header.vue'
import Footer from './commons/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
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

.site_main {
  max-width: 780px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .site {
    max-width: 80%;
    margin: 0 auto;

    &.activerid {
      max-height: 100vh;
      max-width: 100%;
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: repeat(2, 1fr) auto;

      .site_main {
        max-width: 100%;
        overflow: hidden;
        grid-row: 1/3;
        position: relative;
      }
    }
  }
}
</style>
