/**
 * 该文件用于
 * 1. 注册自定义的全局组件
 * 2. 注册 md demo 自动生成的全局组件
 */
import NuiDemo from '@/components/NuiDemo';

// 符合首字母大写的驼峰命名风格
const capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// webpack 的 api, 用于读取指定目录
const requireComponent = require.context(
  '../docComponents',
  false,
  /\.vue$/
  //找到components文件夹下以.vue命名的文件
);

const globalComponents = {
  install(Vue) {
    // 注册自定义组件
    Vue.component('NuiDemo', NuiDemo);
    // 注册 md demo 中出现的组件
    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName);
      const componentName = capitalizeFirstLetter(
        fileName.replace('./', '').replace('.vue', '')
        //因为得到的filename格式是: './dataList.vue', 所以这里我们去掉头和尾，只保留真正的文件名
      );
      Vue.component(componentName, componentConfig.default || componentConfig);
    });
  },
};
export default globalComponents;
