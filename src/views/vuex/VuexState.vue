<template>
  <div>
    <h1>State测试</h1>
    <div>{{count}}</div>
    <div>{{countPlusLocalState}}</div>
    <button @click="$store.commit('increment')">+1</button>
    <vuex1 />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Vuex1 from './Vuex1'

export default {
  components: {
    Vuex1
  },
  data () {
    return {
      localCount: 3
    }
  },
  computed: {
    ...mapState({
      count: state => state.count,
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    })
  }
}
</script>
