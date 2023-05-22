<!-- @format -->

<script lang="ts" setup>
import './style/index.less';

defineOptions({
  name: 'EcButton'
});

const props = defineProps({
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'primary'
  }
});
</script>

<template>
  <button
    class="xtx-button ellipsis"
    :class="[props.size, props.type]"
    ref="componentRef"
  >
    <slot />
  </button>
</template>
<style lang="less"></style>
