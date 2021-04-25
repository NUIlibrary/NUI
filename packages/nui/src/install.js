import components from './components';
import mergeObject from './utils/mergeObject.js';

function install(app) {
  Object.keys(components).forEach((key) => {
    app.use(components[key]);
  });
  app.config.globalProperties.$nui = {
    setOptions: (options) => {
      this.options = mergeObject(this.options, options);
      this.setCSSCustomProperties(this.options);
    },
    getOptions: () => this.options,
  };
}

export default install;
