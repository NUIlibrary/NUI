import TinyColor from '@ctrl/tinycolor';
import generate from './generate';

const isDark = (color) => {
  const tinycolor = new TinyColor(color);
  return tinycolor.darken(15).isDark();
};

/**
 * 给定一个颜色集合
 * 返回该颜色集的 CSS 自定义变量的文本
 * @param {Object} colors
 * @returns String
 */
const returnCSSContentByColors = (colors) => {
  let CSSContent = '';
  colors &&
    Object.keys(colors).forEach((colorName) => {
      // 添加主色
      const color = colors[colorName];
      CSSContent += `--nui-color-${colorName}:${color};`;
      // 添加颜色族
      const colorCount = 5; // 向上、向下各延展几个颜色
      const patterns = generate(color, colorCount);
      for (let index = 0; index < colorCount; index++) {
        const lightenColor = patterns[colorCount - index - 1];
        const darkenColor = patterns[colorCount + index + 1];
        CSSContent += `--nui-color-${colorName}-lighten${index +
          1}:${lightenColor};`;
        CSSContent += `--nui-color-${colorName}-darken${index +
          1}:${darkenColor};`;
      }
    });
  return CSSContent;
};

/**
 * 给定一个颜色集合
 * 返回该颜色集的颜色的文本
 * @param {Object} colors
 * @returns String
 */
const returnCSSBgContentByColors = (colors) => {
  const returnClassContent = (colorName, color) => {
    return `.bg-${colorName}{background-color:var(--nui-color-${colorName});color:var(--nui-color-text-${
      isDark(color) ? 'light' : 'dark'
    })}.border-${colorName}{border: 1px solid var(--nui-color-${colorName})}.text-${colorName}{color:var(--nui-color-${colorName})}`;
  };
  let CSSContent = '';
  colors &&
    Object.keys(colors).forEach((colorName) => {
      // 添加主色
      const color = colors[colorName];
      CSSContent += returnClassContent(colorName, color);
      // 添加颜色族
      const colorCount = 5; // 向上、向下各延展几个颜色
      const patterns = generate(color, colorCount);
      for (let index = 0; index < colorCount; index++) {
        const lightenColor = patterns[colorCount - index - 1];
        const lightenColorName = `${colorName}-lighten${index + 1}`;
        const darkenColor = patterns[colorCount + index + 1];
        const darkenColorName = `${colorName}-darken${index + 1}`;
        CSSContent += returnClassContent(lightenColorName, lightenColor);
        CSSContent += returnClassContent(darkenColorName, darkenColor);
      }
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

export {
  appendStyleElement,
  returnCSSContentByColors,
  returnCSSBgContentByColors,
};
