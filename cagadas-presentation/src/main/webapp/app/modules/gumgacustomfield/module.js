define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/gumgacustomfield/services/module');
  require('app/modules/gumgacustomfield/controllers/module');

  return require('angular')
    .module('app.gumgacustomfield', [
      'ui.router',
      'app.gumgacustomfield.controllers',
      'app.gumgacustomfield.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('gumgacustomfield.list', {
          url: '/list',
          templateUrl: 'app/modules/gumgacustomfield/views/list.html',
          controller: 'GumgaCustomFieldListController'
        })
        .state('gumgacustomfield.insert', {
          url: '/insert',
          templateUrl: 'app/modules/gumgacustomfield/views/form.html',
          controller: 'GumgaCustomFieldFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/gumgacustomfield/new');
            }]
          }
        })
        .state('gumgacustomfield.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/gumgacustomfield/views/form.html',
          controller: 'GumgaCustomFieldFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/gumgacustomfield/' + $stateParams.id);
            }]
          }
        });
    })

});