define(function (require) {
    var angular = require('angular');
    require('app/modules/gumgacustomfield/services/module');
    require('angular-ui-router');

    return angular.module('app.gumgacustomfield.controllers', ['app.gumgacustomfield.services','ui.router'])
        .controller('GumgaCustomFieldFormController', require('app/modules/gumgacustomfield/controllers/GumgaCustomFieldFormController'))
        .controller('GumgaCustomFieldListController', require('app/modules/gumgacustomfield/controllers/GumgaCustomFieldListController'));
});