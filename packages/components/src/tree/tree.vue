<template>
  <li v-for="(item, index) in innerData" :key="index" @click.stop="open(item)">
    <div :class="$style['ec-tree-item']">
      <span
        v-if="item.children"
        :class="[$style['right-arrow'], item.isOpen ? $style['rotate'] : '']"
      >
        >
      </span>
      <span :class="$style['text']">{{ item.label }}</span>
    </div>
    <ul v-show="item.isOpen">
      <EcTree :data="item.children" />
    </ul>
  </li>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({
  name: 'EcTree'
});

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const innerData = ref(props.data);
const open = (item) => {
  item.isOpen = !item.isOpen;
};
</script>
<style module lang="less">
@import './style/index.module.less';
</style>
