'use strict';

page('/', ctx => {
  console.log('page js / route fired');
  app.searchView.initSearchPage();
  app.showOnly('#search-view');
})

page('/search', ctx => {
  console.log('page js /search route fired');
  app.searchView.initSearchPage();
  app.showOnly('#search-view');
})

page('/meal', ctx => {
  console.log('page js /cook route fired');
  app.showOnly('#meal-view');
  app.mealView.initMealPage(52850);
})

page('/about', ctx => {
  console.log('page js /about route fired');
  app.showOnly('#about-view');
})

page('/meal/:meal_id', ctx => {
  console.log('page js /cook route fired', ctx.params.meal_id);
  app.mealView.initMealPage(ctx.params.meal_id);
})

page('*', ctx => app.showOnly('#search-view'));

page ();