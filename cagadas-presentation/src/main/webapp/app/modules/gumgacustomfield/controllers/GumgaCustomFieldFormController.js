define([], function() {


  GumgaCustomFieldFormController.$inject = ['GumgaCustomFieldService', '$state', 'entity', '$scope', 'gumgaController'];

  function GumgaCustomFieldFormController(GumgaCustomFieldService, $state, entity, $scope, gumgaController) {

    gumgaController.createRestMethods($scope, GumgaCustomFieldService, 'gumgacustomfield');

    $scope.clazzes = [
      {label: 'ClasseA', value: 'br.pacote.domain.model.ClasaseA'},
      {label: 'ClasseB', value: 'br.pacote.domain.model.ClasaseB'},
      {label: 'ClasseC', value: 'br.pacote.domain.model.ClasaseC'}
    ];
    $scope.customFields = [
      {label: 'Texto', value: 'TEXT'},
      {label: 'Número', value: 'NUMBER'},
      {label: 'Data', value: 'DATE'},
      {label: 'Booleano', value: 'LOGIC'},
      {label: 'Seleção', value: 'SELECTION'}
    ];
    $scope.gumgacustomfield.data = entity.data || {};
    $scope.continue = {};

    $scope.$watch('gumgacustomfield.data.type', function(newValue, oldValue) {
      if (
        ($scope.gumgacustomfield.data.id == null) ||
        ($scope.gumgacustomfield.data.id != null && newValue != oldValue)
      ) {
        switch (newValue) {
          case 'TEXT': $scope.gumgacustomfield.data.defaultValueScript = "''"; break;
          case 'NUMBER': $scope.gumgacustomfield.data.defaultValueScript = "0"; break;
          case 'DATE': $scope.gumgacustomfield.data.defaultValueScript = "new Date()"; break;
          case 'LOGIC': $scope.gumgacustomfield.data.defaultValueScript = true; break;
          case 'SELECTION': $scope.gumgacustomfield.data.defaultValueScript = "''"; break;
        }
      }
    });


    $scope.gumgacustomfield.on('putSuccess',function(data){
      $state.go('gumgacustomfield.list');
    })
  }

  return GumgaCustomFieldFormController;
});
