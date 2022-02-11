<template>
  <footer class="site_footer" :class="{ active: this.$store.state.toolerid }">
    <SocialMenu />
  </footer>
</template>

<script>
import SocialMenu from '../components/SocialMenu.vue'

export default {
  name: 'Footer',
  components: {
    SocialMenu
  }
}
</script>

<style  lang="scss">
.site_footer {
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 0;
  border-top: 1px solid #eee;
  font-size: 1.2rem;
}

@media (min-width: 768px) {
  .site_footer {
    &.active {
      grid-row: 2/3;
      grid-column: 1/2;
      padding: 3.2rem 3rem;
      border: 0;
    }
  }
}
</style>
