import Example from './components/Example';
// import * as components from './components'

const components = {
    Example,
}

function install(Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
}

export default install;