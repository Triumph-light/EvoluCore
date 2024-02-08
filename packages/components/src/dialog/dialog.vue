<script setup lang="ts">
import './style/index.less';
import { computed } from 'vue';

defineOptions({
  name: 'EcDialog'
});

const props = defineProps<{
  visible: boolean;
  title?: string;
}>();

const emits = defineEmits<{
  (event: 'update:visible', visible: boolean): void;
  (event: 'close'): void;
}>();

const dialogVisible = computed<boolean>({
  get() {
    return props.visible;
  },
  set(visible) {
    emits('update:visible', visible);
    if (!visible) {
      emits('close');
    }
  }
});
</script>

<template>
  <div
    class="ec-dialog"
    v-show="dialogVisible"
    :class="{ fade: dialogVisible }"
  >
    <div class="wrapper" :class="{ fade: dialogVisible }">
      <div class="header">
        <h3>{{ props.title }}</h3>
        <a
          href="JavaScript:;"
          class="iconfont icon-close-new"
          @click="emits('update:visible', false)"
          >X</a
        >
      </div>
      <div class="body">
        <slot></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
