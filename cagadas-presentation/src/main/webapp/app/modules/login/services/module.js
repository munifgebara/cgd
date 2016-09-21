
/**
 * Created by igorsantana on 27/03/15.
 */
define(function (require) {
    'use strict';
    var angular = require('angular');
    return angular.module('app.login.services', [])
        .service('LoginService', require('app/modules/login/services/LoginService'));
});