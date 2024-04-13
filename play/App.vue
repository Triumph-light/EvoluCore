<!-- html -->
<template>
  <EcButton type="default" :round="true" :plain="true" @click="btnClick"
    >切换</EcButton
  >
</template>

<script setup lang="ts">
import { ref } from 'vue';
let theme = ref('light');
const btnClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  window.document.documentElement.setAttribute('data-theme', theme.value);
};
</script>
