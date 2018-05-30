'use strict';
var app = app || {};

(function (module) {


  mealView.initSearchFormPage = function () {
    app.showOnly('.search-view');

    $('#add the tag here').on('submit', function (event) {

      event.preventDefault();


      let meal = {
        name: event.target.name.value || '',
        ingredients: event.target.ingredients.value || '',
        area: event.target.area.value || '',
        categories: event.target.categories.value || '',
      };

      module.Book.find(book, bookView.initSearchResultsPage);


      event.target.name.value = '';
      event.target.ingredients.value = '';
      event.target.area.value = '';
      event.target.categories.value = '';
    })
  }

})(app)