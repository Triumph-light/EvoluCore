<template>
  <!-- 遮罩层 -->
  <div :class="[$style['ec-confirm'], $style['fade']]">
    <!-- 核心内容 -->
    <div :class="[$style['wrapper'], $style['fade']]">
      <div :class="$style['header']">
        <h3>{{ props.title }}</h3>
        <a
          href="JavaScript:;"
          :class="[$style['iconfont'], $style[' icon-close-new']]"
          @click="props.cancelCallback"
        ></a>
      </div>
      <div :class="$style['body']">
        <i :class="[$style['iconfont'], $style[' icon-warning']]"></i>
        <span>{{ props.text }}</span>
      </div>
      <div :class="$style['footer']">
        <EcButton size="mini" type="default" @click="innerClose">{{
          cancelButtonText
        }}</EcButton>
        <EcButton size="mini" type="primary" @click="innerConfirm">{{
          confirmButtonText
        }}</EcButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// 处理使用render函数时无法使用自定义封装组件
import EcButton from '../button/button.vue';

defineOptions({
  name: 'EcConfirm'
});

const props = defineProps({
  title: {
    type: String,
    default: '温馨提示'
  },
  text: {
    type: String,
    default: ''
  },
  submitCallback: {
    type: Function
  },
  cancelCallback: {
    type: Function
  },
  cancelButtonText: {
    type: String,
    default: '取消'
  },
  confirmButtonText: {
    type: String,
    default: '确定'
  }
});

const fade = ref(false);
onMounted(() => {
  setTimeout(() => {
    fade.value = true;
  }, 0);
});

const innerClose = () => {
  fade.value = false;
  props.cancelCallback && props.cancelCallback();
};

const innerConfirm = () => {
  fade.value = false;
  props.submitCallback && props.submitCallback();
};
</script>

<style lang="less" module>
@import './style/index.module.less';
</style>
