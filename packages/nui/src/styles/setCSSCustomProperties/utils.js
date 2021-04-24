const returnCSSContentByColors = (colors) => {
  let CSSContent = '';
  colors &&
    Object.keys(colors).forEach((colorName) => {
      const color = colors[colorName];
      CSSContent += `--nui-color-${colorName}:${color};`;
    });
  return CSSContent;
};

/**
 * 向页面中的 head 节点中添加 style 节点
 * 输入为 style 文本内容与 id
 * id 允许为空
 * @param {String} content
 * @param {String} id
 */
const appendStyleElement = (content, id) => {
  // 清空此前可能存在的 style theme 元素节点
  if (id) {
    const oldStyleElement = document.getElementById(id);
    oldStyleElement && oldStyleElement.parentNode.removeChild(oldStyleElement);
  }
  // 创建 style 元素并设定属性
  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  id && (styleElement.id = id);
  // 填充 style 元素内容
  styleElement.innerHTML = content;
  // 挂载元素
  document
    .getElementsByTagName('head')
    .item(0)
    .appendChild(styleElement);
};

export { appendStyleElement, returnCSSContentByColors };
