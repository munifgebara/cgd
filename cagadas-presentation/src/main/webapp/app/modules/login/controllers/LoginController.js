define(['jquery'],
    function ($) {
        'use strict';
        LoginController.$inject = ['$scope', 'LoginService','$uibModal'];

        function LoginController($scope, LoginService,$uibModal) {
            $('#emailInput').focus();

            LoginService.removeToken();

            $scope.doLogin = function (user) {
                LoginService.setToken(user)
            };
        }
        return LoginController;

    });
