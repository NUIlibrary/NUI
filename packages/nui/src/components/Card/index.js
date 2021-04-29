import Card from './Card';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardText from './CardText';
import CardAction from './CardAction';


export { Card, CardTitle, CardSubtitle, CardText, CardAction };
export default Card;

Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};

CardTitle.install = function(Vue) {
  Vue.component(CardTitle.name, CardTitle);
};

CardSubtitle.install = function(Vue) {
  Vue.component(CardSubtitle.name, CardSubtitle);
};

CardText.install = function(Vue) {
  Vue.component(CardText.name, CardText);
};

CardAction.install = function(Vue) {
  Vue.component(CardAction.name, CardAction);
};
