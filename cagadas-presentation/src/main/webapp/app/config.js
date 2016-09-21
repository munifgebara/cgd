'use strict';
requirejs.config({

    paths: {
        "angular": "bower_components/angular/angular.min",
        "angular-mocks": "node_modules/angular-mocks/angular-mocks",
        "angular-bootstrap": "bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "jquery": "bower_components/jquery/dist/jquery.min",
        "es5-sshim": "bower_components/es5-shim/es5-shim.min",
        'notify': "bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min",
        "api-locations":"app/apiLocations",
        "gumga-components":"bower_components/gumga-components/dist/gumga.min",
        "mousetrap-latest": "bower_components/mousetrap-latest/mousetrap.min",
        "remarkable-bootstrap-notify": "bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min",
        "ngImgCrop": "bower_components/ng-img-crop/compile/minified/ng-img-crop"
    },
    shim: {
        "angular": {exports: "angular", deps: ["jquery"]},
        "angular-bootstrap": {deps: ["angular"]},
        "angular-ui-router": {deps: ["angular"]},
        "angular-mocks": {deps: ["angular"], exports: "angular-mocks"},
        "bootstrap": {deps: ["jquery"]},
        "jquery-mask": {deps: ["jquery"]},
        "gumga-components":{deps:['angular','angular-bootstrap', 'angular-ui-router', 'jquery', 'remarkable-bootstrap-notify', 'mousetrap-latest'] },
        "ngImgCrop": {deps: ["angular"]}

    }
});
