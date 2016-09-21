define([], function () {

    GumgaTagDefinitionListController.$inject = ['$scope', 'GumgaTagDefinitionService', 'gumgaController'];

    function GumgaTagDefinitionListController($scope, GumgaTagDefinitionService, gumgaController) {

        gumgaController.createRestMethods($scope, GumgaTagDefinitionService, 'gumgatagdefinition');
        GumgaTagDefinitionService.resetDefaultState();

        $scope.gumgatagdefinition.execute('get');

        $scope.tableConfig = {
            columns: 'name,button',
            checkbox: true,
            columnsConfig: [{
                    name: 'name',
                    title: '<span gumga-translate-tag="gumgatagdefinition.name">name</span>',
                    content: '{{$value.name}}',
                    sortField: 'name'
                },
                {
                    name: 'button',
                    title: ' ',
                    content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="gumgatagdefinition.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
                }]
        };

    }
    ;
    return GumgaTagDefinitionListController;
});