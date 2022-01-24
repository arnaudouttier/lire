<template>
  <button @click="tr()">Activer</button>
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
