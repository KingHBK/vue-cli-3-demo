<template>
  <div>
    <h1>Vuex1</h1>
    <div>store.count:{{count}}</div>
    <button @click="$store.commit('increment')">增加count</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted () {}
}
</script>
