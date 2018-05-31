/* global errorCallback */
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

  Meal.all = [];

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



  Meal.prototype.create = () => {
    // BLOCKED: waiting on POST /meals route
    $.post(`${app.ENVIRONMENT.apiUrl}/meals`)
      .then(results => {
        console.log(results);
        app.mealView.initMealPage(results);
      })
      .catch(console.error)
  }


  Meal.fetchAll = function (queryString) {
    console.log(`${app.ENVIRONMENT.apiUrl}${queryString}`);
    $.get(`${app.ENVIRONMENT.apiUrl}${queryString}`)
      .then(results => {
        console.log('results ===>', results);
        results === null ? Meal.all = [] : Meal.all = results;
        Meal.all = results;
        app.searchView.renderAll();
      })
      .catch(console.error);
  }

  // 'http://localhost:3000/api/json/recipes/name/chicken'

  Meal.fetchOne = (meal_id) => {
    $.get(`${app.ENVIRONMENT.apiUrl}/lookup.php?i=${meal_id}`)
      .then(results => {
        console.log('results', results);
        let newMeal = new Meal (results);
        console.log('new meal', newMeal);
        newMeal.create();
      })
      .catch(console.error);
  }

  //sending requests to server
  Meal.fetchIngredients = (ctx, callback) =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/json/recipes/ingredients)${ctx.params.idMeal}`)
      .then(results => {
        console.log(results);
        if (callback) callback();
      })

  Meal.fetchName = (ctx, callback) =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/json/recipes/name/${ctx.params.meal_id}`)
      .then(results => ctx.meal = results[0])
      .then(callback)
      .catch(errorCallback);

  Meal.fetchCategories = (ctx, callback) =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/json/recipes/categories/${ctx.params.meal_id}`)
      .then(results => ctx.meal = results[0])
      .then(callback)
      .catch(errorCallback);

  Meal.fetchArea = (ctx, callback) =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/json/recipes/Area/${ctx.params.meal_id}`)
      .then(results => ctx.meal = results[0])
      .then(callback)
      .catch(errorCallback);

  //These are searching in Api URL to bring back pages.
  Meal.searchByIngredients = (ingredients, callback) => {
    $.get(`localhost:3000/api/recipes/ingredients/`, ingredients)
      .then(Meal.loadAll)
      .then(callback)
      .catch(errorCallback)
  }

  Meal.searchByName = (name, callback) => {
    $.get(`localhost:3000/api/recipes/name/`, name)
      .then(Meal.loadAll)
      .then(callback)
      .then(errorCallback)
  }

  Meal.searchByCategories = (category, callback) => {
    $.get(`localhost:3000/api/recipes/category/`, category)
      .then(Meal.loadAll)
      .then(callback)
      .then(errorCallback)
  }

  Meal.searchByArea = (area, callback) => {
    $.get(`localhost:3000/api/recipes/area/`, area)
      .then(Meal.loadAll)
      .then(callback)
      .then(errorCallback)
  }

  Meal.destroy = id =>
    $.ajax({
      url: `${app.ENVIRONMENT.apiUrl}/api/json/recipes/${id}`,
      method: 'DELETE',
    })

  module.Meal = Meal;

})(app)
