import template from './todoItem.html';
import style from './todoItem.style.less';

export default {
  template,
  style,
  bindings: {
    item: '<',
    removeItem: '&',
    editItem: '&',
    isComplete: '&'
  }
};
