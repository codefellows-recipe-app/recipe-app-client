'use strict';
var app = app || {};

(function (module) {
  const searchView = {};

  searchView.initSearchPage = function () {

    $('#search-form').on('submit', function (event) {
      event.preventDefault();
      $('#meals').empty();


      
      let searchType = $('input[name=search-type]:checked').val();
      let searchText = $('#search-text').val();

      console.log(searchType, searchText);
      
      
      
      
      
      let queryString = `/api/json/recipes/${searchType}/${searchText}`
      app.Meal.fetchAll(queryString);
    })
  }

  searchView.renderAll = () => {
    app.Meal.all.forEach(meal => $('#meals').append(app.render('meal-template', meal)))
  }


  // $(document).ready(() => {
  //   $('#performMealSearchButton').click(() => {
  //     const selValue = $('input[name=searchDimension]:checked').val(); // radio button -  i.e. ingredients

  //     const inputValue = $('#searchByMealDimensionQualifier').val(); // text input field - i.e. butter (an ingredient, for example)

  //     if(selValue === 'ingredient') {
  //       app.Meal.searchByIngredients({ingredients: inputValue}, callback); // todod - figure out what the callback is
  //     } 
  //     else if(selValue === 'name') {
  //       app.Meal.searchByName({name: inputValue}, callback); // todod - figure out what the callback is
  //     } // etc, - maybe use a switch case
  //   });
  // })


  module.searchView = searchView;

})(app);