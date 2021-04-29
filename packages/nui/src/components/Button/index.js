import Button from './Button';


export { Button };
export default Button;

Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};
