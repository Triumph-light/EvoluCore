<template>
  <div></div>
</template>

<script>
import { h, useSlots, ref, useCssModule, computed } from 'vue';
export default {
  name: 'EcSpace',
  props: {
    size: {
      type: Array,
      default: [10, 10]
    },
    direction: {
      type: String,
      default: 'row'
    }
  },
  setup(props) {
    const slotList = ref([]);
    const $slots = useSlots();
    const $style = useCssModule();

    $slots.default().forEach((item) => {
      slotList.value.push(
        h(
          'div',
          {
            className: 'ec-space-item',
            style: $style['ec-space-item']
          },
          item
        )
      );
    });
    const dynamicStyle = computed(() => {
      return {
        'flex-direction': props.direction,
        gap: `${props.size[0]}px ${props.size[1]}px`
      };
    });
    return () =>
      h(
        'div',
        {
          className: $style['ec-space-container'],
          style: dynamicStyle.value
        },
        slotList.value
      );
  }
};
</script>

<style module lang="less">
@import './style/index.module.less';
</style>
