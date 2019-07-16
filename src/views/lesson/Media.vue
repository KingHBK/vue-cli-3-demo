<style lang="less" scoped>
@media screen and (max-width: 480px) {
  .media { color: red; }
}
.box-border {
  height: 200px;
  width: 200px;
  margin: 20px auto;
  border: 1px solid #000000;
}
</style>

<template>
  <div>
    <h1>媒体查询</h1>
    <div class="media">测试媒体查询</div>
    <div class="box-border"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
