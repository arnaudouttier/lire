<template>
  <nav class="nav site-navigation">
    <ul>
      <li>
        <router-link
          :to="{
            name: this.$store.state.toolerid ? 'HomeGrid' : 'Home',
          }"
          >Accueil</router-link
        >
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
  name: 'TheNavigation',
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
@import './src/assets/scss/variables.scss';

.nav {
  padding: 0.8rem;
  font-size: 1.7rem;

  a {
    display: inline-block;
    font-weight: 500;
    letter-spacing: 0.05rem;
    position: relative;

    &.router-link-active,
    .router-link-exact-active {
      transition: 0.3s ease;

      &::before {
        position: absolute;
        content: ' ';
        width: 100%;
        height: 2px;
        left: 0;
        bottom: -4px;
        display: inline-block;
        background: $primary_color;
      }
    }
  }
}

.site-navigation {
  display: none;
}

.nav-mobile {
  margin: 2rem 0;
  transition: all 0.4s ease-in-out;
  max-height: 0;
  overflow: hidden;

  &.activeMenu {
    max-height: 400px;
  }

  li {
    margin: 2rem;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
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

  .activegrid {
    nav {
      padding: 0;
      margin-bottom: 6rem;
      font-size: 1.7rem;
      ul {
        display: block;

        li {
          margin: 2rem 0 !important;
        }
      }
    }
  }
}
</style>
