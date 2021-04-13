# Dowload and Use 下载与使用

## 下载

```shell
npm install @nuilibrary/nui --save
```

## 安装

::: badge-tip 选择哪种安装方式

如果需要自定义配置（如颜色、主题等），请使用实例化安装，实例化类时传入配置参数。

如果仅需要默认配置，实例化安装、类安装均可。

使用 @vue/plugins 默认使用实例化安装方式。

:::

### 类安装

在项目的`main.js`文件中

```javascript
import NUI from "@nuilibrary/nui";

createApp(App)
  .use(NUI)
  .mount("#app");
```

### 实例化安装

在项目的`main.js`文件中

```javascript
import NUI from "@nuilibrary/nui";

const nui = new NUI({
  // Config...
});

createApp(App)
  .use(nui)
  .mount("#app");
```

你也可以在一个单独的 `nui.js` 文件中实例化 NUI 并导出，在 `main.js` 中引入，以保持 `main.js` 的简洁。

```javascript
// plugins/nui.js
import NUI from "nui";

export default new NUI({
  // Config...
});

// main.js
import nui from "./plugins/nui";

createApp(App)
  .use(nui)
  .mount("#app");
```

## 使用

现在，你可以在该项目的任意页面/组件中使用需要的组件了。
