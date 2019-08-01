/* my-library version 1.0.0 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash')) :
  typeof define === 'function' && define.amd ? define(['lodash'], factory) :
  (global = global || self, global.MyBundle = factory(global._));
}(this, function (_) { 'use strict';

  var ENVIRONMENT = "production";

  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;

  var index = 42;

  // src/main.js

  function main () {
    console.log('the answer is ' + index);
    console.log(_.drop([1, 2, 3])); // console.log($)
  }

  return main;

}));
/* follow me on Twitter! @rich_harris */
//# sourceMappingURL=bundle.js.map
