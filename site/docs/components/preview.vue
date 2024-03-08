<template>
  <div class="preview-container">
    <div class="header">
      <slot></slot>
    </div>
    <Transition name="fade">
      <pre
        v-if="showCode"
        v-highlight
      ><code class="language-html">{{ code }}</code></pre>
    </Transition>
    <div>
      <span class="show-code" @click="showOrhideCode">{{
        showCode ? '隐藏代码' : '显示代码'
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  components: String,
  demoName: String
});
const code = ref('');
const getCode = async () => {
  code.value = (
    await import(`../examples/${props.components}/${props.demoName}.vue?raw`)
  ).default;
};
const border = ref('1px solid rgba(0,0,0,0.06)');
const showCode = ref(false);
const showOrhideCode = () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = '0';
  } else {
    border.value = '1px solid rgba(0,0,0,0.06)';
  }
};
onMounted(() => {
  getCode();
});
</script>
<style scoped lang="less">
.preview-container {
  border: 1px solid #dcdfe6;
}
.header {
  padding: 10px 20px;
  border-bottom: 1px solid #dcdfe6;
}
pre {
  font-size: 14px;
}
.show-code {
  width: 100%;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #f9f9f9;
  box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  color: #505050;
  cursor: pointer;
  &:hover {
    color: #409eff;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
