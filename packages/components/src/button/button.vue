<template>
  <button
    :class="[
      [$style[props.size], $style[props.type], $style['ec-button']],
      {
        [$style.plain]: props.plain,
        [$style.round]: props.round,
        [$style.disabled]: props.disabled
      }
    ]"
    ref="componentRef"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface EcButtonProps {
  size?: 'mini' | 'small' | 'middle' | 'large';
  type?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  disabled?: boolean;
  plain?: boolean;
  round?: boolean;
}

defineOptions({
  name: 'EcButton'
});

const props = withDefaults(defineProps<EcButtonProps>(), {
  size: 'middle',
  type: 'default',
  disabled: false,
  plain: false,
  round: false
});
</script>

<style lang="less" module>
@import './style/index.module.less';
</style>
