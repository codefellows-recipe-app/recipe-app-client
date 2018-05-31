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

        // console.log(mealData.ingredient);

        mealData.ingredients.forEach(ingredient => {
          $('#meal-ingredients').append(`<li id="cstrikeThrough${counter}"><input id="strikeThrough${counter}" type="checkbox">${ingredient.measure} ${ingredient.name}</li>`);
          counter++;
        })

        mealData.instructions.forEach(instruction => {
          $('#meal-instructions').append(`<li id="rstrikeThrough${counter} class="ingredient"><input id="strikeThrough${counter2}" type="checkbox">${instruction.body}</li>`);
          counter2++;
        })
      });

   


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
//       console.log("printed:" + counter);
//     });
//   });

// })(app);

// $(function () {
//   $("#strikeThrough1").change(function(){
//     alert("clicked");
// });
// })

// console.log("printed:" + counter);
// for (var i = 0; i < counter; i++) {
//   var appendID = '#strikeThrough' + counter;
//   //var append2 = 'c'+appendID;
//   $(appendID).change(function () {
//     console.log("clicked");
//   });
//}




