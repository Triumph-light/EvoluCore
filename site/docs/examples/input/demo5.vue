<!-- html -->
<template>
  <ec-input
    v-model="value1"
    type="text"
    placeholder="自定义你喜欢的focus颜色"
    focusColor="red"
  ></ec-input>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue';
const value1 = ref('');
</script>
