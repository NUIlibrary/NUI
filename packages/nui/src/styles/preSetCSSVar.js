export default {
  // 预设颜色库
  color: {
    // H 以 30 为步长
    // S 为 76
    // L 为 62
    red: '#FF3D3D',
    orange: '#FF9E3D',
    yellow: '#FFFF3D',
    chartreuse: '#9FFF3D',
    green: '#3EFF3D',
    spring: '#3DFF9D',
    cyan: '#3DFEFF',
    sky: '#3D9DFF',
    blue: '#3E3DFF',
    purple: '#9F3DFF',
    magenta: '#FF3DFF',
    pink: '#FF3D9E',
    // L 以 0.1 为步长
    // 从黑到白等分十份
    // 黑白取其中第 3、8
    white: '#cccccc',
    black: '#333333'
  },
  // 预设主题
  theme: {
    dark: {
      primary: '#111111', // 更改预设主题中的颜色
      newColor: '#222222', // 新增预设主题中的颜色
    },
    newTheme: {
      primary: '#222222',
    },
  },
  // 预设自定切换主题
  followSystemTheme: true,
  // 预设断点
  breakpoint: {
    xs: 767,
    sm: 768,
    md: 992,
    ls: 1200,
    xl: 1920,
  },
};
