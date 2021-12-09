<template>
  <div class="site-description">
    <h2>{{ siteDescription }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SiteDescription',
  data () {
    return {
      siteDescription: 'Blo minimal orienté lecture'
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.3rem;
}
</style>
