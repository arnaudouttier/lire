<template>
  <header class="site-header">
    <Logo />
    <SiteDescription />
    <Navigation />
  </header>
</template>

<script>
import Logo from '../components/Logo.vue'
import Navigation from '../components/Navigation.vue'
import SiteDescription from '../components/SiteDescription.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    SiteDescription,
    Navigation
  }
}
</script>

<style lang="scss">
.site-header {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding: 3.2rem 0;
}
.site-logo,
.site-description {
  margin-bottom: 3.2rem;
}
</style>
