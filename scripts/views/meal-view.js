'use strict';
var app = app || {};

(function (module) {

  const mealView = {};

  mealView.initSearchFormPage = function () {
    app.showOnly('#search-view');

    $('#meal-view').on('submit', function (event) {

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

module.mealView = mealView;

})(app)


