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

























    // console.log($('#meal-image').attr('id'));

    // $('#strikeThrough').change(function () {
    //   // console.log('changed')
    //   if (this.checked) {
    //     console.log($(this).wrap());

    //   }
    // });
//   }
//   module.mealView = mealView;

//   $(document).ready(function() {
//     $("input[type='checkbox']").keypress(function (){
//       console.log("printed:"  counter);
//     });
  // });



// $(function () {
//   $("#strikeThrough1").change(function(){
//     alert("clicked");
// });
// })

// console.log("printed:"  counter);
// for (var i = 0; i < counter; i) {
//   var appendID = '#strikeThrough'  counter;
//   //var append2 = 'c'appendID;
//   $(appendID).change(function () {
//     console.log("clicked");
//   });
// }
