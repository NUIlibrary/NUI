import { appendStyleElement, returnCSSContentByColors } from './utils';
import setColors from './setColors';

const setTheme = (themes, defaultTheme, id) => {
  if (typeof defaultTheme === 'object' && defaultTheme.length === 2) {
    const lightTheme = themes[defaultTheme[0]];
    const darkTheme = themes[defaultTheme[1]];
    // 使用媒体查询主题偏好
    const styleContent = `@media (prefers-color-scheme: light){:root{${returnCSSContentByColors(
      lightTheme
    )}}}@media (prefers-color-scheme: dark){:root{${returnCSSContentByColors(
      darkTheme
    )}}}`;
    appendStyleElement(styleContent, id || null);
  } else {
    // 仅使用默认主题，不使用媒体查询主题偏爱
    setColors(themes[defaultTheme], id || null);
  }
};

export default setTheme;
