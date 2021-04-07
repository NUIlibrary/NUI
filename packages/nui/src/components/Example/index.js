import Example from './Example';

export { Example };
export default Example ;

Example.install = function (Vue) {
    Vue.component(Example.name, Example);
};