# Select 下拉框

使用下拉的形式选择需要的数据

## 基本使用

select 下拉框基本使用示例,需要一个主要的 options 参数
巴基斯坦
<preview components="select" demoName="demo1"><Demo1/></preview>

## 禁用状态

可以设置 disabled 属性来实现禁用状态
请选择
<preview components="select" demoName="demo2"><Demo2/></preview>

## 禁用选项

可以针对 options 下某个选项来添加 disabled 属性实现禁用选项
请选择
<preview components="select" demoName="demo3"><Demo3/></preview>

## 匹配不同格式的数据

默认 options 接收 label 和 value 作为显示和值绑定，你可以根据 labelFiled 和 valueFiled 来重新确定字段的绑定，更方便的匹配不同格式的数据。
重庆
<preview components="select" demoName="demo4"><Demo4/></preview>

### Attributes 参数

<ec-table :options="options"></ec-table>

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
        attr: "inline",
        type: "Booleab",
        red: "是否为水平或者垂直，默认横向",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "size",
        type: "Array",
        red: "自定义间距大小，接收两个参数，第一个为垂直间距，第二个为水平间距，当inline为false是，只需要一个参数设置垂直间距即可",
        sel: "——",
        def: "——",
      },
    ],
  },
});
const { options } = state;
</script>
