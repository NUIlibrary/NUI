import Row from './Row';
import Col from './Col';

export { Row, Col };
export default Row;

Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};
