define([
    '{angular}/angular',
    '{angular-formly}/formly',
    '[text]!{w20-components}/templates/forms/bootstrap/input-template.html',
    '[text]!{w20-components}/templates/forms/bootstrap/validation.html',

    '{angular-messages}/angular-messages'

], function (angular, formly, inputTemplate, validationTemplate) {
    'use strict';

    var module = angular.module('w20ComponentsForms', ['formly', 'ngMessages']);

    module.run(['formlyConfig', function (formlyConfig) {

        formlyConfig.setType([
            {
                name: 'input',
                template: inputTemplate
            }
        ]);

        formlyConfig.setWrapper([
            {
                template: validationTemplate
            }
        ]);
    }]);

    return {
        angularModules: ['w20ComponentsForms']
    }
});


