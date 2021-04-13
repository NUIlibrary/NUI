# Grid System 栅格系统

参考了 [bootstrap 的 12 栅格系统](https://getbootstrap.com/docs/5.0/layout/grid/)，NUI 借助 CSS Flex 属性设计了一套 20 栅格系统。

::: badge-tip 为什么选择 20 而不是其他数字（例如 BootStrap 的 12）？

20 能被 5 、10 约分，简化设计人员的计算过程。20 也是 100 的公约数，在 CSS 样式中，也能保证不会出现小数点除不尽的现象。

20 这个数字也足够大，使栅格颗粒度足够精细。

:::

::: demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性我们就可以自由地组合布局。
```html
<n-row>
  <n-col :span="24"><div class="grid-content bg-purple-dark"></div></n-col>
</n-row>
<n-row>
  <n-col :span="12"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="12"><div class="grid-content bg-purple-light"></div></n-col>
</n-row>
<n-row>
  <n-col :span="8"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="8"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="8"><div class="grid-content bg-purple"></div></n-col>
</n-row>
<n-row>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="6"><div class="grid-content bg-purple-light"></div></n-col>
</n-row>
<n-row>
  <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple"></div></n-col>
  <n-col :span="4"><div class="grid-content bg-purple-light"></div></n-col>
</n-row>

<style>
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
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
```
:::

