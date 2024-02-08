"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
/* empty css                    */const _hoisted_1 = { class: "header" };
const _hoisted_2 = { class: "body" };
const _hoisted_3 = { class: "footer" };
const __default__ = vue.defineComponent({
  name: "EcDialog"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    visible: { type: Boolean },
    title: null
  },
  emits: ["update:visible", "close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const dialogVisible = vue.computed({
      get() {
        return props.visible;
      },
      set(visible) {
        emits("update:visible", visible);
        if (!visible) {
          emits("close");
        }
      }
    });
    return (_ctx, _cache) => {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(["ec-dialog", { fade: vue.unref(dialogVisible) }])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["wrapper", { fade: vue.unref(dialogVisible) }])
        }, [
          vue.createElementVNode("div", _hoisted_1, [
            vue.createElementVNode("h3", null, vue.toDisplayString(props.title), 1),
            vue.createElementVNode("a", {
              href: "JavaScript:;",
              class: "iconfont icon-close-new",
              onClick: _cache[0] || (_cache[0] = ($event) => emits("update:visible", false))
            }, "X")
          ]),
          vue.createElementVNode("div", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          vue.createElementVNode("div", _hoisted_3, [
            vue.renderSlot(_ctx.$slots, "footer")
          ])
        ], 2)
      ], 2)), [
        [vue.vShow, vue.unref(dialogVisible)]
      ]);
    };
  }
});
exports.default = _sfc_main;
