# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

<preview components="message" demoName="demo1"><Demo1/></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置 type 字段可以定义不同的状态，默认为 info。此时正文内容以 message 的值传入。同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 open4 那样直接调用。

<preview components="message" demoName="demo2"><Demo2/></preview>

## 可关闭

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用 showClose 字段。此外，Message 拥有可控的 duration，设置 0 为不会被自动关闭，默认为 3000 毫秒。
<preview components="message" demoName="demo3"><Demo3/></preview>

## 文字居中

使用 center 属性让文字水平居中。
<preview components="message" demoName="demo4"><Demo4/></preview>

### Attributes 参数

<ec-table :opitons="options"></ec-table>

<script setup>
    import Demo1 from './Demo1.vue'
    import Demo2 from './Demo2.vue'
    import Demo3 from './Demo3.vue'
    import Demo4 from './Demo4.vue'

    import { reactive } from 'vue'
const state = reactive({
  options: {
    fileds: [
      { field: 'attr', title: '参数', align: 'center' },
      { field: 'type', title: '类型', align: 'center' },
      { field: 'red', title: '说明', align: 'center', width: '350px' },
      { field: 'sel', title: '可选值', align: 'center' },
      { field: 'def', title: '默认值', align: 'center' }
    ],
    datas: [
      {
        attr: 'text',
        type: 'String|VNode',
        red: '消息提示文本内容',
        sel: '——',
        def: '——'
      },
      {
        attr: 'type',
        type: 'String',
        red: '消息提示类型',
        sel: 'info / warn / error / success / custom',
        def: 'info'
      },
      {
        attr: 'icon',
        type: 'String',
        red: '消息提示Icon图标',
        sel: '参考图标库',
        def: '——'
      },
      {
        attr: 'timeout',
        type: 'Number',
        red: '消息提示框消失时间（单位：毫秒ms）',
        sel: '——',
        def: '2500'
      },
      {
        attr: 'textColor',
        type: 'String',
        red: '文本颜色，type 为 custom 时有效',
        sel: '——',
        def: '——'
      },
      {
        attr: 'bgColor',
        type: 'String',
        red: '背景颜色，type 为 custom 时有效',
        sel: '——',
        def: '——'
      },
      {
        attr: 'customClass',
        type: 'String',
        red: '自定义组件类名',
        sel: '——',
        def: '——'
      }
    ]
  }
})
const { options } = state
</script>
