import ng from 'angular';
import TodoComponent from './todo.component';
import CardsListService from '../cardsList/cardsList.service';


export default ng.module('app.components.todo', [])
  .service('CardsListService', CardsListService)
  .component('todo', TodoComponent)
  .name;
