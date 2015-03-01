"use strict";

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

module.exports = function ngInjector() {
    var selector = arguments[0] === undefined ? "html" : arguments[0];

    if (!injectors[selector]) {
        injectors[selector] = angular.element(document.querySelector(selector)).injector();
    }
    return injectors[selector];
};