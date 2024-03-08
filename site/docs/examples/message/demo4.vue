<!-- html -->
<template>
  <ec-space>
    <ec-button @click="openMsg">文字居中</ec-button>
  </ec-space>
</template>
<!-- js -->
<script setup>
import { getCurrentInstance } from 'vue';
const _this = getCurrentInstance();
const openMsg = () => {
  _this.proxy.Message({
    message: '文字居中',
    center: true
  });
};
</script>
