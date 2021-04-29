import AppBar from './AppBar';
import AppMain from './AppMain';

export { AppBar, AppMain };

AppBar.install = function(Vue) {
  Vue.component(AppBar.name, AppBar);
};

AppMain.install = function(Vue) {
  Vue.component(AppMain.name, AppMain);
};
