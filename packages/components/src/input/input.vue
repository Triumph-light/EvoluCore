import { mergeProps } from 'vue';
<template>
  <div
    :class="[
      $style['ec-input'],
      {
        'ec-input-disabled': disabled
      }
    ]"
    :style="focusStyle"
  >
    <input
      :type="innerType"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="input"
    />
    <span
      :class="[$style['clear-icon']]"
      :style="{
        display:
          modelValue && !disabled ? (!showPassword ? 'block' : 'none') : 'none'
      }"
      @click="clear"
      ><i>x</i></span
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
defineOptions({
  name: 'EcInput'
});

const emits = defineEmits(['update:modelValue']);

const props = defineProps<{
  modelValue: string | number;
  disabled: boolean;
  placeholder: string;
  clearable: boolean;
  showPassword: boolean;
  type: string;
  focusColor: string;
}>();

const focusStyle = computed(() => {
  return props.focusColor ? { '--focus-color': props.focusColor } : {};
});

const input = (e) => {
  emits('update:modelValue', e.target.value);
};

const clear = () => {
  emits('update:modelValue', '');
};

const innerType = computed(() => {
  if (props.type === 'password' && props.showPassword) {
    return 'password';
  }
  return props.type;
});
</script>

<style module lang="less">
@import './style/index.module.less';
</style>
