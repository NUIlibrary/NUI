import Card from './Card';
import CardTitle from './CardTitle';
import CardText from './CardText';
import CardAction from './CardAction';
import './index.styl';

export { Card, CardTitle, CardText, CardAction };
export default Card;

Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};

CardTitle.install = function(Vue) {
  Vue.component(CardTitle.name, CardTitle);
};

CardText.install = function(Vue) {
  Vue.component(CardText.name, CardText);
};

CardAction.install = function(Vue) {
  Vue.component(CardAction.name, CardAction);
};
