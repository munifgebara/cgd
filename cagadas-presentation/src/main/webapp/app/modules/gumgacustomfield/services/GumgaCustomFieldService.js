define(['app/apiLocations'], function(APILocation) {

  GumgaCustomFieldService.$inject = ['GumgaRest'];

  function GumgaCustomFieldService(GumgaRest) {
    var Service = new GumgaRest(APILocation.apiLocation + '/api/gumgacustomfield');

    return Service;
  }

  return GumgaCustomFieldService;
});