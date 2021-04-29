# Style 样式

## 内边距、外边距

辅助类应用到元素的 **margin** 或 **padding** 范围是从 0 到 16. 这些类可以通过 `{property}{direction}-{size}` 格式使用。

**property** 应用间距类型:

+ `m` - 应用 `margin`
+ `p` - 应用 `padding`

**direction** 指定了该属性所应用的侧边:

- `t` - 应用 `margin-top` 和 `padding-top` 的间距
- `b` - 应用 `margin-bottom` 和 `padding-bottom` 的间距
- `l` - 应用 `margin-left` 和 `padding-left` 的间距
- `t` - 应用 `margin-right` 和 `padding-right` 的间距
- `x` - 应用 `*-left` 和 `*-right` 的间距
- `y` - 应用 `*-top` 和 `*-bottom` 的间距
- `a` - 在所有方向应用该间距

**size** 以 4px 为步长，取值为 [0,20].

