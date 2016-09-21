define([], function () {

    InsertController.$inject = ['$scope', '$http', 'LoginService'];

    function InsertController($scope, $http, LoginService) {

        $scope.btDisabled = false;
        $scope.passwordInvalid = true;
        $scope.passwordConfirmInvalid = true;
        
        $scope.doRegister = function (user) {
            $scope.btDisabled = true;
            if (user.password && (user.password === user.passwordConfirm)) {
                LoginService.registerUser(user).success(function (data){
                    if(data.response !== "OK")
                        $scope.btDisabled = false;
                });
            } else {
                $scope.$emit('dangerMessage', {
                    title: 'Erro na operação',
                    message: 'Confirme sua senha corretamente.'
                });
            }
        }
        
        $scope.enabledBtn = function (){
            if(!$scope.passwordInvalid && !$scope.passwordConfirmInvalid){
                $scope.btDisabled = true;
            }else{
                $scope.btDisabled = false;
            }
        }
        
        $scope.validPassword = function (param){
            if(!param || param.length < 3){
                $scope.passwordInvalid = true;
            }else{
                $scope.passwordInvalid = false;
            }
            $scope.enabledBtn();
        }
        $scope.validPasswordConfirm = function (paramConfirm, paramPassword){
            if(paramConfirm !== paramPassword){
                $scope.passwordConfirmInvalid = true;
            }else{
                $scope.passwordConfirmInvalid = false;
            }
            $scope.enabledBtn();
        }

    }

    return InsertController;

});