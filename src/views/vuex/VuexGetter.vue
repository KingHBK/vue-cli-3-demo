<template>
  <div>
    <h1>Getter测试</h1>
    <div>{{doneTodosCount}}</div>
    <div>{{$store.getters.getTodoById(2)}}</div>
    <button @click="$store.commit('addDoneTodos', {id: 3, text: 'ccc', done: true})">增加</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'doneTodosCount'
    ])
  },
  mounted () {
    console.log(this.doneTodosCount)
  }
}
</script>
