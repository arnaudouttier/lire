<template>
  <header class="site-header" :class="{ active: this.$store.state.toolerid }">
    <Logo />
    <TheNavigation />
    <ToggleGridBtn />
    RID : {{ this.$store.state.toolerid }} SIDEBAR :
    {{ this.$store.state.sidebarActive }}
  </header>
</template>

<script>
import TheNavigation from './TheNavigation.vue'
import Logo from '../components/Logo.vue'
import ToggleGridBtn from '../components/ToggleGridBtn.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    TheNavigation,
    ToggleGridBtn
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

@media (min-width: 768px) {
  .site-header {
    padding: 6.4rem 0;
    &.active {
      grid-row: 1/2;
      grid-column: 1/2;
      text-align: left;
      padding: 0 3rem;
    }
  }
}
</style>
