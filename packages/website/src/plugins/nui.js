import NUI from '../../../nui/src/index';
// import NUI from '../../../nui'

// 通过实例化类创建的方式，允许修改 NUI 的默认配置，如主题、颜色。
export default new NUI({
  defaultTheme: ['light', 'dark'],
  themes: {
    nenu: {
      "primary": "#003686",
      "success": "#004044",
      "warning": "#e1ac00",
      "danger": "#cf000e",
      "info": "#727171",
      "text-dark": "#2c3e50",
      "text-light": "#ffffff",
      "bg": "#ffffff",
      "fg": "#ffffff"
    },
  },
});

// 如果不需要额外的配置，可以直接返回类本身。
// export default new NUI();
