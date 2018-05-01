(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(100)();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    @media (min-width: 320px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 320px) {\n      ', '\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n  @media (min-width: 320px) and (max-width: 374px) {\n      ', '\n    }\n  '], ['\n  @media (min-width: 320px) and (max-width: 374px) {\n      ', '\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    @media (min-width: 375px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 375px) {\n      ', '\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  @media (min-width: 375px) and (max-width: 424px) {\n      ', '\n    }\n  '], ['\n  @media (min-width: 375px) and (max-width: 424px) {\n      ', '\n    }\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    @media (min-width: 425px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 425px) {\n      ', '\n    }\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  @media (min-width: 425px) and (max-width: 767px) {\n      ', '\n    }\n  '], ['\n  @media (min-width: 425px) and (max-width: 767px) {\n      ', '\n    }\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    @media (min-width: 768px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 768px) {\n      ', '\n    }\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n  @media (min-width: 768px) and (max-width: 1023px) {\n      ', '\n    }\n  '], ['\n  @media (min-width: 768px) and (max-width: 1023px) {\n      ', '\n    }\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    @media (min-width: 1024px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 1024px) {\n      ', '\n    }\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n  @media (min-width: 1024px) and (max-width: 1439px) {\n      ', '\n    }\n  '], ['\n  @media (min-width: 1024px) and (max-width: 1439px) {\n      ', '\n    }\n  ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    @media (min-width: 1440px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 1440px) {\n      ', '\n    }\n  ']),
    _templateObject12 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject13 = _taggedTemplateLiteral(['\n    @media (min-width: 576px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 576px) {\n      ', '\n    }\n  ']),
    _templateObject14 = _taggedTemplateLiteral(['\n    @media (min-width: 992px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 992px) {\n      ', '\n    }\n  ']),
    _templateObject15 = _taggedTemplateLiteral(['\n    @media (min-width: 1200px) {\n      ', '\n    }\n  '], ['\n    @media (min-width: 1200px) {\n      ', '\n    }\n  ']);

var _styledComponents = __webpack_require__(0);

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var mediaQuery = {

  // Chrome Inspctor
  mobileS: function mobileS() {
    return (0, _styledComponents.css)(_templateObject, _styledComponents.css.apply(undefined, arguments));
  },
  mobileSOnly: function mobileSOnly() {
    return (0, _styledComponents.css)(_templateObject2, _styledComponents.css.apply(undefined, arguments));
  },

  mobileM: function mobileM() {
    return (0, _styledComponents.css)(_templateObject3, _styledComponents.css.apply(undefined, arguments));
  },
  mobileMOnly: function mobileMOnly() {
    return (0, _styledComponents.css)(_templateObject4, _styledComponents.css.apply(undefined, arguments));
  },

  mobileL: function mobileL() {
    return (0, _styledComponents.css)(_templateObject5, _styledComponents.css.apply(undefined, arguments));
  },
  mobileLOnly: function mobileLOnly() {
    return (0, _styledComponents.css)(_templateObject6, _styledComponents.css.apply(undefined, arguments));
  },

  tablet: function tablet() {
    return (0, _styledComponents.css)(_templateObject7, _styledComponents.css.apply(undefined, arguments));
  },
  tabletOnly: function tabletOnly() {
    return (0, _styledComponents.css)(_templateObject8, _styledComponents.css.apply(undefined, arguments));
  },

  laptop: function laptop() {
    return (0, _styledComponents.css)(_templateObject9, _styledComponents.css.apply(undefined, arguments));
  },
  laptopOnly: function laptopOnly() {
    return (0, _styledComponents.css)(_templateObject10, _styledComponents.css.apply(undefined, arguments));
  },

  laptopL: function laptopL() {
    return (0, _styledComponents.css)(_templateObject11, _styledComponents.css.apply(undefined, arguments));
  },

  // Bootstrap 4
  // xs: Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  xs: function xs() {
    return (0, _styledComponents.css)(_templateObject12, _styledComponents.css.apply(undefined, arguments));
  },
  sm: function sm() {
    return (0, _styledComponents.css)(_templateObject13, _styledComponents.css.apply(undefined, arguments));
  },
  md: function md() {
    return (0, _styledComponents.css)(_templateObject7, _styledComponents.css.apply(undefined, arguments));
  },
  lg: function lg() {
    return (0, _styledComponents.css)(_templateObject14, _styledComponents.css.apply(undefined, arguments));
  },
  xl: function xl() {
    return (0, _styledComponents.css)(_templateObject15, _styledComponents.css.apply(undefined, arguments));
  }
};

exports.default = mediaQuery;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(exports, /******/function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 18);
  /******/
}(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getRandomId;
  function getRandomId() {
    return Math.floor(Math.random() * 1000000000);
  }

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  var getNative = __webpack_require__(8);

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  module.exports = nativeCreate;

  /***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

  var eq = __webpack_require__(14);

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  module.exports = assocIndexOf;

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  var isKeyable = __webpack_require__(61);

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  module.exports = getMapData;

  /***/
},
/* 4 */
/***/function (module, exports) {

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  module.exports = isArray;

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  var baseGetTag = __webpack_require__(13),
      isObjectLike = __webpack_require__(35);

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }

  module.exports = isSymbol;

  /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

  var root = __webpack_require__(7);

  /** Built-in value references. */
  var _Symbol = root.Symbol;

  module.exports = _Symbol;

  /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

  var freeGlobal = __webpack_require__(31);

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  module.exports = root;

  /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

  var baseIsNative = __webpack_require__(43),
      getValue = __webpack_require__(48);

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  module.exports = getNative;

  /***/
},
/* 9 */
/***/function (module, exports) {

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return value != null && (type == 'object' || type == 'function');
  }

  module.exports = isObject;

  /***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _AppRoute = __webpack_require__(76);

  var _AppRoute2 = _interopRequireDefault(_AppRoute);

  var _Reference = __webpack_require__(77);

  var _Reference2 = _interopRequireDefault(_Reference);

  var _CollectedBy = __webpack_require__(78);

  var _CollectedBy2 = _interopRequireDefault(_CollectedBy);

  var _CachedContent = __webpack_require__(79);

  var _CachedContent2 = _interopRequireDefault(_CachedContent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Record = function Record() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';
    var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var route = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      appRouteCustom: '',
      appRouteDefault: '',
      webRoute: ''
    };
    var tags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var references = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var collectionInfo = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

    _classCallCheck(this, Record);

    var referencesInstance = references.map(function (reference) {
      return new _Reference2.default(reference.url, reference.note);
    });
    var collectionInfoInstance = collectionInfo.map(function (collectedBy) {
      return new _CollectedBy2.default(collectedBy.userId, collectedBy.date);
    });
    return {
      id: id,
      content: {
        title: title,
        appRoute: new _AppRoute2.default(route.appRouteCustom, route.appRouteDefault),
        webRoute: route.webRoute,
        tags: tags,
        references: referencesInstance,
        collectionInfo: collectionInfoInstance,
        cachedContent: {
          content: '',
          collectedByUserId: '',
          collectedTime: 0 //new CachedContent(id)
        } }
    };
  };

  exports.default = Record;
  ;

  /***/
},
/* 11 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _assets = __webpack_require__(19);

  var _assets2 = _interopRequireDefault(_assets);

  var _grids = __webpack_require__(20);

  var _grids2 = _interopRequireDefault(_grids);

  var _menus = __webpack_require__(21);

  var _menus2 = _interopRequireDefault(_menus);

  var _pages = __webpack_require__(22);

  var _pages2 = _interopRequireDefault(_pages);

  var _site = __webpack_require__(23);

  var _site2 = _interopRequireDefault(_site);

  var _products = __webpack_require__(24);

  var _products2 = _interopRequireDefault(_products);

  var _banners = __webpack_require__(25);

  var _banners2 = _interopRequireDefault(_banners);

  var _footer = __webpack_require__(26);

  var _footer2 = _interopRequireDefault(_footer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = {
    //each node is a collection
    //each collection MUST BE an array
    //each collection item MUST HAVE itemId (can custom name)
    site: _site2.default,
    menus: _menus2.default,
    pages: _pages2.default,
    gridContainerProperties: ['abc'],
    grids: _grids2.default,
    //? not sure if I ever need assets... since webpack optimize them
    assets: _assets2.default,
    products: _products2.default,
    banners: _banners2.default,
    footer: _footer2.default
  };

  /***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

  var isArray = __webpack_require__(4),
      isKey = __webpack_require__(30),
      stringToPath = __webpack_require__(36),
      toString = __webpack_require__(65);

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  module.exports = castPath;

  /***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

  var _Symbol2 = __webpack_require__(6),
      getRawTag = __webpack_require__(33),
      objectToString = __webpack_require__(34);

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = _Symbol2 ? _Symbol2.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  module.exports = baseGetTag;

  /***/
},
/* 14 */
/***/function (module, exports) {

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  module.exports = eq;

  /***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

  var isSymbol = __webpack_require__(5);

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  module.exports = toKey;

  /***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _a = __webpack_require__(80);

  var _a2 = _interopRequireDefault(_a);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = {
    a1: _a2.default
  };

  /***/
},
/* 17 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getGoogleMapQuery;
  function getGoogleMapQuery() {
    var locationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var city = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var zipcode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var formatted = {
      location: locationName.replace(/[^A-Z0-9]/ig, "+") || '',
      city: city.replace(/[^A-Z0-9]/ig, "+") || '',
      state: state.replace(/[^A-Z0-9]/ig, "+") || ''
    };
    var query = '' + formatted.location + (formatted.city ? '+' : '') + formatted.city + (formatted.state ? '+' : '') + formatted.state + (zipcode ? '+' : '') + zipcode;
    return query;
  }

  /***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getRoute = exports.getGoogleMapQuery = exports.getGoogleMapUrl = exports.getRandomId = exports.Snapshot = exports.SocialNetworkAccount = exports.Collection = exports.Location = exports.Log = exports.Person = exports.Record = exports.Records = exports.ContentSynchronizer = exports.www___naturalorchards__us = undefined;

  var _www___naturalorchards__us = __webpack_require__(11);

  var _www___naturalorchards__us2 = _interopRequireDefault(_www___naturalorchards__us);

  var _ContentSynchronizer = __webpack_require__(27);

  var _ContentSynchronizer2 = _interopRequireDefault(_ContentSynchronizer);

  var _Records = __webpack_require__(74);

  var _Records2 = _interopRequireDefault(_Records);

  var _Record = __webpack_require__(10);

  var _Record2 = _interopRequireDefault(_Record);

  var _Person = __webpack_require__(81);

  var _Person2 = _interopRequireDefault(_Person);

  var _Log = __webpack_require__(82);

  var _Log2 = _interopRequireDefault(_Log);

  var _Location = __webpack_require__(83);

  var _Location2 = _interopRequireDefault(_Location);

  var _Collection = __webpack_require__(84);

  var _Collection2 = _interopRequireDefault(_Collection);

  var _SocialNetworkAccount = __webpack_require__(85);

  var _SocialNetworkAccount2 = _interopRequireDefault(_SocialNetworkAccount);

  var _Snapshot = __webpack_require__(86);

  var _Snapshot2 = _interopRequireDefault(_Snapshot);

  var _getRandomId = __webpack_require__(0);

  var _getRandomId2 = _interopRequireDefault(_getRandomId);

  var _getGoogleMapUrl = __webpack_require__(87);

  var _getGoogleMapUrl2 = _interopRequireDefault(_getGoogleMapUrl);

  var _getGoogleMapQuery = __webpack_require__(17);

  var _getGoogleMapQuery2 = _interopRequireDefault(_getGoogleMapQuery);

  var _getRoute = __webpack_require__(88);

  var _getRoute2 = _interopRequireDefault(_getRoute);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.www___naturalorchards__us = _www___naturalorchards__us2.default;
  exports.ContentSynchronizer = _ContentSynchronizer2.default;
  exports.Records = _Records2.default;
  exports.Record = _Record2.default;
  exports.Person = _Person2.default;
  exports.Log = _Log2.default;
  exports.Location = _Location2.default;
  exports.Collection = _Collection2.default;
  exports.SocialNetworkAccount = _SocialNetworkAccount2.default;
  exports.Snapshot = _Snapshot2.default;
  exports.getRandomId = _getRandomId2.default;
  exports.getGoogleMapUrl = _getGoogleMapUrl2.default;
  exports.getGoogleMapQuery = _getGoogleMapQuery2.default;
  exports.getRoute = _getRoute2.default;

  /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [];

  /***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [
  //A grid is a component neutral container that can be loaded and become any kind of components!
  //gridComponent is the recognizer to make that happen!
  {
    gridItemId: 1,
    gridItemName: 'notifcation bar', //name use by the application for search queries
    gridTypeName: 'custom', //not sure when I will need it, but it definately need to be here, as type is critical for query
    gridCustomName: 'notification bar', //custom name for user, not used by app
    gridComponent: 'NotificationBar', //this grid's core component it is loading
    gridContent: {
      //all the data that is passing into the component, VERY FLEXIBLE
      //HOWEVER it MUST FOLLOW THE FOLLOWING ROOT LAYER DATA PATTERN
      /*
        {
          type: 'type name',
          data: {
            ....
          },
          style: {
            ....
          }
        }
      */
      type: 'textWithBarLink',
      data: {
        text: 'we are in opening sale!',
        link: 'http://naturalorchards.us',
        showAsDefault: true
      },
      style: [//MANDATORY: needed for inside component style
      'center-text']
    },
    gridCustomStyle: {},
    gridStyle: [], //Styles apply to the grid itself
    gridResponsiveProperties: { //How grid itself will response to different screen sizes
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    }
  }, {
    gridItemId: 2,
    gridItemName: 'main menu bar',
    gridTypeName: 'menu',
    gridCustomName: 'menu bar',
    gridComponent: 'MenuBar',
    gridContent: {
      menuId: 1,
      menuType: 'custom'
    },
    gridCustomStyle: {
      container: {
        inlineStyles: {
          marginTop: '20px',
          marginBottom: '20px'
        }
      }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    }
  }, {
    gridItemId: 3,
    gridItemName: 'specific product',
    gridTypeName: 'specific product',
    gridCustomName: 'specific product',
    gridComponent: 'ProductDisplay',
    gridContent: {
      productName: 'product',
      style: []
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: 3,
        xl: 3
      }
    }
  }, {
    gridItemId: 4,
    gridItemName: 'main footer',
    gridTypeName: 'menu',
    gridCustomName: 'footer bar',
    gridComponent: 'FooterBar',
    gridContent: {
      data: {}
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    }
  }, {
    gridItemId: 5,
    gridItemName: 'product listing',
    gridTypeName: 'listing',
    gridCustomName: 'product listing',
    gridComponent: 'Listing',
    gridContent: {
      data: {
        name: 'products',
        listingItemComponentName: 'ListingItem',
        listingItemResponsiveProperties: {
          standard: 12,
          xs: 12,
          sm: 12,
          md: 4,
          lg: 4,
          xl: 4,
          offset: {
            standard: '',
            sm: '',
            md: '',
            lg: '',
            xl: ''
          }
        },
        listingCustomStyle: {
          container: {
            inlineStyles: {
              marginTop: '1%',
              marginBottom: '1%'
            }
          }
        },
        listingItemStyle: ['listingItem__shell']
      }
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 10,
      xs: 10,
      sm: 10,
      md: 10,
      lg: 10,
      xl: 10,
      offset: {
        standard: 1,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1
      }
    }
  }, {
    gridItemId: 6,
    gridItemName: 'tags menu bar',
    gridTypeName: 'menu',
    gridCustomName: 'tags menu bar',
    gridComponent: 'MenuBar',
    gridContent: {
      menuId: 2,
      menuType: 'collection'
    },
    gridCustomStyle: {
      container: {
        inlineStyles: {
          marginTop: '20px',
          marginBottom: '20px'
        }
      }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    }
  }, {
    gridItemId: 7,
    gridItemName: 'specific tag product listing',
    gridTypeName: 'listing',
    gridCustomName: 'specific tag product listing',
    gridComponent: 'Listing',
    gridContent: {
      data: {
        name: 'products',
        type: 'filter',
        //filterData: this need to be ALWAYS DYNAMICALLY INSERTED TO BE EFFECTIVE!
        listingItemComponentName: 'ListingItem',
        listingItemResponsiveProperties: {
          standard: 12,
          xs: 12,
          sm: 12,
          md: 4,
          lg: 4,
          xl: 4,
          offset: {
            standard: '',
            sm: '',
            md: '',
            lg: '',
            xl: ''
          }
        },
        listingItemStyle: ['listingItem__shell']
      }
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 10,
      xs: 10,
      sm: 10,
      md: 10,
      lg: 10,
      xl: 10,
      offset: {
        standard: 1,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1
      }
    }
  }, {
    gridItemId: 8,
    gridItemName: 'bread crumb',
    gridTypeName: 'custom',
    gridCustomName: 'bread crumb',
    gridComponent: 'BreadCrumb',
    gridContent: {
      data: {
        //dynamically generated
      },
      style: {
        container: {
          inlineStyles: {
            marginTop: '20px'
          }

        }
      }
    },
    gridCustomStyle: {
      // container: {
      //   inlineStyles: {

      //   }
      // }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    }
  }, {
    gridItemId: 9,
    gridItemName: 'logo bar',
    gridTypeName: 'custom',
    gridCustomName: 'logo bar',
    gridComponent: 'LogoBar',
    gridContent: {
      data: {
        logo: {
          image: {
            url: '/assets/images/logo.svg'
          }
        }
      }
    },
    gridCustomStyle: {},
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    }
  }, {
    gridItemId: 10,
    gridItemName: 'all products direct link menu bar',
    gridTypeName: 'menu',
    gridCustomName: 'all products direct link menu bar',
    gridComponent: 'MenuBar',
    gridContent: {
      menuId: 4,
      menuType: 'collection'
    },
    gridCustomStyle: {
      container: {
        inlineStyles: {
          marginTop: '20px',
          marginBottom: '20px'
        }
      }
    },
    gridStyle: [],
    gridResponsiveProperties: {
      standard: 12,
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      offset: {
        standard: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
      }
    }
  }];

  /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{
    menuId: 1,
    menuLastUpdateDate: 1498688605759,
    menuName: 'primary',
    menuType: 'custom',
    menuConfig: {
      position: 'center'
    },
    menuItems: [{
      menuItemId: 1,
      type: 'filter',
      style: [],
      name: 'home',
      componentName: 'MenuBarItem',
      responsiveProperties: {
        xs: 12,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        offset: {
          standard: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        }
      },
      content: {
        type: 'products',
        name: 'all',
        query: [
          /*{
            paramName: 'tag',
            paramValue: '',
          },*/
        ],
        link: {
          name: 'home'
        }
      }
    }, {
      menuItemId: 2,
      type: 'page',
      style: [],
      name: '',
      componentName: 'MenuBarItem',
      responsiveProperties: {
        xs: 12,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        offset: {
          standard: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        }
      },
      content: {
        pageId: 2
      }
    }, {
      menuItemId: 3,
      type: 'page',
      style: [],
      name: '',
      componentName: 'MenuBarItem',
      responsiveProperties: {
        xs: 12,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        offset: {
          standard: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        }
      },
      content: {
        pageId: 3
      }
    }]
  }, {
    menuId: 2,
    menuLastUpdateDate: 1498688605759,
    menuName: 'tags',
    menuType: 'collection',
    menuConfig: {
      collectionName: 'products',
      doNotInclude: {
        collectionKeys: []
      },
      position: 'center',
      type: 'collectionItems',
      componentName: 'MenuBarItem',
      menuItemId: 4,
      menuItemType: 'filter',
      menuItemStyle: [],
      menuItemResponsiveProperties: {
        xs: 12,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        offset: {
          standard: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        }
      }
    }
  }, {
    menuId: 3,
    menuLastUpdateDate: 1498688605759,
    menuName: 'products',
    menuType: 'collection',
    menuConfig: {
      collectionName: 'products',
      doNotInclude: {
        collectionKeys: []
      },
      position: 'center',
      type: 'collectionItems',
      componentName: '',
      menuItemId: 4,
      menuItemType: 'filter',
      menuItemStyle: [],
      menuItemResponsiveProperties: {}
    }
  }, {
    menuId: 4,
    menuLastUpdateDate: 1498688605759,
    menuName: 'products-all-items',
    menuType: 'collection',
    menuConfig: {
      collectionName: 'products',
      doNotInclude: {
        collectionKeys: []
      },
      position: 'center',
      type: 'collectionItems',
      componentName: 'MenuBarItem',
      menuItemId: 4,
      menuItemType: 'filter',
      menuItemStyle: [],
      menuItemResponsiveProperties: {
        xs: 12,
        sm: 1,
        md: 1,
        lg: 1,
        xl: 1,
        offset: {
          standard: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        }
      }
    }
  }];

  /***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [
  /*
    Features
    - referencing grid Id for content
    Each page not necessarily a component, but a collection of various grid items!
    BUT its also allowed if its more of a specific component thing that generate grids in its own way.
  */

  {
    id: 1,
    path: '/',
    componentName: 'LandingPage',
    name: 'home',
    title: 'Home',
    //may have alternateTitle later, for menu reference purpose
    include: {
      grids: [1, 6, 2]
    }
  }, {
    id: 2,
    path: '/about',
    componentName: 'About',
    name: 'about',
    title: 'About',
    include: {
      grids: [1, 6, 2]
    }
  }, {
    id: 3,
    path: '/contact',
    componentName: 'Contact',
    name: 'contact',
    title: 'Contact',
    include: {
      grids: [1, 6, 2]
    }
  }];

  /***/
},
/* 23 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = {
    siteId: 1,
    siteName: {
      casual: 'Natural Orchards'
    },
    domain: {
      https: false,
      name: 'naturalorchards',
      space: 'us',
      development: {
        https: false,
        name: 'http://localhost:8080'
      },
      baseTag: ''
    },
    cache: {
      updated: {
        time: 1508673731080
      },
      storedOnClient: {
        time: null
      }
    },
    date: { //deprecated, use cache->updated->date instead
      updated: 1508673731080, //unix value
      storedOnClient: 0
    },
    flag: {
      notificationBar: {
        contentUpdated: {
          date: null
        },
        closed: {
          date: null,
          manually: false
        }
      }
    }

  };

  /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  ///NOTE: each item will have a dynamically injected attribute collectionName which equal 'products'

  exports.default = [{
    id: 1,
    name: 'premium-sun-dried-reaisins',
    title: 'Premium Sun Dried Raisins',
    shortTitle: 'Raisins',
    tags: ['raisin', 'fruit'],
    route: {
      name: 'premium-sun-dried-reaisins'
    },
    description: "Our Premium Raisins are handpicked with care and sun-dried in trellised\n    vineyards. The exceptional flavor of our Raisins is directly attributable to the\n    unique climate, soil and water runoff from the Hindu Kush mountains \u2013 the\n    primary source of irrigation for the pristine orchards from which we source our\n    Premium Raisins.",
    properties: {
      ingredients: 'Natural Sun-dried Raisins (unsulfured) no preservatives, chemicals\n      or additives.',
      allergyInformation: 'This product was packaged in a facility that handles tree\n      nuts.',
      storageInformation: 'Once opened - recommended to refrigerate.',
      nutritionFactLabel: {
        image: {
          label: 'nutrition',
          url: ''
        }
      },
      distributedBy: 'Natural Orchards, LLC',
      madeIn: 'Product of Afghanistan'
    },
    price: {
      regular: 0,
      sale: 0
    },
    availableQuantity: 99999, //99999 means unlimited
    slideShow: [{
      name: 'front',
      images: [{
        url: '/assets/images/products/Raisins 1.jpg'
      }, {
        url: '/assets/images/products/Raisins 2.jpg'
      }, {
        url: '/assets/images/products/Raisins 3.jpeg'
      }, {
        url: '/assets/images/products/Raisins 4.jpg'
      }]
    }]
  }, {
    id: 2,
    name: 'premium-raw-pistachios',
    title: 'Premium Raw Pistachios',
    shortTitle: 'Pistachios',
    tags: ['pistachio', 'nut'],
    route: {
      name: 'premium-raw-pistachios'
    },
    description: "Our Premium Pistachios are the finest naturally grown raw pistachios. Our\n    Pistachios are handpicked from wild woodlands, untouched by man and\n    protected by mother nature. The exceptional flavor of our Pistachios is directly\n    attributable to the unique climate, soil and water runoff from the Hindu Kush\n    mountains \u2013 the primary source of irrigation for the pristine woodlands from\n    which we source our Premium Pistachios.",
    properties: {
      ingredients: "Natural Raw Unsalted Pistachios \u2013 (unsulfured) no preservatives,\n      chemicals or additives.",
      allergyInformation: 'This product was packaged in a facility that handles tree\n      nuts.',
      storageInformation: 'Once opened - recommended to refrigerate.',
      nutritionFactLabel: {
        image: {
          label: 'nutrition',
          url: ''
        }
      },
      distributedBy: 'Natural Orchards, LLC',
      madeIn: 'Product of Afghanistan'
    },
    price: {
      regular: 0,
      sale: 0
    },
    availableQuantity: 99999, //99999 means unlimited
    slideShow: [{
      name: 'front',
      images: [{
        url: '/assets/images/products/Pistachios 1.jpg'
      }, {
        url: '/assets/images/products/Pistachios 2.jpg'
      }, {
        url: '/assets/images/products/Pistachios 3.jpeg'
      }, {
        url: '/assets/images/products/Pistachios 4.jpg'
      }, {
        url: '/assets/images/products/Pistachios 5.jpg'
      }]
    }]
  }, {
    id: 3,
    name: 'premium-sun-dried-mulberries',
    title: 'Premium Sun Dried Mulberries',
    shortTitle: 'Mulberries',
    tags: ['mulberry', 'fruit'],
    route: {
      name: 'premium-sun-dried-mulberries'
    },
    description: "Our Premium sun-dried Mulberries are the finest naturally grown mulberries \u2013 a\n    superfruit packed with vitamin C and antioxidants. Our mulberries are hand-\n    picked from orchards largely untouched by man and protected by mother\n    nature. The exceptional flavor of our Mulberries is directly attributable to the\n    unique climate, soil and water runoff from the Hindu Kush mountains \u2013 the\n    primary source of irrigation for the pristine orchards from which we source our Premium Mulberries.",
    properties: {
      ingredients: "Natural sun-dried Mulberries \u2013 (unsulfured) no preservatives,\n      chemicals or additives.",
      allergyInformation: 'This product was packaged in a facility that handles tree\n      nuts.',
      storageInformation: 'Once opened - recommended to refrigerate.',
      nutritionFactLabel: {
        image: {
          label: 'nutrition',
          url: ''
        }
      },
      distributedBy: 'Natural Orchards, LLC',
      madeIn: 'Product of Afghanistan'
    },
    price: {
      regular: 0,
      sale: 0
    },
    availableQuantity: 99999, //99999 means unlimited
    slideShow: [{
      name: 'front',
      images: [{
        url: '/assets/images/products/Mulberries 1.jpg'
      }, {
        url: '/assets/images/products/Mulberries 2.jpg'
      }, {
        url: '/assets/images/products/Mulberries 3.jpeg'
      }, {
        url: '/assets/images/products/Mulberries 4.jpg'
      }, {
        url: '/assets/images/products/Mulberries 5.jpg'
      }]
    }]
  }, {
    id: 4,
    name: 'premium-raw-almonds',
    title: 'Premium Raw Almonds',
    shortTitle: 'Almonds',
    tags: ['almond', 'nut'],
    route: {
      name: 'premium-raw-almonds'
    },
    description: "Our Premium Raw Almonds are the finest naturally grown, soft-shelled\n    almonds. Our Almonds are sun dried without pasteurization, which often results\n    in the reduction of healthy oil content. The exceptional flavor of our Almonds is\n    directly attributable to the unique climate, soil and water runoff from the Hindu\n    Kush mountains \u2013 the primary source of irrigation for the pristine orchards from\n    which we source our Premium Almonds.",
    properties: {
      ingredients: "Natural Raw Unsalted Almonds \u2013 (unsulfured) no preservatives,\n      chemicals or additives.",
      allergyInformation: 'This product was packaged in a facility that handles tree\n      nuts.',
      storageInformation: 'Once opened - recommended to refrigerate.',
      nutritionFactLabel: {
        image: {
          label: 'nutrition',
          url: ''
        }
      },
      distributedBy: 'Natural Orchards, LLC',
      madeIn: 'Product of Afghanistan'
    },
    price: {
      regular: 0,
      sale: 0
    },
    availableQuantity: 99999, //99999 means unlimited
    slideShow: [{
      name: 'front',
      images: [{
        url: '/assets/images/products/Almonds 1.jpg'
      }, {
        url: '/assets/images/products/Almonds 2.jpg'
      }, {
        url: '/assets/images/products/Almonds 3.jpeg'
      }, {
        url: '/assets/images/products/Almonds 4.jpg'
      }, {
        url: '/assets/images/products/Almonds 5.jpg'
      }]
    }]
  }, {
    id: 5,
    name: 'premium-sun-dried-apricots',
    title: 'Premium Sun Dried Apricots',
    shortTitle: 'Apricots',
    tags: ['apricot', 'fruit'],
    route: {
      name: 'premium-sun-dried-apricots'
    },
    description: "Our Premium sun-dried Apricots are the finest naturally grown Apricots. Our\n    Premium Apricots are handpicked with care from orchards largely untouched by\n    man and protected by mother nature. The exceptional flavor of our Apricots is\n    directly attributable to the unique climate, soil and water runoff from the Hindu\n    Kush mountains \u2013 the primary source of irrigation for the pristine orchards from\n    which we source our Premium Apricots.",
    properties: {
      ingredients: "Natural Sun-dried Apricots\u2013 (unsulfured) no preservatives,\n      chemicals or additives.",
      allergyInformation: 'This product was packaged in a facility that handles tree\n      nuts.',
      storageInformation: 'Once opened - recommended to refrigerate.',
      nutritionFactLabel: {
        image: {
          label: 'nutrition',
          url: ''
        }
      },
      distributedBy: 'Natural Orchards, LLC',
      madeIn: 'Product of Afghanistan'
    },
    price: {
      regular: 0,
      sale: 0
    },
    availableQuantity: 99999, //99999 means unlimited
    slideShow: [{
      name: 'front',
      images: [{
        url: '/assets/images/products/Apricots 1.jpg'
      }, {
        url: '/assets/images/products/Apricots 2.jpg'
      }, {
        url: '/assets/images/products/Apricots 3.jpg'
      }, {
        url: '/assets/images/products/Apricots 4.jpg'
      }, {
        url: '/assets/images/products/Apricots 5.jpg'
      }]
    }]
  }, {
    id: 6,
    name: 'premium-raw-walnuts',
    title: 'Premium Raw Walnuts',
    shortTitle: 'Walnuts',
    tags: ['walnut', 'nut'],
    route: {
      name: 'premium-raw-walnuts'
    },
    description: "Our Premium Raw Walnuts are the finest naturally grown Walnuts. Our sweet\n    and crunchy Walnuts are sun dried without pasteurization, which often results\n    in the reduction of healthy oil content. The exceptional flavor of our Walnuts is\n    directly attributable to the unique climate, soil and water runoff from the Hindu\n    Kush mountains \u2013 the primary source of irrigation for the pristine orchards from\n    which we source our Premium Walnuts.",
    properties: {
      ingredients: "Natural Raw Unsalted Walnuts \u2013 (unsulfured) no preservatives,\n      chemicals or additives.",
      allergyInformation: 'This product was packaged in a facility that handles tree\n      nuts.',
      storageInformation: 'Once opened - recommended to refrigerate.',
      nutritionFactLabel: {
        image: {
          label: 'nutrition',
          url: ''
        }
      },
      distributedBy: 'Natural Orchards, LLC',
      madeIn: 'Product of Afghanistan'
    },
    price: {
      regular: 0,
      sale: 0
    },
    availableQuantity: 99999, //99999 means unlimited
    slideShow: [{
      name: 'front',
      images: [{
        url: '/assets/images/products/Walnuts 1.jpg'
      }, {
        url: '/assets/images/products/Walnuts 2.jpg'
      }, {
        url: '/assets/images/products/Walnuts 3.jpeg'
      }, {
        url: '/assets/images/products/Walnuts 4.jpg'
      }]
    }]
  }];

  /***/
},
/* 25 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = [{
    id: 0,
    content: {
      url: '/assets/images/banner/Banner 1.jpg'
    }
  }, {
    id: 1,
    content: {
      url: '/assets/images/banner/Banner 2.jpg'
    }
  }, {
    id: 2,
    content: {
      url: '/assets/images/banner/Banner 3.jpg'
    }
  }, {
    id: 3,
    content: {
      url: '/assets/images/banner/Banner 4.jpg'
    }
  }];

  /***/
},
/* 26 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  module.exports = {
    socialIcons: [{
      name: 'facebook',
      customName: 'Facebook Social Icon With Link',
      srcUrl: '/assets/social/facebook-mono.svg',
      linkUrl: 'https://www.facebook.com/Natural-Orchards-308949709568249/'
    }, {
      name: 'twitter',
      customName: 'Twitter Social Icon With Link',
      srcUrl: '/assets/social/twitter-mono.svg',
      linkUrl: 'https://twitter.com/NaturalOrchards'
    }, {
      name: 'Pinterest',
      customName: 'Pinterest Social Icon With Link',
      srcUrl: '/assets/social/pinterest-mono.svg',
      linkUrl: 'https://www.pinterest.com/naturalorchards/'
    }]
  };

  /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _get = __webpack_require__(28);

  var _get2 = _interopRequireDefault(_get);

  var _set = __webpack_require__(68);

  var _set2 = _interopRequireDefault(_set);

  var _www___naturalorchards__us = __webpack_require__(11);

  var _www___naturalorchards__us2 = _interopRequireDefault(_www___naturalorchards__us);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ContentSynchronizer = function () {
    function ContentSynchronizer(content) {
      _classCallCheck(this, ContentSynchronizer);

      this.cacheLocalStorageName = this.getStorageName();
      this.content = content || _www___naturalorchards__us2.default;
      this.user = {
        userName: '',
        password: ''
      };
      this.dynamicContent = {};
      //TODO - enable when go prod
      //TODO - not yet, has cache problem when there is old cache
      //        MUST need old cache clean up logic!!!! BEFORE app is even started!!!!!
      // this.content =
      //   localStorage.getItem(this.cacheLocalStorageName)
      //   ? this.getCache()
      //   : ContentCache || content || {};

      //console.log(this.getProperty(this.content, 'site.cache.updated.time'));
      //check if client cache is stail or not and update cache accordingly
      var today = new Date();
      var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
      var storedOnClientTime = this.getProperty(this.content, 'site.cache.storedOnClient.time', 0);
      var yesterdayTime = yesterday.getTime();
      if (storedOnClientTime < yesterdayTime) {
        this.setProperty(this.content, 'site.cache.storedOnClient.time', Date.now());
        //also make async call to update this.content!
      }

      //try get from localstorage if its fresh, meaning within 1 day
      //if  localstorage not available, get data from memory / http call
      //if  localstorage data empty or http call failed,
      //fall back to stale content local storage cache,
      //if there is one, if not, then redirect to a 404 page
      this.cacheIt();
    }

    _createClass(ContentSynchronizer, [{
      key: 'setFirebase',
      value: function setFirebase(firebase) {
        this.firebase = firebase;
      }
    }, {
      key: 'getFirebase',
      value: function getFirebase() {
        return this.firebase;
      }
    }, {
      key: 'setContent',
      value: function setContent(newContent) {
        if (!newContent) return;
        this.content = newContent;
      }
    }, {
      key: 'setProperty',
      value: function setProperty(collection, propertyChain, value) {
        (0, _set2.default)(collection, propertyChain, value);
        this.content = collection;
      }
    }, {
      key: 'getProperty',
      value: function getProperty(collection, propertyChain, defaultValue) {
        var collectionObject = collection;
        if (typeof collection === 'string') {
          collectionObject = this.content[collection] || {};
        }
        return (0, _get2.default)(collectionObject, propertyChain, defaultValue);
      }
    }, {
      key: 'getDynamicContent',
      value: function getDynamicContent(itemName) {
        if (!itemName || !this.dynamicContent[itemName]) return this.dynamicContent;
        return this.dynamicContent[itemName].content;
      }
    }, {
      key: 'getDynamicContentState',
      value: function getDynamicContentState(itemName) {
        if (!itemName) {
          return;
        }
        if (!this.dynamicContent[itemName] || !this.dynamicContent[name].status) {
          this.dynamicContent[name] = { content: [], status: 'initial' };
        }
        return this.dynamicContent[name].status;
      }
    }, {
      key: 'getStorageName',
      value: function getStorageName() {
        // let windowInBrowser = window || null;
        // const domain = windowInBrowser
        //   ? windowInBrowser.location.hostname
        //   : 'localhost';
        //'ezLandingSite' + domain.name
        // return `ezLandingSite${domain}`;
        return 'ezLandingSite';
      }
    }, {
      key: 'cacheIt',
      value: function cacheIt() {
        var localStorage = localStorage || null;
        if (localStorage) {
          localStorage.setItem(this.cacheLocalStorageName, JSON.stringify(this.content));
          localStorage.setItem(this.cacheLocalStorageName + '-Dynamic', JSON.stringify(this.dynamicContent));
        }
      }
    }, {
      key: 'getCache',
      value: function getCache() {
        //console.log('using cache'); //eslint-disable-line
        var cache = '';
        var localStorage = localStorage || null;
        if (localStorage) {
          cache = JSON.parse(localStorage.getItem(this.cacheLocalStorageName));
        }
        return cache;
      }
    }, {
      key: 'getContent',
      value: function getContent() {
        return this.content;
      }
    }, {
      key: 'isFresh',
      value: function isFresh(date) {
        if (date === this.content.lastUpdatedDate) {
          return true;
        }
      }
    }, {
      key: 'getCollection',
      value: function getCollection(collectionName) {
        return this.content[collectionName];
      }
    }, {
      key: 'getItem',
      value: function getItem(collectionName, keyName, keyValue, isArray) {
        var content = this.content;
        var result = null;
        //let found = false;
        if (isArray) {
          var contentArray = Object.keys(content);
          var contentLength = contentArray.length - 1;
          for (var i = 0; i <= contentLength; i++) {
            var collectionKeyName = contentArray[i];
            if (collectionKeyName === collectionName) {
              var collection = content[collectionKeyName];
              var collectionLength = collection.length - 1;
              for (var ci = 0; ci <= collectionLength; ci++) {
                if (!collection[ci][keyName] && ci === collectionLength) {
                  result = this.error(collectionName, keyName, keyValue, isArray, 'all collection child searched');
                  break;
                } else if (collection[ci][keyName] === keyValue) {
                  //console.log('child found');
                  result = collection[ci];
                  break;
                }
              }
              break;
            } else if (i === contentLength) {
              result = this.error(collectionName, keyName, keyValue, isArray, 'all nodes searched');
              break;
            }
          }
          return result;
        } else {
          return this.error(collectionName, keyName, keyValue, isArray);
        }
      }
    }, {
      key: 'getProductGrid',
      value: function getProductGrid(productName) {
        var products = this.content.products;
        var isMatched = false;
        for (var i = 0; i < products.length; i++) {
          if (products[i].name === productName) {
            isMatched = true;
            return products[i];
          }
        }
        return null;
      }
    }, {
      key: 'updateNotificationBarStatus',
      value: function updateNotificationBarStatus(newStatus) {
        this.content.site.flag.notificationBar = newStatus;
        this.cacheIt();
      }
    }, {
      key: 'error',
      value: function error(collectionName, keyName, keyValue, isArray, addedComment) {
        return new Error('content not found: logged\n      *' + addedComment + '\n      collection: ' + collectionName + '\n      key: ' + keyName + '= ' + keyValue + '\n      is array: ' + isArray + '\n    ');
      }
    }]);

    return ContentSynchronizer;
  }();

  exports.default = new ContentSynchronizer();

  /***/
},
/* 28 */
/***/function (module, exports, __webpack_require__) {

  var baseGet = __webpack_require__(29);

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  module.exports = get;

  /***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

  var castPath = __webpack_require__(12),
      toKey = __webpack_require__(15);

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = castPath(path, object);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
  }

  module.exports = baseGet;

  /***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

  var isArray = __webpack_require__(4),
      isSymbol = __webpack_require__(5);

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }

  module.exports = isKey;

  /***/
},
/* 31 */
/***/function (module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function (global) {
    /** Detect free variable `global` from Node.js. */
    var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

    module.exports = freeGlobal;

    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(32));

  /***/
},
/* 32 */
/***/function (module, exports) {

  var g;

  // This works in non-strict mode
  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;

  /***/
},
/* 33 */
/***/function (module, exports, __webpack_require__) {

  var _Symbol3 = __webpack_require__(6);

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol3 ? _Symbol3.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  module.exports = getRawTag;

  /***/
},
/* 34 */
/***/function (module, exports) {

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  module.exports = objectToString;

  /***/
},
/* 35 */
/***/function (module, exports) {

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
  }

  module.exports = isObjectLike;

  /***/
},
/* 36 */
/***/function (module, exports, __webpack_require__) {

  var memoizeCapped = __webpack_require__(37);

  /** Used to match property names within property paths. */
  var reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function (string) {
    var result = [];
    if (reLeadingDot.test(string)) {
      result.push('');
    }
    string.replace(rePropName, function (match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });

  module.exports = stringToPath;

  /***/
},
/* 37 */
/***/function (module, exports, __webpack_require__) {

  var memoize = __webpack_require__(38);

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  module.exports = memoizeCapped;

  /***/
},
/* 38 */
/***/function (module, exports, __webpack_require__) {

  var MapCache = __webpack_require__(39);

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function memoized() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  module.exports = memoize;

  /***/
},
/* 39 */
/***/function (module, exports, __webpack_require__) {

  var mapCacheClear = __webpack_require__(40),
      mapCacheDelete = __webpack_require__(60),
      mapCacheGet = __webpack_require__(62),
      mapCacheHas = __webpack_require__(63),
      mapCacheSet = __webpack_require__(64);

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  module.exports = MapCache;

  /***/
},
/* 40 */
/***/function (module, exports, __webpack_require__) {

  var Hash = __webpack_require__(41),
      ListCache = __webpack_require__(53),
      Map = __webpack_require__(59);

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map || ListCache)(),
      'string': new Hash()
    };
  }

  module.exports = mapCacheClear;

  /***/
},
/* 41 */
/***/function (module, exports, __webpack_require__) {

  var hashClear = __webpack_require__(42),
      hashDelete = __webpack_require__(49),
      hashGet = __webpack_require__(50),
      hashHas = __webpack_require__(51),
      hashSet = __webpack_require__(52);

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  module.exports = Hash;

  /***/
},
/* 42 */
/***/function (module, exports, __webpack_require__) {

  var nativeCreate = __webpack_require__(1);

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  module.exports = hashClear;

  /***/
},
/* 43 */
/***/function (module, exports, __webpack_require__) {

  var isFunction = __webpack_require__(44),
      isMasked = __webpack_require__(45),
      isObject = __webpack_require__(9),
      toSource = __webpack_require__(47);

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  module.exports = baseIsNative;

  /***/
},
/* 44 */
/***/function (module, exports, __webpack_require__) {

  var baseGetTag = __webpack_require__(13),
      isObject = __webpack_require__(9);

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  module.exports = isFunction;

  /***/
},
/* 45 */
/***/function (module, exports, __webpack_require__) {

  var coreJsData = __webpack_require__(46);

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  module.exports = isMasked;

  /***/
},
/* 46 */
/***/function (module, exports, __webpack_require__) {

  var root = __webpack_require__(7);

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  module.exports = coreJsData;

  /***/
},
/* 47 */
/***/function (module, exports) {

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  module.exports = toSource;

  /***/
},
/* 48 */
/***/function (module, exports) {

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  module.exports = getValue;

  /***/
},
/* 49 */
/***/function (module, exports) {

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  module.exports = hashDelete;

  /***/
},
/* 50 */
/***/function (module, exports, __webpack_require__) {

  var nativeCreate = __webpack_require__(1);

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  module.exports = hashGet;

  /***/
},
/* 51 */
/***/function (module, exports, __webpack_require__) {

  var nativeCreate = __webpack_require__(1);

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  module.exports = hashHas;

  /***/
},
/* 52 */
/***/function (module, exports, __webpack_require__) {

  var nativeCreate = __webpack_require__(1);

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  module.exports = hashSet;

  /***/
},
/* 53 */
/***/function (module, exports, __webpack_require__) {

  var listCacheClear = __webpack_require__(54),
      listCacheDelete = __webpack_require__(55),
      listCacheGet = __webpack_require__(56),
      listCacheHas = __webpack_require__(57),
      listCacheSet = __webpack_require__(58);

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  module.exports = ListCache;

  /***/
},
/* 54 */
/***/function (module, exports) {

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  module.exports = listCacheClear;

  /***/
},
/* 55 */
/***/function (module, exports, __webpack_require__) {

  var assocIndexOf = __webpack_require__(2);

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  module.exports = listCacheDelete;

  /***/
},
/* 56 */
/***/function (module, exports, __webpack_require__) {

  var assocIndexOf = __webpack_require__(2);

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  module.exports = listCacheGet;

  /***/
},
/* 57 */
/***/function (module, exports, __webpack_require__) {

  var assocIndexOf = __webpack_require__(2);

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  module.exports = listCacheHas;

  /***/
},
/* 58 */
/***/function (module, exports, __webpack_require__) {

  var assocIndexOf = __webpack_require__(2);

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  module.exports = listCacheSet;

  /***/
},
/* 59 */
/***/function (module, exports, __webpack_require__) {

  var getNative = __webpack_require__(8),
      root = __webpack_require__(7);

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map');

  module.exports = Map;

  /***/
},
/* 60 */
/***/function (module, exports, __webpack_require__) {

  var getMapData = __webpack_require__(3);

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  module.exports = mapCacheDelete;

  /***/
},
/* 61 */
/***/function (module, exports) {

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  module.exports = isKeyable;

  /***/
},
/* 62 */
/***/function (module, exports, __webpack_require__) {

  var getMapData = __webpack_require__(3);

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  module.exports = mapCacheGet;

  /***/
},
/* 63 */
/***/function (module, exports, __webpack_require__) {

  var getMapData = __webpack_require__(3);

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  module.exports = mapCacheHas;

  /***/
},
/* 64 */
/***/function (module, exports, __webpack_require__) {

  var getMapData = __webpack_require__(3);

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  module.exports = mapCacheSet;

  /***/
},
/* 65 */
/***/function (module, exports, __webpack_require__) {

  var baseToString = __webpack_require__(66);

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  module.exports = toString;

  /***/
},
/* 66 */
/***/function (module, exports, __webpack_require__) {

  var _Symbol4 = __webpack_require__(6),
      arrayMap = __webpack_require__(67),
      isArray = __webpack_require__(4),
      isSymbol = __webpack_require__(5);

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol4 ? _Symbol4.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isArray(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  module.exports = baseToString;

  /***/
},
/* 67 */
/***/function (module, exports) {

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  module.exports = arrayMap;

  /***/
},
/* 68 */
/***/function (module, exports, __webpack_require__) {

  var baseSet = __webpack_require__(69);

  /**
   * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
   * it's created. Arrays are created for missing index properties while objects
   * are created for all other missing properties. Use `_.setWith` to customize
   * `path` creation.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.set(object, 'a[0].b.c', 4);
   * console.log(object.a[0].b.c);
   * // => 4
   *
   * _.set(object, ['x', '0', 'y', 'z'], 5);
   * console.log(object.x[0].y.z);
   * // => 5
   */
  function set(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
  }

  module.exports = set;

  /***/
},
/* 69 */
/***/function (module, exports, __webpack_require__) {

  var assignValue = __webpack_require__(70),
      castPath = __webpack_require__(12),
      isIndex = __webpack_require__(73),
      isObject = __webpack_require__(9),
      toKey = __webpack_require__(15);

  /**
   * The base implementation of `_.set`.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {Array|string} path The path of the property to set.
   * @param {*} value The value to set.
   * @param {Function} [customizer] The function to customize path creation.
   * @returns {Object} Returns `object`.
   */
  function baseSet(object, path, value, customizer) {
    if (!isObject(object)) {
      return object;
    }
    path = castPath(path, object);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        nested = object;

    while (nested != null && ++index < length) {
      var key = toKey(path[index]),
          newValue = value;

      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : undefined;
        if (newValue === undefined) {
          newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
      }
      assignValue(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }

  module.exports = baseSet;

  /***/
},
/* 70 */
/***/function (module, exports, __webpack_require__) {

  var baseAssignValue = __webpack_require__(71),
      eq = __webpack_require__(14);

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }

  module.exports = assignValue;

  /***/
},
/* 71 */
/***/function (module, exports, __webpack_require__) {

  var defineProperty = __webpack_require__(72);

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  module.exports = baseAssignValue;

  /***/
},
/* 72 */
/***/function (module, exports, __webpack_require__) {

  var getNative = __webpack_require__(8);

  var defineProperty = function () {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();

  module.exports = defineProperty;

  /***/
},
/* 73 */
/***/function (module, exports) {

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  module.exports = isIndex;

  /***/
},
/* 74 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }(); // import record from './mock';


  var _production = __webpack_require__(75);

  var _production2 = _interopRequireDefault(_production);

  var _Record = __webpack_require__(10);

  var _Record2 = _interopRequireDefault(_Record);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function generateList(item, key) {
    var list = [];
    var max = 200;
    for (var i = 0; i < max; i++) {
      (function (index) {
        item.id = 'aW' + index;
        list.push(item);
      })(i);
    }
    return list;
  }

  function generateRecord(item, key) {
    var newItem = Object.assign({}, item);
    newItem.id = key;
    return newItem;
  }

  // const theList = [
  //   generateRecord(record, 0),
  //   generateRecord(record, 1),
  //   generateRecord(record, 2),
  // ];

  var theList = _production2.default;

  var Records = function () {
    function Records(records) {
      _classCallCheck(this, Records);

      this.list = records;
    }

    _createClass(Records, [{
      key: 'getAll',
      value: function getAll() {
        return this.list;
      }
    }, {
      key: 'getARecord',
      value: function getARecord(recordId) {
        var resultList = this.list.filter(function (item) {
          return item.id === recordId;
        });

        return resultList.length === 1 ? resultList[0] : new _Record2.default();
      }
    }]);

    return Records;
  }();

  exports.default = Records;

  /***/
},
/* 75 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Record = __webpack_require__(10);

  var _Record2 = _interopRequireDefault(_Record);

  var _content = __webpack_require__(16);

  var _content2 = _interopRequireDefault(_content);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = [new _Record2.default('a0', //id
  'interest', //title
  'west-interest', //appRouteCustom
  '', //appRouteDefault
  //tags
  ['ribaa', 'interest', 'west', 'Ahmed al-Wasaabee'],
  //references
  [{
    url: 'https://google.com/interest',
    note: ''
  }],
  //collectedBy
  [{
    userId: '0',
    date: 1512795251600
  }]), new _Record2.default('a1', //id
  'whom', //title
  'whom', //appRouteCustom
  '', //appRouteDefault
  //tags
  ['advise'],
  //references
  [{
    url: 'http://www.google.com/whom',
    note: ''
  }],
  //collectedBy
  [{
    userId: '0',
    date: 0
  }],
  //cached content
  _content2.default.a1)];

  /***/
},
/* 76 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AppRoute = function AppRoute() {
    var routeCustom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var routeDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, AppRoute);

    return {
      custom: routeCustom,
      default: routeDefault
    };
  };

  exports.default = AppRoute;
  ;

  /***/
},
/* 77 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Reference = function Reference() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var note = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Reference);

    return {
      url: url,
      note: note
    };
  };

  exports.default = Reference;
  ;

  /***/
},
/* 78 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CollectedBy = function CollectedBy() {
    var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, CollectedBy);

    return {
      userId: userId,
      date: date
    };
  };

  exports.default = CollectedBy;
  ;

  /***/
},
/* 79 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _content = __webpack_require__(16);

  var _content2 = _interopRequireDefault(_content);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var CachedContent = function CachedContent(recordId) {
    _classCallCheck(this, CachedContent);

    return {
      content: _content2.default[recordId] || '',
      collectedByUserId: '',
      collectedTime: 0
    } || {
      content: '',
      collectedByUserId: '',
      collectedTime: 0
    };
  };

  exports.default = CachedContent;
  ;

  /***/
},
/* 80 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = "a lot of content for a1";

  /***/
},
/* 81 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _getRandomId = __webpack_require__(0);

  var _getRandomId2 = _interopRequireDefault(_getRandomId);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Person = function () {
    function Person(_ref) {
      var _ref$firstName = _ref.firstName,
          firstName = _ref$firstName === undefined ? 'Annoymous' : _ref$firstName,
          _ref$middleName = _ref.middleName,
          middleName = _ref$middleName === undefined ? '' : _ref$middleName,
          _ref$lastName = _ref.lastName,
          lastName = _ref$lastName === undefined ? '' : _ref$lastName,
          _ref$nickName = _ref.nickName,
          nickName = _ref$nickName === undefined ? '' : _ref$nickName,
          _ref$birth = _ref.birth,
          birth = _ref$birth === undefined ? '' : _ref$birth;

      _classCallCheck(this, Person);

      this.properties = {
        id: (0, _getRandomId2.default)(),
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        nickName: nickName,
        birth: birth //{day, month, year, country, city}
      };
    }

    _createClass(Person, [{
      key: 'getAll',
      value: function getAll() {
        return this.properties;
      }
    }]);

    return Person;
  }();

  exports.default = Person;

  /***/
},
/* 82 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Log = function () {
    function Log(_ref) {
      var _ref$createdBy = _ref.createdBy,
          createdBy = _ref$createdBy === undefined ? 'annonymous' : _ref$createdBy,
          _ref$createdDate = _ref.createdDate,
          createdDate = _ref$createdDate === undefined ? 0 : _ref$createdDate,
          _ref$lastEditedBy = _ref.lastEditedBy,
          lastEditedBy = _ref$lastEditedBy === undefined ? 'annonymous' : _ref$lastEditedBy,
          _ref$lastEditedDate = _ref.lastEditedDate,
          lastEditedDate = _ref$lastEditedDate === undefined ? 0 : _ref$lastEditedDate,
          _ref$approvedByList = _ref.approvedByList,
          approvedByList = _ref$approvedByList === undefined ? [{
        userId: 0,
        time: 0
      }] : _ref$approvedByList;

      _classCallCheck(this, Log);

      this.properties = {
        createdBy: createdBy,
        createdDate: createdDate,
        lastEditedBy: lastEditedBy,
        lastEditedDate: lastEditedDate,
        approvedByList: approvedByList
      };
    }

    _createClass(Log, [{
      key: 'getAll',
      value: function getAll() {
        return this.properties;
      }
    }]);

    return Log;
  }();

  exports.default = Log;

  /***/
},
/* 83 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _getRandomId = __webpack_require__(0);

  var _getRandomId2 = _interopRequireDefault(_getRandomId);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Location = function () {
    function Location(_ref) {
      var _ref$longitude = _ref.longitude,
          longitude = _ref$longitude === undefined ? 0 : _ref$longitude,
          _ref$latitude = _ref.latitude,
          latitude = _ref$latitude === undefined ? 0 : _ref$latitude,
          _ref$address = _ref.address,
          address = _ref$address === undefined ? '' : _ref$address,
          _ref$city = _ref.city,
          city = _ref$city === undefined ? '' : _ref$city,
          _ref$state = _ref.state,
          state = _ref$state === undefined ? '' : _ref$state,
          _ref$zipcode = _ref.zipcode,
          zipcode = _ref$zipcode === undefined ? '' : _ref$zipcode,
          _ref$country = _ref.country,
          country = _ref$country === undefined ? '' : _ref$country,
          _ref$tags = _ref.tags,
          tags = _ref$tags === undefined ? [] : _ref$tags;

      _classCallCheck(this, Location);

      this.properties = {
        id: (0, _getRandomId2.default)(),
        longitude: longitude,
        latitude: latitude,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        country: country,
        tags: tags
      };
    }

    _createClass(Location, [{
      key: 'getAll',
      value: function getAll() {
        return this.properties;
      }
    }]);

    return Location;
  }();

  exports.default = Location;

  /***/
},
/* 84 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Collection = function Collection(listData, Object) {
    _classCallCheck(this, Collection);

    if (listData && Object) {
      return listData.map(function (item) {
        return Object(item);
      });
    }

    if (listData && !Object) {
      return listData;
    }
  };

  exports.default = Collection;

  /***/
},
/* 85 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _getRandomId = __webpack_require__(0);

  var _getRandomId2 = _interopRequireDefault(_getRandomId);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SocialNetworkAccount = function () {
    function SocialNetworkAccount(_ref) {
      var name = _ref.name,
          url = _ref.url;

      _classCallCheck(this, SocialNetworkAccount);

      this.properties = {
        name: name,
        url: url
      };
    }

    _createClass(SocialNetworkAccount, [{
      key: 'getAll',
      value: function getAll() {
        return this.properties;
      }
    }]);

    return SocialNetworkAccount;
  }();

  exports.default = SocialNetworkAccount;

  /***/
},
/* 86 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _getRandomId = __webpack_require__(0);

  var _getRandomId2 = _interopRequireDefault(_getRandomId);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Snapshot = function () {
    function Snapshot(_ref) {
      var _ref$name = _ref.name,
          name = _ref$name === undefined ? '' : _ref$name,
          _ref$url = _ref.url,
          url = _ref$url === undefined ? '' : _ref$url;

      _classCallCheck(this, Snapshot);

      this.properties = {
        id: (0, _getRandomId2.default)(),
        name: name,
        url: url
      };
    }

    _createClass(Snapshot, [{
      key: 'getAll',
      value: function getAll() {
        return this.properties;
      }
    }]);

    return Snapshot;
  }();

  exports.default = Snapshot;

  /***/
},
/* 87 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getGoogleMapUrl;

  var _getGoogleMapQuery = __webpack_require__(17);

  var _getGoogleMapQuery2 = _interopRequireDefault(_getGoogleMapQuery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function getGoogleMapUrl() {
    var locationName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var city = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var zipcode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var query = (0, _getGoogleMapQuery2.default)(locationName, city, state, zipcode);
    return 'https://www.google.com/maps/search/?api=1&query=' + query;
  }

  /***/
},
/* 88 */
/***/function (module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getRoute;
  function getRoute(name, createdDate) {
    var routeName = name.replace(/[^A-Z0-9]/ig, "-");
    return routeName + "-" + createdDate;
  }

  /***/
}]
/******/));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(54);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(122),
    getValue = __webpack_require__(128);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _capToCamelCase = __webpack_require__(47);

var _capToCamelCase2 = _interopRequireDefault(_capToCamelCase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = function setComponentWrapperContainerClasses() {
  var componentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return (0, _capToCamelCase2.default)(componentName) || componentName || '';
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    getRawTag = __webpack_require__(124),
    objectToString = __webpack_require__(125);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(57),
    baseAssignValue = __webpack_require__(58);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(112),
    listCacheDelete = __webpack_require__(113),
    listCacheGet = __webpack_require__(114),
    listCacheHas = __webpack_require__(115),
    listCacheSet = __webpack_require__(116);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(52);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(137);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(211);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(214);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["default"])(a.state, b.state);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ezSiteContentStore = __webpack_require__(7);

var _getGridItem = __webpack_require__(291);

var _getGridItem2 = _interopRequireDefault(_getGridItem);

var _MobileMenuRouteEnabled = __webpack_require__(88);

var _MobileMenuRouteEnabled2 = _interopRequireDefault(_MobileMenuRouteEnabled);

var _FooterBar = __webpack_require__(95);

var _FooterBar2 = _interopRequireDefault(_FooterBar);

var _MenuBarNewRouteEnabled = __webpack_require__(86);

var _MenuBarNewRouteEnabled2 = _interopRequireDefault(_MenuBarNewRouteEnabled);

var _menu = __webpack_require__(337);

var _SlideShow = __webpack_require__(338);

var _SlideShow2 = _interopRequireDefault(_SlideShow);

var _childrenPropTypes = __webpack_require__(96);

var _childrenPropTypes2 = _interopRequireDefault(_childrenPropTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function showLogoBar() {
  var LOGO_BAR_ID = 9;
  return (0, _getGridItem2.default)(LOGO_BAR_ID);
}

function showFooterBar() {
  var footerSocialIcons = _ezSiteContentStore.ContentSynchronizer.getProperty('footer', 'socialIcons', []);
  return _react2.default.createElement(_FooterBar2.default, {
    socialIcons: footerSocialIcons
  });
}

function showSlides() {
  var slides = _ezSiteContentStore.ContentSynchronizer.getCollection('banners');
  return _react2.default.createElement(_SlideShow2.default, { slides: slides });
}

function showNotificationBar() {
  var NOTIFICATION_BAR_GRID_ITEM_ID = 1;
  return (0, _getGridItem2.default)(NOTIFICATION_BAR_GRID_ITEM_ID);
}

function showMenuBar() {
  var items = (0, _menu.buildMenuItems)(2);
  return _react2.default.createElement(_MenuBarNewRouteEnabled2.default, {
    customStyles: {
      marginTop: '16px',
      marginBottom: '16px'
    },
    menuItems: items
  });
}

var PageShell = function (_Component) {
  _inherits(PageShell, _Component);

  function PageShell(props) {
    _classCallCheck(this, PageShell);

    var _this = _possibleConstructorReturn(this, (PageShell.__proto__ || Object.getPrototypeOf(PageShell)).call(this, props));

    _this.state = {
      menuItems: {
        tags: [],
        main: [],
        sub: []
      }
    };
    return _this;
  }

  _createClass(PageShell, [{
    key: 'showSubMenuBar',
    value: function showSubMenuBar() {
      // start move away from grid reference matrix!
      // reason: way too deep reference complicate work
      // const SUB_MENU_BAR_GRID_ITEM_ID = 6;
      // return getGridItem(SUB_MENU_BAR_GRID_ITEM_ID);
      var items = (0, _menu.buildProductMenuItems)(10).sort(function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        if (textA < textB) {
          return -1;
        } else if (textA > textB) {
          return 1;
        }
        return 0;
      });
      // console.log(items)
      return _react2.default.createElement(_MenuBarNewRouteEnabled2.default, {
        customStyles: {
          marginTop: '24px',
          marginBottom: '24px'
        },
        menuItems: items,
        scrollToHere: this.props.anchorToBelow === 'sub-menu-bar'
      });
    }
  }, {
    key: 'showMobileMenu',
    value: function showMobileMenu() {
      var site = _ezSiteContentStore.ContentSynchronizer.getCollection('site');
      var siteName = site.siteName.casual;
      var baseTag = site.baseTag;

      return _react2.default.createElement(_MobileMenuRouteEnabled2.default, {
        siteName: siteName,
        baseTag: baseTag,
        filterItems: this.state.menuItems.tags,
        menuItems: this.state.menuItems.main,
        subMenuItems: this.state.menuItems.sub
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          hasSlides = _props.hasSlides;
      var _props2 = this.props,
          style = _props2.style,
          containerLevelStyle = _props2.containerLevelStyle;

      if (!style) {
        style = {
          container: {
            classes: []
          }
        };
      }

      // NOTE: So far diff between PageShell and ComponentWrapper
      // is the row class name!!!(at that time, since then there were lots done)
      containerLevelStyle = containerLevelStyle || 'page__container row no-gutters';
      return _react2.default.createElement('section', { className: containerLevelStyle, style: style }, showNotificationBar(), this.showMobileMenu(), showMenuBar(), showLogoBar(), this.showSubMenuBar(), hasSlides ? showSlides() : null, children, showFooterBar());
    }
  }]);

  return PageShell;
}(_react.Component);

exports.default = PageShell;

PageShell.propTypes = {
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  hasSlides: _propTypes2.default.bool,
  anchorToBelow: _propTypes2.default.string,
  children: _childrenPropTypes2.default.isRequired,
  containerLevelStyle: _propTypes2.default.string
};

PageShell.defaultProps = {
  style: {},
  hasSlides: false,
  anchorToBelow: '',
  containerLevelStyle: ''
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GridItem;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _getGridComponent = __webpack_require__(292);

var _getGridComponent2 = _interopRequireDefault(_getGridComponent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function GridItem() {
  var GridComponent = (0, _getGridComponent2.default)(this.props.gridComponent, this.props.gridContent, this.props.gridType);
  var responsive = this.props.gridResponsiveProperties;
  var standard = responsive.standard || '';
  var xs = responsive.xs || '';
  var sm = responsive.sm || '';
  var md = responsive.md || '';
  var lg = responsive.lg || '';
  var xl = responsive.xl || '';
  var offset = responsive.offset || {
    standard: '',
    sm: '',
    md: '',
    lg: '',
    xl: ''
  };

  return _react2.default.createElement(_reactstrap.Col, {
    size: standard,
    xs: {
      size: xs || '',
      offset: offset.xs || ''
    },
    sm: {
      size: sm || '',
      offset: offset.sm || ''
    },
    md: {
      size: md || '',
      offset: offset.md || ''
    },
    lg: {
      size: lg || '',
      offset: offset.lg || ''
    },
    xl: {
      size: xl || '',
      offset: offset.xl || ''
    }
  }, GridComponent);
}
/* eslint-disable */
GridItem.propTypes = {
  gridComponent: _propTypes2.default.any.isRequired,
  gridContent: _propTypes2.default.any,
  gridResponsiveProperties: _propTypes2.default.object.isRequired,
  gridStyle: _propTypes2.default.any,
  gridCustomStyle: _propTypes2.default.any,
  gridType: _propTypes2.default.any
};
/* eslint-enable */

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = consoleShow;
/* eslint-disable */
function consoleShow(type, data, isDisabled) {
  if (type && !data && !isDisabled) {
    var dataInstead = type;
    console.log(dataInstead);
  }
  // const disabled = isDisabled;
  var disabled = true;
  if (disabled) return;
  switch (type) {
    case 'props':
      console.log('----------------- ' + data.componentName + '  has PROPS-----------------');
      console.log(data.props);
      break;
    case 'line':
      console.log('.................... a line for ' + data.name + ' ............');
      console.log(data.object);
      break;
    default:
      console.log('==== default log ====');
      console.log(type);
      console.log(data);
      break;
  }
}
/* eslint-enable */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(60),
    baseKeys = __webpack_require__(149),
    isArrayLike = __webpack_require__(65);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(54);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(157),
    stubArray = __webpack_require__(67);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(64);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(160),
    Map = __webpack_require__(28),
    Promise = __webpack_require__(161),
    Set = __webpack_require__(162),
    WeakMap = __webpack_require__(163),
    baseGetTag = __webpack_require__(13),
    toSource = __webpack_require__(55);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(166);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isKey = __webpack_require__(178),
    stringToPath = __webpack_require__(179),
    toString = __webpack_require__(182);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(74);

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(75);

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__(44);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capToCamelCase;
function capToCamelCase() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!text || typeof text !== 'string' || !text.length) {
    return '';
  }
  return '' + text[0].toLowerCase() + text.substring(1);
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _omit = __webpack_require__(50);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import Input, { InputLabel } from 'material-ui/Input';
// import { FormControl } from 'material-ui/Form';
function FormInput(props) {
  var id = props.id,
      title = props.title;

  var inputProps = (0, _omit2.default)(props, ['id', 'title']);
  return _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Label, {
    htmlFor: id
  }, title), _react2.default.createElement(_reactstrap.Input, inputProps));
}

FormInput.propTypes = {
  id: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.string,
  name: _propTypes2.default.string,
  type: _propTypes2.default.string,
  placeholder: _propTypes2.default.string
};

FormInput.defaultProps = {
  id: '',
  title: '',
  name: 'aTestInputField',
  value: '',
  type: 'text',
  placeholder: 'your text here'
};

exports.default = FormInput;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(51),
    baseClone = __webpack_require__(110),
    baseUnset = __webpack_require__(177),
    castPath = __webpack_require__(39),
    copyObject = __webpack_require__(16),
    customOmitClone = __webpack_require__(187),
    flatRest = __webpack_require__(189),
    getAllKeysIn = __webpack_require__(70);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObject = __webpack_require__(15);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(123)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(129),
    mapCacheDelete = __webpack_require__(136),
    mapCacheGet = __webpack_require__(138),
    mapCacheHas = __webpack_require__(139),
    mapCacheSet = __webpack_require__(140);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(58),
    eq = __webpack_require__(52);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(59);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(143),
    isArguments = __webpack_require__(61),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(62),
    isIndex = __webpack_require__(146),
    isTypedArray = __webpack_require__(147);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(144),
    isObjectLike = __webpack_require__(10);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(8),
    stubFalse = __webpack_require__(145);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 63 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(53),
    isLength = __webpack_require__(63);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(60),
    baseKeysIn = __webpack_require__(152),
    isArrayLike = __webpack_require__(65);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(35),
    getPrototype = __webpack_require__(36),
    getSymbols = __webpack_require__(34),
    stubArray = __webpack_require__(67);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(35),
    isArray = __webpack_require__(11);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(69),
    getSymbolsIn = __webpack_require__(68),
    keysIn = __webpack_require__(66);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(39),
    toKey = __webpack_require__(72);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(40);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactForm;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyledComponentWrapper = __webpack_require__(200);

var _StyledComponentWrapper2 = _interopRequireDefault(_StyledComponentWrapper);

var _ContactFormContainer = __webpack_require__(201);

var _ContactFormContainer2 = _interopRequireDefault(_ContactFormContainer);

var _ContactFormLegend = __webpack_require__(202);

var _ContactFormLegend2 = _interopRequireDefault(_ContactFormLegend);

var _ContactFormInput = __webpack_require__(203);

var _ContactFormInput2 = _interopRequireDefault(_ContactFormInput);

var _ContactFormTextarea = __webpack_require__(204);

var _ContactFormTextarea2 = _interopRequireDefault(_ContactFormTextarea);

var _ContactFormSubmitButton = __webpack_require__(205);

var _ContactFormSubmitButton2 = _interopRequireDefault(_ContactFormSubmitButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ContactForm(props) {
  var receiverEmail = props.receiverEmail;

  return _react2.default.createElement(_StyledComponentWrapper2.default, null, _react2.default.createElement(_ContactFormContainer2.default, {
    action: 'https://formspree.io/' + receiverEmail,
    method: 'POST'
  }, _react2.default.createElement(_ContactFormLegend2.default, { gridAreaId: 'name' }, 'Name'), _react2.default.createElement(_ContactFormInput2.default, {
    gridAreaId: 'first-name',
    name: 'customerFirstName',
    placeholder: 'First Name'
  }), _react2.default.createElement(_ContactFormInput2.default, {
    responsive: true,
    gridAreaId: 'last-name',
    name: 'customerLastName',
    placeholder: 'Last Name'
  }), _react2.default.createElement(_ContactFormLegend2.default, { gridAreaId: 'email' }, 'Email'), _react2.default.createElement(_ContactFormInput2.default, {
    name: 'customerEmail',
    gridAreaId: 'email',
    type: 'email',
    placeholder: 'i.e. youremail@gmail.com'
  }), _react2.default.createElement(_ContactFormLegend2.default, { gridAreaId: 'phone' }, 'Phone'), _react2.default.createElement(_ContactFormInput2.default, {
    name: 'customerPhone',
    gridAreaId: 'phone',
    type: 'tel',
    placeholder: 'i.e. 3470000000'
  }), _react2.default.createElement(_ContactFormLegend2.default, { gridAreaId: 'message' }, 'Message'), _react2.default.createElement(_ContactFormTextarea2.default, {
    gridAreaId: 'message',
    name: 'message',
    placeholder: 'please send us as much detail as possible. We appreciate your support'
  }), _react2.default.createElement(_ContactFormSubmitButton2.default, { type: 'submit', value: 'Send' })));
}

ContactForm.propTypes = {
  receiverEmail: _propTypes2.default.string
};

ContactForm.defaultProps = {
  receiverEmail: 'support@naturalorchards.us'
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Link> outside a <Router>');

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__(79);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(45);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null : null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CatalogItem;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _get = __webpack_require__(82);

var _get2 = _interopRequireDefault(_get);

var _SnapshotDisplay = __webpack_require__(83);

var _SnapshotDisplay2 = _interopRequireDefault(_SnapshotDisplay);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CatalogItem(props) {
  var title = props.title,
      subTitle = props.subTitle,
      description = props.description,
      snapshots = props.snapshots;

  var image = (0, _get2.default)(snapshots, '[0]', {});
  var url = image.url,
      name = image.name;

  return _react2.default.createElement(_reactstrap.Card, null, _react2.default.createElement(_SnapshotDisplay2.default, {
    snapshotSrc: url,
    alt: name
  }), _react2.default.createElement(_reactstrap.CardBody, null, _react2.default.createElement(_reactstrap.CardTitle, null, title), _react2.default.createElement(_reactstrap.CardSubtitle, null, subTitle), _react2.default.createElement(_reactstrap.CardText, null, description)));
}

CatalogItem.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string,
  description: _propTypes2.default.string,
  snapshots: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

CatalogItem.defaultProps = {
  title: '',
  subTitle: '',
  description: '',
  snapshots: []
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(71);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SnapshotDisplay;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SnapshotContainer = __webpack_require__(233);

var _SnapshotContainer2 = _interopRequireDefault(_SnapshotContainer);

var _Snapshot = __webpack_require__(234);

var _Snapshot2 = _interopRequireDefault(_Snapshot);

var _TitleContainer = __webpack_require__(235);

var _TitleContainer2 = _interopRequireDefault(_TitleContainer);

var _Name = __webpack_require__(236);

var _Name2 = _interopRequireDefault(_Name);

var _Address = __webpack_require__(237);

var _Address2 = _interopRequireDefault(_Address);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function SnapshotDisplay(props) {
  var title = props.title,
      displayLocation = props.displayLocation,
      snapshotSrc = props.snapshotSrc;

  return _react2.default.createElement(_SnapshotContainer2.default, null, title || displayLocation ? _react2.default.createElement(_TitleContainer2.default, null, _react2.default.createElement(_Name2.default, null, title), _react2.default.createElement(_Address2.default, null, displayLocation)) : null, _react2.default.createElement(_Snapshot2.default, { src: snapshotSrc }));
}

SnapshotDisplay.propTypes = {
  title: _propTypes2.default.string,
  displayLocation: _propTypes2.default.string,
  snapshotSrc: _propTypes2.default.string
};

SnapshotDisplay.defaultProps = {
  title: '',
  displayLocation: '',
  snapshotSrc: ''
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShareButtonsBar;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactShare = __webpack_require__(242);

var _Container = __webpack_require__(243);

var _Container2 = _interopRequireDefault(_Container);

var _IconHolder = __webpack_require__(244);

var _IconHolder2 = _interopRequireDefault(_IconHolder);

var _LinkIconContainer = __webpack_require__(245);

var _LinkIconContainer2 = _interopRequireDefault(_LinkIconContainer);

var _getWindow = __webpack_require__(85);

var _getWindow2 = _interopRequireDefault(_getWindow);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var setComponentWrapperContainerClasses = __webpack_require__(12);

function ShareButtonsBar(props) {
  var style = props.style,
      sharedImageUrl = props.sharedImageUrl,
      sharedDescriptionText = props.sharedDescriptionText,
      hashtags = props.hashtags,
      sharedTitle = props.sharedTitle,
      homeLink = props.homeLink;
  var FacebookShareButton = _reactShare.ShareButtons.FacebookShareButton,
      TwitterShareButton = _reactShare.ShareButtons.TwitterShareButton,
      PinterestShareButton = _reactShare.ShareButtons.PinterestShareButton;

  var COMPONENT_NAME = 'ShareButtonsBar';
  var containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

  var FacebookIcon = (0, _reactShare.generateShareIcon)('facebook');
  var TwitterIcon = (0, _reactShare.generateShareIcon)('twitter');
  var PinterestIcon = (0, _reactShare.generateShareIcon)('pinterest');
  var locationHref = (0, _getWindow2.default)() ? (0, _getWindow2.default)().location.href : '';
  var absoluteUrl = '' + locationHref + sharedImageUrl;

  // const {
  //   spreaker,
  //   mixler,
  // } = moreLink;

  return _react2.default.createElement(_Container2.default, {
    hasMarginBottom: true,
    componentName: containerName,
    gridAreaId: '',
    style: style
  }, homeLink ? _react2.default.createElement(_IconHolder2.default, { style: { backgroundColor: '#11111108' } }, _react2.default.createElement(_LinkIconContainer2.default, { href: homeLink }, _react2.default.createElement('a', { href: homeLink }))) : null, _react2.default.createElement(_IconHolder2.default, null, _react2.default.createElement(FacebookShareButton, {
    url: locationHref,
    quote: sharedTitle
  }, _react2.default.createElement(FacebookIcon, { size: 32 }))), _react2.default.createElement(_IconHolder2.default, null, _react2.default.createElement(TwitterShareButton, { url: locationHref }, _react2.default.createElement(TwitterIcon, { size: 32 }))), _react2.default.createElement(_IconHolder2.default, null, _react2.default.createElement(PinterestShareButton, {
    url: locationHref,
    description: sharedDescriptionText,
    media: absoluteUrl,
    hashtags: hashtags
  }, _react2.default.createElement(PinterestIcon, { size: 32 }))));
}

ShareButtonsBar.propTypes = {
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  sharedImageUrl: _propTypes2.default.string,
  sharedDescriptionText: _propTypes2.default.string,
  hashtags: _propTypes2.default.string,
  sharedTitle: _propTypes2.default.string,
  homeLink: _propTypes2.default.string
  // moreLink: PropTypes.objectOf(PropTypes.object),
};

ShareButtonsBar.defaultProps = {
  style: {},
  sharedImageUrl: '',
  sharedDescriptionText: '',
  hashtags: '',
  sharedTitle: '',
  homeLink: ''
  // moreLink: {},
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getWindow() {
  var window = window || null; //eslint-disable-line
  var cachedWindow = window || null;

  return cachedWindow;
}

exports.default = getWindow;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(246);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Container = __webpack_require__(247);

var _Container2 = _interopRequireDefault(_Container);

var _MenuItemBox = __webpack_require__(248);

var _MenuItemBox2 = _interopRequireDefault(_MenuItemBox);

var _MenuItemLink = __webpack_require__(249);

var _MenuItemLink2 = _interopRequireDefault(_MenuItemLink);

var _scrollToDom = __webpack_require__(87);

var _scrollToDom2 = _interopRequireDefault(_scrollToDom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MenuBarNewRouteEnabled = function (_Component) {
  _inherits(MenuBarNewRouteEnabled, _Component);

  function MenuBarNewRouteEnabled() {
    _classCallCheck(this, MenuBarNewRouteEnabled);

    return _possibleConstructorReturn(this, (MenuBarNewRouteEnabled.__proto__ || Object.getPrototypeOf(MenuBarNewRouteEnabled)).apply(this, arguments));
  }

  _createClass(MenuBarNewRouteEnabled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dom = this;
      if (this.props.scrollToHere) {
        dom = _reactDom2.default.findDOMNode(this.MenuBarTop); //eslint-disable-line
        (0, _scrollToDom2.default)(dom, 100);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          menuItems = _props.menuItems,
          customStyles = _props.customStyles;

      var COMPONENT_NAME = 'MenuBarNewRouteEnabled';
      return _react2.default.createElement(_Container2.default, {
        style: customStyles,
        componentName: COMPONENT_NAME,
        ref: function ref(element) {
          _this2.MenuBarTop = element;
        },
        gridAreaId: ''
      }, menuItems.map(function (menuItem, index) {
        return _react2.default.createElement(_MenuItemBox2.default, { key: menuItem.id || index }, _react2.default.createElement(_MenuItemLink2.default, {
          to: menuItem.path
        }, menuItem.title));
      }));
    }
  }]);

  return MenuBarNewRouteEnabled;
}(_react.Component);

exports.default = MenuBarNewRouteEnabled;

MenuBarNewRouteEnabled.propTypes = {
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  customStyles: _propTypes2.default.objectOf(_propTypes2.default.any),
  scrollToHere: _propTypes2.default.bool
};

MenuBarNewRouteEnabled.defaultProps = {
  customStyles: {},
  scrollToHere: false
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollToDom;

var _getWindow = __webpack_require__(85);

var _getWindow2 = _interopRequireDefault(_getWindow);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function scrollToDom(dom, delayMs) {
  var delay = delayMs || 500;
  if (!dom && (0, _getWindow2.default)()) {
    (0, _getWindow2.default)().scrollTo(0, 0);
  } else {
    setTimeout(function () {
      var node = dom;
      if (node) {
        node.scrollIntoView({ behavior: 'smooth' });
      }
    }, delay);
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(250);

var _Container2 = _interopRequireDefault(_Container);

var _MenuToggleButton = __webpack_require__(251);

var _MenuToggleButton2 = _interopRequireDefault(_MenuToggleButton);

var _MenuButtonSpan = __webpack_require__(252);

var _MenuButtonSpan2 = _interopRequireDefault(_MenuButtonSpan);

var _TitleSpan = __webpack_require__(253);

var _TitleSpan2 = _interopRequireDefault(_TitleSpan);

var _menu = __webpack_require__(254);

var _EmptyStateHelperText = __webpack_require__(255);

var _EmptyStateHelperText2 = _interopRequireDefault(_EmptyStateHelperText);

var _DropDownMenu = __webpack_require__(256);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _MenuFilterItems = __webpack_require__(257);

var _MenuFilterItems2 = _interopRequireDefault(_MenuFilterItems);

var _MenuItems = __webpack_require__(264);

var _MenuItems2 = _interopRequireDefault(_MenuItems);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var setComponentWrapperContainerClasses = __webpack_require__(12);

var MobileMenuRouteEnabled = function (_Component) {
  _inherits(MobileMenuRouteEnabled, _Component);

  function MobileMenuRouteEnabled(props) {
    _classCallCheck(this, MobileMenuRouteEnabled);

    var _this = _possibleConstructorReturn(this, (MobileMenuRouteEnabled.__proto__ || Object.getPrototypeOf(MobileMenuRouteEnabled)).call(this, props));

    _this.state = { isOpen: false };
    _this.toggleAnimation = _this.toggleAnimation.bind(_this);
    return _this;
  }

  _createClass(MobileMenuRouteEnabled, [{
    key: 'toggleAnimation',
    value: function toggleAnimation() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          siteName = _props.siteName,
          isExpanded = _props.isExpanded,
          isCustomFilterItems = _props.isCustomFilterItems,
          isCustomMenuItems = _props.isCustomMenuItems;
      var _props2 = this.props,
          filterItems = _props2.filterItems,
          menuItems = _props2.menuItems;

      var isOpen = isExpanded || this.state.isOpen;
      var COMPONENT_NAME = 'MobileMenuRouteEnabled';
      var containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

      // was filter but now its becoming just specific items ONLY
      // filterItems = buildMenuFilterItems(6) || [];
      filterItems = !isCustomFilterItems ? (0, _menu.buildProductMenuItems)(10).sort(function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        if (textA < textB) {
          return -1;
        } else if (textA > textB) {
          return 1;
        }
        return 0;
      }) : filterItems;

      menuItems = !isCustomMenuItems ? (0, _menu.buildMenuItems)(2) : menuItems;

      return _react2.default.createElement(_Container2.default, {
        componentName: containerName,
        gridAreaId: '',
        style: {
          backgroundColor: '#212121',
          paddingTop: '14px'
        }
      }, _react2.default.createElement(_MenuToggleButton2.default, {
        componentName: 'menuToggleButton',
        onClick: this.toggleAnimation
      }, _react2.default.createElement(_MenuButtonSpan2.default, null, "\u2630")), _react2.default.createElement(_TitleSpan2.default, {
        gridAreaId: 'site-name-title',
        style: {
          textAlign: 'center',
          color: 'white',
          textTransform: 'uppercase'
        }
      }, siteName || 'My Website'), _react2.default.createElement(_DropDownMenu2.default, {
        isOpen: isOpen,
        componentName: 'collapsibleMenu'
      }, filterItems.length ? _react2.default.createElement(_MenuFilterItems2.default, {
        menuItems: filterItems,
        toggleMenu: this.toggleAnimation
      }) : null, menuItems.length ? _react2.default.createElement(_MenuItems2.default, {
        menuItems: menuItems,
        toggleMenu: this.toggleAnimation
      }) : _react2.default.createElement(_EmptyStateHelperText2.default, { color: 'white', fontSize: '25px' }, ' Lets add some menu items!')));
    }
  }]);

  return MobileMenuRouteEnabled;
}(_react.Component);

exports.default = MobileMenuRouteEnabled;

MobileMenuRouteEnabled.propTypes = {
  siteName: _propTypes2.default.string,
  filterItems: _propTypes2.default.arrayOf(_propTypes2.default.any),
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.any),
  isCustomFilterItems: _propTypes2.default.bool,
  isCustomMenuItems: _propTypes2.default.bool,
  isExpanded: _propTypes2.default.bool
};

MobileMenuRouteEnabled.defaultProps = {
  siteName: '',
  filterItems: [],
  menuItems: [],
  isCustomFilterItems: false,
  isCustomMenuItems: false,
  isExpanded: false
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function constructCollectionMenuItemConfig(item, collectionName, menuItemType, menuName) {
  switch (menuItemType) {
    case 'filter':
      {
        return {
          type: menuName,
          name: item,
          collectionName: collectionName,
          /* query: [
            {
              paramName: 'tag',
              paramValue: '',
            },
          ], */
          link: {
            name: item
          }
        };
      }
    default:
      return null;
  }
}

module.exports = function generateFilterItemsList(collection, collectionName, menuItemType, menuName, baseTag) {
  var list = [];
  switch (menuName) {
    case 'tags':
      {
        var tagsCollection = [];
        collection.forEach(function (collectionItem) {
          tagsCollection = tagsCollection.concat(collectionItem.tags);
        });
        var uniqueTags = tagsCollection.filter(function (v, i, a) {
          return a.indexOf(v) === i;
        });
        uniqueTags.map(function (tag) {
          var content = constructCollectionMenuItemConfig(tag, collectionName, menuItemType, menuName);
          var collectionPath = content.collectionName ? '/' + content.collectionName : '';
          var path = '' + baseTag + collectionPath + '/' + content.type + '/' + content.name;
          var title = content.link.name;

          list.push({
            path: path,
            title: title
          });
          return false;
        });
      }
      break;
    default:
      break;
  }
  return list;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ezSiteContentStore = __webpack_require__(7);

function constructMenuItem(menuItem, baseTag) {
  switch (menuItem.type) {
    case 'page':
      {
        var page = null;
        page = _ezSiteContentStore.ContentSynchronizer.getItem('pages', 'id', menuItem.content.pageId, true);

        var _page = page,
            path = _page.path,
            title = _page.title;

        return {
          path: '' + (baseTag ? '#' : '') + path,
          title: title
        };
      }
    case 'filter':
      {
        var collectionPath = menuItem.content.collectionName ? '/' + menuItem.content.collectionName : '';
        var _path = collectionPath + '/' + menuItem.content.type + '/' + menuItem.content.name;
        var _title = menuItem.content.link.name;
        return {
          path: '' + (baseTag ? '#' : '') + _path,
          title: _title
        };
      }
    default:
      throw Error('invalid menu type: ' + menuItem.type);
  }
}

module.exports = function generateMenuItemsList(menu, baseTag) {
  var list = [];

  var menuType = menu.menuType,
      menuItems = menu.menuItems;

  switch (menuType) {
    case 'custom':
      {
        menuItems.map(function (menuItem) {
          list.push(constructMenuItem(menuItem, baseTag));
          return true;
        });
        break;
      }
    default:
      {
        throw Error('menu type not found!');
      }
  }
  return list;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function generateProductItemsList(collection, collectionName, menuItemType, menuName, baseTag) {
  var list = [];
  switch (menuName) {
    case 'products-all-items':
      collection.forEach(function (collectionItem) {
        // console.log(collectionItem);
        var productRouteName = collectionItem.route.name;
        var path = baseTag + '/' + collectionName + '/detail/' + productRouteName;
        var title = collectionItem.shortTitle;
        list.push({
          path: path,
          title: title
        });
      });
      break;
    default:
      break;
  }
  return list;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyphenPattern = /-(.)/g;

/**
 * Convert a string to camel case.
 *
 * @param  {String} string - The string.
 * @return {String}
 */
function camelCase(string) {
    if (typeof string !== 'string') { // null is an object
        throw new TypeError('First argument must be a string');
    }
    if(string.indexOf('-') < 0) {
        return string;
    }
    return string.toLowerCase().replace(_hyphenPattern, function(_, character) {
        return character.toUpperCase();
    });
}

/**
 * Swap key with value in an object.
 *
 * @param  {Object}   obj        - The object.
 * @param  {Function} [override] - The override method.
 * @return {Object}              - The inverted object.
 */
function invertObject(obj, override) {
    if (typeof obj !== 'object' || !obj) { // null is an object
        throw new TypeError('First argument must be an object');
    }

    var key;
    var value;
    var isOverridePresent = typeof override === 'function';
    var overrides = {};
    var result = {};

    for (key in obj) {
        value = obj[key];

        if (isOverridePresent) {
            overrides = override(key, value);
            if (overrides && overrides.length === 2) {
                result[overrides[0]] = overrides[1];
                continue;
            }
        }

        if (typeof value === 'string') {
            result[value] = key;
        }
    }

    return result;
}

/**
 * Export utilties.
 */
module.exports = {
    camelCase: camelCase,
    invertObject: invertObject
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Format DOM attributes to an associative array.
 *
 * @param  {NamedNodeMap} - The list of attributes.
 * @return {Object}       - The object of attributes.
 */
function formatAttributes(attributes) {
    var result = {};
    var attribute;

    // NamedNodeMap is array-like
    for (var i = 0, len = attributes.length; i < len; i++) {
        attribute = attributes[i];
        result[attribute.name] = attribute.value;
    }

    return result;
}

/**
 * Format the browser DOM nodes to mimic the output of `htmlparser2.parseDOM()`.
 *
 * @param  {NodeList} nodes        - The DOM nodes.
 * @param  {Object}   [parentObj]  - The formatted parent node.
 * @param  {String}   [directive]  - The directive.
 * @return {Object}                - The formatted DOM object.
 */
function formatDOM(nodes, parentObj, directive) {
    parentObj = parentObj || null;

    var result = [];
    var node;
    var prevNode;
    var nodeObj;

    // NodeList is array-like
    for (var i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];
        // reset
        nodeObj = {
            next: null,
            prev: result[i - 1] || null,
            parent: parentObj
        };

        // set the next node for the previous node (if applicable)
        prevNode = result[i - 1];
        if (prevNode) {
            prevNode.next = nodeObj;
        }

        // set the node name if it's not "#text" or "#comment"
        // e.g., "div"
        if (node.nodeName.indexOf('#') !== 0) {
            nodeObj.name = node.nodeName.toLowerCase();

            // also, nodes of type "tag" have "attribs"
            nodeObj.attribs = {}; // default
            if (node.attributes && node.attributes.length) {
                nodeObj.attribs = formatAttributes(node.attributes);
            }
        }

        // set the node type
        // e.g., "tag"
        switch (node.nodeType) {
            // 1 = element
            case 1:
                if (nodeObj.name === 'script' || nodeObj.name === 'style') {
                    nodeObj.type = nodeObj.name;
                } else {
                    nodeObj.type = 'tag';
                }
                // recursively format the children
                nodeObj.children = formatDOM(node.childNodes, nodeObj);
                break;
                // 2 = attribute
                // 3 = text
            case 3:
                nodeObj.type = 'text';
                nodeObj.data = node.nodeValue;
                break;
                // 8 = comment
            case 8:
                nodeObj.type = 'comment';
                nodeObj.data = node.nodeValue;
                break;
            default:
                break;
        }

        result.push(nodeObj);
    }

    if (directive) {
        result.unshift({
            name: directive.substring(0, directive.indexOf(' ')).toLowerCase(),
            data: directive,
            type: 'directive',
            next: result[0] ? result[0] : null,
            prev: null,
            parent: parentObj
        });

        if (result[1]) {
            result[1].prev = result[0];
        }
    }

    return result;
}

/**
 * Detect IE with or without version.
 *
 * @param  {Number} [version] - The IE version to detect.
 * @return {Boolean}          - Whether IE or the version has been detected.
 */
function isIE(version) {
    if (version) {
        return document.documentMode === version;
    }
    return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

/**
 * Export utilities.
 */
module.exports = {
    formatAttributes: formatAttributes,
    formatDOM: formatDOM,
    isIE: isIE
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BreadCrumb;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _capToCamelCase = __webpack_require__(47);

var _capToCamelCase2 = _interopRequireDefault(_capToCamelCase);

var _Container = __webpack_require__(299);

var _Container2 = _interopRequireDefault(_Container);

var _HomeLink = __webpack_require__(300);

var _HomeLink2 = _interopRequireDefault(_HomeLink);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function BreadCrumb(props) {
  var content = props.content;

  var componentCSSName = (0, _capToCamelCase2.default)('BreadCrumb');

  var title = content.title;
  // TODO: Link's to should be a prop!!!

  return _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_HomeLink2.default, { className: componentCSSName + '__homeLink', href: '/products/all' }, 'Home'), ' / ', title);
}
BreadCrumb.propTypes = {
  content: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FooterBar;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SocialIcon = __webpack_require__(328);

var _SocialIcon2 = _interopRequireDefault(_SocialIcon);

var _Container = __webpack_require__(332);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function FooterBar(props) {
  var icons = props.socialIcons || [];
  return _react2.default.createElement(_Container2.default, null, icons.length ? icons.map(function (icon, index) {
    return _react2.default.createElement(_SocialIcon2.default, {
      key: icon.id || index,
      srcUrl: icon.srcUrl,
      linkUrl: icon.linkUrl
    });
  }) : null);
}

FooterBar.propTypes = {
  socialIcons: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  display: block;\n  cursor: pointer;\n'], ['\n  ', '\n\n  display: block;\n  cursor: pointer;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
                                                                        return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
                                                                        return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

// import mediaQuery from './../../../theme/styled-components/mediaQuery';

module.exports = _styledComponents2.default.section(_templateObject, '' /* ${mediaQuery.mobileS`
                                                                        display: none;
                                                                        `}
                                                                        ${mediaQuery.tablet`
                                                                        display: block;
                                                                        `} */);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EzTester = exports.products = exports.ContentCache = exports.CenteredSpaceShell = exports.Product = exports.ProductListing = exports.Contact = exports.About = exports.LoadingScreen = exports.MobileMenuRouteEnabled = exports.MenuBarNewRouteEnabled = exports.CatalogDetail = exports.CatalogItem = exports.CatalogList = exports.ContactForm = exports.RegisterForm = exports.ForgetMyPasswordForm = exports.onChange = exports.LoginForm = exports.FormInput = undefined;

var _ezSiteContentStore = __webpack_require__(7);

var _LoginForm = __webpack_require__(99);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _ForgetMyPasswordForm = __webpack_require__(105);

var _ForgetMyPasswordForm2 = _interopRequireDefault(_ForgetMyPasswordForm);

var _RegisterForm = __webpack_require__(108);

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

var _ContactForm = __webpack_require__(73);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _CatalogList = __webpack_require__(206);

var _CatalogList2 = _interopRequireDefault(_CatalogList);

var _CatalogItem = __webpack_require__(81);

var _CatalogItem2 = _interopRequireDefault(_CatalogItem);

var _CatalogDetail = __webpack_require__(238);

var _CatalogDetail2 = _interopRequireDefault(_CatalogDetail);

var _MenuBarNewRouteEnabled = __webpack_require__(86);

var _MenuBarNewRouteEnabled2 = _interopRequireDefault(_MenuBarNewRouteEnabled);

var _MobileMenuRouteEnabled = __webpack_require__(88);

var _MobileMenuRouteEnabled2 = _interopRequireDefault(_MobileMenuRouteEnabled);

var _LoadingScreen = __webpack_require__(270);

var _LoadingScreen2 = _interopRequireDefault(_LoadingScreen);

var _About = __webpack_require__(278);

var _About2 = _interopRequireDefault(_About);

var _Contact = __webpack_require__(343);

var _Contact2 = _interopRequireDefault(_Contact);

var _ProductListing = __webpack_require__(349);

var _ProductListing2 = _interopRequireDefault(_ProductListing);

var _Product = __webpack_require__(350);

var _Product2 = _interopRequireDefault(_Product);

var _CenteredSpaceShell = __webpack_require__(351);

var _CenteredSpaceShell2 = _interopRequireDefault(_CenteredSpaceShell);

var _EzTester = __webpack_require__(353);

var _EzTester2 = _interopRequireDefault(_EzTester);

var _onChange = __webpack_require__(355);

var _onChange2 = _interopRequireDefault(_onChange);

var _FormInput = __webpack_require__(49);

var _FormInput2 = _interopRequireDefault(_FormInput);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var products = _ezSiteContentStore.www___naturalorchards__us.products;
exports.FormInput = _FormInput2.default;
exports.LoginForm = _LoginForm2.default;
exports.onChange = _onChange2.default;
exports.ForgetMyPasswordForm = _ForgetMyPasswordForm2.default;
exports.RegisterForm = _RegisterForm2.default;
exports.ContactForm = _ContactForm2.default;
exports.CatalogList = _CatalogList2.default;
exports.CatalogItem = _CatalogItem2.default;
exports.CatalogDetail = _CatalogDetail2.default;
exports.MenuBarNewRouteEnabled = _MenuBarNewRouteEnabled2.default;
exports.MobileMenuRouteEnabled = _MobileMenuRouteEnabled2.default;
exports.LoadingScreen = _LoadingScreen2.default;
exports.About = _About2.default;
exports.Contact = _Contact2.default;
exports.ProductListing = _ProductListing2.default;
exports.Product = _Product2.default;
exports.CenteredSpaceShell = _CenteredSpaceShell2.default;
exports.ContentCache = _ezSiteContentStore.www___naturalorchards__us;
exports.products = products;
exports.EzTester = _EzTester2.default;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _CredientialInput = __webpack_require__(103);

var _CredientialInput2 = _interopRequireDefault(_CredientialInput);

var _Container = __webpack_require__(104);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
// import Avatar from 'material-ui/Avatar';


var LoginForm = function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = {
      loggingIn: props.loggingIn || false
    };
    _this.handleFormChange = _this.handleFormChange.bind(_this);
    _this.changeLoggingInState = _this.changeLoggingInState.bind(_this);
    _this.login = _this.login.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'login',
    value: function login() {
      this.changeLoggingInState(true);
      this.props.handleLogin(this.props.userInfo.userName, this.props.userInfo.password, this.changeLoggingInState);
    }
  }, {
    key: 'changeLoggingInState',
    value: function changeLoggingInState(state) {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          loggingIn: state
        });
      });
    }
  }, {
    key: 'handleFormChange',
    value: function handleFormChange(event, propertyName) {
      this.props.handleLoginFormChange(event, propertyName);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          handleLogout = _props.handleLogout,
          userInfo = _props.userInfo,
          layout = _props.layout,
          statusCode = _props.statusCode,
          getReturnToRoute = _props.getReturnToRoute;

      if (userInfo.loggedIn && this.state.loggingIn) {
        this.changeLoggingInState(false);
      }

      var formStyle = {
        container: {
          marginTop: '24px',
          marginBottom: '24px'
        }
      };
      if (layout === 'standAlone') {
        formStyle.container.display = 'flex';
        formStyle.container.flexFlow = 'column';
        formStyle.credentialInputs = {
          display: 'flex',
          flexFlow: 'column'
        };
        formStyle.avatarContainer = {
          alignSelf: 'center',
          margin: '24px',
          avatar: {
            margin: '0 auto'
          },
          phrase: {
            textAlign: 'center'
          }
        };
      }
      var returnToRoute = getReturnToRoute();
      return _react2.default.createElement(_Container2.default, { style: formStyle.container || null }, userInfo.loggedIn ? _react2.default.createElement('section', { style: formStyle.avatarContainer || null }, _react2.default.createElement('h1', { style: formStyle.avatarContainer.phrase || null }, 'Welcome!'), returnToRoute ? _react2.default.createElement('p', { style: formStyle.avatarContainer.phrase || null }, 'Bring me back to ', _react2.default.createElement('a', { href: returnToRoute.uri }, returnToRoute.name)) : null) : _react2.default.createElement('section', { style: formStyle.credentialInputs }, _react2.default.createElement(_CredientialInput2.default, {
        htmlIdName: 'UserNameInput',
        inputTitle: 'User Email',
        inputType: 'email',
        contentObjectName: 'userName',
        contentEmptyState: { userName: '' },
        contentObjectPropertyValue: userInfo.userName,
        contentObjectPropertyName: '',
        index: null,
        event: null,
        handleFormChange: function handleFormChange(event) {
          _this3.handleFormChange(event, 'userName');
        }
      }), _react2.default.createElement(_CredientialInput2.default, {
        htmlIdName: 'PasswordInput',
        inputTitle: 'Password',
        inputType: 'password',
        contentObjectName: 'password',
        contentEmptyState: { password: '' },
        contentObjectPropertyValue: userInfo.password,
        contentObjectPropertyName: 'password',
        index: null,
        event: null,
        handleFormChange: function handleFormChange(event) {
          _this3.handleFormChange(event, 'password');
        }
      })), statusCode === 'auth/network-request-failed' ? _react2.default.createElement('p', null, 'Are you still connected to the internet?') : null, statusCode === 'auth/user-not-found' ? _react2.default.createElement('p', null, "We can't find your account! Would you like to", ' ', _react2.default.createElement('a', { href: '/#/register' }, 'register as a new user'), '?') : null, userInfo.loggedIn ? _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: handleLogout }, 'Log Out') : _react2.default.createElement(_reactstrap.Button, { disabled: this.state.loggingIn, color: 'primary', onClick: this.login }, this.state.loggingIn ? 'Loading...' : 'Log In'));
    }
  }]);

  return LoginForm;
}(_react.Component);

exports.default = LoginForm;

LoginForm.propTypes = {
  userInfo: _propTypes2.default.objectOf(_propTypes2.default.any),
  loggingIn: _propTypes2.default.bool,
  layout: _propTypes2.default.string,
  statusCode: _propTypes2.default.string.isRequired,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleLogin: _propTypes2.default.func.isRequired,
  handleLogout: _propTypes2.default.func.isRequired,
  handleLoginFormChange: _propTypes2.default.func.isRequired,
  getReturnToRoute: _propTypes2.default.func
};

LoginForm.defaultProps = {
  loggingIn: false,
  layout: 'standAlone',
  userInfo: {
    displayName: '',
    userName: '',
    password: '',
    loggedIn: false
  },
  getReturnToRoute: function getReturnToRoute() {
    return {
      name: 'Home',
      uri: '/'
    };
  }
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(101);
var invariant = __webpack_require__(48);
var ReactPropTypesSecret = __webpack_require__(102);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CredentialInput(props) {
  var htmlIdName = props.htmlIdName,
      inputTitle = props.inputTitle,
      inputType = props.inputType,
      contentObjectName = props.contentObjectName,
      contentObjectPropertyValue = props.contentObjectPropertyValue;

  return _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Label, {
    htmlFor: '' + contentObjectName + htmlIdName
  }, inputTitle), _react2.default.createElement(_reactstrap.Input, {
    id: '' + contentObjectName + htmlIdName,
    value: contentObjectPropertyValue,
    type: inputType,
    onChange: function onChange(event) {
      return props.handleFormChange(event, contentObjectName);
    }
  }));
}
// import { withStyles } from 'material-ui/styles';

// import Input, { InputLabel } from 'material-ui/Input';
// import { FormControl } from 'material-ui/Form';

CredentialInput.propTypes = {
  htmlIdName: _propTypes2.default.string,
  inputTitle: _propTypes2.default.string,
  inputType: _propTypes2.default.string,
  contentObjectName: _propTypes2.default.string,
  contentObjectPropertyValue: _propTypes2.default.string,
  handleFormChange: _propTypes2.default.func.isRequired
};

CredentialInput.defaultProps = {
  htmlIdName: '',
  inputTitle: '',
  inputType: '',
  contentObjectName: '',
  contentObjectPropertyValue: ''
};

exports.default = CredentialInput;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _CredientialInput = __webpack_require__(106);

var _CredientialInput2 = _interopRequireDefault(_CredientialInput);

var _Container = __webpack_require__(107);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import { Paper, Button } from 'material-ui';


var ForgetMyPassword = function (_Component) {
  _inherits(ForgetMyPassword, _Component);

  function ForgetMyPassword(props) {
    _classCallCheck(this, ForgetMyPassword);

    var _this = _possibleConstructorReturn(this, (ForgetMyPassword.__proto__ || Object.getPrototypeOf(ForgetMyPassword)).call(this, props));

    _this.state = {
      isResetting: props.isResetting || false
    };
    _this.handleFormChange = _this.handleFormChange.bind(_this);
    _this.changeIsResettingState = _this.changeIsResettingState.bind(_this);
    _this.reset = _this.reset.bind(_this);
    return _this;
  }

  _createClass(ForgetMyPassword, [{
    key: 'reset',
    value: function reset() {
      this.changeIsResettingState(true);
      this.props.handleReset(this.props.userInfo.userName, this.props.userInfo.password, this.changeIsResettingState);
    }
  }, {
    key: 'changeIsResettingState',
    value: function changeIsResettingState(state) {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          isResetting: state
        });
      });
    }
  }, {
    key: 'handleFormChange',
    value: function handleFormChange(event, propertyName) {
      this.props.handleForgetMyPasswordFormChange(event, propertyName);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          userInfo = _props.userInfo,
          layout = _props.layout,
          statusCode = _props.statusCode;

      if (userInfo.loggedIn && this.state.isResetting) {
        this.changeIsResettingState(false);
      }

      var formStyle = {
        container: {
          marginTop: '24px',
          marginBottom: '24px'
        }
      };
      if (layout === 'standAlone') {
        formStyle.container.display = 'flex';
        formStyle.container.flexFlow = 'column';
        formStyle.credentialInputs = {
          display: 'flex',
          flexFlow: 'column'
        };
        formStyle.avatarContainer = {
          alignSelf: 'center',
          margin: '24px',
          avatar: {
            margin: '0 auto'
          }
        };
      }
      return _react2.default.createElement(_Container2.default, { style: formStyle.container || null }, statusCode === 'ezeewei/email-resetted' ? _react2.default.createElement('section', { style: formStyle.avatarContainer || null }, _react2.default.createElement('h1', null, 'Reset Success! Please check your email for next step!'), _react2.default.createElement('a', { href: '/#' }, 'Bring me back to home page')) : _react2.default.createElement('section', { style: formStyle.credentialInputs }, _react2.default.createElement(_CredientialInput2.default, {
        htmlIdName: 'UserNameInput',
        inputTitle: 'User Email',
        inputType: 'email',
        contentObjectName: 'userName',
        contentEmptyState: { userName: '' },
        contentObjectPropertyValue: userInfo.userName,
        contentObjectPropertyName: '',
        index: null,
        event: null,
        handleFormChange: function handleFormChange(event) {
          _this3.handleFormChange(event, 'userName');
        }
      })), statusCode === 'auth/invalid-email' ? _react2.default.createElement('p', null, 'Email is invalid!') : null, statusCode === 'auth/network-request-failed' ? _react2.default.createElement('p', null, 'Are you still connected to the internet?') : null, statusCode === 'auth/user-not-found' ? _react2.default.createElement('p', null, "We can't find your account! Would you like to", ' ', _react2.default.createElement('a', { href: '/#/register' }, 'register as a new user'), '?') : null, statusCode !== 'ezeewei/email-resetted' ? _react2.default.createElement(_reactstrap.Button, {
        disabled: this.state.isResetting && !statusCode,
        color: 'primary',
        onClick: this.reset
      }, this.state.isResetting && !statusCode ? 'Resetting...' : 'Reset My Password') : null);
    }
  }]);

  return ForgetMyPassword;
}(_react.Component);

exports.default = ForgetMyPassword;

ForgetMyPassword.propTypes = {
  userInfo: _propTypes2.default.objectOf(_propTypes2.default.any),
  isResetting: _propTypes2.default.bool,
  layout: _propTypes2.default.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleReset: _propTypes2.default.func.isRequired,
  handleForgetMyPasswordFormChange: _propTypes2.default.func.isRequired,
  statusCode: _propTypes2.default.string
};

ForgetMyPassword.defaultProps = {
  userInfo: '',
  isResetting: false,
  layout: '',
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  statusCode: ''
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CredentialInput(props) {
  var htmlIdName = props.htmlIdName,
      inputTitle = props.inputTitle,
      inputType = props.inputType,
      contentObjectName = props.contentObjectName,
      contentObjectPropertyValue = props.contentObjectPropertyValue;

  return _react2.default.createElement(_reactstrap.FormGroup, null, _react2.default.createElement(_reactstrap.Label, {
    htmlFor: '' + contentObjectName + htmlIdName
  }, inputTitle), _react2.default.createElement(_reactstrap.Input, {
    id: '' + contentObjectName + htmlIdName,
    value: contentObjectPropertyValue,
    type: inputType,
    onChange: function onChange(onChangeEvent) {
      return props.handleFormChange(onChangeEvent, contentObjectName);
    }
  }));
}
// import Input, { InputLabel } from 'material-ui/Input';
// import { FormControl } from 'material-ui/Form';


CredentialInput.propTypes = {
  htmlIdName: _propTypes2.default.string,
  inputTitle: _propTypes2.default.string,
  inputType: _propTypes2.default.string,
  contentObjectName: _propTypes2.default.string,
  contentObjectPropertyValue: _propTypes2.default.string,
  handleFormChange: _propTypes2.default.func.isRequired
};

CredentialInput.defaultProps = {
  htmlIdName: '',
  inputTitle: '',
  inputType: '',
  contentObjectName: '',
  contentObjectPropertyValue: ''
};

exports.default = CredentialInput;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RegisterForm;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _Container = __webpack_require__(109);

var _Container2 = _interopRequireDefault(_Container);

var _FormInput = __webpack_require__(49);

var _FormInput2 = _interopRequireDefault(_FormInput);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function RegisterForm(props) {
  var handleLogout = props.handleLogout,
      layout = props.layout,
      statusCode = props.statusCode,
      statusMessage = props.statusMessage,
      postEmailValidationPhrase = props.postEmailValidationPhrase,
      onChange = props.onChange,
      email = props.email,
      password = props.password,
      displayName = props.displayName,
      loggedIn = props.loggedIn,
      isRegistering = props.isRegistering,
      registerButtonTitle = props.registerButtonTitle,
      handleRegister = props.handleRegister;

  if (loggedIn && isRegistering) {
    this.changeRegisteringState(false);
  }

  var formStyle = {
    container: {
      marginTop: '24px',
      marginBottom: '24px'
    }
  };
  if (layout === 'standAlone') {
    formStyle.container.display = 'flex';
    formStyle.container.flexFlow = 'column';
    formStyle.credentialInputs = {
      display: 'flex',
      flexFlow: 'column'
    };
    formStyle.avatarContainer = {
      alignSelf: 'center',
      margin: '24px',
      avatar: {
        margin: '0 auto'
      }
    };
  }
  return _react2.default.createElement(_Container2.default, { style: formStyle.container || null }, loggedIn ? _react2.default.createElement('section', { style: formStyle.avatarContainer || null }, _react2.default.createElement('h1', null, 'Welcome!')) : _react2.default.createElement('section', { style: formStyle.credentialInputs }, _react2.default.createElement(_FormInput2.default, {
    title: 'Full Name',
    name: 'displayName',
    value: displayName,
    type: 'text',
    placeholder: 'i.e. John B. Adam',
    onChange: onChange
  }), _react2.default.createElement(_FormInput2.default, {
    title: 'Email',
    name: 'email',
    value: email,
    type: 'email',
    placeholder: 'i.e. abc@gmail.com',
    onChange: onChange
  }), _react2.default.createElement(_FormInput2.default, {
    title: 'Password',
    name: 'password',
    value: password,
    type: 'password',
    placeholder: '',
    onChange: onChange
  })), statusCode === 'auth/network-request-failed' ? _react2.default.createElement('p', null, 'Check the internet connection? try again later?') : null, statusCode === 'auth/email-already-in-use' ? _react2.default.createElement('p', null, 'This Email is already registered! Please ', _react2.default.createElement('a', { href: '/user/login' }, 'login'), '!') : null, isRegistering && !statusCode ? _react2.default.createElement('p', null, 'hold on, we are writing a very important message for you here...') : null, statusCode === 'ezeewei/validate-email' ? _react2.default.createElement('p', null, 'We just sent a email to validate your email address!', postEmailValidationPhrase) : null, _react2.default.createElement('p', null, statusMessage), loggedIn ? _react2.default.createElement(_reactstrap.Button, { color: 'primary', onClick: handleLogout }, 'Log Out') : _react2.default.createElement(_reactstrap.Button, { disabled: isRegistering, color: 'primary', onClick: handleRegister }, registerButtonTitle));
}

RegisterForm.propTypes = {
  isRegistering: _propTypes2.default.bool,
  registerButtonTitle: _propTypes2.default.string,
  layout: _propTypes2.default.string,
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleRegister: _propTypes2.default.func,
  handleLogout: _propTypes2.default.func,
  onChange: _propTypes2.default.func.isRequired,
  statusCode: _propTypes2.default.string,
  statusMessage: _propTypes2.default.string,
  postEmailValidationPhrase: _propTypes2.default.string,
  email: _propTypes2.default.string,
  password: _propTypes2.default.string,
  displayName: _propTypes2.default.string,
  loggedIn: _propTypes2.default.bool
};

RegisterForm.defaultProps = {
  isRegistering: false,
  registerButtonTitle: 'Register',
  layout: 'standAlone',
  // TODO: following SHOULD be .func.isRequired, but for some reason strange prop
  // validation comes up even what got pass IS func.....
  handleRegister: function handleRegister() {},
  handleLogout: function handleLogout() {},
  statusCode: '',
  statusMessage: '',
  postEmailValidationPhrase: '',
  email: '',
  password: '',
  displayName: '',
  loggedIn: false
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(111),
    arrayEach = __webpack_require__(141),
    assignValue = __webpack_require__(57),
    baseAssign = __webpack_require__(142),
    baseAssignIn = __webpack_require__(151),
    cloneBuffer = __webpack_require__(154),
    copyArray = __webpack_require__(155),
    copySymbols = __webpack_require__(156),
    copySymbolsIn = __webpack_require__(158),
    getAllKeys = __webpack_require__(159),
    getAllKeysIn = __webpack_require__(70),
    getTag = __webpack_require__(37),
    initCloneArray = __webpack_require__(164),
    initCloneByTag = __webpack_require__(165),
    initCloneObject = __webpack_require__(171),
    isArray = __webpack_require__(11),
    isBuffer = __webpack_require__(62),
    isMap = __webpack_require__(173),
    isObject = __webpack_require__(15),
    isSet = __webpack_require__(175),
    keys = __webpack_require__(29);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19),
    stackClear = __webpack_require__(117),
    stackDelete = __webpack_require__(118),
    stackGet = __webpack_require__(119),
    stackHas = __webpack_require__(120),
    stackSet = __webpack_require__(121);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(20);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(19),
    Map = __webpack_require__(28),
    MapCache = __webpack_require__(56);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(53),
    isMasked = __webpack_require__(126),
    isObject = __webpack_require__(15),
    toSource = __webpack_require__(55);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(127);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(130),
    ListCache = __webpack_require__(19),
    Map = __webpack_require__(28);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(131),
    hashDelete = __webpack_require__(132),
    hashGet = __webpack_require__(133),
    hashHas = __webpack_require__(134),
    hashSet = __webpack_require__(135);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(21);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(22);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(16),
    keys = __webpack_require__(29);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(148),
    baseUnary = __webpack_require__(31),
    nodeUtil = __webpack_require__(32);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    isLength = __webpack_require__(63),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(33),
    nativeKeys = __webpack_require__(150);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(64);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(16),
    keysIn = __webpack_require__(66);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15),
    isPrototype = __webpack_require__(33),
    nativeKeysIn = __webpack_require__(153);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(8);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module)))

/***/ }),
/* 155 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(16),
    getSymbols = __webpack_require__(34);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 157 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(16),
    getSymbolsIn = __webpack_require__(68);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(69),
    getSymbols = __webpack_require__(34),
    keys = __webpack_require__(29);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(9),
    root = __webpack_require__(8);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(38),
    cloneDataView = __webpack_require__(167),
    cloneRegExp = __webpack_require__(168),
    cloneSymbol = __webpack_require__(169),
    cloneTypedArray = __webpack_require__(170);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(8);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(38);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(38);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(172),
    getPrototype = __webpack_require__(36),
    isPrototype = __webpack_require__(33);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(174),
    baseUnary = __webpack_require__(31),
    nodeUtil = __webpack_require__(32);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(37),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(176),
    baseUnary = __webpack_require__(31),
    nodeUtil = __webpack_require__(32);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(37),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(39),
    last = __webpack_require__(184),
    parent = __webpack_require__(185),
    toKey = __webpack_require__(72);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(40);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(180);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(181);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(56);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(183);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    arrayMap = __webpack_require__(51),
    isArray = __webpack_require__(11),
    isSymbol = __webpack_require__(40);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(71),
    baseSlice = __webpack_require__(186);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(188);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(13),
    getPrototype = __webpack_require__(36),
    isObjectLike = __webpack_require__(10);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(190),
    overRest = __webpack_require__(193),
    setToString = __webpack_require__(195);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(191);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(35),
    isFlattenable = __webpack_require__(192);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(14),
    isArguments = __webpack_require__(61),
    isArray = __webpack_require__(11);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(194);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(196),
    shortOut = __webpack_require__(199);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(197),
    defineProperty = __webpack_require__(59),
    identity = __webpack_require__(198);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 197 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 198 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var StyledComponentWrapper = function (_Component) {
  _inherits(StyledComponentWrapper, _Component);

  function StyledComponentWrapper() {
    _classCallCheck(this, StyledComponentWrapper);

    return _possibleConstructorReturn(this, (StyledComponentWrapper.__proto__ || Object.getPrototypeOf(StyledComponentWrapper)).apply(this, arguments));
  }

  _createClass(StyledComponentWrapper, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return StyledComponentWrapper;
}(_react.Component);

exports.default = StyledComponentWrapper;

StyledComponentWrapper.propTypes = {
  children: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: form-contact-container', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 14px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    "form-legend-name form-legend-name"\n    "form-input-first-name form-input-last-name"\n    "form-legend-email form-legend-email"\n    "form-input-email form-input-email"\n    "form-legend-phone form-legend-phone"\n    "form-input-phone form-input-phone"\n    "form-legend-message form-legend-message"\n    "form-textarea-message form-textarea-message"\n     "form-submit-button .";\n'], ['\n  grid-area: form-contact-container', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 14px;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas:\n    "form-legend-name form-legend-name"\n    "form-input-first-name form-input-last-name"\n    "form-legend-email form-legend-email"\n    "form-input-email form-input-email"\n    "form-legend-phone form-legend-phone"\n    "form-input-phone form-input-phone"\n    "form-legend-message form-legend-message"\n    "form-textarea-message form-textarea-message"\n     "form-submit-button .";\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.form(_templateObject, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: form-legend', ';\n'], ['\n  grid-area: form-legend', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.legend(_templateObject, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: form-input', ';\n  ', ';\n\n  width: 100%;\n  padding: 12px;\n  margin: 6px 0 4px;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  color: #000;\n  font-family: sans-serif;\n  font-size: 12px;\n  line-height: normal;\n  box-sizing: border-box;\n  border-radius: 2px;\n  font-size: 14px;\n  background-color: white;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  padding: 10px;\n'], ['\n  grid-area: form-input', ';\n  ', ';\n\n  width: 100%;\n  padding: 12px;\n  margin: 6px 0 4px;\n  border: 1px solid #ccc;\n  background: #fafafa;\n  color: #000;\n  font-family: sans-serif;\n  font-size: 12px;\n  line-height: normal;\n  box-sizing: border-box;\n  border-radius: 2px;\n  font-size: 14px;\n  background-color: white;\n  display: inline-block;\n  width: auto;\n  height: auto;\n  padding: 10px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n        display: block;\n        position: absolute;'], ['\n        display: block;\n        position: absolute;']),
    _templateObject3 = _taggedTemplateLiteral(['\n        display: inline-block;\n        position: initial;'], ['\n        display: inline-block;\n        position: initial;']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.input(_templateObject, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
}, function (props) {
  return props.responsive ? _mediaQuery2.default.mobileS(_templateObject2) + '\n      ' + _mediaQuery2.default.mobileL(_templateObject3) : '';
});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: form-textarea', ';\n  min-height: 100px;\n  resize: vertical;\n  padding: 12px;\n'], ['\n  grid-area: form-textarea', ';\n  min-height: 100px;\n  resize: vertical;\n  padding: 12px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.textarea(_templateObject, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
});

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: form-submit-button;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-style: normal;\n  background-color: transparent;\n  color: #222;\n  border-color: #333;\n  border-radius: 3px;\n  border-width: 2px;\n  border-style: solid;\n  transition: 0.1s background-color linear, 0.1s color linear;\n  text-align: center;\n  cursor: pointer;\n  height: 45px;\n'], ['\n  grid-area: form-submit-button;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-style: normal;\n  background-color: transparent;\n  color: #222;\n  border-color: #333;\n  border-radius: 3px;\n  border-width: 2px;\n  border-style: solid;\n  transition: 0.1s background-color linear, 0.1s color linear;\n  text-align: center;\n  cursor: pointer;\n  height: 45px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
} // TODO - Its another kind of input only, but style change is too dramatic
// merge into ContactFormInput once some sort of conditional becomes allowed in styled.components

module.exports = _styledComponents2.default.input(_templateObject);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CatalogList;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(23);

var _CatalogItem = __webpack_require__(81);

var _CatalogItem2 = _interopRequireDefault(_CatalogItem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CatalogList(props) {
  var collection = props.collection;

  if (!collection.data.length) return null;
  return _react2.default.createElement(_reactstrap.Container, { fluid: true }, _react2.default.createElement(_reactstrap.Row, null, collection.data.map(function (record) {
    var id = record.id,
        name = record.name,
        route = record.route,
        description = record.description,
        website = record.website,
        locations = record.locations,
        snapshots = record.snapshots;

    var location = locations[0];
    var subTitle = (location.city || '') + ', ' + (location.state || '') + ' ' + (location.country || '');
    return _react2.default.createElement(_reactstrap.Col, {
      key: id,
      xs: {
        size: 12
      },
      sm: {
        size: 6
      },
      md: {
        size: 4
      },
      lg: {
        size: 4
      },
      xl: {
        size: 4
      }
    }, _react2.default.createElement(_reactRouterDom.Link, { to: '/list/masjid/' + route + '/' }, _react2.default.createElement(_CatalogItem2.default, {
      id: id,
      title: name,
      location: location,
      subTitle: subTitle,
      description: description,
      websiteUrl: website,
      snapshots: snapshots
    })));
  })));
}

CatalogList.propTypes = {
  collection: _propTypes2.default.objectOf(_propTypes2.default.any)
};

CatalogList.defaultProps = {
  collection: {}
};

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(43);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(6);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(41);

var _PathUtils = __webpack_require__(17);

var _createTransitionManager = __webpack_require__(42);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(43);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(6);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(41);

var _PathUtils = __webpack_require__(17);

var _createTransitionManager = __webpack_require__(42);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(76);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__(212);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__(44);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
  };

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(3);

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(17);

var _LocationUtils = __webpack_require__(41);

var _createTransitionManager = __webpack_require__(42);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(77);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  ariaCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['page', 'step', 'location', 'true'])
};

NavLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(216)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__(218);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Prompt> outside a <Router>');

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__(220);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__(221);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Redirect> outside a <Router>');

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(prevProps.to);
    var nextTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(this.props.to);

    if (Object(__WEBPACK_IMPORTED_MODULE_4_history__["b" /* locationsAreEqual */])(prevTo, nextTo)) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
      return;
    }

    this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;


    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(222);
/* unused harmony reexport createBrowserHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(223);
/* unused harmony reexport createHashHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(224);
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(18);
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */










/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(80);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createBrowserHistory);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(80);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createHashHistory);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(46);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createMemoryHistory);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__(226);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__(44);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["parsePath"])(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__(228);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__(45);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__(45);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__(231);
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__(79);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], { render: function render(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: 250px;\n  width: 100%;\n  display:flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n'], ['\n  height: 250px;\n  width: 100%;\n  display:flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n'], ['\n  width: 100%;\n  height: auto;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.img(_templateObject);

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  background: black;\n  color: white;\n  opacity: .5;\n  \n  text-align: center;\n\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  position: absolute;\n  background: black;\n  color: white;\n  opacity: .5;\n  \n  text-align: center;\n\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    padding: 8px;\n  '], ['\n    padding: 8px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    \n  '], ['\n    \n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.mobileS(_templateObject3), _mediaQuery2.default.mobileS(_templateObject3), _mediaQuery2.default.mobileS(_templateObject3));

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n  ', '\n  ', '\n  ', '\n'], ['\n\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 32px;\n  '], ['\n    font-size: 32px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 64px;\n  '], ['\n    font-size: 64px;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.h1(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject2), _mediaQuery2.default.laptop(_templateObject3));

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n  ', '\n  ', '\n  ', '\n'], ['\n\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 16px;\n  '], ['\n    font-size: 16px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 32px;\n  '], ['\n    font-size: 32px;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.h2(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject2), _mediaQuery2.default.laptop(_templateObject3));

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CatalogDetail;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _get = __webpack_require__(82);

var _get2 = _interopRequireDefault(_get);

var _Container = __webpack_require__(239);

var _Container2 = _interopRequireDefault(_Container);

var _GoogleEmbbededMapView = __webpack_require__(240);

var _GoogleEmbbededMapView2 = _interopRequireDefault(_GoogleEmbbededMapView);

var _ShareButtonsBar = __webpack_require__(84);

var _ShareButtonsBar2 = _interopRequireDefault(_ShareButtonsBar);

var _SnapshotDisplay = __webpack_require__(83);

var _SnapshotDisplay2 = _interopRequireDefault(_SnapshotDisplay);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// import {
//   ShareButtons,
//   ShareCounts,
//   generateShareIcon,
// } from 'react-share';

function CatalogDetail(props) {
  // const {
  //   FacebookShareButton,
  //   GooglePlusShareButton,
  //   LinkedinShareButton,
  //   TwitterShareButton,
  //   TelegramShareButton,
  //   WhatsappShareButton,
  //   PinterestShareButton,
  //   VKShareButton,
  //   OKShareButton,
  //   RedditShareButton,
  // } = ShareButtons;
  // const FacebookIcon = generateShareIcon('facebook');
  // const TwitterIcon = generateShareIcon('twitter');
  // const PinterestIcon = generateShareIcon('pinterest');

  var title = props.title,
      query = props.query,
      snapshots = props.snapshots,
      displayLocation = props.displayLocation,
      website = props.website;

  var snapshotSrc = (0, _get2.default)(snapshots[0], 'url');
  return _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_SnapshotDisplay2.default, {
    title: title,
    displayLocation: displayLocation,
    snapshotSrc: snapshotSrc
  }), _react2.default.createElement(_GoogleEmbbededMapView2.default, {
    query: query
  }), _react2.default.createElement(_ShareButtonsBar2.default, {
    hasMarginBottom: true,
    homeLink: website
  }));
}

CatalogDetail.propTypes = {
  title: _propTypes2.default.string,
  displayLocation: _propTypes2.default.string,
  query: _propTypes2.default.string,
  snapshots: _propTypes2.default.arrayOf(_propTypes2.default.object),
  website: _propTypes2.default.string
};

CatalogDetail.defaultProps = {
  title: 'Detail',
  displayLocation: '',
  query: '',
  snapshots: [],
  website: ''
};

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GoogleEmbbededMapView;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GOOGLE_EMBEDDED_MAP_API = __webpack_require__(241);

var _GOOGLE_EMBEDDED_MAP_API2 = _interopRequireDefault(_GOOGLE_EMBEDDED_MAP_API);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function GoogleEmbbededMapView(props) {
  var style = props.style,
      query = props.query,
      width = props.width,
      height = props.height,
      title = props.title;

  return _react2.default.createElement('iframe', {
    title: title,
    width: width,
    height: height,
    frameBorder: '0',
    style: style,
    src: 'https://www.google.com/maps/embed/v1/place?key=' + _GOOGLE_EMBEDDED_MAP_API2.default + '&q=' + query,
    allowFullScreen: true
  });
}

GoogleEmbbededMapView.propTypes = {
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  title: _propTypes2.default.string,
  query: _propTypes2.default.string,
  height: _propTypes2.default.string,
  width: _propTypes2.default.string
};

GoogleEmbbededMapView.defaultProps = {
  style: {},
  title: '',
  query: '',
  width: '100%',
  height: '100%'
};

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = 'AIzaSyAQ7RQzfSTq4MxmLwxByZzS-g42hFly1FU';

/***/ }),
/* 242 */
/***/ (function(module, exports) {

module.exports = require("react-share");

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: ', '', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-template-columns: 32px 32px 32px 32px 32px;\n\n  /*this should be in a layout element*/\n  margin-top: 14px;\n  ', '\n  @supports not (display: grid) {\n    display: flex;\n  }\n'], ['\n  grid-area: ', '', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-template-columns: 32px 32px 32px 32px 32px;\n\n  /*this should be in a layout element*/\n  margin-top: 14px;\n  ', '\n  @supports not (display: grid) {\n    display: flex;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, function (props) {
  return props.componentName ? '-' + props.componentName : 'component-container';
}, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
}, function (props) {
  return props.hasMarginBottom ? '\n    margin-bottom: 14px;\n  ' : null;
});

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @supports not (display: grid) {\n    margin-right: 10px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @supports not (display: grid) {\n    margin-right: 10px;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.a(_templateObject);

/***/ }),
/* 246 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n\n  font-weight: 500;\n'], ['\n  ', '\n  ', '\n  ', '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n\n  font-weight: 500;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n  '], ['\n    display: flex;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject3), '' /* grid-area: ${props => props.componentName ? `-${props.componentName}` : 'component-container'}${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
                                                                                                                                                                       display: grid;
                                                                                                                                                                       grid-column-gap: 10px;
                                                                                                                                                                       grid-row-gap: 14px;
                                                                                                                                                                       grid-template-columns: 1fr; */);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  ', '\n  text-align: center;\n'], ['\n  ', '\n\n  ', '\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-basis: 16%;\n  '], ['\n    flex-basis: 16%;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex-basis: 8%;\n  '], ['\n    flex-basis: 8%;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, _mediaQuery2.default.tablet(_templateObject2), _mediaQuery2.default.laptopL(_templateObject3));

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  font-size: 16px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-decoration: underline;\n  color: rgba(34,34,34,.55);\n  &:hover {\n    color: #212121;\n    text-decoration: underline;\n  }\n'], ['\n  font-size: 16px;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-decoration: underline;\n  color: rgba(34,34,34,.55);\n  &:hover {\n    color: #212121;\n    text-decoration: underline;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(23);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\ngrid-area: ', '', '', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 14px;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    "component-container-site-name-title"\n    "collapsibleMenu";\n\n  ', '\n\n  width: 100%;\n'], ['\ngrid-area: ', '', '', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 14px;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    "component-container-site-name-title"\n    "collapsibleMenu";\n\n  ', '\n\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var setComponentWrapperContainerClasses = __webpack_require__(12);

module.exports = _styledComponents2.default.section(_templateObject, function (props) {
  return props.componentName ? '' + setComponentWrapperContainerClasses(props.componentName) : 'component-container';
}, function (props) {
  return props.componentName && props.gridAreaId ? '-' : '';
}, function (props) {
  return props.gridAreaId ? '' + props.gridAreaId : '';
}, _mediaQuery2.default.tablet(_templateObject2));

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: 32px;\n  width: 32px;\n  position: absolute;\n  display: block;\n  justify-content: center;\n  cursor: pointer;\n\n  padding-top: 10px;\n  padding-left: 10px;\n\n  @supports not (display: grid) {\n    padding-top: 0;\n    position: relative;\n    display: inline-block;\n    float: left;\n  }\n'], ['\n  height: 32px;\n  width: 32px;\n  position: absolute;\n  display: block;\n  justify-content: center;\n  cursor: pointer;\n\n  padding-top: 10px;\n  padding-left: 10px;\n\n  @supports not (display: grid) {\n    padding-top: 0;\n    position: relative;\n    display: inline-block;\n    float: left;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.a(_templateObject);

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  width: 32px;\n  height: 32px;\n  color: white;\n\n  align-self: center;\n  width: 100%;\n'], ['\n  width: 32px;\n  height: 32px;\n  color: white;\n\n  align-self: center;\n  width: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.span(_templateObject);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: ', '', ';\n  ', '\n\n  @supports not (display: grid) {\n    display: block;\n    position: relative;\n    float: left;\n    text-align: center;\n    width: 80%;\n  }\n'], ['\n  grid-area: ', '', ';\n  ', '\n\n  @supports not (display: grid) {\n    display: block;\n    position: relative;\n    float: left;\n    text-align: center;\n    width: 80%;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var setComponentWrapperContainerClasses = __webpack_require__(12);

module.exports = _styledComponents2.default.span(_templateObject, function (props) {
  return props.componentName ? '' + setComponentWrapperContainerClasses(props.componentName) : 'component-container';
}, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
}, function (props) {
  return props.isGridContainer ? '\n      display: grid;grid-column-gap: 10px;\n      grid-row-gap: 14px;\n      grid-template-columns: 1fr;\n      ' : '';
});

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ezSiteContentStore = __webpack_require__(7);

var _generateFilterItemsList = __webpack_require__(89);

var _generateFilterItemsList2 = _interopRequireDefault(_generateFilterItemsList);

var _generateMenuItemsList = __webpack_require__(90);

var _generateMenuItemsList2 = _interopRequireDefault(_generateMenuItemsList);

var _generateProductItemsList = __webpack_require__(91);

var _generateProductItemsList2 = _interopRequireDefault(_generateProductItemsList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// gridId 2
function buildMenuItems(gridItemId) {
  if (!gridItemId) return [];
  // console.log(content);
  var menuBar = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  var menuBarConfig = _ezSiteContentStore.ContentSynchronizer.getItem('menus', 'menuId', menuBar.gridContent.menuId, true);

  var baseTag = _ezSiteContentStore.ContentSynchronizer.getCollection('site').domain.baseTag;

  return (0, _generateMenuItemsList2.default)(menuBarConfig, baseTag);
}

// gridId 6
function buildMenuFilterItems(gridItemId) {
  if (!gridItemId) return [];

  var filterBar = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  var filterBarConfig = _ezSiteContentStore.ContentSynchronizer.getItem('menus', 'menuId', filterBar.gridContent.menuId, true);
  var _filterBarConfig$menu = filterBarConfig.menuConfig,
      collectionName = _filterBarConfig$menu.collectionName,
      menuItemType = _filterBarConfig$menu.menuItemType;
  var menuName = filterBarConfig.menuName;

  var collection = _ezSiteContentStore.ContentSynchronizer.getCollection(collectionName);

  var baseTag = _ezSiteContentStore.ContentSynchronizer.getCollection('site').domain.baseTag;

  return (0, _generateFilterItemsList2.default)(collection, collectionName, menuItemType, menuName, baseTag);
}

// gridId 10
function buildProductMenuItems(gridItemId) {
  // IDENTICAL WITH buildMenuFilterItems!!!!!!!!!!!!!!!!!!!!! refactor now
  if (!gridItemId) return [];

  var productsBar = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  // console.log(productsBar);
  var productsBarConfig = _ezSiteContentStore.ContentSynchronizer.getItem('menus', 'menuId', productsBar.gridContent.menuId, true);
  // console.log(productsBarConfig);
  var _productsBarConfig$me = productsBarConfig.menuConfig,
      collectionName = _productsBarConfig$me.collectionName,
      menuItemType = _productsBarConfig$me.menuItemType;
  var menuName = productsBarConfig.menuName;

  var collection = _ezSiteContentStore.ContentSynchronizer.getCollection(collectionName);

  var baseTag = _ezSiteContentStore.ContentSynchronizer.getCollection('site').domain.baseTag;

  return (0, _generateProductItemsList2.default)(collection, collectionName, menuItemType, menuName, baseTag);
}

module.exports = {
  buildMenuItems: buildMenuItems,
  buildMenuFilterItems: buildMenuFilterItems,
  buildProductMenuItems: buildProductMenuItems
};

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  color:  ', ';\n  font-size: ', ';\n  line-height: 4;\n  padding-left: ', ';\n'], ['\n  color:  ', ';\n  font-size: ', ';\n  line-height: 4;\n  padding-left: ', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.span(_templateObject, function (props) {
  return props.color || 'white';
}, function (props) {
  return props.fontSize || '10px';
}, function (props) {
  return props.fontSize || '10px';
});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  position: relative;\n  transition-property: max-height;\n  transition-duration: .3s;\n  transition-timing-function: linear;\n  overflow: hidden;\n  max-height: ', ';\n\n  /*TODO: should be configables*/\n  background: #212121;\n'], ['\n  width: 100%;\n  position: relative;\n  transition-property: max-height;\n  transition-duration: .3s;\n  transition-timing-function: linear;\n  overflow: hidden;\n  max-height: ', ';\n\n  /*TODO: should be configables*/\n  background: #212121;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.div(_templateObject, function (props) {
  return props.isOpen ? '100%' : '0';
});

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(258);

var _Container2 = _interopRequireDefault(_Container);

var _ItemsContainer = __webpack_require__(259);

var _ItemsContainer2 = _interopRequireDefault(_ItemsContainer);

var _Header = __webpack_require__(260);

var _Header2 = _interopRequireDefault(_Header);

var _MenuFilterItem = __webpack_require__(261);

var _MenuFilterItem2 = _interopRequireDefault(_MenuFilterItem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var setComponentWrapperContainerClasses = __webpack_require__(12);

var MenuFilterItems = function (_Component) {
  _inherits(MenuFilterItems, _Component);

  function MenuFilterItems(props) {
    _classCallCheck(this, MenuFilterItems);

    var _this = _possibleConstructorReturn(this, (MenuFilterItems.__proto__ || Object.getPrototypeOf(MenuFilterItems)).call(this, props));

    _this.toggleMenu = _this.props.toggleMenu ? _this.props.toggleMenu.bind(_this) : function () {};
    return _this;
  }

  _createClass(MenuFilterItems, [{
    key: 'generatedMenuFilterItems',
    value: function generatedMenuFilterItems() {
      var _this2 = this;

      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return items.map(function (item, index) {
        return _react2.default.createElement(_MenuFilterItem2.default, {
          toggleMenu: _this2.toggleMenu,
          path: item.path,
          title: item.title,
          key: item.id || index
        }) || null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var menuItems = this.props.menuItems || [{
        path: '/',
        title: 'Home'
      }];

      var COMPONENT_NAME = 'MenuFilterItems';
      var containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

      return _react2.default.createElement(_Container2.default, {
        componentName: containerName,
        gridAreaId: ''
      }, _react2.default.createElement(_Header2.default, null, ' filter by:'), _react2.default.createElement(_ItemsContainer2.default, null, this.generatedMenuFilterItems(menuItems)));
    }
  }]);

  return MenuFilterItems;
}(_react.Component);

exports.default = MenuFilterItems;

MenuFilterItems.propTypes = {
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.any),
  toggleMenu: _propTypes2.default.func
};
MenuFilterItems.defaultProps = {
  menuItems: [],
  toggleMenu: function toggleMenu() {}
};

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  word-wrap: break-word;\n  background-color: white;\n\n  padding-bottom: 14px;\n\n'], ['\n  word-wrap: break-word;\n  background-color: white;\n\n  padding-bottom: 14px;\n\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  border-bottom-color: rgba(34,34,34,.08);\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  text-transform: uppercase;\n  color: #212121;\n\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom: 14px;\n'], ['\n  border-bottom-color: rgba(34,34,34,.08);\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  text-transform: uppercase;\n  color: #212121;\n\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom: 14px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(262);

var _Container2 = _interopRequireDefault(_Container);

var _Link = __webpack_require__(263);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// import { Link } from 'react-router-dom';

var MenuFilterItem = function (_Component) {
  _inherits(MenuFilterItem, _Component);

  function MenuFilterItem(props) {
    _classCallCheck(this, MenuFilterItem);

    var _this = _possibleConstructorReturn(this, (MenuFilterItem.__proto__ || Object.getPrototypeOf(MenuFilterItem)).call(this, props));

    _this.toggleMenu = _this.props.toggleMenu.bind(_this);
    return _this;
  }

  _createClass(MenuFilterItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          title = _props.title;

      var COMPONENT_NAME = 'MenuFilterItem';
      return _react2.default.createElement(_Container2.default, {
        onClick: this.toggleMenu,
        componentName: COMPONENT_NAME,
        gridAreaId: ''
      }, _react2.default.createElement(_Link2.default, { to: path }, title));
    }
  }]);

  return MenuFilterItem;
}(_react.Component);

exports.default = MenuFilterItem;

MenuFilterItem.propTypes = {
  path: _propTypes2.default.string,
  title: _propTypes2.default.string,
  toggleMenu: _propTypes2.default.func.isRequired
};

MenuFilterItem.defaultProps = {
  path: '',
  title: ''
};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 5px;\n  padding-left: 5px;\n  line-height: 50px;\n'], ['\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 5px;\n  padding-left: 5px;\n  line-height: 50px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.span(_templateObject);

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  color: #212121;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-decoration: none;\n  vertical-align: middle;\n\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 17px;\n  padding-left: 17px;\n\n  background-color: #fff;\n  border: 1px solid #212121;\n  border-radius: 100px;\n  color: #212121;\n  font-size: 12px;\n  line-height: 1em;\n\n  &:active {\n    text-decoration: underline;\n  }\n'], ['\n  color: #212121;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-decoration: none;\n  vertical-align: middle;\n\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 17px;\n  padding-left: 17px;\n\n  background-color: #fff;\n  border: 1px solid #212121;\n  border-radius: 100px;\n  color: #212121;\n  font-size: 12px;\n  line-height: 1em;\n\n  &:active {\n    text-decoration: underline;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(23);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(265);

var _Container2 = _interopRequireDefault(_Container);

var _MenuItem = __webpack_require__(266);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var setComponentWrapperContainerClasses = __webpack_require__(12);

var MenuItems = function (_Component) {
  _inherits(MenuItems, _Component);

  function MenuItems(props) {
    _classCallCheck(this, MenuItems);

    var _this = _possibleConstructorReturn(this, (MenuItems.__proto__ || Object.getPrototypeOf(MenuItems)).call(this, props));

    _this.toggleMenu = _this.props.toggleMenu ? _this.props.toggleMenu.bind(_this) : function () {};
    return _this;
  }

  _createClass(MenuItems, [{
    key: 'generatedMenuItems',
    value: function generatedMenuItems() {
      var _this2 = this;

      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      return items.map(function (item, index) {
        return _react2.default.createElement(_MenuItem2.default, {
          toggleMenu: _this2.toggleMenu,
          path: item.path,
          title: item.title,
          key: item.id || index
        }) || null;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var menuItems = this.props.menuItems || [{
        path: '/',
        title: 'Home'
      }];

      var COMPONENT_NAME = 'MenuItems';
      var containerName = setComponentWrapperContainerClasses(COMPONENT_NAME);

      return _react2.default.createElement(_Container2.default, {
        componentName: containerName,
        gridAreaId: ''
      }, this.generatedMenuItems(menuItems));
    }
  }]);

  return MenuItems;
}(_react.Component);

exports.default = MenuItems;

MenuItems.propTypes = {
  menuItems: _propTypes2.default.arrayOf(_propTypes2.default.any),
  toggleMenu: _propTypes2.default.func
};
MenuItems.defaultProps = {
  menuItems: [],
  toggleMenu: function toggleMenu() {}
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: ', '', '', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 14px;\n  grid-template-columns: 1fr;\n'], ['\n  grid-area: ', '', '', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 14px;\n  grid-template-columns: 1fr;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var setComponentWrapperContainerClasses = __webpack_require__(12);

module.exports = _styledComponents2.default.section(_templateObject, function (props) {
  return props.componentName ? '' + setComponentWrapperContainerClasses(props.componentName) : 'component-container';
}, function (props) {
  return props.componentName && props.gridAreaId ? '-' : '';
}, function (props) {
  return props.gridAreaId ? '' + props.gridAreaId : '';
});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(267);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    if (props.toggleMenu) {
      _this.toggleMenu = props.toggleMenu;
    }
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          path = _props.path,
          title = _props.title;

      var COMPONENT_NAME = 'MenuItem';
      return _react2.default.createElement(_style.Container, {
        componentName: COMPONENT_NAME,
        gridAreaId: '',
        onClick: this.toggleMenu
      }, _react2.default.createElement(_style.MenuLink, { to: path }, title));
    }
  }]);

  return MenuItem;
}(_react.Component);

exports.default = MenuItem;

MenuItem.propTypes = {
  path: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  toggleMenu: _propTypes2.default.func.isRequired
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MenuLink = __webpack_require__(268);

var _MenuLink2 = _interopRequireDefault(_MenuLink);

var _Container = __webpack_require__(269);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = {
  Container: _Container2.default,
  MenuLink: _MenuLink2.default
};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  color: white;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-decoration: none;\n  vertical-align: middle;\n\n  padding: 14px;\n  display: block;\n\n  &:active {\n    text-decoration: underline;\n  }\n'], ['\n  color: white;\n  text-transform: uppercase;\n  font-size: 12px;\n  text-decoration: none;\n  vertical-align: middle;\n\n  padding: 14px;\n  display: block;\n\n  &:active {\n    text-decoration: underline;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouterDom = __webpack_require__(23);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = (0, _styledComponents2.default)(_reactRouterDom.Link)(_templateObject);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimatedLoadingBar = __webpack_require__(271);

var _AnimatedLoadingBar2 = _interopRequireDefault(_AnimatedLoadingBar);

var _MaskingBackgroundContainer = __webpack_require__(273);

var _MaskingBackgroundContainer2 = _interopRequireDefault(_MaskingBackgroundContainer);

var _OpaqBackground = __webpack_require__(274);

var _OpaqBackground2 = _interopRequireDefault(_OpaqBackground);

var _LoadingMaskContainer = __webpack_require__(275);

var _LoadingMaskContainer2 = _interopRequireDefault(_LoadingMaskContainer);

var _LogoContainer = __webpack_require__(276);

var _LogoContainer2 = _interopRequireDefault(_LogoContainer);

var _LoadingBarContainer = __webpack_require__(277);

var _LoadingBarContainer2 = _interopRequireDefault(_LoadingBarContainer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var LOGO_IMAGE_URL = '';
var LoadingMask = function LoadingMask(props) {
  var fullScreen = props.fullScreen;

  if (fullScreen) {
    return _react2.default.createElement(_LoadingMaskContainer2.default, null, _react2.default.createElement(_MaskingBackgroundContainer2.default, null, _react2.default.createElement(_LogoContainer2.default, { src: LOGO_IMAGE_URL }), _react2.default.createElement(_LoadingBarContainer2.default, null, _react2.default.createElement(_AnimatedLoadingBar2.default, null))), _react2.default.createElement(_OpaqBackground2.default, null));
  }
  return _react2.default.createElement(_MaskingBackgroundContainer2.default, null, _react2.default.createElement(_LogoContainer2.default, { src: LOGO_IMAGE_URL }), _react2.default.createElement(_LoadingBarContainer2.default, null, _react2.default.createElement(_AnimatedLoadingBar2.default, null)));
};

LoadingMask.propTypes = {
  fullScreen: _propTypes2.default.bool
};

LoadingMask.defaultProps = {
  fullScreen: false
};

exports.default = LoadingMask;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Bar = __webpack_require__(272);

var _Bar2 = _interopRequireDefault(_Bar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var AnimatedLoadingBar = function AnimatedLoadingBar() {
  return _react2.default.createElement(_Bar2.default, null);
};

exports.default = AnimatedLoadingBar;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 2px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n\n  &:before {\n    display: block;\n    position: absolute;\n    content: "";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color: #40bcfc;\n    animation: loading 2s linear infinite;\n  }\n\n  @keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% { left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n  }\n'], ['\n  height: 2px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd;\n\n  &:before {\n    display: block;\n    position: absolute;\n    content: "";\n    left: -200px;\n    width: 200px;\n    height: 4px;\n    background-color: #40bcfc;\n    animation: loading 2s linear infinite;\n  }\n\n  @keyframes loading {\n    from {left: -200px; width: 30%;}\n    50% {width: 30%;}\n    70% {width: 70%;}\n    80% { left: 50%;}\n    95% {left: 120%;}\n    to {left: 100%;}\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n'], ['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  background: #495057;\n  opacity: .5;\n  position: absolute;\n  top: 0;\n  z-index: -1;\n'], ['\n  width: 100%;\n  height: 100%;\n  background: #495057;\n  opacity: .5;\n  position: absolute;\n  top: 0;\n  z-index: -1;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  position: fixed;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n'], ['\n  display: block;\n  position: fixed;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 16px;\n'], ['\n  margin-bottom: 16px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.img(_templateObject);

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 50%;\n'], ['\n  width: 50%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _htmlReactParser = __webpack_require__(279);

var _htmlReactParser2 = _interopRequireDefault(_htmlReactParser);

var _PageShell = __webpack_require__(25);

var _PageShell2 = _interopRequireDefault(_PageShell);

var _PageContentContainer = __webpack_require__(342);

var _PageContentContainer2 = _interopRequireDefault(_PageContentContainer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function About(props) {
  return _react2.default.createElement(_PageShell2.default, {
    containerLevelClass: '',
    style: {}
  }, _react2.default.createElement(_PageContentContainer2.default, null, (0, _htmlReactParser2.default)('\n        <section style="max-width: 60%">\n        <h1 style="font-size: 24px;\n          text-transform: uppercase;\n          text-decoration: underline;">Our Goal</h1>\n        <p style="font-size: 16px;">We believe that health is the best investment. Our goal is to offer a healthy variety of nutritious snacks.</p>\n        <p style="font-size: 16px;">Our portfolio of natural sun-dried fruits and raw nuts are exceptional in flavor, quality and taste.</p>\n        <p style="font-size: 16px;">Our dried fruits and nuts are full of heart healthy antioxidants, essential trace elements and omega 3\u2019s fatty acids.</p>\n\n        <h1 style="font-size: 24px;\n          text-transform: uppercase;\n          text-decoration: underline;">Our difference</h1>\n        <p style="font-size: 16px;">Our products are exceptional in flavor, quality and taste.</p>\n        <p style="font-size: 16px;">This can be attributed to the unique eco system of the orchards, from which we source our produce.</p>\n        <p style="font-size: 16px;">These orchards are largely untouched by man, protected by Mother Nature and naturally irrigated by the water run-off from the surrounding mountain ranges. </p>\n        <p style="font-size: 16px;">Our products are harvested with care, naturally sun-dried and meticulously hand-packed.</p>\n\n        <h1 style="font-size: 24px;\n          text-transform: uppercase;\n          text-decoration: underline;">About Us</h1>\n        <p style="font-size: 16px;">We are a small organic food startup with offices in New York and a warehouse in the New Jersey Area.</p>\n        <p style="font-size: 16px;">Our initiatives are directed for the benefit of our suppliers and their communities most of whom are landlocked and have never before exported their produce beyond Central and South Asia.</p>\n        <p style="font-size: 16px;">We have built a value-added supply chain based on the principle of mutual trust and fair compensation practices. </p>\n\n        <h1 style="font-size: 24px;\n          text-transform: uppercase;\n          text-decoration: underline;">Organic Certification</h1>\n        <p style="font-size: 16px;">All our products are organic in nature, free of pesticides insecticides and any additives or preservatives. We are in the process of actively pursuing USDA organic certification for our full line of dried fruits and nuts. </p>\n        </section>\n        ')), props.children);
}
About.propTypes = {
  children: _propTypes2.default.objectOf(_propTypes2.default.any)
};
About.defaultProps = {
  children: null
};
exports.default = About;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
var domToReact = __webpack_require__(280);
var htmlToDOM = __webpack_require__(289);

// decode HTML entities by default for `htmlparser2`
var domParserOptions = { decodeEntities: true };

/**
 * Convert HTML string to React elements.
 *
 * @param  {String}   html              - The HTML string.
 * @param  {Object}   [options]         - The additional options.
 * @param  {Function} [options.replace] - The replace method.
 * @return {ReactElement|Array}
 */
function HTMLReactParser(html, options) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string');
    }
    return domToReact(htmlToDOM(html, domParserOptions), options);
}

/**
 * Export HTML to React parser.
 */
module.exports = HTMLReactParser;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
var React = __webpack_require__(1);
var attributesToProps = __webpack_require__(281);

/**
 * Convert DOM nodes to React elements.
 *
 * @param  {Array}    nodes             - The DOM nodes.
 * @param  {Object}   [options]         - The additional options.
 * @param  {Function} [options.replace] - The replace method.
 * @return {ReactElement|Array}
 */
function domToReact(nodes, options) {
    options = options || {};
    var result = [];
    var node;
    var isReplacePresent = typeof options.replace === 'function';
    var replacement;
    var props;
    var children;

    for (var i = 0, len = nodes.length; i < len; i++) {
        node = nodes[i];

        // replace with custom React element (if applicable)
        if (isReplacePresent) {
            replacement = options.replace(node);

            if (React.isValidElement(replacement)) {
                // specify a "key" prop if element has siblings
                // https://fb.me/react-warning-keys
                if (len > 1) {
                    replacement = React.cloneElement(replacement, { key: i });
                }
                result.push(replacement);
                continue;
            }
        }

        if (node.type === 'text') {
            result.push(node.data);
            continue;
        }

        // update values
        props = attributesToProps(node.attribs);
        children = null;

        // node type for <script> is "script"
        // node type for <style> is "style"
        if (node.type === 'script' || node.type === 'style') {
            // prevent text in <script> or <style> from being escaped
            // https://facebook.github.io/react/tips/dangerously-set-inner-html.html
            if (node.children[0]) {
                props.dangerouslySetInnerHTML = {
                    __html: node.children[0].data
                };
            }

        } else if (node.type === 'tag') {
            // setting textarea value in children is an antipattern in React
            // https://facebook.github.io/react/docs/forms.html#why-textarea-value
            if (node.name === 'textarea' && node.children[0]) {
                props.defaultValue = node.children[0].data;

            // continue recursion of creating React elements (if applicable)
            } else if (node.children && node.children.length) {
                children = domToReact(node.children, options);
            }

        // skip all other cases (e.g., comment)
        } else {
            continue;
        }

        // specify a "key" prop if element has siblings
        // https://fb.me/react-warning-keys
        if (len > 1) {
            props.key = i;
        }

        result.push(
            React.createElement(node.name, props, children)
        );
    }

    if (result.length === 1) {
        return result[0];
    } else {
        return result;
    }
}

/**
 * Export DOM to React parser.
 */
module.exports = domToReact;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
var utilities = __webpack_require__(92);
var propertyConfig = __webpack_require__(282);
var styleToObject = __webpack_require__(287);
var config = propertyConfig.config;
var isCustomAttribute = propertyConfig.HTMLDOMPropertyConfig.isCustomAttribute;

/**
 * Make attributes compatible with React props.
 *
 * @param  {Object} attributes - The attributes.
 * @return {Object}            - The props.
 */
function attributesToProps(attributes) {
    attributes = attributes || {};
    var props = {};
    var propertyName;
    var propertyValue;
    var reactProperty;

    for (propertyName in attributes) {
        propertyValue = attributes[propertyName];

        // custom attributes (`data-` and `aria-`)
        if (isCustomAttribute(propertyName)) {
            props[propertyName] = propertyValue;
            continue;
        }

        // make HTML DOM attribute/property consistent with React attribute/property
        reactProperty = config.html[propertyName.toLowerCase()];
        if (reactProperty) {
            props[reactProperty] = propertyValue;
            continue;
        }

        // make SVG DOM attribute/property consistent with React attribute/property
        reactProperty = config.svg[propertyName];
        if (reactProperty) {
            props[reactProperty] = propertyValue;
        }
    }

    // convert inline style to object
    if (attributes.style) {
        props.style = cssToJs(attributes.style);
    }

    return props;
}

/**
 * Convert CSS style string to JS style object.
 *
 * @param  {String} style - The CSS style.
 * @return {Object}       - The JS style object.
 */
function cssToJs(style) {
    if (typeof style !== 'string') {
        throw new Error('`cssToJs`: first argument must be a string. ');
    }

    var styleObj = {};

    styleToObject(style, function(propName, propValue) {
        // Check if it's not a comment node
        if (propName && propValue) {
            styleObj[utilities.camelCase(propName)] = propValue;
        }
    });

    return styleObj;
}

/**
 * Export attributes to props helper.
 */
module.exports = attributesToProps;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
var utilities = __webpack_require__(92);

// HTML and SVG DOM Property Configs
var HTMLDOMPropertyConfig = __webpack_require__(283);
var SVGDOMPropertyConfig = __webpack_require__(286);

var config = {
    html: {},
    svg: {}
};

var propertyName;

/**
 * HTML DOM property config.
 * https://github.com/facebook/react/blob/master/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
 */

// first map out the HTML attribute names
// e.g., { className: 'class' } => { 'class': 'className' }
config.html = utilities.invertObject(
    HTMLDOMPropertyConfig.DOMAttributeNames
);

// then map out the rest of the HTML properties
// e.g., { readOnly: 0 } => { readonly: 'readOnly' }
for (propertyName in HTMLDOMPropertyConfig.Properties) {
    // lowercase to make matching property names easier
    config.html[propertyName.toLowerCase()] = propertyName;
}

/**
 * SVG DOM property config.
 * https://github.com/facebook/react/blob/master/src/renderers/dom/shared/SVGDOMPropertyConfig.js
 */

// first map out the SVG attribute names
// e.g., { fontSize: 'font-size' } => { 'font-size': 'fontSize' }
config.svg = utilities.invertObject(
    SVGDOMPropertyConfig.DOMAttributeNames
);

// then map out the rest of the SVG properties
// e.g., { fillRule: 0 } => { fillRule: 'fillRule' }
for (propertyName in SVGDOMPropertyConfig.Properties) {
    // do not lowercase as some svg properties are camel cased
    config.html[propertyName] = propertyName;
}

/**
 * Export property configs.
 */
module.exports = {
    config: config,
    HTMLDOMPropertyConfig: HTMLDOMPropertyConfig,
    SVGDOMPropertyConfig: SVGDOMPropertyConfig
};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var DOMProperty = __webpack_require__(284);

var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var HTMLDOMPropertyConfig = {
  isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
  Properties: {
    /**
     * Standard Properties
     */
    accept: 0,
    acceptCharset: 0,
    accessKey: 0,
    action: 0,
    allowFullScreen: HAS_BOOLEAN_VALUE,
    allowTransparency: 0,
    alt: 0,
    // specifies target context for links with `preload` type
    as: 0,
    async: HAS_BOOLEAN_VALUE,
    autoComplete: 0,
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    capture: HAS_BOOLEAN_VALUE,
    cellPadding: 0,
    cellSpacing: 0,
    charSet: 0,
    challenge: 0,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    cite: 0,
    classID: 0,
    className: 0,
    cols: HAS_POSITIVE_NUMERIC_VALUE,
    colSpan: 0,
    content: 0,
    contentEditable: 0,
    contextMenu: 0,
    controls: HAS_BOOLEAN_VALUE,
    controlsList: 0,
    coords: 0,
    crossOrigin: 0,
    data: 0, // For `<object />` acts as `src`.
    dateTime: 0,
    'default': HAS_BOOLEAN_VALUE,
    defer: HAS_BOOLEAN_VALUE,
    dir: 0,
    disabled: HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: 0,
    encType: 0,
    form: 0,
    formAction: 0,
    formEncType: 0,
    formMethod: 0,
    formNoValidate: HAS_BOOLEAN_VALUE,
    formTarget: 0,
    frameBorder: 0,
    headers: 0,
    height: 0,
    hidden: HAS_BOOLEAN_VALUE,
    high: 0,
    href: 0,
    hrefLang: 0,
    htmlFor: 0,
    httpEquiv: 0,
    icon: 0,
    id: 0,
    inputMode: 0,
    integrity: 0,
    is: 0,
    keyParams: 0,
    keyType: 0,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: HAS_BOOLEAN_VALUE,
    low: 0,
    manifest: 0,
    marginHeight: 0,
    marginWidth: 0,
    max: 0,
    maxLength: 0,
    media: 0,
    mediaGroup: 0,
    method: 0,
    min: 0,
    minLength: 0,
    // Caution; `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`.
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    name: 0,
    nonce: 0,
    noValidate: HAS_BOOLEAN_VALUE,
    open: HAS_BOOLEAN_VALUE,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: HAS_BOOLEAN_VALUE,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 0,
    readOnly: HAS_BOOLEAN_VALUE,
    referrerPolicy: 0,
    rel: 0,
    required: HAS_BOOLEAN_VALUE,
    reversed: HAS_BOOLEAN_VALUE,
    role: 0,
    rows: HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: HAS_NUMERIC_VALUE,
    sandbox: 0,
    scope: 0,
    scoped: HAS_BOOLEAN_VALUE,
    scrolling: 0,
    seamless: HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    shape: 0,
    size: HAS_POSITIVE_NUMERIC_VALUE,
    sizes: 0,
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: 0,
    src: 0,
    srcDoc: 0,
    srcLang: 0,
    srcSet: 0,
    start: HAS_NUMERIC_VALUE,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 0,
    target: 0,
    title: 0,
    // Setting .type throws on non-<input> tags
    type: 0,
    useMap: 0,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,

    /**
     * RDFa Properties
     */
    about: 0,
    datatype: 0,
    inlist: 0,
    prefix: 0,
    // property is also supported for OpenGraph in meta tags.
    property: 0,
    resource: 0,
    'typeof': 0,
    vocab: 0,

    /**
     * Non-standard Properties
     */
    // autoCapitalize and autoCorrect are supported in Mobile Safari for
    // keyboard hints.
    autoCapitalize: 0,
    autoCorrect: 0,
    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
    autoSave: 0,
    // color is for Safari mask-icon link
    color: 0,
    // itemProp, itemScope, itemType are for
    // Microdata support. See http://schema.org/docs/gs.html
    itemProp: 0,
    itemScope: HAS_BOOLEAN_VALUE,
    itemType: 0,
    // itemID and itemRef are for Microdata support as well but
    // only specified in the WHATWG spec document. See
    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
    itemID: 0,
    itemRef: 0,
    // results show looking glass icon and recent searches on input
    // search fields in WebKit/Blink
    results: 0,
    // IE-only attribute that specifies security restrictions on an iframe
    // as an alternative to the sandbox attribute on IE<10
    security: 0,
    // IE-only attribute that controls focus behavior
    unselectable: 0
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMPropertyNames: {},
  DOMMutationMethods: {
    value: function (node, value) {
      if (value == null) {
        return node.removeAttribute('value');
      }

      // Number inputs get special treatment due to some edge cases in
      // Chrome. Let everything else assign the value attribute as normal.
      // https://github.com/facebook/react/issues/7253#issuecomment-236074326
      if (node.type !== 'number' || node.hasAttribute('value') === false) {
        node.setAttribute('value', '' + value);
      } else if (node.validity && !node.validity.badInput && node.ownerDocument.activeElement !== node) {
        // Don't assign an attribute if validation reports bad
        // input. Chrome will clear the value. Additionally, don't
        // operate on inputs that have focus, otherwise Chrome might
        // strip off trailing decimal places and cause the user's
        // cursor position to jump to the beginning of the input.
        //
        // In ReactDOMInput, we have an onBlur event that will trigger
        // this function again when focus is lost.
        node.setAttribute('value', '' + value);
      }
    }
  }
};

module.exports = HTMLDOMPropertyConfig;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__(285);

var invariant = __webpack_require__(48);

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }

    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ?  false ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : _prodInvariant('48', propName) : void 0;

      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ?  false ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : _prodInvariant('50', propName) : void 0;

      if (false) {
        DOMProperty.getPossibleStandardName[lowerCased] = propName;
      }

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        if (false) {
          DOMProperty.getPossibleStandardName[attributeName] = propName;
        }
      }

      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }

      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];
      }

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }

      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',

  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {},

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   *
   * autofocus is predefined, because adding it to the property whitelist
   * causes unintended side effects.
   *
   * @type {Object}
   */
  getPossibleStandardName:  false ? { autofocus: 'autoFocus' } : null,

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  injection: DOMPropertyInjection
};

module.exports = DOMProperty;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var NS = {
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};

// We use attributes for everything SVG so let's avoid some duplication and run
// code instead.
// The following are all specified in the HTML config already so we exclude here.
// - class (as className)
// - color
// - height
// - id
// - lang
// - max
// - media
// - method
// - min
// - name
// - style
// - target
// - type
// - width
var ATTRS = {
  accentHeight: 'accent-height',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 'alignment-baseline',
  allowReorder: 'allowReorder',
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 'arabic-form',
  ascent: 0,
  attributeName: 'attributeName',
  attributeType: 'attributeType',
  autoReverse: 'autoReverse',
  azimuth: 0,
  baseFrequency: 'baseFrequency',
  baseProfile: 'baseProfile',
  baselineShift: 'baseline-shift',
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 'calcMode',
  capHeight: 'cap-height',
  clip: 0,
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  contentScriptType: 'contentScriptType',
  contentStyleType: 'contentStyleType',
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 'diffuseConstant',
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 'dominant-baseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 'edgeMode',
  elevation: 0,
  enableBackground: 'enable-background',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 'externalResourcesRequired',
  fill: 0,
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  filter: 0,
  filterRes: 'filterRes',
  filterUnits: 'filterUnits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  focusable: 0,
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphRef',
  gradientTransform: 'gradientTransform',
  gradientUnits: 'gradientUnits',
  hanging: 0,
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  ideographic: 0,
  imageRendering: 'image-rendering',
  'in': 0,
  in2: 0,
  intercept: 0,
  k: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  kernelMatrix: 'kernelMatrix',
  kernelUnitLength: 'kernelUnitLength',
  kerning: 0,
  keyPoints: 'keyPoints',
  keySplines: 'keySplines',
  keyTimes: 'keyTimes',
  lengthAdjust: 'lengthAdjust',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  limitingConeAngle: 'limitingConeAngle',
  local: 0,
  markerEnd: 'marker-end',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerHeight: 'markerHeight',
  markerUnits: 'markerUnits',
  markerWidth: 'markerWidth',
  mask: 0,
  maskContentUnits: 'maskContentUnits',
  maskUnits: 'maskUnits',
  mathematical: 0,
  mode: 0,
  numOctaves: 'numOctaves',
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  paintOrder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathLength',
  patternContentUnits: 'patternContentUnits',
  patternTransform: 'patternTransform',
  patternUnits: 'patternUnits',
  pointerEvents: 'pointer-events',
  points: 0,
  pointsAtX: 'pointsAtX',
  pointsAtY: 'pointsAtY',
  pointsAtZ: 'pointsAtZ',
  preserveAlpha: 'preserveAlpha',
  preserveAspectRatio: 'preserveAspectRatio',
  primitiveUnits: 'primitiveUnits',
  r: 0,
  radius: 0,
  refX: 'refX',
  refY: 'refY',
  renderingIntent: 'rendering-intent',
  repeatCount: 'repeatCount',
  repeatDur: 'repeatDur',
  requiredExtensions: 'requiredExtensions',
  requiredFeatures: 'requiredFeatures',
  restart: 0,
  result: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  seed: 0,
  shapeRendering: 'shape-rendering',
  slope: 0,
  spacing: 0,
  specularConstant: 'specularConstant',
  specularExponent: 'specularExponent',
  speed: 0,
  spreadMethod: 'spreadMethod',
  startOffset: 'startOffset',
  stdDeviation: 'stdDeviation',
  stemh: 0,
  stemv: 0,
  stitchTiles: 'stitchTiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  surfaceScale: 'surfaceScale',
  systemLanguage: 'systemLanguage',
  tableValues: 'tableValues',
  targetX: 'targetX',
  targetY: 'targetY',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textRendering: 'text-rendering',
  textLength: 'textLength',
  to: 0,
  transform: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  unicode: 0,
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  values: 0,
  vectorEffect: 'vector-effect',
  version: 0,
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  viewBox: 'viewBox',
  viewTarget: 'viewTarget',
  visibility: 0,
  widths: 0,
  wordSpacing: 'word-spacing',
  writingMode: 'writing-mode',
  x: 0,
  xHeight: 'x-height',
  x1: 0,
  x2: 0,
  xChannelSelector: 'xChannelSelector',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xmlBase: 'xml:base',
  xmlns: 0,
  xmlnsXlink: 'xmlns:xlink',
  xmlLang: 'xml:lang',
  xmlSpace: 'xml:space',
  y: 0,
  y1: 0,
  y2: 0,
  yChannelSelector: 'yChannelSelector',
  z: 0,
  zoomAndPan: 'zoomAndPan'
};

var SVGDOMPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    xlinkActuate: NS.xlink,
    xlinkArcrole: NS.xlink,
    xlinkHref: NS.xlink,
    xlinkRole: NS.xlink,
    xlinkShow: NS.xlink,
    xlinkTitle: NS.xlink,
    xlinkType: NS.xlink,
    xmlBase: NS.xml,
    xmlLang: NS.xml,
    xmlSpace: NS.xml
  },
  DOMAttributeNames: {}
};

Object.keys(ATTRS).forEach(function (key) {
  SVGDOMPropertyConfig.Properties[key] = 0;
  if (ATTRS[key]) {
    SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
  }
});

module.exports = SVGDOMPropertyConfig;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(288);

/**
 * Parses inline style.
 *
 * Example: 'color:red' => { color: 'red' }
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
module.exports = function parseInlineStyle(style, iterator) {
  if (!style || typeof style !== 'string') return null;

  // make sure to wrap declarations in placeholder
  var declarations = parse('p{' + style + '}').stylesheet.rules[0].declarations;
  var declaration, property, value;

  var output = null;
  var hasIterator = typeof iterator === 'function';

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
};


/***/ }),
/* 288 */
/***/ (function(module, exports) {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g

module.exports = function(css, options){
  options = options || {};

  /**
   * Positional.
   */

  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   */

  function updatePosition(str) {
    var lines = str.match(/\n/g);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf('\n');
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   */

  function position() {
    var start = { line: lineno, column: column };
    return function(node){
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node
   */

  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string
   */

  Position.prototype.content = css;

  /**
   * Error `msg`.
   */

  var errorsList = [];

  function error(msg) {
    var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = css;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Parse stylesheet.
   */

  function stylesheet() {
    var rulesList = rules();

    return {
      type: 'stylesheet',
      stylesheet: {
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
  }

  /**
   * Opening brace.
   */

  function open() {
    return match(/^{\s*/);
  }

  /**
   * Closing brace.
   */

  function close() {
    return match(/^}/);
  }

  /**
   * Parse ruleset.
   */

  function rules() {
    var node;
    var rules = [];
    whitespace();
    comments(rules);
    while (css.length && css.charAt(0) != '}' && (node = atrule() || rule())) {
      if (node !== false) {
        rules.push(node);
        comments(rules);
      }
    }
    return rules;
  }

  /**
   * Match `re` and return captures.
   */

  function match(re) {
    var m = re.exec(css);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */

  function whitespace() {
    match(/^\s*/);
  }

  /**
   * Parse comments;
   */

  function comments(rules) {
    var c;
    rules = rules || [];
    while (c = comment()) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   */

  function comment() {
    var pos = position();
    if ('/' != css.charAt(0) || '*' != css.charAt(1)) return;

    var i = 2;
    while ("" != css.charAt(i) && ('*' != css.charAt(i) || '/' != css.charAt(i + 1))) ++i;
    i += 2;

    if ("" === css.charAt(i-1)) {
      return error('End of comment missing');
    }

    var str = css.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    css = css.slice(i);
    column += 2;

    return pos({
      type: 'comment',
      comment: str
    });
  }

  /**
   * Parse selector.
   */

  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) return;
    /* @fix Remove all comments from selectors
     * http://ostermiller.org/findcomment.html */
    return trim(m[0])
      .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
      .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(m) {
        return m.replace(/,/g, '\u200C');
      })
      .split(/\s*(?![^(]*\)),\s*/)
      .map(function(s) {
        return s.replace(/\u200C/g, ',');
      });
  }

  /**
   * Parse declaration.
   */

  function declaration() {
    var pos = position();

    // prop
    var prop = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!prop) return;
    prop = trim(prop[0]);

    // :
    if (!match(/^:\s*/)) return error("property missing ':'");

    // val
    var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);

    var ret = pos({
      type: 'declaration',
      property: prop.replace(commentre, ''),
      value: val ? trim(val[0]).replace(commentre, '') : ''
    });

    // ;
    match(/^[;\s]*/);

    return ret;
  }

  /**
   * Parse declarations.
   */

  function declarations() {
    var decls = [];

    if (!open()) return error("missing '{'");
    comments(decls);

    // declarations
    var decl;
    while (decl = declaration()) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    if (!close()) return error("missing '}'");
    return decls;
  }

  /**
   * Parse keyframe.
   */

  function keyframe() {
    var m;
    var vals = [];
    var pos = position();

    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }

    if (!vals.length) return;

    return pos({
      type: 'keyframe',
      values: vals,
      declarations: declarations()
    });
  }

  /**
   * Parse keyframes.
   */

  function atkeyframes() {
    var pos = position();
    var m = match(/^@([-\w]+)?keyframes\s*/);

    if (!m) return;
    var vendor = m[1];

    // identifier
    var m = match(/^([-\w]+)\s*/);
    if (!m) return error("@keyframes missing name");
    var name = m[1];

    if (!open()) return error("@keyframes missing '{'");

    var frame;
    var frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }

    if (!close()) return error("@keyframes missing '}'");

    return pos({
      type: 'keyframes',
      name: name,
      vendor: vendor,
      keyframes: frames
    });
  }

  /**
   * Parse supports.
   */

  function atsupports() {
    var pos = position();
    var m = match(/^@supports *([^{]+)/);

    if (!m) return;
    var supports = trim(m[1]);

    if (!open()) return error("@supports missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@supports missing '}'");

    return pos({
      type: 'supports',
      supports: supports,
      rules: style
    });
  }

  /**
   * Parse host.
   */

  function athost() {
    var pos = position();
    var m = match(/^@host\s*/);

    if (!m) return;

    if (!open()) return error("@host missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@host missing '}'");

    return pos({
      type: 'host',
      rules: style
    });
  }

  /**
   * Parse media.
   */

  function atmedia() {
    var pos = position();
    var m = match(/^@media *([^{]+)/);

    if (!m) return;
    var media = trim(m[1]);

    if (!open()) return error("@media missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@media missing '}'");

    return pos({
      type: 'media',
      media: media,
      rules: style
    });
  }


  /**
   * Parse custom-media.
   */

  function atcustommedia() {
    var pos = position();
    var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
    if (!m) return;

    return pos({
      type: 'custom-media',
      name: trim(m[1]),
      media: trim(m[2])
    });
  }

  /**
   * Parse paged media.
   */

  function atpage() {
    var pos = position();
    var m = match(/^@page */);
    if (!m) return;

    var sel = selector() || [];

    if (!open()) return error("@page missing '{'");
    var decls = comments();

    // declarations
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@page missing '}'");

    return pos({
      type: 'page',
      selectors: sel,
      declarations: decls
    });
  }

  /**
   * Parse document.
   */

  function atdocument() {
    var pos = position();
    var m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) return;

    var vendor = trim(m[1]);
    var doc = trim(m[2]);

    if (!open()) return error("@document missing '{'");

    var style = comments().concat(rules());

    if (!close()) return error("@document missing '}'");

    return pos({
      type: 'document',
      document: doc,
      vendor: vendor,
      rules: style
    });
  }

  /**
   * Parse font-face.
   */

  function atfontface() {
    var pos = position();
    var m = match(/^@font-face\s*/);
    if (!m) return;

    if (!open()) return error("@font-face missing '{'");
    var decls = comments();

    // declarations
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }

    if (!close()) return error("@font-face missing '}'");

    return pos({
      type: 'font-face',
      declarations: decls
    });
  }

  /**
   * Parse import
   */

  var atimport = _compileAtrule('import');

  /**
   * Parse charset
   */

  var atcharset = _compileAtrule('charset');

  /**
   * Parse namespace
   */

  var atnamespace = _compileAtrule('namespace');

  /**
   * Parse non-block at-rules
   */


  function _compileAtrule(name) {
    var re = new RegExp('^@' + name + '\\s*([^;]+);');
    return function() {
      var pos = position();
      var m = match(re);
      if (!m) return;
      var ret = { type: name };
      ret[name] = m[1].trim();
      return pos(ret);
    }
  }

  /**
   * Parse at rule.
   */

  function atrule() {
    if (css[0] != '@') return;

    return atkeyframes()
      || atmedia()
      || atcustommedia()
      || atsupports()
      || atimport()
      || atcharset()
      || atnamespace()
      || atdocument()
      || atpage()
      || athost()
      || atfontface();
  }

  /**
   * Parse rule.
   */

  function rule() {
    var pos = position();
    var sel = selector();

    if (!sel) return error('selector missing');
    comments();

    return pos({
      type: 'rule',
      selectors: sel,
      declarations: declarations()
    });
  }

  return addParent(stylesheet());
};

/**
 * Trim `str`.
 */

function trim(str) {
  return str ? str.replace(/^\s+|\s+$/g, '') : '';
}

/**
 * Adds non-enumerable parent node reference to each node.
 */

function addParent(obj, parent) {
  var isNode = obj && typeof obj.type === 'string';
  var childParent = isNode ? obj : parent;

  for (var k in obj) {
    var value = obj[k];
    if (Array.isArray(value)) {
      value.forEach(function(v) { addParent(v, childParent); });
    } else if (value && typeof value === 'object') {
      addParent(value, childParent);
    }
  }

  if (isNode) {
    Object.defineProperty(obj, 'parent', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: parent || null
    });
  }

  return obj;
}


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
var domparser = __webpack_require__(290);
var utilities = __webpack_require__(93);
var formatDOM = utilities.formatDOM;
var isIE9 = utilities.isIE(9);

/**
 * Constants.
 */
var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML and reformats DOM nodes output.
 *
 * @param  {String} html - The HTML string.
 * @return {Array}       - The formatted DOM nodes.
 */
module.exports = function parseDOM(html) {
    if (typeof html !== 'string') {
        throw new TypeError('First argument must be a string.');
    }
    if (!html) return [];

    // match directive
    var match = html.match(DIRECTIVE_REGEX);
    var directive;
    if (match && match[1]) {
        directive = match[1];

        // remove directive in IE9 because DOMParser uses
        // MIME type 'text/xml' instead of 'text/html'
        if (isIE9) {
            html = html.replace(match[0], '');
        }
    }

    return formatDOM(domparser(html), null, directive);
};


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */
var utilities = __webpack_require__(93);
var detectIE = utilities.isIE;

/**
 * Constants.
 */
var HTML_TAG_NAME = 'html';
var BODY_TAG_NAME = 'body';
var HEAD_TAG_NAME = 'head';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
var HEAD_REGEX = /<\/head>/i;
var BODY_REGEX = /<\/body>/i;
// http://www.w3.org/TR/html/syntax.html#void-elements
var VOID_ELEMENTS_REGEX = /<(area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)(.*?)\/?>/gi;

// browser support
var isIE = detectIE();
var isIE9 = detectIE(9);

/**
 * DOMParser (performance: slow).
 *
 * https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
var parseFromString;
if (typeof window.DOMParser === 'function') {
    var domParser = new window.DOMParser();
    // IE9 does not support 'text/html' MIME type
    // https://msdn.microsoft.com/en-us/library/ff975278(v=vs.85).aspx
    var MIME_TYPE = isIE9 ? 'text/xml' : 'text/html';

    /**
     * Creates an HTML document using `DOMParser.parseFromString`.
     *
     * @param  {String} html      - The HTML string.
     * @param  {String} [tagName] - The element to render the HTML (with 'body' as fallback).
     * @return {HTMLDocument}
     */
    parseFromString = function domStringParser(html, tagName) {
        if (tagName) {
            html = ['<', tagName, '>', html, '</', tagName, '>'].join('');
        }
        // because IE9 only supports MIME type 'text/xml', void elements need to be self-closed
        if (isIE9) {
            html = html.replace(VOID_ELEMENTS_REGEX, '<$1$2$3/>');
        }
        return domParser.parseFromString(html, MIME_TYPE);
    };
}

/**
 * DOMImplementation (performance: fair).
 *
 * https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
var parseFromDocument;
if (typeof document.implementation === 'object') {
    // title parameter is required in IE
    // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
    var doc = document.implementation.createHTMLDocument(isIE ? 'HTML_DOM_PARSER_TITLE' : undefined);

    /**
     * Use HTML document created by `document.implementation.createHTMLDocument`.
     *
     * @param  {String} html      - The HTML string.
     * @param  {String} [tagName] - The element to render the HTML (with 'body' as fallback).
     * @return {HTMLDocument}
     */
    parseFromDocument = function createHTMLDocument(html, tagName) {
        if (tagName) {
            doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
            return doc;
        }

        try {
            doc.documentElement.innerHTML = html;
            return doc;
        // fallback when certain elements in `documentElement` are read-only (IE9)
        } catch (err) {
            if (parseFromString) return parseFromString(html);
        }
    };
}

/**
 * Template (performance: fast).
 *
 * https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var parseFromTemplate;
var template = document.createElement('template');
if (template.content) {

    /**
     * Uses a template element (content fragment) to parse HTML.
     *
     * @param  {String} html - The HTML string.
     * @return {NodeList}
     */
    parseFromTemplate = function templateParser(html) {
        template.innerHTML = html;
        return template.content.childNodes;
    };
}

/** Fallback document parser. */
var parseWithFallback = parseFromDocument || parseFromString;

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {String} html      - The HTML string.
 * @param  {String} [tagName] - The tag name.
 * @return {NodeList|Array}
 */
module.exports = function domparser(html) {
    // try to match first tag
    var tagName;
    var match = html.match(FIRST_TAG_REGEX);
    if (match && match[1]) {
        tagName = match[1].toLowerCase();
    }

    var doc;
    var element;
    var elements;

    switch (tagName) {
        case HTML_TAG_NAME:
            if (parseFromString) {
                doc = parseFromString(html);

                // the created document may come with filler head/body elements,
                // so ake sure to remove them if they don't actually exist
                if (!HEAD_REGEX.test(html)) {
                    element = doc.getElementsByTagName(HEAD_TAG_NAME)[0];
                    if (element) element.parentNode.removeChild(element);
                }
                if (!BODY_REGEX.test(html)) {
                    element = doc.getElementsByTagName(BODY_TAG_NAME)[0];
                    if (element) element.parentNode.removeChild(element);
                }

                return doc.getElementsByTagName(HTML_TAG_NAME);
            }
            break;

        case HEAD_TAG_NAME:
            if (parseWithFallback) {
                elements = parseWithFallback(html).getElementsByTagName(HEAD_TAG_NAME);

                // account for possibility of sibling
                if (BODY_REGEX.test(html)) {
                    return elements[0].parentNode.childNodes;
                }
                return elements;
            }
            break;

        case BODY_TAG_NAME:
            if (parseWithFallback) {
                elements = parseWithFallback(html).getElementsByTagName(BODY_TAG_NAME);

                // account for possibility of sibling (return both body and head)
                if (HEAD_REGEX.test(html)) {
                    return elements[0].parentNode.childNodes;
                }
                return elements;
            }
            break;

        // low-level tag or text
        default:
            if (parseFromTemplate) return parseFromTemplate(html);
            if (parseWithFallback) {
                return parseWithFallback(html, BODY_TAG_NAME).getElementsByTagName(BODY_TAG_NAME)[0].childNodes;
            }
            break;
    }

    return [];
};


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getGridItem;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _ezSiteContentStore = __webpack_require__(7);

var _GridItem = __webpack_require__(26);

var _GridItem2 = _interopRequireDefault(_GridItem);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// , additionalContent = {}, additionaStyle = {}
function getGridItem(value, byType) {
  var gridItem = {};

  // TODO - may need to break into seperated functions in the future
  if (byType === 'by name') {
    gridItem = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemName', value, true);
  } else {
    gridItem = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', value, true);
  }

  // if (!Object.keys(additionalContent).length) {

  // }

  // if (Object.keys(additionaStyle).length) {

  // }

  return _react2.default.createElement(_GridItem2.default, {
    gridResponsiveProperties: gridItem.gridResponsiveProperties,
    gridContent: gridItem.gridContent,
    gridStyle: gridItem.gridStyle,
    gridCustomStyle: gridItem.gridCustomStyle,
    gridComponent: gridItem.gridComponent,
    key: gridItem.gridItemId.toString()
  });
}

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getGridComponent;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _NotificationBar = __webpack_require__(293);

var _NotificationBar2 = _interopRequireDefault(_NotificationBar);

var _ProductDisplay = __webpack_require__(298);

var _ProductDisplay2 = _interopRequireDefault(_ProductDisplay);

var _Listing = __webpack_require__(317);

var _Listing2 = _interopRequireDefault(_Listing);

var _ListingItem = __webpack_require__(318);

var _ListingItem2 = _interopRequireDefault(_ListingItem);

var _FooterBar = __webpack_require__(95);

var _FooterBar2 = _interopRequireDefault(_FooterBar);

var _LogoBar = __webpack_require__(333);

var _LogoBar2 = _interopRequireDefault(_LogoBar);

var _BreadCrumb = __webpack_require__(94);

var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// , gridType
function getGridComponent(componentName, gridContent) {
  // console.log(gridContent);
  var style = gridContent.style,
      data = gridContent.data,
      type = gridContent.type;

  switch (componentName) {
    case 'NotificationBar':
      return _react2.default.createElement(_NotificationBar2.default, {
        contentData: data,
        contentType: type,
        contentStyle: style
      });
    // case 'HeaderBar':
    //   return <HeaderBar />;
    case 'ProductDisplay':

      return _react2.default.createElement(_ProductDisplay2.default, {
        productName: gridContent.productName,
        content: gridContent.productSpecs,
        contentStyle: style
      });
    case 'FooterBar':
      return _react2.default.createElement(_FooterBar2.default, {
        contentData: data,
        contentType: type,
        contentStyle: style
      });
    case 'Listing':
      return _react2.default.createElement(_Listing2.default, {
        contentData: data,
        contentType: type,
        contentStyle: style
      });
    case 'ListingItem':
      return _react2.default.createElement(_ListingItem2.default, {
        content: gridContent,
        type: type,
        style: style
      });
    case 'BreadCrumb':
      return _react2.default.createElement(_BreadCrumb2.default, {
        content: data,
        type: type,
        style: style
      });
    case 'LogoBar':
      return _react2.default.createElement(_LogoBar2.default, {
        content: gridContent,
        type: type,
        style: style
      });
    /* case 'TemplateComponent':
      return <TemplateComponent
        contentData={data}
        contentType={type}
        contentStyle={style} />; */
    default:
      return _react2.default.createElement('div', null, ' Woops! ');
  }
}
// import HeaderBar from '../../components/HeaderBar/HeaderBar';

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(294);

var _Container2 = _interopRequireDefault(_Container);

var _TextBody = __webpack_require__(295);

var _TextBody2 = _interopRequireDefault(_TextBody);

var _LinkBody = __webpack_require__(296);

var _LinkBody2 = _interopRequireDefault(_LinkBody);

var _CloseButton = __webpack_require__(297);

var _CloseButton2 = _interopRequireDefault(_CloseButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function getContentComponent(type, data) {
  /* this.setState({
    show: data.showAsDefault,
  }); */
  switch (type) {
    case 'textOnly':
      return _react2.default.createElement(_TextBody2.default, null, data.text);
    case 'textWithBarLink':
      return _react2.default.createElement(_LinkBody2.default, { href: data.link }, data.text);
    default:
      return 'Woops! No Notification Type Found!';
  }
}

var NotificationBar = function (_Component) {
  _inherits(NotificationBar, _Component);

  function NotificationBar(props) {
    _classCallCheck(this, NotificationBar);

    var _this = _possibleConstructorReturn(this, (NotificationBar.__proto__ || Object.getPrototypeOf(NotificationBar)).call(this, props));

    var isClosed = false;
    // TODO - this should NOT delete but move into a callback for fine tune functionalities
    // const isClosed = ContentSynchronizer.getProperty(this.content,
    // 'site.flag.notificationBar.closed.manually', false);;

    _this.state = {
      show: !isClosed
    };
    _this.close = _this.close.bind(_this);
    return _this;
  }

  _createClass(NotificationBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'close',
    value: function close() {
      this.setState({
        show: !this.state.show
      });
      // TODO - this should NOT delete but move into a callback for fine tune functionalities
      // ContentSynchronizer.updateNotificationBarStatus({
      //   contentUpdated: {
      //     date: Date.now(),
      //   },
      //   closed: {
      //     date: Date.now(),
      //     manually: this.state.show,
      //   }
      // });
    }
  }, {
    key: 'render',
    value: function render() {
      // require('./NotificationBar.scss');
      var type = this.props.contentType;
      var data = this.props.contentData;
      var contentComponent = getContentComponent(type, data);

      return _react2.default.createElement(_Container2.default, { hide: !this.state.show, centerText: this.props.contentStyle && this.props.contentStyle[0] === 'center-text' }, contentComponent, _react2.default.createElement(_CloseButton2.default, { onClick: this.close }, 'x'));
    }
  }]);

  return NotificationBar;
}(_react.Component);

exports.default = NotificationBar;

NotificationBar.propTypes = {
  contentData: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
  contentStyle: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  contentType: _propTypes2.default.string.isRequired
};

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  display: ', ';\n  align-items: center;\n  text-align: ', ';\n  background-color: #222;\n  color: #cf0;\n  text-transform: uppercase;\n'], ['\n  width: 100%;\n  height: 100%;\n  display: ', ';\n  align-items: center;\n  text-align: ', ';\n  background-color: #222;\n  color: #cf0;\n  text-transform: uppercase;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.section(_templateObject, function (props) {
  return props.hide ? 'none' : 'flex';
}, function (props) {
  return props.centerText ? 'center' : 'unset';
});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  align-self: center;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  color: inherit;\n  font-size: 20px;\n  font-weight: 400;\n\n  &:hover {\n    color: inherit;\n  }\n'], ['\n  width: 100%;\n  align-self: center;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  color: inherit;\n  font-size: 20px;\n  font-weight: 400;\n\n  &:hover {\n    color: inherit;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.span(_templateObject);

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  align-self: center;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  color: inherit;\n  font-size: 20px;\n  font-weight: 400;\n\n  &:hover {\n    color: inherit;\n  }\n'], ['\n  width: 100%;\n  align-self: center;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  color: inherit;\n  font-size: 20px;\n  font-weight: 400;\n\n  &:hover {\n    color: inherit;\n  }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.a(_templateObject);

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 14px;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n'], ['\n  padding: 14px;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _ezSiteContentStore = __webpack_require__(7);

var _BreadCrumb = __webpack_require__(94);

var _BreadCrumb2 = _interopRequireDefault(_BreadCrumb);

var _ShareButtonsBar = __webpack_require__(84);

var _ShareButtonsBar2 = _interopRequireDefault(_ShareButtonsBar);

var _ProductGallery = __webpack_require__(301);

var _ProductGallery2 = _interopRequireDefault(_ProductGallery);

var _ContainerRow = __webpack_require__(309);

var _ContainerRow2 = _interopRequireDefault(_ContainerRow);

var _ProductSlideShowCol = __webpack_require__(310);

var _ProductSlideShowCol2 = _interopRequireDefault(_ProductSlideShowCol);

var _ProductDescriptionCol = __webpack_require__(311);

var _ProductDescriptionCol2 = _interopRequireDefault(_ProductDescriptionCol);

var _ProductDescriptionTitleContainer = __webpack_require__(312);

var _ProductDescriptionTitleContainer2 = _interopRequireDefault(_ProductDescriptionTitleContainer);

var _ProductDescriptionPriceContainer = __webpack_require__(313);

var _ProductDescriptionPriceContainer2 = _interopRequireDefault(_ProductDescriptionPriceContainer);

var _DescriptionsSection = __webpack_require__(314);

var _DescriptionsSection2 = _interopRequireDefault(_DescriptionsSection);

var _DescriptionTitle = __webpack_require__(315);

var _DescriptionTitle2 = _interopRequireDefault(_DescriptionTitle);

var _AddToCartContainer = __webpack_require__(316);

var _AddToCartContainer2 = _interopRequireDefault(_AddToCartContainer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function showBreadCrumb(title) {
  // better switch to getGridItem! More effective...
  var BREADCRUMB_GRID_ID = 8;
  var breadCrumb = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', BREADCRUMB_GRID_ID, true);
  return _react2.default.createElement(_reactstrap.Col, {
    xs: { size: 12 },
    sm: { size: 12 },
    md: { size: 12 },
    lg: { size: 12 },
    xl: { size: 12 }
  }, _react2.default.createElement(_BreadCrumb2.default, {
    content: { title: title },
    style: breadCrumb.gridContent.style
  }));
}

var ProductDisplay = function (_Component) {
  _inherits(ProductDisplay, _Component);

  function ProductDisplay(props) {
    _classCallCheck(this, ProductDisplay);

    var _this = _possibleConstructorReturn(this, (ProductDisplay.__proto__ || Object.getPrototypeOf(ProductDisplay)).call(this, props));

    _this.state = {
      images: _this.props.content.slideShow.length ? _this.props.content.slideShow[0].images : []
    };
    return _this;
  }

  _createClass(ProductDisplay, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.content.slideShow) {
        this.setState({
          images: nextProps.content.slideShow[0].images
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // WARNNING: NEVER ADD  row WITHOUT no-gutters !!!
      // CAUSE GHOST MARGIN ON THE RIGHT OF THE PAGE!!!!!
      var content = this.props.content;
      var title = content.title,
          description = content.description,
          price = content.price,
          availableQuantity = content.availableQuantity,
          properties = content.properties;
      var site = _ezSiteContentStore.www___naturalorchards__us.site;
      var ingredients = properties.ingredients,
          allergyInformation = properties.allergyInformation,
          storageInformation = properties.storageInformation;

      var slideShowImages = this.state.images;
      var imageUrl = slideShowImages[0].url;
      var images = slideShowImages.map(function (image) {
        //eslint-disable-line
        return {
          content: {
            url: image.url
          }
        };
      });
      // <img className='img-fluid' src={imageUrl} />
      return _react2.default.createElement(_ContainerRow2.default, null, showBreadCrumb(title), _react2.default.createElement(_ProductSlideShowCol2.default, {
        xs: { size: 12 },
        sm: { size: 12 },
        md: { size: 4 },
        lg: { size: 4 },
        xl: { size: 4 }
      }, _react2.default.createElement(_ProductGallery2.default, { images: images })), _react2.default.createElement(_ProductDescriptionCol2.default, {
        xs: { size: 12 },
        sm: { size: 12 },
        md: { size: 8 },
        lg: { size: 8 },
        xl: { size: 8 }
      }, _react2.default.createElement(_ProductDescriptionTitleContainer2.default, null, _react2.default.createElement('span', null, title)), price.regular ? _react2.default.createElement(_ProductDescriptionPriceContainer2.default, null, _react2.default.createElement('span', null, price.regular)) : null, _react2.default.createElement(_DescriptionsSection2.default, null, _react2.default.createElement(_DescriptionTitle2.default, null, 'Description:'), ' ', _react2.default.createElement('span', null, description)), _react2.default.createElement(_DescriptionsSection2.default, null, _react2.default.createElement(_DescriptionTitle2.default, null, 'Ingredients:'), ' ', _react2.default.createElement('span', null, ingredients)), _react2.default.createElement(_DescriptionsSection2.default, null, _react2.default.createElement(_DescriptionTitle2.default, null, 'Allergy Information:'), ' ', _react2.default.createElement('span', null, allergyInformation)), _react2.default.createElement(_DescriptionsSection2.default, null, _react2.default.createElement(_DescriptionTitle2.default, null, 'Storage Information:'), ' ', _react2.default.createElement('span', null, storageInformation)), _react2.default.createElement(_AddToCartContainer2.default, null, _react2.default.createElement('section', { className: 'productDescriptions__availableQuantity' }, _react2.default.createElement('span', null, availableQuantity)), _react2.default.createElement('section', { className: 'productPurchaseBox__container' }, 'Quantity: ', _react2.default.createElement('button', null, ' Add To Cart '))), _react2.default.createElement('section', { className: 'productDescriptions__shareButtons' }, _react2.default.createElement('section', { className: 'shareButtonsBar shareButtonsBar__container' }, _react2.default.createElement(_ShareButtonsBar2.default, {
        sharedImageUrl: imageUrl,
        sharedTitle: title,
        sharedDescriptionText: description,
        hashtags: site.domain.name
      })))));
    }
  }]);

  return ProductDisplay;
}(_react.Component);

exports.default = ProductDisplay;

ProductDisplay.propTypes = {
  content: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  font-size: 14px;\n  margin-bottom: 12px;\n  color: rgba(34, 34, 34, 0.55);\n  font-weight: bold;\n'], ['\n  font-size: 14px;\n  margin-bottom: 12px;\n  color: rgba(34, 34, 34, 0.55);\n  font-weight: bold;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  font-size: 14px;\n  margin-bottom: 12px;\n  color: rgba(34, 34, 34, 0.55);\n  font-weight: bold;\n'], ['\n  font-size: 14px;\n  margin-bottom: 12px;\n  color: rgba(34, 34, 34, 0.55);\n  font-weight: bold;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.a(_templateObject);

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(302);

var _Container2 = _interopRequireDefault(_Container);

var _ThumbnailsContainer = __webpack_require__(303);

var _ThumbnailsContainer2 = _interopRequireDefault(_ThumbnailsContainer);

var _DisplayImage = __webpack_require__(304);

var _DisplayImage2 = _interopRequireDefault(_DisplayImage);

var _DisplayImageBox = __webpack_require__(305);

var _DisplayImageBox2 = _interopRequireDefault(_DisplayImageBox);

var _ThumbnailImageHolder = __webpack_require__(306);

var _ThumbnailImageHolder2 = _interopRequireDefault(_ThumbnailImageHolder);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ProductGallery = function (_Component) {
  _inherits(ProductGallery, _Component);

  function ProductGallery(props) {
    _classCallCheck(this, ProductGallery);

    var _this = _possibleConstructorReturn(this, (ProductGallery.__proto__ || Object.getPrototypeOf(ProductGallery)).call(this, props));

    _this.state = {
      isOpen: false,
      displayImageUrl: _this.props.images[0].content.url || ''
    };
    _this.changeImage = _this.changeImage.bind(_this);
    return _this;
  }

  _createClass(ProductGallery, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps && newProps.images && newProps.images[0].content.url !== this.props.images[0].content.url) {
        this.setState({
          displayImageUrl: newProps.images[0].content.url || ''
        });
      }
    }
  }, {
    key: 'changeImage',
    value: function changeImage(url) {
      this.setState({
        displayImageUrl: url
      });
    }
  }, {
    key: 'openToggle',
    value: function openToggle() {
      this.setState({
        isOpen: this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          images = _props.images,
          style = _props.style;

      var COMPONENT_NAME = 'ProductGallery';
      var hasOnlyOneImage = images.length === 1 || !images.length;
      return _react2.default.createElement(_Container2.default, {
        style: style,
        componentName: COMPONENT_NAME,
        gridAreaId: ''
      }, _react2.default.createElement(_DisplayImageBox2.default, {
        asfullHeight: hasOnlyOneImage,
        ref: function ref(element) {
          _this2.displayBoxDom = element;
        }
      }, _react2.default.createElement(_DisplayImage2.default, { className: 'img-fluid', src: this.state.displayImageUrl })), hasOnlyOneImage ? null : _react2.default.createElement(_ThumbnailsContainer2.default, null, images.map(function (image, index) {
        return _react2.default.createElement(_ThumbnailImageHolder2.default, {
          src: image.content.url,
          key: image.id || index,
          changeImage: _this2.changeImage,
          scrollTargetDom: _this2.displayBoxDom
        });
      })));
    }
  }]);

  return ProductGallery;
}(_react.Component);

exports.default = ProductGallery;

ProductGallery.propTypes = {
  images: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  style: _propTypes2.default.objectOf(_propTypes2.default.any)
};

ProductGallery.defaultProps = {
  style: {}
};

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  height: 100%;\n  width: 100%;\n  border-color: #ded6d6;\n  border-width: 1px;\n  border-style: solid;\n'], ['\n  display: block;\n  height: 100%;\n  width: 100%;\n  border-color: #ded6d6;\n  border-width: 1px;\n  border-style: solid;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: stretch;\n  align-content: stretch;\n  overflow: hidden;\n\n  height: 20%;\n  padding-top: 2.5%;\n  padding-bottom: 2.5%;\n  padding-right: 5px;\n  padding-left: 5px;\n'], ['\n  display: flex;\n  justify-content: stretch;\n  align-content: stretch;\n  overflow: hidden;\n\n  height: 20%;\n  padding-top: 2.5%;\n  padding-bottom: 2.5%;\n  padding-right: 5px;\n  padding-left: 5px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  max-height: 100%;\n  max-width: 100%;\n  align-self: center;\n'], ['\n  max-height: 100%;\n  max-width: 100%;\n  align-self: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.img(_templateObject);

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: ', ';\n  background-color: white;\n\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n'], ['\n  height: ', ';\n  background-color: white;\n\n  display: flex;\n  justify-content: center;\n  overflow: hidden;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, function (props) {
  return props.asfullHeight ? '100%' : '75%';
});

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollToDom = __webpack_require__(87);

var _scrollToDom2 = _interopRequireDefault(_scrollToDom);

var _ThumbnailImage = __webpack_require__(307);

var _ThumbnailImage2 = _interopRequireDefault(_ThumbnailImage);

var _ThumbnailFrame = __webpack_require__(308);

var _ThumbnailFrame2 = _interopRequireDefault(_ThumbnailFrame);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ThumbnailImageHolder = function (_Component) {
  _inherits(ThumbnailImageHolder, _Component);

  function ThumbnailImageHolder(props) {
    _classCallCheck(this, ThumbnailImageHolder);

    var _this = _possibleConstructorReturn(this, (ThumbnailImageHolder.__proto__ || Object.getPrototypeOf(ThumbnailImageHolder)).call(this, props));

    _this.changeImage = _this.changeImage.bind(_this);
    return _this;
  }

  _createClass(ThumbnailImageHolder, [{
    key: 'changeImage',
    value: function changeImage() {
      // HACK - for some reason first time the dom will be null!!!
      (0, _scrollToDom2.default)();

      this.props.changeImage(this.props.src);
    }
  }, {
    key: 'openToggle',
    value: function openToggle() {
      this.setState({
        isOpen: this.state.isOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var src = this.props.src;

      return _react2.default.createElement(_ThumbnailFrame2.default, null, _react2.default.createElement(_ThumbnailImage2.default, {
        src: src,
        onClick: this.changeImage
      }));
    }
  }]);

  return ThumbnailImageHolder;
}(_react.Component);

exports.default = ThumbnailImageHolder;

ThumbnailImageHolder.propTypes = {
  src: _propTypes2.default.string.isRequired,
  changeImage: _propTypes2.default.func.isRequired
};

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  width: 100%;\n\n  align-self: center;\n'], ['\n  display: block;\n  width: 100%;\n\n  align-self: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.img(_templateObject);

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  flex: 1;\n  flex-grow: 5;\n\n  padding-right: 5px;\n  padding-left: 5px;\n'], ['\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n  flex: 1;\n  flex-grow: 5;\n\n  padding-right: 5px;\n  padding-left: 5px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  font-size: 18px;\n    color: rgba(34, 34, 34, 0.55);\n'], ['\n  font-size: 18px;\n    color: rgba(34, 34, 34, 0.55);\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = (0, _styledComponents2.default)(_reactstrap.Row)(_templateObject);

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n'], ['\n  height: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactstrap = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = (0, _styledComponents2.default)(_reactstrap.Col)(_templateObject);

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    &.over-ride-bootstrap {\n      padding-left: 16px;\n      padding-right: 16px;\n    }\n  '], ['\n    &.over-ride-bootstrap {\n      padding-left: 16px;\n      padding-right: 16px;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    &.over-ride-bootstrap {\n      padding-left: 16px;\n    }\n  '], ['\n    &.over-ride-bootstrap {\n      padding-left: 16px;\n    }\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactstrap = __webpack_require__(4);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = (0, _styledComponents2.default)(_reactstrap.Col)(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject3));

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  font-weight: 500;\n  font-size: 24px;\n  ', '\n  ', '\n'], ['\n  font-weight: 500;\n  font-size: 24px;\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin-top: 32px;\n  '], ['\n    margin-top: 32px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin-top: initial;\n  '], ['\n    margin-top: initial;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.mobileM(_templateObject3));

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n'], ['\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 14px;\n'], ['\n  margin-top: 14px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  margin-top: 14px;\n  font-weight: 500;\n'], ['\n  margin-top: 14px;\n  font-weight: 500;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.span(_templateObject);

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  //TODO: disable temporarily\n  display: none;\n'], ['\n  //TODO: disable temporarily\n  display: none;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(4);

var _ezSiteContentStore = __webpack_require__(7);

var _GridItem = __webpack_require__(26);

var _GridItem2 = _interopRequireDefault(_GridItem);

var _consoleShow = __webpack_require__(27);

var _consoleShow2 = _interopRequireDefault(_consoleShow);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Listing = function (_Component) {
  _inherits(Listing, _Component);

  function Listing(props) {
    _classCallCheck(this, Listing);

    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));

    (0, _consoleShow2.default)('props', {
      componentName: 'Listing',
      props: _this.props
    });
    return _this;
  }

  _createClass(Listing, [{
    key: 'render',
    value: function render() {
      var data = this.props.contentData;
      var customStyle = data.listingCustomStyle;

      if (data.type === 'filter') {
        // when its filter, we expect a dynamic injected array call filteredListing
        // which got created inside ProductListing component

        var _listingContent = data.filteredListing;
        var _mockedListingContent = [];
        _listingContent.forEach(function (listing) {
          _mockedListingContent.push(listing);
        });

        // TODO - remove once go prod, this create dups hack!
        // listingContent.forEach((listing, index) => {
        //   mockedListingContent.push(listing);
        // });

        _listingContent = _mockedListingContent;
        var _listingContentItemGridStyle = data.listingItemStyle;
        (0, _consoleShow2.default)('props', {
          componentName: 'listingContentItemGridStyle',
          props: _listingContentItemGridStyle
        });
        return _react2.default.createElement(_reactstrap.Row, null, _listingContent.map(function (listing, index) {
          (0, _consoleShow2.default)('props', {
            componentName: 'Listing Content Item',
            props: listing
          });
          var responsiveProperties = data.listingItemResponsiveProperties;
          var componentName = data.listingItemComponentName;
          var collectionName = data.name;
          // TODO anti pattern!!!! But need to be done
          var newListing = listing;
          newListing.collectionName = collectionName;
          return _react2.default.createElement(_GridItem2.default, {
            gridResponsiveProperties: responsiveProperties,
            gridContent: newListing,
            gridStyle: _listingContentItemGridStyle,
            gridCustomStyle: customStyle,
            gridType: newListing.gridTypeName,
            gridComponent: componentName,
            key: index.toString()
          });
        }));
      }
      var listingContent = _ezSiteContentStore.ContentSynchronizer.getCollection(data.name);
      var mockedListingContent = [];
      listingContent.forEach(function (listing) {
        mockedListingContent.push(listing);
      });

      // TODO - remove once go prod, this create dups hack!
      // listingContent.forEach((listing, index) => {
      //   mockedListingContent.push(listing);
      // });

      listingContent = mockedListingContent;
      var listingContentItemGridStyle = data.listingItemStyle;
      (0, _consoleShow2.default)('props', {
        componentName: 'listingContentItemGridStyle',
        props: listingContentItemGridStyle
      });
      return _react2.default.createElement(_reactstrap.Row, null, listingContent.map(function (listing, index) {
        (0, _consoleShow2.default)('props', {
          componentName: 'Listing Content Item',
          props: listing
        });
        var responsiveProperties = data.listingItemResponsiveProperties;
        var componentName = data.listingItemComponentName;
        var collectionName = data.name;
        // TODO anti pattern!!!! But need to be done
        var newListing = listing;
        newListing.collectionName = collectionName;

        return _react2.default.createElement(_GridItem2.default, {
          gridResponsiveProperties: responsiveProperties,
          gridContent: newListing,
          gridStyle: listingContentItemGridStyle,
          gridCustomStyle: customStyle,
          gridType: newListing.gridTypeName,
          gridComponent: componentName,
          key: index.toString()
        });
      }));
    }
  }]);

  return Listing;
}(_react.Component);

exports.default = Listing;

Listing.propTypes = {
  contentData: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _consoleShow = __webpack_require__(27);

var _consoleShow2 = _interopRequireDefault(_consoleShow);

var _ListingItemMask = __webpack_require__(319);

var _ListingItemMask2 = _interopRequireDefault(_ListingItemMask);

var _Container = __webpack_require__(324);

var _Container2 = _interopRequireDefault(_Container);

var _Display = __webpack_require__(325);

var _Display2 = _interopRequireDefault(_Display);

var _ImageAdjuster = __webpack_require__(326);

var _ImageAdjuster2 = _interopRequireDefault(_ImageAdjuster);

var _Image = __webpack_require__(327);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ListingItem = function (_Component) {
  _inherits(ListingItem, _Component);

  function ListingItem(props) {
    _classCallCheck(this, ListingItem);

    var _this = _possibleConstructorReturn(this, (ListingItem.__proto__ || Object.getPrototypeOf(ListingItem)).call(this, props));

    _this.state = {
      showMask: false
    };
    (0, _consoleShow2.default)('props', {
      componentName: 'ListingItem',
      props: _this.props
    });
    _this.toggleThing = _this.toggleThing.bind(_this);
    return _this;
  }

  _createClass(ListingItem, [{
    key: 'toggleThing',
    value: function toggleThing(event) {
      (0, _consoleShow2.default)('line', {
        name: 'test in listing toggle',
        object: event
      });
      this.setState({
        showMask: !this.state.showMask
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var content = this.props.content;

      return _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_Display2.default, {
        onMouseOver: this.toggleThing,
        onFocus: this.toggleThing,
        onBlur: this.toggleThing,
        onMouseOut: this.toggleThing
      }, _react2.default.createElement(_ListingItemMask2.default, {
        price: content.price.regular,
        title: content.title,
        collectionName: content.collectionName,
        path: content.route.name,
        show: this.state.showMask
      }), _react2.default.createElement(_ImageAdjuster2.default, null, _react2.default.createElement(_Image2.default, { src: content.slideShow[0].images[0].url }))));
    }
  }]);

  return ListingItem;
}(_react.Component);

exports.default = ListingItem;

ListingItem.propTypes = {
  content: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _consoleShow = __webpack_require__(27);

var _consoleShow2 = _interopRequireDefault(_consoleShow);

var _Container = __webpack_require__(320);

var _Container2 = _interopRequireDefault(_Container);

var _Shade = __webpack_require__(321);

var _Shade2 = _interopRequireDefault(_Shade);

var _ClickableLink = __webpack_require__(322);

var _ClickableLink2 = _interopRequireDefault(_ClickableLink);

var _Summary = __webpack_require__(323);

var _Summary2 = _interopRequireDefault(_Summary);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ListingItemMask = function (_Component) {
  _inherits(ListingItemMask, _Component);

  function ListingItemMask(props) {
    _classCallCheck(this, ListingItemMask);

    var _this = _possibleConstructorReturn(this, (ListingItemMask.__proto__ || Object.getPrototypeOf(ListingItemMask)).call(this, props));

    (0, _consoleShow2.default)('props', {
      componentName: 'ListingItemMask',
      props: _this.props
    });
    return _this;
  }

  _createClass(ListingItemMask, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          price = _props.price,
          title = _props.title,
          show = _props.show,
          collectionName = _props.collectionName,
          path = _props.path;

      return _react2.default.createElement(_Container2.default, { hide: !show }, _react2.default.createElement(_Shade2.default, null), _react2.default.createElement(_ClickableLink2.default, { href: '/' + collectionName + '/detail/' + path }), _react2.default.createElement(_Summary2.default, null, _react2.default.createElement('span', null, title), ' ', price ? _react2.default.createElement('span', null, '$', price) : null));
    }
  }]);

  return ListingItemMask;
}(_react.Component);

exports.default = ListingItemMask;

ListingItemMask.propTypes = {
  collectionName: _propTypes2.default.string.isRequired,
  price: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string.isRequired,
  show: _propTypes2.default.bool.isRequired,
  path: _propTypes2.default.string.isRequired
};

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: opacity 300ms ease-in-out;\n  opacity: ', '\n'], ['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: opacity 300ms ease-in-out;\n  opacity: ', '\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, function (props) {
  return props.hide ? 0 : 1;
});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: white;\n    opacity: 0.65;\n    top: 0;\n\n    &:hover {\n      opacity: 1;\n      background: transparent;\n    }\n\n    &:focus {\n      opacity: 1;\n      background: transparent;\n    }\n'], ['\n  position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: white;\n    opacity: 0.65;\n    top: 0;\n\n    &:hover {\n      opacity: 1;\n      background: transparent;\n    }\n\n    &:focus {\n      opacity: 1;\n      background: transparent;\n    }\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 3;\n  top: 0;\n'], ['\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 3;\n  top: 0;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.a(_templateObject);

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  align-self: center;\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n\n  &:hover {\n    display: none;\n  }\n\n  &:focus {\n    display: none;\n  }\n\n  ', '\n  ', '\n'], ['\n  position: relative;\n  align-self: center;\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n\n  &:hover {\n    display: none;\n  }\n\n  &:focus {\n    display: none;\n  }\n\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-size: 24px;'], ['\n    font-size: 24px;']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: 18px;'], ['\n    font-size: 18px;']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject3));

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n'], ['\n  height: 100%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n'], ['\n  height: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  display:flex;\n  align-item: center;\n'], ['\n  height: 100%;\n  display:flex;\n  align-item: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  height: auto;\n  width: 100%;\n  align-self: center;\n'], ['\n  height: auto;\n  width: 100%;\n  align-self: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.img(_templateObject);

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SocialIcon;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _capToCamelCase = __webpack_require__(47);

var _capToCamelCase2 = _interopRequireDefault(_capToCamelCase);

var _SocialButtonShell = __webpack_require__(329);

var _SocialButtonShell2 = _interopRequireDefault(_SocialButtonShell);

var _IconImage = __webpack_require__(331);

var _IconImage2 = _interopRequireDefault(_IconImage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function SocialIcon(props) {
  var style = props.style,
      srcUrl = props.srcUrl,
      linkUrl = props.linkUrl;

  var componentCSSName = (0, _capToCamelCase2.default)('SocialIcon');
  return !srcUrl && !linkUrl ? _react2.default.createElement('section', null) : _react2.default.createElement(_SocialButtonShell2.default, {
    containerLevelStyle: componentCSSName + '__container',
    style: style,
    linkUrl: linkUrl
  }, _react2.default.createElement(_IconImage2.default, {
    src: srcUrl
  }));
}

SocialIcon.propTypes = {
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  srcUrl: _propTypes2.default.string,
  linkUrl: _propTypes2.default.string
};

SocialIcon.defaultProps = {
  style: {},
  srcUrl: '',
  linkUrl: ''
};

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SocialButtonShell;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconBoxLink = __webpack_require__(330);

var _IconBoxLink2 = _interopRequireDefault(_IconBoxLink);

var _childrenPropTypes = __webpack_require__(96);

var _childrenPropTypes2 = _interopRequireDefault(_childrenPropTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function SocialButtonShell(props) {
  var containerLevelStyle = props.containerLevelStyle,
      children = props.children,
      linkUrl = props.linkUrl;

  return _react2.default.createElement(_IconBoxLink2.default, {
    href: linkUrl || '/',
    className: containerLevelStyle,
    'data-event-category': 'Links',
    'data-event-action': 'Click',
    'data-event-label': linkUrl
  }, children);
}
SocialButtonShell.propTypes = {
  containerLevelStyle: _propTypes2.default.string,
  linkUrl: _propTypes2.default.string,
  children: _childrenPropTypes2.default
};

SocialButtonShell.defaultProps = {
  containerLevelStyle: '',
  linkUrl: '',
  children: null
};

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  display: inline-block;\n  background-repeat: no-repeat;\n  align-self: center;\n  text-align: center;\n'], ['\n  ', '\n  ', '\n  display: inline-block;\n  background-repeat: no-repeat;\n  align-self: center;\n  text-align: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    flex-basis: 16%;\n  '], ['\n    flex-basis: 16%;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    flex-basis: 8%;\n  '], ['\n    flex-basis: 8%;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.a(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject3));

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  cursor: pointer;\n'], ['\n  ', '\n  ', '\n  cursor: pointer;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    height: 32px;\n  '], ['\n    height: 32px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    height: 48px;\n  '], ['\n    height: 48px;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.img(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject3));

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding-top: 32px;\n  padding-bottom: 80px;\n  margin-top: 100px;\n  background-color: #f1f1f1;\n'], ['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding-top: 32px;\n  padding-bottom: 80px;\n  margin-top: 100px;\n  background-color: #f1f1f1;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LogoBar;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(334);

var _Container2 = _interopRequireDefault(_Container);

var _LogoBox = __webpack_require__(335);

var _LogoBox2 = _interopRequireDefault(_LogoBox);

var _Logo = __webpack_require__(336);

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function LogoBar(props) {
  var content = props.content.data;

  return _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_LogoBox2.default, null, _react2.default.createElement(_Logo2.default, { src: content.logo.image.url })));
}

LogoBar.propTypes = {
  content: _propTypes2.default.objectOf(_propTypes2.default.shape({
    data: _propTypes2.default.objectOf(_propTypes2.default.any)
  })).isRequired
};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n\n  ', '\n'], ['\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin-bottom: 24px;\n    margin-top: 24px;\n  '], ['\n    margin-bottom: 24px;\n    margin-top: 24px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    margin-bottom: initial;\n    margin-top: initial;\n  '], ['\n    margin-bottom: initial;\n    margin-top: initial;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.tablet(_templateObject3));

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  margin: 0 auto;\n  ', '\n\n  ', '\n'], ['\n  margin: 0 auto;\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n  '], ['\n    width: 100%;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: 400px;\n  '], ['\n    width: 400px;\n  ']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mediaQuery = __webpack_require__(5);

var _mediaQuery2 = _interopRequireDefault(_mediaQuery);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, _mediaQuery2.default.mobileS(_templateObject2), _mediaQuery2.default.mobileL(_templateObject3));

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.img(_templateObject);

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ezSiteContentStore = __webpack_require__(7);

var _generateFilterItemsList = __webpack_require__(89);

var _generateFilterItemsList2 = _interopRequireDefault(_generateFilterItemsList);

var _generateMenuItemsList = __webpack_require__(90);

var _generateMenuItemsList2 = _interopRequireDefault(_generateMenuItemsList);

var _generateProductItemsList = __webpack_require__(91);

var _generateProductItemsList2 = _interopRequireDefault(_generateProductItemsList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// gridId 2
function buildMenuItems(gridItemId) {
  if (!gridItemId) return [];
  // console.log(content);
  var menuBar = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  var menuBarConfig = _ezSiteContentStore.ContentSynchronizer.getItem('menus', 'menuId', menuBar.gridContent.menuId, true);

  var baseTag = _ezSiteContentStore.ContentSynchronizer.getCollection('site').domain.baseTag;

  return (0, _generateMenuItemsList2.default)(menuBarConfig, baseTag);
}

// gridId 6
function buildMenuFilterItems(gridItemId) {
  if (!gridItemId) return [];

  var filterBar = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  var filterBarConfig = _ezSiteContentStore.ContentSynchronizer.getItem('menus', 'menuId', filterBar.gridContent.menuId, true);
  var _filterBarConfig$menu = filterBarConfig.menuConfig,
      collectionName = _filterBarConfig$menu.collectionName,
      menuItemType = _filterBarConfig$menu.menuItemType;
  var menuName = filterBarConfig.menuName;

  var collection = _ezSiteContentStore.ContentSynchronizer.getCollection(collectionName);

  var baseTag = _ezSiteContentStore.ContentSynchronizer.getCollection('site').domain.baseTag;

  return (0, _generateFilterItemsList2.default)(collection, collectionName, menuItemType, menuName, baseTag);
}

// gridId 10
function buildProductMenuItems(gridItemId) {
  // IDENTICAL WITH buildMenuFilterItems!!!!!!!!!!!!!!!!!!!!! refactor now
  if (!gridItemId) return [];

  var productsBar = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', gridItemId, true);
  // console.log(productsBar);
  var productsBarConfig = _ezSiteContentStore.ContentSynchronizer.getItem('menus', 'menuId', productsBar.gridContent.menuId, true);
  // console.log(productsBarConfig);
  var _productsBarConfig$me = productsBarConfig.menuConfig,
      collectionName = _productsBarConfig$me.collectionName,
      menuItemType = _productsBarConfig$me.menuItemType;
  var menuName = productsBarConfig.menuName;

  var collection = _ezSiteContentStore.ContentSynchronizer.getCollection(collectionName);

  var baseTag = _ezSiteContentStore.ContentSynchronizer.getCollection('site').domain.baseTag;

  return (0, _generateProductItemsList2.default)(collection, collectionName, menuItemType, menuName, baseTag);
}

module.exports = {
  buildMenuItems: buildMenuItems,
  buildMenuFilterItems: buildMenuFilterItems,
  buildProductMenuItems: buildProductMenuItems
};

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(97);

var _Container2 = _interopRequireDefault(_Container);

var _SlidesBox = __webpack_require__(339);

var _SlidesBox2 = _interopRequireDefault(_SlidesBox);

var _SlideButtonsBox = __webpack_require__(340);

var _SlideButtonsBox2 = _interopRequireDefault(_SlideButtonsBox);

var _SlideButton = __webpack_require__(341);

var _SlideButton2 = _interopRequireDefault(_SlideButton);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SlideShow = function (_Component) {
  _inherits(SlideShow, _Component);

  function SlideShow(props) {
    _classCallCheck(this, SlideShow);

    var _this = _possibleConstructorReturn(this, (SlideShow.__proto__ || Object.getPrototypeOf(SlideShow)).call(this, props));

    _this.state = {
      opacity: _this.props.slides ? 1 : 0,
      url: _this.props.slides.length ? _this.props.slides[0].content.url : '',
      currentSlideId: 0
    };
    _this.goToSlide = _this.goToSlide.bind(_this);
    _this.slideLooper = null;
    return _this;
  }

  _createClass(SlideShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.slides.length > 1) {
        this.startLoopingSlides();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.slideLooper);
    }

    // TODO: may need another looping mechanism for
    // fading effect which require both images present
    // and removing the earlier one...

  }, {
    key: 'startLoopingSlides',
    value: function startLoopingSlides() {
      var _this2 = this;

      var LOOP_INTERVAL = 10000;
      var TRANSITION_INTERVAL = 300;
      var LOOP_COUNT = this.props.slides.length - 1;
      var slides = this.props.slides;

      var loopCounter = 0;

      this.slideLooper = setInterval(function () {
        var url = slides[loopCounter].content.url;

        setTimeout(function () {
          if (_this2.slideLooper) {
            _this2.setState({
              opacity: 0
            });
          }
        }, TRANSITION_INTERVAL);

        setTimeout(function () {
          if (loopCounter >= LOOP_COUNT) {
            loopCounter = 0;
          } else {
            loopCounter += 1;
          }
          url = slides[loopCounter].content.url; // eslint-disable-line
          if (_this2.slideLooper) {
            _this2.setState({
              url: url
            });
          }
        }, TRANSITION_INTERVAL * 2.5);

        setTimeout(function () {
          url = slides[loopCounter].content.url; // eslint-disable-line
          if (_this2.slideLooper) {
            _this2.setState({
              currentSlideId: slides[loopCounter].id,
              opacity: 1
            });
          }
        }, TRANSITION_INTERVAL * 3.5);
      }, LOOP_INTERVAL);
    }
  }, {
    key: 'goToSlide',
    value: function goToSlide(keyValue) {
      if (!keyValue && keyValue !== 0) return;
      var slides = this.props.slides;

      var currentSlide = slides.filter(function (slide) {
        return slide.id === keyValue;
      });
      var slideUrl = currentSlide.length ? currentSlide[0].content.url : this.props.slides[0].content.url;

      if (this.slideLooper) {
        this.setState({
          url: slideUrl || ''
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var slides = this.props.slides;

      var COMPONENT_NAME = 'SlideShow';

      return _react2.default.createElement(_Container2.default, {
        componentName: COMPONENT_NAME,
        gridAreaId: '',
        style: {
          width: '100%',
          overflow: 'hidden',
          marginBottom: '16px'
        }
      }, _react2.default.createElement(_SlidesBox2.default, { style: {
          alignSelf: 'center',
          height: '100%',
          width: '100%',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }
      }, _react2.default.createElement('img', {
        alt: this.state.url || '',
        src: this.state.url || '',
        style: {
          width: '100%',
          transition: 'opacity 300ms ease-in-out',
          opacity: '' + this.state.opacity,
          cursor: 'default'
        }
      })), _react2.default.createElement(_SlideButtonsBox2.default, null, slides.map(function (slide, index) {
        return _react2.default.createElement(_SlideButton2.default, {
          key: slide.id || index,
          currentSlideId: _this3.state.currentSlideId,
          slideId: slide.id,
          goToSlide: _this3.goToSlide
        });
      })));
    }
  }]);

  return SlideShow;
}(_react.Component);

exports.default = SlideShow;

SlideShow.propTypes = {
  slides: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 0;\n  font-size: 24px;\n'], ['\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 0;\n  font-size: 24px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject);

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(97);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SlideButton = function (_Component) {
  _inherits(SlideButton, _Component);

  function SlideButton(props) {
    _classCallCheck(this, SlideButton);

    var _this = _possibleConstructorReturn(this, (SlideButton.__proto__ || Object.getPrototypeOf(SlideButton)).call(this, props));

    _this.goSlide = _this.goSlide.bind(_this);
    return _this;
  }

  _createClass(SlideButton, [{
    key: 'goSlide',
    value: function goSlide() {
      this.props.goToSlide(this.props.slideId);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentSlideId = _props.currentSlideId,
          slideId = _props.slideId;

      var COMPONENT_NAME = 'SlideButton';
      var isCurrent = slideId === currentSlideId;
      return _react2.default.createElement(_Container2.default, {
        componentName: COMPONENT_NAME,
        gridAreaId: '',
        onClick: this.goSlide,
        style: {
          opacity: isCurrent ? '.75' : '.25',
          alignSelf: 'center',
          marginLeft: '8px',
          marginRight: '8px',
          marginBottom: '16px'
        }
      }, "\u2022");
    }
  }]);

  return SlideButton;
}(_react.Component);

exports.default = SlideButton;

SlideButton.propTypes = {
  goToSlide: _propTypes2.default.func.isRequired,
  slideId: _propTypes2.default.number.isRequired,
  currentSlideId: _propTypes2.default.number.isRequired
};

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  text-align: center;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n'], ['\n  ', '\n  text-align: center;\n  width: 100%;\n\n  display: flex;\n  justify-content: center;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
                                                                        return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
                                                                        return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

// import mediaQuery from './../../theme/styled-components/mediaQuery';

module.exports = _styledComponents2.default.section(_templateObject, '' /* ${mediaQuery.mobileS`
                                                                        padding-right: 24px;
                                                                        padding-left: 24px;
                                                                        `}
                                                                        ${mediaQuery.tablet`
                                                                        padding-right: 80px;
                                                                        padding-left: 80px;
                                                                        `}
                                                                        ${mediaQuery.laptop`
                                                                        padding-right: 320px;
                                                                        padding-left: 320px;
                                                                        `} */);

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PageShell = __webpack_require__(25);

var _PageShell2 = _interopRequireDefault(_PageShell);

var _GridItemShell = __webpack_require__(344);

var _GridItemShell2 = _interopRequireDefault(_GridItemShell);

var _ContactForm = __webpack_require__(73);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _Container = __webpack_require__(346);

var _Container2 = _interopRequireDefault(_Container);

var _LeftColumn = __webpack_require__(347);

var _LeftColumn2 = _interopRequireDefault(_LeftColumn);

var _Headline = __webpack_require__(348);

var _Headline2 = _interopRequireDefault(_Headline);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Contact(props) {
  return _react2.default.createElement(_PageShell2.default, {
    containerLevelClass: '',
    style: {}
  }, _react2.default.createElement(_GridItemShell2.default, null, _react2.default.createElement(_Container2.default, null, _react2.default.createElement(_Headline2.default, null, 'We\'d love to hear from you!'), _react2.default.createElement(_LeftColumn2.default, null, _react2.default.createElement(_ContactForm2.default, null)))), props.children);
}

Contact.propTypes = {
  children: _propTypes2.default.objectOf(_propTypes2.default.any)
};
Contact.defaultProps = {
  children: null
};
exports.default = Contact;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GridItemShell;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _concatCssClasses = __webpack_require__(345);

var _concatCssClasses2 = _interopRequireDefault(_concatCssClasses);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function GridItemShell(props) {
  var userCustomStyleClassNames = (0, _concatCssClasses2.default)(props.gridStyle) || '';
  var containerLevelStyle = 'gridItemShell__container original ' + userCustomStyleClassNames;
  var responsive = props.gridResponsiveProperties || {};
  var standard = responsive.standard || 12;
  var sm = responsive.sm || 12;
  var md = responsive.md || 12;
  var lg = responsive.lg || 12;
  var xl = responsive.xl || 12;
  var offset = responsive.offset || {
    standard: '',
    sm: '',
    md: '',
    lg: '',
    xl: ''
  };

  var composedStyles = containerLevelStyle + '\n    col-' + standard + '\n    col-sm-' + sm + '\n    col-md-' + md + '\n    col-lg-' + lg + '\n    col-xl-' + xl + '\n    offset-' + offset.standard + '\n    offset-sm-' + offset.sm + '\n    offset-md-' + offset.md + '\n    offset-lg-' + offset.lg + '\n    offset-xl-' + offset.xl + '\n  ';

  var customStyle = props.gridCustomStyle || {};
  var noCustomStyleAvailable = !Object.keys(customStyle).length && customStyle.constructor === Object;
  return _react2.default.createElement('section', {
    className: composedStyles,
    style: !noCustomStyleAvailable ? customStyle.container.inlineStyles : null
  }, props.children);
}

GridItemShell.propTypes = {
  gridResponsiveProperties: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
  gridStyle: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
  gridCustomStyle: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
  children: _propTypes2.default.node.isRequired
};

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concatCssClasses;
function concatCssClasses(classesAsArray) {
  if (!classesAsArray || !classesAsArray.length) return '';

  var finalClasses = ' ';
  classesAsArray.forEach(function (item) {
    finalClasses = finalClasses + ' ' + item;
  });
  finalClasses = finalClasses + ' ';
  return finalClasses;
}

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: contact-page-container', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-areas:\n    ". contact-page-headline ."\n    ". contact-page-left-column .";\n  margin-left: 25px;\n  margin-right: 25px;\n'], ['\n  grid-area: contact-page-container', ';\n  display: grid;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-areas:\n    ". contact-page-headline ."\n    ". contact-page-left-column .";\n  margin-left: 25px;\n  margin-right: 25px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

// two columns mode switch areas to:
// "contact-page-left-column contact-page-right-column";

module.exports = _styledComponents2.default.section(_templateObject, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
});

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: contact-page-left-column', ';\n'], ['\n  grid-area: contact-page-left-column', ';\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.section(_templateObject, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
});

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _templateObject = _taggedTemplateLiteral(['\n  grid-area: contact-page-headline', ';\n  color: #333;\n  font-size: 24px;\n  text-align: center;\n  text-decoration: underline;\n  margin-top: 24px;\n'], ['\n  grid-area: contact-page-headline', ';\n  color: #333;\n  font-size: 24px;\n  text-align: center;\n  text-decoration: underline;\n  margin-top: 24px;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

module.exports = _styledComponents2.default.h1(_templateObject, function (props) {
  return props.gridAreaId ? '-' + props.gridAreaId : '';
});

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ezSiteContentStore = __webpack_require__(7);

var _GridItem = __webpack_require__(26);

var _GridItem2 = _interopRequireDefault(_GridItem);

var _consoleShow = __webpack_require__(27);

var _consoleShow2 = _interopRequireDefault(_consoleShow);

var _PageShell = __webpack_require__(25);

var _PageShell2 = _interopRequireDefault(_PageShell);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ProductListing = function (_Component) {
  _inherits(ProductListing, _Component);

  function ProductListing() {
    _classCallCheck(this, ProductListing);

    return _possibleConstructorReturn(this, (ProductListing.__proto__ || Object.getPrototypeOf(ProductListing)).apply(this, arguments));
  }

  _createClass(ProductListing, [{
    key: 'render',
    value: function render() {
      (0, _consoleShow2.default)('props', {
        componentName: 'Listing',
        props: this.props
      });
      var routeParams = this.props.params;
      var productRef = routeParams.productRef,
          tagRef = routeParams.tagRef;
      // const productRef = routeParams.productRef;
      // const queryParams = this.props.location.query;

      // find specific product grid item with productRef & queryParams
      // TODO: right now its NOT COMPLETE!!!!

      var gridItemName = '';
      var listingGridItem = null;

      // TODO in the future, taag path should be query param for multiple tags,
      // instead of a path ref!!! NOT SCALABLE!
      if (tagRef) {
        gridItemName = 'specific tag product listing';
        listingGridItem = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemName', gridItemName, true);

        // WARNNING:
        // a anti-pattern way to injecting dynamic var into existing data....
        // had to be done for the filter type grid
        var collectionFilterName = listingGridItem.gridContent.data.name;
        var listingContentRaw = _ezSiteContentStore.ContentSynchronizer.getCollection(collectionFilterName);
        listingGridItem.gridContent.data.filteredListing = listingContentRaw.filter(function (item) {
          var tags = item.tags;

          var matched = false;
          for (var i = 0; i < tags.length; i += 1) {
            if (tags[i] === tagRef) {
              matched = true;
              break;
            }
          }
          return matched;
        }) || [];
      } else if (productRef) {
        gridItemName = 'product listing';
        listingGridItem = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemName', gridItemName, true);
      } else {
        gridItemName = 'product listing';
        listingGridItem = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemName', gridItemName, true);
      }

      var bodyDisplay = _react2.default.createElement(_GridItem2.default, {
        gridResponsiveProperties: listingGridItem.gridResponsiveProperties,
        gridContent: listingGridItem.gridContent,
        gridStyle: listingGridItem.gridStyle,
        gridComponent: listingGridItem.gridComponent,
        key: listingGridItem.gridItemId.toString()
      });
      return _react2.default.createElement(_PageShell2.default, {
        hasSlides: true,
        containerLevelClass: 'productListing__container row no-gutters',
        style: {}
      }, bodyDisplay, this.props.children);
    }
  }]);

  return ProductListing;
}(_react.Component);
ProductListing.propTypes = {
  // TODO: need in the future for query param
  // location: PropTypes.any,
  params: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired,
  children: _propTypes2.default.objectOf(_propTypes2.default.any)
};
ProductListing.defaultProps = {
  children: null
};
exports.default = ProductListing;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ezSiteContentStore = __webpack_require__(7);

var _GridItem = __webpack_require__(26);

var _GridItem2 = _interopRequireDefault(_GridItem);

var _PageShell = __webpack_require__(25);

var _PageShell2 = _interopRequireDefault(_PageShell);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function Product(props) {
  var productRef = props.productRef,
      children = props.children;

  var routeParams = props.params;
  var productRefRefreshed = routeParams ? routeParams.productRef : productRef;
  // const queryParams = props.location.query;

  // find specific product grid item with productRef & queryParams
  // TODO: right now its NOT COMPLETE!!!!

  var productSpecs = _ezSiteContentStore.ContentSynchronizer.getProductGrid(productRefRefreshed);
  var PRODUCT_GRID_ITEM_ID = 3;
  var productGridItem = _ezSiteContentStore.ContentSynchronizer.getItem('grids', 'gridItemId', PRODUCT_GRID_ITEM_ID, true);
  // TODO: Dynamic inject content... not very dry
  productGridItem.gridContent.productSpecs = productSpecs;

  var bodyDisplay = _react2.default.createElement(_GridItem2.default, {
    gridResponsiveProperties: productGridItem.gridResponsiveProperties,
    gridContent: productGridItem.gridContent,
    gridStyle: productGridItem.gridStyle,
    gridComponent: productGridItem.gridComponent,
    key: productGridItem.gridItemId.toString()
  });
  return _react2.default.createElement(_PageShell2.default, {
    containerLevelClass: '',
    anchorToBelow: 'sub-menu-bar',
    style: {}
  }, bodyDisplay, children);
}
Product.propTypes = {
  // location: PropTypes.any,
  params: _propTypes2.default.objectOf(_propTypes2.default.any),
  productRef: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.objectOf(_propTypes2.default.any)
};
Product.defaultProps = {
  params: null,
  children: null
};
exports.default = Product;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CenteredSpaceShell;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = __webpack_require__(352);

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CenteredSpaceShell(props) {
  var children = props.children;

  return _react2.default.createElement(_Container2.default, null, children);
}

CenteredSpaceShell.propTypes = {
  children: _propTypes2.default.objectOf(_propTypes2.default.any).isRequired
};

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n'], ['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n']);

var _styledComponents = __webpack_require__(0);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

exports.default = _styledComponents2.default.div(_templateObject);

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _omit = __webpack_require__(50);

var _omit2 = _interopRequireDefault(_omit);

var _children = __webpack_require__(354);

var _children2 = _interopRequireDefault(_children);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EzTester = function EzTester(props) {
  var children = props.children,
      val = props.val;

  var selectedProps = (0, _omit2.default)(props, ['children']);
  return _react2.default.createElement('h1', selectedProps, 'EzTester ', children, val);
};

EzTester.propTypes = {
  children: _children2.default,
  val: _propTypes2.default.string
};

EzTester.defaultProps = {
  children: null,
  val: ''
};

exports.default = EzTester;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]);

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = onChange;

var _ezlogger = __webpack_require__(356);

var _ezlogger2 = _interopRequireDefault(_ezlogger);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function onChange(event) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    isState: true,
    callback: null
  };
  var isState = config.isState,
      callback = config.callback;
  var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value,
      type = _event$target.type;

  switch (type) {
    case 'text':
    case 'email':
    case 'password':
      if (isState) {
        this.setState(function (prevState) {
          return _extends({}, prevState, _defineProperty({}, name, '' + value));
        });
      } else {
        callback(event);
      }

      break;
    default:
      (0, _ezlogger2.default)('\n        EXCEPTION FOR INPUT!\n      ');
      (0, _ezlogger2.default)('\n        name: ' + name + '\n        value: ' + value + '\n        type: ' + type + '\n      ');
      if (isState) {
        this.setState(function (prevState) {
          return _extends({}, prevState);
        });
      } else {
        callback(event);
      }
  }
}

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ezlogger;

/* eslint-disable */
function ezlogger(data, comment) {
  console.log(comment || '-------');
  console.log(data);
}

/* eslint-enable */

/***/ })
/******/ ])));