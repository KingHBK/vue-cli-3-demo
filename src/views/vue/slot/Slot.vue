<template>
  <div>
    <div>vue插槽</div>
    <input @input="search" v-model="searchText" />
    <child-one #default="{ slotOneData }" @myEvent="oneEvent" :myData="dataOne">
      <div>{{ searchText }}</div>
      <div>{{ slotOneData }}</div>
    </child-one>
    <child-one :myData="dataOne">
      <child-two></child-two>
    </child-one>
    <child-two>
      <template #header>
        <h1>这个是Header</h1>
      </template>
      <template #default>
        <p>这个是main</p>
      </template>
      <template #footer>
        <p>这个是Footer</p>
      </template>
    </child-two>
    <!-- <component :is="'child-one'"></component> -->
  </div>
</template>

<script>
// import ChildOne from './ChildOne'
// import ChildTwo from './ChildTwo'

export default {
  components: {
    ChildOne: () => import('./ChildOne'),
    ChildTwo: () => import('./ChildTwo')
  },
  data () {
    return {
      searchText: '',
      oldSearchText: '',
      dataOne: 'Woo!'
    }
  },
  methods: {
    search () {
      if (this.searchText === '' || this.searchText === this.oldSearchText) return
      this.oldSearchText = this.searchText
      console.log(this.searchText)
    },
    oneEvent (e) {
      console.log(e)
    }
  }
}
</script>
