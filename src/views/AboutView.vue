<template>
  <div class="about">
    <h1 class='title'>This is an about page</h1>
    <!--  全局注册的vant组件  -->
    <van-button type="success">主要按钮</van-button>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { showToast } from 'vant'

onMounted(() => {
  showToast('提示内容')
})
</script>
<style lang='scss' scoped>
$color: red;
.title{
  display: inline-block;
  background-color: $color;
}
/* 可用于做样式适配 */
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
