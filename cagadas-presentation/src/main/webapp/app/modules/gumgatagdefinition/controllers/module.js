define(function (require) {
    var angular = require('angular');
    require('app/modules/gumgatagdefinition/services/module');
    require('angular-ui-router');

    return angular.module('app.gumgatagdefinition.controllers', ['app.gumgatagdefinition.services','ui.router'])
        .controller('GumgaTagDefinitionFormController', require('app/modules/gumgatagdefinition/controllers/GumgaTagDefinitionFormController'))
        .controller('GumgaTagDefinitionListController', require('app/modules/gumgatagdefinition/controllers/GumgaTagDefinitionListController'));
});