<template>
  <div class="site-logo">
    <h1>
      <router-link
        :to="{
          name: this.$store.state.toolerid ? 'omerid' : 'Home',
        }"
        >Lire</router-link
      >
    </h1>
    <p>[ BETA ]</p>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      logoText: 'Lire'
    }
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables.scss';

h1 {
  font-family: $primary_font_bold;
  font-size: 3.2rem;
}
</style>
