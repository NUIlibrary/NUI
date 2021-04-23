import Row from './Row';
import Col from './Col';
import Container from './Container';

export { Row, Col, Container };
export default Row;

Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};

Col.install = function(Vue) {
  Vue.component(Col.name, Col);
};

Container.install = function(Vue) {
  Vue.component(Container.name, Container);
};
