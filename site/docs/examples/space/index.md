# Space 间距

常用于多个组件，或多个元素之间的间距设置，避免紧贴在一起

## 基本使用

space 的基本使用
显示代码

<preview components="space" demoName="demo1"><Demo1/></preview>

## 纵向间距

设置 direction 为 `column` 即可
显示代码

<preview components="space" demoName="demo2"><Demo2/></preview>

## 自定义间距大小

通过设置 size 自定义间距大小， size 接收一个数组，第一个值 为垂直间距，第二个值为水平间距，当 inline 为 false 时，只生效第一个值

<preview components="space" demoName="demo3"><Demo3/></preview>

### Attributes 参数

<ec-table :options="options"></ec-table>

<script setup>
    import Demo1 from './Demo1.vue'
    import Demo2 from './Demo2.vue'
    import Demo3 from './Demo3.vue'

import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "v-model",
        type: "String || Array",
        red: "下拉框绑定值，开启多选时类型为Array",
        sel: "——",
        def: "——",
      },
      {
        attr: "size",
        type: "String",
        red: "尺寸大小",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "placeholder",
        type: "String",
        red: "下拉框占位字符",
        sel: "——",
        def: "——",
      },
      {
        attr: "options",
        type: "Array",
        red: "下拉框数据配置，具体见下方 options API",
        sel: "——",
        def: "[]",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否为禁用状态",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "width",
        type: "String",
        red: "自定义宽度",
        sel: "——",
        def: "260px",
      },
      {
        attr: "height",
        type: "String",
        red: "自定义高度",
        sel: "——",
        def: "——",
      },
      {
        attr: "searchable",
        type: "Boolean",
        red: "是否开启过滤搜索",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "multiple",
        type: "Boolean",
        red: "是否开启多选",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "labelFiled",
        type: "String",
        red: "自定义替换lable的字段名",
        sel: "——",
        def: "label",
      },
      {
        attr: "valueFiled",
        type: "String",
        red: "自定义替换value的字段名",
        sel: "——",
        def: "value",
      },
    ],
  },
});
const { options } = state;
</script>
