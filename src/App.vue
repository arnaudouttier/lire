<template>
  <SingleGrid />
  <div class="site" :class="{ activegrid: this.$store.state.toolerid }">
    <Header />
    <main class="site-main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './commons/Header.vue'
import Footer from './commons/Footer.vue'
import SingleGrid from './pages/SingleGrid.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SingleGrid
  }
}
</script>

<style lang="scss">
@import "./src/assets/scss/style.scss";
.site {
  max-width: 90%;
  margin: 0 auto;
}

.site-main {
  max-width: 780px;
  margin: 0 auto;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .activeSidebar + .activegrid {
    &:after {
      content: "ddd";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.671);
    }
  }
  .site {
    max-width: 80%;
    margin: 0 auto;

    &.activegrid {
      max-height: 100vh;
      max-width: 100%;
      display: grid;
      grid-template-columns: 150px 1fr;
      grid-template-rows: repeat(2, 1fr) auto;

      .site-main {
        max-width: 100%;
        overflow: hidden;
        grid-row: 1/3;
        position: relative;
      }
    }
  }
}
</style>
