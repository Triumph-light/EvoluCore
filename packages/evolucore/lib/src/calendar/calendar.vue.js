"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
/* empty css                    */const index = require("./util/index.js");
const _hoisted_1 = { class: "calendar" };
const _hoisted_2 = { class: "calendar-operate" };
const _hoisted_3 = { class: "button-group" };
const _hoisted_4 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon" }, "<", -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ vue.createElementVNode("i", { class: "icon" }, ">", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { class: "calendar-operate_title" };
const _hoisted_9 = ["disabled"];
const _hoisted_10 = { class: "calendar-header" };
const _hoisted_11 = ["data-month"];
const __default__ = vue.defineComponent({
  name: "EcButton"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  setup(__props) {
    let date = vue.ref(/* @__PURE__ */ new Date());
    const dateText = vue.computed(() => {
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
    const calendarTableData = vue.computed(() => {
      return index.generateCalendarData(date.value);
    });
    const isActive = (item) => {
      const date2 = /* @__PURE__ */ new Date();
      return index.isAllTrue([
        item.day === date2.getDate(),
        item.isCurrentMonth,
        item.month === (/* @__PURE__ */ new Date()).getMonth(),
        item.year === (/* @__PURE__ */ new Date()).getFullYear()
      ]);
    };
    const isToday = vue.computed(() => {
      const currentDate2 = /* @__PURE__ */ new Date();
      return index.isAllTrue([
        currentDate2.getDate() === date.value.getDate(),
        currentDate2.getMonth() === date.value.getMonth(),
        currentDate2.getFullYear() === date.value.getFullYear()
      ]);
    });
    const currentDate = () => {
      date.value = /* @__PURE__ */ new Date();
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createElementVNode("div", _hoisted_3, [
            vue.createElementVNode("button", {
              class: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => changeMonth("prev"))
            }, _hoisted_5),
            vue.createElementVNode("button", {
              class: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => changeMonth("next"))
            }, _hoisted_7)
          ]),
          vue.createElementVNode("div", _hoisted_8, vue.toDisplayString(vue.unref(dateText)), 1),
          vue.createElementVNode("button", {
            class: "button",
            disabled: vue.unref(isToday),
            onClick: currentDate
          }, " 今天 ", 8, _hoisted_9)
        ]),
        vue.createElementVNode("div", _hoisted_10, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(index.weeksTittle), (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("span", {
              key: index2,
              class: vue.normalizeClass(["calendar-header__item", { weak: index2 === 0 || index2 === 6 }])
            }, vue.toDisplayString(item), 3);
          }), 128))
        ]),
        vue.createElementVNode("div", {
          class: "calendar-content",
          "data-month": vue.unref(date).getMonth() + 1
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(calendarTableData), (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: index2,
              class: vue.normalizeClass(["calendar-content__item", [{ light: !item.isCurrentMonth }, { active: isActive(item) }]])
            }, vue.toDisplayString(item.day), 3);
          }), 128))
        ], 8, _hoisted_11)
      ]);
    };
  }
});
exports.default = _sfc_main;
