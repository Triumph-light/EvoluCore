<!-- @format -->

<script lang="ts" setup>
import './style/index.less'
defineOptions({
  name: 'EcButton'
})

const props = defineProps({
  size: {
    type: String,
    default: 'middle'
  },
  type: {
    type: String,
    default: 'dafault'
  }
})
</script>

<template>
  <button class="xtx-button ellipsis" :class="[props.size, props.type]">
    <slot />
  </button>
</template>
<style lang="less"></style>
