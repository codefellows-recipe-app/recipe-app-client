'use strict';
var app = app || {};

(function (module) {
  const searchView = {};

  searchView.initSearchPage = function () {
    app.Meal.fetchAll(app.searchView.renderAll);
  }

  searchView.renderAll = () => {
    app.Meal.all.forEach(meal => $('#meals').append(app.render('meal-template', meal)))
  }

  module.searchView = searchView;

})(app);