'use strict';
var app = app || {};

(function(module){

  let productionApiUrl = 'https://www.themealdb.com/api/json/v1/1/';
  let developmentApiUrl = 'https://www.themealdb.com/api/json/v1/1/';

  module.isProduction= /^(?!localhost|127)/.test(window.location.hostname);

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };

  module.showOnly = (selector) => {
    $('.tab-content').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    let template = Handlebars.compile($(`#${templateId}`).text());
    return template(data);
  };

})(app);