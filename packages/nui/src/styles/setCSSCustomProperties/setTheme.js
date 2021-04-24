const setTheme = (opthions,selectedThemeName = 'light') => {
  // 创建 style 元素节点
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.className = 'nui-theme-style';
  let styleContent = ':root{';

  // 填充 style 文本内容
  const theme = opthions.themes[selectedThemeName];
  Object.keys(theme).forEach((colorName) => {
    const color = theme[colorName];
    styleContent += `--nui-color-${colorName}:${color};`;
  });

  // 挂载 style 元素节点
  styleContent += '}';
  styleElement.innerHTML = styleContent;
  document
    .getElementsByTagName('head')
    .item(0)
    .appendChild(styleElement);
};

export default setTheme;
