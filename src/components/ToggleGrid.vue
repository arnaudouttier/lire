<template>
  <router-link
    class="btn tole-rid"
    :class="{ active: this.$store.state.toolerid }"
    @click="ActiveRid()"
    :to="{
      name: this.$store.state.toolerid ? 'Home' : 'omerid',
    }"
  >
  </router-link>
</template>

<script>
export default {
  name: 'toolerid',
  methods: {
    ActiveRid () {
      this.$store.commit('tolerid')
    }
  }
}
</script>

<style lang="scss" scoped>
.tole-rid {
  display: inline-block;
  position: relative;
  width: 50px;
  height: 25px;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  border-radius: 40px;
  background: rgba(128, 128, 128, 0.561);

  &::before {
    content: ' ';
    position: absolute;
    left: -5px;
    top: 0;
    width: 25px;
    height: 25px;
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
</style>
