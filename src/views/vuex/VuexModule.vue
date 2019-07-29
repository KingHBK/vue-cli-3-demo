<style lang="less" scoped>
.main { font-size: 20px; }
</style>

<template>
  <div>
    <h1>Module测试</h1>
    <div class="main">
      <div>A state:{{ countA }}</div>
      <div>A getters:{{ doubleCountA }}</div>
      <div>B state:{{ countB }}</div>
      <div>B getters:{{ doubleCountB }}</div>
      <div>
        <button @click="incrementA">A++</button>
        <button @click="incrementB">B++</button>
        <button @click="incrementIfOnRootSumA">A Plus</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState('moduleA', [
      'countA'
    ]),
    ...mapState({
      countB: state => state.moduleB.countB
    }),
    ...mapGetters('moduleA', [
      'doubleCountA'
    ]),
    ...mapGetters({
      doubleCountB: 'doubleCountB'
    })
  },
  methods: {
    ...mapMutations({
      incrementA: 'moduleA/incrementA',
      incrementB: 'incrementB'
    }),
    ...mapActions('moduleA', {
      incrementIfOnRootSumA: 'incrementIfOnRootSum'
    })
  },
  mounted () {}
}
</script>
