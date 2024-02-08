import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
/* empty css                   */const __default__ = defineComponent({
  name: "EcButton"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["xtx-button ellipsis", [props.size, props.type]]),
        ref: "componentRef"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
