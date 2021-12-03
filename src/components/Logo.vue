<template>
  <h1>{{logoText}}</h1>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      logoText: 'Voix du Web'
    }
  }
}
</script>

<style scoped lang="scss">

    h1{
        text-transform: uppercase;
    }

</style>
