<template>
  <footer class="site-footer">
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

<style scoped lang="scss">
.site-footer {
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 0;
  border-top: 1px solid #eee;
  font-size: 1.4rem;
}

</style>
