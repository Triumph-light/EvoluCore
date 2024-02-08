import { defineComponent, ref, openBlock, createElementBlock, normalizeStyle, renderSlot, withDirectives, createElementVNode, vShow } from "vue";
const __default__ = defineComponent({
  name: "EcInifiteScroll"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
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
      default: async () => {
      }
    }
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(false);
    const onScroll = async (element) => {
      if (isLoading.value) {
        return;
      }
      console.log(element.scrollHeight, element.scrollTop, element.clientHeight);
      if (element.scrollHeight <= element.scrollTop + element.clientHeight + props.distance) {
        try {
          isLoading.value = true;
          await props.onload();
          isLoading.value = false;
        } catch (error) {
          console.log(error);
          isLoading.value = false;
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "infinite-view",
        style: normalizeStyle(__props.classStyle),
        onScroll: _cache[0] || (_cache[0] = ($event) => onScroll($event.target))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        withDirectives(createElementVNode("div", null, "正在加载...", 512), [
          [vShow, isLoading.value]
        ])
      ], 36);
    };
  }
});
export {
  _sfc_main as default
};
