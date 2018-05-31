'use strict';
var app = app || {};
var counter = 1, counter2 = 1;

(function (module) {

  const mealView = {};

  mealView.initMealPage = function (mealId) {
    app.showOnly('#meal-view');

    $('#meal-ingredients').empty();
    $('#meal-instructions').empty();

    // $('#meal-ingredients').on('change',(e) => {
    //   $(this).parent().css('text-decoration', 'line-through');
    // });
    
    $.get(`${app.ENVIRONMENT.apiUrl}/api/json/recipe/${mealId}`)
      .then(mealData => {
        $('#meal-name').text(mealData.name);
        $('#meal-image').attr('src', mealData.thumb);

        mealData.ingredients.forEach(ingredient => {
          $('#meal-ingredients').append(`<li><input type="checkbox" class="ingredient"/><label>${ingredient.measure} ${ingredient.name}</label></li>`)
        })

        mealData.instructions.forEach(instruction => {
          $('#meal-instructions').append(`<li><input type="checkbox" class="ingredient"/><label>${instruction.body}</label></li>`);
        })
      })
  }
  module.mealView = mealView;
})(app)
