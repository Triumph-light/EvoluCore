import { defineComponent, computed, withDirectives, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, toDisplayString, renderSlot, vShow } from "vue";
/* empty css                   */const _hoisted_1 = { class: "header" };
const _hoisted_2 = { class: "body" };
const _hoisted_3 = { class: "footer" };
const __default__ = defineComponent({
  name: "EcDialog"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    visible: { type: Boolean },
    title: null
  },
  emits: ["update:visible", "close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const dialogVisible = computed({
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
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["ec-dialog", { fade: unref(dialogVisible) }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["wrapper", { fade: unref(dialogVisible) }])
        }, [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("h3", null, toDisplayString(props.title), 1),
            createElementVNode("a", {
              href: "JavaScript:;",
              class: "iconfont icon-close-new",
              onClick: _cache[0] || (_cache[0] = ($event) => emits("update:visible", false))
            }, "X")
          ]),
          createElementVNode("div", _hoisted_2, [
            renderSlot(_ctx.$slots, "default")
          ]),
          createElementVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "footer")
          ])
        ], 2)
      ], 2)), [
        [vShow, unref(dialogVisible)]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
