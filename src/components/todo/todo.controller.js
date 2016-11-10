/* global swal */
export default class TodoController {
  constructor(CardsListService) {
    'ngInject';
    this.CardsListService = CardsListService;
  }

  init() {
    this.card.allComplete = this.card.todos.every(elem => elem.isComplete);
  }

  editHeader(color) {
    this.card.background = color;
    this.CardsListService.save(this.card).then(this.init.bind(this));
  }

  addItem() {
    if (this.CardsListService.isInputEmpty(this.todoText)) {
      return;
    }
    this.card.todos.push(this.CardsListService.templates.item(this.todoText));
    this.todoText = '';
    this.CardsListService.save(this.card).then(this.init.bind(this));
  }

  removeItem(id) {
    swal(this.CardsListService.templates.swalWarning('todoItem'), () => {
      this.card.todos.splice(id, 1);
      this.CardsListService.save(this.card).then(this.init.bind(this));
      swal({ title: 'Deleted!', text: 'Your item has been deleted.', timer: 700, showConfirmButton: false });
    });
  }

  editItem(todo) {
    if (this.CardsListService.isInputEmpty(todo.title)) {
      return;
    }
    delete todo.$edit;
    this.CardsListService.save(this.card);
  }

  isComplete(todo) {
    todo.isComplete = !todo.isComplete;
    this.CardsListService.save(this.card).then(this.init.bind(this));
  }
}
