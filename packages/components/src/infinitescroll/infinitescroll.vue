<script lang="ts" setup>
import { onUnmounted } from 'vue';
import { defineProps, onMounted, ref } from 'vue';

defineOptions({
  name: 'EcInifiteScroll'
});

const props = defineProps({
  // 行内样式
  classStyle: {
    type: Object
  },
  // 触底距离
  distance: {
    type: Number,
    default: 30
  },
  // 数据加载
  onload: {
    type: Function,
    default: async () => {}
  }
});

const isLoading = ref(false);

const onScroll = async (element) => {
  if (isLoading.value) {
    return;
  }
  console.log(element.scrollHeight, element.scrollTop, element.clientHeight);
  if (
    element.scrollHeight <=
    element.scrollTop + element.clientHeight + props.distance
  ) {
    try {
      // 触底的时候进行加载
      isLoading.value = true;
      await props.onload();
      isLoading.value = false;
    } catch (error) {
      console.log(error);
      isLoading.value = false;
    }
  }
};

// 挂载滚动事件
// onMounted(() => {
//   window.addEventListener('scroll', (e) => {
//     onScroll(e.target);
//   });
// });
// // 销毁事件，防止内存泄漏
// onUnmounted(() => {
//   window.removeEventListener(sc)
// });
</script>

<template>
  <div
    class="infinite-view"
    :style="classStyle"
    @scroll="onScroll($event.target)"
  >
    <slot></slot>
    <div v-show="isLoading">正在加载...</div>
  </div>
</template>

<style lang="less" scoped>
.infinite-view {
  height: 100%;
  overflow-y: scroll;
}
</style>
