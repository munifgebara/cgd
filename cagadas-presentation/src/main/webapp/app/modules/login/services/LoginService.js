define(['app/apiLocations'], function (APILocation) {
    'use strict';
    LoginService.$inject = ['$http', '$q', '$rootScope', '$state', 'GumgaWebStorage'];

    function LoginService($http, $q, $rootScope, $state, GumgaWebStorage) {
        this.checkToken = function () {
            return GumgaWebStorage.getSessionStorageItem('token');
        };

        this.removeToken = function (user) {
            GumgaWebStorage.removeSessionStorageItem('token');
            GumgaWebStorage.removeSessionStorageItem('user');
        };
        
        
        this.forgotPassword = function (email){
            return $http.get(APILocation.apiLocation+'/publicoperations/token/lostpassword/' + email + '/')
                      .success(function () {
                          $rootScope.$emit('successMessage', {
                              title: 'Operação realizada com sucesso',
                              message: 'Enviamos um link para seu e-mail, verifique.'
                          });
                          $state.go("login.log");
                      }).error(function () {
                  $state.go("login.log");
              });  
        };
        
        this.registerUser =  function (user){
            return $http.post(APILocation.apiLocation+'/publicoperations/token/user/new/' + user.name + '/' + user.email + '/' + user.password)
                        .success(function (data) {
                            if (data.response === "OK") {
                                $rootScope.$emit('successMessage', {
                                    title: 'Cadastro realizado com sucesso',
                                    message: 'Seu cadastro foi realizado com sucesso.'
                                });
                                $state.go("login.log");
                            } else if (data.response === "UNDEFINED") {
                                $rootScope.$emit('warningMessage', {
                                    title: 'E-mail já utilizado',
                                    message: 'Existe algum usuário com este e-mail.'
                                });
                            } else {
                                $rootScope.$emit('dangerMessage', {
                                    title: 'Aconteceu um erro',
                                    message: 'Houve um erro ao executar a operação.'
                                });
                                $state.go("login.log");
                            }                            
                        }).error(function (data) {
                            throw "Error" +  data;
                            $state.go("login.log");
                        });
        };

        this.setToken = function (user) {
            var d = $q.defer();
            var promiseObj = {};

            function changeObj(state, msg) {
                promiseObj = {
                    changeState: state,
                    message: msg
                };
            }
     
            $http.post(APILocation.apiLocation + '/public/token', {user: user.email, password: user.password})
                    .then(function (data) {
                        if (data.data.token) {
                            var srcImage = location.origin+location.pathname+"resources/images/picture_pattern.png";
                            if(data.data.picture !== null){
                                var srcImage = 'data:' + data.data.picture.mimeType + ';base64,' + data.data.picture.bytes;
                            }
                            $rootScope.loggedUser = {
                                user: data.data.login,
                                token: data.data.token,
                                name: data.data.name,
                                organization: data.data.organization,
                                picture: srcImage
                            };

                            GumgaWebStorage.setSessionStorageItem('user', $rootScope.loggedUser);
                            GumgaWebStorage.setSessionStorageItem('token', data.data.token);
                            
                            $state.go('welcome');
                            d.resolve();
                        }

                    }, function (data) {
                        changeObj(data.data.response, data.statusText);
                        d.reject(promiseObj);
                    });
            return d.promise;
        };
    }

    return LoginService;
});
