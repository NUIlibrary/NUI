# Theme and Color 主题与颜色

## 设计理念

NUI 颜色系统设计思路是这样的：

1. 存在 N 个主题颜色库，与 1 个基本颜色库；
2. 任意时刻仅有 1 个主题可使用；而基本颜色库始终可使用，且主题的切换不影响基本颜色库；
3. 被激活的主题颜色库与基本颜色库拥有平等的地位；
4. 主题颜色库应使用在有意义的行为或有约束规范的场景中；
5. 基本颜色库应使用在恒定颜色的场景中；



在下文中，若无特殊说明，颜色库指代主题颜色库与基本颜色库的集合。

NUI 为颜色库中的每一种颜色，以XXX算法。均生成了 5 种更亮的相似色（冠以后缀 `-lighten1` 至 `-lighten5`）， 5 种更暗的相似色（冠以后缀 `-darken1` 至 `-darken5`）。例如`primary`颜色拥有`primary-lighten1`、`primary-darken3`等相似色。

在下文中，若无特殊说明，颜色指代颜色库中的每一种颜色及其 10 种相似色的集合。`$colorName`指代颜色的名字。

## 预设与更改预设

NUI 预设了 2 套主题颜色库与 1 套基本颜色库。

主题颜色库包括颜色...

基本颜色库包括颜色...

NUI 为开发者在开发环境与生产环境中，提供以下能力。用户是否拥有下述权力应由开发者决定。

+ 新增主题
+ 修改已存在的主题中颜色
+ 新增基本颜色
+ 修改已存在的基本颜色
+ 选择是否跟随系统主题偏好
+ 自定跟随主题偏好时，分别对应何种主题

:::badge-danger

因被激活的主题颜色库与基本颜色库拥有平等的地位，故基本颜色库中的颜色名，不能与主题颜色库中的颜色重名。

若重名，后设定的将覆盖之前。

:::

:::badge-danger

所有主题库应均拥有一致的颜色名，以保证切换不同的主题，颜色不会为空。

:::

### 在开发环境中

通过传入 NUI 构造参数，以修改预设。

如下是 NUI 默认预设的构造参数——

```json
{
  "defaultTheme": ["light", "dark"],
  "color": {
    "red": "#FF3D3D",
    "orange": "#FF9E3D",
    "yellow": "#FFFF3D",
    "chartreuse": "#9FFF3D",
    "green": "#3EFF3D",
    "spring": "#3DFF9D",
    "cyan": "#3DFEFF",
    "sky": "#3D9DFF",
    "blue": "#3E3DFF",
    "purple": "#9F3DFF",
    "magenta": "#FF3DFF",
    "pink": "#FF3D9E",
    "white": "#DDDDDD",
    "black": "#333333"
  },
  "break": {
    "xs": {
      "type": "max-width",
      "value": "768px"
    },
    "sm": {
      "type": "min-width",
      "value": "768px"
    },
    "md": {
      "type": "min-width",
      "value": "992px"
    },
    "ls": {
      "type": "min-width",
      "value": "1200px"
    },
    "xl": {
      "type": "min-width",
      "value": "1920px"
    }
  },
  "themes": {
    "light": {
      "primary": "#42b983",
      "success": "#42b983",
      "warning": "#e7c000",
      "danger": "#cc0000",
      "bg": "#ffffff",
      "text": "#2c3e50",
      "bg-light": "#ffffff",
      "bg-middle": "#f6f6f6",
      "bg-dark": "#475050",
      "text-light": "#ffffff",
      "text-dark": "#2c3e50"
    },
    "dark": {
      "primary": "#42b983",
      "success": "#42b983",
      "warning": "#e7c000",
      "danger": "#cc0000",
      "bg": "#121212",
      "text": "#ffffff",
      "bg-light": "#ffffff",
      "bg-middle": "#f6f6f6",
      "bg-dark": "#475050",
      "text-light": "#ffffff",
      "text-dark": "#2c3e50"
    }
  }
}
```

如下是修改示例——

### 在生产环境中

使用对应的`$nui.api`。

1. 新增主题（若新增主题与已存在的主题重名，将覆盖）
2. 修改主题/主题颜色
3. 新增基本颜色
4. 修改基本颜色

## 使用

### 通过类名的方式设定背景色和文字色

| 类名             | 用途     |
| ---------------- | -------- |
| `bg-colorname`   | 背景颜色 |
| `text-colorname` | 文本颜色 |

:::demo 使用`bg-color`类名设定元素的背景颜色

```html
<n-row v-for="(colorName,index) in colorNameSet" :key="index">
    <n-col
      v-for="i in 5"
      :key="i"
      :span="4"
      :class="`bg-${colorName}-lighten${6-i}`"
           >{{`bg-${colorName}-lighten${6-i}`}}</n-col>
    <n-col
      :span="20"
      :class="`bg-${colorName}`"
           >{{`bg-${colorName}`}}</n-col>
    <n-col
      v-for="i in 5"
      :key="i"
      :span="4"
      :class="`bg-${colorName}-darken${i}`"
           >{{`bg-${colorName}-darken${i}`}}</n-col>
</n-row>

<script>
  export default {
    data() {
      return {
        colorNameSet: [
          'red',
          'orange',
          'yellow',
          'chartreuse',
          'green',
          'spring',
          'cyan',
          'sky',
          'blue',
          'purple',
          'magenta',
          'pink',
          'white',
          'black'
        ],
      };
    },
  };
</script>

<style scoped>
  .n-col {
    height: 50px;
  }
</style>
```

:::

### 在 CSS 中使用自定义属性

NUI 在 CSS 中的自定义属性为 `--nui-color-$colorName`，使用时，应为`var(--nui-color-$colorName)`。例如——

```css
h1.hero{
  background-color: var(--nui-color-bg-darken2);
  color: var(--nui-color-text);
  border-color: var(--nui-color-green);
}
```

