<template>
  <header
    class="site-header"
    :class="{ activerid: this.$store.state.toolerid }"
  >
    <Logo />
    <SiteDescription />
    <TheNavigation />
    <ToggleGrid />
  </header>
</template>

<script>
import TheNavigation from './TheNavigation.vue'
import Logo from '../components/Logo.vue'
import SiteDescription from '../components/SiteDescription.vue'
import ToggleGrid from '../components/ToggleGrid.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    SiteDescription,
    TheNavigation,
    ToggleGrid
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

    &activerid {
      grid-row: 1/2;
      grid-column: 1/2;
    }
  }
}
</style>
