# Theme and Color 主题与颜色

## 设计理念

NUI 颜色系统设计思路是这样的：

1. 提供丰富、自由的基本颜色库；
2. 在基本颜色库的基础上，挑选颜色组建为主题；
3. 无论是在开发环境和生产环境，都允许修改颜色库与主题；

## 基本颜色库

NUI 选取了自然界部分颜色，作为基本颜色，加入基本颜色库。

预置的基本颜色库，允许被修改。同时，也允许往基本颜色库中加入新的颜色。

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

## 主题

每一套主题都拥有独自的颜色库。主题颜色库的颜色可以来自于基本颜色库，或者其他任何颜色。基本颜色库的类名均适用于主题颜色库。

## 在开发环境修改颜色库与主题

## 在生产环境修改颜色库与主题
