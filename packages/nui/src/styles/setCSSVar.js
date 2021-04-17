import preOption from './preSetCSSVar';
import { colorFamilyGenerator } from '../utils/color';

export default (customOptions) => {
  let options =  Object.assign({}, preOption); // 对预设进行深拷贝
  if (customOptions && Object.keys(customOptions).length) {
    // 如果收到自定配置并且自定配置不为空，则合并配置
    // 如果不存在自定配置，则继续使用预设配置
    if(customOptions.color){
      Object.assign(options.color,customOptions.color);
    }
  }
  // const { color, theme, followSystemTheme, breakpoint } = options;
  const { color, breakpoint } = options;
  const rootElement = document.documentElement;
  const rootElementStyle = rootElement.style;
  // 设定颜色库变量
  for (const colorName in color) {
    if (Object.hasOwnProperty.call(color, colorName)) {
      const colorValue = color[colorName];
      rootElementStyle.setProperty(`--nui-color-${colorName}`, colorValue);
      const colorFamily = colorFamilyGenerator(colorValue);
      for (let i = 1; i < 6; i++) {
        rootElementStyle.setProperty(
          `--nui-color-${colorName}-${i}`,
          colorFamily[i - 1]
        );
      }
    }
  }
  // 设定断点
  for (const breakpointName in breakpoint) {
    if (Object.hasOwnProperty.call(breakpoint, breakpointName)) {
      const breakpointValue = breakpoint[breakpointName];
      rootElementStyle.setProperty(
        `--nui-breakpoint-${breakpointName}`,
        `${breakpointValue}px`
      );
    }
  }
};
