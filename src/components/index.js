import ng from 'angular';
import cardsList from './cardsList';
import todo from './todo';
import todoItem from './todoItem';
import cardsListService from './cardsList/cardsList.service';

export default ng.module('app.components', [cardsList, todo, todoItem])
  .service('cardsListService', cardsListService)
  .name;
