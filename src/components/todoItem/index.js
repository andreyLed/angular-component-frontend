import ng from 'angular';
import TodoItemComponent from './todoItem.component';

export default ng.module('app.components.todoItem', [])
  .component('todoItem', TodoItemComponent)
  .name;
