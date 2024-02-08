import { defineComponent, ref, computed, openBlock, createElementBlock, createElementVNode, toDisplayString, unref, Fragment, renderList, normalizeClass } from "vue";
/* empty css                   */import { generateCalendarData, isAllTrue, weeksTittle } from "./util/index.mjs";
const _hoisted_1 = { class: "calendar" };
const _hoisted_2 = { class: "calendar-operate" };
const _hoisted_3 = { class: "button-group" };
const _hoisted_4 = /* @__PURE__ */ createElementVNode("i", { class: "icon" }, "<", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createElementVNode("i", { class: "icon" }, ">", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "calendar-operate_title" };
const _hoisted_9 = ["disabled"];
const _hoisted_10 = { class: "calendar-header" };
const _hoisted_11 = ["data-month"];
const __default__ = defineComponent({
  name: "EcButton"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    let date = ref(/* @__PURE__ */ new Date());
    const dateText = computed(() => {
      return `${date.value.getFullYear()}/${date.value.getMonth() + 1}`;
    });
    const changeMonth = (type) => {
      let month = 0;
      let year = 1970;
      if (type === "next") {
        month = date.value.getMonth() === 11 ? 0 : date.value.getMonth() + 1;
        year = month === 11 ? date.value.getFullYear() + 1 : date.value.getFullYear();
      } else {
        month = date.value.getMonth() === 0 ? 11 : date.value.getMonth() - 1;
        year = month === 0 ? date.value.getFullYear() - 1 : date.value.getFullYear();
      }
      date.value.setDate(1);
      date.value.setMonth(month);
      date.value.setFullYear(year);
      date.value = new Date(date.value);
    };
    const calendarTableData = computed(() => {
      return generateCalendarData(date.value);
    });
    const isActive = (item) => {
      const date2 = /* @__PURE__ */ new Date();
      return isAllTrue([
        item.day === date2.getDate(),
        item.isCurrentMonth,
        item.month === (/* @__PURE__ */ new Date()).getMonth(),
        item.year === (/* @__PURE__ */ new Date()).getFullYear()
      ]);
    };
    const isToday = computed(() => {
      const currentDate2 = /* @__PURE__ */ new Date();
      return isAllTrue([
        currentDate2.getDate() === date.value.getDate(),
        currentDate2.getMonth() === date.value.getMonth(),
        currentDate2.getFullYear() === date.value.getFullYear()
      ]);
    });
    const currentDate = () => {
      date.value = /* @__PURE__ */ new Date();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("button", {
              class: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => changeMonth("prev"))
            }, _hoisted_5),
            createElementVNode("button", {
              class: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => changeMonth("next"))
            }, _hoisted_7)
          ]),
          createElementVNode("div", _hoisted_8, toDisplayString(unref(dateText)), 1),
          createElementVNode("button", {
            class: "button",
            disabled: unref(isToday),
            onClick: currentDate
          }, " 今天 ", 8, _hoisted_9)
        ]),
        createElementVNode("div", _hoisted_10, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(weeksTittle), (item, index) => {
            return openBlock(), createElementBlock("span", {
              key: index,
              class: normalizeClass(["calendar-header__item", { weak: index === 0 || index === 6 }])
            }, toDisplayString(item), 3);
          }), 128))
        ]),
        createElementVNode("div", {
          class: "calendar-content",
          "data-month": unref(date).getMonth() + 1
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(calendarTableData), (item, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: normalizeClass(["calendar-content__item", [{ light: !item.isCurrentMonth }, { active: isActive(item) }]])
            }, toDisplayString(item.day), 3);
          }), 128))
        ], 8, _hoisted_11)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
