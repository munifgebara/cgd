define([], function () {


    GumgaTagDefinitionFormController.$inject = ['GumgaTagDefinitionService', '$state', 'entity', '$scope', 'gumgaController'];

    function GumgaTagDefinitionFormController(GumgaTagDefinitionService, $state, entity, $scope, gumgaController) {

        gumgaController.createRestMethods($scope, GumgaTagDefinitionService, 'gumgatagdefinition');

        $scope.novoAtributo = "";
        $scope.gumgatagdefinition.data = entity.data || {};
        $scope.continue = {};

        $scope.novo = function () {
            var tem = false;
            var tamanho = $scope.gumgatagdefinition.data.attributes.length;
            for (i = 0; i < tamanho; i++) {
                if ($scope.gumgatagdefinition.data.attributes[i].name === $scope.novoAtributo) {
                    tem = true;
                    break;
                }
            }

            if (!tem) {
                $scope.gumgatagdefinition.data.attributes.push({name: $scope.novoAtributo});
            }





            $scope.novoAtributo = "";
        }
        $scope.remover = function (index) {
            $scope.gumgatagdefinition.data.attributes.splice(index, 1);
        }


        $scope.gumgatagdefinition.on('putSuccess', function (data) {
            $state.go('gumgatagdefinition.list');
        })

   

    }

    return GumgaTagDefinitionFormController;
});