# Border 边框

我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。

## 边框

我们提供了以下几种边框样式，以供选择。

名称 粗细 举例

<hr/>
 实线 1px <div class="line-solid"></div>
<hr/>
 虚线 2px <div class="line-dashed"></div>

# 圆角

我们提供了以下几种圆角样式，以供选择。

小圆角
border-radius: 2px
大圆角
border-radius: 4px

## 投影

提供了 1 种投影样式，以供选择。

<div class="box-shadow"></div>
基础投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

<style>
.line-solid {
    width: 100%;
    border: 1px solid #dcdfe6;
}
.line-dashed {
    width: 100%;
    border: 2px dashed #dcdfe6;
}
.box-shadow {
    min-width: 200px;
    min-height: 100px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
