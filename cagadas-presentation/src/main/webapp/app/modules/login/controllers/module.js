
/**
 * Created by igorsantana on 05/05/15.
 */
define(function (require) {
    'use strict';
    var angular = require('angular');
    require('app/modules/login/services/module');
    require('angular-bootstrap');



    return angular.module('app.login.controllers', ['app.login.services','ui.bootstrap'])
        .controller('LoginController', require('app/modules/login/controllers/LoginController'))
        .controller('InsertController', require('app/modules/login/controllers/InsertController'))
        .controller('ForgotController', require('app/modules/login/controllers/ForgotController'));
});