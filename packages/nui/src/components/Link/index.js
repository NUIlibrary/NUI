import Link from './Link';


export { Link };
export default Link;

Link.install = function(Vue) {
  Vue.component(Link.name, Link);
};
