define(['app/apiLocations'], function(APILocation) {

  GumgaTagDefinitionService.$inject = ['GumgaRest'];

  function GumgaTagDefinitionService(GumgaRest) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/gumgatagdefinition');

    return Service;
  }

  return GumgaTagDefinitionService;
});