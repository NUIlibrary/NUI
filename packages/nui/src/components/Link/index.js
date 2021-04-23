import Link from './Link';
import './index.styl'

export { Link };
export default Link;

Link.install = function(Vue) {
  Vue.component(Link.name, Link);
};
