<template>
  <nav class="nav site-navigation">
    <ul>
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
  <div class="nav site-nav-mobile">
    <button class="btn">
      <a href="#" @click="activeMenu">MENU</a>
    </button>
    <nav class="nav-mobile" v-bind:class="{ activeMenu: isActiveMenu }">
      <ul>
        <li>
          <router-link to="/">Accueil</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </div>
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
    },
    markActiveMenuItem () {
      const path = window.location.pathname
      console.log(path)
    }
  }
}
</script>

<style scoped lang="scss">
@import './src/assets/scss/variables.scss';

.nav {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 0.8rem;
  font-size: 1.4rem;
  font-weight: 700;

  li {
    margin: 0.8rem 0;

    .router-link-active,
    .router-link-exact-active {
      color: $active_links;
    }
  }
}

.site-navigation {
  display: none;
}

.nav-mobile {
  transition: all 0.4s ease-in-out;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.9s ease;

  &.activeMenu {
    max-height: 400px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .nav {
    font-size: 1.6rem;
  }
  .site-nav-mobile {
    display: none;
  }
  .site-navigation {
    display: block;

    ul {
      display: flex;
      justify-content: center;
    }
    li:not(:first-child) {
      margin-left: 2rem;
    }
  }
}
</style>
