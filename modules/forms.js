define([
    '{angular}/angular',
    '{angular-formly}/formly',
    '[text]!{w20-components}/templates/forms/bootstrap/input.html',
    '[text]!{w20-components}/templates/forms/bootstrap/textarea.html',
    '[text]!{w20-components}/templates/forms/bootstrap/box.html',
    '[text]!{w20-components}/templates/forms/bootstrap/validation.html',

    '{angular-messages}/angular-messages'

], function (angular, formly, inputTemplate, textAreaTemplate, boxTemplate, validationTemplate) {
    'use strict';

    var module = angular.module('w20ComponentsForms', ['formly', 'ngMessages']);

    module.directive('w20FormAttributes', [function () {
        return {
            link: function (scope, element, attrs) {

                angular.forEach(scope.options.templateOptions, function (value, key) {
                    if (key === 'required') {
                        attrs.$set('ng-required', value);
                    } else if (key === 'disabled') {
                        attrs.$set('ng-disabled', value);
                    } else {
                        attrs.$set(key, value);
                    }
                });

            }
        }
    }]);

    module.run(['formlyConfig', function (formlyConfig) {

        var types = [
            {
                name: 'text',
                template: inputTemplate
            },
            {
                name: 'password',
                template: inputTemplate
            },
            {
                name: 'date',
                template: inputTemplate
            },
            {
                name: 'checkbox',
                template: boxTemplate
            },
            {
                name: 'radio',
                template: boxTemplate
            },
            {
                name: 'textarea',
                template: textAreaTemplate
            }
        ];

        formlyConfig.setType(types);

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


