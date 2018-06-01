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
      let queryString = `/api/json/recipes/${searchType}/${searchText}`

      app.Meal.fetchAll(queryString);
    })
  }

  searchView.renderAll = () => {
    $('#meals').empty();
    app.Meal.all.forEach(meal => $('#meals').append(app.render('meal-template', meal)))
  }

  module.searchView = searchView;

  // animated gif
  // var image = document.getElementById('likes'),
  //   button = document.getElementById('pause');

  // if (image.classList && image && button) {
  //   button.onclick = function () {
  //     if (this.value === 'pause') {
  //       image.classList.add('pause');
  //       this.value = 'play';
  //     } else {
  //       image.classList.remove('pause');
  //       this.value = 'pause';
  //     }
  //   };
  // }

})(app);