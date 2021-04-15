# 测试文档

---

## 展示代码和组件

::: demo DEMO 的描述文字

```html
<div>
  <h3>🎉Hi, I'm {{message}}</h3>
  <n-example />
</div>

<script>
export default {
  data() {
    return {
      message: 'a NUI demo component. I\'m form markdown file.',
    };
  },
};
</script>

<style>
  h3 {
    color: red;
  }
</style>
```

:::

::: demo

```html
<div>
  <h3>🎉no description</h3>
  <p>{{1+1}}</p>
  <n-example />
</div>
```

:::

## 使用 Vue 语法及组件

```html
<n-example /> 1 + 1 = {{ 1 + 1 }}
```

<n-example/>
1 + 1 = {{1+1}}

## demo 这是一段代码

```html
<div>
  Test
  <n-example />
</div>

<style>
  div {
    background-color: #121212;
  }
</style>
```

## MD 容器 badge

::: badge-tip Tip
Tip
:::

::: badge-other Other
Other
:::

::: badge-warn Warn
warn
:::

::: badge-danger Danger
Danger
:::
