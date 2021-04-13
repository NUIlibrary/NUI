import Example from "./components/Example";
import Demo from "./components/Demo";
import { Row, Col } from "./components/Grid";
// import * as components from './components'

const components = {
  Example,
  Demo,
  Row,
  Col,
};

function install(Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
}

export default install;
