define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/gumgatagdefinition/services/module');
  require('app/modules/gumgatagdefinition/controllers/module');

  return require('angular')
    .module('app.gumgatagdefinition', [
      'ui.router',
      'app.gumgatagdefinition.controllers',
      'app.gumgatagdefinition.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('gumgatagdefinition.list', {
          url: '/list',
          templateUrl: 'app/modules/gumgatagdefinition/views/list.html',
          controller: 'GumgaTagDefinitionListController'
        })
        .state('gumgatagdefinition.insert', {
          url: '/insert',
          templateUrl: 'app/modules/gumgatagdefinition/views/form.html',
          controller: 'GumgaTagDefinitionFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/gumgatagdefinition/new');
            }]
          }
        })
        .state('gumgatagdefinition.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/gumgatagdefinition/views/form.html',
          controller: 'GumgaTagDefinitionFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/gumgatagdefinition/' + $stateParams.id);
            }]
          }
        });
    })

});