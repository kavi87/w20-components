define([
    '{angular}/angular',
    '{angular-formly}/formly',
    '[text]!{w20-components}/templates/forms/bootstrap/input.html',
    '[text]!{w20-components}/templates/forms/bootstrap/textarea.html',
    '[text]!{w20-components}/templates/forms/bootstrap/box.html',
    '[text]!{w20-components}/templates/forms/bootstrap/validation.html',
    '[text]!{w20-components}/templates/forms/bootstrap/select.html',

    '{angular-messages}/angular-messages'

], function (angular, formly, inputTemplate, textAreaTemplate, boxTemplate, validationTemplate, selectTemplate) {
    'use strict';

    var module = angular.module('w20ComponentsForms', ['formly', 'ngMessages']);

    module.directive('w20FormAttributes', [function () {
        return {
            link: function (scope, element, attrs) {
                var tOptions = scope.options.templateOptions;
                angular.forEach(tOptions, function (value, key) {
                    // loop through each template option except required and disabled
                    if (key !== 'required' && key !== 'disabled') {
                        attrs.$set(key, value);
                    }
                });

                if (scope.options.type === 'select') {
                    tOptions.options = _.groupBy(tOptions.options, 'group');
                }
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
                name: 'number',
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
            },
            {
                name: 'select',
                template: selectTemplate
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


