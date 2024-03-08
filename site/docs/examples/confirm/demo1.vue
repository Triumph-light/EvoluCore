<!-- html -->
<template>
  <ec-button @click="openConfirm">确认消息</ec-button>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from 'vue';
const _this = getCurrentInstance();
const openConfirm = () => {
  _this.proxy
    .Confirm({
      text: '您确认要删除这条数据吗？'
    })
    .then(() => {
      _this.proxy.Message({ message: '点击了确定', type: 'success' });
    })
    .catch(() => {
      console.log('点击了取消');
      _this.proxy.Message({ message: '点击了取消' });
    });
};
</script>
