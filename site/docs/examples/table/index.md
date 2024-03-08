# Table 表格

用于展示多层次结构的数据，可自定义并保持高度灵活

## 基本使用

table 表格基本使用示例,需要一个主要的 options 参数。
<preview components="table" demoName="demo1"><Demo1/></preview>

## 不同大小

你可以传入一个 size 来确定表格的不同大小，以适配不同的应用场景
<preview components="table" demoName="demo2"><Demo2/></preview>

## 自定义插槽内容

根据需要自定义表格的插槽内容，插槽接受需要定义表格列的 field 并返回当前行的数据 rowItem ，如果是定义表头，需要在插槽名加上 head- 前缀作为识别符

<preview components="table" demoName="demo3"><Demo3/></preview>

## 自定义表头及表格样式

使用 headStyle 自定义表头的样式，使用 rowStyle 自定义表格内容区域的样式
<preview components="table" demoName="demo4"><Demo4/></preview>

### Attributes 参数

<ec-table :options="options" size="small"></ec-table>

### Fileds 参数

<ec-table :options="options1" size="small"></ec-table>

<script setup>
    import Demo1 from './Demo1.vue'
    import Demo2 from './Demo2.vue'
    import Demo3 from './Demo3.vue'
    import Demo4 from './Demo4.vue'

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
        attr: "options",
        type: "Object",
        red: "表格数据,fileds 和 datas,fileds作为整体约束（具体见下方API），datas作为数据定义",
        sel: "——",
        def: "{fileds:[], datas:[]}",
      },
      {
        attr: "size",
        type: "String",
        red: "表格尺寸大小",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "showHeader",
        type: "Boolean",
        red: "是否显示表头",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "headStyle",
        type: "Object",
        red: "自定义表头样式",
        sel: "——",
        def: "——",
      },
      {
        attr: "rowStyle",
        type: "Object",
        red: "自定义表格内容区域的样式",
        sel: "——",
        def: "——",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义表格组件整体的Class类名",
        sel: "——",
        def: "——",
      },
    ],
  },
});
const { options } = state;

const state1 = reactive({
  options1: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "field",
        type: "String",
        red: "（固定）定义表格列的参数名，对应datas数据下某项的键名",
        sel: "——",
        def: "——",
      },
      {
        attr: "title",
        type: "String",
        red: "（固定）定义表头显示的名称",
        sel: "——",
        def: "——",
      },
      {
        attr: "align",
        type: "String",
        red: "定义表格内容展示位置",
        sel: "left / center / right",
        def: "left",
      },
      {
        attr: "width",
        type: "String",
        red: "定义表格列的宽度,支持任意浏览器支持的单位(vw,%,px)",
        sel: "——",
        def: "——",
      },
    ],
  },
});
const { options1 } = state1;
</script>
