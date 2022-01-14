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
  padding: 3.2rem 0;
  margin-bottom: 3.2rem;
}
.site-logo,
.site-description {
  margin-bottom: 6.2rem;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .site-header {
    padding: 6.4rem 0;
  }
}
</style>
