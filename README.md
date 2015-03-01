# ngInjector.es6

quick access to the angular DI from external world

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

If not, you can use a selector too : `ngInjector('#shoppingcart')`

Install with `npm install nginjector --save`
