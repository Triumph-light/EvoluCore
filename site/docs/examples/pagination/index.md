# Pagination 分页

用于页面数据请求过多分批请求

## 基本使用

Pagination 组件基本使用示例。
<preview components="pagination" demoName="demo1"><Demo1/></preview>

## 禁用状态

通过 disabled 属性来开启禁用。

## 小型分页

通过 size=small 属性来开启。

## 无边框

通过 border=false 属性来开启。

## 每页展示最大页数

通过 maxSize 控制每页展示最大页数，超出将进行滚动。

## 更多配置

更多额外拓展配置项。

## 自定义样式

可通过 activeColors 对象自定义分页样式。

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
        attr: "total",
        type: "Number",
        red: "数据总条数",
        sel: "——",
        def: "——",
      },
      { attr: "current", type: "Number", red: "当前页", sel: "——", def: "1" },
      {
        attr: "pageSize",
        type: "Number",
        red: "每页展示条数",
        sel: "——",
        def: "10",
      },
      {
        attr: "maxSize",
        type: "Number",
        red: "每页最大展示页数",
        sel: "——",
        def: "10",
      },
      {
        attr: "border",
        type: "Boolean",
        red: "是否需要border",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "size",
        type: "String",
        red: "按钮大小",
        sel: "default / small",
        def: "default",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "prevText",
        type: "String",
        red: "自定义上一页按钮文本",
        sel: "——",
        def: "——",
      },
      {
        attr: "nextText",
        type: "String",
        red: "自定义下一页按钮文本",
        sel: "——",
        def: "——",
      },
      {
        attr: "align",
        type: "String",
        red: "分页组件对齐方式",
        sel: "left / center / right",
        def: "left",
      },
      {
        attr: "showTotal",
        type: "Boolean",
        red: "是否显示总条数",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "jumper",
        type: "Boolean",
        red: "是否显示跳转到指定页",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "activeColors",
        type: "Object",
        red: "自定义分页样式，见下方activeColors配置",
        sel: "——",
        def: "{}",
      },
    ],
  },
});
const { options } = state;
</script>
