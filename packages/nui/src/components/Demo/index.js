import Demo from './Demo';

export { Demo };
export default Demo ;

Demo.install = function (Vue) {
    Vue.component(Demo.name, Demo);
};