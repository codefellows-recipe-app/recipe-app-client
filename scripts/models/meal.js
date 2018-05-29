'use strict';

var app = app || {};

(function (module) {

  function Meal(rawMealObj) {
    rawMealObj = rawMealObj.meals[0];

    this.id = rawMealObj.idMeal;
    this.category = rawMealObj.strCategory;
    this.area = rawMealObj.strArea;
    this.instructions = rawMealObj.strInstructions.split('.');

    this.thumb = rawMealObj.thumb;
    this.tags = rawMealObj.tags;
    this.youTube = rawMealObj.strYoutube;

    this.ingredients = [];

    for (let i = 1; i <= 20; i++) {
      let ingredientKeyName = 'strIngredient' + i;
      let measureKeyName = 'strMeasure' + i;
      // console.log(rawMealObj[measureKeyName], rawMealObj[ingredientKeyName]);

      if (rawMealObj[ingredientKeyName] !== '' && rawMealObj[ingredientKeyName] !== null) {
        this.ingredients.push({ name: rawMealObj[ingredientKeyName], measure: rawMealObj[measureKeyName] });
      }
    }
  }
  Meal.all = [];



  Meal.fetchOne = (ctx, callback) =>
    $.get(`${app.ENVIRONMENT.apiUrl}/api/json/recipes/ingredients)${ctx.params.idMeal}`)

  Meal.searchByIngredients = (ingredients, callback) => {
    $.get(`localhost:3000/api/recipes/ingredients/`, ingredients)
      .then(Meal.loadAll)
      .then(callback)
      .then(errorCallback)
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

  Meal.find = (meal, callback) =>













    module.Meal = Meal;

})(app)

let myMeal = new app.Meal(
  { "meals": [{ "idMeal": "52771", "strMeal": "Spicy Arrabiata Penne", "strCategory": "Vegetarian", "strArea": "Italian", "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.", "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/ustsqw1468250014.jpg", "strTags": "Pasta", "strYoutube": "https:\/\/www.youtube.com\/watch?v=1IszT_guI08", "strIngredient1": "penne rigate", "strIngredient2": "olive oil", "strIngredient3": "garlic", "strIngredient4": "chopped tomatoes", "strIngredient5": "red chile flakes", "strIngredient6": "italian seasoning", "strIngredient7": "basil", "strIngredient8": "Parmigiano-Reggiano", "strIngredient9": "", "strIngredient10": "", "strIngredient11": "", "strIngredient12": "", "strIngredient13": "", "strIngredient14": "", "strIngredient15": "", "strIngredient16": null, "strIngredient17": null, "strIngredient18": null, "strIngredient19": null, "strIngredient20": null, "strMeasure1": "1 pound", "strMeasure2": "1\/4 cup", "strMeasure3": "3 cloves", "strMeasure4": "1 tin ", "strMeasure5": "1\/2 teaspoon", "strMeasure6": "1\/2 teaspoon", "strMeasure7": "6 leaves", "strMeasure8": "spinkling", "strMeasure9": "", "strMeasure10": "", "strMeasure11": "", "strMeasure12": "", "strMeasure13": "", "strMeasure14": "", "strMeasure15": "", "strMeasure16": null, "strMeasure17": null, "strMeasure18": null, "strMeasure19": null, "strMeasure20": null, "strSource": null, "dateModified": null }] }
) 