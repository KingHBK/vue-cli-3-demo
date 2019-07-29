<template>
  <div>
    <h1>Action测试</h1>
    <div>{{$store.state.count}}</div>
    <button @click="$store.commit('increment2')">+1</button>
    <button @click="$store.dispatch('increment')">+1 Increment</button>
    <button @click="$store.dispatch('incrementAsync')">+1 IncrementAsync</button>
    <button @click="incrementAsync">+1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'incrementAsync',
      'incrementPromise',
      'actionB'
    ])
  },
  mounted () {
    this.actionB()
  }
}
</script>
