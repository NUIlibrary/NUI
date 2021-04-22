import Button from './Button';
import './index.styl';

export { Button };
export default Button;

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};
