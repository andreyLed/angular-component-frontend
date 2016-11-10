import template from './todo.html';
import controller from './todo.controller';
import style from './todo.style.less';

export default {
  template,
  controller,
  style,
  bindings: {
    card: '<',
    deleteCard: '&',
  }
};
