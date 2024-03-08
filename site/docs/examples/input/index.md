# Input 输入框

数据输入框类型，通过键盘输入字符

## 基本使用

input 的基本使用

<preview components="input" demoName="demo1"><Demo1/></preview>

## 禁用状态

input 的禁用状态，通过`disabled`属性限制输入及操作

<preview components="input" demoName="demo2"><Demo2/></preview>

## 可清空数据

input 的`value`可快捷清空，通过`clearable`属性启用

<preview components="input" demoName="demo3"><Demo3/></preview>

## 密码类型

密码类型的输入框，可通过 showPassword 来启用是否开启显示密码
<preview components="input" demoName="demo4"><Demo4/></preview>

## 自定义 Focus 颜色

通过 focusColor 属性自定义 input 在获取焦点后的颜色
<preview components="input" demoName="demo5"><Demo5/></preview>

### Attributes 参数

<ec-table :options="options"></ec-table>

<script setup>
    import Demo1 from './Demo1.vue'
    import Demo2 from './Demo2.vue'
    import Demo3 from './Demo3.vue'
    import Demo4 from './Demo4.vue'
    import Demo5 from './Demo5.vue'

    import { reactive } from "vue";
const state = reactive({
  options:{
   fileds:[
      {field:'attr',title:'参数',align:'center'},
      {field:'type',title:'类型',align:'center'},
      {field:'red',title:'说明',align:'center',width:'350px'},
      {field:'sel',title:'可选值',align:'center'},
      {field:'def',title:'默认值',align:'center'}
    ],
    datas:[
      {attr:'v-model',type:'string / number',red:'input绑定值',sel:'——',def:"——"},
      {attr:'type',type:'string',red:'支持所有原生type值',sel:'——',def:"——"},
      {attr:'placeholder',type:'string',red:'输入框占位字符',sel:'——',def:"——"},
      {attr:'disabled',type:'Boolean',red:'是否禁用',sel:'true / false',def:"false"},
      {attr:'readonly',type:'Boolean',red:'原生属性，是否只读',sel:'true / false',def:"false"},
      {attr:'form',type:'String',red:'原生属性，所属表单',sel:'——',def:"——"},
      {attr:'clearable',type:'Boolean',red:'是否可清空',sel:'true / false',def:"false"},
      {attr:'showPassword',type:'Boolean',red:'是否显示密码查看图标，需配合type为password类型一起使用',sel:'true / false',def:"false"},
      {attr:'size',type:'String',red:'尺寸大小',sel:'default / small / mini',def:"default"},
      {attr:'leftIcon / rightIcon',type:'String',red:'是否带图标，并确定图标的位置',sel:'参考图标库',def:"——"},
      {attr:'autofocus',type:'Boolean',red:'是否自动获取输入框焦点',sel:'true / false',def:"false"},
      {attr:'focusColor',type:'String',red:'自定义Focus颜色的色值',sel:'——',def:"——"}
    ]
  }
})
const { options } = state
</script>
