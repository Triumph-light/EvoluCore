<!-- html -->
<template>
  <ec-space>
    <ec-button @click="openMsg">消息提示</ec-button>
    <ec-button @click="openVNodeMsg">消息提示(VNode)</ec-button>
  </ec-space>
</template>
<!-- js -->
<script setup>
import { getCurrentInstance, h } from 'vue';
const _this = getCurrentInstance();
const openMsg = () => {
  _this.proxy.Message({
    message: '默认消息提示'
  });
};

const openVNodeMsg = () => {
  _this.proxy.Message({
    message: h('p', null, '默认消息提示(VNode)')
  });
};
</script>
