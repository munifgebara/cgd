define([], function() {

  GumgaCustomFieldListController.$inject = ['$scope', 'GumgaCustomFieldService', 'gumgaController'];

  function GumgaCustomFieldListController($scope, GumgaCustomFieldService, gumgaController) {

    gumgaController.createRestMethods($scope, GumgaCustomFieldService, 'gumgacustomfield');
    GumgaCustomFieldService.resetDefaultState();

    $scope.gumgacustomfield.execute('get');

    $scope.tableConfig = {
      columns: 'clazz,button',
      checkbox: true,
      columnsConfig: [{
        name: 'clazz',
        title: '<span gumga-translate-tag="gumgacustomfield.clazz">clazz</span>',
        content: '{{$value.clazz}}',
        sortField: 'clazz'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="gumgacustomfield.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return GumgaCustomFieldListController;
});