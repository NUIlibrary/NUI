import components from './components';

function install(app) {
  Object.keys(components).forEach((key) => {
    app.use(components[key]);
  });
  app.config.globalProperties.$nui = {
    useTheme:(themeName) => {
      this.options.defaultTheme = themeName;
      this.setCSSCustomProperties.setColors(this.options.themes[themeName])
    }
  };
}

export default install;
