import ng from 'angular';
import CardsListComponent from './cardsList.component';
import CardsListService from './cardsList.service';

export default ng.module('app.components.cardsList', [])
  .component('cardsList', CardsListComponent)
  .service('CardsListService', CardsListService)
  .name;
