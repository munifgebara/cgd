define([], function () {

    ForgotController.$inject = ['$scope', '$http', 'LoginService'];

    function ForgotController($scope, $http, LoginService) {

        $scope.disableButton = false;

        $scope.doForgot = function (email) {
            $scope.disableButton = true;
            LoginService.forgotPassword(email)
                    .success(function (data){
                        data.response !== 'OK' ? $scope.disableButton = false : angular.noop; 
                    });
        };

    }
    return ForgotController;
});