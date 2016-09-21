define(function(require) {
  'use strict';
  require('angular');
  require('angular-ui-router');
  require('ngImgCrop');
  require('gumga-components');
  require('app/modules/login/module');
  require('app/apiLocations');
  require('app/modules/gumgatagdefinition/module');
  require('app/modules/gumgacustomfield/module');
  //FIMREQUIRE
  angular.module('app.core', [
    'ui.router'
    ,'gumga.core'
    ,'app.login'
    ,'app.gumgatagdefinition'
    ,'app.gumgacustomfield'
  //FIMINJECTIONS
    ])
    .config(function($stateProvider, $urlRouterProvider, $httpProvider, $injector, GumgaAlertProvider) {

    var template = [
        '<gumga-nav></gumga-nav>',
        '<gumga-menu menu-url="gumga-menu.json" keys-url="keys.json" image="./resources/images/gumga.png"></gumga-menu>',
        'oi<div class="gumga-container">',
        '<gumga-multi-entity-search data="multi.search"></gumga-multi-entity-search>',
        '</div>'
      ];

      $urlRouterProvider.otherwise('login/log');
      $stateProvider
        .state('login', {
          abstract: true,
          url: '/login',
          data: {
            id: 0
          },
          template: '<div ui-view style="height: 100%;"></div>'
        })
        .state('welcome', {
          url: '/welcome',
          data: {
            id: 0
          },
          templateUrl: 'app/modules/welcome/views/welcome.html'
        })
        .state('multientity', {
          url: '/multientity/:search',
          template: template.join('\n'),
          controller: 'MultiEntityController',
          controllerAs: 'multi',
          data: {
            id: 0
          },
          resolve: {
            SearchPromise: ['$stateParams', '$http', function($stateParams, $http) {
              var url = APILocations.apiLocation + '/public/multisearch/search/';
              return $http.get(url + $stateParams.search);
            }]
          }
        })
        .state('gumgatagdefinition', {
             url: '/gumgatagdefinition',
             templateUrl: 'app/modules/gumgatagdefinition/views/base.html'
        })
        .state('gumgacustomfield', {
             url: '/gumgacustomfield',
             templateUrl: 'app/modules/gumgacustomfield/views/base.html'
        })
        //FIMROUTE


      $httpProvider.interceptors.push(function($q, $injector, $timeout) {

        return {
          'request': function(config) {
            config.headers['gumgaToken'] = window.sessionStorage.getItem('token') || 0;
            return config;
          },
          'responseError': function(rejection) {
            var $state = $injector.get('$state');
            GumgaAlertProvider.createDangerMessage(rejection.data.response, rejection.statusText);
            rejection.status == 403 && ($state.go('login.log'));
            return $q.reject(rejection);
          }
        };
      })
    })
});
