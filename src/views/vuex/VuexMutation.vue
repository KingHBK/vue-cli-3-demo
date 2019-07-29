<template>
  <div>
    <h1>Mutation测试</h1>
    <div>{{$store.state.count}}</div>
    <div>
      <input type="number" v-model="amount" />
      <button @click="$store.commit('increment', { amount })">合计</button>
      <button @click="add({ amount })">合计</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      amount: ''
    }
  },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    ...mapMutations({
      add: 'increment'
    })
  }
}
</script>
