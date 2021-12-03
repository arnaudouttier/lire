<template>
  <header class="site-header">
    <Logo />
    <Navigation />
  </header>
</template>

<script>
import Logo from '../components/Logo.vue'
import Navigation from '../components/Navigation.vue'

export default {
  name: 'Header',
  components: {
    Navigation,
    Logo
  }
}
</script>

<style scoped lang="scss"></style>
