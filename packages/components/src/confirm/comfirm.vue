<template>
  <!-- 遮罩层 -->
  <div class="xtx-confirm" :class="{ fade }">
    <!-- 核心内容 -->
    <div class="wrapper" :class="{ fade }">
      <div class="header">
        <h3>{{ props.title }}</h3>
        <a
          href="JavaScript:;"
          class="iconfont icon-close-new"
          @click="cancelCallback"
        ></a>
      </div>
      <div class="body">
        <i class="iconfont icon-warning"></i>
        <span>{{ props.text }}</span>
      </div>
      <div class="footer">
        <EcButton size="mini" type="gray" @click="props.cancelCallback"
          >取消</EcButton
        >
        <EcButton size="mini" type="primary" @click="props.submitCallback"
          >确认</EcButton
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted } from 'vue';

// 处理使用render函数时无法使用自定义封装组件
import EcButton from '../button/button.vue';

defineComponent({
  name: 'WebShopConfirm'
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
  }
});

const fade = ref(false);
onMounted(() => {
  setTimeout(() => {
    fade.value = true;
  }, 0);
});
</script>

<style lang="less" module>
@import './style/index.module.less';
</style>
