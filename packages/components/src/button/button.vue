<!-- @format -->

<script lang="ts" setup>
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
    :class="[$style[props.size], $style[props.type], $style['xtx-button']]"
    ref="componentRef"
  >
    <slot />
  </button>
</template>

<style lang="less" module>
@import './style/index.module.less';
</style>
