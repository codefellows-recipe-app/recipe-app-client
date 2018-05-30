'use strict';

var app = app || {};

(function (module) {

  function Meal (rawMealObj) {
    rawMealObj = rawMealObj.meals[0];

    this.id = rawMealObj.idMeal;
    this.name = rawMealObj.strMeal;
    this.category = rawMealObj.strCategory;
    this.area = rawMealObj.strArea;
    this.instructions = rawMealObj.strInstructions;
    this.thumb = rawMealObj.thumb;
    this.tags = rawMealObj.tags;
    this.youTube = rawMealObj.strYoutube;
    this.ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (rawMealObj['strIngredient'+i] !== '' && rawMealObj['strIngredient'+i] !== null) {
        this.ingredients.push({name: rawMealObj['strIngredient'+i], measure: rawMealObj['strMeasure'+i]});
      }
    }

    this.parseInstructions();
  }

  Meal.prototype.parseInstructions = function () {
    this.instructions = this.instructions
      .replace(/\n/g,'')
      .replace(/\r/g,'')
      .split('.')
      .filter(instruction => instruction !== '')
      .map(instruction => instruction[0] === ' ' ? instruction.substring(1) : instruction)
      .map((instruction, i) => {
        return {
          sequence: i+1,
          category: 'cook',
          body: instruction,
          duration: 0}
      });
  }

  Meal.all = [];

  Meal.fetchAll = function (callback) {
    app.ENVIRONMENT.apiUrl = `https://www.themealdb.com/api/json/v1/1`;

    $.get(`${app.ENVIRONMENT.apiUrl}/filter.php?i=chicken%20breast`)
      .then(results => {
        Meal.all = results.meals;
        console.log(Meal.all);
        if (callback) callback();
      })
      .catch(console.error);
  }









  module.Meal = Meal;

})(app)
