/* global swal */
export default class CardsListController {
  constructor(CardsListService) {
    'ngInject';
    this.CardsListService = CardsListService;
  }

  $onInit() {
    this.init();
  }

  init() {
    this.CardsListService.list().then((cards) => {
      cards.forEach(card => this.CardsListService.isAllCompleted(card));
      this.cardsList = cards;
      this.addBtnShow = this.cardsList.length < 3;
    });
  }

  deleteCard(id) {
    swal(this.CardsListService.templates.swalWarning('card'), () => {
      this.CardsListService.remove(id).then(this.init.bind(this));
      swal({ title: 'Deleted!', text: 'Your card has been deleted.', timer: 700, showConfirmButton: false });
    });
  }

  addCard() {
    this.CardsListService.add().then(this.init.bind(this));
  }

}
