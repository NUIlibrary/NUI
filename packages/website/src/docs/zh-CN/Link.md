# Link 链接

文字超链接。

接受 HTML 中 a 元素的全部属性。

## 基础使用

:::demo

```html
<n-link href="https://nuilibrary.online/" target="_blank">NUI</n-link> |
<n-link color="primary">NUI</n-link> |
<n-link color="success">NUI</n-link> |
<n-link color="warning">NUI</n-link> |
<n-link color="danger">NUI</n-link> |
<n-link color="info">NUI</n-link>
```
:::


## 无下划线

使用`underline`属性控制悬浮时，是否出现下划线。

当使用`disabled`属性时，无论`underline`如何，都不会出现下划线。

:::demo

```html
<n-link href="https://nuilibrary.online/" target="_blank">NUI</n-link> |
<n-link color="primary" underline>NUI</n-link> |
<n-link color="success" :underline="false">NUI</n-link> |
<n-link color="warning" :underline="false">NUI</n-link> |
<n-link color="danger" :underline="false">NUI</n-link> |
<n-link color="info" :underline="false">NUI</n-link>
```
:::

## 禁用

使用`disabled`属性来控制是否禁用。

当使用`disabled`属性时，无论`underline`如何，都不会出现下划线。

:::demo

```html
<n-link href="https://nuilibrary.online/" target="_blank" disabled>NUI</n-link> |
<n-link color="primary" disabled>NUI</n-link> |
<n-link color="success" disabled>NUI</n-link> |
<n-link color="warning" disabled>NUI</n-link> |
<n-link color="danger" disabled>NUI</n-link> |
<n-link color="info" disabled>NUI</n-link>
```
:::

