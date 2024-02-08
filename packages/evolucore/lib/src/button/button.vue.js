"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
/* empty css                    */const __default__ = vue.defineComponent({
  name: "EcButton"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["xtx-button ellipsis", [props.size, props.type]]),
        ref: "componentRef"
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
