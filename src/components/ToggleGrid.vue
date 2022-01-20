<template>
  <button class="btn toolerid" @click="tr()">Activer rid</button>
</template>

<script>
export default {
  name: 'toolerid',
  methods: {
    tr () {
      this.$store.commit('tolerid')
    }
  }
}
</script>
