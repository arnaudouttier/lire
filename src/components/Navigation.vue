<template>
  <nav class="site-navigation">
    <ul>
      <li>
        <a href="#" @click="activeMenu">MENU</a>
      </li>
    </ul>
    <ul class="mobile-navigation" v-bind:class="{ activeMenu: isActiveMenu }">
      <li>
        <a href="#" @click="activeMenu">ABOUT</a>
      </li>
      <li>
        <a href="#" @click="activeMenu">CONTACT</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      isActiveMenu: false
    }
  },
  methods: {
    activeMenu () {
      this.isActiveMenu = !this.isActiveMenu
    }
  }
}
</script>

<style scoped lang="scss">
.site-navigation {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0.8rem;

  li {
    margin: 1.6px;
  }

  a {
    font-weight: 700;
    font-size: 14px;
  }
  .mobile-navigation {
    transition: all 0.4s ease-in-out;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;

    &.activeMenu {
      max-height: 400px;
    }
  }
}
</style>
