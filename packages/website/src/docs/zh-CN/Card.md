# Card 卡片

卡片是基础的容器组件，用来包裹、装饰、定位内容。

卡片组件除默认插槽外，还包含 3 个可选的具名插槽——

+ title
+ text
+ action

:::demo 基础用法

```html
<n-card>
  <n-card-title>Title</n-card-title>
  <n-card-text>Content</n-card-text>
  <n-card-action>
    <n-button>Submit</n-button>
    <n-button>Cancel</n-button>
  </n-card-action>
</n-card>

<n-card>Content</n-card>
```

:::