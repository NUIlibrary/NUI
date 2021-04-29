# Card 卡片

卡片是基础的容器组件，用来包裹、装饰、定位内容。

卡片组件除默认插槽外，还包含 4 个可选的具名插槽——

+ title
+ subtitle
+ text
+ action

## 基础用法

:::demo 基础用法

```html
<n-card>
  <n-card-title>Title</n-card-title>
  <n-card-subtitle>Subtitle</n-card-subtitle>
  <n-card-text>Text Content</n-card-text>
  <n-card-action>
    <n-button color="primary">Submit</n-button>
    <n-button>Cancel</n-button>
  </n-card-action>
</n-card>
```

:::

## 背景色

使用`color`属性使用不同的背景色。实际上，它与类名`bg-color`效果一直，NUI 在此处提供了语法糖。

:::demo

```html
<n-row justify="space-between">
  <n-col :sm="20" :md="6">
    <n-card color="info" class="my-1">
      <n-card-title>Title</n-card-title>
      <n-card-subtitle>Subtitle</n-card-subtitle>
      <n-card-text>Text Content</n-card-text>
      <n-card-action>
        <n-button color="text-light">Submit</n-button>
        <n-button color="text-light" plain>Cancel</n-button>
      </n-card-action>
    </n-card>
  </n-col>
  
  <n-col :sm="20" :md="6">
    <n-card color="success" class="my-1">
      <n-card-title>Title</n-card-title>
      <n-card-subtitle>Subtitle</n-card-subtitle>
      <n-card-text>Text Content</n-card-text>
      <n-card-action>
        <n-button color="text-light">Submit</n-button>
        <n-button color="text-light" plain>Cancel</n-button>
      </n-card-action>
    </n-card>
  </n-col>
  
  <n-col :sm="20" :md="6">
    <n-card color="danger" class="my-1">
      <n-card-title>Title</n-card-title>
      <n-card-subtitle>Subtitle</n-card-subtitle>
      <n-card-text>Text Content</n-card-text>
      <n-card-action>
        <n-button color="text-light">Submit</n-button>
        <n-button color="text-light" plain>Cancel</n-button>
      </n-card-action>
    </n-card>
  </n-col>
  
</n-row>

```

:::



## 平坦（无阴影）

卡片组件默认存在阴影样式，使用`flat`属性移除阴影样式。

:::demo

```html
<n-card flat>
  <n-card-title>Title</n-card-title>
  <n-card-subtitle>Subtitle</n-card-subtitle>
  <n-card-text>Text Content</n-card-text>
  <n-card-action>
    <n-button color="primary">Submit</n-button>
    <n-button>Cancel</n-button>
  </n-card-action>
</n-card>
```

:::

## 悬浮高度

使用`hover`属性，在指针悬浮时，提升海拔。

:::demo

```html
<n-card hover>
  <n-card-title>Title</n-card-title>
  <n-card-subtitle>Subtitle</n-card-subtitle>
  <n-card-text>Text Content</n-card-text>
  <n-card-action>
    <n-button color="primary">Submit</n-button>
    <n-button>Cancel</n-button>
  </n-card-action>
</n-card>
```

:::

## 属性

