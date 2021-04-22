import Button from './components/Button';
import { Card, CardTitle, CardText, CardAction } from './components/Card';
import Example from './components/Example';
import { Row, Col } from './components/Grid';
// import * as components from './components'

const components = {
  Button,
  Card,
  Example,
  Row,
  Col,
  CardTitle,
  CardText,
  CardAction,
};

function install(Vue) {
  Object.keys(components).forEach((key) => {
    Vue.use(components[key]);
  });
}

export default install;
