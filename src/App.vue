<template>
  <div class="site" :class="{ activerid: this.$store.state.toolerid }">
    <Header />
    <main class="site-main">
      <router-view v-slot="{ Component }">
        <transition :name="animationName">
          <component :is="Component" :key="this.$route.path"> </component>
        </transition>
      </router-view>
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
  },
  data () {
    return {
      animationName: undefined
    }
  },
  watch: {
    $route (to, from) {
      const toDepth = from.path.split('/').length
      console.log(toDepth)
      this.animationName = toDepth > 2 ? ' ' : 'fadeIn'
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/style.scss';
.site {
  max-width: 90%;
  margin: 0 auto;
}

.site-main {
  max-width: 780px;
  margin: 0 auto;
}

.fadeIn-enter-active {
  animation: fadeIn 1.5s ease;
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
  .site {
    max-width: 80%;
    margin: 0 auto;

    &.activerid {
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
