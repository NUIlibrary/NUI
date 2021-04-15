import Example from "./components/Example";
import { Row, Col } from "./components/Grid";
// import * as components from './components'

const components = {
  Example,
  Row,
  Col,
};

function install(Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
}

export default install;
