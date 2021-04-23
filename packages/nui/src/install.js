import Button from './components/Button';
import { Card, CardTitle, CardText, CardAction } from './components/Card';
import Example from './components/Example';
import Link from './components/Link';
import Icon from './components/Icon';
import { Row, Col, Container } from './components/Grid';
// import * as components from './components'

const components = {
  Button,
  Card,
  Example,
  Icon,
  Link,
  Row,
  Col,
  Container,
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
