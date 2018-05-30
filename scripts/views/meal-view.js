'use strict';
var app = app || {};

(function (module) {
  const mealView = {};

  // BLOCKED: waiting on POST /meals route, so that we know waht data structure we have to work with and render on the meal page
  mealView.initMealPage = function (mealData) {
    console.log(mealData);
  }

  module.mealView = mealView;

})(app);