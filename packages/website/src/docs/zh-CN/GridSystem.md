# Grid System 栅格系统

参考了 [bootstrap 的 12 栅格系统](https://getbootstrap.com/docs/5.0/layout/grid/)，NUI 借助 CSS Flex 属性设计了一套 20 栅格系统。

::: badge-tip 为什么选择 20 而不是其他数字（例如 BootStrap 的 12）？

20 能被 5 、10 约分，简化设计人员的计算过程。20 也是 100 的公约数，在 CSS 样式中，也能保证不会出现小数点除不尽的现象。

20 这个数字也足够大，使栅格颗粒度足够精细。

:::

## Row 属性

| 参数    | 说明                 | 类型   | 可选值                                                | 默认值     |
| ------- | -------------------- | ------ | ----------------------------------------------------- | ---------- |
| tab     | 渲染出的实际标签     | String | -                                                     | div        |
| justify | 子元素的水平对齐方式 | String | flex-start/flex-end/center/space-around/space-between | flex-start |
| align   | 子元素的垂直对齐方式 | String | flex-start/flex-end/center/baseline/stretch           | flex-start |
| gutter  | 子元素间的间隔       | Number | （0,+♾️)                                               | -          |

## Col 属性

| 参数           | 说明                         | 类型   | 可选值 | 默认值 |
| -------------- | ---------------------------- | ------ | ------ | ------ |
| tab            | 渲染出的实际标签             | String | -      | div    |
| span           | 栅格占据的列数               | Number | (0,20] | 20     |
| xs/sm/md/lg/xl | 在不同屏幕宽度下，占用的列数 | Number | (0,20] | -      |

## 响应式

| 名称 | 定义    |
| ---- | ------- |
| xs   | <768px  |
| sm   | ≥768px  |
| md   | ≥992px  |
| lg   | ≥1200px |
| xl   | ≥1920px |



## 基础使用

::: demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。

```html
<div class="row-bg">
  <n-row>
    <n-col :span="20"><div class="grid-content bg-purple-dark"></div></n-col>
  </n-row>
  <n-row>
    <n-col :span="10"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="10"><div class="grid-content bg-purple-dark"></div></n-col>
  </n-row>
  <n-row>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
  <n-row>
    <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="4"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="4"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
  <n-row>
    <n-col :span="2"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="2"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
</div>

<style scoped>
  .n-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .n-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px;
    background-color: #f9fafc;
  }
</style>
```

:::

## 控制间隔

:::demo row 使用 gutter 属性控制间隔

```html
<div class="row-bg">
  <n-row :gutter="10">
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
  <n-row :gutter="20">
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
  </n-row>
  <n-row :gutter="40">
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple-dark"></div></n-col>
    <n-col :span="5"><div class="grid-content bg-purple"></div></n-col>
  </n-row>
</div>

<style scoped>
  .n-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .n-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px;
    background-color: #f9fafc;
  }
</style>
```

:::

## 断点

::: demo

```html
<n-row>
  <n-col :span="20" :xs="20" :sm="15" :md="10" :lg="5" :xl="1" class="bg-red">HI</n-col>
</n-row>
```

:::