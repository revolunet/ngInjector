'use strict';

/*
    ngInjector

    quick access the angular DI from external world

    ```js
    var injector = require('ngInjector');

    var params = {
        id: 42
    };

    injector()(function($state) {
        $state.go('my.sub.state', params)
    });
    ```

    By default it assumes you've put your `ng-app` attribute on the HTML tag.

    If not, you can use a selector : `ngInjector('#shoppingcart')`

    Supports angular multi-apps (multiple injectors)


*/

var injectors = {};

module.exports = function ngInjector(selector='html') {
    if (!injectors[selector]) {
        var target = document.querySelector(selector);
        if (!target) {
            throw "cannot locate angular injector";
        }
        injectors[selector] = angular.element(target).injector();
    }
    return injectors[selector];
}
