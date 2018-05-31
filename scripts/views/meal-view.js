'use strict';
var app = app || {};

(function (module) {

  const mealView = {};

  mealView.initMealPage = function (mealId) {
    app.showOnly('#meal-view');

    $('#meal-ingredients').empty();
    $('#meal-instructions').empty();

    $('#meal-ingredients').on('change',(e) => {
      $(this).parent().css('text-decoration', 'line-through');
    });

    $.get(`${app.ENVIRONMENT.apiUrl}/api/json/recipe/${mealId}`)
      .then(mealData => {
        $('#meal-name').text(mealData.name);
        $('#meal-image').attr('src', mealData.thumb);

        mealData.ingredients.forEach(ingredient => {
          $('#meal-ingredients').append(`<li><input id="strikeThrough" type="checkbox">${ingredient.measure} ${ingredient.name}</li>`)
        })

        mealData.instructions.forEach(instruction => {
          $('#meal-instructions').append(`<li class="ingredient"><input id="strikeThrough" type="checkbox">${instruction.body}</li>`);
        })
      })


    // console.log($('#meal-image').attr('id'));

    // $('#strikeThrough').change(function () {
    //   // console.log('changed')
    //   if (this.checked) {
    //     console.log($(this).wrap());

    //   }
    // });
  }
  module.mealView = mealView;
})(app)
