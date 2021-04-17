import NUI from '../../../nui/src/index'
// import NUI from '../../../nui'

const options = {
  color: {
    red: '#111111', // 更改预设颜色
    newRed: '#222222', // 新增颜色
  },
  theme: {
    dark: {
      primary: '#111111', // 更改预设主题中的颜色
      newColor: '#222222', // 新增预设主题中的颜色
    },
    //新增主题
    newTheme: {
      primary: '#222222',
    },
  },
  followSystemTheme: true,
  breakpoint:{
    xs: 800, // 更改预设断点
  }
}

// 通过实例化类创建的方式，允许修改 NUI 的默认配置，如主题、颜色。
export default new NUI(options)

// 如果不需要额外的配置，可以直接返回类本身。
// export default NUI;