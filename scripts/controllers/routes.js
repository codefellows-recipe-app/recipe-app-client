'use strict';

page('/', ctx => {
  console.log('page js / route fired')
  // app.searchView.initSearchPage()
})

page('/search', ctx => {
  console.log('page js /search route fired')
})

page('/meal', ctx => {
  console.log('page js /cook route fired')
})

page('/meal/:meal_id', ctx => {
  console.log('page js /cook route fired', ctx);
})

page('/about', ctx => {
  console.log('page js /about route fired')
})














// page('*', ctx => app.showOnly('#search-view'));

page ();