<template>
  <ec-space>
    <ec-button @click="openInfo">文本状态</ec-button>
    <ec-button @click="openSuccess">成功状态</ec-button>
    <ec-button @click="openWarn">警告状态</ec-button>
    <ec-button @click="openError">错误状态</ec-button>
  </ec-space>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from 'vue';
const _this = getCurrentInstance();
const openInfo = () => {
  _this.proxy.Message({
    type: 'info',
    message: '文本消息提示!',
    showClose: true
  });
};
const openSuccess = () => {
  _this.proxy.Message({
    type: 'success',
    message: '成功状态消息提示!',
    showClose: true
  });
};
const openWarn = () => {
  _this.proxy.Message({
    type: 'warning',
    message: '警告状态消息提示!',
    showClose: true
  });
};
const openError = () => {
  _this.proxy.Message({
    type: 'error',
    message: '错误状态消息提示!',
    showClose: true
  });
};
</script>
