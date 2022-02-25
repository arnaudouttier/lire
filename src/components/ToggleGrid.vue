<template>
  <div class="togglegrid_link">
    <router-link
      class="btn toggle-grid"
      :class="{ active: this.$store.state.toolerid }"
      @click="ActiveGrid()"
      :to="{
        name: this.$store.state.toolerid ? 'Home' : 'HomeGrid',
      }"
    >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'toolerid',
  methods: {
    ActiveGrid () {
      this.$store.commit('tolerid')
    }
  }
}
</script>

<style lang="scss" scoped>
.togglegrid_link {
  display: none;
}

@media (min-width: 992px) {
  .togglegrid_link {
    display: block;
    margin: 3rem 0;
  }

  .toggle-grid {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    background: rgba(128, 128, 128, 0.561);

    &::before {
      content: " ";
      position: absolute;
      left: -5px;
      top: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #000;
      transition: left 0.5s ease;
    }

    &.active {
      &::before {
        left: 50%;
        top: 0;
      }
    }
  }
}
</style>
