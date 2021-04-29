# Button 按钮

## 基础用法

:::demo 基础使用

```html
<n-button>默认按钮</n-button>
<n-button color="primary">主题按钮</n-button>
<n-button color="success">成功按钮</n-button>
<n-button color="warning">警告按钮</n-button>
<n-button color="danger">警告按钮</n-button>
```

:::


## 丰富的样式（朴素/圆角/禁用）

:::demo

```html
<n-button plain>朴素按钮</n-button>
<n-button color="primary" plain>主题按钮</n-button>
<n-button color="success" plain>成功按钮</n-button>
<n-button color="warning" plain>警告按钮</n-button>
<n-button color="danger" plain>危险按钮</n-button>

<br/>

<n-button round>圆角按钮</n-button>
<n-button color="primary" round>主题按钮</n-button>
<n-button color="success" round>成功按钮</n-button>
<n-button color="warning" round>警告按钮</n-button>
<n-button color="danger" round>危险按钮</n-button>

<br/>

<n-button disabled>禁用按钮</n-button>
<n-button color="primary" disabled>主题按钮</n-button>
<n-button color="success" disabled>成功按钮</n-button>
<n-button color="warning" disabled>警告按钮</n-button>
<n-button color="danger" disabled>危险按钮</n-button>

<br/>

<n-button plain disabled>混合样式</n-button>
<n-button color="primary" plain round>主题按钮</n-button>
<n-button color="success" plain round >成功按钮</n-button>
<n-button color="warning" round disabled>警告按钮</n-button>
<n-button color="danger" round plain disabled>危险按钮</n-button>
```
:::

## 尺寸

:::demo

```html
<n-button size="lg">LG 大号按钮</n-button>
<n-button>MD 默认按钮</n-button>
<n-button size="sm">SM 小号按钮</n-button>
```

:::

## 超链接按钮

当使用了`helf`属性时，按钮将变成超链接，可选`target`属性。
`helf`与`target`与 HTML 中 a 标签中的用法保持一致。

## 属性

