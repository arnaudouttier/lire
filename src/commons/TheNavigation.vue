<template>
  <nav class="nav site_navigation">
    <ul>
      <li>
        <router-link
          :to="{
            name: 'Home',
          }"
          >Accueil</router-link
        >
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
  <div class="nav nav_mobile">
    <button class="btn">
      <a href="#" @click="expandNav()">MENU</a>
    </button>
    <nav class="nav-mobile" v-bind:class="{ nav_mobile: isMobile }">
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
      isMobile: false
    }
  },
  methods: {
    expandNav () {
      this.isMobile = !this.isMobile
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

.site_navigation {
  display: none;
}

.nav-mobile {
  margin: 2rem 0;
  transition: all 0.4s ease-in-out;
  max-height: 0;
  overflow: hidden;

  &.isMobile {
    max-height: 400px;
  }

  li {
    margin: 2rem;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .nav {
    font-size: 2rem;
  }
  .nav_mobile {
    display: none;
  }
  .site_navigation {
    display: block;

    ul {
      display: flex;
      justify-content: center;
    }
    li:not(:first-child) {
      margin-left: 2rem;
    }
  }

  .active {
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
