<template>
  <Transition name="down">
    <div
      :class="[$style['ec-message'], $style[props.type]]"
      v-show="visible"
      :style="style"
    >
      <i :class="$style['iconfont']"></i>
      <span :class="$style['text']">{{ message }}</span>
      <span v-if="showClose" :class="$style['close']" @click="close">x</span>
    </div>
  </Transition>
</template>

<script setup>
import { defineComponent, ref, onMounted, computed, onUnmounted } from 'vue';
defineOptions({
  name: 'EcMessage'
});

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  // warn警告，error错误，success成功
  type: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3000
  },
  showClose: Boolean,
  offset: {
    type: Number,
    default: 20
  },
  center: Boolean
});

const style = computed(() => {
  return {
    'text-align': props.center ? 'center' : 'left',
    top: `${props.offset}px`
  };
});

// 定义一个数据控制显示隐藏，默认是隐藏，组件挂载完毕显示
const visible = ref(false);
let timer;
onMounted(() => {
  visible.value = true;
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
});

onUnmounted(() => {
  clearTimeout(timer);
});

const close = () => {
  visible.value = false;
};
</script>

<style module lang="less">
@import './style/index.module.less';
.down {
  &-enter {
    &-from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s;
    }
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
</style>
