/* global swal */
/* global sweetAlert */

export default class CardsListService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.URL = 'http://localhost:3000';
    this.templates = {
      swalWarning(elem) {
        return {
          title: 'Are you sure?',
          text: `You will not be able to recover this ${elem}!`,
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Yes, delete it!',
          closeOnConfirm: false
        };
      },
      card: {
        title: 'Todo title',
        todos: []
      },
      item(title) {
        return {
          title,
          isComplete: false
        };
      },
      color: ['#f44336', '#FFEB3B', '#3F51B5', '#9E9E9E', '#795548', '#673AB7', '#B39DDB']
    };
  }

  list() {
    return this.$http.get(`${this.URL}/cards`).then(result => result.data);
  }

  detail(id) {
    return this.$http.get(`${this.URL}/cards/${id}`).then(result => result.data);
  }

  add() {
    return this.$http.post(`${this.URL}/cards`, this.templates.card).then(result => result.data);
  }

  update(data) {
    return this.$http.put(`${this.URL}/cards/${data.id}`, data).then(result => result.data);
  }

  remove(id) {
    return this.$http.delete(`${this.URL}/cards/${id}`);
  }

  save(data) {
    if (data.id) {
      return this.update(data);
    }
    return this.add();
  }

  isAllCompleted(card) {
    card.allComplete = card.todos.every(elem => elem.isComplete) && card.todos.length > 0;
  }

  isInputEmpty(str) {
    if (!str) {
      sweetAlert('Oops...', 'Please, enter some text!', 'error');
      return true;
    }
    return false;
  }
}
