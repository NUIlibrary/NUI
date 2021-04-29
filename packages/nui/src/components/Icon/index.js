import Icon from './Icon';

import './iconfont.js'

export { Icon };
export default Icon;

Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};
