<style lang="less" scoped>
.image-box {
  overflow: hidden;
  padding-top: 2px;
}

.image-count {
  text-align: right;
  color: #cccccc;
  font-size: 12px;
}

.image-style {
  float: left;
  padding-right: 5px;
  padding-top: 10px;
  .clear {
    color: #ffffff;
    text-align: center;
    line-height: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: @theme;
    float: right;
    margin-left: -8px;
    margin-top: -8px;
    position: relative;
    z-index: 10;
    box-shadow: 0 0 5px #000000;
  }
  img {
    width: 70px;
    height: 70px;
    border-radius: 3px;
    box-shadow: 0 0 5px #000000;
  }
}

.add-image {
  width: 70px;
  height: 70px;
  float: left;
  margin-top: 10px;
  img {
    width: 70px;
    height: 70px;
  }
  input {
    width: 70px;
    height: 70px;
    opacity: 0;
    position: relative;
    z-index: 10;
    top: -85px;
  }
}
</style>

<template>
  <div>
    <div v-if="imageData.showCount" class="image-count">{{imageBase.length}} / {{imageData.count}}</div>
    <div class="image-box">
      <div class="image-style" v-for="(item, index) in imageBase" :key="index">
        <div class="clear" @click="imageClear(item, index)">x</div>
        <img :src="item.base64">
      </div>
      <div class="add-image" v-if="imageBase.length < imageData.count">
        <img src="" />
        <input type="file" accept="image/*" @change="addImage">
      </div>
    </div>
    <div class v-if="imageData.url">
      <button @click="upLoad" class="test-btn">图片上传</button>
    </div>

  </div>
</template>

<script>
import lrz from 'lrz'

export default {
  // imageData={url: xxx, count: xx, showCount: true/false}
  props: {
    imageData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      imageBase: []
    }
  },
  methods: {
    addImage (e) {
      if (e.target.files[0] === undefined) return
      lrz(e.target.files[0]).then(rst => {
        // console.log(rst)
        this.imageBase.push({ formData: rst.formData, base64: rst.base64 })
        if (!this.imageData.url) {
          this.$emit('getImage', this.imageBase)
        }
      }).catch(err => {
        // 处理失败会执行
        console.log(err)
      }).always(() => {
        // 不管成功失败都执行
      })
    },
    imageClear (item, index) {
      this.imageBase.splice(index, 1)
      if (!this.imageData.url) {
        this.$emit('getImage', this.imageBase)
      }
    },
    upLoad () {
      this.$emit('getImage', this.imageBase)
    }
  },
  mounted () {}
}
</script>
