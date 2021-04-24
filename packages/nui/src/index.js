import './styles/index.styl';
import install from './install';
import mergeObject from './utils/mergeObject.js';
import setCSSCustomProperties from './styles/setCSSCustomProperties/index';

const preOptions = require('./styles/define.json');
class NUI {
  constructor(customOptions = {}) {
    // 合并预设配置与自定义配置
    this.options = mergeObject(preOptions, customOptions);
    // 选择、设定主题
    setCSSCustomProperties(this.options);
  }
  // 直接调用类的方式，将通过该静态方法挂载
  static install = install;
  // 通过实例化类的方式，将通过该方法挂载
  install = install;
  setCSSCustomProperties = setCSSCustomProperties;
}

export default NUI;
