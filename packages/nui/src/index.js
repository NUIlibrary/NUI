// import './styles/index.styl';
// import * as components from './components'
import Example from './components/Example';

const components = {
    Example
}

function install(Vue) {
    Object.keys(components).forEach((key) => {
        Vue.use(components[key]);
    });
}
export default install;
