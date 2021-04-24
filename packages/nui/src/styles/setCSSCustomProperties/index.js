import setColors from './setColors';
import setTheme from './setTheme';

/**
 * 设定 CSS 自定义属性
 * 接受一个 NUI option
 * @param {Object} options
 */
const setCSSCustomProperties = (options) => {
  // 设定主题
  setTheme(options.themes, options.defaultTheme, 'nui-style-theme');
  // 设定颜色库
  setColors(options.colors, 'nui-style-color');
  // 设定断点
};

setCSSCustomProperties.setColors = setColors;
setCSSCustomProperties.setTheme = setTheme;

export default setCSSCustomProperties;
