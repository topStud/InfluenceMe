self["webpackHotUpdate_N_E"]("pages/newAccount",{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/blue.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/blue.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var _default = blue;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/common.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/green.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/green.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var _default = green;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/grey.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/grey.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/indigo.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/indigo.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
var _default = indigo;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/orange.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/orange.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
var _default = orange;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/pink.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/pink.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
var _default = pink;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/red.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/red.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/colorManipulator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/colorManipulator.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hexToRgb = hexToRgb;
exports.rgbToHex = rgbToHex;
exports.hslToRgb = hslToRgb;
exports.decomposeColor = decomposeColor;
exports.recomposeColor = recomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.alpha = alpha;
exports.darken = darken;
exports.lighten = lighten;

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");

/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: The value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */


function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( true ? "Material-UI: Unsupported `".concat(color, "` color.\nWe support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().") : 0);
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */


function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */


function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */


function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

var warnedOnce = false;
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 *
 * @deprecated
 * Use `import { alpha } from '@material-ui/core/styles'` instead.
 */

function fade(color, value) {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.', '', "You should use `import { alpha } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return alpha(color, value);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha value is overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0-1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createBreakpoints.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/createBreakpoints.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createBreakpoints;
exports.keys = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

exports.keys = keys;

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0, _objectWithoutProperties2.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  var warnedOnce = false;

  function width(key) {
    if (true) {
      if (!warnedOnce) {
        warnedOnce = true;
        console.warn(["Material-UI: The `theme.breakpoints.width` utility is deprecated because it's redundant.", 'Use the `theme.breakpoints.values` instead.'].join('\n'));
      }
    }

    return values[key];
  }

  return (0, _extends2.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createMixins.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/createMixins.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createMixins;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0, _extends3.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.warn(['Material-UI: theme.mixins.gutters() is deprecated.', 'You can use the source of the mixin directly:', "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join('\n'));
      return (0, _extends3.default)({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, (0, _defineProperty2.default)({}, breakpoints.up('sm'), (0, _extends3.default)({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0, _defineProperty2.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0, _defineProperty2.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createPalette.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/createPalette.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createPalette;
exports.dark = exports.light = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");

var _common = _interopRequireDefault(__webpack_require__(/*! ../colors/common */ "./node_modules/@material-ui/core/colors/common.js"));

var _grey = _interopRequireDefault(__webpack_require__(/*! ../colors/grey */ "./node_modules/@material-ui/core/colors/grey.js"));

var _indigo = _interopRequireDefault(__webpack_require__(/*! ../colors/indigo */ "./node_modules/@material-ui/core/colors/indigo.js"));

var _pink = _interopRequireDefault(__webpack_require__(/*! ../colors/pink */ "./node_modules/@material-ui/core/colors/pink.js"));

var _red = _interopRequireDefault(__webpack_require__(/*! ../colors/red */ "./node_modules/@material-ui/core/colors/red.js"));

var _orange = _interopRequireDefault(__webpack_require__(/*! ../colors/orange */ "./node_modules/@material-ui/core/colors/orange.js"));

var _blue = _interopRequireDefault(__webpack_require__(/*! ../colors/blue */ "./node_modules/@material-ui/core/colors/blue.js"));

var _green = _interopRequireDefault(__webpack_require__(/*! ../colors/green */ "./node_modules/@material-ui/core/colors/green.js"));

var _colorManipulator = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _common.default.white,
    default: _grey.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
exports.light = light;
var dark = {
  text: {
    primary: _common.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _grey.default[800],
    default: '#303030'
  },
  action: {
    active: _common.default.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
exports.dark = dark;

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0, _colorManipulator.lighten)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0, _colorManipulator.darken)(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _indigo.default[300],
    main: _indigo.default[500],
    dark: _indigo.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _pink.default.A200,
    main: _pink.default.A400,
    dark: _pink.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _red.default[300],
    main: _red.default[500],
    dark: _red.default[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: _orange.default[300],
    main: _orange.default[500],
    dark: _orange.default[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: _blue.default[300],
    main: _blue.default[500],
    dark: _blue.default[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: _green.default[300],
    main: _green.default[500],
    dark: _green.default[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0, _objectWithoutProperties2.default)(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

  function getContrastText(background) {
    var contrastText = (0, _colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0, _colorManipulator.getContrastRatio)(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: The contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = (0, _extends2.default)({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\nThe color object needs to have a `main` property or a `".concat(mainShade, "` property.") : 0);
    }

    if (typeof color.main !== 'string') {
      throw new Error( true ? "Material-UI: The color provided to augmentColor(color) is invalid.\n`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead.\n\nDid you intend to use one of the following approaches?\n\nimport {\xA0green } from \"@material-ui/core/colors\";\n\nconst theme1 = createTheme({ palette: {\n  primary: green,\n} });\n\nconst theme2 = createTheme({ palette: {\n  primary: { main: green[500] },\n} });") : 0);
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: The palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = (0, _utils.deepmerge)((0, _extends2.default)({
    // A collection of common colors.
    common: _common.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: _grey.default,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createSpacing.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/createSpacing.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createSpacing;

var _system = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/system/esm/index.js");

var warnOnce;

function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = (0, _system.createUnarySpacing)({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createTheme.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/createTheme.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createMuiTheme = createMuiTheme;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");

var _createBreakpoints = _interopRequireDefault(__webpack_require__(/*! ./createBreakpoints */ "./node_modules/@material-ui/core/styles/createBreakpoints.js"));

var _createMixins = _interopRequireDefault(__webpack_require__(/*! ./createMixins */ "./node_modules/@material-ui/core/styles/createMixins.js"));

var _createPalette = _interopRequireDefault(__webpack_require__(/*! ./createPalette */ "./node_modules/@material-ui/core/styles/createPalette.js"));

var _createTypography = _interopRequireDefault(__webpack_require__(/*! ./createTypography */ "./node_modules/@material-ui/core/styles/createTypography.js"));

var _shadows = _interopRequireDefault(__webpack_require__(/*! ./shadows */ "./node_modules/@material-ui/core/styles/shadows.js"));

var _shape = _interopRequireDefault(__webpack_require__(/*! ./shape */ "./node_modules/@material-ui/core/styles/shape.js"));

var _createSpacing = _interopRequireDefault(__webpack_require__(/*! ./createSpacing */ "./node_modules/@material-ui/core/styles/createSpacing.js"));

var _transitions = _interopRequireDefault(__webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/styles/transitions.js"));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./zIndex */ "./node_modules/@material-ui/core/styles/zIndex.js"));

function createTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0, _objectWithoutProperties2.default)(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);
  var palette = (0, _createPalette.default)(paletteInput);
  var breakpoints = (0, _createBreakpoints.default)(breakpointsInput);
  var spacing = (0, _createSpacing.default)(spacingInput);
  var muiTheme = (0, _utils.deepmerge)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0, _createMixins.default)(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: _shadows.default,
    typography: (0, _createTypography.default)(palette, typographyInput),
    spacing: spacing,
    shape: _shape.default,
    transitions: _transitions.default,
    zIndex: _zIndex.default
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return (0, _utils.deepmerge)(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: The `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: (0, _defineProperty2.default)({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

var warnedOnce = false;

function createMuiTheme() {
  if (true) {
    if (!warnedOnce) {
      warnedOnce = true;
      console.error(['Material-UI: the createMuiTheme function was renamed to createTheme.', '', "You should use `import { createTheme } from '@material-ui/core/styles'`"].join('\n'));
    }
  }

  return createTheme.apply(void 0, arguments);
}

var _default = createTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createTypography.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/createTypography.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createTypography;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _utils = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var warnedOnce = false;

function roundWithDeprecationWarning(value) {
  if (true) {
    if (!warnedOnce) {
      console.warn(['Material-UI: The `theme.typography.round` helper is deprecated.', 'Head to https://material-ui.com/r/migration-v4/#theme for a migration path.'].join('\n'));
      warnedOnce = true;
    }
  }

  return round(value);
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = (0, _objectWithoutProperties2.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return (0, _extends2.default)({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return (0, _utils.deepmerge)((0, _extends2.default)({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: roundWithDeprecationWarning,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/defaultTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/defaultTheme.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _createTheme = _interopRequireDefault(__webpack_require__(/*! ./createTheme */ "./node_modules/@material-ui/core/styles/createTheme.js"));

var defaultTheme = (0, _createTheme.default)();
var _default = defaultTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/shadows.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/shadows.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var _default = shadows;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/shape.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/shape.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var shape = {
  borderRadius: 4
};
var _default = shape;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/transitions.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/transitions.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.duration = exports.easing = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

exports.easing = easing;
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
exports.duration = duration;

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


var _default = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = (0, _objectWithoutProperties2.default)(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: Argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: Argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: Argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: Argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: Unrecognized argument(s) [".concat(Object.keys(other).join(','), "]."));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withStyles.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/withStyles.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _styles = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _defaultTheme = _interopRequireDefault(__webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/styles/defaultTheme.js"));

function withStyles(stylesOrCreator, options) {
  return (0, _styles.withStyles)(stylesOrCreator, (0, _extends2.default)({
    defaultTheme: _defaultTheme.default
  }, options));
}

var _default = withStyles;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/zIndex.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/styles/zIndex.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var _default = zIndex;
exports.default = _default;

/***/ }),

/***/ "./components/personalInfo.js":
/*!************************************!*\
  !*** ./components/personalInfo.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PersonalInfo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AddPhotoAlternate */ "./node_modules/@material-ui/icons/AddPhotoAlternate.js");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/colors */ "./node_modules/@material-ui/core/esm/colors/index.js");
/* harmony import */ var _phoneTextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phoneTextField */ "./components/phoneTextField.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\topaz\\WebstormProjects\\InfluenceMe\\app\\components\\personalInfo.js",
    _s = $RefreshSig$();








function PersonalInfo() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState2 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      phoneValue = _React$useState2[0],
      setPhoneValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
      _React$useState4 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      selectedFile = _React$useState4[0],
      setSelectedFile = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(''),
      _React$useState6 = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState5, 2),
      imageName = _React$useState6[0],
      setImageName = _React$useState6[1];

  var handleUploadClick = function handleUploadClick(event) {
    var file = event.target.files[0];
    setImageName(file.name);
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      setSelectedFile(reader.result);
    };
  };

  function onPhoneChange(e) {
    setPhoneValue(e.target.value);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
    container: true,
    spacing: 4,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        id: "firstName",
        label: "First Name",
        type: "text",
        fullWidth: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 6,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        id: "lastName",
        label: "Last Name",
        type: "text",
        fullWidth: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__.default, {
        id: "date",
        label: "Birthday",
        type: "date",
        fullWidth: true,
        InputLabelProps: {
          shrink: true
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 8,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        accept: "image/*",
        style: {
          display: "none"
        },
        id: "contained-button-file",
        multiple: true,
        type: "file",
        onChange: handleUploadClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "contained-button-file",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Fab, {
          component: "span",
          style: {
            color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__.blue[900],
            margin: 10
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_AddPhotoAlternate__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), imageName !== '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: imageName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 42
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Add a profile picture"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 71
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__.default, {
      item: true,
      xs: 12,
      sm: 4,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PhoneTextField, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(PersonalInfo, "kL1W5Yo4fRp+SlPFv8EJSWHlkSk=");

_c = PersonalInfo;

var _c;

$RefreshReg$(_c, "PersonalInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/phoneTextField.js":
/*!**************************************!*\
  !*** ./components/phoneTextField.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var material_ui_phone_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-ui-phone-number */ "./node_modules/material-ui-phone-number/dist/index.js");
/* harmony import */ var material_ui_phone_number__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_ui_phone_number__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "C:\\Users\\topaz\\WebstormProjects\\InfluenceMe\\app\\components\\phoneTextField.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var CreateUserDialog = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(CreateUserDialog, _React$Component);

  var _super = _createSuper(CreateUserDialog);

  function CreateUserDialog(props) {
    var _this;

    (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, CreateUserDialog);

    _this = _super.call(this, props);
    _this.state = {
      defaultValues: {
        phone: ""
      }
    };
    _this.handlePhoneChange = _this.handlePhoneChange.bind((0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    return _this;
  }

  (0,C_Users_topaz_WebstormProjects_InfluenceMe_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(CreateUserDialog, [{
    key: "handlePhoneChange",
    value: function handlePhoneChange(value) {
      if (value) {
        this.setState({
          phone: value
        });
        console.log(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((material_ui_phone_number__WEBPACK_IMPORTED_MODULE_8___default()), {
        name: "phone",
        label: "Phone Number",
        "data-cy": "user-phone",
        defaultCountry: "us",
        value: this.state.phone,
        onChange: this.handlePhoneChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this);
    }
  }]);

  return CreateUserDialog;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (CreateUserDialog);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/material-ui-phone-number/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/material-ui-phone-number/dist/index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports=function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=182)}([function(n,e,t){n.exports=t(174)()},function(n,e){n.exports=__webpack_require__(/*! react */ "./node_modules/material-ui-phone-number/node_modules/react/index.js")},function(n,e){var t=Array.isArray;n.exports=t},function(n,e,t){var r=t(40),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();n.exports=a},function(n,e,t){var r=t(78),o=t(25),a=t(27),i=t(28);n.exports=function(n,e,t){return n=i(n),t=null==t?0:r(a(t),0,n.length),e=o(e),n.slice(t,t+e.length)==e}},function(n,e,t){var r=t(171)(t(23));n.exports=r},function(n,e,t){var r=t(14),o=t(76),a=t(77),i="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?u:i:c&&c in Object(n)?o(n):a(n)}},function(n,e){n.exports=function(n){return null!=n&&"object"==typeof n}},function(n,e){n.exports=function(n){var e=typeof n;return null!=n&&("object"==e||"function"==e)}},function(n,e,t){var r=t(92),o=t(95);n.exports=function(n,e){var t=o(n,e);return r(t)?t:void 0}},function(n,e,t){var r=t(111),o=t(150),a=t(157),i=t(2),u=t(158);n.exports=function(n){return"function"==typeof n?n:null==n?a:"object"==typeof n?i(n)?o(n[0],n[1]):r(n):u(n)}},function(n,e,t){var r=t(44),o=t(34);n.exports=function(n){return null!=n&&o(n.length)&&!r(n)}},function(n,e,t){var r=t(133),o=t(140),a=t(11);n.exports=function(n){return a(n)?r(n):o(n)}},function(n,e,t){var r=t(26),o=t(10),a=t(168),i=t(2);n.exports=function(n,e){return(i(n)?r:a)(n,o(e,3))}},function(n,e,t){var r=t(3).Symbol;n.exports=r},function(n,e,t){var r=t(6),o=t(7),a="[object Symbol]";n.exports=function(n){return"symbol"==typeof n||o(n)&&r(n)==a}},function(n,e,t){var r=t(9)(Object,"create");n.exports=r},function(n,e,t){var r=t(100),o=t(101),a=t(102),i=t(103),u=t(104);function c(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,n.exports=c},function(n,e,t){var r=t(31);n.exports=function(n,e){for(var t=n.length;t--;)if(r(n[t][0],e))return t;return-1}},function(n,e,t){var r=t(106);n.exports=function(n,e){var t=n.__data__;return r(e)?t["string"==typeof e?"string":"hash"]:t.map}},function(n,e,t){var r=t(15),o=1/0;n.exports=function(n){if("string"==typeof n||r(n))return n;var e=n+"";return"0"==e&&1/n==-o?"-0":e}},function(n,e,t){var r=t(164),o=t(167)(r);n.exports=o},function(n,e,t){var r=t(30),o="Expected a function";function a(n,e){if("function"!=typeof n||null!=e&&"function"!=typeof e)throw new TypeError(o);var t=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=t.cache;if(a.has(o))return a.get(o);var i=n.apply(this,r);return t.cache=a.set(o,i)||a,i};return t.cache=new(a.Cache||r),t}a.Cache=r,n.exports=a},function(n,e,t){var r=t(43),o=t(10),a=t(27),i=Math.max;n.exports=function(n,e,t){var u=null==n?0:n.length;if(!u)return-1;var c=null==t?0:a(t);return c<0&&(c=i(u+c,0)),r(n,o(e,3),c)}},function(n,e,t){var r=t(50),o=t(163),a=t(10),i=t(2);n.exports=function(n,e){return(i(n)?r:o)(n,a(e,3))}},function(n,e,t){var r=t(14),o=t(26),a=t(2),i=t(15),u=1/0,c=r?r.prototype:void 0,s=c?c.toString:void 0;n.exports=function n(e){if("string"==typeof e)return e;if(a(e))return o(e,n)+"";if(i(e))return s?s.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}},function(n,e){n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length,o=Array(r);++t<r;)o[t]=e(n[t],t,n);return o}},function(n,e,t){var r=t(79);n.exports=function(n){var e=r(n),t=e%1;return e==e?t?e-t:e:0}},function(n,e,t){var r=t(25);n.exports=function(n){return null==n?"":r(n)}},function(n,e,t){var r=t(43),o=t(82),a=t(83);n.exports=function(n,e,t){return e==e?a(n,e,t):r(n,o,t)}},function(n,e,t){var r=t(89),o=t(105),a=t(107),i=t(108),u=t(109);function c(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,n.exports=c},function(n,e){n.exports=function(n,e){return n===e||n!=n&&e!=e}},function(n,e,t){var r=t(9)(t(3),"Map");n.exports=r},function(n,e){var t=9007199254740991,r=/^(?:0|[1-9]\d*)$/;n.exports=function(n,e){var o=typeof n;return!!(e=null==e?t:e)&&("number"==o||"symbol"!=o&&r.test(n))&&n>-1&&n%1==0&&n<e}},function(n,e){var t=9007199254740991;n.exports=function(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=t}},function(n,e,t){var r=t(2),o=t(15),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;n.exports=function(n,e){if(r(n))return!1;var t=typeof n;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=n&&!o(n))||(i.test(n)||!a.test(n)||null!=e&&n in Object(e))}},function(n,e,t){var r=t(6),o=t(2),a=t(7),i="[object String]";n.exports=function(n){return"string"==typeof n||!o(n)&&a(n)&&r(n)==i}},function(n,e,t){var r=t(169),o=t(21),a=t(10),i=t(170),u=t(2);n.exports=function(n,e,t){var c=u(n)?r:i,s=arguments.length<3;return c(n,a(e,4),t,s,o)}},function(n,e,t){var r=t(49),o=t(10),a=t(172),i=t(2),u=t(173);n.exports=function(n,e,t){var c=i(n)?r:a;return t&&u(n,e,t)&&(e=void 0),c(n,o(e,3))}},function(n,e){var t;function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){o=!0,a=n}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i={};function u(n,e,t){e in i||(i[e]=[]);var r=t||0;i[e][r]=n}var c,s=(t=[]).concat.apply(t,function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(c=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["American Samoa",["oceania"],"as","1684"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Anguilla",["america","carribean"],"ai","1264"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","+.. (..) ........"],["Armenia",["asia","ex-ussr"],"am","374"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","+.. ... ... ..."],["Austria",["europe","european-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994"],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","+... (..) ... .. .."],["Belgium",["europe","european-union"],"be","32","+.. ... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bermuda",["america","north-america"],"bm","1441"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","+.. (..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["British Virgin Islands",["america","carribean"],"vg","1284"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","european-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","+. (...) ...-....",1,["204","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599","",1],["Cayman Islands",["america","carribean"],"ky","1345"],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86","+.. ..-........."],["Colombia",["america","south-america"],"co","57"],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Cook Islands",["oceania"],"ck","682"],["Costa Rica",["america","central-america"],"cr","506","+... ....-...."],["Côte d’Ivoire",["africa"],"ci","225"],["Croatia",["europe","european-union"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599","",0],["Cyprus",["europe","european-union"],"cy","357","+... .. ......"],["Czech Republic",["europe","european-union"],"cz","420"],["Denmark",["europe","european-union"],"dk","45","+.. .. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1","",2,["809","829","849"]],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503","+... ....-...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","european-union","ex-ussr"],"ee","372","+... .... ......"],["Ethiopia",["africa"],"et","251"],["Falkland Islands",["america","south-america"],"fk","500"],["Faroe Islands",["europe"],"fo","298"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","european-union"],"fi","358","+... .. ... .. .."],["France",["europe","european-union"],"fr","33","+.. . .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","european-union"],"de","49","+.. .... ........"],["Ghana",["africa"],"gh","233"],["Gibraltar",["europe"],"gi","350"],["Greece",["europe","european-union"],"gr","30"],["Greenland",["america"],"gl","299"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502","+... ....-...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509","+... ....-...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852","+... .... ...."],["Hungary",["europe","european-union"],"hu","36"],["Iceland",["europe"],"is","354","+... ... ...."],["India",["asia"],"in","91","+.. .....-....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98"],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","european-union"],"ie","353","+... .. ......."],["Israel",["middle-east"],"il","972","+... ... ... ...."],["Italy",["europe","european-union"],"it","39","+.. ... .......",0],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81","+.. .. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","+. ... ...-..-..",1,["313","327","7172","312","73622","321","324","336","318","315","325","311","326","310"]],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996"],["Laos",["asia"],"la","856"],["Latvia",["europe","european-union","ex-ussr"],"lv","371"],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","european-union","ex-ussr"],"lt","370"],["Luxembourg",["europe","european-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60","+.. ..-....-...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","european-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52"],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","+... (..) ..-..-.."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe"],"me","382"],["Montserrat",["america","carribean"],"ms","1664"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","european-union"],"nl","31","+.. .. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","+.. ...-...-...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["Niue",["asia"],"nu","683"],["Norfolk Island",["oceania"],"nf","672"],["North Korea",["asia"],"kp","850"],["Northern Mariana Islands",["oceania"],"mp","1670"],["Norway",["europe"],"no","47","+.. ... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","+.. ...-......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63","+.. .... ......."],["Poland",["europe","european-union"],"pl","48","+.. ...-...-..."],["Portugal",["europe","european-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1","",3,["787","939"]],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","european-union"],"ro","40"],["Russia",["europe","asia","ex-ussr"],"ru","7","+. (...) ...-..-..",0],["Rwanda",["africa"],"rw","250"],["Saint Barthélemy",["america","carribean"],"bl","590","",1],["Saint Helena",["africa"],"sh","290"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Martin",["america","carribean"],"mf","590","",2],["Saint Pierre and Miquelon",["america","north-america"],"pm","508"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65","+.. ....-...."],["Sint Maarten",["america","carribean"],"sx","1721"],["Slovakia",["europe","european-union"],"sk","421"],["Slovenia",["europe","european-union"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","+.. ... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","european-union"],"es","34","+.. ... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","european-union"],"se","46","+.. (..) ...-..-.."],["Switzerland",["europe"],"ch","41","+.. .. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tokelau",["oceania"],"tk","690"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","+.. ... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Turks and Caicos Islands",["america","carribean"],"tc","1649"],["Tuvalu",["asia"],"tv","688"],["U.S. Virgin Islands",["america","carribean"],"vi","1340"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","+... (..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","european-union"],"gb","44","+.. .... ......"],["United States",["america","north-america"],"us","1","+. (...) ...-....",0,["907","205","251","256","334","479","501","870","480","520","602","623","928","209","213","310","323","408","415","510","530","559","562","619","626","650","661","707","714","760","805","818","831","858","909","916","925","949","951","303","719","970","203","860","202","302","239","305","321","352","386","407","561","727","772","813","850","863","904","941","954","229","404","478","706","770","912","808","319","515","563","641","712","208","217","309","312","618","630","708","773","815","847","219","260","317","574","765","812","316","620","785","913","270","502","606","859","225","318","337","504","985","413","508","617","781","978","301","410","207","231","248","269","313","517","586","616","734","810","906","989","218","320","507","612","651","763","952","314","417","573","636","660","816","228","601","662","406","252","336","704","828","910","919","701","308","402","603","201","609","732","856","908","973","505","575","702","775","212","315","516","518","585","607","631","716","718","845","914","216","330","419","440","513","614","740","937","405","580","918","503","541","215","412","570","610","717","724","814","401","803","843","864","605","423","615","731","865","901","931","210","214","254","281","325","361","409","432","512","713","806","817","830","903","915","936","940","956","972","979","435","801","276","434","540","703","757","804","802","206","253","360","425","509","262","414","608","715","920","304","307"]],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998"],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39","+.. .. .... ....",1],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Wallis and Futuna",["oceania"],"wf","681"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]].map((function(n){var e=a(n,7),t=e[0],i=e[1],c=e[2],s=e[3],p=e[4],f=e[5],l=e[6],g={name:t,regions:i,iso2:c,dialCode:s,priority:f,format:p||void 0,hasAreaCodes:l},d=[];return g.hasAreaCodes&&l.forEach((function(n){var e=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(t,!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},g,{regions:i,dialCode:"".concat(s).concat(n),isAreaCode:!0});d.push(e),u(c,e.dialCode)})),u(g.iso2,g.dialCode,g.hasAreaCodes),d.length>0?[g].concat(d):[g]})))||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}());n.exports={allCountries:s,allCountryCodes:i}},function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(75))},function(n,e,t){var r=t(8),o=t(15),a=NaN,i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,p=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(o(n))return a;if(r(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=r(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var t=c.test(n);return t||s.test(n)?p(n.slice(2),t?2:8):u.test(n)?a:+n}},function(n,e){n.exports=function(n,e,t){var r=-1,o=n.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(o);++r<o;)a[r]=n[r+e];return a}},function(n,e){n.exports=function(n,e,t,r){for(var o=n.length,a=t+(r?1:-1);r?a--:++a<o;)if(e(n[a],a,n))return a;return-1}},function(n,e,t){var r=t(6),o=t(8),a="[object AsyncFunction]",i="[object Function]",u="[object GeneratorFunction]",c="[object Proxy]";n.exports=function(n){if(!o(n))return!1;var e=r(n);return e==i||e==u||e==a||e==c}},function(n,e){var t=Function.prototype.toString;n.exports=function(n){if(null!=n){try{return t.call(n)}catch(n){}try{return n+""}catch(n){}}return""}},function(n,e,t){var r=t(17),o=t(113),a=t(114),i=t(115),u=t(116),c=t(117);function s(n){var e=this.__data__=new r(n);this.size=e.size}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=u,s.prototype.set=c,n.exports=s},function(n,e,t){var r=t(118),o=t(7);n.exports=function n(e,t,a,i,u){return e===t||(null==e||null==t||!o(e)&&!o(t)?e!=e&&t!=t:r(e,t,a,i,n,u))}},function(n,e,t){var r=t(119),o=t(49),a=t(122),i=1,u=2;n.exports=function(n,e,t,c,s,p){var f=t&i,l=n.length,g=e.length;if(l!=g&&!(f&&g>l))return!1;var d=p.get(n);if(d&&p.get(e))return d==e;var b=-1,x=!0,A=t&u?new r:void 0;for(p.set(n,e),p.set(e,n);++b<l;){var v=n[b],h=e[b];if(c)var m=f?c(h,v,b,e,n,p):c(v,h,b,n,e,p);if(void 0!==m){if(m)continue;x=!1;break}if(A){if(!o(e,(function(n,e){if(!a(A,e)&&(v===n||s(v,n,t,c,p)))return A.push(e)}))){x=!1;break}}else if(v!==h&&!s(v,h,t,c,p)){x=!1;break}}return p.delete(n),p.delete(e),x}},function(n,e){n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length;++t<r;)if(e(n[t],t,n))return!0;return!1}},function(n,e){n.exports=function(n,e){for(var t=-1,r=null==n?0:n.length,o=0,a=[];++t<r;){var i=n[t];e(i,t,n)&&(a[o++]=i)}return a}},function(n,e,t){var r=t(135),o=t(7),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(n){return o(n)&&i.call(n,"callee")&&!u.call(n,"callee")};n.exports=c},function(n,e,t){(function(n){var r=t(3),o=t(136),a=e&&!e.nodeType&&e,i=a&&"object"==typeof n&&n&&!n.nodeType&&n,u=i&&i.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;n.exports=c}).call(this,t(53)(n))},function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,e,t){var r=t(137),o=t(138),a=t(139),i=a&&a.isTypedArray,u=i?o(i):r;n.exports=u},function(n,e,t){var r=t(8);n.exports=function(n){return n==n&&!r(n)}},function(n,e){n.exports=function(n,e){return function(t){return null!=t&&(t[n]===e&&(void 0!==e||n in Object(t)))}}},function(n,e,t){var r=t(58),o=t(20);n.exports=function(n,e){for(var t=0,a=(e=r(e,n)).length;null!=n&&t<a;)n=n[o(e[t++])];return t&&t==a?n:void 0}},function(n,e,t){var r=t(2),o=t(35),a=t(152),i=t(28);n.exports=function(n,e){return r(n)?n:o(n,e)?[n]:a(i(n))}},function(n,e){n.exports="data:image/png;base64,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"},function(n,e,t){var r=t(25),o=t(80),a=t(81),i=t(84),u=t(85),c=t(28),s=/^\s+|\s+$/g;n.exports=function(n,e,t){if((n=c(n))&&(t||void 0===e))return n.replace(s,"");if(!n||!(e=r(e)))return n;var p=u(n),f=u(e),l=i(p,f),g=a(p,f)+1;return o(p,l,g).join("")}},function(n,e,t){var r=t(8),o=t(110),a=t(41),i="Expected a function",u=Math.max,c=Math.min;n.exports=function(n,e,t){var s,p,f,l,g,d,b=0,x=!1,A=!1,v=!0;if("function"!=typeof n)throw new TypeError(i);function h(e){var t=s,r=p;return s=p=void 0,b=e,l=n.apply(r,t)}function m(n){var t=n-d;return void 0===d||t>=e||t<0||A&&n-b>=f}function y(){var n=o();if(m(n))return C(n);g=setTimeout(y,function(n){var t=e-(n-d);return A?c(t,f-(n-b)):t}(n))}function C(n){return g=void 0,v&&s?h(n):(s=p=void 0,l)}function k(){var n=o(),t=m(n);if(s=arguments,p=this,d=n,t){if(void 0===g)return function(n){return b=n,g=setTimeout(y,e),x?h(n):l}(d);if(A)return clearTimeout(g),g=setTimeout(y,e),h(d)}return void 0===g&&(g=setTimeout(y,e)),l}return e=a(e)||0,r(t)&&(x=!!t.leading,f=(A="maxWait"in t)?u(a(t.maxWait)||0,e):f,v="trailing"in t?!!t.trailing:v),k.cancel=function(){void 0!==g&&clearTimeout(g),b=0,s=d=p=g=void 0},k.flush=function(){return void 0===g?l:C(o())},k}},function(n,e,t){var r=t(42);n.exports=function(n){var e=null==n?0:n.length;return e?r(n,1,e):[]}},function(n,e){n.exports=function(n){return n&&n.length?n[0]:void 0}},function(n,e,t){var r=t(29),o=t(11),a=t(36),i=t(27),u=t(161),c=Math.max;n.exports=function(n,e,t,s){n=o(n)?n:u(n),t=t&&!s?i(t):0;var p=n.length;return t<0&&(t=c(p+t,0)),a(n)?t<=p&&n.indexOf(e,t)>-1:!!p&&r(n,e,t)>-1}},function(n,e){n.exports=__webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js")},function(n,e){n.exports=__webpack_require__(/*! @material-ui/core/RootRef */ "./node_modules/@material-ui/core/esm/RootRef/index.js")},function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},function(n,e,t){var r=t(14),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;n.exports=function(n){var e=a.call(n,u),t=n[u];try{n[u]=void 0;var r=!0}catch(n){}var o=i.call(n);return r&&(e?n[u]=t:delete n[u]),o}},function(n,e){var t=Object.prototype.toString;n.exports=function(n){return t.call(n)}},function(n,e){n.exports=function(n,e,t){return n==n&&(void 0!==t&&(n=n<=t?n:t),void 0!==e&&(n=n>=e?n:e)),n}},function(n,e,t){var r=t(41),o=1/0,a=17976931348623157e292;n.exports=function(n){return n?(n=r(n))===o||n===-o?(n<0?-1:1)*a:n==n?n:0:0===n?n:0}},function(n,e,t){var r=t(42);n.exports=function(n,e,t){var o=n.length;return t=void 0===t?o:t,!e&&t>=o?n:r(n,e,t)}},function(n,e,t){var r=t(29);n.exports=function(n,e){for(var t=n.length;t--&&r(e,n[t],0)>-1;);return t}},function(n,e){n.exports=function(n){return n!=n}},function(n,e){n.exports=function(n,e,t){for(var r=t-1,o=n.length;++r<o;)if(n[r]===e)return r;return-1}},function(n,e,t){var r=t(29);n.exports=function(n,e){for(var t=-1,o=n.length;++t<o&&r(e,n[t],0)>-1;);return t}},function(n,e,t){var r=t(86),o=t(87),a=t(88);n.exports=function(n){return o(n)?a(n):r(n)}},function(n,e){n.exports=function(n){return n.split("")}},function(n,e){var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");n.exports=function(n){return t.test(n)}},function(n,e){var t="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+o+")"+"?",s="[\\ufe0e\\ufe0f]?"+c+("(?:\\u200d(?:"+[a,i,u].join("|")+")[\\ufe0e\\ufe0f]?"+c+")*"),p="(?:"+[a+r+"?",r,i,u,t].join("|")+")",f=RegExp(o+"(?="+o+")|"+p+s,"g");n.exports=function(n){return n.match(f)||[]}},function(n,e,t){var r=t(90),o=t(17),a=t(32);n.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(n,e,t){var r=t(91),o=t(96),a=t(97),i=t(98),u=t(99);function c(n){var e=-1,t=null==n?0:n.length;for(this.clear();++e<t;){var r=n[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=u,n.exports=c},function(n,e,t){var r=t(16);n.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(n,e,t){var r=t(44),o=t(93),a=t(8),i=t(45),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,p=c.toString,f=s.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=function(n){return!(!a(n)||o(n))&&(r(n)?l:u).test(i(n))}},function(n,e,t){var r,o=t(94),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";n.exports=function(n){return!!a&&a in n}},function(n,e,t){var r=t(3)["__core-js_shared__"];n.exports=r},function(n,e){n.exports=function(n,e){return null==n?void 0:n[e]}},function(n,e){n.exports=function(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}},function(n,e,t){var r=t(16),o="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;n.exports=function(n){var e=this.__data__;if(r){var t=e[n];return t===o?void 0:t}return a.call(e,n)?e[n]:void 0}},function(n,e,t){var r=t(16),o=Object.prototype.hasOwnProperty;n.exports=function(n){var e=this.__data__;return r?void 0!==e[n]:o.call(e,n)}},function(n,e,t){var r=t(16),o="__lodash_hash_undefined__";n.exports=function(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=r&&void 0===e?o:e,this}},function(n,e){n.exports=function(){this.__data__=[],this.size=0}},function(n,e,t){var r=t(18),o=Array.prototype.splice;n.exports=function(n){var e=this.__data__,t=r(e,n);return!(t<0)&&(t==e.length-1?e.pop():o.call(e,t,1),--this.size,!0)}},function(n,e,t){var r=t(18);n.exports=function(n){var e=this.__data__,t=r(e,n);return t<0?void 0:e[t][1]}},function(n,e,t){var r=t(18);n.exports=function(n){return r(this.__data__,n)>-1}},function(n,e,t){var r=t(18);n.exports=function(n,e){var t=this.__data__,o=r(t,n);return o<0?(++this.size,t.push([n,e])):t[o][1]=e,this}},function(n,e,t){var r=t(19);n.exports=function(n){var e=r(this,n).delete(n);return this.size-=e?1:0,e}},function(n,e){n.exports=function(n){var e=typeof n;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n}},function(n,e,t){var r=t(19);n.exports=function(n){return r(this,n).get(n)}},function(n,e,t){var r=t(19);n.exports=function(n){return r(this,n).has(n)}},function(n,e,t){var r=t(19);n.exports=function(n,e){var t=r(this,n),o=t.size;return t.set(n,e),this.size+=t.size==o?0:1,this}},function(n,e,t){var r=t(3);n.exports=function(){return r.Date.now()}},function(n,e,t){var r=t(112),o=t(149),a=t(56);n.exports=function(n){var e=o(n);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(t){return t===n||r(t,n,e)}}},function(n,e,t){var r=t(46),o=t(47),a=1,i=2;n.exports=function(n,e,t,u){var c=t.length,s=c,p=!u;if(null==n)return!s;for(n=Object(n);c--;){var f=t[c];if(p&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++c<s;){var l=(f=t[c])[0],g=n[l],d=f[1];if(p&&f[2]){if(void 0===g&&!(l in n))return!1}else{var b=new r;if(u)var x=u(g,d,l,n,e,b);if(!(void 0===x?o(d,g,a|i,u,b):x))return!1}}return!0}},function(n,e,t){var r=t(17);n.exports=function(){this.__data__=new r,this.size=0}},function(n,e){n.exports=function(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}},function(n,e){n.exports=function(n){return this.__data__.get(n)}},function(n,e){n.exports=function(n){return this.__data__.has(n)}},function(n,e,t){var r=t(17),o=t(32),a=t(30),i=200;n.exports=function(n,e){var t=this.__data__;if(t instanceof r){var u=t.__data__;if(!o||u.length<i-1)return u.push([n,e]),this.size=++t.size,this;t=this.__data__=new a(u)}return t.set(n,e),this.size=t.size,this}},function(n,e,t){var r=t(46),o=t(48),a=t(123),i=t(127),u=t(144),c=t(2),s=t(52),p=t(54),f=1,l="[object Arguments]",g="[object Array]",d="[object Object]",b=Object.prototype.hasOwnProperty;n.exports=function(n,e,t,x,A,v){var h=c(n),m=c(e),y=h?g:u(n),C=m?g:u(e),k=(y=y==l?d:y)==d,w=(C=C==l?d:C)==d,B=y==C;if(B&&s(n)){if(!s(e))return!1;h=!0,k=!1}if(B&&!k)return v||(v=new r),h||p(n)?o(n,e,t,x,A,v):a(n,e,y,t,x,A,v);if(!(t&f)){var j=k&&b.call(n,"__wrapped__"),P=w&&b.call(e,"__wrapped__");if(j||P){var O=j?n.value():n,E=P?e.value():e;return v||(v=new r),A(O,E,t,x,v)}}return!!B&&(v||(v=new r),i(n,e,t,x,A,v))}},function(n,e,t){var r=t(30),o=t(120),a=t(121);function i(n){var e=-1,t=null==n?0:n.length;for(this.__data__=new r;++e<t;)this.add(n[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,n.exports=i},function(n,e){var t="__lodash_hash_undefined__";n.exports=function(n){return this.__data__.set(n,t),this}},function(n,e){n.exports=function(n){return this.__data__.has(n)}},function(n,e){n.exports=function(n,e){return n.has(e)}},function(n,e,t){var r=t(14),o=t(124),a=t(31),i=t(48),u=t(125),c=t(126),s=1,p=2,f="[object Boolean]",l="[object Date]",g="[object Error]",d="[object Map]",b="[object Number]",x="[object RegExp]",A="[object Set]",v="[object String]",h="[object Symbol]",m="[object ArrayBuffer]",y="[object DataView]",C=r?r.prototype:void 0,k=C?C.valueOf:void 0;n.exports=function(n,e,t,r,C,w,B){switch(t){case y:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case m:return!(n.byteLength!=e.byteLength||!w(new o(n),new o(e)));case f:case l:case b:return a(+n,+e);case g:return n.name==e.name&&n.message==e.message;case x:case v:return n==e+"";case d:var j=u;case A:var P=r&s;if(j||(j=c),n.size!=e.size&&!P)return!1;var O=B.get(n);if(O)return O==e;r|=p,B.set(n,e);var E=i(j(n),j(e),r,C,w,B);return B.delete(n),E;case h:if(k)return k.call(n)==k.call(e)}return!1}},function(n,e,t){var r=t(3).Uint8Array;n.exports=r},function(n,e){n.exports=function(n){var e=-1,t=Array(n.size);return n.forEach((function(n,r){t[++e]=[r,n]})),t}},function(n,e){n.exports=function(n){var e=-1,t=Array(n.size);return n.forEach((function(n){t[++e]=n})),t}},function(n,e,t){var r=t(128),o=1,a=Object.prototype.hasOwnProperty;n.exports=function(n,e,t,i,u,c){var s=t&o,p=r(n),f=p.length;if(f!=r(e).length&&!s)return!1;for(var l=f;l--;){var g=p[l];if(!(s?g in e:a.call(e,g)))return!1}var d=c.get(n);if(d&&c.get(e))return d==e;var b=!0;c.set(n,e),c.set(e,n);for(var x=s;++l<f;){var A=n[g=p[l]],v=e[g];if(i)var h=s?i(v,A,g,e,n,c):i(A,v,g,n,e,c);if(!(void 0===h?A===v||u(A,v,t,i,c):h)){b=!1;break}x||(x="constructor"==g)}if(b&&!x){var m=n.constructor,y=e.constructor;m!=y&&"constructor"in n&&"constructor"in e&&!("function"==typeof m&&m instanceof m&&"function"==typeof y&&y instanceof y)&&(b=!1)}return c.delete(n),c.delete(e),b}},function(n,e,t){var r=t(129),o=t(131),a=t(12);n.exports=function(n){return r(n,a,o)}},function(n,e,t){var r=t(130),o=t(2);n.exports=function(n,e,t){var a=e(n);return o(n)?a:r(a,t(n))}},function(n,e){n.exports=function(n,e){for(var t=-1,r=e.length,o=n.length;++t<r;)n[o+t]=e[t];return n}},function(n,e,t){var r=t(50),o=t(132),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,u=i?function(n){return null==n?[]:(n=Object(n),r(i(n),(function(e){return a.call(n,e)})))}:o;n.exports=u},function(n,e){n.exports=function(){return[]}},function(n,e,t){var r=t(134),o=t(51),a=t(2),i=t(52),u=t(33),c=t(54),s=Object.prototype.hasOwnProperty;n.exports=function(n,e){var t=a(n),p=!t&&o(n),f=!t&&!p&&i(n),l=!t&&!p&&!f&&c(n),g=t||p||f||l,d=g?r(n.length,String):[],b=d.length;for(var x in n)!e&&!s.call(n,x)||g&&("length"==x||f&&("offset"==x||"parent"==x)||l&&("buffer"==x||"byteLength"==x||"byteOffset"==x)||u(x,b))||d.push(x);return d}},function(n,e){n.exports=function(n,e){for(var t=-1,r=Array(n);++t<n;)r[t]=e(t);return r}},function(n,e,t){var r=t(6),o=t(7),a="[object Arguments]";n.exports=function(n){return o(n)&&r(n)==a}},function(n,e){n.exports=function(){return!1}},function(n,e,t){var r=t(6),o=t(34),a=t(7),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,n.exports=function(n){return a(n)&&o(n.length)&&!!i[r(n)]}},function(n,e){n.exports=function(n){return function(e){return n(e)}}},function(n,e,t){(function(n){var r=t(40),o=e&&!e.nodeType&&e,a=o&&"object"==typeof n&&n&&!n.nodeType&&n,i=a&&a.exports===o&&r.process,u=function(){try{var n=a&&a.require&&a.require("util").types;return n||i&&i.binding&&i.binding("util")}catch(n){}}();n.exports=u}).call(this,t(53)(n))},function(n,e,t){var r=t(141),o=t(142),a=Object.prototype.hasOwnProperty;n.exports=function(n){if(!r(n))return o(n);var e=[];for(var t in Object(n))a.call(n,t)&&"constructor"!=t&&e.push(t);return e}},function(n,e){var t=Object.prototype;n.exports=function(n){var e=n&&n.constructor;return n===("function"==typeof e&&e.prototype||t)}},function(n,e,t){var r=t(143)(Object.keys,Object);n.exports=r},function(n,e){n.exports=function(n,e){return function(t){return n(e(t))}}},function(n,e,t){var r=t(145),o=t(32),a=t(146),i=t(147),u=t(148),c=t(6),s=t(45),p=s(r),f=s(o),l=s(a),g=s(i),d=s(u),b=c;(r&&"[object DataView]"!=b(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=b(new o)||a&&"[object Promise]"!=b(a.resolve())||i&&"[object Set]"!=b(new i)||u&&"[object WeakMap]"!=b(new u))&&(b=function(n){var e=c(n),t="[object Object]"==e?n.constructor:void 0,r=t?s(t):"";if(r)switch(r){case p:return"[object DataView]";case f:return"[object Map]";case l:return"[object Promise]";case g:return"[object Set]";case d:return"[object WeakMap]"}return e}),n.exports=b},function(n,e,t){var r=t(9)(t(3),"DataView");n.exports=r},function(n,e,t){var r=t(9)(t(3),"Promise");n.exports=r},function(n,e,t){var r=t(9)(t(3),"Set");n.exports=r},function(n,e,t){var r=t(9)(t(3),"WeakMap");n.exports=r},function(n,e,t){var r=t(55),o=t(12);n.exports=function(n){for(var e=o(n),t=e.length;t--;){var a=e[t],i=n[a];e[t]=[a,i,r(i)]}return e}},function(n,e,t){var r=t(47),o=t(151),a=t(154),i=t(35),u=t(55),c=t(56),s=t(20),p=1,f=2;n.exports=function(n,e){return i(n)&&u(e)?c(s(n),e):function(t){var i=o(t,n);return void 0===i&&i===e?a(t,n):r(e,i,p|f)}}},function(n,e,t){var r=t(57);n.exports=function(n,e,t){var o=null==n?void 0:r(n,e);return void 0===o?t:o}},function(n,e,t){var r=t(153),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(n){var e=[];return 46===n.charCodeAt(0)&&e.push(""),n.replace(o,(function(n,t,r,o){e.push(r?o.replace(a,"$1"):t||n)})),e}));n.exports=i},function(n,e,t){var r=t(22),o=500;n.exports=function(n){var e=r(n,(function(n){return t.size===o&&t.clear(),n})),t=e.cache;return e}},function(n,e,t){var r=t(155),o=t(156);n.exports=function(n,e){return null!=n&&o(n,e,r)}},function(n,e){n.exports=function(n,e){return null!=n&&e in Object(n)}},function(n,e,t){var r=t(58),o=t(51),a=t(2),i=t(33),u=t(34),c=t(20);n.exports=function(n,e,t){for(var s=-1,p=(e=r(e,n)).length,f=!1;++s<p;){var l=c(e[s]);if(!(f=null!=n&&t(n,l)))break;n=n[l]}return f||++s!=p?f:!!(p=null==n?0:n.length)&&u(p)&&i(l,p)&&(a(n)||o(n))}},function(n,e){n.exports=function(n){return n}},function(n,e,t){var r=t(159),o=t(160),a=t(35),i=t(20);n.exports=function(n){return a(n)?r(i(n)):o(n)}},function(n,e){n.exports=function(n){return function(e){return null==e?void 0:e[n]}}},function(n,e,t){var r=t(57);n.exports=function(n){return function(e){return r(e,n)}}},function(n,e,t){var r=t(162),o=t(12);n.exports=function(n){return null==n?[]:r(n,o(n))}},function(n,e,t){var r=t(26);n.exports=function(n,e){return r(e,(function(e){return n[e]}))}},function(n,e,t){var r=t(21);n.exports=function(n,e){var t=[];return r(n,(function(n,r,o){e(n,r,o)&&t.push(n)})),t}},function(n,e,t){var r=t(165),o=t(12);n.exports=function(n,e){return n&&r(n,e,o)}},function(n,e,t){var r=t(166)();n.exports=r},function(n,e){n.exports=function(n){return function(e,t,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[n?u:++o];if(!1===t(a[c],c,a))break}return e}}},function(n,e,t){var r=t(11);n.exports=function(n,e){return function(t,o){if(null==t)return t;if(!r(t))return n(t,o);for(var a=t.length,i=e?a:-1,u=Object(t);(e?i--:++i<a)&&!1!==o(u[i],i,u););return t}}},function(n,e,t){var r=t(21),o=t(11);n.exports=function(n,e){var t=-1,a=o(n)?Array(n.length):[];return r(n,(function(n,r,o){a[++t]=e(n,r,o)})),a}},function(n,e){n.exports=function(n,e,t,r){var o=-1,a=null==n?0:n.length;for(r&&a&&(t=n[++o]);++o<a;)t=e(t,n[o],o,n);return t}},function(n,e){n.exports=function(n,e,t,r,o){return o(n,(function(n,o,a){t=r?(r=!1,n):e(t,n,o,a)})),t}},function(n,e,t){var r=t(10),o=t(11),a=t(12);n.exports=function(n){return function(e,t,i){var u=Object(e);if(!o(e)){var c=r(t,3);e=a(e),t=function(n){return c(u[n],n,u)}}var s=n(e,t,i);return s>-1?u[c?e[s]:s]:void 0}}},function(n,e,t){var r=t(21);n.exports=function(n,e){var t;return r(n,(function(n,r,o){return!(t=e(n,r,o))})),!!t}},function(n,e,t){var r=t(31),o=t(11),a=t(33),i=t(8);n.exports=function(n,e,t){if(!i(t))return!1;var u=typeof e;return!!("number"==u?o(t)&&a(e,t.length):"string"==u&&e in t)&&r(t[e],n)}},function(n,e,t){"use strict";var r=t(175);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(n,e,t){var r=t(177);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(180)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){e=n.exports=t(178)(!1);var r=t(179)(t(59));e.push([n.i,".flag {\n  width: 16px;\n  height: 11px;\n  background-image: url("+r+") !important;\n}\n.flag.margin {\n  margin-right: 8px;\n}\n.flag.ad {\n  background-position: -16px 0;\n}\n.flag.ae {\n  background-position: -32px 0;\n}\n.flag.af {\n  background-position: -48px 0;\n}\n.flag.ag {\n  background-position: -64px 0;\n}\n.flag.ai {\n  background-position: -80px 0;\n}\n.flag.al {\n  background-position: -96px 0;\n}\n.flag.am {\n  background-position: -112px 0;\n}\n.flag.ao {\n  background-position: -128px 0;\n}\n.flag.ar {\n  background-position: -144px 0;\n}\n.flag.as {\n  background-position: -160px 0;\n}\n.flag.at {\n  background-position: -176px 0;\n}\n.flag.au {\n  background-position: -192px 0;\n}\n.flag.aw {\n  background-position: -208px 0;\n}\n.flag.az {\n  background-position: -224px 0;\n}\n.flag.ba {\n  background-position: -240px 0;\n}\n.flag.bb {\n  background-position: 0 -11px;\n}\n.flag.bd {\n  background-position: -16px -11px;\n}\n.flag.be {\n  background-position: -32px -11px;\n}\n.flag.bf {\n  background-position: -48px -11px;\n}\n.flag.bg {\n  background-position: -64px -11px;\n}\n.flag.bh {\n  background-position: -80px -11px;\n}\n.flag.bi {\n  background-position: -96px -11px;\n}\n.flag.bj {\n  background-position: -112px -11px;\n}\n.flag.bm {\n  background-position: -128px -11px;\n}\n.flag.bn {\n  background-position: -144px -11px;\n}\n.flag.bo {\n  background-position: -160px -11px;\n}\n.flag.br {\n  background-position: -176px -11px;\n}\n.flag.bs {\n  background-position: -192px -11px;\n}\n.flag.bt {\n  background-position: -208px -11px;\n}\n.flag.bw {\n  background-position: -224px -11px;\n}\n.flag.by {\n  background-position: -240px -11px;\n}\n.flag.bz {\n  background-position: 0 -22px;\n}\n.flag.ca {\n  background-position: -16px -22px;\n}\n.flag.cd {\n  background-position: -32px -22px;\n}\n.flag.cf {\n  background-position: -48px -22px;\n}\n.flag.cg {\n  background-position: -64px -22px;\n}\n.flag.ch {\n  background-position: -80px -22px;\n}\n.flag.ci {\n  background-position: -96px -22px;\n}\n.flag.ck {\n  background-position: -112px -22px;\n}\n.flag.cl {\n  background-position: -128px -22px;\n}\n.flag.cm {\n  background-position: -144px -22px;\n}\n.flag.cn {\n  background-position: -160px -22px;\n}\n.flag.co {\n  background-position: -176px -22px;\n}\n.flag.cr {\n  background-position: -192px -22px;\n}\n.flag.cu {\n  background-position: -208px -22px;\n}\n.flag.cv {\n  background-position: -224px -22px;\n}\n.flag.cw {\n  background-position: -240px -22px;\n}\n.flag.cy {\n  background-position: 0 -33px;\n}\n.flag.cz {\n  background-position: -16px -33px;\n}\n.flag.de {\n  background-position: -32px -33px;\n}\n.flag.dj {\n  background-position: -48px -33px;\n}\n.flag.dk {\n  background-position: -64px -33px;\n}\n.flag.dm {\n  background-position: -80px -33px;\n}\n.flag.do {\n  background-position: -96px -33px;\n}\n.flag.dz {\n  background-position: -112px -33px;\n}\n.flag.ec {\n  background-position: -128px -33px;\n}\n.flag.ee {\n  background-position: -144px -33px;\n}\n.flag.eg {\n  background-position: -160px -33px;\n}\n.flag.er {\n  background-position: -176px -33px;\n}\n.flag.es {\n  background-position: -192px -33px;\n}\n.flag.et {\n  background-position: -208px -33px;\n}\n.flag.fi {\n  background-position: -224px -33px;\n}\n.flag.fj {\n  background-position: -240px -33px;\n}\n.flag.fk {\n  background-position: 0 -44px;\n}\n.flag.fm {\n  background-position: -16px -44px;\n}\n.flag.fo {\n  background-position: -32px -44px;\n}\n.flag.fr,\n.flag.bl,\n.flag.mf {\n  background-position: -48px -44px;\n}\n.flag.ga {\n  background-position: -64px -44px;\n}\n.flag.gb {\n  background-position: -80px -44px;\n}\n.flag.gd {\n  background-position: -96px -44px;\n}\n.flag.ge {\n  background-position: -112px -44px;\n}\n.flag.gf {\n  background-position: -128px -44px;\n}\n.flag.gh {\n  background-position: -144px -44px;\n}\n.flag.gi {\n  background-position: -160px -44px;\n}\n.flag.gl {\n  background-position: -176px -44px;\n}\n.flag.gm {\n  background-position: -192px -44px;\n}\n.flag.gn {\n  background-position: -208px -44px;\n}\n.flag.gp {\n  background-position: -224px -44px;\n}\n.flag.gq {\n  background-position: -240px -44px;\n}\n.flag.gr {\n  background-position: 0 -55px;\n}\n.flag.gt {\n  background-position: -16px -55px;\n}\n.flag.gu {\n  background-position: -32px -55px;\n}\n.flag.gw {\n  background-position: -48px -55px;\n}\n.flag.gy {\n  background-position: -64px -55px;\n}\n.flag.hk {\n  background-position: -80px -55px;\n}\n.flag.hn {\n  background-position: -96px -55px;\n}\n.flag.hr {\n  background-position: -112px -55px;\n}\n.flag.ht {\n  background-position: -128px -55px;\n}\n.flag.hu {\n  background-position: -144px -55px;\n}\n.flag.id {\n  background-position: -160px -55px;\n}\n.flag.ie {\n  background-position: -176px -55px;\n}\n.flag.il {\n  background-position: -192px -55px;\n}\n.flag.in {\n  background-position: -208px -55px;\n}\n.flag.io {\n  background-position: -224px -55px;\n}\n.flag.iq {\n  background-position: -240px -55px;\n}\n.flag.ir {\n  background-position: 0 -66px;\n}\n.flag.is {\n  background-position: -16px -66px;\n}\n.flag.it {\n  background-position: -32px -66px;\n}\n.flag.jm {\n  background-position: -48px -66px;\n}\n.flag.jo {\n  background-position: -64px -66px;\n}\n.flag.jp {\n  background-position: -80px -66px;\n}\n.flag.ke {\n  background-position: -96px -66px;\n}\n.flag.kg {\n  background-position: -112px -66px;\n}\n.flag.kh {\n  background-position: -128px -66px;\n}\n.flag.ki {\n  background-position: -144px -66px;\n}\n.flag.km {\n  background-position: -160px -66px;\n}\n.flag.kn {\n  background-position: -176px -66px;\n}\n.flag.kp {\n  background-position: -192px -66px;\n}\n.flag.kr {\n  background-position: -208px -66px;\n}\n.flag.kw {\n  background-position: -224px -66px;\n}\n.flag.ky {\n  background-position: -240px -66px;\n}\n.flag.kz {\n  background-position: 0 -77px;\n}\n.flag.la {\n  background-position: -16px -77px;\n}\n.flag.lb {\n  background-position: -32px -77px;\n}\n.flag.lc {\n  background-position: -48px -77px;\n}\n.flag.li {\n  background-position: -64px -77px;\n}\n.flag.lk {\n  background-position: -80px -77px;\n}\n.flag.lr {\n  background-position: -96px -77px;\n}\n.flag.ls {\n  background-position: -112px -77px;\n}\n.flag.lt {\n  background-position: -128px -77px;\n}\n.flag.lu {\n  background-position: -144px -77px;\n}\n.flag.lv {\n  background-position: -160px -77px;\n}\n.flag.ly {\n  background-position: -176px -77px;\n}\n.flag.ma {\n  background-position: -192px -77px;\n}\n.flag.mc {\n  background-position: -208px -77px;\n}\n.flag.md {\n  background-position: -224px -77px;\n}\n.flag.me {\n  background-position: -112px -154px;\n  height: 12px;\n}\n.flag.mg {\n  background-position: 0 -88px;\n}\n.flag.mh {\n  background-position: -16px -88px;\n}\n.flag.mk {\n  background-position: -32px -88px;\n}\n.flag.ml {\n  background-position: -48px -88px;\n}\n.flag.mm {\n  background-position: -64px -88px;\n}\n.flag.mn {\n  background-position: -80px -88px;\n}\n.flag.mo {\n  background-position: -96px -88px;\n}\n.flag.mp {\n  background-position: -112px -88px;\n}\n.flag.mq {\n  background-position: -128px -88px;\n}\n.flag.mr {\n  background-position: -144px -88px;\n}\n.flag.ms {\n  background-position: -160px -88px;\n}\n.flag.mt {\n  background-position: -176px -88px;\n}\n.flag.mu {\n  background-position: -192px -88px;\n}\n.flag.mv {\n  background-position: -208px -88px;\n}\n.flag.mw {\n  background-position: -224px -88px;\n}\n.flag.mx {\n  background-position: -240px -88px;\n}\n.flag.my {\n  background-position: 0 -99px;\n}\n.flag.mz {\n  background-position: -16px -99px;\n}\n.flag.na {\n  background-position: -32px -99px;\n}\n.flag.nc {\n  background-position: -48px -99px;\n}\n.flag.ne {\n  background-position: -64px -99px;\n}\n.flag.nf {\n  background-position: -80px -99px;\n}\n.flag.ng {\n  background-position: -96px -99px;\n}\n.flag.ni {\n  background-position: -112px -99px;\n}\n.flag.nl,\n.flag.bq {\n  background-position: -128px -99px;\n}\n.flag.no {\n  background-position: -144px -99px;\n}\n.flag.np {\n  background-position: -160px -99px;\n}\n.flag.nr {\n  background-position: -176px -99px;\n}\n.flag.nu {\n  background-position: -192px -99px;\n}\n.flag.nz {\n  background-position: -208px -99px;\n}\n.flag.om {\n  background-position: -224px -99px;\n}\n.flag.pa {\n  background-position: -240px -99px;\n}\n.flag.pe {\n  background-position: 0 -110px;\n}\n.flag.pf {\n  background-position: -16px -110px;\n}\n.flag.pg {\n  background-position: -32px -110px;\n}\n.flag.ph {\n  background-position: -48px -110px;\n}\n.flag.pk {\n  background-position: -64px -110px;\n}\n.flag.pl {\n  background-position: -80px -110px;\n}\n.flag.pm {\n  background-position: -96px -110px;\n}\n.flag.pr {\n  background-position: -112px -110px;\n}\n.flag.ps {\n  background-position: -128px -110px;\n}\n.flag.pt {\n  background-position: -144px -110px;\n}\n.flag.pw {\n  background-position: -160px -110px;\n}\n.flag.py {\n  background-position: -176px -110px;\n}\n.flag.qa {\n  background-position: -192px -110px;\n}\n.flag.re {\n  background-position: -208px -110px;\n}\n.flag.ro {\n  background-position: -224px -110px;\n}\n.flag.rs {\n  background-position: -240px -110px;\n}\n.flag.ru {\n  background-position: 0 -121px;\n}\n.flag.rw {\n  background-position: -16px -121px;\n}\n.flag.sa {\n  background-position: -32px -121px;\n}\n.flag.sb {\n  background-position: -48px -121px;\n}\n.flag.sc {\n  background-position: -64px -121px;\n}\n.flag.sd {\n  background-position: -80px -121px;\n}\n.flag.se {\n  background-position: -96px -121px;\n}\n.flag.sg {\n  background-position: -112px -121px;\n}\n.flag.sh {\n  background-position: -128px -121px;\n}\n.flag.si {\n  background-position: -144px -121px;\n}\n.flag.sk {\n  background-position: -160px -121px;\n}\n.flag.sl {\n  background-position: -176px -121px;\n}\n.flag.sm {\n  background-position: -192px -121px;\n}\n.flag.sn {\n  background-position: -208px -121px;\n}\n.flag.so {\n  background-position: -224px -121px;\n}\n.flag.sr {\n  background-position: -240px -121px;\n}\n.flag.ss {\n  background-position: 0 -132px;\n}\n.flag.st {\n  background-position: -16px -132px;\n}\n.flag.sv {\n  background-position: -32px -132px;\n}\n.flag.sx {\n  background-position: -48px -132px;\n}\n.flag.sy {\n  background-position: -64px -132px;\n}\n.flag.sz {\n  background-position: -80px -132px;\n}\n.flag.tc {\n  background-position: -96px -132px;\n}\n.flag.td {\n  background-position: -112px -132px;\n}\n.flag.tg {\n  background-position: -128px -132px;\n}\n.flag.th {\n  background-position: -144px -132px;\n}\n.flag.tj {\n  background-position: -160px -132px;\n}\n.flag.tk {\n  background-position: -176px -132px;\n}\n.flag.tl {\n  background-position: -192px -132px;\n}\n.flag.tm {\n  background-position: -208px -132px;\n}\n.flag.tn {\n  background-position: -224px -132px;\n}\n.flag.to {\n  background-position: -240px -132px;\n}\n.flag.tr {\n  background-position: 0 -143px;\n}\n.flag.tt {\n  background-position: -16px -143px;\n}\n.flag.tv {\n  background-position: -32px -143px;\n}\n.flag.tw {\n  background-position: -48px -143px;\n}\n.flag.tz {\n  background-position: -64px -143px;\n}\n.flag.ua {\n  background-position: -80px -143px;\n}\n.flag.ug {\n  background-position: -96px -143px;\n}\n.flag.us {\n  background-position: -112px -143px;\n}\n.flag.uy {\n  background-position: -128px -143px;\n}\n.flag.uz {\n  background-position: -144px -143px;\n}\n.flag.va {\n  background-position: -160px -143px;\n}\n.flag.vc {\n  background-position: -176px -143px;\n}\n.flag.ve {\n  background-position: -192px -143px;\n}\n.flag.vg {\n  background-position: -208px -143px;\n}\n.flag.vi {\n  background-position: -224px -143px;\n}\n.flag.vn {\n  background-position: -240px -143px;\n}\n.flag.vu {\n  background-position: 0 -154px;\n}\n.flag.wf {\n  background-position: -16px -154px;\n}\n.flag.ws {\n  background-position: -32px -154px;\n}\n.flag.ye {\n  background-position: -48px -154px;\n}\n.flag.za {\n  background-position: -64px -154px;\n}\n.flag.zm {\n  background-position: -80px -154px;\n}\n.flag.zw {\n  background-position: -96px -154px;\n}\n",""])},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(i=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),a=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")}));return[t].concat(a).concat([o]).join("\n")}var i,u,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2],"{").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<n.length;i++){var u=n[i];null!=u[0]&&r[u[0]]||(t&&!u[2]?u[2]=t:t&&(u[2]="(".concat(u[2],") and (").concat(t,")")),e.push(u))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof(n=n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(n,e){return e?e.querySelector(n):document.querySelector(n)},c=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=u.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),s=null,p=0,f=[],l=t(181);function g(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(h(r.parts[i],e))}else{var u=[];for(i=0;i<r.parts.length;i++)u.push(h(r.parts[i],e));a[r.id]={id:r.id,refs:1,parts:u}}}}function d(n,e){for(var t=[],r={},o=0;o<n.length;o++){var a=n[o],i=e.base?a[0]+e.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(u):t.push(r[i]={id:i,parts:[u]})}return t}function b(n,e){var t=c(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),f.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(n.insertAt.before,t);t.insertBefore(e,o)}}function x(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=f.indexOf(n);e>=0&&f.splice(e,1)}function A(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return v(e,n.attrs),b(n,e),e}function v(n,e){Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])}))}function h(n,e){var t,r,o,a;if(e.transform&&n.css){if(!(a="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=a}if(e.singleton){var i=p++;t=s||(s=A(e)),r=C.bind(null,t,i,!1),o=C.bind(null,t,i,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(e,n.attrs),b(n,e),e}(e),r=w.bind(null,t,e),o=function(){x(t),t.href&&URL.revokeObjectURL(t.href)}):(t=A(e),r=k.bind(null,t),o=function(){x(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=d(n,e);return g(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var i=t[o];(u=a[i.id]).refs--,r.push(u)}n&&g(d(n,e),e);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}};var m,y=(m=[],function(n,e){return m[n]=e,m.filter(Boolean).join("\n")});function C(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function k(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function w(n,e,t){var r=t.css,o=t.sourceMap,a=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||a)&&(r=l(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),u=n.href;n.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,e){var o,a=e.trim().replace(/^"(.*)"$/,(function(n,e){return e})).replace(/^'(.*)'$/,(function(n,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(n,e,t){"use strict";t.r(e);var r=t(36),o=t.n(r),a=t(4),i=t.n(a),u=t(60),c=t.n(u),s=t(22),p=t.n(s),f=t(61),l=t.n(f),g=t(62),d=t.n(g),b=t(63),x=t.n(b),A=t(23),v=t.n(A),h=t(64),m=t.n(h),y=t(24),C=t.n(y),k=t(13),w=t.n(k),B=t(37),j=t.n(B),P=t(5),O=t.n(P),E=t(38),I=t.n(E),D=t(1),Q=t.n(D),S=t(0),T=t.n(S),M=t(65),R=t.n(M),F=t(66),U=t.n(F),L=t(67),N=t.n(L),z=t(68),K=t.n(z),G=t(69),H=t.n(G),q=t(70),Y=t.n(q),V=t(71),J=t.n(V),X=t(72),Z=t.n(X),W=t(39),_=t.n(W),$=t(73),nn=t.n($),en=t(74),tn=t.n(en);function rn(n){return(rn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function on(){return(on=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function an(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function un(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function cn(n,e){return!e||"object"!==rn(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function sn(n){return(sn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function pn(n,e){return(pn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var fn=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),cn(this,sn(e).apply(this,arguments))}var t,r,o;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&pn(n,e)}(e,n),t=e,(r=[{key:"render",value:function(){var n=this.props,e=n.name,t=n.iso2,r=n.dialCode,o=n.localization,a=n.itemRef,i=n.native,u=an(n,["name","iso2","dialCode","localization","itemRef","native"]);return i?Q.a.createElement("option",on({className:"country","data-dial-code":"1","data-country-code":t,value:t},u),o||e," ","+".concat(r)):Q.a.createElement(tn.a,{rootRef:function(n){return a(n)}},Q.a.createElement(nn.a,on({className:"country","data-dial-code":"1","data-country-code":t},u),Q.a.createElement("div",{className:"flag ".concat(t," margin")}),Q.a.createElement("span",{className:"country-name"},o||e),Q.a.createElement("span",{className:"dial-code"},"+".concat(r))))}}])&&un(t.prototype,r),o&&un(t,o),e}(Q.a.PureComponent);fn.propTypes={name:T.a.string.isRequired,iso2:T.a.string.isRequired,dialCode:T.a.string.isRequired,itemRef:T.a.func.isRequired,localization:T.a.string,native:T.a.bool},fn.defaultProps={localization:null,native:!1};var ln=fn;t(176),t(59);function gn(n){return(gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function dn(){return(dn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function bn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function xn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?bn(t,!0).forEach((function(e){Cn(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bn(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function An(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function vn(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function hn(n){return(hn=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function mn(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function yn(n,e){return(yn=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function Cn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var kn=function(n){function e(n){var t;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=function(n,e){return!e||"object"!==gn(e)&&"function"!=typeof e?mn(n):e}(this,hn(e).call(this,n)),Cn(mn(t),"flags",{}),Cn(mn(t),"guessSelectedCountry",p()((function(n,e,r){var o=O()(e,{iso2:r})||{};if(""===c()(n))return o;var a=j()(e,(function(e,t){if(i()(n,t.dialCode)){if(t.dialCode.length>e.dialCode.length)return t;if(t.dialCode.length===e.dialCode.length&&t.priority<e.priority)return t}return e}),{dialCode:"",priority:10001},mn(t));return a.name?a:o}))),Cn(mn(t),"getProbableCandidate",p()((function(n){if(!n||0===n.length)return null;var e=t.state.onlyCountries;return C()(e,(function(e){return i()(e.name.toLowerCase(),n.toLowerCase())}),mn(t))[0]}))),Cn(mn(t),"getOnlyCountries",(function(n,e){return 0===n.length?e:e.filter((function(e){return n.some((function(n){return n===e.iso2}))}))})),Cn(mn(t),"excludeCountries",(function(n,e){return 0===e.length?n:C()(n,(function(n){return!m()(e,n.iso2)}))})),Cn(mn(t),"filterRegions",(function(n,e){if("string"==typeof n){var t=n;return e.filter((function(n){return n.regions.some((function(n){return n===t}))}))}return e.filter((function(e){return n.map((function(n){return e.regions.some((function(e){return e===n}))})).some((function(n){return n}))}))})),Cn(mn(t),"deleteAreaCodes",(function(n){return n.filter((function(n){return!0!==n.isAreaCode}))})),Cn(mn(t),"updateDefaultCountry",(function(n){var e=t.state.onlyCountries,r=t.props.disableCountryCode,o=O()(e,{iso2:n});t.setState({defaultCountry:n,selectedCountry:o,formattedNumber:r?"":"+".concat(o.dialCode)})})),Cn(mn(t),"scrollTo",(function(n){if(n){var e=t.dropdownContainerRef;e&&document.body&&(e.scrollTop=n.offsetTop)}})),Cn(mn(t),"formatNumber",(function(n,e){var r,o=t.props,a=o.disableCountryCode,i=o.enableLongNumbers,u=o.autoFormat;if(a&&e?((r=e.split(" ")).shift(),r=r.join(" ")):r=e,!n||0===n.length)return a?"":"+";if(n&&n.length<2||!r||!u)return a?n:"+".concat(n);var c,s=j()(r,(function(n,e){return 0===n.remainingText.length?n:"."!==e?{formattedText:n.formattedText+e,remainingText:n.remainingText}:{formattedText:n.formattedText+x()(n.remainingText),remainingText:d()(n.remainingText)}}),{formattedText:"",remainingText:n.split("")});return(c=i?s.formattedText+s.remainingText.join(""):s.formattedText).includes("(")&&!c.includes(")")&&(c+=")"),c})),Cn(mn(t),"cursorToEnd",(function(){var n=t.props.isModernBrowser,e=t.inputRef;if(e.focus(),n){var r=e.value.length;e.setSelectionRange(r,r)}})),Cn(mn(t),"getElement",(function(n){return t.flags["flag_no_".concat(n)]})),Cn(mn(t),"getCountryData",(function(){var n=t.state.selectedCountry;return n?{name:n.name||"",dialCode:n.dialCode||"",countryCode:n.iso2||""}:{}})),Cn(mn(t),"handleInput",(function(n){var e=t.state,r=e.selectedCountry,o=e.freezeSelection,a=t.state,i=a.selectedCountry,u=a.formattedNumber,c=a.onlyCountries,s=a.defaultCountry,p=t.props,f=p.disableCountryCode,l=p.countryCodeEditable,g=p.isModernBrowser,d=p.onChange,b=f?"":"+";if(!l){var x="+".concat(r.dialCode);if(n.target.value.length<x.length)return}if(!(n.target.value.replace(/\D/g,"").length>15)&&n.target.value!==u){if(n.preventDefault?n.preventDefault():n.returnValue=!1,n.target.value.length>0){var A=n.target.value.replace(/\D/g,"");(!o||i.dialCode.length>A.length)&&(r=t.guessSelectedCountry(A.substring(0,6),c,s),o=!1),b=t.formatNumber(A,r.format)}var v=n.target.selectionStart,h=b.length-u.length;t.setState({formattedNumber:b,freezeSelection:o,selectedCountry:r.dialCode?r:i},(function(){g&&(h>0&&(v-=h),")"===b.charAt(b.length-1)?t.inputRef.setSelectionRange(b.length-1,b.length-1):v>0&&u.length>=b.length&&t.inputRef.setSelectionRange(v,v));d&&d(b,t.getCountryData())}))}})),Cn(mn(t),"handleRefInput",(function(n){var e,r=t.props,o=r.inputRef,a=r.InputProps;t.inputRef=n,o?e=o:a&&a.ref&&(e=a.ref),e&&("function"==typeof e?e(n):e.current=n)})),Cn(mn(t),"handleInputClick",(function(n){var e=t.props.onClick;e&&e(n,t.getCountryData())})),Cn(mn(t),"handleFlagItemClick",(function(n){var e=t.state,r=e.formattedNumber,a=e.selectedCountry,i=e.onlyCountries,u=t.props.onChange,c=a,s=o()(n)?O()(i,(function(e){return e.iso2===n})):O()(i,n),p=r.replace(" ","").replace("(","").replace(")","").replace("-",""),f=p.length>1?p.replace(c.dialCode,s.dialCode):s.dialCode,l=t.formatNumber(f.replace(/\D/g,""),s.format);t.setState({anchorEl:null,selectedCountry:s,freezeSelection:!0,formattedNumber:l},(function(){t.cursorToEnd(),u&&u(l,t.getCountryData())}))})),Cn(mn(t),"handleInputFocus",(function(n){var e=t.state.selectedCountry,r=t.props,o=r.disableCountryCode,a=r.onFocus;t.inputRef&&"+"===t.inputRef.value&&e&&!o&&t.setState({formattedNumber:"+".concat(e.dialCode)},(function(){return setTimeout(t.cursorToEnd,10)})),t.setState({placeholder:""}),a&&a(n,t.getCountryData()),setTimeout(t.cursorToEnd,10)})),Cn(mn(t),"handleInputBlur",(function(n){var e=t.props,r=e.placeholder,o=e.onBlur;n.target.value||t.setState({placeholder:r}),o&&o(n,t.getCountryData())})),Cn(mn(t),"getHighlightCountryIndex",(function(n){var e=t.state,r=e.highlightCountryIndex,o=e.onlyCountries,a=e.preferredCountries,i=r+n;return i<0||i>=o.length+a.length?i-n:i})),Cn(mn(t),"searchCountry",(function(){var n=t.state,e=n.queryString,r=n.onlyCountries,o=n.preferredCountries,a=t.getProbableCandidate(e)||r[0],i=v()(r,a)+o.length;t.scrollTo(t.getElement(i),!0),t.setState({queryString:"",highlightCountryIndex:i})})),Cn(mn(t),"handleKeydown",(function(n){var e=t.state,r=e.anchorEl,o=e.highlightCountryIndex,a=e.preferredCountries,i=e.onlyCountries,u=e.queryString,c=e.debouncedQueryStingSearcher,s=t.props,p=s.keys,f=s.disabled;if(r&&!f){n.preventDefault?n.preventDefault():n.returnValue=!1;var l=function(n){t.setState({highlightCountryIndex:t.getHighlightCountryIndex(n)},(function(){t.scrollTo(t.getElement(o+a.length),!0)}))};switch(n.which){case p.DOWN:l(1);break;case p.UP:l(-1);break;case p.ENTER:t.handleFlagItemClick(i[o],n);break;case p.ESC:t.setState({anchorEl:null},t.cursorToEnd);break;default:(n.which>=p.A&&n.which<=p.Z||n.which===p.SPACE)&&t.setState({queryString:u+String.fromCharCode(n.which)},c)}}})),Cn(mn(t),"handleInputKeyDown",(function(n){var e=t.props,r=e.keys,o=e.onEnterKeyPress,a=e.onKeyDown;n.which===r.ENTER&&o&&o(n),a&&a(n)})),Cn(mn(t),"checkIfValid",(function(){var n=t.state.formattedNumber;return(0,t.props.isValid)(n.replace(/\D/g,""))})),Cn(mn(t),"updateFormattedNumber",(function(n){var e,r=t.state,o=r.onlyCountries,a=r.defaultCountry,u=t.props.disableCountryCode,c=n,s=n;if(c.startsWith("+"))c=c.replace(/\D/g,""),e=t.guessSelectedCountry(c.substring(0,6),o,a),s=t.formatNumber(c,e.format);else{var p=(e=O()(o,{iso2:a}))&&!i()(c.replace(/\D/g,""),e.dialCode)?e.dialCode:"";s=t.formatNumber((u?"":p)+c.replace(/\D/g,""),e?e.format:void 0)}t.setState({selectedCountry:e,formattedNumber:s})})),Cn(mn(t),"getDropdownProps",(function(){var n=t.state,e=n.selectedCountry,r=n.anchorEl,o=n.preferredCountries,a=n.onlyCountries,i=t.props,u=i.classes,c=i.dropdownClass,s=i.localization,p=i.disableDropdown,f=i.native,l="flag ".concat(e.iso2),g=function(n){return Boolean(e&&e.dialCode===n.dialCode)};return p?{}:{startAdornment:Q.a.createElement(N.a,{className:u.positionStart,position:"start"},f?Q.a.createElement(Q.a.Fragment,null,Q.a.createElement(J.a,{id:"country-menu",open:Boolean(r),onClose:function(){return t.setState({anchorEl:null})},className:u.native,classes:{root:R()(u.nativeRoot,"native",l),select:u.nativeSelect},onChange:function(n){return t.handleFlagItemClick(n.target.value)},disableUnderline:!0},!!o.length&&w()(o,(function(n,e){return Q.a.createElement(ln,{key:"preferred_".concat(n.iso2,"_").concat(e),itemRef:function(n){t.flags["flag_no_".concat(e)]=n},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name],native:!0})})),w()(a,(function(n,e){return Q.a.createElement(ln,{key:"preferred_".concat(n.iso2,"_").concat(e),itemRef:function(n){t.flags["flag_no_".concat(e)]=n},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name],native:!0})})))):Q.a.createElement(Q.a.Fragment,null,Q.a.createElement(K.a,{className:u.flagButton,"aria-owns":r?"country-menu":null,"aria-label":"Select country",onClick:function(n){return t.setState({anchorEl:n.currentTarget})},"aria-haspopup":!0},Q.a.createElement("div",{className:l})),Q.a.createElement(H.a,{className:c,id:"country-menu",anchorEl:r,open:Boolean(r),onClose:function(){return t.setState({anchorEl:null})}},!!o.length&&w()(o,(function(n,e){return Q.a.createElement(ln,{key:"preferred_".concat(n.iso2,"_").concat(e),itemRef:function(n){t.flags["flag_no_".concat(e)]=n},selected:g(n),onClick:function(){return t.handleFlagItemClick(n)},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name]})})),!!o.length&&Q.a.createElement(Y.a,null),w()(a,(function(n,e){return Q.a.createElement(ln,{key:"preferred_".concat(n.iso2,"_").concat(e),itemRef:function(n){t.flags["flag_no_".concat(e)]=n},selected:g(n),onClick:function(){return t.handleFlagItemClick(n)},name:n.name,iso2:n.iso2,dialCode:n.dialCode,localization:s&&s[n.name]})})))))}}));var r=_.a.allCountries;n.disableAreaCodes&&(r=t.deleteAreaCodes(r)),n.regions&&(r=t.filterRegions(n.regions,r));var a,u=t.excludeCountries(t.getOnlyCountries(n.onlyCountries,r),n.excludeCountries),s=C()(r,(function(e){return I()(n.preferredCountries,(function(n){return n===e.iso2}))})),f=n.value||"";a=f.length>1?t.guessSelectedCountry(f.replace(/\D/g,"").substring(0,6),u,n.defaultCountry)||0:n.defaultCountry&&O()(u,{iso2:n.defaultCountry})||0;var g=v()(t.allCountries,a),b=f.length<2&&a&&!i()(f.replace(/\D/g,""),a.dialCode)?a.dialCode:"",A=""===f&&0===a?"":t.formatNumber((n.disableCountryCode?"":b)+f.replace(/\D/g,""),a.name?a.format:void 0);return t.state={formattedNumber:A,placeholder:n.placeholder,onlyCountries:u,preferredCountries:s,defaultCountry:n.defaultCountry,selectedCountry:a,highlightCountryIndex:g,queryString:"",freezeSelection:!1,debouncedQueryStingSearcher:l()(t.searchCountry,100),anchorEl:null},t}var t,r,a;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&yn(n,e)}(e,n),t=e,(r=[{key:"componentDidMount",value:function(){document.addEventListener&&document.addEventListener("keydown",this.handleKeydown)}},{key:"componentDidUpdate",value:function(n){var e=n.value,t=this.state,r=t.defaultCountry,o=t.formattedNumber,a=this.props,i=a.defaultCountry,u=a.value;i&&i!==r&&this.updateDefaultCountry(i),"string"==typeof u&&u!==e&&u!==o&&this.updateFormattedNumber(u)}},{key:"componentWillUnmount",value:function(){document.removeEventListener&&document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var n=this.state,e=n.formattedNumber,t=n.placeholder,r=this.props,o=(r.native,r.defaultCountry,r.excludeCountries,r.onlyCountries,r.preferredCountries,r.dropdownClass,r.autoFormat,r.disableAreaCodes,r.isValid,r.disableCountryCode,r.disableDropdown,r.enableLongNumbers,r.countryCodeEditable,r.onEnterKeyPress,r.isModernBrowser,r.classes,r.keys,r.localization,r.placeholder,r.regions,r.onChange,r.value,r.inputClass),a=r.error,i=r.InputProps,u=An(r,["native","defaultCountry","excludeCountries","onlyCountries","preferredCountries","dropdownClass","autoFormat","disableAreaCodes","isValid","disableCountryCode","disableDropdown","enableLongNumbers","countryCodeEditable","onEnterKeyPress","isModernBrowser","classes","keys","localization","placeholder","regions","onChange","value","inputClass","error","InputProps"]),c=this.getDropdownProps();return Q.a.createElement(U.a,dn({placeholder:t,value:e,className:o,inputRef:this.handleRefInput,error:a||!this.checkIfValid(),onChange:this.handleInput,onClick:this.handleInputClick,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onKeyDown:this.handleInputKeyDown,type:"tel",InputProps:xn({},c,{},i)},u))}}])&&vn(t.prototype,r),a&&vn(t,a),e}(Q.a.Component);kn.propTypes={classes:T.a.object,excludeCountries:T.a.arrayOf(T.a.string),onlyCountries:T.a.arrayOf(T.a.string),preferredCountries:T.a.arrayOf(T.a.string),defaultCountry:T.a.string,value:T.a.string,placeholder:T.a.string,disabled:T.a.bool,error:T.a.bool,variant:T.a.string,native:T.a.bool,inputClass:T.a.string,dropdownClass:T.a.string,InputProps:T.a.object,inputProps:T.a.object,inputRef:T.a.func,autoFormat:T.a.bool,disableAreaCodes:T.a.bool,disableCountryCode:T.a.bool,disableDropdown:T.a.bool,enableLongNumbers:T.a.bool,countryCodeEditable:T.a.bool,regions:T.a.oneOfType([T.a.string,T.a.arrayOf(T.a.string)]),localization:T.a.object,onChange:T.a.func,onFocus:T.a.func,onBlur:T.a.func,onClick:T.a.func,onKeyDown:T.a.func,isValid:T.a.func,isModernBrowser:T.a.func,onEnterKeyPress:T.a.func,keys:T.a.object},kn.defaultProps={excludeCountries:[],onlyCountries:[],preferredCountries:[],defaultCountry:"",placeholder:"+1 (702) 123-4567",disabled:!1,error:!1,variant:"standard",native:!1,inputClass:"",dropdownClass:"",autoFormat:!0,disableAreaCodes:!1,isValid:function(n){return I()(_.a.allCountries,(function(e){return i()(n,e.dialCode)||i()(e.dialCode,n)}))},disableCountryCode:!1,disableDropdown:!1,enableLongNumbers:!1,countryCodeEditable:!0,regions:"",localization:{},onEnterKeyPress:function(){},onChange:function(){},isModernBrowser:function(){return!!document.createElement&&Boolean(document.createElement("input").setSelectionRange)},keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32}},kn.displayName="MuiPhoneNumber";var wn=Z()((function(){return{flagButton:{minWidth:30,padding:0,height:30},native:{width:30,height:30,padding:8},nativeRoot:{padding:0,"& + svg":{display:"none"}},nativeSelect:{padding:0,lineHeight:0,height:11},positionStart:{position:"relative"}}}))(kn);e.default=wn}]);

/***/ }),

/***/ "./node_modules/material-ui-phone-number/node_modules/react/cjs/react.development.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/material-ui-phone-number/node_modules/react/cjs/react.development.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/material-ui-phone-number/node_modules/react/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/material-ui-phone-number/node_modules/react/index.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/material-ui-phone-number/node_modules/react/cjs/react.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYmx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JleS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9pbmRpZ28uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvb3JhbmdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3BpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlQnJlYWtwb2ludHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlTWl4aW5zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NyZWF0ZVBhbGV0dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY3JlYXRlU3BhY2luZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jcmVhdGVUeXBvZ3JhcGh5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2RlZmF1bHRUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9zaGFkb3dzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3NoYXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3RyYW5zaXRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL3dpdGhTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvekluZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BlcnNvbmFsSW5mby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9waG9uZVRleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLXVpLXBob25lLW51bWJlci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtdWktcGhvbmUtbnVtYmVyL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC11aS1waG9uZS1udW1iZXIvbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIlBlcnNvbmFsSW5mbyIsIlJlYWN0IiwicGhvbmVWYWx1ZSIsInNldFBob25lVmFsdWUiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJpbWFnZU5hbWUiLCJzZXRJbWFnZU5hbWUiLCJoYW5kbGVVcGxvYWRDbGljayIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwiZSIsInJlc3VsdCIsIm9uUGhvbmVDaGFuZ2UiLCJ2YWx1ZSIsInNocmluayIsImRpc3BsYXkiLCJjb2xvciIsImJsdWUiLCJtYXJnaW4iLCJDcmVhdGVVc2VyRGlhbG9nIiwicHJvcHMiLCJzdGF0ZSIsImRlZmF1bHRWYWx1ZXMiLCJwaG9uZSIsImhhbmRsZVBob25lQ2hhbmdlIiwiYmluZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBLG1DQUFtQyxtQkFBTyxDQUFDLDZHQUFnQzs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxl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WUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLGlDQUFpQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksaUNBQWlDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxpQ0FBaUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsa0NBQWtDLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksaUNBQWlDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxpQ0FBaUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLGlDQUFpQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHVDQUF1QyxpQkFBaUIsR0FBRyxZQUFZLGlDQUFpQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksaUNBQWlDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxxQ0FBcUMsR0FBRyxZQUFZLHFDQUFxQyxHQUFHLFlBQVkscUNBQXFDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyx1QkFBdUIsc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLGtDQUFrQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksa0NBQWtDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSxrQ0FBa0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLGtDQUFrQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksdUNBQXVDLEdBQUcsWUFBWSx1Q0FBdUMsR0FBRyxZQUFZLHVDQUF1QyxHQUFHLFlBQVksa0NBQWtDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsWUFBWSxzQ0FBc0MsR0FBRyxZQUFZLHNDQUFzQyxHQUFHLFlBQVksc0NBQXNDLEdBQUcsU0FBUyxpQkFBaUIsYUFBYSxzQkFBc0IsU0FBUyw2QkFBNkIs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MEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsMERBQTBEO0FBQzFELG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0IsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUN2M0RhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsNkpBQXNEO0FBQ3hEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ld0FjY291bnQuZDA5NzliYmNiNTRlOGI4M2UyNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgYmx1ZSA9IHtcbiAgNTA6ICcjZTNmMmZkJyxcbiAgMTAwOiAnI2JiZGVmYicsXG4gIDIwMDogJyM5MGNhZjknLFxuICAzMDA6ICcjNjRiNWY2JyxcbiAgNDAwOiAnIzQyYTVmNScsXG4gIDUwMDogJyMyMTk2ZjMnLFxuICA2MDA6ICcjMWU4OGU1JyxcbiAgNzAwOiAnIzE5NzZkMicsXG4gIDgwMDogJyMxNTY1YzAnLFxuICA5MDA6ICcjMGQ0N2ExJyxcbiAgQTEwMDogJyM4MmIxZmYnLFxuICBBMjAwOiAnIzQ0OGFmZicsXG4gIEE0MDA6ICcjMjk3OWZmJyxcbiAgQTcwMDogJyMyOTYyZmYnXG59O1xudmFyIF9kZWZhdWx0ID0gYmx1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGNvbW1vbiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjZmZmJ1xufTtcbnZhciBfZGVmYXVsdCA9IGNvbW1vbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGdyZWVuID0ge1xuICA1MDogJyNlOGY1ZTknLFxuICAxMDA6ICcjYzhlNmM5JyxcbiAgMjAwOiAnI2E1ZDZhNycsXG4gIDMwMDogJyM4MWM3ODQnLFxuICA0MDA6ICcjNjZiYjZhJyxcbiAgNTAwOiAnIzRjYWY1MCcsXG4gIDYwMDogJyM0M2EwNDcnLFxuICA3MDA6ICcjMzg4ZTNjJyxcbiAgODAwOiAnIzJlN2QzMicsXG4gIDkwMDogJyMxYjVlMjAnLFxuICBBMTAwOiAnI2I5ZjZjYScsXG4gIEEyMDA6ICcjNjlmMGFlJyxcbiAgQTQwMDogJyMwMGU2NzYnLFxuICBBNzAwOiAnIzAwYzg1Mydcbn07XG52YXIgX2RlZmF1bHQgPSBncmVlbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIGdyZXkgPSB7XG4gIDUwOiAnI2ZhZmFmYScsXG4gIDEwMDogJyNmNWY1ZjUnLFxuICAyMDA6ICcjZWVlZWVlJyxcbiAgMzAwOiAnI2UwZTBlMCcsXG4gIDQwMDogJyNiZGJkYmQnLFxuICA1MDA6ICcjOWU5ZTllJyxcbiAgNjAwOiAnIzc1NzU3NScsXG4gIDcwMDogJyM2MTYxNjEnLFxuICA4MDA6ICcjNDI0MjQyJyxcbiAgOTAwOiAnIzIxMjEyMScsXG4gIEExMDA6ICcjZDVkNWQ1JyxcbiAgQTIwMDogJyNhYWFhYWEnLFxuICBBNDAwOiAnIzMwMzAzMCcsXG4gIEE3MDA6ICcjNjE2MTYxJ1xufTtcbnZhciBfZGVmYXVsdCA9IGdyZXk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBpbmRpZ28gPSB7XG4gIDUwOiAnI2U4ZWFmNicsXG4gIDEwMDogJyNjNWNhZTknLFxuICAyMDA6ICcjOWZhOGRhJyxcbiAgMzAwOiAnIzc5ODZjYicsXG4gIDQwMDogJyM1YzZiYzAnLFxuICA1MDA6ICcjM2Y1MWI1JyxcbiAgNjAwOiAnIzM5NDlhYicsXG4gIDcwMDogJyMzMDNmOWYnLFxuICA4MDA6ICcjMjgzNTkzJyxcbiAgOTAwOiAnIzFhMjM3ZScsXG4gIEExMDA6ICcjOGM5ZWZmJyxcbiAgQTIwMDogJyM1MzZkZmUnLFxuICBBNDAwOiAnIzNkNWFmZScsXG4gIEE3MDA6ICcjMzA0ZmZlJ1xufTtcbnZhciBfZGVmYXVsdCA9IGluZGlnbztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIG9yYW5nZSA9IHtcbiAgNTA6ICcjZmZmM2UwJyxcbiAgMTAwOiAnI2ZmZTBiMicsXG4gIDIwMDogJyNmZmNjODAnLFxuICAzMDA6ICcjZmZiNzRkJyxcbiAgNDAwOiAnI2ZmYTcyNicsXG4gIDUwMDogJyNmZjk4MDAnLFxuICA2MDA6ICcjZmI4YzAwJyxcbiAgNzAwOiAnI2Y1N2MwMCcsXG4gIDgwMDogJyNlZjZjMDAnLFxuICA5MDA6ICcjZTY1MTAwJyxcbiAgQTEwMDogJyNmZmQxODAnLFxuICBBMjAwOiAnI2ZmYWI0MCcsXG4gIEE0MDA6ICcjZmY5MTAwJyxcbiAgQTcwMDogJyNmZjZkMDAnXG59O1xudmFyIF9kZWZhdWx0ID0gb3JhbmdlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgcGluayA9IHtcbiAgNTA6ICcjZmNlNGVjJyxcbiAgMTAwOiAnI2Y4YmJkMCcsXG4gIDIwMDogJyNmNDhmYjEnLFxuICAzMDA6ICcjZjA2MjkyJyxcbiAgNDAwOiAnI2VjNDA3YScsXG4gIDUwMDogJyNlOTFlNjMnLFxuICA2MDA6ICcjZDgxYjYwJyxcbiAgNzAwOiAnI2MyMTg1YicsXG4gIDgwMDogJyNhZDE0NTcnLFxuICA5MDA6ICcjODgwZTRmJyxcbiAgQTEwMDogJyNmZjgwYWInLFxuICBBMjAwOiAnI2ZmNDA4MScsXG4gIEE0MDA6ICcjZjUwMDU3JyxcbiAgQTcwMDogJyNjNTExNjInXG59O1xudmFyIF9kZWZhdWx0ID0gcGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIHJlZCA9IHtcbiAgNTA6ICcjZmZlYmVlJyxcbiAgMTAwOiAnI2ZmY2RkMicsXG4gIDIwMDogJyNlZjlhOWEnLFxuICAzMDA6ICcjZTU3MzczJyxcbiAgNDAwOiAnI2VmNTM1MCcsXG4gIDUwMDogJyNmNDQzMzYnLFxuICA2MDA6ICcjZTUzOTM1JyxcbiAgNzAwOiAnI2QzMmYyZicsXG4gIDgwMDogJyNjNjI4MjgnLFxuICA5MDA6ICcjYjcxYzFjJyxcbiAgQTEwMDogJyNmZjhhODAnLFxuICBBMjAwOiAnI2ZmNTI1MicsXG4gIEE0MDA6ICcjZmYxNzQ0JyxcbiAgQTcwMDogJyNkNTAwMDAnXG59O1xudmFyIF9kZWZhdWx0ID0gcmVkO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmhleFRvUmdiID0gaGV4VG9SZ2I7XG5leHBvcnRzLnJnYlRvSGV4ID0gcmdiVG9IZXg7XG5leHBvcnRzLmhzbFRvUmdiID0gaHNsVG9SZ2I7XG5leHBvcnRzLmRlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3I7XG5leHBvcnRzLnJlY29tcG9zZUNvbG9yID0gcmVjb21wb3NlQ29sb3I7XG5leHBvcnRzLmdldENvbnRyYXN0UmF0aW8gPSBnZXRDb250cmFzdFJhdGlvO1xuZXhwb3J0cy5nZXRMdW1pbmFuY2UgPSBnZXRMdW1pbmFuY2U7XG5leHBvcnRzLmVtcGhhc2l6ZSA9IGVtcGhhc2l6ZTtcbmV4cG9ydHMuZmFkZSA9IGZhZGU7XG5leHBvcnRzLmFscGhhID0gYWxwaGE7XG5leHBvcnRzLmRhcmtlbiA9IGRhcmtlbjtcbmV4cG9ydHMubGlnaHRlbiA9IGxpZ2h0ZW47XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgd2hvc2UgdmFsdWUgaXMgbGltaXRlZCB0byB0aGUgZ2l2ZW4gcmFuZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byBiZSBjbGFtcGVkXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIFRoZSBsb3dlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IFRoZSB1cHBlciBib3VuZGFyeSBvZiB0aGUgb3V0cHV0IHJhbmdlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIG51bWJlciBpbiB0aGUgcmFuZ2UgW21pbiwgbWF4XVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAxO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCBcIi5jb25jYXQodmFsdWUsIFwiIGlzIG91dCBvZiByYW5nZSBbXCIpLmNvbmNhdChtaW4sIFwiLCBcIikuY29uY2F0KG1heCwgXCJdLlwiKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgdmFsdWUpLCBtYXgpO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIGhleCBmb3JtYXQgdG8gQ1NTIHJnYiBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gSGV4IGNvbG9yLCBpLmUuICNubm4gb3IgI25ubm5ublxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gaGV4VG9SZ2IoY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvci5zdWJzdHIoMSk7XG4gIHZhciByZSA9IG5ldyBSZWdFeHAoXCIuezEsXCIuY29uY2F0KGNvbG9yLmxlbmd0aCA+PSA2ID8gMiA6IDEsIFwifVwiKSwgJ2cnKTtcbiAgdmFyIGNvbG9ycyA9IGNvbG9yLm1hdGNoKHJlKTtcblxuICBpZiAoY29sb3JzICYmIGNvbG9yc1swXS5sZW5ndGggPT09IDEpIHtcbiAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gbiArIG47XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29sb3JzID8gXCJyZ2JcIi5jb25jYXQoY29sb3JzLmxlbmd0aCA9PT0gNCA/ICdhJyA6ICcnLCBcIihcIikuY29uY2F0KGNvbG9ycy5tYXAoZnVuY3Rpb24gKG4sIGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4IDwgMyA/IHBhcnNlSW50KG4sIDE2KSA6IE1hdGgucm91bmQocGFyc2VJbnQobiwgMTYpIC8gMjU1ICogMTAwMCkgLyAxMDAwO1xuICB9KS5qb2luKCcsICcpLCBcIilcIikgOiAnJztcbn1cblxuZnVuY3Rpb24gaW50VG9IZXgoaW50KSB7XG4gIHZhciBoZXggPSBpbnQudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiLmNvbmNhdChoZXgpIDogaGV4O1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIGNvbG9yIGZyb20gQ1NTIHJnYiBmb3JtYXQgdG8gQ1NTIGhleCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gUkdCIGNvbG9yLCBpLmUuIHJnYihuLCBuLCBuKVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgcmdiIGNvbG9yIHN0cmluZywgaS5lLiAjbm5ubm5uXG4gKi9cblxuXG5mdW5jdGlvbiByZ2JUb0hleChjb2xvcikge1xuICAvLyBJZGVtcG90ZW50XG4gIGlmIChjb2xvci5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICB2YXIgX2RlY29tcG9zZUNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpLFxuICAgICAgdmFsdWVzID0gX2RlY29tcG9zZUNvbG9yLnZhbHVlcztcblxuICByZXR1cm4gXCIjXCIuY29uY2F0KHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gaW50VG9IZXgobik7XG4gIH0pLmpvaW4oJycpKTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2xvciBmcm9tIGhzbCBmb3JtYXQgdG8gcmdiIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBIU0wgY29sb3IgdmFsdWVzXG4gKiBAcmV0dXJucyB7c3RyaW5nfSByZ2IgY29sb3IgdmFsdWVzXG4gKi9cblxuXG5mdW5jdGlvbiBoc2xUb1JnYihjb2xvcikge1xuICBjb2xvciA9IGRlY29tcG9zZUNvbG9yKGNvbG9yKTtcbiAgdmFyIF9jb2xvciA9IGNvbG9yLFxuICAgICAgdmFsdWVzID0gX2NvbG9yLnZhbHVlcztcbiAgdmFyIGggPSB2YWx1ZXNbMF07XG4gIHZhciBzID0gdmFsdWVzWzFdIC8gMTAwO1xuICB2YXIgbCA9IHZhbHVlc1syXSAvIDEwMDtcbiAgdmFyIGEgPSBzICogTWF0aC5taW4obCwgMSAtIGwpO1xuXG4gIHZhciBmID0gZnVuY3Rpb24gZihuKSB7XG4gICAgdmFyIGsgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IChuICsgaCAvIDMwKSAlIDEyO1xuICAgIHJldHVybiBsIC0gYSAqIE1hdGgubWF4KE1hdGgubWluKGsgLSAzLCA5IC0gaywgMSksIC0xKTtcbiAgfTtcblxuICB2YXIgdHlwZSA9ICdyZ2InO1xuICB2YXIgcmdiID0gW01hdGgucm91bmQoZigwKSAqIDI1NSksIE1hdGgucm91bmQoZig4KSAqIDI1NSksIE1hdGgucm91bmQoZig0KSAqIDI1NSldO1xuXG4gIGlmIChjb2xvci50eXBlID09PSAnaHNsYScpIHtcbiAgICB0eXBlICs9ICdhJztcbiAgICByZ2IucHVzaCh2YWx1ZXNbM10pO1xuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlczogcmdiXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSB0eXBlIGFuZCB2YWx1ZXMgb2YgYSBjb2xvci5cbiAqXG4gKiBOb3RlOiBEb2VzIG5vdCBzdXBwb3J0IHJnYiAlIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7b2JqZWN0fSAtIEEgTVVJIGNvbG9yIG9iamVjdDoge3R5cGU6IHN0cmluZywgdmFsdWVzOiBudW1iZXJbXX1cbiAqL1xuXG5cbmZ1bmN0aW9uIGRlY29tcG9zZUNvbG9yKGNvbG9yKSB7XG4gIC8vIElkZW1wb3RlbnRcbiAgaWYgKGNvbG9yLnR5cGUpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBpZiAoY29sb3IuY2hhckF0KDApID09PSAnIycpIHtcbiAgICByZXR1cm4gZGVjb21wb3NlQ29sb3IoaGV4VG9SZ2IoY29sb3IpKTtcbiAgfVxuXG4gIHZhciBtYXJrZXIgPSBjb2xvci5pbmRleE9mKCcoJyk7XG4gIHZhciB0eXBlID0gY29sb3Iuc3Vic3RyaW5nKDAsIG1hcmtlcik7XG5cbiAgaWYgKFsncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXS5pbmRleE9mKHR5cGUpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBVbnN1cHBvcnRlZCBgXCIuY29uY2F0KGNvbG9yLCBcImAgY29sb3IuXFxuV2Ugc3VwcG9ydCB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKCkuXCIpIDogKDAsIF91dGlscy5mb3JtYXRNdWlFcnJvck1lc3NhZ2UpKDMsIGNvbG9yKSk7XG4gIH1cblxuICB2YXIgdmFsdWVzID0gY29sb3Iuc3Vic3RyaW5nKG1hcmtlciArIDEsIGNvbG9yLmxlbmd0aCAtIDEpLnNwbGl0KCcsJyk7XG4gIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHZhbHVlczogdmFsdWVzXG4gIH07XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29sb3Igb2JqZWN0IHdpdGggdHlwZSBhbmQgdmFsdWVzIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb2xvciAtIERlY29tcG9zZWQgY29sb3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvci50eXBlIC0gT25lIG9mOiAncmdiJywgJ3JnYmEnLCAnaHNsJywgJ2hzbGEnXG4gKiBAcGFyYW0ge2FycmF5fSBjb2xvci52YWx1ZXMgLSBbbixuLG5dIG9yIFtuLG4sbixuXVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiByZWNvbXBvc2VDb2xvcihjb2xvcikge1xuICB2YXIgdHlwZSA9IGNvbG9yLnR5cGU7XG4gIHZhciB2YWx1ZXMgPSBjb2xvci52YWx1ZXM7XG5cbiAgaWYgKHR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgLy8gT25seSBjb252ZXJ0IHRoZSBmaXJzdCAzIHZhbHVlcyB0byBpbnQgKGkuZS4gbm90IGFscGhhKVxuICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKG4sIGkpIHtcbiAgICAgIHJldHVybiBpIDwgMyA/IHBhcnNlSW50KG4sIDEwKSA6IG47XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICB2YWx1ZXNbMV0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMV0sIFwiJVwiKTtcbiAgICB2YWx1ZXNbMl0gPSBcIlwiLmNvbmNhdCh2YWx1ZXNbMl0sIFwiJVwiKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdCh0eXBlLCBcIihcIikuY29uY2F0KHZhbHVlcy5qb2luKCcsICcpLCBcIilcIik7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycy5cbiAqXG4gKiBGb3JtdWxhOiBodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxNy5odG1sI0cxNy10ZXN0c1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JlZ3JvdW5kIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmQgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBBIGNvbnRyYXN0IHJhdGlvIHZhbHVlIGluIHRoZSByYW5nZSAwIC0gMjEuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb250cmFzdFJhdGlvKGZvcmVncm91bmQsIGJhY2tncm91bmQpIHtcbiAgdmFyIGx1bUEgPSBnZXRMdW1pbmFuY2UoZm9yZWdyb3VuZCk7XG4gIHZhciBsdW1CID0gZ2V0THVtaW5hbmNlKGJhY2tncm91bmQpO1xuICByZXR1cm4gKE1hdGgubWF4KGx1bUEsIGx1bUIpICsgMC4wNSkgLyAoTWF0aC5taW4obHVtQSwgbHVtQikgKyAwLjA1KTtcbn1cbi8qKlxuICogVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgYW55IHBvaW50IGluIGEgY29sb3Igc3BhY2UsXG4gKiBub3JtYWxpemVkIHRvIDAgZm9yIGRhcmtlc3QgYmxhY2sgYW5kIDEgZm9yIGxpZ2h0ZXN0IHdoaXRlLlxuICpcbiAqIEZvcm11bGE6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE3Lmh0bWwjRzE3LXRlc3RzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHJldHVybnMge251bWJlcn0gVGhlIHJlbGF0aXZlIGJyaWdodG5lc3Mgb2YgdGhlIGNvbG9yIGluIHRoZSByYW5nZSAwIC0gMVxuICovXG5cblxuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YXIgcmdiID0gY29sb3IudHlwZSA9PT0gJ2hzbCcgPyBkZWNvbXBvc2VDb2xvcihoc2xUb1JnYihjb2xvcikpLnZhbHVlcyA6IGNvbG9yLnZhbHVlcztcbiAgcmdiID0gcmdiLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFsIC89IDI1NTsgLy8gbm9ybWFsaXplZFxuXG4gICAgcmV0dXJuIHZhbCA8PSAwLjAzOTI4ID8gdmFsIC8gMTIuOTIgOiBNYXRoLnBvdygodmFsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pOyAvLyBUcnVuY2F0ZSBhdCAzIGRpZ2l0c1xuXG4gIHJldHVybiBOdW1iZXIoKDAuMjEyNiAqIHJnYlswXSArIDAuNzE1MiAqIHJnYlsxXSArIDAuMDcyMiAqIHJnYlsyXSkudG9GaXhlZCgzKSk7XG59XG4vKipcbiAqIERhcmtlbiBvciBsaWdodGVuIGEgY29sb3IsIGRlcGVuZGluZyBvbiBpdHMgbHVtaW5hbmNlLlxuICogTGlnaHQgY29sb3JzIGFyZSBkYXJrZW5lZCwgZGFyayBjb2xvcnMgYXJlIGxpZ2h0ZW5lZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQ9MC4xNSAtIG11bHRpcGxpZXIgaW4gdGhlIHJhbmdlIDAgLSAxXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cblxuZnVuY3Rpb24gZW1waGFzaXplKGNvbG9yKSB7XG4gIHZhciBjb2VmZmljaWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMC4xNTtcbiAgcmV0dXJuIGdldEx1bWluYW5jZShjb2xvcikgPiAwLjUgPyBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSA6IGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KTtcbn1cblxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcbi8qKlxuICogU2V0IHRoZSBhYnNvbHV0ZSB0cmFuc3BhcmVuY3kgb2YgYSBjb2xvci5cbiAqIEFueSBleGlzdGluZyBhbHBoYSB2YWx1ZXMgYXJlIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMCAtMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogVXNlIGBpbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgIGluc3RlYWQuXG4gKi9cblxuZnVuY3Rpb24gZmFkZShjb2xvciwgdmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIHdhcm5lZE9uY2UgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGZhZGVgIGNvbG9yIHV0aWxpdHkgd2FzIHJlbmFtZWQgdG8gYGFscGhhYCB0byBiZXR0ZXIgZGVzY3JpYmUgaXRzIGZ1bmN0aW9uYWxpdHkuJywgJycsIFwiWW91IHNob3VsZCB1c2UgYGltcG9ydCB7IGFscGhhIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ2BcIl0uam9pbignXFxuJykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbHBoYShjb2xvciwgdmFsdWUpO1xufVxuLyoqXG4gKiBTZXQgdGhlIGFic29sdXRlIHRyYW5zcGFyZW5jeSBvZiBhIGNvbG9yLlxuICogQW55IGV4aXN0aW5nIGFscGhhIHZhbHVlIGlzIG92ZXJ3cml0dGVuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciAtIENTUyBjb2xvciwgaS5lLiBvbmUgb2Y6ICNubm4sICNubm5ubm4sIHJnYigpLCByZ2JhKCksIGhzbCgpLCBoc2xhKClcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSAtIHZhbHVlIHRvIHNldCB0aGUgYWxwaGEgY2hhbm5lbCB0byBpbiB0aGUgcmFuZ2UgMC0xXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIENTUyBjb2xvciBzdHJpbmcuIEhleCBpbnB1dCB2YWx1ZXMgYXJlIHJldHVybmVkIGFzIHJnYlxuICovXG5cblxuZnVuY3Rpb24gYWxwaGEoY29sb3IsIHZhbHVlKSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICB2YWx1ZSA9IGNsYW1wKHZhbHVlKTtcblxuICBpZiAoY29sb3IudHlwZSA9PT0gJ3JnYicgfHwgY29sb3IudHlwZSA9PT0gJ2hzbCcpIHtcbiAgICBjb2xvci50eXBlICs9ICdhJztcbiAgfVxuXG4gIGNvbG9yLnZhbHVlc1szXSA9IHZhbHVlO1xuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufVxuLyoqXG4gKiBEYXJrZW5zIGEgY29sb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ1NTIGNvbG9yLCBpLmUuIG9uZSBvZjogI25ubiwgI25ubm5ubiwgcmdiKCksIHJnYmEoKSwgaHNsKCksIGhzbGEoKVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZWZmaWNpZW50IC0gbXVsdGlwbGllciBpbiB0aGUgcmFuZ2UgMCAtIDFcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgQ1NTIGNvbG9yIHN0cmluZy4gSGV4IGlucHV0IHZhbHVlcyBhcmUgcmV0dXJuZWQgYXMgcmdiXG4gKi9cblxuXG5mdW5jdGlvbiBkYXJrZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKj0gMSAtIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGNvbG9yLnR5cGUuaW5kZXhPZigncmdiJykgIT09IC0xKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbG9yLnZhbHVlc1tpXSAqPSAxIC0gY29lZmZpY2llbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlY29tcG9zZUNvbG9yKGNvbG9yKTtcbn1cbi8qKlxuICogTGlnaHRlbnMgYSBjb2xvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDU1MgY29sb3IsIGkuZS4gb25lIG9mOiAjbm5uLCAjbm5ubm5uLCByZ2IoKSwgcmdiYSgpLCBoc2woKSwgaHNsYSgpXG4gKiBAcGFyYW0ge251bWJlcn0gY29lZmZpY2llbnQgLSBtdWx0aXBsaWVyIGluIHRoZSByYW5nZSAwIC0gMVxuICogQHJldHVybnMge3N0cmluZ30gQSBDU1MgY29sb3Igc3RyaW5nLiBIZXggaW5wdXQgdmFsdWVzIGFyZSByZXR1cm5lZCBhcyByZ2JcbiAqL1xuXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oY29sb3IsIGNvZWZmaWNpZW50KSB7XG4gIGNvbG9yID0gZGVjb21wb3NlQ29sb3IoY29sb3IpO1xuICBjb2VmZmljaWVudCA9IGNsYW1wKGNvZWZmaWNpZW50KTtcblxuICBpZiAoY29sb3IudHlwZS5pbmRleE9mKCdoc2wnKSAhPT0gLTEpIHtcbiAgICBjb2xvci52YWx1ZXNbMl0gKz0gKDEwMCAtIGNvbG9yLnZhbHVlc1syXSkgKiBjb2VmZmljaWVudDtcbiAgfSBlbHNlIGlmIChjb2xvci50eXBlLmluZGV4T2YoJ3JnYicpICE9PSAtMSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb2xvci52YWx1ZXNbaV0gKz0gKDI1NSAtIGNvbG9yLnZhbHVlc1tpXSkgKiBjb2VmZmljaWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjb21wb3NlQ29sb3IoY29sb3IpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUJyZWFrcG9pbnRzO1xuZXhwb3J0cy5rZXlzID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpKTtcblxuLy8gU29ydGVkIEFTQyBieSBzaXplLiBUaGF0J3MgaW1wb3J0YW50LlxuLy8gSXQgY2FuJ3QgYmUgY29uZmlndXJlZCBhcyBpdCdzIHVzZWQgc3RhdGljYWxseSBmb3IgcHJvcFR5cGVzLlxudmFyIGtleXMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJ107IC8vIEtlZXAgaW4gbWluZCB0aGF0IEBtZWRpYSBpcyBpbmNsdXNpdmUgYnkgdGhlIENTUyBzcGVjaWZpY2F0aW9uLlxuXG5leHBvcnRzLmtleXMgPSBrZXlzO1xuXG5mdW5jdGlvbiBjcmVhdGVCcmVha3BvaW50cyhicmVha3BvaW50cykge1xuICB2YXIgX2JyZWFrcG9pbnRzJHZhbHVlcyA9IGJyZWFrcG9pbnRzLnZhbHVlcyxcbiAgICAgIHZhbHVlcyA9IF9icmVha3BvaW50cyR2YWx1ZXMgPT09IHZvaWQgMCA/IHtcbiAgICB4czogMCxcbiAgICBzbTogNjAwLFxuICAgIG1kOiA5NjAsXG4gICAgbGc6IDEyODAsXG4gICAgeGw6IDE5MjBcbiAgfSA6IF9icmVha3BvaW50cyR2YWx1ZXMsXG4gICAgICBfYnJlYWtwb2ludHMkdW5pdCA9IGJyZWFrcG9pbnRzLnVuaXQsXG4gICAgICB1bml0ID0gX2JyZWFrcG9pbnRzJHVuaXQgPT09IHZvaWQgMCA/ICdweCcgOiBfYnJlYWtwb2ludHMkdW5pdCxcbiAgICAgIF9icmVha3BvaW50cyRzdGVwID0gYnJlYWtwb2ludHMuc3RlcCxcbiAgICAgIHN0ZXAgPSBfYnJlYWtwb2ludHMkc3RlcCA9PT0gdm9pZCAwID8gNSA6IF9icmVha3BvaW50cyRzdGVwLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShicmVha3BvaW50cywgW1widmFsdWVzXCIsIFwidW5pdFwiLCBcInN0ZXBcIl0pO1xuXG4gIGZ1bmN0aW9uIHVwKGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiB2YWx1ZXNba2V5XSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5XSA6IGtleTtcbiAgICByZXR1cm4gXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQodmFsdWUpLmNvbmNhdCh1bml0LCBcIilcIik7XG4gIH1cblxuICBmdW5jdGlvbiBkb3duKGtleSkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihrZXkpICsgMTtcbiAgICB2YXIgdXBwZXJib3VuZCA9IHZhbHVlc1trZXlzW2VuZEluZGV4XV07XG5cbiAgICBpZiAoZW5kSW5kZXggPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAvLyB4bCBkb3duIGFwcGxpZXMgdG8gYWxsIHNpemVzXG4gICAgICByZXR1cm4gdXAoJ3hzJyk7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHVwcGVyYm91bmQgPT09ICdudW1iZXInICYmIGVuZEluZGV4ID4gMCA/IHVwcGVyYm91bmQgOiBrZXk7XG4gICAgcmV0dXJuIFwiQG1lZGlhIChtYXgtd2lkdGg6XCIuY29uY2F0KHZhbHVlIC0gc3RlcCAvIDEwMCkuY29uY2F0KHVuaXQsIFwiKVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4oc3RhcnQsIGVuZCkge1xuICAgIHZhciBlbmRJbmRleCA9IGtleXMuaW5kZXhPZihlbmQpO1xuXG4gICAgaWYgKGVuZEluZGV4ID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB1cChzdGFydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiQG1lZGlhIChtaW4td2lkdGg6XCIuY29uY2F0KHR5cGVvZiB2YWx1ZXNbc3RhcnRdID09PSAnbnVtYmVyJyA/IHZhbHVlc1tzdGFydF0gOiBzdGFydCkuY29uY2F0KHVuaXQsIFwiKSBhbmQgXCIpICsgXCIobWF4LXdpZHRoOlwiLmNvbmNhdCgoZW5kSW5kZXggIT09IC0xICYmIHR5cGVvZiB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA9PT0gJ251bWJlcicgPyB2YWx1ZXNba2V5c1tlbmRJbmRleCArIDFdXSA6IGVuZCkgLSBzdGVwIC8gMTAwKS5jb25jYXQodW5pdCwgXCIpXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25seShrZXkpIHtcbiAgICByZXR1cm4gYmV0d2VlbihrZXksIGtleSk7XG4gIH1cblxuICB2YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHdpZHRoKGtleSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgICAgd2FybmVkT25jZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogVGhlIGB0aGVtZS5icmVha3BvaW50cy53aWR0aGAgdXRpbGl0eSBpcyBkZXByZWNhdGVkIGJlY2F1c2UgaXQncyByZWR1bmRhbnQuXCIsICdVc2UgdGhlIGB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNgIGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXNba2V5XTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICBrZXlzOiBrZXlzLFxuICAgIHZhbHVlczogdmFsdWVzLFxuICAgIHVwOiB1cCxcbiAgICBkb3duOiBkb3duLFxuICAgIGJldHdlZW46IGJldHdlZW4sXG4gICAgb25seTogb25seSxcbiAgICB3aWR0aDogd2lkdGhcbiAgfSwgb3RoZXIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZU1peGlucztcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1peGlucyhicmVha3BvaW50cywgc3BhY2luZywgbWl4aW5zKSB7XG4gIHZhciBfdG9vbGJhcjtcblxuICByZXR1cm4gKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgZ3V0dGVyczogZnVuY3Rpb24gZ3V0dGVycygpIHtcbiAgICAgIHZhciBzdHlsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLm1peGlucy5ndXR0ZXJzKCkgaXMgZGVwcmVjYXRlZC4nLCAnWW91IGNhbiB1c2UgdGhlIHNvdXJjZSBvZiB0aGUgbWl4aW4gZGlyZWN0bHk6JywgXCJcXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xcbiAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXFxuICAgICAgfSxcXG4gICAgICBcIl0uam9pbignXFxuJykpO1xuICAgICAgcmV0dXJuICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICBwYWRkaW5nTGVmdDogc3BhY2luZygyKSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nKDIpXG4gICAgICB9LCBzdHlsZXMsICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCBicmVha3BvaW50cy51cCgnc20nKSwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nKDMpLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcoMylcbiAgICAgIH0sIHN0eWxlc1ticmVha3BvaW50cy51cCgnc20nKV0pKSk7XG4gICAgfSxcbiAgICB0b29sYmFyOiAoX3Rvb2xiYXIgPSB7XG4gICAgICBtaW5IZWlnaHQ6IDU2XG4gICAgfSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX3Rvb2xiYXIsIFwiXCIuY29uY2F0KGJyZWFrcG9pbnRzLnVwKCd4cycpLCBcIiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLCB7XG4gICAgICBtaW5IZWlnaHQ6IDQ4XG4gICAgfSksICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKF90b29sYmFyLCBicmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluSGVpZ2h0OiA2NFxuICAgIH0pLCBfdG9vbGJhcilcbiAgfSwgbWl4aW5zKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVQYWxldHRlO1xuZXhwb3J0cy5kYXJrID0gZXhwb3J0cy5saWdodCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiKSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL3V0aWxzXCIpO1xuXG52YXIgX2NvbW1vbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbG9ycy9jb21tb25cIikpO1xuXG52YXIgX2dyZXkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb2xvcnMvZ3JleVwiKSk7XG5cbnZhciBfaW5kaWdvID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29sb3JzL2luZGlnb1wiKSk7XG5cbnZhciBfcGluayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbG9ycy9waW5rXCIpKTtcblxudmFyIF9yZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb2xvcnMvcmVkXCIpKTtcblxudmFyIF9vcmFuZ2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb2xvcnMvb3JhbmdlXCIpKTtcblxudmFyIF9ibHVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29sb3JzL2JsdWVcIikpO1xuXG52YXIgX2dyZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29sb3JzL2dyZWVuXCIpKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZShcIi4vY29sb3JNYW5pcHVsYXRvclwiKTtcblxudmFyIGxpZ2h0ID0ge1xuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIHRleHQuXG4gIHRleHQ6IHtcbiAgICAvLyBUaGUgbW9zdCBpbXBvcnRhbnQgdGV4dC5cbiAgICBwcmltYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjg3KScsXG4gICAgLy8gU2Vjb25kYXJ5IHRleHQuXG4gICAgc2Vjb25kYXJ5OiAncmdiYSgwLCAwLCAwLCAwLjU0KScsXG4gICAgLy8gRGlzYWJsZWQgdGV4dCBoYXZlIGV2ZW4gbG93ZXIgdmlzdWFsIHByb21pbmVuY2UuXG4gICAgZGlzYWJsZWQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJyxcbiAgICAvLyBUZXh0IGhpbnRzLlxuICAgIGhpbnQ6ICdyZ2JhKDAsIDAsIDAsIDAuMzgpJ1xuICB9LFxuICAvLyBUaGUgY29sb3IgdXNlZCB0byBkaXZpZGUgZGlmZmVyZW50IGVsZW1lbnRzLlxuICBkaXZpZGVyOiAncmdiYSgwLCAwLCAwLCAwLjEyKScsXG4gIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9ycyB1c2VkIHRvIHN0eWxlIHRoZSBzdXJmYWNlcy5cbiAgLy8gQ29uc2lzdGVuY3kgYmV0d2VlbiB0aGVzZSB2YWx1ZXMgaXMgaW1wb3J0YW50LlxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IF9jb21tb24uZGVmYXVsdC53aGl0ZSxcbiAgICBkZWZhdWx0OiBfZ3JleS5kZWZhdWx0WzUwXVxuICB9LFxuICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gc3R5bGUgdGhlIGFjdGlvbiBlbGVtZW50cy5cbiAgYWN0aW9uOiB7XG4gICAgLy8gVGhlIGNvbG9yIG9mIGFuIGFjdGl2ZSBhY3Rpb24gbGlrZSBhbiBpY29uIGJ1dHRvbi5cbiAgICBhY3RpdmU6ICdyZ2JhKDAsIDAsIDAsIDAuNTQpJyxcbiAgICAvLyBUaGUgY29sb3Igb2YgYW4gaG92ZXJlZCBhY3Rpb24uXG4gICAgaG92ZXI6ICdyZ2JhKDAsIDAsIDAsIDAuMDQpJyxcbiAgICBob3Zlck9wYWNpdHk6IDAuMDQsXG4gICAgLy8gVGhlIGNvbG9yIG9mIGEgc2VsZWN0ZWQgYWN0aW9uLlxuICAgIHNlbGVjdGVkOiAncmdiYSgwLCAwLCAwLCAwLjA4KScsXG4gICAgc2VsZWN0ZWRPcGFjaXR5OiAwLjA4LFxuICAgIC8vIFRoZSBjb2xvciBvZiBhIGRpc2FibGVkIGFjdGlvbi5cbiAgICBkaXNhYmxlZDogJ3JnYmEoMCwgMCwgMCwgMC4yNiknLFxuICAgIC8vIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGEgZGlzYWJsZWQgYWN0aW9uLlxuICAgIGRpc2FibGVkQmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGRpc2FibGVkT3BhY2l0eTogMC4zOCxcbiAgICBmb2N1czogJ3JnYmEoMCwgMCwgMCwgMC4xMiknLFxuICAgIGZvY3VzT3BhY2l0eTogMC4xMixcbiAgICBhY3RpdmF0ZWRPcGFjaXR5OiAwLjEyXG4gIH1cbn07XG5leHBvcnRzLmxpZ2h0ID0gbGlnaHQ7XG52YXIgZGFyayA9IHtcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IF9jb21tb24uZGVmYXVsdC53aGl0ZSxcbiAgICBzZWNvbmRhcnk6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxuICAgIGRpc2FibGVkOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBoaW50OiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcbiAgICBpY29uOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJ1xuICB9LFxuICBkaXZpZGVyOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gIGJhY2tncm91bmQ6IHtcbiAgICBwYXBlcjogX2dyZXkuZGVmYXVsdFs4MDBdLFxuICAgIGRlZmF1bHQ6ICcjMzAzMDMwJ1xuICB9LFxuICBhY3Rpb246IHtcbiAgICBhY3RpdmU6IF9jb21tb24uZGVmYXVsdC53aGl0ZSxcbiAgICBob3ZlcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCknLFxuICAgIGhvdmVyT3BhY2l0eTogMC4wOCxcbiAgICBzZWxlY3RlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiknLFxuICAgIHNlbGVjdGVkT3BhY2l0eTogMC4xNixcbiAgICBkaXNhYmxlZDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKScsXG4gICAgZGlzYWJsZWRCYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZGlzYWJsZWRPcGFjaXR5OiAwLjM4LFxuICAgIGZvY3VzOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKScsXG4gICAgZm9jdXNPcGFjaXR5OiAwLjEyLFxuICAgIGFjdGl2YXRlZE9wYWNpdHk6IDAuMjRcbiAgfVxufTtcbmV4cG9ydHMuZGFyayA9IGRhcms7XG5cbmZ1bmN0aW9uIGFkZExpZ2h0T3JEYXJrKGludGVudCwgZGlyZWN0aW9uLCBzaGFkZSwgdG9uYWxPZmZzZXQpIHtcbiAgdmFyIHRvbmFsT2Zmc2V0TGlnaHQgPSB0b25hbE9mZnNldC5saWdodCB8fCB0b25hbE9mZnNldDtcbiAgdmFyIHRvbmFsT2Zmc2V0RGFyayA9IHRvbmFsT2Zmc2V0LmRhcmsgfHwgdG9uYWxPZmZzZXQgKiAxLjU7XG5cbiAgaWYgKCFpbnRlbnRbZGlyZWN0aW9uXSkge1xuICAgIGlmIChpbnRlbnQuaGFzT3duUHJvcGVydHkoc2hhZGUpKSB7XG4gICAgICBpbnRlbnRbZGlyZWN0aW9uXSA9IGludGVudFtzaGFkZV07XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsaWdodCcpIHtcbiAgICAgIGludGVudC5saWdodCA9ICgwLCBfY29sb3JNYW5pcHVsYXRvci5saWdodGVuKShpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXRMaWdodCk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdkYXJrJykge1xuICAgICAgaW50ZW50LmRhcmsgPSAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZGFya2VuKShpbnRlbnQubWFpbiwgdG9uYWxPZmZzZXREYXJrKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFsZXR0ZShwYWxldHRlKSB7XG4gIHZhciBfcGFsZXR0ZSRwcmltYXJ5ID0gcGFsZXR0ZS5wcmltYXJ5LFxuICAgICAgcHJpbWFyeSA9IF9wYWxldHRlJHByaW1hcnkgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogX2luZGlnby5kZWZhdWx0WzMwMF0sXG4gICAgbWFpbjogX2luZGlnby5kZWZhdWx0WzUwMF0sXG4gICAgZGFyazogX2luZGlnby5kZWZhdWx0WzcwMF1cbiAgfSA6IF9wYWxldHRlJHByaW1hcnksXG4gICAgICBfcGFsZXR0ZSRzZWNvbmRhcnkgPSBwYWxldHRlLnNlY29uZGFyeSxcbiAgICAgIHNlY29uZGFyeSA9IF9wYWxldHRlJHNlY29uZGFyeSA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBfcGluay5kZWZhdWx0LkEyMDAsXG4gICAgbWFpbjogX3BpbmsuZGVmYXVsdC5BNDAwLFxuICAgIGRhcms6IF9waW5rLmRlZmF1bHQuQTcwMFxuICB9IDogX3BhbGV0dGUkc2Vjb25kYXJ5LFxuICAgICAgX3BhbGV0dGUkZXJyb3IgPSBwYWxldHRlLmVycm9yLFxuICAgICAgZXJyb3IgPSBfcGFsZXR0ZSRlcnJvciA9PT0gdm9pZCAwID8ge1xuICAgIGxpZ2h0OiBfcmVkLmRlZmF1bHRbMzAwXSxcbiAgICBtYWluOiBfcmVkLmRlZmF1bHRbNTAwXSxcbiAgICBkYXJrOiBfcmVkLmRlZmF1bHRbNzAwXVxuICB9IDogX3BhbGV0dGUkZXJyb3IsXG4gICAgICBfcGFsZXR0ZSR3YXJuaW5nID0gcGFsZXR0ZS53YXJuaW5nLFxuICAgICAgd2FybmluZyA9IF9wYWxldHRlJHdhcm5pbmcgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogX29yYW5nZS5kZWZhdWx0WzMwMF0sXG4gICAgbWFpbjogX29yYW5nZS5kZWZhdWx0WzUwMF0sXG4gICAgZGFyazogX29yYW5nZS5kZWZhdWx0WzcwMF1cbiAgfSA6IF9wYWxldHRlJHdhcm5pbmcsXG4gICAgICBfcGFsZXR0ZSRpbmZvID0gcGFsZXR0ZS5pbmZvLFxuICAgICAgaW5mbyA9IF9wYWxldHRlJGluZm8gPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogX2JsdWUuZGVmYXVsdFszMDBdLFxuICAgIG1haW46IF9ibHVlLmRlZmF1bHRbNTAwXSxcbiAgICBkYXJrOiBfYmx1ZS5kZWZhdWx0WzcwMF1cbiAgfSA6IF9wYWxldHRlJGluZm8sXG4gICAgICBfcGFsZXR0ZSRzdWNjZXNzID0gcGFsZXR0ZS5zdWNjZXNzLFxuICAgICAgc3VjY2VzcyA9IF9wYWxldHRlJHN1Y2Nlc3MgPT09IHZvaWQgMCA/IHtcbiAgICBsaWdodDogX2dyZWVuLmRlZmF1bHRbMzAwXSxcbiAgICBtYWluOiBfZ3JlZW4uZGVmYXVsdFs1MDBdLFxuICAgIGRhcms6IF9ncmVlbi5kZWZhdWx0WzcwMF1cbiAgfSA6IF9wYWxldHRlJHN1Y2Nlc3MsXG4gICAgICBfcGFsZXR0ZSR0eXBlID0gcGFsZXR0ZS50eXBlLFxuICAgICAgdHlwZSA9IF9wYWxldHRlJHR5cGUgPT09IHZvaWQgMCA/ICdsaWdodCcgOiBfcGFsZXR0ZSR0eXBlLFxuICAgICAgX3BhbGV0dGUkY29udHJhc3RUaHJlID0gcGFsZXR0ZS5jb250cmFzdFRocmVzaG9sZCxcbiAgICAgIGNvbnRyYXN0VGhyZXNob2xkID0gX3BhbGV0dGUkY29udHJhc3RUaHJlID09PSB2b2lkIDAgPyAzIDogX3BhbGV0dGUkY29udHJhc3RUaHJlLFxuICAgICAgX3BhbGV0dGUkdG9uYWxPZmZzZXQgPSBwYWxldHRlLnRvbmFsT2Zmc2V0LFxuICAgICAgdG9uYWxPZmZzZXQgPSBfcGFsZXR0ZSR0b25hbE9mZnNldCA9PT0gdm9pZCAwID8gMC4yIDogX3BhbGV0dGUkdG9uYWxPZmZzZXQsXG4gICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyLmRlZmF1bHQpKHBhbGV0dGUsIFtcInByaW1hcnlcIiwgXCJzZWNvbmRhcnlcIiwgXCJlcnJvclwiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcInR5cGVcIiwgXCJjb250cmFzdFRocmVzaG9sZFwiLCBcInRvbmFsT2Zmc2V0XCJdKTsgLy8gVXNlIHRoZSBzYW1lIGxvZ2ljIGFzXG4gIC8vIEJvb3RzdHJhcDogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvMWQ2ZTM3MTBkZDQ0N2RlMWEyMDBmMjllOGZhNTIxZjhhMDkwOGY3MC9zY3NzL19mdW5jdGlvbnMuc2NzcyNMNTlcbiAgLy8gYW5kIG1hdGVyaWFsLWNvbXBvbmVudHMtd2ViIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYWM0NmI4ODYzYzRkYWI5ZmMyMmM0YzY2MmRjNmJkMWI2NWRkNjUyZi9wYWNrYWdlcy9tZGMtdGhlbWUvX2Z1bmN0aW9ucy5zY3NzI0w1NFxuXG4gIGZ1bmN0aW9uIGdldENvbnRyYXN0VGV4dChiYWNrZ3JvdW5kKSB7XG4gICAgdmFyIGNvbnRyYXN0VGV4dCA9ICgwLCBfY29sb3JNYW5pcHVsYXRvci5nZXRDb250cmFzdFJhdGlvKShiYWNrZ3JvdW5kLCBkYXJrLnRleHQucHJpbWFyeSkgPj0gY29udHJhc3RUaHJlc2hvbGQgPyBkYXJrLnRleHQucHJpbWFyeSA6IGxpZ2h0LnRleHQucHJpbWFyeTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgY29udHJhc3QgPSAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZ2V0Q29udHJhc3RSYXRpbykoYmFja2dyb3VuZCwgY29udHJhc3RUZXh0KTtcblxuICAgICAgaWYgKGNvbnRyYXN0IDwgMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgY29udHJhc3QgcmF0aW8gb2YgXCIuY29uY2F0KGNvbnRyYXN0LCBcIjoxIGZvciBcIikuY29uY2F0KGNvbnRyYXN0VGV4dCwgXCIgb24gXCIpLmNvbmNhdChiYWNrZ3JvdW5kKSwgJ2ZhbGxzIGJlbG93IHRoZSBXQ0FHIHJlY29tbWVuZGVkIGFic29sdXRlIG1pbmltdW0gY29udHJhc3QgcmF0aW8gb2YgMzoxLicsICdodHRwczovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyN2aXN1YWwtYXVkaW8tY29udHJhc3QtY29udHJhc3QnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRyYXN0VGV4dDtcbiAgfVxuXG4gIHZhciBhdWdtZW50Q29sb3IgPSBmdW5jdGlvbiBhdWdtZW50Q29sb3IoY29sb3IpIHtcbiAgICB2YXIgbWFpblNoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiA1MDA7XG4gICAgdmFyIGxpZ2h0U2hhZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDMwMDtcbiAgICB2YXIgZGFya1NoYWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiA3MDA7XG4gICAgY29sb3IgPSAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBjb2xvcik7XG5cbiAgICBpZiAoIWNvbG9yLm1haW4gJiYgY29sb3JbbWFpblNoYWRlXSkge1xuICAgICAgY29sb3IubWFpbiA9IGNvbG9yW21haW5TaGFkZV07XG4gICAgfVxuXG4gICAgaWYgKCFjb2xvci5tYWluKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5UaGUgY29sb3Igb2JqZWN0IG5lZWRzIHRvIGhhdmUgYSBgbWFpbmAgcHJvcGVydHkgb3IgYSBgXCIuY29uY2F0KG1haW5TaGFkZSwgXCJgIHByb3BlcnR5LlwiKSA6ICgwLCBfdXRpbHMuZm9ybWF0TXVpRXJyb3JNZXNzYWdlKSg0LCBtYWluU2hhZGUpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbG9yLm1haW4gIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGNvbG9yIHByb3ZpZGVkIHRvIGF1Z21lbnRDb2xvcihjb2xvcikgaXMgaW52YWxpZC5cXG5gY29sb3IubWFpbmAgc2hvdWxkIGJlIGEgc3RyaW5nLCBidXQgYFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShjb2xvci5tYWluKSwgXCJgIHdhcyBwcm92aWRlZCBpbnN0ZWFkLlxcblxcbkRpZCB5b3UgaW50ZW5kIHRvIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhcHByb2FjaGVzP1xcblxcbmltcG9ydCB7XFx4QTBncmVlbiB9IGZyb20gXFxcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1xcXCI7XFxuXFxuY29uc3QgdGhlbWUxID0gY3JlYXRlVGhlbWUoeyBwYWxldHRlOiB7XFxuICBwcmltYXJ5OiBncmVlbixcXG59IH0pO1xcblxcbmNvbnN0IHRoZW1lMiA9IGNyZWF0ZVRoZW1lKHsgcGFsZXR0ZToge1xcbiAgcHJpbWFyeTogeyBtYWluOiBncmVlbls1MDBdIH0sXFxufSB9KTtcIikgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDUsIEpTT04uc3RyaW5naWZ5KGNvbG9yLm1haW4pKSk7XG4gICAgfVxuXG4gICAgYWRkTGlnaHRPckRhcmsoY29sb3IsICdsaWdodCcsIGxpZ2h0U2hhZGUsIHRvbmFsT2Zmc2V0KTtcbiAgICBhZGRMaWdodE9yRGFyayhjb2xvciwgJ2RhcmsnLCBkYXJrU2hhZGUsIHRvbmFsT2Zmc2V0KTtcblxuICAgIGlmICghY29sb3IuY29udHJhc3RUZXh0KSB7XG4gICAgICBjb2xvci5jb250cmFzdFRleHQgPSBnZXRDb250cmFzdFRleHQoY29sb3IubWFpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9O1xuXG4gIHZhciB0eXBlcyA9IHtcbiAgICBkYXJrOiBkYXJrLFxuICAgIGxpZ2h0OiBsaWdodFxuICB9O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF0eXBlc1t0eXBlXSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgcGFsZXR0ZSB0eXBlIGBcIi5jb25jYXQodHlwZSwgXCJgIGlzIG5vdCBzdXBwb3J0ZWQuXCIpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcGFsZXR0ZU91dHB1dCA9ICgwLCBfdXRpbHMuZGVlcG1lcmdlKSgoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAvLyBBIGNvbGxlY3Rpb24gb2YgY29tbW9uIGNvbG9ycy5cbiAgICBjb21tb246IF9jb21tb24uZGVmYXVsdCxcbiAgICAvLyBUaGUgcGFsZXR0ZSB0eXBlLCBjYW4gYmUgbGlnaHQgb3IgZGFyay5cbiAgICB0eXBlOiB0eXBlLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcHJpbWFyeSBpbnRlcmZhY2UgZWxlbWVudHMgZm9yIGEgdXNlci5cbiAgICBwcmltYXJ5OiBhdWdtZW50Q29sb3IocHJpbWFyeSksXG4gICAgLy8gVGhlIGNvbG9ycyB1c2VkIHRvIHJlcHJlc2VudCBzZWNvbmRhcnkgaW50ZXJmYWNlIGVsZW1lbnRzIGZvciBhIHVzZXIuXG4gICAgc2Vjb25kYXJ5OiBhdWdtZW50Q29sb3Ioc2Vjb25kYXJ5LCAnQTQwMCcsICdBMjAwJywgJ0E3MDAnKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcmVwcmVzZW50IGludGVyZmFjZSBlbGVtZW50cyB0aGF0IHRoZSB1c2VyIHNob3VsZCBiZSBtYWRlIGF3YXJlIG9mLlxuICAgIGVycm9yOiBhdWdtZW50Q29sb3IoZXJyb3IpLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byByZXByZXNlbnQgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIGFjdGlvbnMgb3IgaW1wb3J0YW50IG1lc3NhZ2VzLlxuICAgIHdhcm5pbmc6IGF1Z21lbnRDb2xvcih3YXJuaW5nKSxcbiAgICAvLyBUaGUgY29sb3JzIHVzZWQgdG8gcHJlc2VudCBpbmZvcm1hdGlvbiB0byB0aGUgdXNlciB0aGF0IGlzIG5ldXRyYWwgYW5kIG5vdCBuZWNlc3NhcmlseSBpbXBvcnRhbnQuXG4gICAgaW5mbzogYXVnbWVudENvbG9yKGluZm8pLFxuICAgIC8vIFRoZSBjb2xvcnMgdXNlZCB0byBpbmRpY2F0ZSB0aGUgc3VjY2Vzc2Z1bCBjb21wbGV0aW9uIG9mIGFuIGFjdGlvbiB0aGF0IHVzZXIgdHJpZ2dlcmVkLlxuICAgIHN1Y2Nlc3M6IGF1Z21lbnRDb2xvcihzdWNjZXNzKSxcbiAgICAvLyBUaGUgZ3JleSBjb2xvcnMuXG4gICAgZ3JleTogX2dyZXkuZGVmYXVsdCxcbiAgICAvLyBVc2VkIGJ5IGBnZXRDb250cmFzdFRleHQoKWAgdG8gbWF4aW1pemUgdGhlIGNvbnRyYXN0IGJldHdlZW5cbiAgICAvLyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQuXG4gICAgY29udHJhc3RUaHJlc2hvbGQ6IGNvbnRyYXN0VGhyZXNob2xkLFxuICAgIC8vIFRha2VzIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgcmV0dXJucyB0aGUgdGV4dCBjb2xvciB0aGF0IG1heGltaXplcyB0aGUgY29udHJhc3QuXG4gICAgZ2V0Q29udHJhc3RUZXh0OiBnZXRDb250cmFzdFRleHQsXG4gICAgLy8gR2VuZXJhdGUgYSByaWNoIGNvbG9yIG9iamVjdC5cbiAgICBhdWdtZW50Q29sb3I6IGF1Z21lbnRDb2xvcixcbiAgICAvLyBVc2VkIGJ5IHRoZSBmdW5jdGlvbnMgYmVsb3cgdG8gc2hpZnQgYSBjb2xvcidzIGx1bWluYW5jZSBieSBhcHByb3hpbWF0ZWx5XG4gICAgLy8gdHdvIGluZGV4ZXMgd2l0aGluIGl0cyB0b25hbCBwYWxldHRlLlxuICAgIC8vIEUuZy4sIHNoaWZ0IGZyb20gUmVkIDUwMCB0byBSZWQgMzAwIG9yIFJlZCA3MDAuXG4gICAgdG9uYWxPZmZzZXQ6IHRvbmFsT2Zmc2V0XG4gIH0sIHR5cGVzW3R5cGVdKSwgb3RoZXIpO1xuICByZXR1cm4gcGFsZXR0ZU91dHB1dDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVNwYWNpbmc7XG5cbnZhciBfc3lzdGVtID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zeXN0ZW1cIik7XG5cbnZhciB3YXJuT25jZTtcblxuZnVuY3Rpb24gY3JlYXRlU3BhY2luZygpIHtcbiAgdmFyIHNwYWNpbmdJbnB1dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogODtcblxuICAvLyBBbHJlYWR5IHRyYW5zZm9ybWVkLlxuICBpZiAoc3BhY2luZ0lucHV0Lm11aSkge1xuICAgIHJldHVybiBzcGFjaW5nSW5wdXQ7XG4gIH0gLy8gTWF0ZXJpYWwgRGVzaWduIGxheW91dHMgYXJlIHZpc3VhbGx5IGJhbGFuY2VkLiBNb3N0IG1lYXN1cmVtZW50cyBhbGlnbiB0byBhbiA4ZHAgZ3JpZCBhcHBsaWVkLCB3aGljaCBhbGlnbnMgYm90aCBzcGFjaW5nIGFuZCB0aGUgb3ZlcmFsbCBsYXlvdXQuXG4gIC8vIFNtYWxsZXIgY29tcG9uZW50cywgc3VjaCBhcyBpY29ucyBhbmQgdHlwZSwgY2FuIGFsaWduIHRvIGEgNGRwIGdyaWQuXG4gIC8vIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2xheW91dC91bmRlcnN0YW5kaW5nLWxheW91dC5odG1sI3VzYWdlXG5cblxuICB2YXIgdHJhbnNmb3JtID0gKDAsIF9zeXN0ZW0uY3JlYXRlVW5hcnlTcGFjaW5nKSh7XG4gICAgc3BhY2luZzogc3BhY2luZ0lucHV0XG4gIH0pO1xuXG4gIHZhciBzcGFjaW5nID0gZnVuY3Rpb24gc3BhY2luZygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghKGFyZ3MubGVuZ3RoIDw9IDQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXRlcmlhbC1VSTogVG9vIG1hbnkgYXJndW1lbnRzIHByb3ZpZGVkLCBleHBlY3RlZCBiZXR3ZWVuIDAgYW5kIDQsIGdvdCBcIi5jb25jYXQoYXJncy5sZW5ndGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oMSk7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKGFyZ3NbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBhcmdzLm1hcChmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dHB1dCA9IHRyYW5zZm9ybShhcmd1bWVudCk7XG4gICAgICByZXR1cm4gdHlwZW9mIG91dHB1dCA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdChvdXRwdXQsIFwicHhcIikgOiBvdXRwdXQ7XG4gICAgfSkuam9pbignICcpO1xuICB9OyAvLyBCYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0byByZW1vdmUgaW4gdjUuXG5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3BhY2luZywgJ3VuaXQnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXdhcm5PbmNlIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IHRoZW1lLnNwYWNpbmcudW5pdCB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLicsICdJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuJywgJ1lvdSBjYW4gcmVwbGFjZSBgdGhlbWUuc3BhY2luZy51bml0ICogeWAgd2l0aCBgdGhlbWUuc3BhY2luZyh5KWAuJywgJycsICdZb3UgY2FuIHVzZSB0aGUgYGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL3RyZWUvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpLWNvZGVtb2QvUkVBRE1FLm1kI3RoZW1lLXNwYWNpbmctYXBpYCBtaWdyYXRpb24gaGVscGVyIHRvIG1ha2UgdGhlIHByb2Nlc3Mgc21vb3RoZXIuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fybk9uY2UgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3BhY2luZ0lucHV0O1xuICAgIH1cbiAgfSk7XG4gIHNwYWNpbmcubXVpID0gdHJ1ZTtcbiAgcmV0dXJuIHNwYWNpbmc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVNdWlUaGVtZSA9IGNyZWF0ZU11aVRoZW1lO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS91dGlsc1wiKTtcblxudmFyIF9jcmVhdGVCcmVha3BvaW50cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlQnJlYWtwb2ludHNcIikpO1xuXG52YXIgX2NyZWF0ZU1peGlucyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlTWl4aW5zXCIpKTtcblxudmFyIF9jcmVhdGVQYWxldHRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVQYWxldHRlXCIpKTtcblxudmFyIF9jcmVhdGVUeXBvZ3JhcGh5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVUeXBvZ3JhcGh5XCIpKTtcblxudmFyIF9zaGFkb3dzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGFkb3dzXCIpKTtcblxudmFyIF9zaGFwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhcGVcIikpO1xuXG52YXIgX2NyZWF0ZVNwYWNpbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZVNwYWNpbmdcIikpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi90cmFuc2l0aW9uc1wiKSk7XG5cbnZhciBfekluZGV4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi96SW5kZXhcIikpO1xuXG5mdW5jdGlvbiBjcmVhdGVUaGVtZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHNJbnB1dCA9IF9vcHRpb25zJGJyZWFrcG9pbnRzID09PSB2b2lkIDAgPyB7fSA6IF9vcHRpb25zJGJyZWFrcG9pbnRzLFxuICAgICAgX29wdGlvbnMkbWl4aW5zID0gb3B0aW9ucy5taXhpbnMsXG4gICAgICBtaXhpbnNJbnB1dCA9IF9vcHRpb25zJG1peGlucyA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRtaXhpbnMsXG4gICAgICBfb3B0aW9ucyRwYWxldHRlID0gb3B0aW9ucy5wYWxldHRlLFxuICAgICAgcGFsZXR0ZUlucHV0ID0gX29wdGlvbnMkcGFsZXR0ZSA9PT0gdm9pZCAwID8ge30gOiBfb3B0aW9ucyRwYWxldHRlLFxuICAgICAgc3BhY2luZ0lucHV0ID0gb3B0aW9ucy5zcGFjaW5nLFxuICAgICAgX29wdGlvbnMkdHlwb2dyYXBoeSA9IG9wdGlvbnMudHlwb2dyYXBoeSxcbiAgICAgIHR5cG9ncmFwaHlJbnB1dCA9IF9vcHRpb25zJHR5cG9ncmFwaHkgPT09IHZvaWQgMCA/IHt9IDogX29wdGlvbnMkdHlwb2dyYXBoeSxcbiAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIuZGVmYXVsdCkob3B0aW9ucywgW1wiYnJlYWtwb2ludHNcIiwgXCJtaXhpbnNcIiwgXCJwYWxldHRlXCIsIFwic3BhY2luZ1wiLCBcInR5cG9ncmFwaHlcIl0pO1xuICB2YXIgcGFsZXR0ZSA9ICgwLCBfY3JlYXRlUGFsZXR0ZS5kZWZhdWx0KShwYWxldHRlSW5wdXQpO1xuICB2YXIgYnJlYWtwb2ludHMgPSAoMCwgX2NyZWF0ZUJyZWFrcG9pbnRzLmRlZmF1bHQpKGJyZWFrcG9pbnRzSW5wdXQpO1xuICB2YXIgc3BhY2luZyA9ICgwLCBfY3JlYXRlU3BhY2luZy5kZWZhdWx0KShzcGFjaW5nSW5wdXQpO1xuICB2YXIgbXVpVGhlbWUgPSAoMCwgX3V0aWxzLmRlZXBtZXJnZSkoe1xuICAgIGJyZWFrcG9pbnRzOiBicmVha3BvaW50cyxcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIG1peGluczogKDAsIF9jcmVhdGVNaXhpbnMuZGVmYXVsdCkoYnJlYWtwb2ludHMsIHNwYWNpbmcsIG1peGluc0lucHV0KSxcbiAgICBvdmVycmlkZXM6IHt9LFxuICAgIC8vIEluamVjdCBjdXN0b20gc3R5bGVzXG4gICAgcGFsZXR0ZTogcGFsZXR0ZSxcbiAgICBwcm9wczoge30sXG4gICAgLy8gUHJvdmlkZSBkZWZhdWx0IHByb3BzXG4gICAgc2hhZG93czogX3NoYWRvd3MuZGVmYXVsdCxcbiAgICB0eXBvZ3JhcGh5OiAoMCwgX2NyZWF0ZVR5cG9ncmFwaHkuZGVmYXVsdCkocGFsZXR0ZSwgdHlwb2dyYXBoeUlucHV0KSxcbiAgICBzcGFjaW5nOiBzcGFjaW5nLFxuICAgIHNoYXBlOiBfc2hhcGUuZGVmYXVsdCxcbiAgICB0cmFuc2l0aW9uczogX3RyYW5zaXRpb25zLmRlZmF1bHQsXG4gICAgekluZGV4OiBfekluZGV4LmRlZmF1bHRcbiAgfSwgb3RoZXIpO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIG11aVRoZW1lID0gYXJncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXJndW1lbnQpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5kZWVwbWVyZ2UpKGFjYywgYXJndW1lbnQpO1xuICB9LCBtdWlUaGVtZSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcHNldWRvQ2xhc3NlcyA9IFsnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdlcnJvcicsICdmb2N1c2VkJywgJ2ZvY3VzVmlzaWJsZScsICdyZXF1aXJlZCcsICdleHBhbmRlZCcsICdzZWxlY3RlZCddO1xuXG4gICAgdmFyIHRyYXZlcnNlID0gZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSwgcGFyZW50S2V5KSB7XG4gICAgICB2YXIgZGVwdGggPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDE7XG4gICAgICB2YXIga2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluLCBuby1yZXN0cmljdGVkLXN5bnRheFxuXG4gICAgICBmb3IgKGtleSBpbiBub2RlKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVba2V5XTtcblxuICAgICAgICBpZiAoZGVwdGggPT09IDEpIHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ011aScpID09PSAwICYmIGNoaWxkKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCwga2V5LCBkZXB0aCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwc2V1ZG9DbGFzc2VzLmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgT2JqZWN0LmtleXMoY2hpbGQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIGBcIi5jb25jYXQocGFyZW50S2V5LCBcImAgY29tcG9uZW50IGluY3JlYXNlcyBcIikgKyBcInRoZSBDU1Mgc3BlY2lmaWNpdHkgb2YgdGhlIGBcIi5jb25jYXQoa2V5LCBcImAgaW50ZXJuYWwgc3RhdGUuXCIpLCAnWW91IGNhbiBub3Qgb3ZlcnJpZGUgaXQgbGlrZSB0aGlzOiAnLCBKU09OLnN0cmluZ2lmeShub2RlLCBudWxsLCAyKSwgJycsICdJbnN0ZWFkLCB5b3UgbmVlZCB0byB1c2UgdGhlICRydWxlTmFtZSBzeW50YXg6JywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICByb290OiAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh7fSwgXCImJFwiLmNvbmNhdChrZXkpLCBjaGlsZClcbiAgICAgICAgICAgIH0sIG51bGwsIDIpLCAnJywgJ2h0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvcHNldWRvLWNsYXNzZXMtZ3VpZGUnXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfSAvLyBSZW1vdmUgdGhlIHN0eWxlIHRvIHByZXZlbnQgZ2xvYmFsIGNvbmZsaWN0cy5cblxuXG4gICAgICAgICAgbm9kZVtrZXldID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJhdmVyc2UobXVpVGhlbWUub3ZlcnJpZGVzKTtcbiAgfVxuXG4gIHJldHVybiBtdWlUaGVtZTtcbn1cblxudmFyIHdhcm5lZE9uY2UgPSBmYWxzZTtcblxuZnVuY3Rpb24gY3JlYXRlTXVpVGhlbWUoKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCF3YXJuZWRPbmNlKSB7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogdGhlIGNyZWF0ZU11aVRoZW1lIGZ1bmN0aW9uIHdhcyByZW5hbWVkIHRvIGNyZWF0ZVRoZW1lLicsICcnLCBcIllvdSBzaG91bGQgdXNlIGBpbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydgXCJdLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVGhlbWUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBjcmVhdGVUaGVtZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVR5cG9ncmFwaHk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS91dGlsc1wiKTtcblxuZnVuY3Rpb24gcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxZTUpIC8gMWU1O1xufVxuXG52YXIgd2FybmVkT25jZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcodmFsdWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXdhcm5lZE9uY2UpIHtcbiAgICAgIGNvbnNvbGUud2FybihbJ01hdGVyaWFsLVVJOiBUaGUgYHRoZW1lLnR5cG9ncmFwaHkucm91bmRgIGhlbHBlciBpcyBkZXByZWNhdGVkLicsICdIZWFkIHRvIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvbWlncmF0aW9uLXY0LyN0aGVtZSBmb3IgYSBtaWdyYXRpb24gcGF0aC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB3YXJuZWRPbmNlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcm91bmQodmFsdWUpO1xufVxuXG52YXIgY2FzZUFsbENhcHMgPSB7XG4gIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG59O1xudmFyIGRlZmF1bHRGb250RmFtaWx5ID0gJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZic7XG4vKipcbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS90aGUtdHlwZS1zeXN0ZW0uaHRtbH1cbiAqIEBzZWUgQGxpbmt7aHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vdHlwb2dyYXBoeS91bmRlcnN0YW5kaW5nLXR5cG9ncmFwaHkuaHRtbH1cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVUeXBvZ3JhcGh5KHBhbGV0dGUsIHR5cG9ncmFwaHkpIHtcbiAgdmFyIF9yZWYgPSB0eXBlb2YgdHlwb2dyYXBoeSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cG9ncmFwaHkocGFsZXR0ZSkgOiB0eXBvZ3JhcGh5LFxuICAgICAgX3JlZiRmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZhbWlseSA9IF9yZWYkZm9udEZhbWlseSA9PT0gdm9pZCAwID8gZGVmYXVsdEZvbnRGYW1pbHkgOiBfcmVmJGZvbnRGYW1pbHksXG4gICAgICBfcmVmJGZvbnRTaXplID0gX3JlZi5mb250U2l6ZSxcbiAgICAgIGZvbnRTaXplID0gX3JlZiRmb250U2l6ZSA9PT0gdm9pZCAwID8gMTQgOiBfcmVmJGZvbnRTaXplLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TGlnaHQgPSBfcmVmLmZvbnRXZWlnaHRMaWdodCxcbiAgICAgIGZvbnRXZWlnaHRMaWdodCA9IF9yZWYkZm9udFdlaWdodExpZ2h0ID09PSB2b2lkIDAgPyAzMDAgOiBfcmVmJGZvbnRXZWlnaHRMaWdodCxcbiAgICAgIF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9IF9yZWYuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgICBmb250V2VpZ2h0UmVndWxhciA9IF9yZWYkZm9udFdlaWdodFJlZ3VsYSA9PT0gdm9pZCAwID8gNDAwIDogX3JlZiRmb250V2VpZ2h0UmVndWxhLFxuICAgICAgX3JlZiRmb250V2VpZ2h0TWVkaXVtID0gX3JlZi5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgZm9udFdlaWdodE1lZGl1bSA9IF9yZWYkZm9udFdlaWdodE1lZGl1bSA9PT0gdm9pZCAwID8gNTAwIDogX3JlZiRmb250V2VpZ2h0TWVkaXVtLFxuICAgICAgX3JlZiRmb250V2VpZ2h0Qm9sZCA9IF9yZWYuZm9udFdlaWdodEJvbGQsXG4gICAgICBmb250V2VpZ2h0Qm9sZCA9IF9yZWYkZm9udFdlaWdodEJvbGQgPT09IHZvaWQgMCA/IDcwMCA6IF9yZWYkZm9udFdlaWdodEJvbGQsXG4gICAgICBfcmVmJGh0bWxGb250U2l6ZSA9IF9yZWYuaHRtbEZvbnRTaXplLFxuICAgICAgaHRtbEZvbnRTaXplID0gX3JlZiRodG1sRm9udFNpemUgPT09IHZvaWQgMCA/IDE2IDogX3JlZiRodG1sRm9udFNpemUsXG4gICAgICBhbGxWYXJpYW50cyA9IF9yZWYuYWxsVmFyaWFudHMsXG4gICAgICBweFRvUmVtMiA9IF9yZWYucHhUb1JlbSxcbiAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIuZGVmYXVsdCkoX3JlZiwgW1wiZm9udEZhbWlseVwiLCBcImZvbnRTaXplXCIsIFwiZm9udFdlaWdodExpZ2h0XCIsIFwiZm9udFdlaWdodFJlZ3VsYXJcIiwgXCJmb250V2VpZ2h0TWVkaXVtXCIsIFwiZm9udFdlaWdodEJvbGRcIiwgXCJodG1sRm9udFNpemVcIiwgXCJhbGxWYXJpYW50c1wiLCBcInB4VG9SZW1cIl0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBmb250U2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBgZm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaHRtbEZvbnRTaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBodG1sRm9udFNpemVgIGlzIHJlcXVpcmVkIHRvIGJlIGEgbnVtYmVyLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb2VmID0gZm9udFNpemUgLyAxNDtcblxuICB2YXIgcHhUb1JlbSA9IHB4VG9SZW0yIHx8IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHNpemUgLyBodG1sRm9udFNpemUgKiBjb2VmLCBcInJlbVwiKTtcbiAgfTtcblxuICB2YXIgYnVpbGRWYXJpYW50ID0gZnVuY3Rpb24gYnVpbGRWYXJpYW50KGZvbnRXZWlnaHQsIHNpemUsIGxpbmVIZWlnaHQsIGxldHRlclNwYWNpbmcsIGNhc2luZykge1xuICAgIHJldHVybiAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LFxuICAgICAgZm9udFNpemU6IHB4VG9SZW0oc2l6ZSksXG4gICAgICAvLyBVbml0bGVzcyBmb2xsb3dpbmcgaHR0cHM6Ly9tZXllcndlYi5jb20vZXJpYy90aG91Z2h0cy8yMDA2LzAyLzA4L3VuaXRsZXNzLWxpbmUtaGVpZ2h0cy9cbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHRcbiAgICB9LCBmb250RmFtaWx5ID09PSBkZWZhdWx0Rm9udEZhbWlseSA/IHtcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiXCIuY29uY2F0KHJvdW5kKGxldHRlclNwYWNpbmcgLyBzaXplKSwgXCJlbVwiKVxuICAgIH0gOiB7fSwgY2FzaW5nLCBhbGxWYXJpYW50cyk7XG4gIH07XG5cbiAgdmFyIHZhcmlhbnRzID0ge1xuICAgIGgxOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA5NiwgMS4xNjcsIC0xLjUpLFxuICAgIGgyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodExpZ2h0LCA2MCwgMS4yLCAtMC41KSxcbiAgICBoMzogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCA0OCwgMS4xNjcsIDApLFxuICAgIGg0OiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDM0LCAxLjIzNSwgMC4yNSksXG4gICAgaDU6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMjQsIDEuMzM0LCAwKSxcbiAgICBoNjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDIwLCAxLjYsIDAuMTUpLFxuICAgIHN1YnRpdGxlMTogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRSZWd1bGFyLCAxNiwgMS43NSwgMC4xNSksXG4gICAgc3VidGl0bGUyOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodE1lZGl1bSwgMTQsIDEuNTcsIDAuMSksXG4gICAgYm9keTE6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTYsIDEuNSwgMC4xNSksXG4gICAgYm9keTI6IGJ1aWxkVmFyaWFudChmb250V2VpZ2h0UmVndWxhciwgMTQsIDEuNDMsIDAuMTUpLFxuICAgIGJ1dHRvbjogYnVpbGRWYXJpYW50KGZvbnRXZWlnaHRNZWRpdW0sIDE0LCAxLjc1LCAwLjQsIGNhc2VBbGxDYXBzKSxcbiAgICBjYXB0aW9uOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAxLjY2LCAwLjQpLFxuICAgIG92ZXJsaW5lOiBidWlsZFZhcmlhbnQoZm9udFdlaWdodFJlZ3VsYXIsIDEyLCAyLjY2LCAxLCBjYXNlQWxsQ2FwcylcbiAgfTtcbiAgcmV0dXJuICgwLCBfdXRpbHMuZGVlcG1lcmdlKSgoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICBodG1sRm9udFNpemU6IGh0bWxGb250U2l6ZSxcbiAgICBweFRvUmVtOiBweFRvUmVtLFxuICAgIHJvdW5kOiByb3VuZFdpdGhEZXByZWNhdGlvbldhcm5pbmcsXG4gICAgLy8gVE9ETyB2NTogcmVtb3ZlXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICBmb250U2l6ZTogZm9udFNpemUsXG4gICAgZm9udFdlaWdodExpZ2h0OiBmb250V2VpZ2h0TGlnaHQsXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IGZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRXZWlnaHRNZWRpdW06IGZvbnRXZWlnaHRNZWRpdW0sXG4gICAgZm9udFdlaWdodEJvbGQ6IGZvbnRXZWlnaHRCb2xkXG4gIH0sIHZhcmlhbnRzKSwgb3RoZXIsIHtcbiAgICBjbG9uZTogZmFsc2UgLy8gTm8gbmVlZCB0byBjbG9uZSBkZWVwXG5cbiAgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVUaGVtZVwiKSk7XG5cbnZhciBkZWZhdWx0VGhlbWUgPSAoMCwgX2NyZWF0ZVRoZW1lLmRlZmF1bHQpKCk7XG52YXIgX2RlZmF1bHQgPSBkZWZhdWx0VGhlbWU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBzaGFkb3dLZXlVbWJyYU9wYWNpdHkgPSAwLjI7XG52YXIgc2hhZG93S2V5UGVudW1icmFPcGFjaXR5ID0gMC4xNDtcbnZhciBzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSA9IDAuMTI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRvdygpIHtcbiAgcmV0dXJuIFtcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDMgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbM10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDQgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDUgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbNl0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDcgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbN10sIFwicHggcmdiYSgwLDAsMCxcIikuY29uY2F0KHNoYWRvd0tleVBlbnVtYnJhT3BhY2l0eSwgXCIpXCIpLCBcIlwiLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDggPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOF0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbOV0sIFwicHggXCIpLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoIDw9IDEwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzEwXSwgXCJweCBcIikuY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPD0gMTEgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMTFdLCBcInB4IHJnYmEoMCwwLDAsXCIpLmNvbmNhdChzaGFkb3dBbWJpZW50U2hhZG93T3BhY2l0eSwgXCIpXCIpXS5qb2luKCcsJyk7XG59IC8vIFZhbHVlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2Jsb2IvYmU4NzQ3Zjk0NTc0NjY5Y2I1ZTdhZGQxYTdjNTRmYTQxYTg5Y2VjNy9wYWNrYWdlcy9tZGMtZWxldmF0aW9uL192YXJpYWJsZXMuc2Nzc1xuXG5cbnZhciBzaGFkb3dzID0gWydub25lJywgY3JlYXRlU2hhZG93KDAsIDIsIDEsIC0xLCAwLCAxLCAxLCAwLCAwLCAxLCAzLCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDEsIC0yLCAwLCAyLCAyLCAwLCAwLCAxLCA1LCAwKSwgY3JlYXRlU2hhZG93KDAsIDMsIDMsIC0yLCAwLCAzLCA0LCAwLCAwLCAxLCA4LCAwKSwgY3JlYXRlU2hhZG93KDAsIDIsIDQsIC0xLCAwLCA0LCA1LCAwLCAwLCAxLCAxMCwgMCksIGNyZWF0ZVNoYWRvdygwLCAzLCA1LCAtMSwgMCwgNSwgOCwgMCwgMCwgMSwgMTQsIDApLCBjcmVhdGVTaGFkb3coMCwgMywgNSwgLTEsIDAsIDYsIDEwLCAwLCAwLCAxLCAxOCwgMCksIGNyZWF0ZVNoYWRvdygwLCA0LCA1LCAtMiwgMCwgNywgMTAsIDEsIDAsIDIsIDE2LCAxKSwgY3JlYXRlU2hhZG93KDAsIDUsIDUsIC0zLCAwLCA4LCAxMCwgMSwgMCwgMywgMTQsIDIpLCBjcmVhdGVTaGFkb3coMCwgNSwgNiwgLTMsIDAsIDksIDEyLCAxLCAwLCAzLCAxNiwgMiksIGNyZWF0ZVNoYWRvdygwLCA2LCA2LCAtMywgMCwgMTAsIDE0LCAxLCAwLCA0LCAxOCwgMyksIGNyZWF0ZVNoYWRvdygwLCA2LCA3LCAtNCwgMCwgMTEsIDE1LCAxLCAwLCA0LCAyMCwgMyksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTIsIDE3LCAyLCAwLCA1LCAyMiwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA4LCAtNCwgMCwgMTMsIDE5LCAyLCAwLCA1LCAyNCwgNCksIGNyZWF0ZVNoYWRvdygwLCA3LCA5LCAtNCwgMCwgMTQsIDIxLCAyLCAwLCA1LCAyNiwgNCksIGNyZWF0ZVNoYWRvdygwLCA4LCA5LCAtNSwgMCwgMTUsIDIyLCAyLCAwLCA2LCAyOCwgNSksIGNyZWF0ZVNoYWRvdygwLCA4LCAxMCwgLTUsIDAsIDE2LCAyNCwgMiwgMCwgNiwgMzAsIDUpLCBjcmVhdGVTaGFkb3coMCwgOCwgMTEsIC01LCAwLCAxNywgMjYsIDIsIDAsIDYsIDMyLCA1KSwgY3JlYXRlU2hhZG93KDAsIDksIDExLCAtNSwgMCwgMTgsIDI4LCAyLCAwLCA3LCAzNCwgNiksIGNyZWF0ZVNoYWRvdygwLCA5LCAxMiwgLTYsIDAsIDE5LCAyOSwgMiwgMCwgNywgMzYsIDYpLCBjcmVhdGVTaGFkb3coMCwgMTAsIDEzLCAtNiwgMCwgMjAsIDMxLCAzLCAwLCA4LCAzOCwgNyksIGNyZWF0ZVNoYWRvdygwLCAxMCwgMTMsIC02LCAwLCAyMSwgMzMsIDMsIDAsIDgsIDQwLCA3KSwgY3JlYXRlU2hhZG93KDAsIDEwLCAxNCwgLTYsIDAsIDIyLCAzNSwgMywgMCwgOCwgNDIsIDcpLCBjcmVhdGVTaGFkb3coMCwgMTEsIDE0LCAtNywgMCwgMjMsIDM2LCAzLCAwLCA5LCA0NCwgOCksIGNyZWF0ZVNoYWRvdygwLCAxMSwgMTUsIC03LCAwLCAyNCwgMzgsIDMsIDAsIDksIDQ2LCA4KV07XG52YXIgX2RlZmF1bHQgPSBzaGFkb3dzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgc2hhcGUgPSB7XG4gIGJvcmRlclJhZGl1czogNFxufTtcbnZhciBfZGVmYXVsdCA9IHNoYXBlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5kdXJhdGlvbiA9IGV4cG9ydHMuZWFzaW5nID0gdm9pZCAwO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG4vLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5nb29nbGUuY29tL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctbmF0dXJhbC1lYXNpbmctY3VydmVzXG4vLyB0byBsZWFybiB0aGUgY29udGV4dCBpbiB3aGljaCBlYWNoIGVhc2luZyBzaG91bGQgYmUgdXNlZC5cbnZhciBlYXNpbmcgPSB7XG4gIC8vIFRoaXMgaXMgdGhlIG1vc3QgY29tbW9uIGVhc2luZyBjdXJ2ZS5cbiAgZWFzZUluT3V0OiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgZW50ZXIgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5IGZyb20gb2ZmLXNjcmVlbiBhbmRcbiAgLy8gc2xvd2x5IGRlY2VsZXJhdGUgdG8gYSByZXN0aW5nIHBvaW50LlxuICBlYXNlT3V0OiAnY3ViaWMtYmV6aWVyKDAuMCwgMCwgMC4yLCAxKScsXG4gIC8vIE9iamVjdHMgbGVhdmUgdGhlIHNjcmVlbiBhdCBmdWxsIHZlbG9jaXR5LiBUaGV5IGRvIG5vdCBkZWNlbGVyYXRlIHdoZW4gb2ZmLXNjcmVlbi5cbiAgZWFzZUluOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSknLFxuICAvLyBUaGUgc2hhcnAgY3VydmUgaXMgdXNlZCBieSBvYmplY3RzIHRoYXQgbWF5IHJldHVybiB0byB0aGUgc2NyZWVuIGF0IGFueSB0aW1lLlxuICBzaGFycDogJ2N1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSknXG59OyAvLyBGb2xsb3cgaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL21vdGlvbi9kdXJhdGlvbi1lYXNpbmcuaHRtbCNkdXJhdGlvbi1lYXNpbmctY29tbW9uLWR1cmF0aW9uc1xuLy8gdG8gbGVhcm4gd2hlbiB1c2Ugd2hhdCB0aW1pbmdcblxuZXhwb3J0cy5lYXNpbmcgPSBlYXNpbmc7XG52YXIgZHVyYXRpb24gPSB7XG4gIHNob3J0ZXN0OiAxNTAsXG4gIHNob3J0ZXI6IDIwMCxcbiAgc2hvcnQ6IDI1MCxcbiAgLy8gbW9zdCBiYXNpYyByZWNvbW1lbmRlZCB0aW1pbmdcbiAgc3RhbmRhcmQ6IDMwMCxcbiAgLy8gdGhpcyBpcyB0byBiZSB1c2VkIGluIGNvbXBsZXggYW5pbWF0aW9uc1xuICBjb21wbGV4OiAzNzUsXG4gIC8vIHJlY29tbWVuZGVkIHdoZW4gc29tZXRoaW5nIGlzIGVudGVyaW5nIHNjcmVlblxuICBlbnRlcmluZ1NjcmVlbjogMjI1LFxuICAvLyByZWNvbW1lbmRlZCB3aGVuIHNvbWV0aGluZyBpcyBsZWF2aW5nIHNjcmVlblxuICBsZWF2aW5nU2NyZWVuOiAxOTVcbn07XG5leHBvcnRzLmR1cmF0aW9uID0gZHVyYXRpb247XG5cbmZ1bmN0aW9uIGZvcm1hdE1zKG1pbGxpc2Vjb25kcykge1xuICByZXR1cm4gXCJcIi5jb25jYXQoTWF0aC5yb3VuZChtaWxsaXNlY29uZHMpLCBcIm1zXCIpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0gcHJvcHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLnByb3BcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbS5kdXJhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtLmVhc2luZ1xuICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtLmRlbGF5XG4gKi9cblxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGVhc2luZzogZWFzaW5nLFxuICBkdXJhdGlvbjogZHVyYXRpb24sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWydhbGwnXTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgZHVyYXRpb25PcHRpb24gPSBfb3B0aW9ucyRkdXJhdGlvbiA9PT0gdm9pZCAwID8gZHVyYXRpb24uc3RhbmRhcmQgOiBfb3B0aW9ucyRkdXJhdGlvbixcbiAgICAgICAgX29wdGlvbnMkZWFzaW5nID0gb3B0aW9ucy5lYXNpbmcsXG4gICAgICAgIGVhc2luZ09wdGlvbiA9IF9vcHRpb25zJGVhc2luZyA9PT0gdm9pZCAwID8gZWFzaW5nLmVhc2VJbk91dCA6IF9vcHRpb25zJGVhc2luZyxcbiAgICAgICAgX29wdGlvbnMkZGVsYXkgPSBvcHRpb25zLmRlbGF5LFxuICAgICAgICBkZWxheSA9IF9vcHRpb25zJGRlbGF5ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkZGVsYXksXG4gICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIuZGVmYXVsdCkob3B0aW9ucywgW1wiZHVyYXRpb25cIiwgXCJlYXNpbmdcIiwgXCJkZWxheVwiXSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgICB9O1xuXG4gICAgICB2YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghaXNTdHJpbmcocHJvcHMpICYmICFBcnJheS5pc0FycmF5KHByb3BzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogQXJndW1lbnQgXCJwcm9wc1wiIG11c3QgYmUgYSBzdHJpbmcgb3IgQXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOdW1iZXIoZHVyYXRpb25PcHRpb24pICYmICFpc1N0cmluZyhkdXJhdGlvbk9wdGlvbikpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBBcmd1bWVudCBcXFwiZHVyYXRpb25cXFwiIG11c3QgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcgYnV0IGZvdW5kIFwiLmNvbmNhdChkdXJhdGlvbk9wdGlvbiwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1N0cmluZyhlYXNpbmdPcHRpb24pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBBcmd1bWVudCBcImVhc2luZ1wiIG11c3QgYmUgYSBzdHJpbmcuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOdW1iZXIoZGVsYXkpICYmICFpc1N0cmluZyhkZWxheSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IEFyZ3VtZW50IFwiZGVsYXlcIiBtdXN0IGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXIpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWF0ZXJpYWwtVUk6IFVucmVjb2duaXplZCBhcmd1bWVudChzKSBbXCIuY29uY2F0KE9iamVjdC5rZXlzKG90aGVyKS5qb2luKCcsJyksIFwiXS5cIikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoQXJyYXkuaXNBcnJheShwcm9wcykgPyBwcm9wcyA6IFtwcm9wc10pLm1hcChmdW5jdGlvbiAoYW5pbWF0ZWRQcm9wKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoYW5pbWF0ZWRQcm9wLCBcIiBcIikuY29uY2F0KHR5cGVvZiBkdXJhdGlvbk9wdGlvbiA9PT0gJ3N0cmluZycgPyBkdXJhdGlvbk9wdGlvbiA6IGZvcm1hdE1zKGR1cmF0aW9uT3B0aW9uKSwgXCIgXCIpLmNvbmNhdChlYXNpbmdPcHRpb24sIFwiIFwiKS5jb25jYXQodHlwZW9mIGRlbGF5ID09PSAnc3RyaW5nJyA/IGRlbGF5IDogZm9ybWF0TXMoZGVsYXkpKTtcbiAgICB9KS5qb2luKCcsJyk7XG4gIH0sXG4gIGdldEF1dG9IZWlnaHREdXJhdGlvbjogZnVuY3Rpb24gZ2V0QXV0b0hlaWdodER1cmF0aW9uKGhlaWdodCkge1xuICAgIGlmICghaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICB2YXIgY29uc3RhbnQgPSBoZWlnaHQgLyAzNjsgLy8gaHR0cHM6Ly93d3cud29sZnJhbWFscGhhLmNvbS9pbnB1dC8/aT0oNCslMkIrMTUrKisoeCslMkYrMzYrKSsqKiswLjI1KyUyQisoeCslMkYrMzYpKyUyRis1KSsqKzEwXG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoNCArIDE1ICogTWF0aC5wb3coY29uc3RhbnQsIDAuMjUpICsgY29uc3RhbnQgLyA1KSAqIDEwKTtcbiAgfVxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfc3R5bGVzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9zdHlsZXNcIik7XG5cbnZhciBfZGVmYXVsdFRoZW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWZhdWx0VGhlbWVcIikpO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGVzKHN0eWxlc09yQ3JlYXRvciwgb3B0aW9ucykge1xuICByZXR1cm4gKDAsIF9zdHlsZXMud2l0aFN0eWxlcykoc3R5bGVzT3JDcmVhdG9yLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICBkZWZhdWx0VGhlbWU6IF9kZWZhdWx0VGhlbWUuZGVmYXVsdFxuICB9LCBvcHRpb25zKSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHdpdGhTdHlsZXM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8vIFdlIG5lZWQgdG8gY2VudHJhbGl6ZSB0aGUgekluZGV4IGRlZmluaXRpb25zIGFzIHRoZXkgd29ya1xuLy8gbGlrZSBnbG9iYWwgdmFsdWVzIGluIHRoZSBicm93c2VyLlxudmFyIHpJbmRleCA9IHtcbiAgbW9iaWxlU3RlcHBlcjogMTAwMCxcbiAgc3BlZWREaWFsOiAxMDUwLFxuICBhcHBCYXI6IDExMDAsXG4gIGRyYXdlcjogMTIwMCxcbiAgbW9kYWw6IDEzMDAsXG4gIHNuYWNrYmFyOiAxNDAwLFxuICB0b29sdGlwOiAxNTAwXG59O1xudmFyIF9kZWZhdWx0ID0gekluZGV4O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7RmFifSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFkZFBob3RvQWx0ZXJuYXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFBob3RvQWx0ZXJuYXRlXCI7XHJcbmltcG9ydCB7Ymx1ZX0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG5pbXBvcnQgUGhpbmVUZXh0RmllbGQgZnJvbSAnLi9waG9uZVRleHRGaWVsZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsSW5mbygpIHtcclxuICAgIGNvbnN0IFtwaG9uZVZhbHVlLCBzZXRQaG9uZVZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgICBjb25zdCBbaW1hZ2VOYW1lLCBzZXRJbWFnZU5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBsb2FkQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgc2V0SW1hZ2VOYW1lKGZpbGUubmFtZSlcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG5cclxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZpbGUocmVhZGVyLnJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uUGhvbmVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHNldFBob25lVmFsdWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmlydGhkYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hyaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17OH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGFpbmVkLWJ1dHRvbi1maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVXBsb2FkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWluZWQtYnV0dG9uLWZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFiIGNvbXBvbmVudD1cInNwYW5cIiBzdHlsZT17e2NvbG9yOiBibHVlWzkwMF0sIG1hcmdpbjogMTB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZFBob3RvQWx0ZXJuYXRlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZU5hbWUgIT09ICcnID8gKDxzcGFuPntpbWFnZU5hbWV9PC9zcGFuPikgOiAoPHNwYW4+QWRkIGEgcHJvZmlsZSBwaWN0dXJlPC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICA8UGhvbmVUZXh0RmllbGQgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE11aVBob25lTnVtYmVyIGZyb20gXCJtYXRlcmlhbC11aS1waG9uZS1udW1iZXJcIjtcclxuXHJcblxyXG5jbGFzcyBDcmVhdGVVc2VyRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcclxuICAgICAgICAgICAgICAgIHBob25lOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVBob25lQ2hhbmdlID0gdGhpcy5oYW5kbGVQaG9uZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUGhvbmVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBob25lOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNdWlQaG9uZU51bWJlclxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtY3k9XCJ1c2VyLXBob25lXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb3VudHJ5PXtcInVzXCJ9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBob25lQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVVzZXJEaWFsb2c7XHJcbiIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciBlPXt9O2Z1bmN0aW9uIHQocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBuW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLHQpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIHQubT1uLHQuYz1lLHQuZD1mdW5jdGlvbihuLGUscil7dC5vKG4sZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sdC5yPWZ1bmN0aW9uKG4pe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LHQudD1mdW5jdGlvbihuLGUpe2lmKDEmZSYmKG49dChuKSksOCZlKXJldHVybiBuO2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIG4mJm4mJm4uX19lc01vZHVsZSlyZXR1cm4gbjt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKHQucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTpufSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2Ygbilmb3IodmFyIG8gaW4gbil0LmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSx0Lm49ZnVuY3Rpb24obil7dmFyIGU9biYmbi5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIG4uZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gbn07cmV0dXJuIHQuZChlLFwiYVwiLGUpLGV9LHQubz1mdW5jdGlvbihuLGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixlKX0sdC5wPVwiXCIsdCh0LnM9MTgyKX0oW2Z1bmN0aW9uKG4sZSx0KXtuLmV4cG9ydHM9dCgxNzQpKCl9LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPXJlcXVpcmUoXCJyZWFjdFwiKX0sZnVuY3Rpb24obixlKXt2YXIgdD1BcnJheS5pc0FycmF5O24uZXhwb3J0cz10fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg0MCksbz1cIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsYT1yfHxvfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7bi5leHBvcnRzPWF9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDc4KSxvPXQoMjUpLGE9dCgyNyksaT10KDI4KTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe3JldHVybiBuPWkobiksdD1udWxsPT10PzA6cihhKHQpLDAsbi5sZW5ndGgpLGU9byhlKSxuLnNsaWNlKHQsdCtlLmxlbmd0aCk9PWV9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNzEpKHQoMjMpKTtuLmV4cG9ydHM9cn0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTQpLG89dCg3NiksYT10KDc3KSxpPVwiW29iamVjdCBOdWxsXVwiLHU9XCJbb2JqZWN0IFVuZGVmaW5lZF1cIixjPXI/ci50b1N0cmluZ1RhZzp2b2lkIDA7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsPT1uP3ZvaWQgMD09PW4/dTppOmMmJmMgaW4gT2JqZWN0KG4pP28obik6YShuKX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZcIm9iamVjdFwiPT10eXBlb2Ygbn19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciBlPXR5cGVvZiBuO3JldHVybiBudWxsIT1uJiYoXCJvYmplY3RcIj09ZXx8XCJmdW5jdGlvblwiPT1lKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDkyKSxvPXQoOTUpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3ZhciB0PW8obixlKTtyZXR1cm4gcih0KT90OnZvaWQgMH19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDExMSksbz10KDE1MCksYT10KDE1NyksaT10KDIpLHU9dCgxNTgpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246bnVsbD09bj9hOlwib2JqZWN0XCI9PXR5cGVvZiBuP2kobik/byhuWzBdLG5bMV0pOnIobik6dShuKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDQ0KSxvPXQoMzQpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmbyhuLmxlbmd0aCkmJiFyKG4pfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTMzKSxvPXQoMTQwKSxhPXQoMTEpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gYShuKT9yKG4pOm8obil9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgyNiksbz10KDEwKSxhPXQoMTY4KSxpPXQoMik7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7cmV0dXJuKGkobik/cjphKShuLG8oZSwzKSl9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgzKS5TeW1ib2w7bi5leHBvcnRzPXJ9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDYpLG89dCg3KSxhPVwiW29iamVjdCBTeW1ib2xdXCI7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBufHxvKG4pJiZyKG4pPT1hfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoOSkoT2JqZWN0LFwiY3JlYXRlXCIpO24uZXhwb3J0cz1yfSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxMDApLG89dCgxMDEpLGE9dCgxMDIpLGk9dCgxMDMpLHU9dCgxMDQpO2Z1bmN0aW9uIGMobil7dmFyIGU9LTEsdD1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8dDspe3ZhciByPW5bZV07dGhpcy5zZXQoclswXSxyWzFdKX19Yy5wcm90b3R5cGUuY2xlYXI9cixjLnByb3RvdHlwZS5kZWxldGU9byxjLnByb3RvdHlwZS5nZXQ9YSxjLnByb3RvdHlwZS5oYXM9aSxjLnByb3RvdHlwZS5zZXQ9dSxuLmV4cG9ydHM9Y30sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMzEpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe2Zvcih2YXIgdD1uLmxlbmd0aDt0LS07KWlmKHIoblt0XVswXSxlKSlyZXR1cm4gdDtyZXR1cm4tMX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDEwNik7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7dmFyIHQ9bi5fX2RhdGFfXztyZXR1cm4gcihlKT90W1wic3RyaW5nXCI9PXR5cGVvZiBlP1wic3RyaW5nXCI6XCJoYXNoXCJdOnQubWFwfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTUpLG89MS8wO24uZXhwb3J0cz1mdW5jdGlvbihuKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbnx8cihuKSlyZXR1cm4gbjt2YXIgZT1uK1wiXCI7cmV0dXJuXCIwXCI9PWUmJjEvbj09LW8/XCItMFwiOmV9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNjQpLG89dCgxNjcpKHIpO24uZXhwb3J0cz1vfSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgzMCksbz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIjtmdW5jdGlvbiBhKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbnx8bnVsbCE9ZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKG8pO3ZhciB0PWZ1bmN0aW9uKCl7dmFyIHI9YXJndW1lbnRzLG89ZT9lLmFwcGx5KHRoaXMscik6clswXSxhPXQuY2FjaGU7aWYoYS5oYXMobykpcmV0dXJuIGEuZ2V0KG8pO3ZhciBpPW4uYXBwbHkodGhpcyxyKTtyZXR1cm4gdC5jYWNoZT1hLnNldChvLGkpfHxhLGl9O3JldHVybiB0LmNhY2hlPW5ldyhhLkNhY2hlfHxyKSx0fWEuQ2FjaGU9cixuLmV4cG9ydHM9YX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNDMpLG89dCgxMCksYT10KDI3KSxpPU1hdGgubWF4O24uZXhwb3J0cz1mdW5jdGlvbihuLGUsdCl7dmFyIHU9bnVsbD09bj8wOm4ubGVuZ3RoO2lmKCF1KXJldHVybi0xO3ZhciBjPW51bGw9PXQ/MDphKHQpO3JldHVybiBjPDAmJihjPWkodStjLDApKSxyKG4sbyhlLDMpLGMpfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNTApLG89dCgxNjMpLGE9dCgxMCksaT10KDIpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3JldHVybihpKG4pP3I6bykobixhKGUsMykpfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTQpLG89dCgyNiksYT10KDIpLGk9dCgxNSksdT0xLzAsYz1yP3IucHJvdG90eXBlOnZvaWQgMCxzPWM/Yy50b1N0cmluZzp2b2lkIDA7bi5leHBvcnRzPWZ1bmN0aW9uIG4oZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoYShlKSlyZXR1cm4gbyhlLG4pK1wiXCI7aWYoaShlKSlyZXR1cm4gcz9zLmNhbGwoZSk6XCJcIjt2YXIgdD1lK1wiXCI7cmV0dXJuXCIwXCI9PXQmJjEvZT09LXU/XCItMFwiOnR9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe2Zvcih2YXIgdD0tMSxyPW51bGw9PW4/MDpuLmxlbmd0aCxvPUFycmF5KHIpOysrdDxyOylvW3RdPWUoblt0XSx0LG4pO3JldHVybiBvfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNzkpO24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgZT1yKG4pLHQ9ZSUxO3JldHVybiBlPT1lP3Q/ZS10OmU6MH19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDI1KTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/XCJcIjpyKG4pfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNDMpLG89dCg4MiksYT10KDgzKTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe3JldHVybiBlPT1lP2EobixlLHQpOnIobixvLHQpfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoODkpLG89dCgxMDUpLGE9dCgxMDcpLGk9dCgxMDgpLHU9dCgxMDkpO2Z1bmN0aW9uIGMobil7dmFyIGU9LTEsdD1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8dDspe3ZhciByPW5bZV07dGhpcy5zZXQoclswXSxyWzFdKX19Yy5wcm90b3R5cGUuY2xlYXI9cixjLnByb3RvdHlwZS5kZWxldGU9byxjLnByb3RvdHlwZS5nZXQ9YSxjLnByb3RvdHlwZS5oYXM9aSxjLnByb3RvdHlwZS5zZXQ9dSxuLmV4cG9ydHM9Y30sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXtyZXR1cm4gbj09PWV8fG4hPW4mJmUhPWV9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg5KSh0KDMpLFwiTWFwXCIpO24uZXhwb3J0cz1yfSxmdW5jdGlvbihuLGUpe3ZhciB0PTkwMDcxOTkyNTQ3NDA5OTEscj0vXig/OjB8WzEtOV1cXGQqKSQvO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3ZhciBvPXR5cGVvZiBuO3JldHVybiEhKGU9bnVsbD09ZT90OmUpJiYoXCJudW1iZXJcIj09b3x8XCJzeW1ib2xcIiE9byYmci50ZXN0KG4pKSYmbj4tMSYmbiUxPT0wJiZuPGV9fSxmdW5jdGlvbihuLGUpe3ZhciB0PTkwMDcxOTkyNTQ3NDA5OTE7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBuJiZuPi0xJiZuJTE9PTAmJm48PXR9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgyKSxvPXQoMTUpLGE9L1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxpPS9eXFx3KiQvO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe2lmKHIobikpcmV0dXJuITE7dmFyIHQ9dHlwZW9mIG47cmV0dXJuIShcIm51bWJlclwiIT10JiZcInN5bWJvbFwiIT10JiZcImJvb2xlYW5cIiE9dCYmbnVsbCE9biYmIW8obikpfHwoaS50ZXN0KG4pfHwhYS50ZXN0KG4pfHxudWxsIT1lJiZuIGluIE9iamVjdChlKSl9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg2KSxvPXQoMiksYT10KDcpLGk9XCJbb2JqZWN0IFN0cmluZ11cIjtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIG58fCFvKG4pJiZhKG4pJiZyKG4pPT1pfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTY5KSxvPXQoMjEpLGE9dCgxMCksaT10KDE3MCksdT10KDIpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUsdCl7dmFyIGM9dShuKT9yOmkscz1hcmd1bWVudHMubGVuZ3RoPDM7cmV0dXJuIGMobixhKGUsNCksdCxzLG8pfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNDkpLG89dCgxMCksYT10KDE3MiksaT10KDIpLHU9dCgxNzMpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUsdCl7dmFyIGM9aShuKT9yOmE7cmV0dXJuIHQmJnUobixlLHQpJiYoZT12b2lkIDApLGMobixvKGUsMykpfX0sZnVuY3Rpb24obixlKXt2YXIgdDtmdW5jdGlvbiByKG4sZSl7dmFyIHQ9T2JqZWN0LmtleXMobik7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuKTtlJiYocj1yLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobixlKS5lbnVtZXJhYmxlfSkpKSx0LnB1c2guYXBwbHkodCxyKX1yZXR1cm4gdH1mdW5jdGlvbiBvKG4sZSx0KXtyZXR1cm4gZSBpbiBuP09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLGUse3ZhbHVlOnQsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTpuW2VdPXQsbn1mdW5jdGlvbiBhKG4sZSl7cmV0dXJuIGZ1bmN0aW9uKG4pe2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIG59KG4pfHxmdW5jdGlvbihuLGUpe2lmKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChuKXx8XCJbb2JqZWN0IEFyZ3VtZW50c11cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuKSkpcmV0dXJuO3ZhciB0PVtdLHI9ITAsbz0hMSxhPXZvaWQgMDt0cnl7Zm9yKHZhciBpLHU9bltTeW1ib2wuaXRlcmF0b3JdKCk7IShyPShpPXUubmV4dCgpKS5kb25lKSYmKHQucHVzaChpLnZhbHVlKSwhZXx8dC5sZW5ndGghPT1lKTtyPSEwKTt9Y2F0Y2gobil7bz0hMCxhPW59ZmluYWxseXt0cnl7cnx8bnVsbD09dS5yZXR1cm58fHUucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGF9fXJldHVybiB0fShuLGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpfSgpfXZhciBpPXt9O2Z1bmN0aW9uIHUobixlLHQpe2UgaW4gaXx8KGlbZV09W10pO3ZhciByPXR8fDA7aVtlXVtyXT1ufXZhciBjLHM9KHQ9W10pLmNvbmNhdC5hcHBseSh0LGZ1bmN0aW9uKG4pe2lmKEFycmF5LmlzQXJyYXkobikpe2Zvcih2YXIgZT0wLHQ9bmV3IEFycmF5KG4ubGVuZ3RoKTtlPG4ubGVuZ3RoO2UrKyl0W2VdPW5bZV07cmV0dXJuIHR9fShjPVtbXCJBZmdoYW5pc3RhblwiLFtcImFzaWFcIl0sXCJhZlwiLFwiOTNcIl0sW1wiQWxiYW5pYVwiLFtcImV1cm9wZVwiXSxcImFsXCIsXCIzNTVcIl0sW1wiQWxnZXJpYVwiLFtcImFmcmljYVwiLFwibm9ydGgtYWZyaWNhXCJdLFwiZHpcIixcIjIxM1wiXSxbXCJBbWVyaWNhbiBTYW1vYVwiLFtcIm9jZWFuaWFcIl0sXCJhc1wiLFwiMTY4NFwiXSxbXCJBbmRvcnJhXCIsW1wiZXVyb3BlXCJdLFwiYWRcIixcIjM3NlwiXSxbXCJBbmdvbGFcIixbXCJhZnJpY2FcIl0sXCJhb1wiLFwiMjQ0XCJdLFtcIkFuZ3VpbGxhXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwiYWlcIixcIjEyNjRcIl0sW1wiQW50aWd1YSBhbmQgQmFyYnVkYVwiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcImFnXCIsXCIxMjY4XCJdLFtcIkFyZ2VudGluYVwiLFtcImFtZXJpY2FcIixcInNvdXRoLWFtZXJpY2FcIl0sXCJhclwiLFwiNTRcIixcIisuLiAoLi4pIC4uLi4uLi4uXCJdLFtcIkFybWVuaWFcIixbXCJhc2lhXCIsXCJleC11c3NyXCJdLFwiYW1cIixcIjM3NFwiXSxbXCJBcnViYVwiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcImF3XCIsXCIyOTdcIl0sW1wiQXVzdHJhbGlhXCIsW1wib2NlYW5pYVwiXSxcImF1XCIsXCI2MVwiLFwiKy4uIC4uLiAuLi4gLi4uXCJdLFtcIkF1c3RyaWFcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwiYXRcIixcIjQzXCJdLFtcIkF6ZXJiYWlqYW5cIixbXCJhc2lhXCIsXCJleC11c3NyXCJdLFwiYXpcIixcIjk5NFwiXSxbXCJCYWhhbWFzXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwiYnNcIixcIjEyNDJcIl0sW1wiQmFocmFpblwiLFtcIm1pZGRsZS1lYXN0XCJdLFwiYmhcIixcIjk3M1wiXSxbXCJCYW5nbGFkZXNoXCIsW1wiYXNpYVwiXSxcImJkXCIsXCI4ODBcIl0sW1wiQmFyYmFkb3NcIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJiYlwiLFwiMTI0NlwiXSxbXCJCZWxhcnVzXCIsW1wiZXVyb3BlXCIsXCJleC11c3NyXCJdLFwiYnlcIixcIjM3NVwiLFwiKy4uLiAoLi4pIC4uLiAuLiAuLlwiXSxbXCJCZWxnaXVtXCIsW1wiZXVyb3BlXCIsXCJldXJvcGVhbi11bmlvblwiXSxcImJlXCIsXCIzMlwiLFwiKy4uIC4uLiAuLiAuLiAuLlwiXSxbXCJCZWxpemVcIixbXCJhbWVyaWNhXCIsXCJjZW50cmFsLWFtZXJpY2FcIl0sXCJielwiLFwiNTAxXCJdLFtcIkJlbmluXCIsW1wiYWZyaWNhXCJdLFwiYmpcIixcIjIyOVwiXSxbXCJCZXJtdWRhXCIsW1wiYW1lcmljYVwiLFwibm9ydGgtYW1lcmljYVwiXSxcImJtXCIsXCIxNDQxXCJdLFtcIkJodXRhblwiLFtcImFzaWFcIl0sXCJidFwiLFwiOTc1XCJdLFtcIkJvbGl2aWFcIixbXCJhbWVyaWNhXCIsXCJzb3V0aC1hbWVyaWNhXCJdLFwiYm9cIixcIjU5MVwiXSxbXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsW1wiZXVyb3BlXCJdLFwiYmFcIixcIjM4N1wiXSxbXCJCb3Rzd2FuYVwiLFtcImFmcmljYVwiXSxcImJ3XCIsXCIyNjdcIl0sW1wiQnJhemlsXCIsW1wiYW1lcmljYVwiLFwic291dGgtYW1lcmljYVwiXSxcImJyXCIsXCI1NVwiLFwiKy4uICguLikgLi4uLi4uLi4uXCJdLFtcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLFtcImFzaWFcIl0sXCJpb1wiLFwiMjQ2XCJdLFtcIkJyaXRpc2ggVmlyZ2luIElzbGFuZHNcIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJ2Z1wiLFwiMTI4NFwiXSxbXCJCcnVuZWlcIixbXCJhc2lhXCJdLFwiYm5cIixcIjY3M1wiXSxbXCJCdWxnYXJpYVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJiZ1wiLFwiMzU5XCJdLFtcIkJ1cmtpbmEgRmFzb1wiLFtcImFmcmljYVwiXSxcImJmXCIsXCIyMjZcIl0sW1wiQnVydW5kaVwiLFtcImFmcmljYVwiXSxcImJpXCIsXCIyNTdcIl0sW1wiQ2FtYm9kaWFcIixbXCJhc2lhXCJdLFwia2hcIixcIjg1NVwiXSxbXCJDYW1lcm9vblwiLFtcImFmcmljYVwiXSxcImNtXCIsXCIyMzdcIl0sW1wiQ2FuYWRhXCIsW1wiYW1lcmljYVwiLFwibm9ydGgtYW1lcmljYVwiXSxcImNhXCIsXCIxXCIsXCIrLiAoLi4uKSAuLi4tLi4uLlwiLDEsW1wiMjA0XCIsXCIyMzZcIixcIjI0OVwiLFwiMjUwXCIsXCIyODlcIixcIjMwNlwiLFwiMzQzXCIsXCIzNjVcIixcIjM4N1wiLFwiNDAzXCIsXCI0MTZcIixcIjQxOFwiLFwiNDMxXCIsXCI0MzdcIixcIjQzOFwiLFwiNDUwXCIsXCI1MDZcIixcIjUxNFwiLFwiNTE5XCIsXCI1NDhcIixcIjU3OVwiLFwiNTgxXCIsXCI1ODdcIixcIjYwNFwiLFwiNjEzXCIsXCI2MzlcIixcIjY0N1wiLFwiNjcyXCIsXCI3MDVcIixcIjcwOVwiLFwiNzQyXCIsXCI3NzhcIixcIjc4MFwiLFwiNzgyXCIsXCI4MDdcIixcIjgxOVwiLFwiODI1XCIsXCI4NjdcIixcIjg3M1wiLFwiOTAyXCIsXCI5MDVcIl1dLFtcIkNhcGUgVmVyZGVcIixbXCJhZnJpY2FcIl0sXCJjdlwiLFwiMjM4XCJdLFtcIkNhcmliYmVhbiBOZXRoZXJsYW5kc1wiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcImJxXCIsXCI1OTlcIixcIlwiLDFdLFtcIkNheW1hbiBJc2xhbmRzXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwia3lcIixcIjEzNDVcIl0sW1wiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsW1wiYWZyaWNhXCJdLFwiY2ZcIixcIjIzNlwiXSxbXCJDaGFkXCIsW1wiYWZyaWNhXCJdLFwidGRcIixcIjIzNVwiXSxbXCJDaGlsZVwiLFtcImFtZXJpY2FcIixcInNvdXRoLWFtZXJpY2FcIl0sXCJjbFwiLFwiNTZcIl0sW1wiQ2hpbmFcIixbXCJhc2lhXCJdLFwiY25cIixcIjg2XCIsXCIrLi4gLi4tLi4uLi4uLi4uXCJdLFtcIkNvbG9tYmlhXCIsW1wiYW1lcmljYVwiLFwic291dGgtYW1lcmljYVwiXSxcImNvXCIsXCI1N1wiXSxbXCJDb21vcm9zXCIsW1wiYWZyaWNhXCJdLFwia21cIixcIjI2OVwiXSxbXCJDb25nb1wiLFtcImFmcmljYVwiXSxcImNkXCIsXCIyNDNcIl0sW1wiQ29uZ29cIixbXCJhZnJpY2FcIl0sXCJjZ1wiLFwiMjQyXCJdLFtcIkNvb2sgSXNsYW5kc1wiLFtcIm9jZWFuaWFcIl0sXCJja1wiLFwiNjgyXCJdLFtcIkNvc3RhIFJpY2FcIixbXCJhbWVyaWNhXCIsXCJjZW50cmFsLWFtZXJpY2FcIl0sXCJjclwiLFwiNTA2XCIsXCIrLi4uIC4uLi4tLi4uLlwiXSxbXCJDw7R0ZSBk4oCZSXZvaXJlXCIsW1wiYWZyaWNhXCJdLFwiY2lcIixcIjIyNVwiXSxbXCJDcm9hdGlhXCIsW1wiZXVyb3BlXCIsXCJldXJvcGVhbi11bmlvblwiXSxcImhyXCIsXCIzODVcIl0sW1wiQ3ViYVwiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcImN1XCIsXCI1M1wiXSxbXCJDdXJhw6dhb1wiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcImN3XCIsXCI1OTlcIixcIlwiLDBdLFtcIkN5cHJ1c1wiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJjeVwiLFwiMzU3XCIsXCIrLi4uIC4uIC4uLi4uLlwiXSxbXCJDemVjaCBSZXB1YmxpY1wiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJjelwiLFwiNDIwXCJdLFtcIkRlbm1hcmtcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwiZGtcIixcIjQ1XCIsXCIrLi4gLi4gLi4gLi4gLi5cIl0sW1wiRGppYm91dGlcIixbXCJhZnJpY2FcIl0sXCJkalwiLFwiMjUzXCJdLFtcIkRvbWluaWNhXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwiZG1cIixcIjE3NjdcIl0sW1wiRG9taW5pY2FuIFJlcHVibGljXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwiZG9cIixcIjFcIixcIlwiLDIsW1wiODA5XCIsXCI4MjlcIixcIjg0OVwiXV0sW1wiRWN1YWRvclwiLFtcImFtZXJpY2FcIixcInNvdXRoLWFtZXJpY2FcIl0sXCJlY1wiLFwiNTkzXCJdLFtcIkVneXB0XCIsW1wiYWZyaWNhXCIsXCJub3J0aC1hZnJpY2FcIl0sXCJlZ1wiLFwiMjBcIl0sW1wiRWwgU2FsdmFkb3JcIixbXCJhbWVyaWNhXCIsXCJjZW50cmFsLWFtZXJpY2FcIl0sXCJzdlwiLFwiNTAzXCIsXCIrLi4uIC4uLi4tLi4uLlwiXSxbXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFtcImFmcmljYVwiXSxcImdxXCIsXCIyNDBcIl0sW1wiRXJpdHJlYVwiLFtcImFmcmljYVwiXSxcImVyXCIsXCIyOTFcIl0sW1wiRXN0b25pYVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIixcImV4LXVzc3JcIl0sXCJlZVwiLFwiMzcyXCIsXCIrLi4uIC4uLi4gLi4uLi4uXCJdLFtcIkV0aGlvcGlhXCIsW1wiYWZyaWNhXCJdLFwiZXRcIixcIjI1MVwiXSxbXCJGYWxrbGFuZCBJc2xhbmRzXCIsW1wiYW1lcmljYVwiLFwic291dGgtYW1lcmljYVwiXSxcImZrXCIsXCI1MDBcIl0sW1wiRmFyb2UgSXNsYW5kc1wiLFtcImV1cm9wZVwiXSxcImZvXCIsXCIyOThcIl0sW1wiRmlqaVwiLFtcIm9jZWFuaWFcIl0sXCJmalwiLFwiNjc5XCJdLFtcIkZpbmxhbmRcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwiZmlcIixcIjM1OFwiLFwiKy4uLiAuLiAuLi4gLi4gLi5cIl0sW1wiRnJhbmNlXCIsW1wiZXVyb3BlXCIsXCJldXJvcGVhbi11bmlvblwiXSxcImZyXCIsXCIzM1wiLFwiKy4uIC4gLi4gLi4gLi4gLi5cIl0sW1wiRnJlbmNoIEd1aWFuYVwiLFtcImFtZXJpY2FcIixcInNvdXRoLWFtZXJpY2FcIl0sXCJnZlwiLFwiNTk0XCJdLFtcIkZyZW5jaCBQb2x5bmVzaWFcIixbXCJvY2VhbmlhXCJdLFwicGZcIixcIjY4OVwiXSxbXCJHYWJvblwiLFtcImFmcmljYVwiXSxcImdhXCIsXCIyNDFcIl0sW1wiR2FtYmlhXCIsW1wiYWZyaWNhXCJdLFwiZ21cIixcIjIyMFwiXSxbXCJHZW9yZ2lhXCIsW1wiYXNpYVwiLFwiZXgtdXNzclwiXSxcImdlXCIsXCI5OTVcIl0sW1wiR2VybWFueVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJkZVwiLFwiNDlcIixcIisuLiAuLi4uIC4uLi4uLi4uXCJdLFtcIkdoYW5hXCIsW1wiYWZyaWNhXCJdLFwiZ2hcIixcIjIzM1wiXSxbXCJHaWJyYWx0YXJcIixbXCJldXJvcGVcIl0sXCJnaVwiLFwiMzUwXCJdLFtcIkdyZWVjZVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJnclwiLFwiMzBcIl0sW1wiR3JlZW5sYW5kXCIsW1wiYW1lcmljYVwiXSxcImdsXCIsXCIyOTlcIl0sW1wiR3JlbmFkYVwiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcImdkXCIsXCIxNDczXCJdLFtcIkd1YWRlbG91cGVcIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJncFwiLFwiNTkwXCIsXCJcIiwwXSxbXCJHdWFtXCIsW1wib2NlYW5pYVwiXSxcImd1XCIsXCIxNjcxXCJdLFtcIkd1YXRlbWFsYVwiLFtcImFtZXJpY2FcIixcImNlbnRyYWwtYW1lcmljYVwiXSxcImd0XCIsXCI1MDJcIixcIisuLi4gLi4uLi0uLi4uXCJdLFtcIkd1aW5lYVwiLFtcImFmcmljYVwiXSxcImduXCIsXCIyMjRcIl0sW1wiR3VpbmVhLUJpc3NhdVwiLFtcImFmcmljYVwiXSxcImd3XCIsXCIyNDVcIl0sW1wiR3V5YW5hXCIsW1wiYW1lcmljYVwiLFwic291dGgtYW1lcmljYVwiXSxcImd5XCIsXCI1OTJcIl0sW1wiSGFpdGlcIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJodFwiLFwiNTA5XCIsXCIrLi4uIC4uLi4tLi4uLlwiXSxbXCJIb25kdXJhc1wiLFtcImFtZXJpY2FcIixcImNlbnRyYWwtYW1lcmljYVwiXSxcImhuXCIsXCI1MDRcIl0sW1wiSG9uZyBLb25nXCIsW1wiYXNpYVwiXSxcImhrXCIsXCI4NTJcIixcIisuLi4gLi4uLiAuLi4uXCJdLFtcIkh1bmdhcnlcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwiaHVcIixcIjM2XCJdLFtcIkljZWxhbmRcIixbXCJldXJvcGVcIl0sXCJpc1wiLFwiMzU0XCIsXCIrLi4uIC4uLiAuLi4uXCJdLFtcIkluZGlhXCIsW1wiYXNpYVwiXSxcImluXCIsXCI5MVwiLFwiKy4uIC4uLi4uLS4uLi4uXCJdLFtcIkluZG9uZXNpYVwiLFtcImFzaWFcIl0sXCJpZFwiLFwiNjJcIl0sW1wiSXJhblwiLFtcIm1pZGRsZS1lYXN0XCJdLFwiaXJcIixcIjk4XCJdLFtcIklyYXFcIixbXCJtaWRkbGUtZWFzdFwiXSxcImlxXCIsXCI5NjRcIl0sW1wiSXJlbGFuZFwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJpZVwiLFwiMzUzXCIsXCIrLi4uIC4uIC4uLi4uLi5cIl0sW1wiSXNyYWVsXCIsW1wibWlkZGxlLWVhc3RcIl0sXCJpbFwiLFwiOTcyXCIsXCIrLi4uIC4uLiAuLi4gLi4uLlwiXSxbXCJJdGFseVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJpdFwiLFwiMzlcIixcIisuLiAuLi4gLi4uLi4uLlwiLDBdLFtcIkphbWFpY2FcIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJqbVwiLFwiMTg3NlwiXSxbXCJKYXBhblwiLFtcImFzaWFcIl0sXCJqcFwiLFwiODFcIixcIisuLiAuLiAuLi4uIC4uLi5cIl0sW1wiSm9yZGFuXCIsW1wibWlkZGxlLWVhc3RcIl0sXCJqb1wiLFwiOTYyXCJdLFtcIkthemFraHN0YW5cIixbXCJhc2lhXCIsXCJleC11c3NyXCJdLFwia3pcIixcIjdcIixcIisuIC4uLiAuLi4tLi4tLi5cIiwxLFtcIjMxM1wiLFwiMzI3XCIsXCI3MTcyXCIsXCIzMTJcIixcIjczNjIyXCIsXCIzMjFcIixcIjMyNFwiLFwiMzM2XCIsXCIzMThcIixcIjMxNVwiLFwiMzI1XCIsXCIzMTFcIixcIjMyNlwiLFwiMzEwXCJdXSxbXCJLZW55YVwiLFtcImFmcmljYVwiXSxcImtlXCIsXCIyNTRcIl0sW1wiS2lyaWJhdGlcIixbXCJvY2VhbmlhXCJdLFwia2lcIixcIjY4NlwiXSxbXCJLdXdhaXRcIixbXCJtaWRkbGUtZWFzdFwiXSxcImt3XCIsXCI5NjVcIl0sW1wiS3lyZ3l6c3RhblwiLFtcImFzaWFcIixcImV4LXVzc3JcIl0sXCJrZ1wiLFwiOTk2XCJdLFtcIkxhb3NcIixbXCJhc2lhXCJdLFwibGFcIixcIjg1NlwiXSxbXCJMYXR2aWFcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCIsXCJleC11c3NyXCJdLFwibHZcIixcIjM3MVwiXSxbXCJMZWJhbm9uXCIsW1wibWlkZGxlLWVhc3RcIl0sXCJsYlwiLFwiOTYxXCJdLFtcIkxlc290aG9cIixbXCJhZnJpY2FcIl0sXCJsc1wiLFwiMjY2XCJdLFtcIkxpYmVyaWFcIixbXCJhZnJpY2FcIl0sXCJsclwiLFwiMjMxXCJdLFtcIkxpYnlhXCIsW1wiYWZyaWNhXCIsXCJub3J0aC1hZnJpY2FcIl0sXCJseVwiLFwiMjE4XCJdLFtcIkxpZWNodGVuc3RlaW5cIixbXCJldXJvcGVcIl0sXCJsaVwiLFwiNDIzXCJdLFtcIkxpdGh1YW5pYVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIixcImV4LXVzc3JcIl0sXCJsdFwiLFwiMzcwXCJdLFtcIkx1eGVtYm91cmdcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwibHVcIixcIjM1MlwiXSxbXCJNYWNhdVwiLFtcImFzaWFcIl0sXCJtb1wiLFwiODUzXCJdLFtcIk1hY2Vkb25pYVwiLFtcImV1cm9wZVwiXSxcIm1rXCIsXCIzODlcIl0sW1wiTWFkYWdhc2NhclwiLFtcImFmcmljYVwiXSxcIm1nXCIsXCIyNjFcIl0sW1wiTWFsYXdpXCIsW1wiYWZyaWNhXCJdLFwibXdcIixcIjI2NVwiXSxbXCJNYWxheXNpYVwiLFtcImFzaWFcIl0sXCJteVwiLFwiNjBcIixcIisuLiAuLi0uLi4uLS4uLi5cIl0sW1wiTWFsZGl2ZXNcIixbXCJhc2lhXCJdLFwibXZcIixcIjk2MFwiXSxbXCJNYWxpXCIsW1wiYWZyaWNhXCJdLFwibWxcIixcIjIyM1wiXSxbXCJNYWx0YVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJtdFwiLFwiMzU2XCJdLFtcIk1hcnNoYWxsIElzbGFuZHNcIixbXCJvY2VhbmlhXCJdLFwibWhcIixcIjY5MlwiXSxbXCJNYXJ0aW5pcXVlXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwibXFcIixcIjU5NlwiXSxbXCJNYXVyaXRhbmlhXCIsW1wiYWZyaWNhXCJdLFwibXJcIixcIjIyMlwiXSxbXCJNYXVyaXRpdXNcIixbXCJhZnJpY2FcIl0sXCJtdVwiLFwiMjMwXCJdLFtcIk1leGljb1wiLFtcImFtZXJpY2FcIixcImNlbnRyYWwtYW1lcmljYVwiXSxcIm14XCIsXCI1MlwiXSxbXCJNaWNyb25lc2lhXCIsW1wib2NlYW5pYVwiXSxcImZtXCIsXCI2OTFcIl0sW1wiTW9sZG92YVwiLFtcImV1cm9wZVwiXSxcIm1kXCIsXCIzNzNcIixcIisuLi4gKC4uKSAuLi0uLi0uLlwiXSxbXCJNb25hY29cIixbXCJldXJvcGVcIl0sXCJtY1wiLFwiMzc3XCJdLFtcIk1vbmdvbGlhXCIsW1wiYXNpYVwiXSxcIm1uXCIsXCI5NzZcIl0sW1wiTW9udGVuZWdyb1wiLFtcImV1cm9wZVwiXSxcIm1lXCIsXCIzODJcIl0sW1wiTW9udHNlcnJhdFwiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcIm1zXCIsXCIxNjY0XCJdLFtcIk1vcm9jY29cIixbXCJhZnJpY2FcIixcIm5vcnRoLWFmcmljYVwiXSxcIm1hXCIsXCIyMTJcIl0sW1wiTW96YW1iaXF1ZVwiLFtcImFmcmljYVwiXSxcIm16XCIsXCIyNThcIl0sW1wiTXlhbm1hclwiLFtcImFzaWFcIl0sXCJtbVwiLFwiOTVcIl0sW1wiTmFtaWJpYVwiLFtcImFmcmljYVwiXSxcIm5hXCIsXCIyNjRcIl0sW1wiTmF1cnVcIixbXCJhZnJpY2FcIl0sXCJuclwiLFwiNjc0XCJdLFtcIk5lcGFsXCIsW1wiYXNpYVwiXSxcIm5wXCIsXCI5NzdcIl0sW1wiTmV0aGVybGFuZHNcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwibmxcIixcIjMxXCIsXCIrLi4gLi4gLi4uLi4uLi5cIl0sW1wiTmV3IENhbGVkb25pYVwiLFtcIm9jZWFuaWFcIl0sXCJuY1wiLFwiNjg3XCJdLFtcIk5ldyBaZWFsYW5kXCIsW1wib2NlYW5pYVwiXSxcIm56XCIsXCI2NFwiLFwiKy4uIC4uLi0uLi4tLi4uLlwiXSxbXCJOaWNhcmFndWFcIixbXCJhbWVyaWNhXCIsXCJjZW50cmFsLWFtZXJpY2FcIl0sXCJuaVwiLFwiNTA1XCJdLFtcIk5pZ2VyXCIsW1wiYWZyaWNhXCJdLFwibmVcIixcIjIyN1wiXSxbXCJOaWdlcmlhXCIsW1wiYWZyaWNhXCJdLFwibmdcIixcIjIzNFwiXSxbXCJOaXVlXCIsW1wiYXNpYVwiXSxcIm51XCIsXCI2ODNcIl0sW1wiTm9yZm9sayBJc2xhbmRcIixbXCJvY2VhbmlhXCJdLFwibmZcIixcIjY3MlwiXSxbXCJOb3J0aCBLb3JlYVwiLFtcImFzaWFcIl0sXCJrcFwiLFwiODUwXCJdLFtcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFtcIm9jZWFuaWFcIl0sXCJtcFwiLFwiMTY3MFwiXSxbXCJOb3J3YXlcIixbXCJldXJvcGVcIl0sXCJub1wiLFwiNDdcIixcIisuLiAuLi4gLi4gLi4uXCJdLFtcIk9tYW5cIixbXCJtaWRkbGUtZWFzdFwiXSxcIm9tXCIsXCI5NjhcIl0sW1wiUGFraXN0YW5cIixbXCJhc2lhXCJdLFwicGtcIixcIjkyXCIsXCIrLi4gLi4uLS4uLi4uLi5cIl0sW1wiUGFsYXVcIixbXCJvY2VhbmlhXCJdLFwicHdcIixcIjY4MFwiXSxbXCJQYWxlc3RpbmVcIixbXCJtaWRkbGUtZWFzdFwiXSxcInBzXCIsXCI5NzBcIl0sW1wiUGFuYW1hXCIsW1wiYW1lcmljYVwiLFwiY2VudHJhbC1hbWVyaWNhXCJdLFwicGFcIixcIjUwN1wiXSxbXCJQYXB1YSBOZXcgR3VpbmVhXCIsW1wib2NlYW5pYVwiXSxcInBnXCIsXCI2NzVcIl0sW1wiUGFyYWd1YXlcIixbXCJhbWVyaWNhXCIsXCJzb3V0aC1hbWVyaWNhXCJdLFwicHlcIixcIjU5NVwiXSxbXCJQZXJ1XCIsW1wiYW1lcmljYVwiLFwic291dGgtYW1lcmljYVwiXSxcInBlXCIsXCI1MVwiXSxbXCJQaGlsaXBwaW5lc1wiLFtcImFzaWFcIl0sXCJwaFwiLFwiNjNcIixcIisuLiAuLi4uIC4uLi4uLi5cIl0sW1wiUG9sYW5kXCIsW1wiZXVyb3BlXCIsXCJldXJvcGVhbi11bmlvblwiXSxcInBsXCIsXCI0OFwiLFwiKy4uIC4uLi0uLi4tLi4uXCJdLFtcIlBvcnR1Z2FsXCIsW1wiZXVyb3BlXCIsXCJldXJvcGVhbi11bmlvblwiXSxcInB0XCIsXCIzNTFcIl0sW1wiUHVlcnRvIFJpY29cIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJwclwiLFwiMVwiLFwiXCIsMyxbXCI3ODdcIixcIjkzOVwiXV0sW1wiUWF0YXJcIixbXCJtaWRkbGUtZWFzdFwiXSxcInFhXCIsXCI5NzRcIl0sW1wiUsOpdW5pb25cIixbXCJhZnJpY2FcIl0sXCJyZVwiLFwiMjYyXCJdLFtcIlJvbWFuaWFcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwicm9cIixcIjQwXCJdLFtcIlJ1c3NpYVwiLFtcImV1cm9wZVwiLFwiYXNpYVwiLFwiZXgtdXNzclwiXSxcInJ1XCIsXCI3XCIsXCIrLiAoLi4uKSAuLi4tLi4tLi5cIiwwXSxbXCJSd2FuZGFcIixbXCJhZnJpY2FcIl0sXCJyd1wiLFwiMjUwXCJdLFtcIlNhaW50IEJhcnRow6lsZW15XCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwiYmxcIixcIjU5MFwiLFwiXCIsMV0sW1wiU2FpbnQgSGVsZW5hXCIsW1wiYWZyaWNhXCJdLFwic2hcIixcIjI5MFwiXSxbXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJrblwiLFwiMTg2OVwiXSxbXCJTYWludCBMdWNpYVwiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcImxjXCIsXCIxNzU4XCJdLFtcIlNhaW50IE1hcnRpblwiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcIm1mXCIsXCI1OTBcIixcIlwiLDJdLFtcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIixbXCJhbWVyaWNhXCIsXCJub3J0aC1hbWVyaWNhXCJdLFwicG1cIixcIjUwOFwiXSxbXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcInZjXCIsXCIxNzg0XCJdLFtcIlNhbW9hXCIsW1wib2NlYW5pYVwiXSxcIndzXCIsXCI2ODVcIl0sW1wiU2FuIE1hcmlub1wiLFtcImV1cm9wZVwiXSxcInNtXCIsXCIzNzhcIl0sW1wiU8OjbyBUb23DqSBhbmQgUHLDrW5jaXBlXCIsW1wiYWZyaWNhXCJdLFwic3RcIixcIjIzOVwiXSxbXCJTYXVkaSBBcmFiaWFcIixbXCJtaWRkbGUtZWFzdFwiXSxcInNhXCIsXCI5NjZcIl0sW1wiU2VuZWdhbFwiLFtcImFmcmljYVwiXSxcInNuXCIsXCIyMjFcIl0sW1wiU2VyYmlhXCIsW1wiZXVyb3BlXCJdLFwicnNcIixcIjM4MVwiXSxbXCJTZXljaGVsbGVzXCIsW1wiYWZyaWNhXCJdLFwic2NcIixcIjI0OFwiXSxbXCJTaWVycmEgTGVvbmVcIixbXCJhZnJpY2FcIl0sXCJzbFwiLFwiMjMyXCJdLFtcIlNpbmdhcG9yZVwiLFtcImFzaWFcIl0sXCJzZ1wiLFwiNjVcIixcIisuLiAuLi4uLS4uLi5cIl0sW1wiU2ludCBNYWFydGVuXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwic3hcIixcIjE3MjFcIl0sW1wiU2xvdmFraWFcIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwic2tcIixcIjQyMVwiXSxbXCJTbG92ZW5pYVwiLFtcImV1cm9wZVwiLFwiZXVyb3BlYW4tdW5pb25cIl0sXCJzaVwiLFwiMzg2XCJdLFtcIlNvbG9tb24gSXNsYW5kc1wiLFtcIm9jZWFuaWFcIl0sXCJzYlwiLFwiNjc3XCJdLFtcIlNvbWFsaWFcIixbXCJhZnJpY2FcIl0sXCJzb1wiLFwiMjUyXCJdLFtcIlNvdXRoIEFmcmljYVwiLFtcImFmcmljYVwiXSxcInphXCIsXCIyN1wiXSxbXCJTb3V0aCBLb3JlYVwiLFtcImFzaWFcIl0sXCJrclwiLFwiODJcIixcIisuLiAuLi4gLi4uLiAuLi4uXCJdLFtcIlNvdXRoIFN1ZGFuXCIsW1wiYWZyaWNhXCIsXCJub3J0aC1hZnJpY2FcIl0sXCJzc1wiLFwiMjExXCJdLFtcIlNwYWluXCIsW1wiZXVyb3BlXCIsXCJldXJvcGVhbi11bmlvblwiXSxcImVzXCIsXCIzNFwiLFwiKy4uIC4uLiAuLi4gLi4uXCJdLFtcIlNyaSBMYW5rYVwiLFtcImFzaWFcIl0sXCJsa1wiLFwiOTRcIl0sW1wiU3VkYW5cIixbXCJhZnJpY2FcIl0sXCJzZFwiLFwiMjQ5XCJdLFtcIlN1cmluYW1lXCIsW1wiYW1lcmljYVwiLFwic291dGgtYW1lcmljYVwiXSxcInNyXCIsXCI1OTdcIl0sW1wiU3dhemlsYW5kXCIsW1wiYWZyaWNhXCJdLFwic3pcIixcIjI2OFwiXSxbXCJTd2VkZW5cIixbXCJldXJvcGVcIixcImV1cm9wZWFuLXVuaW9uXCJdLFwic2VcIixcIjQ2XCIsXCIrLi4gKC4uKSAuLi4tLi4tLi5cIl0sW1wiU3dpdHplcmxhbmRcIixbXCJldXJvcGVcIl0sXCJjaFwiLFwiNDFcIixcIisuLiAuLiAuLi4gLi4gLi5cIl0sW1wiU3lyaWFcIixbXCJtaWRkbGUtZWFzdFwiXSxcInN5XCIsXCI5NjNcIl0sW1wiVGFpd2FuXCIsW1wiYXNpYVwiXSxcInR3XCIsXCI4ODZcIl0sW1wiVGFqaWtpc3RhblwiLFtcImFzaWFcIixcImV4LXVzc3JcIl0sXCJ0alwiLFwiOTkyXCJdLFtcIlRhbnphbmlhXCIsW1wiYWZyaWNhXCJdLFwidHpcIixcIjI1NVwiXSxbXCJUaGFpbGFuZFwiLFtcImFzaWFcIl0sXCJ0aFwiLFwiNjZcIl0sW1wiVGltb3ItTGVzdGVcIixbXCJhc2lhXCJdLFwidGxcIixcIjY3MFwiXSxbXCJUb2dvXCIsW1wiYWZyaWNhXCJdLFwidGdcIixcIjIyOFwiXSxbXCJUb2tlbGF1XCIsW1wib2NlYW5pYVwiXSxcInRrXCIsXCI2OTBcIl0sW1wiVG9uZ2FcIixbXCJvY2VhbmlhXCJdLFwidG9cIixcIjY3NlwiXSxbXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsW1wiYW1lcmljYVwiLFwiY2FycmliZWFuXCJdLFwidHRcIixcIjE4NjhcIl0sW1wiVHVuaXNpYVwiLFtcImFmcmljYVwiLFwibm9ydGgtYWZyaWNhXCJdLFwidG5cIixcIjIxNlwiXSxbXCJUdXJrZXlcIixbXCJldXJvcGVcIl0sXCJ0clwiLFwiOTBcIixcIisuLiAuLi4gLi4uIC4uIC4uXCJdLFtcIlR1cmttZW5pc3RhblwiLFtcImFzaWFcIixcImV4LXVzc3JcIl0sXCJ0bVwiLFwiOTkzXCJdLFtcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLFtcImFtZXJpY2FcIixcImNhcnJpYmVhblwiXSxcInRjXCIsXCIxNjQ5XCJdLFtcIlR1dmFsdVwiLFtcImFzaWFcIl0sXCJ0dlwiLFwiNjg4XCJdLFtcIlUuUy4gVmlyZ2luIElzbGFuZHNcIixbXCJhbWVyaWNhXCIsXCJjYXJyaWJlYW5cIl0sXCJ2aVwiLFwiMTM0MFwiXSxbXCJVZ2FuZGFcIixbXCJhZnJpY2FcIl0sXCJ1Z1wiLFwiMjU2XCJdLFtcIlVrcmFpbmVcIixbXCJldXJvcGVcIixcImV4LXVzc3JcIl0sXCJ1YVwiLFwiMzgwXCIsXCIrLi4uICguLikgLi4uIC4uIC4uXCJdLFtcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsW1wibWlkZGxlLWVhc3RcIl0sXCJhZVwiLFwiOTcxXCJdLFtcIlVuaXRlZCBLaW5nZG9tXCIsW1wiZXVyb3BlXCIsXCJldXJvcGVhbi11bmlvblwiXSxcImdiXCIsXCI0NFwiLFwiKy4uIC4uLi4gLi4uLi4uXCJdLFtcIlVuaXRlZCBTdGF0ZXNcIixbXCJhbWVyaWNhXCIsXCJub3J0aC1hbWVyaWNhXCJdLFwidXNcIixcIjFcIixcIisuICguLi4pIC4uLi0uLi4uXCIsMCxbXCI5MDdcIixcIjIwNVwiLFwiMjUxXCIsXCIyNTZcIixcIjMzNFwiLFwiNDc5XCIsXCI1MDFcIixcIjg3MFwiLFwiNDgwXCIsXCI1MjBcIixcIjYwMlwiLFwiNjIzXCIsXCI5MjhcIixcIjIwOVwiLFwiMjEzXCIsXCIzMTBcIixcIjMyM1wiLFwiNDA4XCIsXCI0MTVcIixcIjUxMFwiLFwiNTMwXCIsXCI1NTlcIixcIjU2MlwiLFwiNjE5XCIsXCI2MjZcIixcIjY1MFwiLFwiNjYxXCIsXCI3MDdcIixcIjcxNFwiLFwiNzYwXCIsXCI4MDVcIixcIjgxOFwiLFwiODMxXCIsXCI4NThcIixcIjkwOVwiLFwiOTE2XCIsXCI5MjVcIixcIjk0OVwiLFwiOTUxXCIsXCIzMDNcIixcIjcxOVwiLFwiOTcwXCIsXCIyMDNcIixcIjg2MFwiLFwiMjAyXCIsXCIzMDJcIixcIjIzOVwiLFwiMzA1XCIsXCIzMjFcIixcIjM1MlwiLFwiMzg2XCIsXCI0MDdcIixcIjU2MVwiLFwiNzI3XCIsXCI3NzJcIixcIjgxM1wiLFwiODUwXCIsXCI4NjNcIixcIjkwNFwiLFwiOTQxXCIsXCI5NTRcIixcIjIyOVwiLFwiNDA0XCIsXCI0NzhcIixcIjcwNlwiLFwiNzcwXCIsXCI5MTJcIixcIjgwOFwiLFwiMzE5XCIsXCI1MTVcIixcIjU2M1wiLFwiNjQxXCIsXCI3MTJcIixcIjIwOFwiLFwiMjE3XCIsXCIzMDlcIixcIjMxMlwiLFwiNjE4XCIsXCI2MzBcIixcIjcwOFwiLFwiNzczXCIsXCI4MTVcIixcIjg0N1wiLFwiMjE5XCIsXCIyNjBcIixcIjMxN1wiLFwiNTc0XCIsXCI3NjVcIixcIjgxMlwiLFwiMzE2XCIsXCI2MjBcIixcIjc4NVwiLFwiOTEzXCIsXCIyNzBcIixcIjUwMlwiLFwiNjA2XCIsXCI4NTlcIixcIjIyNVwiLFwiMzE4XCIsXCIzMzdcIixcIjUwNFwiLFwiOTg1XCIsXCI0MTNcIixcIjUwOFwiLFwiNjE3XCIsXCI3ODFcIixcIjk3OFwiLFwiMzAxXCIsXCI0MTBcIixcIjIwN1wiLFwiMjMxXCIsXCIyNDhcIixcIjI2OVwiLFwiMzEzXCIsXCI1MTdcIixcIjU4NlwiLFwiNjE2XCIsXCI3MzRcIixcIjgxMFwiLFwiOTA2XCIsXCI5ODlcIixcIjIxOFwiLFwiMzIwXCIsXCI1MDdcIixcIjYxMlwiLFwiNjUxXCIsXCI3NjNcIixcIjk1MlwiLFwiMzE0XCIsXCI0MTdcIixcIjU3M1wiLFwiNjM2XCIsXCI2NjBcIixcIjgxNlwiLFwiMjI4XCIsXCI2MDFcIixcIjY2MlwiLFwiNDA2XCIsXCIyNTJcIixcIjMzNlwiLFwiNzA0XCIsXCI4MjhcIixcIjkxMFwiLFwiOTE5XCIsXCI3MDFcIixcIjMwOFwiLFwiNDAyXCIsXCI2MDNcIixcIjIwMVwiLFwiNjA5XCIsXCI3MzJcIixcIjg1NlwiLFwiOTA4XCIsXCI5NzNcIixcIjUwNVwiLFwiNTc1XCIsXCI3MDJcIixcIjc3NVwiLFwiMjEyXCIsXCIzMTVcIixcIjUxNlwiLFwiNTE4XCIsXCI1ODVcIixcIjYwN1wiLFwiNjMxXCIsXCI3MTZcIixcIjcxOFwiLFwiODQ1XCIsXCI5MTRcIixcIjIxNlwiLFwiMzMwXCIsXCI0MTlcIixcIjQ0MFwiLFwiNTEzXCIsXCI2MTRcIixcIjc0MFwiLFwiOTM3XCIsXCI0MDVcIixcIjU4MFwiLFwiOTE4XCIsXCI1MDNcIixcIjU0MVwiLFwiMjE1XCIsXCI0MTJcIixcIjU3MFwiLFwiNjEwXCIsXCI3MTdcIixcIjcyNFwiLFwiODE0XCIsXCI0MDFcIixcIjgwM1wiLFwiODQzXCIsXCI4NjRcIixcIjYwNVwiLFwiNDIzXCIsXCI2MTVcIixcIjczMVwiLFwiODY1XCIsXCI5MDFcIixcIjkzMVwiLFwiMjEwXCIsXCIyMTRcIixcIjI1NFwiLFwiMjgxXCIsXCIzMjVcIixcIjM2MVwiLFwiNDA5XCIsXCI0MzJcIixcIjUxMlwiLFwiNzEzXCIsXCI4MDZcIixcIjgxN1wiLFwiODMwXCIsXCI5MDNcIixcIjkxNVwiLFwiOTM2XCIsXCI5NDBcIixcIjk1NlwiLFwiOTcyXCIsXCI5NzlcIixcIjQzNVwiLFwiODAxXCIsXCIyNzZcIixcIjQzNFwiLFwiNTQwXCIsXCI3MDNcIixcIjc1N1wiLFwiODA0XCIsXCI4MDJcIixcIjIwNlwiLFwiMjUzXCIsXCIzNjBcIixcIjQyNVwiLFwiNTA5XCIsXCIyNjJcIixcIjQxNFwiLFwiNjA4XCIsXCI3MTVcIixcIjkyMFwiLFwiMzA0XCIsXCIzMDdcIl1dLFtcIlVydWd1YXlcIixbXCJhbWVyaWNhXCIsXCJzb3V0aC1hbWVyaWNhXCJdLFwidXlcIixcIjU5OFwiXSxbXCJVemJla2lzdGFuXCIsW1wiYXNpYVwiLFwiZXgtdXNzclwiXSxcInV6XCIsXCI5OThcIl0sW1wiVmFudWF0dVwiLFtcIm9jZWFuaWFcIl0sXCJ2dVwiLFwiNjc4XCJdLFtcIlZhdGljYW4gQ2l0eVwiLFtcImV1cm9wZVwiXSxcInZhXCIsXCIzOVwiLFwiKy4uIC4uIC4uLi4gLi4uLlwiLDFdLFtcIlZlbmV6dWVsYVwiLFtcImFtZXJpY2FcIixcInNvdXRoLWFtZXJpY2FcIl0sXCJ2ZVwiLFwiNThcIl0sW1wiVmlldG5hbVwiLFtcImFzaWFcIl0sXCJ2blwiLFwiODRcIl0sW1wiV2FsbGlzIGFuZCBGdXR1bmFcIixbXCJvY2VhbmlhXCJdLFwid2ZcIixcIjY4MVwiXSxbXCJZZW1lblwiLFtcIm1pZGRsZS1lYXN0XCJdLFwieWVcIixcIjk2N1wiXSxbXCJaYW1iaWFcIixbXCJhZnJpY2FcIl0sXCJ6bVwiLFwiMjYwXCJdLFtcIlppbWJhYndlXCIsW1wiYWZyaWNhXCJdLFwiendcIixcIjI2M1wiXV0ubWFwKChmdW5jdGlvbihuKXt2YXIgZT1hKG4sNyksdD1lWzBdLGk9ZVsxXSxjPWVbMl0scz1lWzNdLHA9ZVs0XSxmPWVbNV0sbD1lWzZdLGc9e25hbWU6dCxyZWdpb25zOmksaXNvMjpjLGRpYWxDb2RlOnMscHJpb3JpdHk6Zixmb3JtYXQ6cHx8dm9pZCAwLGhhc0FyZWFDb2RlczpsfSxkPVtdO3JldHVybiBnLmhhc0FyZWFDb2RlcyYmbC5mb3JFYWNoKChmdW5jdGlvbihuKXt2YXIgZT1mdW5jdGlvbihuKXtmb3IodmFyIGU9MTtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXt2YXIgdD1udWxsIT1hcmd1bWVudHNbZV0/YXJndW1lbnRzW2VdOnt9O2UlMj9yKHQsITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe28obixlLHRbZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG4sT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpOnIodCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG4sZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkpfSkpfXJldHVybiBufSh7fSxnLHtyZWdpb25zOmksZGlhbENvZGU6XCJcIi5jb25jYXQocykuY29uY2F0KG4pLGlzQXJlYUNvZGU6ITB9KTtkLnB1c2goZSksdShjLGUuZGlhbENvZGUpfSkpLHUoZy5pc28yLGcuZGlhbENvZGUsZy5oYXNBcmVhQ29kZXMpLGQubGVuZ3RoPjA/W2ddLmNvbmNhdChkKTpbZ119KSkpfHxmdW5jdGlvbihuKXtpZihTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KG4pfHxcIltvYmplY3QgQXJndW1lbnRzXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4pKXJldHVybiBBcnJheS5mcm9tKG4pfShjKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2VcIil9KCkpO24uZXhwb3J0cz17YWxsQ291bnRyaWVzOnMsYWxsQ291bnRyeUNvZGVzOml9fSxmdW5jdGlvbihuLGUsdCl7KGZ1bmN0aW9uKGUpe3ZhciB0PVwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLk9iamVjdD09PU9iamVjdCYmZTtuLmV4cG9ydHM9dH0pLmNhbGwodGhpcyx0KDc1KSl9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDgpLG89dCgxNSksYT1OYU4saT0vXlxccyt8XFxzKyQvZyx1PS9eWy0rXTB4WzAtOWEtZl0rJC9pLGM9L14wYlswMV0rJC9pLHM9L14wb1swLTddKyQvaSxwPXBhcnNlSW50O24uZXhwb3J0cz1mdW5jdGlvbihuKXtpZihcIm51bWJlclwiPT10eXBlb2YgbilyZXR1cm4gbjtpZihvKG4pKXJldHVybiBhO2lmKHIobikpe3ZhciBlPVwiZnVuY3Rpb25cIj09dHlwZW9mIG4udmFsdWVPZj9uLnZhbHVlT2YoKTpuO249cihlKT9lK1wiXCI6ZX1pZihcInN0cmluZ1wiIT10eXBlb2YgbilyZXR1cm4gMD09PW4/bjorbjtuPW4ucmVwbGFjZShpLFwiXCIpO3ZhciB0PWMudGVzdChuKTtyZXR1cm4gdHx8cy50ZXN0KG4pP3Aobi5zbGljZSgyKSx0PzI6OCk6dS50ZXN0KG4pP2E6K259fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuLGUsdCl7dmFyIHI9LTEsbz1uLmxlbmd0aDtlPDAmJihlPS1lPm8/MDpvK2UpLCh0PXQ+bz9vOnQpPDAmJih0Kz1vKSxvPWU+dD8wOnQtZT4+PjAsZT4+Pj0wO2Zvcih2YXIgYT1BcnJheShvKTsrK3I8bzspYVtyXT1uW3IrZV07cmV0dXJuIGF9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuLGUsdCxyKXtmb3IodmFyIG89bi5sZW5ndGgsYT10KyhyPzE6LTEpO3I/YS0tOisrYTxvOylpZihlKG5bYV0sYSxuKSlyZXR1cm4gYTtyZXR1cm4tMX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDYpLG89dCg4KSxhPVwiW29iamVjdCBBc3luY0Z1bmN0aW9uXVwiLGk9XCJbb2JqZWN0IEZ1bmN0aW9uXVwiLHU9XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiLGM9XCJbb2JqZWN0IFByb3h5XVwiO24uZXhwb3J0cz1mdW5jdGlvbihuKXtpZighbyhuKSlyZXR1cm4hMTt2YXIgZT1yKG4pO3JldHVybiBlPT1pfHxlPT11fHxlPT1hfHxlPT1jfX0sZnVuY3Rpb24obixlKXt2YXIgdD1GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe2lmKG51bGwhPW4pe3RyeXtyZXR1cm4gdC5jYWxsKG4pfWNhdGNoKG4pe310cnl7cmV0dXJuIG4rXCJcIn1jYXRjaChuKXt9fXJldHVyblwiXCJ9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNyksbz10KDExMyksYT10KDExNCksaT10KDExNSksdT10KDExNiksYz10KDExNyk7ZnVuY3Rpb24gcyhuKXt2YXIgZT10aGlzLl9fZGF0YV9fPW5ldyByKG4pO3RoaXMuc2l6ZT1lLnNpemV9cy5wcm90b3R5cGUuY2xlYXI9byxzLnByb3RvdHlwZS5kZWxldGU9YSxzLnByb3RvdHlwZS5nZXQ9aSxzLnByb3RvdHlwZS5oYXM9dSxzLnByb3RvdHlwZS5zZXQ9YyxuLmV4cG9ydHM9c30sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTE4KSxvPXQoNyk7bi5leHBvcnRzPWZ1bmN0aW9uIG4oZSx0LGEsaSx1KXtyZXR1cm4gZT09PXR8fChudWxsPT1lfHxudWxsPT10fHwhbyhlKSYmIW8odCk/ZSE9ZSYmdCE9dDpyKGUsdCxhLGksbix1KSl9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxMTkpLG89dCg0OSksYT10KDEyMiksaT0xLHU9MjtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQsYyxzLHApe3ZhciBmPXQmaSxsPW4ubGVuZ3RoLGc9ZS5sZW5ndGg7aWYobCE9ZyYmIShmJiZnPmwpKXJldHVybiExO3ZhciBkPXAuZ2V0KG4pO2lmKGQmJnAuZ2V0KGUpKXJldHVybiBkPT1lO3ZhciBiPS0xLHg9ITAsQT10JnU/bmV3IHI6dm9pZCAwO2ZvcihwLnNldChuLGUpLHAuc2V0KGUsbik7KytiPGw7KXt2YXIgdj1uW2JdLGg9ZVtiXTtpZihjKXZhciBtPWY/YyhoLHYsYixlLG4scCk6Yyh2LGgsYixuLGUscCk7aWYodm9pZCAwIT09bSl7aWYobSljb250aW51ZTt4PSExO2JyZWFrfWlmKEEpe2lmKCFvKGUsKGZ1bmN0aW9uKG4sZSl7aWYoIWEoQSxlKSYmKHY9PT1ufHxzKHYsbix0LGMscCkpKXJldHVybiBBLnB1c2goZSl9KSkpe3g9ITE7YnJlYWt9fWVsc2UgaWYodiE9PWgmJiFzKHYsaCx0LGMscCkpe3g9ITE7YnJlYWt9fXJldHVybiBwLmRlbGV0ZShuKSxwLmRlbGV0ZShlKSx4fX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXtmb3IodmFyIHQ9LTEscj1udWxsPT1uPzA6bi5sZW5ndGg7Kyt0PHI7KWlmKGUoblt0XSx0LG4pKXJldHVybiEwO3JldHVybiExfX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXtmb3IodmFyIHQ9LTEscj1udWxsPT1uPzA6bi5sZW5ndGgsbz0wLGE9W107Kyt0PHI7KXt2YXIgaT1uW3RdO2UoaSx0LG4pJiYoYVtvKytdPWkpfXJldHVybiBhfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTM1KSxvPXQoNyksYT1PYmplY3QucHJvdG90eXBlLGk9YS5oYXNPd25Qcm9wZXJ0eSx1PWEucHJvcGVydHlJc0VudW1lcmFibGUsYz1yKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSk/cjpmdW5jdGlvbihuKXtyZXR1cm4gbyhuKSYmaS5jYWxsKG4sXCJjYWxsZWVcIikmJiF1LmNhbGwobixcImNhbGxlZVwiKX07bi5leHBvcnRzPWN9LGZ1bmN0aW9uKG4sZSx0KXsoZnVuY3Rpb24obil7dmFyIHI9dCgzKSxvPXQoMTM2KSxhPWUmJiFlLm5vZGVUeXBlJiZlLGk9YSYmXCJvYmplY3RcIj09dHlwZW9mIG4mJm4mJiFuLm5vZGVUeXBlJiZuLHU9aSYmaS5leHBvcnRzPT09YT9yLkJ1ZmZlcjp2b2lkIDAsYz0odT91LmlzQnVmZmVyOnZvaWQgMCl8fG87bi5leHBvcnRzPWN9KS5jYWxsKHRoaXMsdCg1MykobikpfSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gbi53ZWJwYWNrUG9seWZpbGx8fChuLmRlcHJlY2F0ZT1mdW5jdGlvbigpe30sbi5wYXRocz1bXSxuLmNoaWxkcmVufHwobi5jaGlsZHJlbj1bXSksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJsb2FkZWRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5sfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiaWRcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5pfX0pLG4ud2VicGFja1BvbHlmaWxsPTEpLG59fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxMzcpLG89dCgxMzgpLGE9dCgxMzkpLGk9YSYmYS5pc1R5cGVkQXJyYXksdT1pP28oaSk6cjtuLmV4cG9ydHM9dX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoOCk7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBuPT1uJiYhcihuKX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiYodFtuXT09PWUmJih2b2lkIDAhPT1lfHxuIGluIE9iamVjdCh0KSkpfX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDU4KSxvPXQoMjApO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe2Zvcih2YXIgdD0wLGE9KGU9cihlLG4pKS5sZW5ndGg7bnVsbCE9biYmdDxhOyluPW5bbyhlW3QrK10pXTtyZXR1cm4gdCYmdD09YT9uOnZvaWQgMH19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDIpLG89dCgzNSksYT10KDE1MiksaT10KDI4KTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXtyZXR1cm4gcihuKT9uOm8obixlKT9bbl06YShpKG4pKX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRQUFBQUNtQ0FNQUFBQUNucUVUQUFBQ3FWQk1WRVVBQUFEaEhCc0NMWUgyeFFJR0paNG1Rb1VNbFQ3NCtmbjBOemJtQUFENFcxbm82dXNCQVFINmMzTDdBUUw2U0VqMEd4cmdNekZXdVZkRHNFSXZwaTdRQVFFQUtRRGhYRmYxOVMvQkFBSDIwaTc2K1VNMU16SjV4bmdBVXdNQUFuOEJmUUg0NituYTNkc0FRQUg1NVhOS1NFUUNad1BSMHRJWW14Y0FBNWo2MjBrQUEySUNqZ0d4d09PeEFBRGhibTFNYTYzMGxKUG1nSDM1NEY3M2g0VDYrbFlCQVRsT2xzOXJoZDFMVTYvRHg4Wk9hZFlBQUNFMFhOTnlsYzAyVnFiaFRqOWVmYlEzVXBNQkJNUDNwYVRUU0VxZkFnSUFBVTVZcWRiM3VMZE1ZWlpkb2x2QnplalQydTFlc2ZwWGZ0Qnh0dnM4aXpaZVpid0FCYTMyM2R5TXFzM3k4aGlIb3ZoOWtlSmdkTndDQnV0NXFOL0tPam9GS3VieDdFNkh2ZnRWb3ZjZEhCeG53R3JrdHdPa3NOcHVrdmM0Y1BQNDJBTUVZZlpXZ1BYOC9ISG4xTkFEUnV0dXJXdjR5OHFSbjkrV3Y5enhyMEhKSmlOMDFmaGpZbDkxZU1mMWpFcll3em1ObE1GeGNYQTBONmRTVmxqczJGWUlnUHlCZkhwempyajU2NDFHZ2I3bTJENzBmRFQ5L1FSc3ZkeFFrazIzdHJOQWxQVjVyWVltZXlMNXZtdzJyUFlKbGVvSlQ1NURvVXFyMWEyRkFnRXdQTXoxWUQzaHdNSXN6UzFTMFBEQTZNSXVjYkNpb3A3MngwTndjNk1HdndmaDRnRkFQL2hTMmxISVhtQUlKTUNUMXZ2bzE0UEFxejZqTlM0YmNqNnlTMDA4ZHNvSFA3NWFuSG5icWF2RmRIV3FYbkdjZEtGTlRkaHg1VzgvZzEybzJFZjNjZzRGdnZ1VHpwUHY1cVVKSUhDZ3ZmdmZ6V0wzb21HUmpvcCtkanFVeGlRSllMbnBsZ0tQdmFTblpFcDhUMGZzU3dadk5pOWhDZ1dmTkZPWG1GTEZncG4xODhvSGliKyt5UXpGdm1sOUhFYWhoeXR0YS9ySG8zdks0VTgzQVFDTVU0dXduV053TG0rKzRZYUs3b2ZCZGkwZ3hjdlFuUTZ4M2ZzZDFWWmZzU0VGNHdLZHRYbDR2MFVDbVprSjdYNjg5SWZyQUFBQUIzUlNUbE1BL3YzKy92NzVYZVcvR0FBQVNxVkpSRUZVZU5wOG5JdGZGTmNWZ0VHeHM3dXpDeXlJQzhqRFJSNEM0ckxMS2dZVmVZcUxiSXk2R0JSQ1ZGWVVWM2xZNUZFSm9HaklvL0VSYVJBd0RWYXRXcEMyUHFPZ2lZOUVUS0xSeGxocmZrbHMvNUtlYys2ZHg0NjBuNGsvWjRlZHVlZWJPM1BQbkxsRGdKWU53SklEaEI0SlJ1WUF5Y25KY1VETVppQ1krQW8vKzRmUm43VzNibDI0Y0d2ZmFGQlFhanlRSGdIbzRROFNGUlcxSUJRSlJ2VEVialZuenB6NWhQZzk1Nk9QM3Rxb2tIbzBLaXBZaFI0WUhRdDYrSERhajZQeDZlbnBwU1dMRm4wamNRczVkRXU3WFBpeGUrLzBtdWxFemJwMTYxNFZrQUYwZCs4QVRDYURRUjlzQW1KanQyelpFb2JNM1R3d01ENXVkenFkSnROaitDeHVRV2RuWjN0NzUzZmZ0VGMzNzkyYmRQUzQ1eWVYSzZPK3NSSll1WEpsZW9RZGNIWTZITzBPbTgxbVdSQnFKNXlBQ2REdmRoSW14R0F3blBua0o4NmZpSTgyZmc2OENUU00yTzFGOWVQWUhzS0FoT2dMK3NTUmtUNlB0NnNydjZ6TW03L29tMFpISStNZ2N1aWJnd3JRbmtPRkZXVmliMkppWWhheVpNbFVBcnhlNzQ0ZGlZa0xGNGFFNkVBQTdpa3NMQnlZT1hObU9BaUFpTm4rYjRlSGg4WHBSeUh3NjA4SFcwKzN4c1RFbkYwd1hHUjNJcm5aSzhFQUNuQ1lPbTNEelh2UFd1N2s1YUVBcHlvQ0ZFRC9iSWxzMGVueWRJWXp2OGZJaWQ4Q0tPQjdaR3pVNW5ENUhqKytFOHdqaDhZQklYcll2czBDYW9jeVMvTzlCWm1MdmdIUExGb0VCUHlXRm9oLy9Rc0ZiR2dRQjlLQTZPam9aZjlEUU1PT3g4QnMyQVVYSU1na2JCNkhJMjR5MWRjN1EyNkh6d3licTNmYzNydDNZakF0YlhBaUp1YWVPZXExRkpmZDdpb2F5TTRXckZZaHV3UUZqR0xmU0VvNm0yZTJMQWkyeS9GekFmVFB5TUZJaUI4RWxBbUNxS0lSQmV5WnREbUtyTUxJN1R1UEIzUkZ2UHNRVHYzWGZVVU9SNUZqTXJPOGRIbUJOMy9wTjQwWVA0ODVlK1doS0xzRGxBRER3NWJpWXRzS0VMQ2hBZzFFQXg4dlNRM1FzaVREMndBQ1RCMlBaNlBpQ0JRUUlzaWtnSUQyZGxPOTAxUWZjaHQ3aE41cHFxejhyaEw0TGpzYkFqeHY5WTdZLytUS3o4NittaWgwZ3dBSStQWWRpRDhtNlo0WjFxYzI3QUhXSXErOTl0cmE5TjFPRkJGdDBFWEQzc3k2TTZLQVBFaE12TXIydDlFN0NRRjY0SjhqVDUrZWVUd3VDaXBFUWV6eXRVMU9ldnNHeWpNeUN0b3lNa0NBY3Z5elNRREczK2V4dXh6RnhjWERKR0JKaFRnZVRRS1dUU1dnb2FGaDRlTU93K05JblM2VUJJU29CUmpIMjl1YkRmVXVWNzBPQmN3Q0FjTzVzQ3RnWHhVRW1GbStiMnp5ZUhZYkNCQ3lyb0lBcHcwRURDZkZuTDEzaGdTMEtmRXJBcHFpajRFQXMxbDNqd1dZV0oyV3lQYjNPN3VqU0VCT0NRL0UyNDhIMUFKRUVQQmpXLzdZV0diWFdLazNzNkMwclJRRUtQR0RnR2xSZG9qZjRiSFZlMGFZZ01VYmxpeEJBLzlYd1BYSGhvNm5yVHB6SUFvSTBRcG9iamE0NnV1TFFNQThFT0N3R0M2d0M5N1hHR0FRL0l2cHdIYUFBRGhGTFpZN1NUSDNxcXJNNWp3VW9NVC91N1hwTVVsdzZUZzljWHIvUkF5eW1RVjROU3RMNmdFTmt3NmJveDQvTy9YZ3NVOHRRQVFCQ2VsZCtabVptYVhMbHhjVUZKUVhvQUFsZmhKQTE5Nitlb2ZMVmx4Y2hRSWcvbVhMRnJ2UndQa3BCQ3lETTZCaTRlT25UNTlHbWdPNUFKMWFRQ2RjOUVKTURvZEJkM3Zldkprb3dHS2dZMlEzUTRBb0lKc0oyTGR5NWJuc1JSR3czcEpVSEJOVEZXTTI3ODViOGNXcEQ0a200c083bTFIQVJHdnJ4SDRtb0V3UUZkeHdEWGp6KysvWFhyQllIRDdoZXNkZ04xd0RsQ3NBWGtQU3V6SzlaYVdsR1ArTUdUTktsMjZENjN0MU5WN2prTFFhRkdDaDh4L2lyeG8rQ2dJZ2ZqVFFHVDM5NU5RQ0tpcG1SMzUzT25KOVlHQ2dPU3JZQU5kQ2JCbGdOTVlZUWNEZUpMb0NoNTZaTjMvbUxBZ1FnQ05VdjFzV1FPSHZPM2Z1M0hFdUlDL3YzajB6eEs4SWFGSUo0RXlRZ04vajVaOTQ0NDNYWC8vdFJ5RGdqOEJyWjgxNURwL3Z3UUMyQndrbGRDakFMWllYWVB5bDVUTUtsdDVxbEk4LzlZQTVzVEI0SHo1OCtEZkU0YmtnQU9QLytPTU43czRwQlh6c3hXdEFOUkFKSnlVS0FKS0FHQVFFdE9NMXdHRFE2ZkFhQUFKTUpsQnNzMW9wVGhSUVdhazBBQVhnZWlRUE1LLzQ0a09GRzAxTmR6ZkhLSEFCQlBPQUFyWitUL3gxYk5oaWM0RUFJQVRRRWZxU3J2enlzdnhNb0RSRGJDc3dicFBHK09vMHBDWjVDeEtHRnBCWmhaam9zYk5BSEYvMjhSUUN6cDhNV3ZjcDhpMmxicFJ1R1RYbzlaamFHV2NCVW9ZblFla2ZVRkpTc2dpQmRXejFDc1lYbDRpN0VwczFZUHFuWnFPS1ZPUFJGZGdlTld3M1N4SGpER2dhNVh0QUVHY09TMkRuQXJPUXduV00xTlRVZGJud2QwQThzbTNiZElDYVBaZVl4VEJ5MW0vYnR1M0FldHEzTmhVVk9DSkhBSXBVNnoyZWlJakFRTEJFb2x5dStjaWNPUWVROWNEb0Qra1BINlkvSEFaRlpHa2JoK1dxTlRYYS9TVWpjUWhyNXAvL0pmTnZaRG9oZlh2NjNjdCtmUFNSWVBENGJTOGdQaGRnM1NZL1B6K3paTzc3NzcrL0Mxa0Z2UHV1MFlpcDdnNWtJYVdlMmxSVThDZEJRS3lVM3RINm1YQjFjTmdoRzRIeDJDVUljK2JFRXJnOTVOTnJmUW1ReXZyYTJHbFN2QUt1OXQySmpDeWdKdGhPU1BteVBqbVdlUGFNTlhHV3NldTN4Q2VNZjA5UFpIUjN3N2ZUV3ZTWE5hZFVzT0RYZmhRQWNXZWxJY3VYTDg5Y05QZDkyT3g5UzBoSTNzU2FOUitBQUx6cUwxdzRHNkRVVTVPS1RpbWcza1EvUU92blg0Rk9ZYk41UERhTFZlZ1BpNXNmRzRiZzlpSWpJMmQvdWhzVEZZY0R4aWh6bFhrM0NDQVNzenJvUWw0TkFweXEzQmtGWU9DZ2J2Ymh3MnZXSEo1bDdHdy95SU9IVG9BQ01IRE1Jc1NPNjhkUUFBWE9IZjMySThGbFZiV2ZDMWliaHVOUXRDemdQcnZJVEh6d3dScTY2dStsK0RFeGtnVFFlbHBPRUVRMVIxZ1B3T1NCclo5M1pjc1ZPa1BncjlqdzJHUkZRQ1FKZUVpcDdPUllzZGxxdFhxS1Y0eHprWGFJSDRleFN6aHEzR0MwdE53SUJBR3JMaTVjWEZ1N0lmSW1Dc0FEZERwTkh2YStRQUc0S0FMUGUxcTBCeWdsV0ZDM253dklUSnNBUU1BaEVMQnIxYnZEYkgwVkNXaUhQSjRkTHgwT084SHM2RFkxNlhTMFRNTU12MVdDeEdndTlRRGFBYTBIQVhBcktRZytueURBdlZPczNBTW8vdld6UHgzcWcxUzJmR1NzeXV3NWVOQlR0Y0xZM3B3RDNjamhBR01QT2pwZVRPK21VNkdqbzJNLzBQRWlPVFpzNGNKZXQ1aFJPeFFadWVZd3RROE5SRE5BQU1iZmNmMnErM0ZLMzZVV1BiVWZpS0doUE1sb0xiTHlRWVRhUndJeU05Tk9UMHc4aWw1KzZOQnlFUER1dTdDYTFqTUI4SDEydkdqY1plUDYvc2pJL1daSWxQSVdnQUFsZmhTQVdBMzBmVWxBV0Q5KzFoOGVGcllsam40K0xGd25OU0J3OG9maDRSOHYyRUJBekxpbjZpanR6K0ZJRVIwT0FSQ25kMlA0RkQ4SmlQc1ZlbjlkN2RiUGY2cU1YTC8rSld0ZlVtdTBJaUFOY0xzVG9BZGN1dFNEQXBUNE44Y1lvUWVFU1BFeEFWMlpJQ0FhT2tEMElSQ3dkQllJS0dicmQzK1FqQUxnNjVFWS8vcFFkc1FwM3YzN0lWN01CUG55VEFTV2VRL1FxUVZzQ1JQc1BwOURtQmtldGlXWi96eXVwdlVMYkJZNC9mSDhoNU03dHVyb3RzVHZZSWUybUJoYlRnb0pTRlNPUHdtSWhkN1RWbHRiKy9uQSt2VXplZnRPOC9DbmN3RlgzVDVmZ3ErRkNaRGpSd0hZQStUNEZRSFIvZ0ltMlBvN3liSUFoQVJFemRraUgyOFNNUGRYSEN6V0VOaGphQnowR09RZHpMOFNka1hnYkprSkF1RDdKSUJuY2xIczhtZUdlbEJzYkJRS2dFUzI5YlROaGcxT0draTQrZXdKY2hINTl1YkZuK04ySFQ1OE1mTDcydHJ2MTk5a1BUUnByeHcvRTNBMUlTV2hyOGVla0hJWEJJaWFhNEJPTUxEMjh3TVlrQTVud1BKb0FySUhFTEFLb3Brd3cvR0grSk0vTUJxYndSL0Z6d1FrYjFIaXgxUlltNXFLMkFQb0FzQUZ4RUwvdDFoOFBrdXhJQndKaitNQ2NEWHZBU3grQUJLRjNTZ2dyVG9TRHZacGxucWYrTnRud0I4WUovNHdId1VjbmhsWlhiMytBd0FFTk8vOTF5ZXFYS0FtSzlIWGR5eWg1UkxSUTZQQUp4Sy8vK1FqcTBtVTI4OEY0Q2hBRjVIbEFBaUFJd3F3UTRvQ1lCU281cU9BRGdTRUFVcXZuNlZOVFhrUDRCK0FBUEJoYzFEVnBuaEVFT0xnK3doZkRRSXNDTjZwQUx0M0g1MU80MzkxUjBkMTlmN1cweWpnYjZTQWE1Z3psMlVvRnkvQ0tBZ1lqWCtoVVZBV01EMExCb3VXSXZpL0J3QUI4aUJJWUI2QTdlY0JvQUNrcHVZTGdESktTdiswZkVwQVNodXhRczRzWnpFMHFTa0pjS3FXKzMwOENUNks5RjVocWVsY2ViMmNKQjlsVUFaSHZNQy9IcDA0Y1dMK3ZQa0VwWkRTam8yY1dmL0dERkRoaTJCOXFGNEZwbjlxclBwK3Y5UTRnQ2VGTW5EMm1nV0dpTVhjeTVmL2Mxbm0yNmlvdDNaK3UzUG56cmYwK3JlSXdoTXkwZE9CdThFS0FRamwvb0tJWUN3blJuKzQ5dkRodFI4dkxPVVovQzFDU2FncFRwWndVNm9jZ2R5bFJKcW9rZmtDZVJGUEtIY2cra1BucFJ1QlZLeExiNWZZQ1VDRFo2UmZtekZOWVViQVcyOGlGVkFFMkxwNDhZWU42M1JGUlhZY3RLendsODFraXJqY0g5blBPOUd6eUdPaEMzWmUzZEVOWlZxVGliNjN0UkM3S1BGa0lkQ2tTcFdaZ0VzZkFnTHhHVEIvQmt0OXZVTmRRNGp4VnFWWVdka29TSWlVS3RQM1RaUXFSemdTSFRjU1A0UTdTbUpCalp3blU4YjNJcldja3d0MGRaVUVPOHNyR2JsSS9QYTNpVGNBdUwzZTlGYTYwRlV5VFFVSTJBbzA5dmMzMXNIWVVsY0lSVWNjZ0drVXpqUFlvaTVISGpqdzdCUGcyWUhRWUwxdXdjN1BFekh3a0JENFZsMGRDdmlNZUlLcFFoUExGT0dySVNFR3ZWWUFuTUtmelEva3FXOHBJQlNVR205QjExaFpxUWlnUklsZFZTaFRqRWhjbUdXNU1kaVNaMGJ5UUFBR2psRG05MEx3UjlTYkRQWHE1ZTF2UStBUU9mRGVlKzl0Mm5pdGZIbjZxd0w2UmFCZkVtQVM2bjBHUzErZllOWlpvaTd2T0xDRGh3LzBmQ3NLaEZRbXkrRUNMbEw4b1ZNTGFGSUorSnFudmhCK2FVR0JZTHpWS0RabXI5UUtvR3NvRStESXVtRnBHbXd4STRGbUVzRGpKd0ZGbm5yQ3hiQ0JBSVBMWDhEcmpZMDdHc3NoZmhRd1k5RTFJVFBkWDBCZFpiKzF0OWZYbndzR1FJRFRoSDNmWmpFTFpqTUk2UDhFL3JEd0x4MTQ5bzBrUUNjUXZTU0F4ODlTWllHaENCaVVCQUR6ZWVvTEFxaUlZN3oxeGtxQXQxWVJNRGlJQXRhakFJdWhSWXFmQlBENEdTOHdZSlozMGZvb3ZkTmxNRnpJaFZyTWFxaEtaY01wOEhwamQrV215c1J5Sm1EYXRXbGUrRjh0b0s2dVVSUjZCd1R4eTlydElNQU9BdXk0VVp1SVJjN0x2MVdGdi9MZ040Zjdqd0JYZExvclFPeVZaQkxBNDU5U0FNVFBCZEE0L21QYjBOZ1BwVU5qTXdRczRwWG1uSytFdHBJQUsrS2pWRmszR0IzZHBJUFVJL0xUQ0JPYytUeCtDSkRLMnF1eG9rTXNTVVVCdWp6NHc5WXYwTmNMcmhEZGhYUEhnVnUzanFmamhnVUZFUW9oNmFrcUF0NkNNN244Z2REYkp2YVhiOTlaVzJpMk93MkMxV2F3V0VReEVBV293bDhKQXBLbFZKWm5VaWlBeCs4dklFUVMwQ1FMT0FFQ1NycUdTaEZleERRR20rVFVYRW0xZFdCQXAxdFBBbXhRUzJQeDd3Nk1JQUZVMGVLQUFPWDRrd0FueHI4NmV6VVZKVmZINjAwM0VyR0x0R1QxWU5rOVlwb0dFbERYbnlBbTVQVFg3Z1FCZ1hhVEJVU05qSWhNd0lGamN2Z2tJSTZsd2lCZ0hoY2d4ODhGME9WQnAzdFZ3QWttUUlwZkFBRUNDdUR4Y3dHNGZiYk1CVWp4WTEzSnpNdmFqUE5RMW5ieXM3K0lVYXczaGVpS3RBVWExZklCRFFFYlFVQnQzUkVBNGdjQmVydkpJRlc0QWdPTFYwUW80Wk9BbjFscXJndjlGcm40d1ltL1VmelJVbXFMcVRFS0NQMGZBaFoxS2NkZm1GRmdsRk5wallCUVNZQkZPZjRvSU1La0EvQURRRzllb0ExUWI1RGlGNUdFblc5c0trK3NmRzlsOVpmdjFkYSs4OTdHdlJwQUFBNW5peXNXYjZoRnMrdjBVSUNSdm0wdUJnRTZDUCtnekRmZkxrUm1oNFJBMU1DM0p5N2k4cUNjMmdiTEJhTlhSd0ZnenFJaEJDV1FCNk0ybFU0T1UwWUI0Tk1vWGxFMk0xYm9EWWlPZ09VRjhTd0JBUEtScGNFR1hLWnJJSksrOHcwY0JSTExZUlJBTnFacUNOQVRFWkRsTXZEZktTazV4QW9nNnZtV2I5VEFZZjhVME91aGJJejhZVHFpbDFHU1NpYUFLc0FKUUVvS3ByTHpLZjB6S21oVDZUbkpRSVFlWWZrM3dBdW1CRFlXa2FyTmxQNnBTc01SR0pVcU40VDBEOWdvUTJtZ09oTlV1Z3VSY0t2Qi81TWtKRWJocDAxMVNDMEJHYVllRWF4NkNaNnliek1Lckh3YnhJQ2ZZSUwvVENUL21lOHVJVnBUQmo3UE9YbnlKRld2Tlg0aW9yNUt4aDBBeVlTMmFoeW5aUHFFQ0p3OGVkNHR1b2tjWG9VZTNmN09kaUpBZXc3ZGFuVDdMU2YxRWdQSStQaDRqQ0M0UDFkNGU2ZmVCQWdDcEs1RXhQeFlvcnRkb01jUmNVRU5CQXlMUk5TZnYyUkkyOS9XTFpNSTFKeXY1TENISzNDVkorVHQ2MDFPeDlOZmNjWkdHQktuclZMSHZjLzRDNFBxRTdBMXVSN0FxOURsUEQzZU9ZV0F5akovQVZnWHAra2YwQk5RZ0NCKy92Ym44UDAzQVJSQTh3ZjRXS1FEQWRpMHB5MFcweU1ZTEZCQUxvTGpBZzVESUlEYU4rNnpZaWNqQVVwMjN3RUNLSExrSElBQzVKT2VoakZZaGsrRzc3UDcyZkE0YlpWNnJoVDYzd2tTc0hqeFlsbUFWSVYrSGRra0NYaGc3Y1pIOGx5QTJrREN2ZDd4VGxSd0I3aDNEd1FnbjJQNEJCT0FSVURNUlVnQXhmL3k5MkU5ajJiQ0JBb21ZQThLTU1zQ3htMDJ1MGNFaEpSdDZ2aEpnQncvQ2VBVElod2ZtaEJIaE43NVljZmdZRk5JM3UySk5UZy80UUE4WDZqdW1DMVhtWk92N0FJT0F1OENxMlpwQkpSSlZlaE5ydzhQTnhXUE1nRVBzdElHQjlPNnBSNmdOcEJRNWVMOWl4UTd6d2lDUzhEVHdGK0F3SE1SWFFRRjFIS3grclBmdit4Smk4NnFRUUY3OXFBQVNsV1pnRkhiWDN3T1B3Rlo3QllucTBaYnhSVVkzWW5TelU1aXk0MUJ3K0F4M04rWmljTW9vTHJGY2txdU1xT1FoWTBIbngwNVdFN0w1eHNXQTZzUlRJeFNTL3ZHSmlmYlJsQUFqTThvQU1tS2pzN3FabDJFQkt5Y3RCTk9lMFJWRVliUDR3ODFuWUduSGpqTzlyT0g4QWVuQ2Y2STlCekIwclB5czJQSDhtSWdBTzE2RlBBWDIvQmZZR2dUQkJBd283eXRyWXZJQjdwS3RGVmNIdjhwNnA4a3dBRDNDWU05Mko5Q1E0dU5FTERMNEhQdFoxVzdTQkl3dS9IWmtTK2ZIYVRsazVVOC9uUEFzdFh4WGVXcjI5cFdWM28zYlhJTHhhTDdMU2JneU5VSC9VZFVBaTVJdWFVdUNnVElwNWc1ME1SN3dKSFBwQnFkTmtBQk1kM3NpZjc1NTJPNHpGTlZRVmlibVlrelFwSy9oUE56MkFJOVFDQUJRWlhaMERwOG1vN3ArNzUwYlJWWElCSlBuWklGM0lBeklQb1lWQzNOWC8rd3B4QUNmdEJpc0taaC9GekE3Tm1OQnlIK2crdTVBQ1YrRVBBT1h2dm8vdmdDVk9GR0pRRlhqc1JlWVFMT04xYm15dkhyelZIUHI5SnpHVjVqKy9BTXRlSnZGRDVsZG5vVGhtZVZjdkVvdXBsNTFIT3o1K2U3aitiaERCSVRYUjJzQXNhL2ZHMTZIRjZrMmkwV1c3MlZicWVES3VYNFNRQVpWTWlKR1JqSGk5RDE2KzE0SmU0MDZtOE1OZzAyUVFjNCs4TVN1SDBIQWJPUEREYjFZdndVY0xEcEdGQjU4R0N1RHA0OUg5UGptQVo3a0xmM2psd2ZjSXRWMkFORUpoYWU0SEVCRFJpL21jVVBBazVmWlJVSXFOUEMzV2ZpSSt6Ky9QQXpBUVl1Z1A4ODNjeUFnYnhqRUQ4S01LQk5FSUR4TDE5YkFnTHdDdDNzc2xJUHlNRzdQVXJ6cURKc1hxRVZRRlZwMVFRTjJGNVBqNjRZbzY5ZHNteERvVGFWNXN2Rnhhb3FOUngvbFFDNVB2SjIxZHViU0FDSEM2aWNWS1dhSUVBMVNJT0tSNEw0VDE2aEplYm9EWHdVNEQrZnpBYm9yQ1FoSElBSkZHd1Vzd3I1K1RBeGlKNCsvd1dSR3FRM0VEcE94S3NDbXZsVkVVRUJodEd4aXExYjRjemVBQlJxVTJudHNtWVV5Tm5PcTJQTUFncEFFcEFVNHZ4WGxHdks2ZVlqZnliK2VXS2V1a283bjlJejBTZC9nVCs5cnpHS0xCZmpuL3ZjZk5aRUhDL3A1cVN3aEZzUDhDOFRVbE55T0VZTkN4Nm1GbTRzVk5DbTB0cGxOd0RKY1VZT281ZnFvOFJiUklCdExPanJyK01manZLVXVtUWZjUnlobVJZQ3NGRy9VWlRJUlppdFVNcmRKZmpFaGJheTNOWDUrZTRMRjl6d3dDWC9RaTdkVEYvQy8rNWVvckk1UTYvbjJyWGIwNmEyb2dKOVE1dTZvelQxL1VJd3N2NEE4Q20xNXhjTkg4MEhsQVluQjh6b0UxMVlwY1haRWNDaWZSbEVXVmtqUVFLMk9yYktlVUZ1R1NBUW1LRkFBUU5SNWhKN2l3VFI2eFhzVHFHOHZBeitDdjVWVmNVZHZBOWQwb3FudjlNSmxScVkvNWlpM1o0MnRSV25uSUJobFplakhJQU40Qk1zNlB0c1FnZTE1NWQvS2tEdCtwZDNHdjNhR3hjUWFqY1JwY3V6Z2RLbCt6SW9jRUVvSjBoQW5hVk9MU0FqUXlUZ1d5Z2dERkRtRXVlWEZibUVDZ0dLQ3JsRlRzRWJGQndiKzBRcVk3YitIQVlCdVJ3dXZIZUE4ZFJTQkFJMDI5T210bHlBazRlY1FxWmdwa1M5TEVCK3RFUVRMT2o3TktFamt0cmpFZndZZWVkUC91ME4rTnBWWkhJV09TZExDMWFXbFdVdmx3UmtOSmFYVjVibmxnZTlLaUJEYVRETTJKaXZGZUN0OERueDFrY3dXZDNMOXdRRncvcUxOTjFqLzAxWWp3RkIyMUVRWlJRcDJ1MXBKMkNRQUE5ODZKRUYyR2s5TTVDZ3ZXZ3lBYk5sQWNIU2JKMWppRUgvenAvK1JNbnZBNEVRQTRicWNhNnRhMng1UVhiWGw4Y0xTQUQwZnpqNEdSbTV1ZVhUc0dKVVo2Z0ZxQWk1VHQxZ09CQVJrSGlnYnprVmRRdUVOTC9ZSFJ6N0pBd1VIRHQyRXdVZDFwdGNSVmkrTWhqc1JPRFUyNnUrZjU5dmp3TDBHUzRZZkpJQVBzSEJ4SmEzczZSOEs0RFBLVGJTQkE3V25wazRrelg0dzhRV0U0UlA2STZCZ0xjRjRFcXNKT0RIdHN5eHNkZnl4d29LVm1ZTTdHTUM0SjRCVG1CQlFBRXdFeFQwNFJRL0FDWkVZSU85Z29nWWVJTXBmaWtWdmVDVWppQVM4akE0dHFNbFBQejU0T0J6cktJZTFrTm15T0IzZDFOdjczNVMwaVBhSGhOZzBzSG1XTUFHMEFmd21WUDJ3SjBVdTFTanFBTUJzSFBXSHRnZkNPamVrU1VkZngwVGdBWnllaVVCNlYyUW90RkUwK3p4enN5Q3BjZXBCNVRMUGFCd0sydzRyM1lac25QbnNuV3J5eks4bWdiTDhXT0RlUTlnN1FXVHdiRXZYNGFIMzRRZUFPMEJBUVlYdGQ1Z2NBSU9lOFQvMk41RUVtMlBDNmpQcXpMM1NWM2NKQkF1bHVoQUR5QUZKSUY2UUFnS3dPWmcwUlo3d0lmUzhTY0JGTCtZazVNZ0NjalBoS2ZpRVAvNGVINStlNmNSQkdEMGpZMjVBQWpBQnRUbUxaTVRwZFg0UW9WSVFNZXdSQnlpbWh3T2Zmbjc5bVhtcDc5V3Z0WnROWkFBWFc5UTVyWGcyUER3bHpTRHBmWG5lZlBXNkVWMk0wR1BqK3dRa0haNzJna1lvb0I0bWp5aUpDREV4VTR5SmtBemVib1hCVUExVVJGZzRzYy9STWNGMERWQVRPQ1RyVUhBY2o3UkdPc2VCY2JqRkQ4VU1LalcrS3FBZmFvR3d4c2dVU2NyNVp0TnFzTXY5OElRdHhvRi9FNndXM0xUZzNlOWZCTE4yUGJ0ekpuUTRDSmJFVFFmQkRtS0hVS09kbnZhQ1JnMFNzRjgrbU4wMmhndzFVVURIaE5QZGFlY3NNSDZJeTM3dEtQQTJ6QmtzTXdicUZvUlVFTGpQODAzUnc4Z0FJSCtYMDRpU0VDZFpZbEtRSWJjWUlzRkJWUldvQ3V3Z01TWEM4NnlQWHZ3MmVIYTF6SUV3MUR3L1E0YUJabUROWkRxZXV3ZU5ncDRIUFVnUUxPOVZ5ZGdJRGVhcEFrWHRBeEtwRlIzeXA5bkV6cG8rUmNjL29uUGtGKzJlM25PQUI2QUZRR1FBRkpCbFJkcmwwTDZSMHpqaUVCaFZDSG1hZ1NlTUlkeXFFcEkyU3RWTG9sNEl2ZnJUS2lCdWg4K2RGKzdkbTFhNHd4TTUrN2V4ZjhDNytvQm51cEdST1F3dE52ajh5KzBFekFpL2xlcVMrbWU5dWUzMFZ4bld2NkZjVUppWjRTY05CSUI1OCtucEdBUkZsaUhiRWRZbGtuWmNyQUNhd0RDNStJaU1ZZm56VmVud25vRlN2S0RTSTRpU0p2cW5tUVVBclQvQ0lhYzN1b2wrT2VVeWJMMndTbWdEeFZsbU5ucENqU0h3akdXQ3FuK2p6T3dTajRMYmtlMCt3ODRENzE3eVJJbDFkeU81VktCd051bGpjRnZTbXhGOUtwVUU2bUptTXdSeFN0S2FxbXQ0cVpXRUZKZEtwMityL3lFL21RRGcvL1V1Z2c1dFNYZ1dSOENuOEVYNExNb1NyMEZBcXNVK3AxVW5KYmJXRGpkZndMRkY2VWV3ZFBuc1hvejNEbS9Idm15ekt0TnRmbnRjQm1DdHdCNzhIbjZKb0dneDhuQkxQREp5VG9FQlZDcUtjMzFyUWsyRFQvZDhlQkIveGFlQ2ZKeDNtbG40endJd0xqNTg3eVBsNEFBWEYxNXNQSWc1UWtnZ091aGVmeUxVOWtMR0ZLTm9CZ0VtQUQ0d0dESnc0c2taWjRDWW9VQ1Rjc3IwK0NtKzArZytJS0czYUtpTWJnWGgrbFZ1MHEwcVRZWElCMkVoaUI0bmo2RmdORmZVMFl4MWFqakF1UXE3QXRZdHR4K3NuREhnNFRZY0VrQXBFNVdsMEZuUmdGdDdqSkdCckdjdmcrSmJFZzlwcm9rUUlsL3lRWVVvRHdLZ3dJSkNGRGlOLzlQQVcrK3lWUGg2S3Zkd0tuZWdWUFlEUkpyTG5nOHJxTDYralp2R2NiL3ExZjcyaDJkQXN0b2xHTTFPaEN3U1JaUSt4NFhZUHUxMXdieGs0Qm1TNGlTK3I2ZzFQUHNCRngzcjBJM0NHTTlvQjVlcXJMVzAwdFhJdm1sdjBSc29FQmcvR3lQSUVDS253UzhNdVVGaGNpcGFONENQd0dYdUlEUHQwTHZKd1Y4Kzk3eXNuTDIvVGFmZDJRa28yOFB2S1cxNnZhcXRTVlkwY0wvOGE4cnNKNEpVSUFlc0VrU1VGc3JDYWl6K1ZJc0VEOEs2Tnk3TndSbWJkNWt6S2ZVTStUT1JDVHlRSnlEQW5SRjFxS2llcE1aaTZvaUU0dlpucXFCdW5wZFBXdmd1b2FLUGNSYVpFKzhWZ0RjT3hCMnhHSGZUVFZIa1FtNEpNOEUzU3FJZGVydGwyZTBjUUdUYnRIWFcrYkdIdUM5M2JhcmpRcWcvUWxYcnZUMzR6eDI4WldTMlBZM29GcW1FVkJYWi90K3pBS0wxQVAyRm9ld1FaZG5XaGovSXloTHl6MEEralowT2cvRUx3bW9vTC9VUFFBTU1EVjg5cms4dDFnclFMdU1OVWN1NEpJc0FBNy8xanAxRHlocnk4MWdQeC9mSnIrbFp4bXNXcnNJUzhDaUNEMUFGRmtQYUhDWGNUTG9JcmhURmlCeUFaaGtEdysxWG9ERlA2SUFhQzJQbndzb3ZuTjY5c0lIL2JIaHVFeFZZSU9uM3U3UlVaV1lyZ0VaREs4M28rQldJejc3eXRmcE1yT3pwVWRmdkFCSnIrblJWRmcyUy9XRE9YUFdHTFdQN2pCVlZndlFYZ1BteFBLM1hRN2pkbGJOV3V2T3lIRERHRkNlNFQxVjNKSFJobFZtOXF3TGdDcHpBTjZNSUEyRU53Z0V2T2N2b0E0WnR0UWlkYXpxNnBkNm5yMVREYU5BT0YvV0crZ2RZRjJnZ1ZXSlV4Y3ZvYmZVemhNZmw5eWlaMzhFZi9ZblQvR2hIak4zbHhLL1JvQTR0UUEvZXBOalZmR0RnUGcyT3Y3QWNuakQrN1ZGMmlwemdKczJMZVBkK1laeUVRU3dCeEIxQkFvQVZLbG54T2c0SFB3d2VWa3pnU0VxZmpFZkJzOHRBMTRyNFU5L3VRVVNvUHBHWHRSY3VmWElxejJBVWw5K0RRRDBOTkZUYVdJaHZWTkU3endoMUFQS1JHK1oyMXZtemJnTmx3WnRsVGxnSGFIa2FwaitiVXlodXV4R1JEOVYxWFV1d2Vmc3p2ZExScFdjamNHbktpQWx5SG1BNXJGeTlJQzZESzJaQ293Qy9ISTltbXZjaTFYalhqM0N5OWs1Q0diVTJsUmEyZmNpd3FnaFlMNm1TaG9FQ0hvaFNKcGtRYXZaemxtYVhUTlBLUVBQZVZHend1aVA5alU2b3dhdDBFTEdPZ1lJSVJRaFAzKzZ6UTlWZStmZmhPM1ZBdSs4bzB3SEZpU2svYXZDUXptall6QlhPZjNIcFh4S2lURkFVOVdOQzRKN1FNRWg1QkpkK2VtcTFKTlN4NjhTRTU5SlAzOHhxOE1ZN0xqUTJZNDBVOTk2cGN2aWEzZnE5WnBVV1Y5WUFTaTVVS3FlSmI2bkVpSDlvYnZEMkdjN0dBdVJiVXA3bitCTHZNYWZSRDgreDMzeW9hQTNoeDdXK2xldFlhNXlIMVRCWVo1Uy90QklhYWt4QUJJTGdrODRBQUV3bThFZ1lIbURDaHdzOFNBb2RUU09YOC9xZUJrV1RtV08wODFHR01hR0lUSitVa2tDNEptNlN4S0FnYWZjdVpPVFJPdjVPZC9Ud3lkVXJLdWd5UG5rdnlYeGVpZjhnUHltTFFyWWRYR0hyR0RITnFrSSsvSkpVa0pTVFBOenZaM2JaUFdDQ0loNXZETkI4SGlFaE9iMkJOci9LblhSdG1yRTdnQmdnbFlwbEQ5QUFBeUkvUW45Q1VmNjJaL0RrZ0FNUC9PNFJnQ2tyckRCcDJscEY2SEtGUjM5Q0FJS3h2WVdhZXIyUlRpeTIyazVSVUI4RG9kUFJBWllxdHlVbHRiRTdoVllXYnZZWXNHcU5wUzE5VTZNMzNEOU91VitlVkZ4c2FJWW0rQTNseGk1T0pFMExuYTJEdXFoUjlWYlBVNmVTZWhBUU1KNHJ3RExKcUczT1ljRTdEM1MzOTkvaEJIK1l4Lytob3NSRUZEMStIRVZDQkFZTHBjNjhUQm9kc2dGWUtLQ0V4Z21XdE5hNGZBbmJkNk1BdXlHRUlOc2dPSzFzdGtFSGhUQWp2Z2RpKzRlbXlGQ3l5MkRUUzJEeDJoQ1JSVGU5amtzSGsreERRUlVnUUNLdjZPamlhVytjYUlRMW4vNGluOTc0UEJEYitxTXZxc0RBZlZGa0hUZy9taDdGSU1MOTIvSHNsY0N0bGRkTmh2eTRWemxQcGloMXpjNlBGSWdDYkFYdWV6eWRITlZabUptcjhVSkJHVnE4bXRxcmZ3MU5MdGdoOTA1RlFIMHpoRGl3bVdXNkNRVjU4V3dHU0swM0RMWTB4UGRBOHRjQUx6S1piVjdxa0RBVVFkTS9UUjRyTlhWUHNnV2ZZYXpjV0wvS3ZIdzRWMGVqOGNIakdCN25yUmkvS2RoY2lZSzhOUkRIekJRL0NnQTZkWHAxaTZacFBaZ2U5VUNvQW9PMHhUelp4VE1hTy9xYWlZQmhOT3A3Z0U2VGVycEp5QXBxZmwwTlBhQUdCSmdja0ovdC92M0FDYkFnOHRNYUpMWmZJK2x4cFFxOXd5MnREUmRDdVFDaWkyQ1ZZRC9TTUNRMk9EMk5GU0k0dXJWdnRWTGZOZmlSQkY2d0FSbVN2dzl4WmRQeGpIKzFwNVFKcURlV2UvMHNQaWxIcEN4ZHUyNVpWN3NBU25ZM2dTVmdKSWhhYUpxR1FBQ25GYVh4d1YzYjBYMHgrVkloVGRKUVFDYy84ZnhWZG9TeUx5MEF1NFBSc05ESHJnR1RKQUFlTTNZTGlnQ0VEdE5wNkZsK2tEMDJXd3AwalVBM1RUQks0NDB1eHNFRkJkYm1RRFBibmh0cnEzQm5iSFk3VjY5dXN5N3VxeHNjV25jTGpIaDNlZHdRZEJ4QVU5YXg4WHhwS1JvTnJtYXJnRWU2QUN3R0JpcVJ3RXBuUU5DNWJsemk4V0J2YjFNd0locUx2R2lmQjcvMDhmTnpVOGZHd013QVBVRUEzaVRkSjlnRmlqK3FRV2NUdHYvRWxQaG4ydW1QMHJDdWI2M2xicHNPQzlqNDVNZkpnUytqMHhNVU81TXFUTG15c2VPbWVWVUdZQmtHZmpkNzE1TER4SXJ3SUNzNEZyY3JyQmRiUXBETnp1VDlpYlE0ZWNDMUtjczNYd2xkTGFuQ080eUlXVnZldzRJYUU2cXdwV2hmQUlIQ01ENGdmYW5UL0VVMEV3b0FBSHlNRWhQaXluMUZBaGEvNCtPckNkOFZJR0JvTlVZYkxuUHhpV0M2dmhxVW1EQ2hMSjZpbFI1SFEzL0pBR0p6MndvYTJqSXlLaklkV2ZrWm5qM2xNVHR5cVZNRjI3UzY0Q054bVpnc0VWdUw4OEQzSnhLRVovNnNCdk5nVjRCQlZqVSs0dUF1Y3FaYkpveWVRQUJlbi9pQVRGS3hOeVIwa2RLUFZtbVNldW4xOHhSa3MyNDUxOGNqZk5QUHJVVExwS1QvZGRyTXIwSUtRK1BseWlOTHlpSVR4OHFUVTh2dlZaU09pM3VQS1RtS2lENSsrcXVYbUc3YXJJRHJINUxWU0Fsak1yK0NLcCtxd2k0WE9QL0d4YTBWV0J0VmJhT1VTc1JCS2p2SmFnV1NRd2kwZW1JcXM0YnBHRWJvaXJrNmtJWlVnT095bnhGQkdyUVZubTF5NFhJTmlJS0NkQnl1ZnVxMzI5WTBGWk5NVFZWZlJCVngrWUkvL1RUbXpSYmRsbFFaWG52cVY1NlBrWVBSckoyN2JvQnI3bU5Ya0NHVDc5STl3cmVOa0hHOTRxQTdtNi8zeGdSS2ovNXBCM3JqNDR5aG9Helo4LytJMWlEdHIzYVpVcTE0WGVqQVRhc01yOHE0Q29GRGxNTDJXOVllRGc1T1RrRy9FQ00vVVB2NU51aWl4Y0t3TURmY0x1MzRxbUpBazVCeTYrelIyUEhVY0NxR3pleVJsSEEyYk8zeno3SGwzYUc1REszYlVFcUF6c05BVE5Gc3hCV3h3VUJmcjlzRFFWZzVNZ1o0T3cvNUJreFVReHRsVmU3WElpcDlzS0ZUNTlXVjBOcU9hV0FaL1JTWkZySEVSSndrcWFXVnJqZGNIWEdxYVY4R3QzNzcvT0hrM1UwVC9pbjhjNC9iZVVDQnFENUF4Zy96ZlBMV3JYcVJrdldoUXRObzAybm41Lzkram4wZ1BJaFZRL3daaEJkWGJ4STlPMnBEbUkvME5xNi94R3ZBZkp1VUJRSUFzN3krRW1Ba1NQZE1Hc25WR2lXVWNDR0RWa2RyVS8zVitlWnB4VFFUVDJnSXpyNnVrb0F4cnlhWmxheXVJK3N3bXlVQzRBQ2hKZ1U4eE1Uc0s1aXRUd1I4L2l0Yy9GcHExYTFvSURCNk1Hekw1NS8vYndFM3hDVm44WlpWZ2lNZ1FHQm9mME5GSnBSUlBSWlBRd2ZNV0lrTmc5c1ZnbUFhSjgvNTcrUWdaWUJIVnNHQVRES1ZEKzE1TjJQTkU4dDRCVDJnQ1BQb3ZkZitSTGZycWFudlZURVhMeE1GcENBTlpvVUxnQm55WmZGeEdTOERqV1lyY3ZTMjhiR2hvQWZmaWdGaG94cHE5NUZBV2VqbjhOekNSQmdGZnp3Q1l5WUdFV0FFai9sRVg0a3ZESVhtY2hwTmdxZFhBREdhM24rdkFyaVJRRjI5U1hBUUFLV1ZOOXZhbm9VVGZjV1UxOERHdi9iM0xtL1JWR0ZjWnhJRzViWlZjU0ltMHFMSUFHaDNHTUpJMjdhQWx1QlVLaEVOeXNUaFRBWFZrUWdLUWsxVzVRZVE3S3d4YXhFZmJSSGJBVUtWQ1JxTS9CU1BuYkIra3Q2My9lY3VleUI2cmZxYXhkd1ptZm4vY3laT2UrODV6M3ZjYjgxTXZLV2h3QlVZQXdMdndvNzVvY1pBQWhTbGJ5N203eHNBdkJ6VDE5ZjRjYzRVclFTSEJIS1BlREVnd2hBMC9FclZOVGcySlZiUWNscUJoZFVTbEJhUUx2UjJLNEFVTzBuUjBrRW9MU0E2cjlzQVhpNXNRV0krUUtrekRVd3pRNEFyRnpKQUt5YS9SbncxbzhlOTdtR2FRUkFUZnJoak9MaUoxYUNQbzJJWk9kUlV1S2tmS1QybHpFajQxa1lCaGhhcndEd1B3aU9LdmZWUStOMk13Q2p0MjdmdW4xc1Jndm9Pa1RxT0hPbWcvMUVKVFNvZGdDcXN2TnhMS1pKZWhiMDVUdWQvWGovazJBczk1aFl3bFNjZGpjVEFIcWFWWEZYcjRZQmdLMnpBWEJSYllHM3BqMGpWR0ZoRVhZQXBKdWc2OFlnTFd4TnZqZ0JTQWdESlNnQUhtWDJrMjhQQUVycTIrS09qMTY1Y3VYWXNWdkhvQVZvMTcreU1ualZQWUlNZEhUNk1MbXFsTXRMYWF3MDFmV1p6bDdWZmdMd2lTQWhWM2gyQUhFaFlXRlBoUzNBWE9UWm53RWtWbUZCZEkyRGxFNFFyQVF0ZnhrN0FYUnp3c0plQWlFQTBxTW9tTVoybUZwQTNmRXJxR09qdDhVV0lBSVFwOEh0MUNhN296YVA4VTZRVTdqMml5RHhmR2NDd0Y2Z0NpdnN3Zm5OQm1EWXU4S0NRWkRteERHOWpGcXBTZlZxK1U3ay9xRmVaQkptdmMxc0FkNGZYNzZUUnpnM2N6RUg4Sm9xOGZPaUs2LzU0WmtrY2poWUxnTkxpQkFsbzNTdVk0UjNIUHZhbTEvUXBsZGVvZTJYbnFLZzdKRTNRWGZUL25jTG9yM1hrV2k3R0hYMkpVSDJDUDhDWDEvSGh1d0lHQktNaUU5MHdGODhxSDJBOXUvdmlmMysrNGliSjVYWXRzU3pwcFR6RlhPRnhhdG5aQm9iNHovUVdjZ2s0czdHQmxNMTF6SENrVkRzVUdaaTl2UWJ2dGdVaFZ1alVuRHo0YXBMRkpYZGhFckIvV2NDTU1IMHBoOUl0QjMzSi9Hb3MyODVhRVBtd0VBMXpaUlo3ZXNvbDIwT2NKYmhGMXR4em1veFNxMVVuTERiS2QwK1hRazVLT2NySmxTSUNSckdadERKRmVDV242U285REtZc3RjaGtmQkRISUJKY3gwak5zRFlLaytjT3RsV2YybGU2dDZVZWpEOThIeS9nMkYxQjFscUxDVkl4TkgrZDdPM21iZzQ5Z01BQURBL2ZJaWk3VXJVZVlwRlpRRkFTNHNqMDNQQzJ1cUNETVdjZEY5SFM0TGNraU5KOEpVSnRweDBKZWg1bHU5UDA5emdueDRMeHM0QlFFdzdFZkRuNTl2NURiMGxvSzVjQVUrUm5ra3N0NVB5RXpBcVBWcHcwYy92WXVYbFJZc1FRSWN5V1FFaXp3b0F6WFVrQUJ2SS91MjMyaTZVNGVodFBieCsxOWY3dGRVZERPQUdVUlpXR08zL0hXcDRlR0ppZUpoK25MYzNaYS8vaHh5QXN2L1p3QmNnWGZBc2hxVVJRUHZBaUNPenhUV0FBQ0ljeFRJQlNFd3N0aFVyQU40TkQ0ZWRjWDlsbXB2RlVsRmVubUZKNXdQQVp2VjhIOEdHUWROUnNpR2drZzRBTUMvc3AwT1lGOFlBakFaZnhKNzJjaVVEUUxNMW9ENkdSTzhHSEFDM255SkNHeEtvVHVzb21BL1hKU0FWbzdqMWh3OVRKUCtnQmlBa2pQWkhCeWJ3M0F0UUp1cGM0QVB3eXp6VGhYb09nTFl6Z3hZNkpieWlEekFBQXo4bU9oS3lXMXhRRERxOTNFYkorWktVZ0lPMENZbTQvMW5tR2czai9sUnhZc01KQUpCUlBwMWh5WkpJQkFDUEx3SllEUURRZnZtUUUvTGlJRUtrRHIvei9XbktqbFE5ZWJFTENtU29BREFsaFJjOWpXaWg5dC9jZG1GQ3NqbHlzbkJlSG9Rd3cwTWdqaHNHcWF2a3VsYXhHZk40UUdxb2h5VFFJZnB4WHRTRnVJTU1BSnNPandZdGRrWktoNXozRG9OQjV4RkE1aVBsa2lPeHRSQUFDTWtBTXU1L0p4eUhScC82Rll1ejNYU1VRaTZ6L1ZSaGJvWmorZ2t2QUhUODFZNGVVaUVURHJ6QXRUOGtmd1QyTXdDYS9Sb0F1YjA1VWc4Z1VDdUdGdCtDbDcvL1FvMlUwSkk3Tnp2cjBnVWcyTloyT0t6dGk0Q0FTMjJzd2dNV1YrTUEyUFFwcHlRNVlRb1ZhRjVVSEFQd3pETmFSUWdNME1QRUxIUjF6enRhY3JvR0VsdGkzdWh3RmVZbVpwWGJaTG1ZdFFBYk5JWkUzUC9kcWZEaDRaQWplK2g4N0tXSkZyeStqVGY2eHNjdFdUSUhvRlNjRUhPVkVRQzFnSjhVQUpyOUdvRHVrZTV1THdCYXdnTUNhTDVRWXl0UDNEOTNMZ0NBQXh5c2d3ZEFXOEFYWDE5U0NoeUVnRGlBVWREeFkzSlpqWHpzT1A0OEwrV3dOd0FLaXRMdytRTU1RRTZPdytXQ2NWelhZQzRBZ0JabkswNU1sS1RzM01UaW5Pd3Myci9rVGtqSThCNTJQblp1ZjJQaitEaWNqd29nUUFHZzJzOEIrQUVBZUFaOGhBQVd3TWhTVVpHV2NsRmlSQUJuSUY3WVRTMmdRQUdnSlR6RTUvUk1Xb3NmeWM3ZHJ3Q29pNE83djY0T3J2L2RYK3NBUE1VQUVGdC82MTEzV2YwRDhPZDVLWFZoQUFBRGRCcUFlODg1NVhNdjRQRUpRRTdMQU5qZm5zc0JsTnR5Q0VDMkk0RURvTlBoNTJQbnQvZmN4cmx6ZlhObkFQaVZDczBOSzhKcGZQb0tFNkgzQzduRVN3a0FTdFlCVURPMDRRdmJ1elk4a29qS1JtVmRTa3VCZXdETDJvREN3aUEzVitzRlFJWUZLTWlHZ1pBMC9VZ0JpZE1mb21iTjVZMW4wMlF6TTFsWG14WGZBcjJBZy9jQ3RzS3NHZnZuNU5CRGpqQkF4UWtGd0YvbENvdXV0YkNkQVBCdXNBQUVBTkIxWEtJbFBPdzR6N09IdWQ2OHhJUEJCdElSaWhJZlFYMXRRUEZ2b245UkxCS3A1VmFJZFgxMUJSOUl6T1ZNbCtWMFZsME05dGVYYTFzYTc3VzMwY2lEdmwwR0xqVTdnOHZnN1Z1SGl0OVAvMk1KSU10UlBubXhmWDJ4RURnTjRoL3N2Ti9iZFkyTlVFUFd0Zml0bjVHMDdPSkxxZ0lvZHhlL2FVU20vSVFPREZ2cGNudnBlT1RwNjd4OUlZcUxrcjZTdERBMGpKZjQ2SVc4OUJEdHBvcUsrUmxyNXpjMnNjcWJWQ0ZpOWZjbmxWMklneVFyVXFmZHFYVStZZ2NHMmdjR0hHdDVKYVBxZWNuVFhxNW9oTjNob0RTK1dya0dYYy9QWG51dHRyeThkajJwSW1QTkphcVJUYUxjWGF4TEhNbTZ0QmlzUzZ4THNLRGpiZFMvN2NITXpYbXBxWHJuRlllNnBOY2sxWlVOUFdBd2VCR0l4OG5tcEJ4UVl0YXJjcG04eVZaVC9GSVZwRTlBRFVLbFRqRnNQSlVEdDFpbzJTb2x6eEpoVWhJMGZJWUcyaUdwMUhVNm1PNGJmK3czeDNVSkJVdGk3ZTZVbmxKTGFZSnN3dnkvOXM5ZSs5RlZsVlkxd3BLZkVRQVp6aWRYSTRDaUl2QlZPN2FBeTRaMWlYWEQ2M2c4QUVDdisrcjdQZ3RpYW5XSW9SdVQxa3RxeFlqUVJvTzU1cWdlQUJrT3B0SG9UbUtXZjFscmZrcFNWSDV3RldtWFVpSENrbjI5Ly9wY1MxWW9KRXNIZXdHUW4zMFdyZzd2RzRNQWdNTUZrOU5QeTJaU0Y1NVF0YXdxTTliZWxOSmpzY3M0QWorLzY5Q1NtNjYwdFBHaDhQREpVNlQwR3JPaU10UUpEcUNvQ0FCQXR5TUNXUG8yUm5yVVZ2RHNSaXFYcnpZQkV3ZkE3Q2NBY0Z6ekhBRkFJcmNmTWp6OGFxS1M5cHBTa2hRQWl1c01UOHpydWRjTHMwSWxxK1FOUVByNVovZ1Ard1lBRU5zYVpYZTU3S2NMNkF1RFErZjFIdzcyNzcyb3ByeEUySHQ2TEJ2a1ZDd2ZFYmtZNXVIdFRVc2JHZzhQUDh5dkdNLzgzTHVYcDhSZ1hlSVlLWE4zU1ljSVFHWjFoMG10SUNFVFZCdGRCZ0NxNUVaSUhUQUUrWW9BQ2tGVWpPMVZtOVdXbG1DdFhic0x6YS9hMWNNclJHU2ZMSng3L2VUMXJOQVY2clJLQ3JsSlhFcENoVStlQXk3LzZkTUhsQlpnY0cxdjhwOWZxVlJ3QUFDV1Vybk1ueTcvd2djQVFCUTBBQ0FRNGdVZ0gwb0xNQU93THZFaHFhT2taSXZrUkFEa09uTUFEMmdBMmljNUFJRUExaThBWWRMVVEzU0wrUm9NalhNZ2ZxQUFlSEhBaFhKejNUcWRYMXN4djhJZVhJcjJBNENicHdxdlg4L3RPWlhiZTNMdTNKdTVCSURYN1NVQU83OWtyUytWMXlUeENlSTdrQ0RtWjJodVNwNWZHYTBEVUN2bmc2Mm15SFAzc21sb2FlSGpZRCs4SHV0YndJVUxWbWJBZlFoZ1pFdEp5ZTRSSjlZbDFoSXNaUExzT0FDWFN3SHdEeTNndkNFMW1hem53dlVFRW5YRjJGTFNRTHo1dzU4RzhHUXR5alF3WDk5Y0k2dGJqTUs2dFpXck1Cc2VwWHlmRDhUc2RIY3hQZ01nbWI5YTFXU0ViTWFubnpVeWtMbks5LzA0UmJNYTczeUNPbU04cFBRdlRDTU13RzY0K0IxT3JFdU1ucGdlQUg4R3JGOVAvY0NUbStjODhvUTJYejM3amRYZ3lrb1ZXSEdGVjRkYm5WeFc5bWk4SGtDNVpBUHp5VUtvUmRhazJZOXFpTThoajRuc3Ywa0F3SDVkSFdIS2htZlp3RW5KQ0lCbGQydGZDRkhXT3FWT01SWXF0dFhnNWE5MktxN2tmWitmalFhaC9RUkFQMjN0UWRpT2RZa1B5ZEFEWmtZQ2dEME1nTXdCd1BhTmtJdE0yb2w2ZTEzRUk0cngrMEh2cDRNcksyVklhcFI0ZVRvVXBnOWV2bHJmQXVRRXV2NEtnQ3JOZmdLZ1h2L2p4MjhTZ0FXVnVqckNtNTlVQU1COEJwaTE1bE5tQm1uUGNXZ0JlL2xBSmVscmpMcGE1WFBjU2dRQXZyUW1vK2hxWWwzaVE5QU5kbEEzdUlkdFp5MkF0bTlXT2tFU0FuaUlseXdncFFmNXMxNkFUUmtCQUZCTkRUeTZkQVZBT3J4SjhJY2dZdUF0Z0VRQWFCb2d2d3V1d3pSQXFsdXNxeU84bVZvZTNRSmwxUklBcUtucEFwMVFGZkQxaTEvckJlN1o1T0psekZYbU11b2x1SnEwdVFPaXNwbVJNVVhxOXN4SS9CdmFxcVF6ck9QUzVSR25vOEQ1azQvS1dwaFR5ZkZWQ0NqTGFTaHFRckdMVDhMOTlidFFPRnBYQ1ZsSnBsQXlqRmxkWVhiNTUzbm5Vb1NTcmhtOFhkWHVXTys0TWVYdTZYSnhKWlN1U1Mwem1aYkUwdjVNNjFZRmVVVnh4VnpqSlNUdCszYXEya2lhZFlrUENKc2J1Y1NLRkVkUnI1QjBFWFROUmtpU0Fra2tMY3BxMHFLc3h1WmtFOU1GMmg0K1VXdlhMWmFGQUNSOUxxN2tyVEtUTE5mQTdpNjd1NmZIQS91disrRWJmUmgzbFpocnZJU1crTkNpMUR0ZkIra0dTbVpmNHVNa2FmVGlSYU5Za2VKb0JVaTNSQWd2MmhMTWhRRGdWOVUzUUFCcUJVTWFUY1dnSW5tcTlXR0hEOEoyc3dSWmVCWlVJOGlTcmpqNWZOcWNDS0FhQUZoTFM5MXVpNmZRMHBjTEFDQmVMdXUyaTduR1M4Q1RuUFljNWxObEVRQ1kvZHFQUDQ3c0kyMmVkWW1Qd1l1a3k1Y0JnRkNSNGloTGtPQzEwUkVBckJ4Ulg4ODdmaEVBVld4QVRiaGNFMHBwTExnMEJXQS9GbnFsTDRSWW9SM01SODFSQUN3ODVGeTQwTGx3RmdCN2Fxd2RGa3RUMCtDdXZzS0c3UVJBVDZCYXpEVUdBTzRtLzROMWRSUnBZUUNjVU53NVpJUUJtSDFPRWJNZkFZZ1ZLWTVpZ29TMlJBZ0JLTmkwcWRJTHdId09RQnRjakFxdVR6RXpBTnQzdEhkSFg1bC84Q0FrdDBKRVNKcll0RW1TN016K09ZME13TUxGY3VDOWdaSE9CMllDd1B4SWk2V25HZXJsaC9WdDcxdTk3bWtickIxMXFwZjVwOEZVODBPZmE3eGtTNUdudnF6YW55L2hRUUJDM2dSVjRRcEVDb0N5cE5ReUNXVmpkd0NaVHdERWloUkhLNTZBQkFsdGlaRHpiK3pmbjE5UWFkMVBldis4ajI0MU9XMTB0YldwZDdLcGxiZUF6QjNSN2RHWEt5SEJGWk9UelJOcGFSUFNwdTZiVEVZRzRKd01OMERnUXF6WWtLVGRvRmhlV2tZQWc0VTN3aERBRUFBb2xtU0lGbDFYWEZQNmZzbzFWbDNwaHJZeWVRVUFDQ0FBY08rL2lRb0IrMVVBTmRQMkdnNkFwQUVRSzFMa1ZjQm9mNVcyUk1qNTkvZnZ0OElCZEFEbUN3QlE1YWNHeTJYZUFycWpvN2ZERFhvc0lPQ0xBR29CUUNaSmpiTHlGaUE1dWFjbFJtR3BCWGo2K3BySHQyL2IzcGVidnU2SFloZzNPcVVrVGEzQy9TblhXQU13M2hlYzNOQ0FueWNBdkFWTTRRcFUrNTdoTFNEWnhBREU4QlpBNW8rTlhUU0tGU255TW1EQ1VoVlZsRkFCSlBmMnJ2QUM0RGNEZ0syOG5MR05wT3B1M2ZobU1MYVZHVHhocnZIM1RraUE1NThUeXBJNEF3R0FtTEFBNmUrOWxrTG9vUHY2R3ZxMk5RSUF1UDQyYmJoY3lEV21sNm0raGpvWWhWSUE3TnQzRGh2QXlEc2FBSktNQWdBb1pqLzhNWW9WS2FnT01hc29vVjZ3eXE2dVNtWEJSaDlLTU1DZk9ZRFFZTFdPTWRYeGhWemI5a0cwSDdTS0dady9YMGhJd09mL3VVajVoWHRuV1hMRE1GbGYwTmk0dlE5MWUxdGpGZ0E0TFdzR2RJbTV4clRFUndsK1hnT3diMlJxQ3V3bkFIa1Y2Z1FUcW1valV3c2crMEdYaldKRkNreVFXRW4yYXdDcSsvdXI2UXdZQUgwM2lBQlFCZHdUUlFEYkJyY3AwOHd1THpBOE5aRTBJeUZCdjJTRmtMQ0FBRmFVV2tpTnVZMEk0QlF2M2xDSjZoUnpqZGtTSDlybk56NU8yc2VFQVBnTUk4S0FBRkJLTndnQWhJb1VheUJ5dFZaZEltVG16RlNXS3d5dmZlQVBHMUNxbDdhS3llaXRzWHFEdC9CRjBMdUNnNkFnd3lyZGduQlplWjNzMEoxY1FxNHhTVCszYktkUS9TeVBhdzJYT0RWdFJvVUwxSXVVSU1IT1Y1Q1BuZ1pLZEQyOXo4NW96S3ZJeTFET0lDLzIyRzF5YzcvRHBlUDRhbkNDcStvTGd0ZEtUSWtnMTFsTVlGaGd6emFFWnR1M0tzN3liS3ZYYWU0MXJ0T2gxNE1QaU9kL1Awcm4rb3IyVUpSYVgweE5iQkk3S1VHTHllVjZjak9yMDZzdVAyZXNoYmYxRGJ6OWRidmRReEhnNTNadkFsM3dCK0hpYXQ2dUtpWkVRSjR1enNIRGRTaFhZL243Vkd1K21zQmd5YmNsSlJWYktRRUN0UHFmSms5LzhCTklLNHZ5NE16SjFTQ2Q2NnUzQitzSVU5MWp6WGRmSWdLdzdmeFlqVnA3M0EwZUFNQXNMNktsZDNZYjgyb2hpZlkwYVhKWHcyNklHSUdqQzY1bS9Ydy9uaEN4UmVlcUlvQ0hIb0wzYS83QyswYTZRYkthclA2bVZLVU03enpNUllZaURHenNKeEVBd0x1R0Z3QkttdFVCSU10SnVHS0ZlUDZVZWFxdWpvY0E5Rkg0SjBWUE10TG53eTkxTlVKK2VIb2RmRURaZjczYlU3NFpvcndqbWM0T3B4UCs3ZGdEQUNya3RXdlIvRlB1WGVON1NoREFJTGRmU1lqWVl0YlVoUUFndkpCRDloT0FNaWdGVjBQMkk0Q2dmSFRaay9zdGxqN29LUzJyODJDK2tQcWdQNzAyZG1XQ3liOHMxWjhWR2Ntb1hmT2VVNm1OaC9ycEE0bko3ZFlEMExtK3pCN0lQbndPd3hEd01rWEJRS2pMd3gwMUgvRE5QeVRSZ082SDYzYXFDN0tnSG44R0FUaWRJODZSamkwakNPQ0FkRnFxcGN2ZnQyY1BBK0JXN2ZlM1ZtTVVlSXZzVmRNalRoOWdNVmpOK1pSNXpxZTRKT1luSkNjbnBEb3MyUXpBbWd5clpNVW9MZXJvZ1lpalQrTzhRSDg3bTFUQ0sweUlBeDNUTHJmSHRVVURFQjUrOWl4emZRRUFXUE16ekN2NStVc0d3RVJEblhGaGg4blZCZ0NxL1JpbCtIQWRWWE1EZ3N4M3FEb0NBSnd4VUF0NHBHaExSd2tZbkpkd3VoWXZmOFA0SGc1Z0VPejNRL2xiZVlMRHdpSTlBTTE4QXFDbDM5TkF6S3FFMnY1Kys0YVQyZG5qRHB2RGtyNG1BMFliRlBzUlFBVzFBRHZaUHdzQXVtQ3YzUmdadVRFQ1lhYkhuNkh2RDUrQ2hCem0rc0oySkFDakFSaUdRZ0I0NWR0Q1F0ckFmaEhBT2dBZ0poeUFaNFpTeDlmem9QM2JKNXNhZHFQOXl4Q0FtOWx2cWxHbjJRVnFMU0RUQ3dERUdNV1hwUWhLZ01nR05UZnZMc3BPQjgrTnJyOEdJTWErMXQ2MVZuRjhaZ1d3eFRNOVBiNzdPUnhwb2loME9DWlk2QUE4L3F3c1AvczJiV2V1T3F4N0VoYkFBQ3dIeDdoWGNVdTJGblFLQ1FjRXdFbktkSElBM1o2R1BqSi9HUUxvUnZ2bjA4dVpIT204SDRLZ1JiS205dk1ROUFUVDMwZGgwSE1tQUNYQkozSDM3dXpzOU01dlRvS3VLTG9XbXB3VXN6WW1tWjloUWVjQmVoZ29qbERHR3FvVC9OaDZUOThqRDlGUUd3VmgyZmx6QUhnLy8venNrMStxUTNIY1VlTmxkR1lzY2JGWURYQ3lNUGdXNWZLUEZPRVZ6MnVmZERjVTdVSFJhblFScmpvLy8zd3pYQXZuNG9XNC91QUxSVjRWR25RQThPVWp5endUQU5sUGI5ZHpzdE5ucVJOc3NpWnJ2NjlaeTVvSHF6NTFBSmJSd2VmVmw0bUZ6eklEbDZrSkhDb0FubnJNdHN2ZWJrYk1qR2x6TTZLODJBdXl1d0Jsako1MGUvU3IwYVh2VGJWQ1N0YmlRTDcvc2kzNkNnMElnSG9CSHZaVkFNanFNeUlDKzMrZUFRSEsrcWM2d1d1Z2IwQWRZTUtsdEx6cUJOUDVwMm11cjdBZFdvam1lZVA1Q3RQbXhJU0RtVkhnMjdmM0dQVzZmUG5lQjVmcEVpeVdHcjJGN2g4RWw5VVVCM1RuUU5WTU1URVJXa3lZOUU5MWd0VVphbHlhbzh4RWp2VVJrdUJLcyszM0M4dmwrY3dWVGpoVXlPMmxUMkZ6NCtwT0RqYXRVQlc4UUl6U2dyZEgraFFMRTRQNmUrWjgvNzB2NWZxU2xaUmIwZkFLaUh6eklQN1JCNVh2RTQ4WFN0SmVUL0pJZ0lGWC9oZ1Q5bCs2ZE92eVZiQWVzM0xoWmw4b1d0YUtxYzNkS0V4QVNGNU1VaElrMkdwMGFwbUh2UGF5NEFXYTdsb3VSbWtmU2xERTZoTHpYTjl5UHF5Zi9sa3RhS0FWaFo4SjRwOVh2MDlNbUJEckJ0UGJJS1UwZEdQWEdHdWMzT3YxL1VzN2twTlBnUE9lT1VMTFRCaG5ScEhMOElHdC9BNEE5dTNNOGdLUUdxeXZLQUVBdkdwOXJXbUhEd2NaN3VMYWVreU0wbjdkdWxjVHJDNnZKQ3drSnZZME54Y2lBQ2krNklwQ3dmNEFJRFVKMTJsdWlxUGk3VTB6Vm84VDZ3YmpIQ0M1eFFNcm5uaW1MUWNBUVBONFNyM1hFaHY5eWIwZG4zZWNrV0VBNnhNQVFLVzlZUHpMYXVKUlpIcjk1L3NqQUhoTlNpaVRGZTBBWWhkd3JDbUVWRFZjTElOc3FtcmJ6WHNua2d4QktnQ3hYMmJ6L0haRW03dU80elMzc1pzOFlTRXh1Nkdwb1M4eFN3UFFCTjRndG9BeWNJNzkxWVdUTFZUUnlBR3lneHdSRWlscVlDQ0tIUjhBQUlFbnBxYzlIay96Z1pVQVlOdDRXcDIvbXV0OFg4Y0tXTDhpODB3bUFQaUVBN0JhNFhYRG1tVEM3YmdtTG5nc2ZIOEU4SGJtdnNkcmtoUkZZM0owUFR4Qys4RDhxMCtGZnljeHVWejhpclMzYnh1VWFnS1V1eXBVUWpueFAxU2hQd1lBWEppTTNoR2RhYTZ1cjc1OC9Gb09YMTB1TVhGZ29vNEJ5T0FBd0I5R0FGYXpkYjcvblR1L291NUFUaEtGVDdTb002cDFZR0RBN0ZJQWRIYy9MSzljT2VnWnZIRmdaWVN4TzNMSFVGVmNQYzhGQmdCd0FjNTB3RGcxMks4QU1PV2JVMVBML0hXbHVyU0ZsK2UrOW1ibXhwMG41M0dONFFjT1ltSGZ2cENyaTY2R2NBREYwK1BGSEVEM1c0NHVTZjZlNjdLTTl1UHEydWNDRnpNQWs1UFIzZDNSd0tucjFvM2oxMjQ2Y21DK2RnNmtyR0JZTUR0ckRnQjR3b1h6WkFIQUFyd0Y2QVpTcDgxRjJNbCtMd0N0dUNJN1hBUThQbmlLN201UEtkUmt1akhZOXhrQWtHRWxITWhZQVFJQkRNQUtBSERtREY1L0RtQysxZDhNdFdqTkJFRElIUVlBencwOHQvRWJQMFVBWUg0YnRnQ29hM3prNmxNSWdPUjA4aGJRUGZuTlpHdXhzcncvMUJ5bGkwOERaTHdGT01xdmdCZVFLYmNmYTI0NWRpMitSVW02N0x0emh3QkFjcFdMMXBTaEpDaWV6ZjByMTFJQ3dNMmZFOXZJazZOaGVxbUwrUTBRNDV2c2RnK3VQSkFOYTZRamdPNlk2S0ZkY1cxb0QyOEJvd2hBR2I1SDE5ZHFTakxubThvNEFOVitEdUNkalJ0L25qQXJnbHZnWUgySTRna2ZDWUZuZ0kyckdBVFBnSW5XVmtkRWhDL1hlVEhEZzAxelc3UW84d1JOY3lNQVpIOHVCRWEzQVFDY2x1ZWluRDVLZ3FKM0JkM0N5YkcxMnNnanJra2lxVklCREhvOGJzK043RFB2bm9GM0JZaGFENFhRS0FvSDhQbE1BRkRKRzk3VThnbUFFTFhHYm5Ebkg3LzhvV3JKdkJXM0ZFK1lYR0Y2Nk9nV09JUmVvRFRpdks4S1FDeE85cldMSHYrS0xpRUFOSC8vL2x6TVBUWVNBRGZsTk5McjhJdHMxakRvUlZERFZmR2hlbDlSQ1VoenZkZXNmYmgwR203L0d6Zk92UHNaQXRnMkZOYUc5cWdBa25xVHdYelNray9ZYW5aVzZBWEFmdHd1dU5yWUFuNzU3UmROU3czOWVrOFJBV2d4V0ZCc3UyMXV2SzltLzNteE9ObjdyekdWTS9uRzU0RFUxT05jWSt3alNpL2daZ3M1ditEOWZmTjBBMHZZVGFrTFFSTUdBQURuWWUrR01qdnV3Yy9SRlRhT1g5QzV5Z2dBNXRxZllRSU94cjkzclJFQUxIeTJoR2twYXZuOTNsRmFvZFJYYk0vNStQTjZHUVdoKzdlZk5JY1E2Vk45Y1R0VlVidE5DeXVIb2tUWFZIUjl4WFdneFlJVDE0VDlqY2JPNVoxR1RmL2tXdnVJcnFJWkd2THpabi8xOXpGVjEwREhyaDFGQVFzRGJ0ZFBpMXQyLzYvZndSZUtVVmdSVUtraXVNN0JJSEhKalBnTnR0TDQrQVRIQnA3cUVYWTNrOHlGRitNVkxnVDMxSGZmdmFMVDNUVE5MdmJtU1NXQlF6eSthSytQNkNyNlNkM04yN3NscS9MNzJPUmtQNWZIUFhyakdwVFNUa2lBUkQ2K1hWdGlZL0ZVMVRna09PeDhIYVVsTkJpYm1UQUZBbVFzbGI3a2YwamQwTU1OU05KcnFQV2dPZkVTQklobG0xek1xaUJtM2QzS3BEd1Q4aklxS3BUS1lwaVFVWks2NlVmK08rcnVDT1o2MTZvSkhBTm04MFFyZHFNREV4TVRyUzdSWHBZZkFJOUp0UUtEVlJyY3NhUFpuTVIvRjEzVG8rdHJJWEQ3eEJOK3RGMmJGbmQyVng4OEJvYXVVa0tETnBTem1VSnNXaDNpSTZWZjhnb2syUDM1SlFYTEEybHAzRHBhZHlqZUprTVZUdmpUQ0pxTEFLSklHb0MxYTVYallVSkdTY1hhSDNYSGYxR1pacWNtY0F4RVJiVU9TRkZWa2ptcWFWZVRoN3Z1OVcxMC9oeUFGVHhsclFKRHZ0UzhJM3E3bVFhQUNRQ3RLa1lWSU1OR2ZGVUFXaFNZaW52dEdvSkg0TldwWVFSQTVuTUF2TkN4NnVxV2ZpbTlMTDBzdjd3VDIyV2FsQ20zUW8wNFNYbDVTdmhxakNKQ1BDVDAvUlVqQTVBQ0FLbzlubW96QW5nWThzTFFYQVJ3M3l1YlZMNEU0UHNUZkpwZFk5R1pNN3N0NmJMVUNndlpWemhhTWx3aERic21ZaGdBUGdFa2dBRXdTYWI1SmovSWh1YWVVcjY1T1pvSWtPc1lsU0xaMEh4VXgyTythOVpuVkdDNUZPNUs4bm1CVlExVTNXcnEzR2NFWUI4bkFJT1p6TkdwZ1p1SzdWLzY1Y3VvblYreDFldDY0Y0pFbVNVNlBCVlpsYnlWcVFLd2dmZmZOd0FBWUxSNzZzN1pzM2ZPaHVBU0dua1pwMEV5NEtRb2Nxd0ZYZS9hRTZjYUczZHZjZTV1VExkTFhhNm1LanZzczJ1WGUyQkRKcDFQM0dGSWRxWnBmd1RBaXA2eFdkSmN4WHp6OWtXTHRwbFRDWUJ6QkE3T0FUU01SS3haejBwbWtQMFVRbE12LzY2cHgvWnQvdmJqdDBpUE1lMGY2ejhPa3JxM1MvQnUxSG5NV0VvTllLUDhGWThaeXQ0alc1bXpBY0JHQkQvZnVDR1RLM3k2NnV6Q3FwQjdoNTk2UUFFZ2J6aHdvRmJHSUdyc1RidmwrblZMS1FJWWNaNEJBTFlFZUplU1ZsUUg3eHFvdFJFQXZnUUZPMy9NRDhpWFRPQW9tV29DVkZjeGlRaVVwY0x2VU9SbXdrYm1UNGU5OGUxREVUTVhTbFl1ZjhnNUhMNSt4VHVxL0NKYlBhNWRLbWhucThkUkM5ajQxV2RINlFpbTBZZUtXZkNBYS85c0FGSVF3SUQ3eEFtb0pZcFI2YXFwczcvK092emRVK1NvcldYMkk0R2pFQ1BVWEdrSTVwWTBadFZDenRqdUpnS1E0SkFCQUowL2hzVzVJMFMrTXVUem9UMmFxNWhrM3ZiODh6dktUSmdSTXFDVXdmMDJyQU1BQ0s3a2cvRHdqOGE3ZitxeGR4Z0ExWDRDOEoxN2Fxb0I5QjJwWVVqV2QwdVJaWVBDQ3BNUlkwcEUrSHZVRmVPTFZHYW5LZ1VHUjNFeGFBWWdQT1RYaFhCMEJMRG9sRnJ1Z1FvK1JKUXFyeEtlOFhGUEk4MHkyelUrNE9senU4SnM0RXF6OHc4NTZCZkNBWkJybUpvcXJ0YVdhdDRCNVJMTFVnMmlheXE2a2tmYzRBUkc5MDJkMi9lT0JvRHNad0RlOVA3OWlLbkdoSTJRSFdHZWFkVG0zVkczTC9HdUt3d0FxTXBRaWhuM3dYY0JCQUN6Q29jUndDd0pHZkdseXFzVWVNdmpESURzbE9FQlVOdU9MV3FHS3p5cnE2amRCWVpyL1NkSFNiY2Fic0ZkUE1PMVJGZDR2S25xclgwa0FLRDFlaWdvdjAvVGFRNXlHZlMxL1VDbXo5UXl3NlFJdGE0d1lRQUFVZXdoYUZaZWhoNkdvakQ4K0xNbFpNVHpNc3FOSkFKQW1vQmJqUUNJcnZCZnU0cGRSbERYTlNaajU2MnhXVjFMK0t1aEk3OXFVVmVsTk5pTFhPTCt3Vnk5dll5clZ2Y3NrNlNXSythaWc5eStmUnRtdXBIUUZWYU9QcHZyTEU3TFUxUDUrVmZNY0lXdjNUYXUwcnVHc2RBUkxWOWVvR2FJNEtIb2FIeTdLQmdLaWxIaVErTHFjMHRBa2ZkNS94Nm5VeGlVMi9ENXIyVzg0V3J1MTdtR3NYWXNyWEFDd3JDOXZSQ0s3RXp2Z1RITEJKaWlQWHR4dGFEaHhZdWRjcjcyK2Z2UE1TMWVQSDBCQkRORXBuOUVuV1Y2TU56UFMyRSsvN1VncXRwMHNWZU5xaEtBNElJa1h0c0hBU1QwOURnZ09aKzJJd0IxcVN5SzZ0NXVoVnlMeUh6ZU55QUFwYmgzWUZGOTJ4Yk1IUFhvWGVGd1AzMmx2a2ZyZlA1clFWUVZDQnpuVVZJTlFHVkJ0VlJXaVFCNkNqZjA1QmJtOHUyMDNyKzY1TC9WeitpSmd2SWdoMlQrMXlzSXdKWVhXRXJOdXdCZ1U1STBHdHlHVDBHb3MzTndlWndmMlY5WFJ3QVcvQThBdUp2Y1EwMDhuZ0YxZ2hGQVFVRlNaV1ZONVFuNDA1a085cGZqRkJUdStzNG9uYjM5UnRNTGdTUjRjcit3RkFEdzYrL250K2o1ZWtPeUt5MDFkUlNjd2NwS0NwTURBSU9oTGFDdTdxNTZHQmY2UHdEd2JHdUtIc0tnRk9sV3dRbGN5aUs1c2xJNnNUVlpJZ0JRbldFdUFnZ1FBZkM2dmVOQUFJeS9GNnI2dkhzZkFJRHJqNWQvUVFBQzZFcEtTN05LMml5ME9EOERBS2o3NnF1NmVrUFEvd0xBamI2R29ZWkZ5Z25TTEtzQ3ZQM0xLcE8zZGxWMmlxN3ZUQURqN2p0Z1B5S0EvMElMb090UEFKNEhBRkpxMmw1cDlGRTY1Rlo0cG5BQXZ4ZlZQUnIwL3dBQVVkV0c2SkwzVUxpT01BS2drNjA4SVhWQk5yZm8ralpuc3VYNHVSWVpQWGo5STJWeTZUY2tsR3BMWENBQVdnRkNIbjBVQlJQTXR6NjZuQURnTTZEdkpnSm84UG12WmR3Rzl0K3JMYVM4YWdYWmo0THgySzFqb3VzSXdKUUhCcldZcTFHQjd3WTZLOVNFQlcySmk3c0NuamNTZ0hHOUt4eEdBT3JhR2g2OWpRQnUrL3pYTW82N3R3VnFLeW5mdjZxWHoyVkFiUVVBb3V2TEovZWdNQW84RE1Hd3lBbzFZeUZDWGVJQ0g0S0wyZ3hnLzFuU01Ha1pBdERLNnY0ZkFOdzJMdFV2cEx3S3BLdGsyem5EOVJXMGJOazk1ZnFjQlMybUhBcDF2SUlNc25FWi81MHBEQWJFTlAwUEFQemJBdSszUWFmLy9CbndKM2hWWnJEVXdCY2VBQUFBQUVsRlRrU3VRbUNDXCJ9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDI1KSxvPXQoODApLGE9dCg4MSksaT10KDg0KSx1PXQoODUpLGM9dCgyOCkscz0vXlxccyt8XFxzKyQvZztuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe2lmKChuPWMobikpJiYodHx8dm9pZCAwPT09ZSkpcmV0dXJuIG4ucmVwbGFjZShzLFwiXCIpO2lmKCFufHwhKGU9cihlKSkpcmV0dXJuIG47dmFyIHA9dShuKSxmPXUoZSksbD1pKHAsZiksZz1hKHAsZikrMTtyZXR1cm4gbyhwLGwsZykuam9pbihcIlwiKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDgpLG89dCgxMTApLGE9dCg0MSksaT1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIix1PU1hdGgubWF4LGM9TWF0aC5taW47bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSx0KXt2YXIgcyxwLGYsbCxnLGQsYj0wLHg9ITEsQT0hMSx2PSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgbmV3IFR5cGVFcnJvcihpKTtmdW5jdGlvbiBoKGUpe3ZhciB0PXMscj1wO3JldHVybiBzPXA9dm9pZCAwLGI9ZSxsPW4uYXBwbHkocix0KX1mdW5jdGlvbiBtKG4pe3ZhciB0PW4tZDtyZXR1cm4gdm9pZCAwPT09ZHx8dD49ZXx8dDwwfHxBJiZuLWI+PWZ9ZnVuY3Rpb24geSgpe3ZhciBuPW8oKTtpZihtKG4pKXJldHVybiBDKG4pO2c9c2V0VGltZW91dCh5LGZ1bmN0aW9uKG4pe3ZhciB0PWUtKG4tZCk7cmV0dXJuIEE/Yyh0LGYtKG4tYikpOnR9KG4pKX1mdW5jdGlvbiBDKG4pe3JldHVybiBnPXZvaWQgMCx2JiZzP2gobik6KHM9cD12b2lkIDAsbCl9ZnVuY3Rpb24gaygpe3ZhciBuPW8oKSx0PW0obik7aWYocz1hcmd1bWVudHMscD10aGlzLGQ9bix0KXtpZih2b2lkIDA9PT1nKXJldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gYj1uLGc9c2V0VGltZW91dCh5LGUpLHg/aChuKTpsfShkKTtpZihBKXJldHVybiBjbGVhclRpbWVvdXQoZyksZz1zZXRUaW1lb3V0KHksZSksaChkKX1yZXR1cm4gdm9pZCAwPT09ZyYmKGc9c2V0VGltZW91dCh5LGUpKSxsfXJldHVybiBlPWEoZSl8fDAscih0KSYmKHg9ISF0LmxlYWRpbmcsZj0oQT1cIm1heFdhaXRcImluIHQpP3UoYSh0Lm1heFdhaXQpfHwwLGUpOmYsdj1cInRyYWlsaW5nXCJpbiB0PyEhdC50cmFpbGluZzp2KSxrLmNhbmNlbD1mdW5jdGlvbigpe3ZvaWQgMCE9PWcmJmNsZWFyVGltZW91dChnKSxiPTAscz1kPXA9Zz12b2lkIDB9LGsuZmx1c2g9ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09Zz9sOkMobygpKX0sa319LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDQyKTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9bnVsbD09bj8wOm4ubGVuZ3RoO3JldHVybiBlP3IobiwxLGUpOltdfX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuIG4mJm4ubGVuZ3RoP25bMF06dm9pZCAwfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMjkpLG89dCgxMSksYT10KDM2KSxpPXQoMjcpLHU9dCgxNjEpLGM9TWF0aC5tYXg7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSx0LHMpe249byhuKT9uOnUobiksdD10JiYhcz9pKHQpOjA7dmFyIHA9bi5sZW5ndGg7cmV0dXJuIHQ8MCYmKHQ9YyhwK3QsMCkpLGEobik/dDw9cCYmbi5pbmRleE9mKGUsdCk+LTE6ISFwJiZyKG4sZSx0KT4tMX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPXJlcXVpcmUoXCJjbHN4XCIpfSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1yZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpfSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1yZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIil9LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPXJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIil9LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPXJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51XCIpfSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1yZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9cmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL05hdGl2ZVNlbGVjdFwiKX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9cmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy93aXRoU3R5bGVzXCIpfSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1yZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIil9LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPXJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Sb290UmVmXCIpfSxmdW5jdGlvbihuLGUpe3ZhciB0O3Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7dD10fHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKG4pe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJih0PXdpbmRvdyl9bi5leHBvcnRzPXR9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE0KSxvPU9iamVjdC5wcm90b3R5cGUsYT1vLmhhc093blByb3BlcnR5LGk9by50b1N0cmluZyx1PXI/ci50b1N0cmluZ1RhZzp2b2lkIDA7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciBlPWEuY2FsbChuLHUpLHQ9blt1XTt0cnl7blt1XT12b2lkIDA7dmFyIHI9ITB9Y2F0Y2gobil7fXZhciBvPWkuY2FsbChuKTtyZXR1cm4gciYmKGU/blt1XT10OmRlbGV0ZSBuW3VdKSxvfX0sZnVuY3Rpb24obixlKXt2YXIgdD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gdC5jYWxsKG4pfX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe3JldHVybiBuPT1uJiYodm9pZCAwIT09dCYmKG49bjw9dD9uOnQpLHZvaWQgMCE9PWUmJihuPW4+PWU/bjplKSksbn19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDQxKSxvPTEvMCxhPTE3OTc2OTMxMzQ4NjIzMTU3ZTI5MjtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuIG4/KG49cihuKSk9PT1vfHxuPT09LW8/KG48MD8tMToxKSphOm49PW4/bjowOjA9PT1uP246MH19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDQyKTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe3ZhciBvPW4ubGVuZ3RoO3JldHVybiB0PXZvaWQgMD09PXQ/bzp0LCFlJiZ0Pj1vP246cihuLGUsdCl9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgyOSk7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7Zm9yKHZhciB0PW4ubGVuZ3RoO3QtLSYmcihlLG5bdF0sMCk+LTE7KTtyZXR1cm4gdH19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBuIT1ufX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe2Zvcih2YXIgcj10LTEsbz1uLmxlbmd0aDsrK3I8bzspaWYobltyXT09PWUpcmV0dXJuIHI7cmV0dXJuLTF9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgyOSk7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7Zm9yKHZhciB0PS0xLG89bi5sZW5ndGg7Kyt0PG8mJnIoZSxuW3RdLDApPi0xOyk7cmV0dXJuIHR9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg4Niksbz10KDg3KSxhPXQoODgpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gbyhuKT9hKG4pOnIobil9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gbi5zcGxpdChcIlwiKX19LGZ1bmN0aW9uKG4sZSl7dmFyIHQ9UmVnRXhwKFwiW1xcXFx1MjAwZFxcXFx1ZDgwMC1cXFxcdWRmZmZcXFxcdTAzMDAtXFxcXHUwMzZmXFxcXHVmZTIwLVxcXFx1ZmUyZlxcXFx1MjBkMC1cXFxcdTIwZmZcXFxcdWZlMGVcXFxcdWZlMGZdXCIpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gdC50ZXN0KG4pfX0sZnVuY3Rpb24obixlKXt2YXIgdD1cIltcXFxcdWQ4MDAtXFxcXHVkZmZmXVwiLHI9XCJbXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMmZcXFxcdTIwZDAtXFxcXHUyMGZmXVwiLG89XCJcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl1cIixhPVwiW15cXFxcdWQ4MDAtXFxcXHVkZmZmXVwiLGk9XCIoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9XCIsdT1cIltcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXVwiLGM9XCIoPzpcIityK1wifFwiK28rXCIpXCIrXCI/XCIscz1cIltcXFxcdWZlMGVcXFxcdWZlMGZdP1wiK2MrKFwiKD86XFxcXHUyMDBkKD86XCIrW2EsaSx1XS5qb2luKFwifFwiKStcIilbXFxcXHVmZTBlXFxcXHVmZTBmXT9cIitjK1wiKSpcIikscD1cIig/OlwiK1thK3IrXCI/XCIscixpLHUsdF0uam9pbihcInxcIikrXCIpXCIsZj1SZWdFeHAobytcIig/PVwiK28rXCIpfFwiK3ArcyxcImdcIik7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBuLm1hdGNoKGYpfHxbXX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDkwKSxvPXQoMTcpLGE9dCgzMik7bi5leHBvcnRzPWZ1bmN0aW9uKCl7dGhpcy5zaXplPTAsdGhpcy5fX2RhdGFfXz17aGFzaDpuZXcgcixtYXA6bmV3KGF8fG8pLHN0cmluZzpuZXcgcn19fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg5MSksbz10KDk2KSxhPXQoOTcpLGk9dCg5OCksdT10KDk5KTtmdW5jdGlvbiBjKG4pe3ZhciBlPS0xLHQ9bnVsbD09bj8wOm4ubGVuZ3RoO2Zvcih0aGlzLmNsZWFyKCk7KytlPHQ7KXt2YXIgcj1uW2VdO3RoaXMuc2V0KHJbMF0sclsxXSl9fWMucHJvdG90eXBlLmNsZWFyPXIsYy5wcm90b3R5cGUuZGVsZXRlPW8sYy5wcm90b3R5cGUuZ2V0PWEsYy5wcm90b3R5cGUuaGFzPWksYy5wcm90b3R5cGUuc2V0PXUsbi5leHBvcnRzPWN9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE2KTtuLmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXI/cihudWxsKTp7fSx0aGlzLnNpemU9MH19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDQ0KSxvPXQoOTMpLGE9dCg4KSxpPXQoNDUpLHU9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyxjPUZ1bmN0aW9uLnByb3RvdHlwZSxzPU9iamVjdC5wcm90b3R5cGUscD1jLnRvU3RyaW5nLGY9cy5oYXNPd25Qcm9wZXJ0eSxsPVJlZ0V4cChcIl5cIitwLmNhbGwoZikucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuISghYShuKXx8byhuKSkmJihyKG4pP2w6dSkudGVzdChpKG4pKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcixvPXQoOTQpLGE9KHI9L1teLl0rJC8uZXhlYyhvJiZvLmtleXMmJm8ua2V5cy5JRV9QUk9UT3x8XCJcIikpP1wiU3ltYm9sKHNyYylfMS5cIityOlwiXCI7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiEhYSYmYSBpbiBufX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMylbXCJfX2NvcmUtanNfc2hhcmVkX19cIl07bi5leHBvcnRzPXJ9LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7cmV0dXJuIG51bGw9PW4/dm9pZCAwOm5bZV19fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgZT10aGlzLmhhcyhuKSYmZGVsZXRlIHRoaXMuX19kYXRhX19bbl07cmV0dXJuIHRoaXMuc2l6ZS09ZT8xOjAsZX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE2KSxvPVwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiLGE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9dGhpcy5fX2RhdGFfXztpZihyKXt2YXIgdD1lW25dO3JldHVybiB0PT09bz92b2lkIDA6dH1yZXR1cm4gYS5jYWxsKGUsbik/ZVtuXTp2b2lkIDB9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNiksbz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgZT10aGlzLl9fZGF0YV9fO3JldHVybiByP3ZvaWQgMCE9PWVbbl06by5jYWxsKGUsbil9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNiksbz1cIl9fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX19cIjtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXt2YXIgdD10aGlzLl9fZGF0YV9fO3JldHVybiB0aGlzLnNpemUrPXRoaXMuaGFzKG4pPzA6MSx0W25dPXImJnZvaWQgMD09PWU/bzplLHRoaXN9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189W10sdGhpcy5zaXplPTB9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxOCksbz1BcnJheS5wcm90b3R5cGUuc3BsaWNlO24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgZT10aGlzLl9fZGF0YV9fLHQ9cihlLG4pO3JldHVybiEodDwwKSYmKHQ9PWUubGVuZ3RoLTE/ZS5wb3AoKTpvLmNhbGwoZSx0LDEpLC0tdGhpcy5zaXplLCEwKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE4KTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9dGhpcy5fX2RhdGFfXyx0PXIoZSxuKTtyZXR1cm4gdDwwP3ZvaWQgMDplW3RdWzFdfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTgpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gcih0aGlzLl9fZGF0YV9fLG4pPi0xfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTgpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3ZhciB0PXRoaXMuX19kYXRhX18sbz1yKHQsbik7cmV0dXJuIG88MD8oKyt0aGlzLnNpemUsdC5wdXNoKFtuLGVdKSk6dFtvXVsxXT1lLHRoaXN9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxOSk7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciBlPXIodGhpcyxuKS5kZWxldGUobik7cmV0dXJuIHRoaXMuc2l6ZS09ZT8xOjAsZX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciBlPXR5cGVvZiBuO3JldHVyblwic3RyaW5nXCI9PWV8fFwibnVtYmVyXCI9PWV8fFwic3ltYm9sXCI9PWV8fFwiYm9vbGVhblwiPT1lP1wiX19wcm90b19fXCIhPT1uOm51bGw9PT1ufX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTkpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gcih0aGlzLG4pLmdldChuKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE5KTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuIHIodGhpcyxuKS5oYXMobil9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxOSk7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7dmFyIHQ9cih0aGlzLG4pLG89dC5zaXplO3JldHVybiB0LnNldChuLGUpLHRoaXMuc2l6ZSs9dC5zaXplPT1vPzA6MSx0aGlzfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMyk7bi5leHBvcnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHIuRGF0ZS5ub3coKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDExMiksbz10KDE0OSksYT10KDU2KTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9byhuKTtyZXR1cm4gMT09ZS5sZW5ndGgmJmVbMF1bMl0/YShlWzBdWzBdLGVbMF1bMV0pOmZ1bmN0aW9uKHQpe3JldHVybiB0PT09bnx8cih0LG4sZSl9fX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNDYpLG89dCg0NyksYT0xLGk9MjtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQsdSl7dmFyIGM9dC5sZW5ndGgscz1jLHA9IXU7aWYobnVsbD09bilyZXR1cm4hcztmb3Iobj1PYmplY3Qobik7Yy0tOyl7dmFyIGY9dFtjXTtpZihwJiZmWzJdP2ZbMV0hPT1uW2ZbMF1dOiEoZlswXWluIG4pKXJldHVybiExfWZvcig7KytjPHM7KXt2YXIgbD0oZj10W2NdKVswXSxnPW5bbF0sZD1mWzFdO2lmKHAmJmZbMl0pe2lmKHZvaWQgMD09PWcmJiEobCBpbiBuKSlyZXR1cm4hMX1lbHNle3ZhciBiPW5ldyByO2lmKHUpdmFyIHg9dShnLGQsbCxuLGUsYik7aWYoISh2b2lkIDA9PT14P28oZCxnLGF8aSx1LGIpOngpKXJldHVybiExfX1yZXR1cm4hMH19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE3KTtuLmV4cG9ydHM9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPW5ldyByLHRoaXMuc2l6ZT0wfX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9dGhpcy5fX2RhdGFfXyx0PWUuZGVsZXRlKG4pO3JldHVybiB0aGlzLnNpemU9ZS5zaXplLHR9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQobil9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMobil9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNyksbz10KDMyKSxhPXQoMzApLGk9MjAwO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3ZhciB0PXRoaXMuX19kYXRhX187aWYodCBpbnN0YW5jZW9mIHIpe3ZhciB1PXQuX19kYXRhX187aWYoIW98fHUubGVuZ3RoPGktMSlyZXR1cm4gdS5wdXNoKFtuLGVdKSx0aGlzLnNpemU9Kyt0LnNpemUsdGhpczt0PXRoaXMuX19kYXRhX189bmV3IGEodSl9cmV0dXJuIHQuc2V0KG4sZSksdGhpcy5zaXplPXQuc2l6ZSx0aGlzfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNDYpLG89dCg0OCksYT10KDEyMyksaT10KDEyNyksdT10KDE0NCksYz10KDIpLHM9dCg1MikscD10KDU0KSxmPTEsbD1cIltvYmplY3QgQXJndW1lbnRzXVwiLGc9XCJbb2JqZWN0IEFycmF5XVwiLGQ9XCJbb2JqZWN0IE9iamVjdF1cIixiPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSx0LHgsQSx2KXt2YXIgaD1jKG4pLG09YyhlKSx5PWg/Zzp1KG4pLEM9bT9nOnUoZSksaz0oeT15PT1sP2Q6eSk9PWQsdz0oQz1DPT1sP2Q6Qyk9PWQsQj15PT1DO2lmKEImJnMobikpe2lmKCFzKGUpKXJldHVybiExO2g9ITAsaz0hMX1pZihCJiYhaylyZXR1cm4gdnx8KHY9bmV3IHIpLGh8fHAobik/byhuLGUsdCx4LEEsdik6YShuLGUseSx0LHgsQSx2KTtpZighKHQmZikpe3ZhciBqPWsmJmIuY2FsbChuLFwiX193cmFwcGVkX19cIiksUD13JiZiLmNhbGwoZSxcIl9fd3JhcHBlZF9fXCIpO2lmKGp8fFApe3ZhciBPPWo/bi52YWx1ZSgpOm4sRT1QP2UudmFsdWUoKTplO3JldHVybiB2fHwodj1uZXcgciksQShPLEUsdCx4LHYpfX1yZXR1cm4hIUImJih2fHwodj1uZXcgciksaShuLGUsdCx4LEEsdikpfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMzApLG89dCgxMjApLGE9dCgxMjEpO2Z1bmN0aW9uIGkobil7dmFyIGU9LTEsdD1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHRoaXMuX19kYXRhX189bmV3IHI7KytlPHQ7KXRoaXMuYWRkKG5bZV0pfWkucHJvdG90eXBlLmFkZD1pLnByb3RvdHlwZS5wdXNoPW8saS5wcm90b3R5cGUuaGFzPWEsbi5leHBvcnRzPWl9LGZ1bmN0aW9uKG4sZSl7dmFyIHQ9XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCI7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldChuLHQpLHRoaXN9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMobil9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3JldHVybiBuLmhhcyhlKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE0KSxvPXQoMTI0KSxhPXQoMzEpLGk9dCg0OCksdT10KDEyNSksYz10KDEyNikscz0xLHA9MixmPVwiW29iamVjdCBCb29sZWFuXVwiLGw9XCJbb2JqZWN0IERhdGVdXCIsZz1cIltvYmplY3QgRXJyb3JdXCIsZD1cIltvYmplY3QgTWFwXVwiLGI9XCJbb2JqZWN0IE51bWJlcl1cIix4PVwiW29iamVjdCBSZWdFeHBdXCIsQT1cIltvYmplY3QgU2V0XVwiLHY9XCJbb2JqZWN0IFN0cmluZ11cIixoPVwiW29iamVjdCBTeW1ib2xdXCIsbT1cIltvYmplY3QgQXJyYXlCdWZmZXJdXCIseT1cIltvYmplY3QgRGF0YVZpZXddXCIsQz1yP3IucHJvdG90eXBlOnZvaWQgMCxrPUM/Qy52YWx1ZU9mOnZvaWQgMDtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQscixDLHcsQil7c3dpdGNoKHQpe2Nhc2UgeTppZihuLmJ5dGVMZW5ndGghPWUuYnl0ZUxlbmd0aHx8bi5ieXRlT2Zmc2V0IT1lLmJ5dGVPZmZzZXQpcmV0dXJuITE7bj1uLmJ1ZmZlcixlPWUuYnVmZmVyO2Nhc2UgbTpyZXR1cm4hKG4uYnl0ZUxlbmd0aCE9ZS5ieXRlTGVuZ3RofHwhdyhuZXcgbyhuKSxuZXcgbyhlKSkpO2Nhc2UgZjpjYXNlIGw6Y2FzZSBiOnJldHVybiBhKCtuLCtlKTtjYXNlIGc6cmV0dXJuIG4ubmFtZT09ZS5uYW1lJiZuLm1lc3NhZ2U9PWUubWVzc2FnZTtjYXNlIHg6Y2FzZSB2OnJldHVybiBuPT1lK1wiXCI7Y2FzZSBkOnZhciBqPXU7Y2FzZSBBOnZhciBQPXImcztpZihqfHwoaj1jKSxuLnNpemUhPWUuc2l6ZSYmIVApcmV0dXJuITE7dmFyIE89Qi5nZXQobik7aWYoTylyZXR1cm4gTz09ZTtyfD1wLEIuc2V0KG4sZSk7dmFyIEU9aShqKG4pLGooZSkscixDLHcsQik7cmV0dXJuIEIuZGVsZXRlKG4pLEU7Y2FzZSBoOmlmKGspcmV0dXJuIGsuY2FsbChuKT09ay5jYWxsKGUpfXJldHVybiExfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMykuVWludDhBcnJheTtuLmV4cG9ydHM9cn0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9LTEsdD1BcnJheShuLnNpemUpO3JldHVybiBuLmZvckVhY2goKGZ1bmN0aW9uKG4scil7dFsrK2VdPVtyLG5dfSkpLHR9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgZT0tMSx0PUFycmF5KG4uc2l6ZSk7cmV0dXJuIG4uZm9yRWFjaCgoZnVuY3Rpb24obil7dFsrK2VdPW59KSksdH19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDEyOCksbz0xLGE9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQsaSx1LGMpe3ZhciBzPXQmbyxwPXIobiksZj1wLmxlbmd0aDtpZihmIT1yKGUpLmxlbmd0aCYmIXMpcmV0dXJuITE7Zm9yKHZhciBsPWY7bC0tOyl7dmFyIGc9cFtsXTtpZighKHM/ZyBpbiBlOmEuY2FsbChlLGcpKSlyZXR1cm4hMX12YXIgZD1jLmdldChuKTtpZihkJiZjLmdldChlKSlyZXR1cm4gZD09ZTt2YXIgYj0hMDtjLnNldChuLGUpLGMuc2V0KGUsbik7Zm9yKHZhciB4PXM7KytsPGY7KXt2YXIgQT1uW2c9cFtsXV0sdj1lW2ddO2lmKGkpdmFyIGg9cz9pKHYsQSxnLGUsbixjKTppKEEsdixnLG4sZSxjKTtpZighKHZvaWQgMD09PWg/QT09PXZ8fHUoQSx2LHQsaSxjKTpoKSl7Yj0hMTticmVha314fHwoeD1cImNvbnN0cnVjdG9yXCI9PWcpfWlmKGImJiF4KXt2YXIgbT1uLmNvbnN0cnVjdG9yLHk9ZS5jb25zdHJ1Y3RvcjttIT15JiZcImNvbnN0cnVjdG9yXCJpbiBuJiZcImNvbnN0cnVjdG9yXCJpbiBlJiYhKFwiZnVuY3Rpb25cIj09dHlwZW9mIG0mJm0gaW5zdGFuY2VvZiBtJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB5JiZ5IGluc3RhbmNlb2YgeSkmJihiPSExKX1yZXR1cm4gYy5kZWxldGUobiksYy5kZWxldGUoZSksYn19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDEyOSksbz10KDEzMSksYT10KDEyKTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuIHIobixhLG8pfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTMwKSxvPXQoMik7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSx0KXt2YXIgYT1lKG4pO3JldHVybiBvKG4pP2E6cihhLHQobikpfX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXtmb3IodmFyIHQ9LTEscj1lLmxlbmd0aCxvPW4ubGVuZ3RoOysrdDxyOyluW28rdF09ZVt0XTtyZXR1cm4gbn19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDUwKSxvPXQoMTMyKSxhPU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUsaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLHU9aT9mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09bj9bXToobj1PYmplY3QobikscihpKG4pLChmdW5jdGlvbihlKXtyZXR1cm4gYS5jYWxsKG4sZSl9KSkpfTpvO24uZXhwb3J0cz11fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbigpe3JldHVybltdfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTM0KSxvPXQoNTEpLGE9dCgyKSxpPXQoNTIpLHU9dCgzMyksYz10KDU0KSxzPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7dmFyIHQ9YShuKSxwPSF0JiZvKG4pLGY9IXQmJiFwJiZpKG4pLGw9IXQmJiFwJiYhZiYmYyhuKSxnPXR8fHB8fGZ8fGwsZD1nP3Iobi5sZW5ndGgsU3RyaW5nKTpbXSxiPWQubGVuZ3RoO2Zvcih2YXIgeCBpbiBuKSFlJiYhcy5jYWxsKG4seCl8fGcmJihcImxlbmd0aFwiPT14fHxmJiYoXCJvZmZzZXRcIj09eHx8XCJwYXJlbnRcIj09eCl8fGwmJihcImJ1ZmZlclwiPT14fHxcImJ5dGVMZW5ndGhcIj09eHx8XCJieXRlT2Zmc2V0XCI9PXgpfHx1KHgsYikpfHxkLnB1c2goeCk7cmV0dXJuIGR9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe2Zvcih2YXIgdD0tMSxyPUFycmF5KG4pOysrdDxuOylyW3RdPWUodCk7cmV0dXJuIHJ9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg2KSxvPXQoNyksYT1cIltvYmplY3QgQXJndW1lbnRzXVwiO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gbyhuKSYmcihuKT09YX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKCl7cmV0dXJuITF9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg2KSxvPXQoMzQpLGE9dCg3KSxpPXt9O2lbXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIl09aVtcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiXT1pW1wiW29iamVjdCBJbnQ4QXJyYXldXCJdPWlbXCJbb2JqZWN0IEludDE2QXJyYXldXCJdPWlbXCJbb2JqZWN0IEludDMyQXJyYXldXCJdPWlbXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCJdPWlbXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiXT1pW1wiW29iamVjdCBVaW50MTZBcnJheV1cIl09aVtcIltvYmplY3QgVWludDMyQXJyYXldXCJdPSEwLGlbXCJbb2JqZWN0IEFyZ3VtZW50c11cIl09aVtcIltvYmplY3QgQXJyYXldXCJdPWlbXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiXT1pW1wiW29iamVjdCBCb29sZWFuXVwiXT1pW1wiW29iamVjdCBEYXRhVmlld11cIl09aVtcIltvYmplY3QgRGF0ZV1cIl09aVtcIltvYmplY3QgRXJyb3JdXCJdPWlbXCJbb2JqZWN0IEZ1bmN0aW9uXVwiXT1pW1wiW29iamVjdCBNYXBdXCJdPWlbXCJbb2JqZWN0IE51bWJlcl1cIl09aVtcIltvYmplY3QgT2JqZWN0XVwiXT1pW1wiW29iamVjdCBSZWdFeHBdXCJdPWlbXCJbb2JqZWN0IFNldF1cIl09aVtcIltvYmplY3QgU3RyaW5nXVwiXT1pW1wiW29iamVjdCBXZWFrTWFwXVwiXT0hMSxuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuIGEobikmJm8obi5sZW5ndGgpJiYhIWlbcihuKV19fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG4oZSl9fX0sZnVuY3Rpb24obixlLHQpeyhmdW5jdGlvbihuKXt2YXIgcj10KDQwKSxvPWUmJiFlLm5vZGVUeXBlJiZlLGE9byYmXCJvYmplY3RcIj09dHlwZW9mIG4mJm4mJiFuLm5vZGVUeXBlJiZuLGk9YSYmYS5leHBvcnRzPT09byYmci5wcm9jZXNzLHU9ZnVuY3Rpb24oKXt0cnl7dmFyIG49YSYmYS5yZXF1aXJlJiZhLnJlcXVpcmUoXCJ1dGlsXCIpLnR5cGVzO3JldHVybiBufHxpJiZpLmJpbmRpbmcmJmkuYmluZGluZyhcInV0aWxcIil9Y2F0Y2gobil7fX0oKTtuLmV4cG9ydHM9dX0pLmNhbGwodGhpcyx0KDUzKShuKSl9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE0MSksbz10KDE0MiksYT1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O24uZXhwb3J0cz1mdW5jdGlvbihuKXtpZighcihuKSlyZXR1cm4gbyhuKTt2YXIgZT1bXTtmb3IodmFyIHQgaW4gT2JqZWN0KG4pKWEuY2FsbChuLHQpJiZcImNvbnN0cnVjdG9yXCIhPXQmJmUucHVzaCh0KTtyZXR1cm4gZX19LGZ1bmN0aW9uKG4sZSl7dmFyIHQ9T2JqZWN0LnByb3RvdHlwZTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9biYmbi5jb25zdHJ1Y3RvcjtyZXR1cm4gbj09PShcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLnByb3RvdHlwZXx8dCl9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNDMpKE9iamVjdC5rZXlzLE9iamVjdCk7bi5leHBvcnRzPXJ9LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBuKGUodCkpfX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE0NSksbz10KDMyKSxhPXQoMTQ2KSxpPXQoMTQ3KSx1PXQoMTQ4KSxjPXQoNikscz10KDQ1KSxwPXMociksZj1zKG8pLGw9cyhhKSxnPXMoaSksZD1zKHUpLGI9YzsociYmXCJbb2JqZWN0IERhdGFWaWV3XVwiIT1iKG5ldyByKG5ldyBBcnJheUJ1ZmZlcigxKSkpfHxvJiZcIltvYmplY3QgTWFwXVwiIT1iKG5ldyBvKXx8YSYmXCJbb2JqZWN0IFByb21pc2VdXCIhPWIoYS5yZXNvbHZlKCkpfHxpJiZcIltvYmplY3QgU2V0XVwiIT1iKG5ldyBpKXx8dSYmXCJbb2JqZWN0IFdlYWtNYXBdXCIhPWIobmV3IHUpKSYmKGI9ZnVuY3Rpb24obil7dmFyIGU9YyhuKSx0PVwiW29iamVjdCBPYmplY3RdXCI9PWU/bi5jb25zdHJ1Y3Rvcjp2b2lkIDAscj10P3ModCk6XCJcIjtpZihyKXN3aXRjaChyKXtjYXNlIHA6cmV0dXJuXCJbb2JqZWN0IERhdGFWaWV3XVwiO2Nhc2UgZjpyZXR1cm5cIltvYmplY3QgTWFwXVwiO2Nhc2UgbDpyZXR1cm5cIltvYmplY3QgUHJvbWlzZV1cIjtjYXNlIGc6cmV0dXJuXCJbb2JqZWN0IFNldF1cIjtjYXNlIGQ6cmV0dXJuXCJbb2JqZWN0IFdlYWtNYXBdXCJ9cmV0dXJuIGV9KSxuLmV4cG9ydHM9Yn0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoOSkodCgzKSxcIkRhdGFWaWV3XCIpO24uZXhwb3J0cz1yfSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg5KSh0KDMpLFwiUHJvbWlzZVwiKTtuLmV4cG9ydHM9cn0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoOSkodCgzKSxcIlNldFwiKTtuLmV4cG9ydHM9cn0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoOSkodCgzKSxcIldlYWtNYXBcIik7bi5leHBvcnRzPXJ9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDU1KSxvPXQoMTIpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtmb3IodmFyIGU9byhuKSx0PWUubGVuZ3RoO3QtLTspe3ZhciBhPWVbdF0saT1uW2FdO2VbdF09W2EsaSxyKGkpXX1yZXR1cm4gZX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDQ3KSxvPXQoMTUxKSxhPXQoMTU0KSxpPXQoMzUpLHU9dCg1NSksYz10KDU2KSxzPXQoMjApLHA9MSxmPTI7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7cmV0dXJuIGkobikmJnUoZSk/YyhzKG4pLGUpOmZ1bmN0aW9uKHQpe3ZhciBpPW8odCxuKTtyZXR1cm4gdm9pZCAwPT09aSYmaT09PWU/YSh0LG4pOnIoZSxpLHB8Zil9fX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoNTcpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUsdCl7dmFyIG89bnVsbD09bj92b2lkIDA6cihuLGUpO3JldHVybiB2b2lkIDA9PT1vP3Q6b319LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE1Myksbz0vW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2csYT0vXFxcXChcXFxcKT8vZyxpPXIoKGZ1bmN0aW9uKG4pe3ZhciBlPVtdO3JldHVybiA0Nj09PW4uY2hhckNvZGVBdCgwKSYmZS5wdXNoKFwiXCIpLG4ucmVwbGFjZShvLChmdW5jdGlvbihuLHQscixvKXtlLnB1c2gocj9vLnJlcGxhY2UoYSxcIiQxXCIpOnR8fG4pfSkpLGV9KSk7bi5leHBvcnRzPWl9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDIyKSxvPTUwMDtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9cihuLChmdW5jdGlvbihuKXtyZXR1cm4gdC5zaXplPT09byYmdC5jbGVhcigpLG59KSksdD1lLmNhY2hlO3JldHVybiBlfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTU1KSxvPXQoMTU2KTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXtyZXR1cm4gbnVsbCE9biYmbyhuLGUscil9fSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3JldHVybiBudWxsIT1uJiZlIGluIE9iamVjdChuKX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDU4KSxvPXQoNTEpLGE9dCgyKSxpPXQoMzMpLHU9dCgzNCksYz10KDIwKTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe2Zvcih2YXIgcz0tMSxwPShlPXIoZSxuKSkubGVuZ3RoLGY9ITE7KytzPHA7KXt2YXIgbD1jKGVbc10pO2lmKCEoZj1udWxsIT1uJiZ0KG4sbCkpKWJyZWFrO249bltsXX1yZXR1cm4gZnx8KytzIT1wP2Y6ISEocD1udWxsPT1uPzA6bi5sZW5ndGgpJiZ1KHApJiZpKGwscCkmJihhKG4pfHxvKG4pKX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBufX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTU5KSxvPXQoMTYwKSxhPXQoMzUpLGk9dCgyMCk7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBhKG4pP3IoaShuKSk6byhuKX19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT92b2lkIDA6ZVtuXX19fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCg1Nyk7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gcihlLG4pfX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE2Miksbz10KDEyKTtuLmV4cG9ydHM9ZnVuY3Rpb24obil7cmV0dXJuIG51bGw9PW4/W106cihuLG8obikpfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMjYpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3JldHVybiByKGUsKGZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfSkpfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMjEpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3ZhciB0PVtdO3JldHVybiByKG4sKGZ1bmN0aW9uKG4scixvKXtlKG4scixvKSYmdC5wdXNoKG4pfSkpLHR9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxNjUpLG89dCgxMik7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSl7cmV0dXJuIG4mJnIobixlLG8pfX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTY2KSgpO24uZXhwb3J0cz1yfSxmdW5jdGlvbihuLGUpe24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oZSx0LHIpe2Zvcih2YXIgbz0tMSxhPU9iamVjdChlKSxpPXIoZSksdT1pLmxlbmd0aDt1LS07KXt2YXIgYz1pW24/dTorK29dO2lmKCExPT09dChhW2NdLGMsYSkpYnJlYWt9cmV0dXJuIGV9fX0sZnVuY3Rpb24obixlLHQpe3ZhciByPXQoMTEpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3JldHVybiBmdW5jdGlvbih0LG8pe2lmKG51bGw9PXQpcmV0dXJuIHQ7aWYoIXIodCkpcmV0dXJuIG4odCxvKTtmb3IodmFyIGE9dC5sZW5ndGgsaT1lP2E6LTEsdT1PYmplY3QodCk7KGU/aS0tOisraTxhKSYmITEhPT1vKHVbaV0saSx1KTspO3JldHVybiB0fX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDIxKSxvPXQoMTEpO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3ZhciB0PS0xLGE9byhuKT9BcnJheShuLmxlbmd0aCk6W107cmV0dXJuIHIobiwoZnVuY3Rpb24obixyLG8pe2FbKyt0XT1lKG4scixvKX0pKSxhfX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQscil7dmFyIG89LTEsYT1udWxsPT1uPzA6bi5sZW5ndGg7Zm9yKHImJmEmJih0PW5bKytvXSk7KytvPGE7KXQ9ZSh0LG5bb10sbyxuKTtyZXR1cm4gdH19LGZ1bmN0aW9uKG4sZSl7bi5leHBvcnRzPWZ1bmN0aW9uKG4sZSx0LHIsbyl7cmV0dXJuIG8obiwoZnVuY3Rpb24obixvLGEpe3Q9cj8ocj0hMSxuKTplKHQsbixvLGEpfSkpLHR9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgxMCksbz10KDExKSxhPXQoMTIpO24uZXhwb3J0cz1mdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24oZSx0LGkpe3ZhciB1PU9iamVjdChlKTtpZighbyhlKSl7dmFyIGM9cih0LDMpO2U9YShlKSx0PWZ1bmN0aW9uKG4pe3JldHVybiBjKHVbbl0sbix1KX19dmFyIHM9bihlLHQsaSk7cmV0dXJuIHM+LTE/dVtjP2Vbc106c106dm9pZCAwfX19LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDIxKTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlKXt2YXIgdDtyZXR1cm4gcihuLChmdW5jdGlvbihuLHIsbyl7cmV0dXJuISh0PWUobixyLG8pKX0pKSwhIXR9fSxmdW5jdGlvbihuLGUsdCl7dmFyIHI9dCgzMSksbz10KDExKSxhPXQoMzMpLGk9dCg4KTtuLmV4cG9ydHM9ZnVuY3Rpb24obixlLHQpe2lmKCFpKHQpKXJldHVybiExO3ZhciB1PXR5cGVvZiBlO3JldHVybiEhKFwibnVtYmVyXCI9PXU/byh0KSYmYShlLHQubGVuZ3RoKTpcInN0cmluZ1wiPT11JiZlIGluIHQpJiZyKHRbZV0sbil9fSxmdW5jdGlvbihuLGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dCgxNzUpO2Z1bmN0aW9uIG8oKXt9ZnVuY3Rpb24gYSgpe31hLnJlc2V0V2FybmluZ0NhY2hlPW8sbi5leHBvcnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLGUsdCxvLGEsaSl7aWYoaSE9PXIpe3ZhciB1PW5ldyBFcnJvcihcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIik7dGhyb3cgdS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwiLHV9fWZ1bmN0aW9uIGUoKXtyZXR1cm4gbn1uLmlzUmVxdWlyZWQ9bjt2YXIgdD17YXJyYXk6bixib29sOm4sZnVuYzpuLG51bWJlcjpuLG9iamVjdDpuLHN0cmluZzpuLHN5bWJvbDpuLGFueTpuLGFycmF5T2Y6ZSxlbGVtZW50Om4sZWxlbWVudFR5cGU6bixpbnN0YW5jZU9mOmUsbm9kZTpuLG9iamVjdE9mOmUsb25lT2Y6ZSxvbmVPZlR5cGU6ZSxzaGFwZTplLGV4YWN0OmUsY2hlY2tQcm9wVHlwZXM6YSxyZXNldFdhcm5pbmdDYWNoZTpvfTtyZXR1cm4gdC5Qcm9wVHlwZXM9dCx0fX0sZnVuY3Rpb24obixlLHQpe1widXNlIHN0cmljdFwiO24uZXhwb3J0cz1cIlNFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEXCJ9LGZ1bmN0aW9uKG4sZSx0KXt2YXIgcj10KDE3Nyk7XCJzdHJpbmdcIj09dHlwZW9mIHImJihyPVtbbi5pLHIsXCJcIl1dKTt2YXIgbz17aG1yOiEwLHRyYW5zZm9ybTp2b2lkIDAsaW5zZXJ0SW50bzp2b2lkIDB9O3QoMTgwKShyLG8pO3IubG9jYWxzJiYobi5leHBvcnRzPXIubG9jYWxzKX0sZnVuY3Rpb24obixlLHQpe2U9bi5leHBvcnRzPXQoMTc4KSghMSk7dmFyIHI9dCgxNzkpKHQoNTkpKTtlLnB1c2goW24uaSxcIi5mbGFnIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxMXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK3IrXCIpICFpbXBvcnRhbnQ7XFxufVxcbi5mbGFnLm1hcmdpbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuLmZsYWcuYWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggMDtcXG59XFxuLmZsYWcuYWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggMDtcXG59XFxuLmZsYWcuYWYge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggMDtcXG59XFxuLmZsYWcuYWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggMDtcXG59XFxuLmZsYWcuYWkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggMDtcXG59XFxuLmZsYWcuYWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDtcXG59XFxuLmZsYWcuYW0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IDA7XFxufVxcbi5mbGFnLmFvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAwO1xcbn1cXG4uZmxhZy5hciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggMDtcXG59XFxuLmZsYWcuYXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IDA7XFxufVxcbi5mbGFnLmF0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAwO1xcbn1cXG4uZmxhZy5hdSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggMDtcXG59XFxuLmZsYWcuYXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IDA7XFxufVxcbi5mbGFnLmF6IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAwO1xcbn1cXG4uZmxhZy5iYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggMDtcXG59XFxuLmZsYWcuYmIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTFweDtcXG59XFxuLmZsYWcuYmQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTExcHg7XFxufVxcbi5mbGFnLmJlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMXB4O1xcbn1cXG4uZmxhZy5iZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTFweDtcXG59XFxuLmZsYWcuYmcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTExcHg7XFxufVxcbi5mbGFnLmJoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMXB4O1xcbn1cXG4uZmxhZy5iaSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTFweDtcXG59XFxuLmZsYWcuYmoge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMXB4O1xcbn1cXG4uZmxhZy5ibSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTExcHg7XFxufVxcbi5mbGFnLmJuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTFweDtcXG59XFxuLmZsYWcuYm8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMXB4O1xcbn1cXG4uZmxhZy5iciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTExcHg7XFxufVxcbi5mbGFnLmJzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTFweDtcXG59XFxuLmZsYWcuYnQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMXB4O1xcbn1cXG4uZmxhZy5idyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExcHg7XFxufVxcbi5mbGFnLmJ5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTFweDtcXG59XFxuLmZsYWcuYnoge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjJweDtcXG59XFxuLmZsYWcuY2Ege1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTIycHg7XFxufVxcbi5mbGFnLmNkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0yMnB4O1xcbn1cXG4uZmxhZy5jZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMjJweDtcXG59XFxuLmZsYWcuY2cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTIycHg7XFxufVxcbi5mbGFnLmNoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0yMnB4O1xcbn1cXG4uZmxhZy5jaSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMjJweDtcXG59XFxuLmZsYWcuY2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0yMnB4O1xcbn1cXG4uZmxhZy5jbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTIycHg7XFxufVxcbi5mbGFnLmNtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMjJweDtcXG59XFxuLmZsYWcuY24ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0yMnB4O1xcbn1cXG4uZmxhZy5jbyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTIycHg7XFxufVxcbi5mbGFnLmNyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMjJweDtcXG59XFxuLmZsYWcuY3Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0yMnB4O1xcbn1cXG4uZmxhZy5jdiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTIycHg7XFxufVxcbi5mbGFnLmN3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMjJweDtcXG59XFxuLmZsYWcuY3kge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzNweDtcXG59XFxuLmZsYWcuY3oge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTMzcHg7XFxufVxcbi5mbGFnLmRlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0zM3B4O1xcbn1cXG4uZmxhZy5kaiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMzNweDtcXG59XFxuLmZsYWcuZGsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTMzcHg7XFxufVxcbi5mbGFnLmRtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0zM3B4O1xcbn1cXG4uZmxhZy5kbyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMzNweDtcXG59XFxuLmZsYWcuZHoge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0zM3B4O1xcbn1cXG4uZmxhZy5lYyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTMzcHg7XFxufVxcbi5mbGFnLmVlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMzNweDtcXG59XFxuLmZsYWcuZWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0zM3B4O1xcbn1cXG4uZmxhZy5lciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTMzcHg7XFxufVxcbi5mbGFnLmVzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMzNweDtcXG59XFxuLmZsYWcuZXQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0zM3B4O1xcbn1cXG4uZmxhZy5maSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTMzcHg7XFxufVxcbi5mbGFnLmZqIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMzNweDtcXG59XFxuLmZsYWcuZmsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDRweDtcXG59XFxuLmZsYWcuZm0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTQ0cHg7XFxufVxcbi5mbGFnLmZvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC00NHB4O1xcbn1cXG4uZmxhZy5mcixcXG4uZmxhZy5ibCxcXG4uZmxhZy5tZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDRweDtcXG59XFxuLmZsYWcuZ2Ege1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTQ0cHg7XFxufVxcbi5mbGFnLmdiIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC00NHB4O1xcbn1cXG4uZmxhZy5nZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNDRweDtcXG59XFxuLmZsYWcuZ2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC00NHB4O1xcbn1cXG4uZmxhZy5nZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTQ0cHg7XFxufVxcbi5mbGFnLmdoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNDRweDtcXG59XFxuLmZsYWcuZ2kge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC00NHB4O1xcbn1cXG4uZmxhZy5nbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTQ0cHg7XFxufVxcbi5mbGFnLmdtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDRweDtcXG59XFxuLmZsYWcuZ24ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC00NHB4O1xcbn1cXG4uZmxhZy5ncCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTQ0cHg7XFxufVxcbi5mbGFnLmdxIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDRweDtcXG59XFxuLmZsYWcuZ3Ige1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNTVweDtcXG59XFxuLmZsYWcuZ3Qge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTU1cHg7XFxufVxcbi5mbGFnLmd1IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC01NXB4O1xcbn1cXG4uZmxhZy5ndyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNTVweDtcXG59XFxuLmZsYWcuZ3kge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTU1cHg7XFxufVxcbi5mbGFnLmhrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC01NXB4O1xcbn1cXG4uZmxhZy5obiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNTVweDtcXG59XFxuLmZsYWcuaHIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC01NXB4O1xcbn1cXG4uZmxhZy5odCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTU1cHg7XFxufVxcbi5mbGFnLmh1IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNTVweDtcXG59XFxuLmZsYWcuaWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC01NXB4O1xcbn1cXG4uZmxhZy5pZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTU1cHg7XFxufVxcbi5mbGFnLmlsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNTVweDtcXG59XFxuLmZsYWcuaW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC01NXB4O1xcbn1cXG4uZmxhZy5pbyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTU1cHg7XFxufVxcbi5mbGFnLmlxIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNTVweDtcXG59XFxuLmZsYWcuaXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNjZweDtcXG59XFxuLmZsYWcuaXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTY2cHg7XFxufVxcbi5mbGFnLml0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC02NnB4O1xcbn1cXG4uZmxhZy5qbSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNjZweDtcXG59XFxuLmZsYWcuam8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTY2cHg7XFxufVxcbi5mbGFnLmpwIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC02NnB4O1xcbn1cXG4uZmxhZy5rZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNjZweDtcXG59XFxuLmZsYWcua2cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC02NnB4O1xcbn1cXG4uZmxhZy5raCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTY2cHg7XFxufVxcbi5mbGFnLmtpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNjZweDtcXG59XFxuLmZsYWcua20ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC02NnB4O1xcbn1cXG4uZmxhZy5rbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTY2cHg7XFxufVxcbi5mbGFnLmtwIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNjZweDtcXG59XFxuLmZsYWcua3Ige1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC02NnB4O1xcbn1cXG4uZmxhZy5rdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTY2cHg7XFxufVxcbi5mbGFnLmt5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNjZweDtcXG59XFxuLmZsYWcua3oge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNzdweDtcXG59XFxuLmZsYWcubGEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTc3cHg7XFxufVxcbi5mbGFnLmxiIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC03N3B4O1xcbn1cXG4uZmxhZy5sYyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNzdweDtcXG59XFxuLmZsYWcubGkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTc3cHg7XFxufVxcbi5mbGFnLmxrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC03N3B4O1xcbn1cXG4uZmxhZy5sciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtNzdweDtcXG59XFxuLmZsYWcubHMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC03N3B4O1xcbn1cXG4uZmxhZy5sdCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTc3cHg7XFxufVxcbi5mbGFnLmx1IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtNzdweDtcXG59XFxuLmZsYWcubHYge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC03N3B4O1xcbn1cXG4uZmxhZy5seSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTc3cHg7XFxufVxcbi5mbGFnLm1hIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNzdweDtcXG59XFxuLmZsYWcubWMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC03N3B4O1xcbn1cXG4uZmxhZy5tZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTc3cHg7XFxufVxcbi5mbGFnLm1lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTU0cHg7XFxuICBoZWlnaHQ6IDEycHg7XFxufVxcbi5mbGFnLm1nIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTg4cHg7XFxufVxcbi5mbGFnLm1oIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC04OHB4O1xcbn1cXG4uZmxhZy5tayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtODhweDtcXG59XFxuLmZsYWcubWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTg4cHg7XFxufVxcbi5mbGFnLm1tIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC04OHB4O1xcbn1cXG4uZmxhZy5tbiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtODhweDtcXG59XFxuLmZsYWcubW8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTg4cHg7XFxufVxcbi5mbGFnLm1wIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtODhweDtcXG59XFxuLmZsYWcubXEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC04OHB4O1xcbn1cXG4uZmxhZy5tciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTg4cHg7XFxufVxcbi5mbGFnLm1zIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtODhweDtcXG59XFxuLmZsYWcubXQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC04OHB4O1xcbn1cXG4uZmxhZy5tdSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTg4cHg7XFxufVxcbi5mbGFnLm12IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtODhweDtcXG59XFxuLmZsYWcubXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC04OHB4O1xcbn1cXG4uZmxhZy5teCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTg4cHg7XFxufVxcbi5mbGFnLm15IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTk5cHg7XFxufVxcbi5mbGFnLm16IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC05OXB4O1xcbn1cXG4uZmxhZy5uYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtOTlweDtcXG59XFxuLmZsYWcubmMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTk5cHg7XFxufVxcbi5mbGFnLm5lIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC05OXB4O1xcbn1cXG4uZmxhZy5uZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtOTlweDtcXG59XFxuLmZsYWcubmcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTk5cHg7XFxufVxcbi5mbGFnLm5pIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtOTlweDtcXG59XFxuLmZsYWcubmwsXFxuLmZsYWcuYnEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC05OXB4O1xcbn1cXG4uZmxhZy5ubyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTk5cHg7XFxufVxcbi5mbGFnLm5wIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtOTlweDtcXG59XFxuLmZsYWcubnIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC05OXB4O1xcbn1cXG4uZmxhZy5udSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk5cHg7XFxufVxcbi5mbGFnLm56IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtOTlweDtcXG59XFxuLmZsYWcub20ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC05OXB4O1xcbn1cXG4uZmxhZy5wYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTk5cHg7XFxufVxcbi5mbGFnLnBlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTExMHB4O1xcbn1cXG4uZmxhZy5wZiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTEwcHg7XFxufVxcbi5mbGFnLnBnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMTBweDtcXG59XFxuLmZsYWcucGgge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExMHB4O1xcbn1cXG4uZmxhZy5wayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTEwcHg7XFxufVxcbi5mbGFnLnBsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMTBweDtcXG59XFxuLmZsYWcucG0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExMHB4O1xcbn1cXG4uZmxhZy5wciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTExMHB4O1xcbn1cXG4uZmxhZy5wcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTExMHB4O1xcbn1cXG4uZmxhZy5wdCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTExMHB4O1xcbn1cXG4uZmxhZy5wdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTExMHB4O1xcbn1cXG4uZmxhZy5weSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTExMHB4O1xcbn1cXG4uZmxhZy5xYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExMHB4O1xcbn1cXG4uZmxhZy5yZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTExMHB4O1xcbn1cXG4uZmxhZy5ybyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExMHB4O1xcbn1cXG4uZmxhZy5ycyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTExMHB4O1xcbn1cXG4uZmxhZy5ydSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMjFweDtcXG59XFxuLmZsYWcucncge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTEyMXB4O1xcbn1cXG4uZmxhZy5zYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTIxcHg7XFxufVxcbi5mbGFnLnNiIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMjFweDtcXG59XFxuLmZsYWcuc2Mge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTEyMXB4O1xcbn1cXG4uZmxhZy5zZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTIxcHg7XFxufVxcbi5mbGFnLnNlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMjFweDtcXG59XFxuLmZsYWcuc2cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMjFweDtcXG59XFxuLmZsYWcuc2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMjFweDtcXG59XFxuLmZsYWcuc2kge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMjFweDtcXG59XFxuLmZsYWcuc2sge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMjFweDtcXG59XFxuLmZsYWcuc2wge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMjFweDtcXG59XFxuLmZsYWcuc20ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMjFweDtcXG59XFxuLmZsYWcuc24ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMjFweDtcXG59XFxuLmZsYWcuc28ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xMjFweDtcXG59XFxuLmZsYWcuc3Ige1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMjFweDtcXG59XFxuLmZsYWcuc3Mge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTMycHg7XFxufVxcbi5mbGFnLnN0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMzJweDtcXG59XFxuLmZsYWcuc3Yge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTEzMnB4O1xcbn1cXG4uZmxhZy5zeCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTMycHg7XFxufVxcbi5mbGFnLnN5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMzJweDtcXG59XFxuLmZsYWcuc3oge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEzMnB4O1xcbn1cXG4uZmxhZy50YyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTMycHg7XFxufVxcbi5mbGFnLnRkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTMycHg7XFxufVxcbi5mbGFnLnRnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTMycHg7XFxufVxcbi5mbGFnLnRoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTMycHg7XFxufVxcbi5mbGFnLnRqIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTMycHg7XFxufVxcbi5mbGFnLnRrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTMycHg7XFxufVxcbi5mbGFnLnRsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTMycHg7XFxufVxcbi5mbGFnLnRtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTMycHg7XFxufVxcbi5mbGFnLnRuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTMycHg7XFxufVxcbi5mbGFnLnRvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTMycHg7XFxufVxcbi5mbGFnLnRyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTE0M3B4O1xcbn1cXG4uZmxhZy50dCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTQzcHg7XFxufVxcbi5mbGFnLnR2IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNDNweDtcXG59XFxuLmZsYWcudHcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE0M3B4O1xcbn1cXG4uZmxhZy50eiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTQzcHg7XFxufVxcbi5mbGFnLnVhIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNDNweDtcXG59XFxuLmZsYWcudWcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE0M3B4O1xcbn1cXG4uZmxhZy51cyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE0M3B4O1xcbn1cXG4uZmxhZy51eSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTE0M3B4O1xcbn1cXG4uZmxhZy51eiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE0M3B4O1xcbn1cXG4uZmxhZy52YSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTE0M3B4O1xcbn1cXG4uZmxhZy52YyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTE0M3B4O1xcbn1cXG4uZmxhZy52ZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTE0M3B4O1xcbn1cXG4uZmxhZy52ZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTE0M3B4O1xcbn1cXG4uZmxhZy52aSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTE0M3B4O1xcbn1cXG4uZmxhZy52biB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTE0M3B4O1xcbn1cXG4uZmxhZy52dSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNTRweDtcXG59XFxuLmZsYWcud2Yge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE1NHB4O1xcbn1cXG4uZmxhZy53cyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTU0cHg7XFxufVxcbi5mbGFnLnllIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNTRweDtcXG59XFxuLmZsYWcuemEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE1NHB4O1xcbn1cXG4uZmxhZy56bSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTU0cHg7XFxufVxcbi5mbGFnLnp3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNTRweDtcXG59XFxuXCIsXCJcIl0pfSxmdW5jdGlvbihuLGUsdCl7XCJ1c2Ugc3RyaWN0XCI7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKChmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihuLGUpe3ZhciB0PW5bMV18fFwiXCIscj1uWzNdO2lmKCFyKXJldHVybiB0O2lmKGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2Epe3ZhciBvPShpPXIsdT1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShpKSkpKSxjPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHUpLFwiLyojIFwiLmNvbmNhdChjLFwiICovXCIpKSxhPXIuc291cmNlcy5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoci5zb3VyY2VSb290KS5jb25jYXQobixcIiAqL1wiKX0pKTtyZXR1cm5bdF0uY29uY2F0KGEpLmNvbmNhdChbb10pLmpvaW4oXCJcXG5cIil9dmFyIGksdSxjO3JldHVyblt0XS5qb2luKFwiXFxuXCIpfShlLG4pO3JldHVybiBlWzJdP1wiQG1lZGlhIFwiLmNvbmNhdChlWzJdLFwie1wiKS5jb25jYXQodCxcIn1cIik6dH0pKS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24obix0KXtcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49W1tudWxsLG4sXCJcIl1dKTtmb3IodmFyIHI9e30sbz0wO288dGhpcy5sZW5ndGg7bysrKXt2YXIgYT10aGlzW29dWzBdO251bGwhPWEmJihyW2FdPSEwKX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9bltpXTtudWxsIT11WzBdJiZyW3VbMF1dfHwodCYmIXVbMl0/dVsyXT10OnQmJih1WzJdPVwiKFwiLmNvbmNhdCh1WzJdLFwiKSBhbmQgKFwiKS5jb25jYXQodCxcIilcIikpLGUucHVzaCh1KSl9fSxlfX0sZnVuY3Rpb24obixlLHQpe1widXNlIHN0cmljdFwiO24uZXhwb3J0cz1mdW5jdGlvbihuLGUpe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZihuPW4uX19lc01vZHVsZT9uLmRlZmF1bHQ6bik/bjooL15bJ1wiXS4qWydcIl0kLy50ZXN0KG4pJiYobj1uLnNsaWNlKDEsLTEpKSwvW1wiJygpIFxcdFxcbl0vLnRlc3Qobil8fGU/J1wiJy5jb25jYXQobi5yZXBsYWNlKC9cIi9nLCdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZyxcIlxcXFxuXCIpLCdcIicpOm4pfX0sZnVuY3Rpb24obixlLHQpe3ZhciByLG8sYT17fSxpPShyPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9ifSxmdW5jdGlvbigpe3JldHVybiB2b2lkIDA9PT1vJiYobz1yLmFwcGx5KHRoaXMsYXJndW1lbnRzKSksb30pLHU9ZnVuY3Rpb24obixlKXtyZXR1cm4gZT9lLnF1ZXJ5U2VsZWN0b3Iobik6ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuKX0sYz1mdW5jdGlvbihuKXt2YXIgZT17fTtyZXR1cm4gZnVuY3Rpb24obix0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiBuKCk7aWYodm9pZCAwPT09ZVtuXSl7dmFyIHI9dS5jYWxsKHRoaXMsbix0KTtpZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnIgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpdHJ5e3I9ci5jb250ZW50RG9jdW1lbnQuaGVhZH1jYXRjaChuKXtyPW51bGx9ZVtuXT1yfXJldHVybiBlW25dfX0oKSxzPW51bGwscD0wLGY9W10sbD10KDE4MSk7ZnVuY3Rpb24gZyhuLGUpe2Zvcih2YXIgdD0wO3Q8bi5sZW5ndGg7dCsrKXt2YXIgcj1uW3RdLG89YVtyLmlkXTtpZihvKXtvLnJlZnMrKztmb3IodmFyIGk9MDtpPG8ucGFydHMubGVuZ3RoO2krKylvLnBhcnRzW2ldKHIucGFydHNbaV0pO2Zvcig7aTxyLnBhcnRzLmxlbmd0aDtpKyspby5wYXJ0cy5wdXNoKGgoci5wYXJ0c1tpXSxlKSl9ZWxzZXt2YXIgdT1bXTtmb3IoaT0wO2k8ci5wYXJ0cy5sZW5ndGg7aSsrKXUucHVzaChoKHIucGFydHNbaV0sZSkpO2Fbci5pZF09e2lkOnIuaWQscmVmczoxLHBhcnRzOnV9fX19ZnVuY3Rpb24gZChuLGUpe2Zvcih2YXIgdD1bXSxyPXt9LG89MDtvPG4ubGVuZ3RoO28rKyl7dmFyIGE9bltvXSxpPWUuYmFzZT9hWzBdK2UuYmFzZTphWzBdLHU9e2NzczphWzFdLG1lZGlhOmFbMl0sc291cmNlTWFwOmFbM119O3JbaV0/cltpXS5wYXJ0cy5wdXNoKHUpOnQucHVzaChyW2ldPXtpZDppLHBhcnRzOlt1XX0pfXJldHVybiB0fWZ1bmN0aW9uIGIobixlKXt2YXIgdD1jKG4uaW5zZXJ0SW50byk7aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7dmFyIHI9ZltmLmxlbmd0aC0xXTtpZihcInRvcFwiPT09bi5pbnNlcnRBdClyP3IubmV4dFNpYmxpbmc/dC5pbnNlcnRCZWZvcmUoZSxyLm5leHRTaWJsaW5nKTp0LmFwcGVuZENoaWxkKGUpOnQuaW5zZXJ0QmVmb3JlKGUsdC5maXJzdENoaWxkKSxmLnB1c2goZSk7ZWxzZSBpZihcImJvdHRvbVwiPT09bi5pbnNlcnRBdCl0LmFwcGVuZENoaWxkKGUpO2Vsc2V7aWYoXCJvYmplY3RcIiE9dHlwZW9mIG4uaW5zZXJ0QXR8fCFuLmluc2VydEF0LmJlZm9yZSl0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTt2YXIgbz1jKG4uaW5zZXJ0QXQuYmVmb3JlLHQpO3QuaW5zZXJ0QmVmb3JlKGUsbyl9fWZ1bmN0aW9uIHgobil7aWYobnVsbD09PW4ucGFyZW50Tm9kZSlyZXR1cm4hMTtuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobik7dmFyIGU9Zi5pbmRleE9mKG4pO2U+PTAmJmYuc3BsaWNlKGUsMSl9ZnVuY3Rpb24gQShuKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYodm9pZCAwPT09bi5hdHRycy50eXBlJiYobi5hdHRycy50eXBlPVwidGV4dC9jc3NcIiksdm9pZCAwPT09bi5hdHRycy5ub25jZSl7dmFyIHI9ZnVuY3Rpb24oKXswO3JldHVybiB0Lm5jfSgpO3ImJihuLmF0dHJzLm5vbmNlPXIpfXJldHVybiB2KGUsbi5hdHRycyksYihuLGUpLGV9ZnVuY3Rpb24gdihuLGUpe09iamVjdC5rZXlzKGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe24uc2V0QXR0cmlidXRlKHQsZVt0XSl9KSl9ZnVuY3Rpb24gaChuLGUpe3ZhciB0LHIsbyxhO2lmKGUudHJhbnNmb3JtJiZuLmNzcyl7aWYoIShhPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudHJhbnNmb3JtP2UudHJhbnNmb3JtKG4uY3NzKTplLnRyYW5zZm9ybS5kZWZhdWx0KG4uY3NzKSkpcmV0dXJuIGZ1bmN0aW9uKCl7fTtuLmNzcz1hfWlmKGUuc2luZ2xldG9uKXt2YXIgaT1wKys7dD1zfHwocz1BKGUpKSxyPUMuYmluZChudWxsLHQsaSwhMSksbz1DLmJpbmQobnVsbCx0LGksITApfWVsc2Ugbi5zb3VyY2VNYXAmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCYmXCJmdW5jdGlvblwiPT10eXBlb2YgQmxvYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYT8odD1mdW5jdGlvbihuKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtyZXR1cm4gdm9pZCAwPT09bi5hdHRycy50eXBlJiYobi5hdHRycy50eXBlPVwidGV4dC9jc3NcIiksbi5hdHRycy5yZWw9XCJzdHlsZXNoZWV0XCIsdihlLG4uYXR0cnMpLGIobixlKSxlfShlKSxyPXcuYmluZChudWxsLHQsZSksbz1mdW5jdGlvbigpe3godCksdC5ocmVmJiZVUkwucmV2b2tlT2JqZWN0VVJMKHQuaHJlZil9KToodD1BKGUpLHI9ay5iaW5kKG51bGwsdCksbz1mdW5jdGlvbigpe3godCl9KTtyZXR1cm4gcihuKSxmdW5jdGlvbihlKXtpZihlKXtpZihlLmNzcz09PW4uY3NzJiZlLm1lZGlhPT09bi5tZWRpYSYmZS5zb3VyY2VNYXA9PT1uLnNvdXJjZU1hcClyZXR1cm47cihuPWUpfWVsc2UgbygpfX1uLmV4cG9ydHM9ZnVuY3Rpb24obixlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiZcIm9iamVjdFwiIT10eXBlb2YgZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpOyhlPWV8fHt9KS5hdHRycz1cIm9iamVjdFwiPT10eXBlb2YgZS5hdHRycz9lLmF0dHJzOnt9LGUuc2luZ2xldG9ufHxcImJvb2xlYW5cIj09dHlwZW9mIGUuc2luZ2xldG9ufHwoZS5zaW5nbGV0b249aSgpKSxlLmluc2VydEludG98fChlLmluc2VydEludG89XCJoZWFkXCIpLGUuaW5zZXJ0QXR8fChlLmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciB0PWQobixlKTtyZXR1cm4gZyh0LGUpLGZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1bXSxvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBpPXRbb107KHU9YVtpLmlkXSkucmVmcy0tLHIucHVzaCh1KX1uJiZnKGQobixlKSxlKTtmb3Iobz0wO288ci5sZW5ndGg7bysrKXt2YXIgdTtpZigwPT09KHU9cltvXSkucmVmcyl7Zm9yKHZhciBjPTA7Yzx1LnBhcnRzLmxlbmd0aDtjKyspdS5wYXJ0c1tjXSgpO2RlbGV0ZSBhW3UuaWRdfX19fTt2YXIgbSx5PShtPVtdLGZ1bmN0aW9uKG4sZSl7cmV0dXJuIG1bbl09ZSxtLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfSk7ZnVuY3Rpb24gQyhuLGUsdCxyKXt2YXIgbz10P1wiXCI6ci5jc3M7aWYobi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5jc3NUZXh0PXkoZSxvKTtlbHNle3ZhciBhPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG8pLGk9bi5jaGlsZE5vZGVzO2lbZV0mJm4ucmVtb3ZlQ2hpbGQoaVtlXSksaS5sZW5ndGg/bi5pbnNlcnRCZWZvcmUoYSxpW2VdKTpuLmFwcGVuZENoaWxkKGEpfX1mdW5jdGlvbiBrKG4sZSl7dmFyIHQ9ZS5jc3Mscj1lLm1lZGlhO2lmKHImJm4uc2V0QXR0cmlidXRlKFwibWVkaWFcIixyKSxuLnN0eWxlU2hlZXQpbi5zdHlsZVNoZWV0LmNzc1RleHQ9dDtlbHNle2Zvcig7bi5maXJzdENoaWxkOyluLnJlbW92ZUNoaWxkKG4uZmlyc3RDaGlsZCk7bi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KSl9fWZ1bmN0aW9uIHcobixlLHQpe3ZhciByPXQuY3NzLG89dC5zb3VyY2VNYXAsYT12b2lkIDA9PT1lLmNvbnZlcnRUb0Fic29sdXRlVXJscyYmbzsoZS5jb252ZXJ0VG9BYnNvbHV0ZVVybHN8fGEpJiYocj1sKHIpKSxvJiYocis9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG8pKSkpK1wiICovXCIpO3ZhciBpPW5ldyBCbG9iKFtyXSx7dHlwZTpcInRleHQvY3NzXCJ9KSx1PW4uaHJlZjtuLmhyZWY9VVJMLmNyZWF0ZU9iamVjdFVSTChpKSx1JiZVUkwucmV2b2tlT2JqZWN0VVJMKHUpfX0sZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmxvY2F0aW9uO2lmKCFlKXRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO2lmKCFufHxcInN0cmluZ1wiIT10eXBlb2YgbilyZXR1cm4gbjt2YXIgdD1lLnByb3RvY29sK1wiLy9cIitlLmhvc3Qscj10K2UucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLFwiL1wiKTtyZXR1cm4gbi5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwoZnVuY3Rpb24obixlKXt2YXIgbyxhPWUudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLChmdW5jdGlvbihuLGUpe3JldHVybiBlfSkpLnJlcGxhY2UoL14nKC4qKSckLywoZnVuY3Rpb24obixlKXtyZXR1cm4gZX0pKTtyZXR1cm4vXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KGEpP246KG89MD09PWEuaW5kZXhPZihcIi8vXCIpP2E6MD09PWEuaW5kZXhPZihcIi9cIik/dCthOnIrYS5yZXBsYWNlKC9eXFwuXFwvLyxcIlwiKSxcInVybChcIitKU09OLnN0cmluZ2lmeShvKStcIilcIil9KSl9fSxmdW5jdGlvbihuLGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dC5yKGUpO3ZhciByPXQoMzYpLG89dC5uKHIpLGE9dCg0KSxpPXQubihhKSx1PXQoNjApLGM9dC5uKHUpLHM9dCgyMikscD10Lm4ocyksZj10KDYxKSxsPXQubihmKSxnPXQoNjIpLGQ9dC5uKGcpLGI9dCg2MykseD10Lm4oYiksQT10KDIzKSx2PXQubihBKSxoPXQoNjQpLG09dC5uKGgpLHk9dCgyNCksQz10Lm4oeSksaz10KDEzKSx3PXQubihrKSxCPXQoMzcpLGo9dC5uKEIpLFA9dCg1KSxPPXQubihQKSxFPXQoMzgpLEk9dC5uKEUpLEQ9dCgxKSxRPXQubihEKSxTPXQoMCksVD10Lm4oUyksTT10KDY1KSxSPXQubihNKSxGPXQoNjYpLFU9dC5uKEYpLEw9dCg2NyksTj10Lm4oTCksej10KDY4KSxLPXQubih6KSxHPXQoNjkpLEg9dC5uKEcpLHE9dCg3MCksWT10Lm4ocSksVj10KDcxKSxKPXQubihWKSxYPXQoNzIpLFo9dC5uKFgpLFc9dCgzOSksXz10Lm4oVyksJD10KDczKSxubj10Lm4oJCksZW49dCg3NCksdG49dC5uKGVuKTtmdW5jdGlvbiBybihuKXtyZXR1cm4ocm49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKG4pe3JldHVybiB0eXBlb2Ygbn06ZnVuY3Rpb24obil7cmV0dXJuIG4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmbi5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmbiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygbn0pKG4pfWZ1bmN0aW9uIG9uKCl7cmV0dXJuKG9uPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKG4pe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciB0PWFyZ3VtZW50c1tlXTtmb3IodmFyIHIgaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxyKSYmKG5bcl09dFtyXSl9cmV0dXJuIG59KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYW4obixlKXtpZihudWxsPT1uKXJldHVybnt9O3ZhciB0LHIsbz1mdW5jdGlvbihuLGUpe2lmKG51bGw9PW4pcmV0dXJue307dmFyIHQscixvPXt9LGE9T2JqZWN0LmtleXMobik7Zm9yKHI9MDtyPGEubGVuZ3RoO3IrKyl0PWFbcl0sZS5pbmRleE9mKHQpPj0wfHwob1t0XT1uW3RdKTtyZXR1cm4gb30obixlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgYT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG4pO2ZvcihyPTA7cjxhLmxlbmd0aDtyKyspdD1hW3JdLGUuaW5kZXhPZih0KT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG4sdCkmJihvW3RdPW5bdF0pfXJldHVybiBvfWZ1bmN0aW9uIHVuKG4sZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciByPWVbdF07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLHIua2V5LHIpfX1mdW5jdGlvbiBjbihuLGUpe3JldHVybiFlfHxcIm9iamVjdFwiIT09cm4oZSkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/ZnVuY3Rpb24obil7aWYodm9pZCAwPT09bil0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIG59KG4pOmV9ZnVuY3Rpb24gc24obil7cmV0dXJuKHNuPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24obil7cmV0dXJuIG4uX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2Yobil9KShuKX1mdW5jdGlvbiBwbihuLGUpe3JldHVybihwbj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKG4sZSl7cmV0dXJuIG4uX19wcm90b19fPWUsbn0pKG4sZSl9dmFyIGZuPWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIGUoKXtyZXR1cm4gZnVuY3Rpb24obixlKXtpZighKG4gaW5zdGFuY2VvZiBlKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLGNuKHRoaXMsc24oZSkuYXBwbHkodGhpcyxhcmd1bWVudHMpKX12YXIgdCxyLG87cmV0dXJuIGZ1bmN0aW9uKG4sZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO24ucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTpuLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxlJiZwbihuLGUpfShlLG4pLHQ9ZSwocj1be2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5wcm9wcyxlPW4ubmFtZSx0PW4uaXNvMixyPW4uZGlhbENvZGUsbz1uLmxvY2FsaXphdGlvbixhPW4uaXRlbVJlZixpPW4ubmF0aXZlLHU9YW4obixbXCJuYW1lXCIsXCJpc28yXCIsXCJkaWFsQ29kZVwiLFwibG9jYWxpemF0aW9uXCIsXCJpdGVtUmVmXCIsXCJuYXRpdmVcIl0pO3JldHVybiBpP1EuYS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsb24oe2NsYXNzTmFtZTpcImNvdW50cnlcIixcImRhdGEtZGlhbC1jb2RlXCI6XCIxXCIsXCJkYXRhLWNvdW50cnktY29kZVwiOnQsdmFsdWU6dH0sdSksb3x8ZSxcIiBcIixcIitcIi5jb25jYXQocikpOlEuYS5jcmVhdGVFbGVtZW50KHRuLmEse3Jvb3RSZWY6ZnVuY3Rpb24obil7cmV0dXJuIGEobil9fSxRLmEuY3JlYXRlRWxlbWVudChubi5hLG9uKHtjbGFzc05hbWU6XCJjb3VudHJ5XCIsXCJkYXRhLWRpYWwtY29kZVwiOlwiMVwiLFwiZGF0YS1jb3VudHJ5LWNvZGVcIjp0fSx1KSxRLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJmbGFnIFwiLmNvbmNhdCh0LFwiIG1hcmdpblwiKX0pLFEuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJjb3VudHJ5LW5hbWVcIn0sb3x8ZSksUS5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcImRpYWwtY29kZVwifSxcIitcIi5jb25jYXQocikpKSl9fV0pJiZ1bih0LnByb3RvdHlwZSxyKSxvJiZ1bih0LG8pLGV9KFEuYS5QdXJlQ29tcG9uZW50KTtmbi5wcm9wVHlwZXM9e25hbWU6VC5hLnN0cmluZy5pc1JlcXVpcmVkLGlzbzI6VC5hLnN0cmluZy5pc1JlcXVpcmVkLGRpYWxDb2RlOlQuYS5zdHJpbmcuaXNSZXF1aXJlZCxpdGVtUmVmOlQuYS5mdW5jLmlzUmVxdWlyZWQsbG9jYWxpemF0aW9uOlQuYS5zdHJpbmcsbmF0aXZlOlQuYS5ib29sfSxmbi5kZWZhdWx0UHJvcHM9e2xvY2FsaXphdGlvbjpudWxsLG5hdGl2ZTohMX07dmFyIGxuPWZuO3QoMTc2KSx0KDU5KTtmdW5jdGlvbiBnbihuKXtyZXR1cm4oZ249XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKG4pe3JldHVybiB0eXBlb2Ygbn06ZnVuY3Rpb24obil7cmV0dXJuIG4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmbi5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmbiE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2Ygbn0pKG4pfWZ1bmN0aW9uIGRuKCl7cmV0dXJuKGRuPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKG4pe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciB0PWFyZ3VtZW50c1tlXTtmb3IodmFyIHIgaW4gdClPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxyKSYmKG5bcl09dFtyXSl9cmV0dXJuIG59KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gYm4obixlKXt2YXIgdD1PYmplY3Qua2V5cyhuKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG4pO2UmJihyPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLGUpLmVudW1lcmFibGV9KSkpLHQucHVzaC5hcHBseSh0LHIpfXJldHVybiB0fWZ1bmN0aW9uIHhuKG4pe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciB0PW51bGwhPWFyZ3VtZW50c1tlXT9hcmd1bWVudHNbZV06e307ZSUyP2JuKHQsITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe0NuKG4sZSx0W2VdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhuLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKTpibih0KS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobixlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKSl9KSl9cmV0dXJuIG59ZnVuY3Rpb24gQW4obixlKXtpZihudWxsPT1uKXJldHVybnt9O3ZhciB0LHIsbz1mdW5jdGlvbihuLGUpe2lmKG51bGw9PW4pcmV0dXJue307dmFyIHQscixvPXt9LGE9T2JqZWN0LmtleXMobik7Zm9yKHI9MDtyPGEubGVuZ3RoO3IrKyl0PWFbcl0sZS5pbmRleE9mKHQpPj0wfHwob1t0XT1uW3RdKTtyZXR1cm4gb30obixlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgYT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG4pO2ZvcihyPTA7cjxhLmxlbmd0aDtyKyspdD1hW3JdLGUuaW5kZXhPZih0KT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG4sdCkmJihvW3RdPW5bdF0pfXJldHVybiBvfWZ1bmN0aW9uIHZuKG4sZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciByPWVbdF07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLHIua2V5LHIpfX1mdW5jdGlvbiBobihuKXtyZXR1cm4oaG49T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gbi5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihuKX0pKG4pfWZ1bmN0aW9uIG1uKG4pe2lmKHZvaWQgMD09PW4pdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiBufWZ1bmN0aW9uIHluKG4sZSl7cmV0dXJuKHluPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24obixlKXtyZXR1cm4gbi5fX3Byb3RvX189ZSxufSkobixlKX1mdW5jdGlvbiBDbihuLGUsdCl7cmV0dXJuIGUgaW4gbj9PYmplY3QuZGVmaW5lUHJvcGVydHkobixlLHt2YWx1ZTp0LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6bltlXT10LG59dmFyIGtuPWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIGUobil7dmFyIHQ7IWZ1bmN0aW9uKG4sZSl7aWYoIShuIGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxlKSx0PWZ1bmN0aW9uKG4sZSl7cmV0dXJuIWV8fFwib2JqZWN0XCIhPT1nbihlKSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZT9tbihuKTplfSh0aGlzLGhuKGUpLmNhbGwodGhpcyxuKSksQ24obW4odCksXCJmbGFnc1wiLHt9KSxDbihtbih0KSxcImd1ZXNzU2VsZWN0ZWRDb3VudHJ5XCIscCgpKChmdW5jdGlvbihuLGUscil7dmFyIG89TygpKGUse2lzbzI6cn0pfHx7fTtpZihcIlwiPT09YygpKG4pKXJldHVybiBvO3ZhciBhPWooKShlLChmdW5jdGlvbihlLHQpe2lmKGkoKShuLHQuZGlhbENvZGUpKXtpZih0LmRpYWxDb2RlLmxlbmd0aD5lLmRpYWxDb2RlLmxlbmd0aClyZXR1cm4gdDtpZih0LmRpYWxDb2RlLmxlbmd0aD09PWUuZGlhbENvZGUubGVuZ3RoJiZ0LnByaW9yaXR5PGUucHJpb3JpdHkpcmV0dXJuIHR9cmV0dXJuIGV9KSx7ZGlhbENvZGU6XCJcIixwcmlvcml0eToxMDAwMX0sbW4odCkpO3JldHVybiBhLm5hbWU/YTpvfSkpKSxDbihtbih0KSxcImdldFByb2JhYmxlQ2FuZGlkYXRlXCIscCgpKChmdW5jdGlvbihuKXtpZighbnx8MD09PW4ubGVuZ3RoKXJldHVybiBudWxsO3ZhciBlPXQuc3RhdGUub25seUNvdW50cmllcztyZXR1cm4gQygpKGUsKGZ1bmN0aW9uKGUpe3JldHVybiBpKCkoZS5uYW1lLnRvTG93ZXJDYXNlKCksbi50b0xvd2VyQ2FzZSgpKX0pLG1uKHQpKVswXX0pKSksQ24obW4odCksXCJnZXRPbmx5Q291bnRyaWVzXCIsKGZ1bmN0aW9uKG4sZSl7cmV0dXJuIDA9PT1uLmxlbmd0aD9lOmUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gbi5zb21lKChmdW5jdGlvbihuKXtyZXR1cm4gbj09PWUuaXNvMn0pKX0pKX0pKSxDbihtbih0KSxcImV4Y2x1ZGVDb3VudHJpZXNcIiwoZnVuY3Rpb24obixlKXtyZXR1cm4gMD09PWUubGVuZ3RoP246QygpKG4sKGZ1bmN0aW9uKG4pe3JldHVybiFtKCkoZSxuLmlzbzIpfSkpfSkpLENuKG1uKHQpLFwiZmlsdGVyUmVnaW9uc1wiLChmdW5jdGlvbihuLGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgdD1uO3JldHVybiBlLmZpbHRlcigoZnVuY3Rpb24obil7cmV0dXJuIG4ucmVnaW9ucy5zb21lKChmdW5jdGlvbihuKXtyZXR1cm4gbj09PXR9KSl9KSl9cmV0dXJuIGUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gbi5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybiBlLnJlZ2lvbnMuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1ufSkpfSkpLnNvbWUoKGZ1bmN0aW9uKG4pe3JldHVybiBufSkpfSkpfSkpLENuKG1uKHQpLFwiZGVsZXRlQXJlYUNvZGVzXCIsKGZ1bmN0aW9uKG4pe3JldHVybiBuLmZpbHRlcigoZnVuY3Rpb24obil7cmV0dXJuITAhPT1uLmlzQXJlYUNvZGV9KSl9KSksQ24obW4odCksXCJ1cGRhdGVEZWZhdWx0Q291bnRyeVwiLChmdW5jdGlvbihuKXt2YXIgZT10LnN0YXRlLm9ubHlDb3VudHJpZXMscj10LnByb3BzLmRpc2FibGVDb3VudHJ5Q29kZSxvPU8oKShlLHtpc28yOm59KTt0LnNldFN0YXRlKHtkZWZhdWx0Q291bnRyeTpuLHNlbGVjdGVkQ291bnRyeTpvLGZvcm1hdHRlZE51bWJlcjpyP1wiXCI6XCIrXCIuY29uY2F0KG8uZGlhbENvZGUpfSl9KSksQ24obW4odCksXCJzY3JvbGxUb1wiLChmdW5jdGlvbihuKXtpZihuKXt2YXIgZT10LmRyb3Bkb3duQ29udGFpbmVyUmVmO2UmJmRvY3VtZW50LmJvZHkmJihlLnNjcm9sbFRvcD1uLm9mZnNldFRvcCl9fSkpLENuKG1uKHQpLFwiZm9ybWF0TnVtYmVyXCIsKGZ1bmN0aW9uKG4sZSl7dmFyIHIsbz10LnByb3BzLGE9by5kaXNhYmxlQ291bnRyeUNvZGUsaT1vLmVuYWJsZUxvbmdOdW1iZXJzLHU9by5hdXRvRm9ybWF0O2lmKGEmJmU/KChyPWUuc3BsaXQoXCIgXCIpKS5zaGlmdCgpLHI9ci5qb2luKFwiIFwiKSk6cj1lLCFufHwwPT09bi5sZW5ndGgpcmV0dXJuIGE/XCJcIjpcIitcIjtpZihuJiZuLmxlbmd0aDwyfHwhcnx8IXUpcmV0dXJuIGE/bjpcIitcIi5jb25jYXQobik7dmFyIGMscz1qKCkociwoZnVuY3Rpb24obixlKXtyZXR1cm4gMD09PW4ucmVtYWluaW5nVGV4dC5sZW5ndGg/bjpcIi5cIiE9PWU/e2Zvcm1hdHRlZFRleHQ6bi5mb3JtYXR0ZWRUZXh0K2UscmVtYWluaW5nVGV4dDpuLnJlbWFpbmluZ1RleHR9Ontmb3JtYXR0ZWRUZXh0Om4uZm9ybWF0dGVkVGV4dCt4KCkobi5yZW1haW5pbmdUZXh0KSxyZW1haW5pbmdUZXh0OmQoKShuLnJlbWFpbmluZ1RleHQpfX0pLHtmb3JtYXR0ZWRUZXh0OlwiXCIscmVtYWluaW5nVGV4dDpuLnNwbGl0KFwiXCIpfSk7cmV0dXJuKGM9aT9zLmZvcm1hdHRlZFRleHQrcy5yZW1haW5pbmdUZXh0LmpvaW4oXCJcIik6cy5mb3JtYXR0ZWRUZXh0KS5pbmNsdWRlcyhcIihcIikmJiFjLmluY2x1ZGVzKFwiKVwiKSYmKGMrPVwiKVwiKSxjfSkpLENuKG1uKHQpLFwiY3Vyc29yVG9FbmRcIiwoZnVuY3Rpb24oKXt2YXIgbj10LnByb3BzLmlzTW9kZXJuQnJvd3NlcixlPXQuaW5wdXRSZWY7aWYoZS5mb2N1cygpLG4pe3ZhciByPWUudmFsdWUubGVuZ3RoO2Uuc2V0U2VsZWN0aW9uUmFuZ2UocixyKX19KSksQ24obW4odCksXCJnZXRFbGVtZW50XCIsKGZ1bmN0aW9uKG4pe3JldHVybiB0LmZsYWdzW1wiZmxhZ19ub19cIi5jb25jYXQobildfSkpLENuKG1uKHQpLFwiZ2V0Q291bnRyeURhdGFcIiwoZnVuY3Rpb24oKXt2YXIgbj10LnN0YXRlLnNlbGVjdGVkQ291bnRyeTtyZXR1cm4gbj97bmFtZTpuLm5hbWV8fFwiXCIsZGlhbENvZGU6bi5kaWFsQ29kZXx8XCJcIixjb3VudHJ5Q29kZTpuLmlzbzJ8fFwiXCJ9Ont9fSkpLENuKG1uKHQpLFwiaGFuZGxlSW5wdXRcIiwoZnVuY3Rpb24obil7dmFyIGU9dC5zdGF0ZSxyPWUuc2VsZWN0ZWRDb3VudHJ5LG89ZS5mcmVlemVTZWxlY3Rpb24sYT10LnN0YXRlLGk9YS5zZWxlY3RlZENvdW50cnksdT1hLmZvcm1hdHRlZE51bWJlcixjPWEub25seUNvdW50cmllcyxzPWEuZGVmYXVsdENvdW50cnkscD10LnByb3BzLGY9cC5kaXNhYmxlQ291bnRyeUNvZGUsbD1wLmNvdW50cnlDb2RlRWRpdGFibGUsZz1wLmlzTW9kZXJuQnJvd3NlcixkPXAub25DaGFuZ2UsYj1mP1wiXCI6XCIrXCI7aWYoIWwpe3ZhciB4PVwiK1wiLmNvbmNhdChyLmRpYWxDb2RlKTtpZihuLnRhcmdldC52YWx1ZS5sZW5ndGg8eC5sZW5ndGgpcmV0dXJufWlmKCEobi50YXJnZXQudmFsdWUucmVwbGFjZSgvXFxEL2csXCJcIikubGVuZ3RoPjE1KSYmbi50YXJnZXQudmFsdWUhPT11KXtpZihuLnByZXZlbnREZWZhdWx0P24ucHJldmVudERlZmF1bHQoKTpuLnJldHVyblZhbHVlPSExLG4udGFyZ2V0LnZhbHVlLmxlbmd0aD4wKXt2YXIgQT1uLnRhcmdldC52YWx1ZS5yZXBsYWNlKC9cXEQvZyxcIlwiKTsoIW98fGkuZGlhbENvZGUubGVuZ3RoPkEubGVuZ3RoKSYmKHI9dC5ndWVzc1NlbGVjdGVkQ291bnRyeShBLnN1YnN0cmluZygwLDYpLGMscyksbz0hMSksYj10LmZvcm1hdE51bWJlcihBLHIuZm9ybWF0KX12YXIgdj1uLnRhcmdldC5zZWxlY3Rpb25TdGFydCxoPWIubGVuZ3RoLXUubGVuZ3RoO3Quc2V0U3RhdGUoe2Zvcm1hdHRlZE51bWJlcjpiLGZyZWV6ZVNlbGVjdGlvbjpvLHNlbGVjdGVkQ291bnRyeTpyLmRpYWxDb2RlP3I6aX0sKGZ1bmN0aW9uKCl7ZyYmKGg+MCYmKHYtPWgpLFwiKVwiPT09Yi5jaGFyQXQoYi5sZW5ndGgtMSk/dC5pbnB1dFJlZi5zZXRTZWxlY3Rpb25SYW5nZShiLmxlbmd0aC0xLGIubGVuZ3RoLTEpOnY+MCYmdS5sZW5ndGg+PWIubGVuZ3RoJiZ0LmlucHV0UmVmLnNldFNlbGVjdGlvblJhbmdlKHYsdikpO2QmJmQoYix0LmdldENvdW50cnlEYXRhKCkpfSkpfX0pKSxDbihtbih0KSxcImhhbmRsZVJlZklucHV0XCIsKGZ1bmN0aW9uKG4pe3ZhciBlLHI9dC5wcm9wcyxvPXIuaW5wdXRSZWYsYT1yLklucHV0UHJvcHM7dC5pbnB1dFJlZj1uLG8/ZT1vOmEmJmEucmVmJiYoZT1hLnJlZiksZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZShuKTplLmN1cnJlbnQ9bil9KSksQ24obW4odCksXCJoYW5kbGVJbnB1dENsaWNrXCIsKGZ1bmN0aW9uKG4pe3ZhciBlPXQucHJvcHMub25DbGljaztlJiZlKG4sdC5nZXRDb3VudHJ5RGF0YSgpKX0pKSxDbihtbih0KSxcImhhbmRsZUZsYWdJdGVtQ2xpY2tcIiwoZnVuY3Rpb24obil7dmFyIGU9dC5zdGF0ZSxyPWUuZm9ybWF0dGVkTnVtYmVyLGE9ZS5zZWxlY3RlZENvdW50cnksaT1lLm9ubHlDb3VudHJpZXMsdT10LnByb3BzLm9uQ2hhbmdlLGM9YSxzPW8oKShuKT9PKCkoaSwoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaXNvMj09PW59KSk6TygpKGksbikscD1yLnJlcGxhY2UoXCIgXCIsXCJcIikucmVwbGFjZShcIihcIixcIlwiKS5yZXBsYWNlKFwiKVwiLFwiXCIpLnJlcGxhY2UoXCItXCIsXCJcIiksZj1wLmxlbmd0aD4xP3AucmVwbGFjZShjLmRpYWxDb2RlLHMuZGlhbENvZGUpOnMuZGlhbENvZGUsbD10LmZvcm1hdE51bWJlcihmLnJlcGxhY2UoL1xcRC9nLFwiXCIpLHMuZm9ybWF0KTt0LnNldFN0YXRlKHthbmNob3JFbDpudWxsLHNlbGVjdGVkQ291bnRyeTpzLGZyZWV6ZVNlbGVjdGlvbjohMCxmb3JtYXR0ZWROdW1iZXI6bH0sKGZ1bmN0aW9uKCl7dC5jdXJzb3JUb0VuZCgpLHUmJnUobCx0LmdldENvdW50cnlEYXRhKCkpfSkpfSkpLENuKG1uKHQpLFwiaGFuZGxlSW5wdXRGb2N1c1wiLChmdW5jdGlvbihuKXt2YXIgZT10LnN0YXRlLnNlbGVjdGVkQ291bnRyeSxyPXQucHJvcHMsbz1yLmRpc2FibGVDb3VudHJ5Q29kZSxhPXIub25Gb2N1czt0LmlucHV0UmVmJiZcIitcIj09PXQuaW5wdXRSZWYudmFsdWUmJmUmJiFvJiZ0LnNldFN0YXRlKHtmb3JtYXR0ZWROdW1iZXI6XCIrXCIuY29uY2F0KGUuZGlhbENvZGUpfSwoZnVuY3Rpb24oKXtyZXR1cm4gc2V0VGltZW91dCh0LmN1cnNvclRvRW5kLDEwKX0pKSx0LnNldFN0YXRlKHtwbGFjZWhvbGRlcjpcIlwifSksYSYmYShuLHQuZ2V0Q291bnRyeURhdGEoKSksc2V0VGltZW91dCh0LmN1cnNvclRvRW5kLDEwKX0pKSxDbihtbih0KSxcImhhbmRsZUlucHV0Qmx1clwiLChmdW5jdGlvbihuKXt2YXIgZT10LnByb3BzLHI9ZS5wbGFjZWhvbGRlcixvPWUub25CbHVyO24udGFyZ2V0LnZhbHVlfHx0LnNldFN0YXRlKHtwbGFjZWhvbGRlcjpyfSksbyYmbyhuLHQuZ2V0Q291bnRyeURhdGEoKSl9KSksQ24obW4odCksXCJnZXRIaWdobGlnaHRDb3VudHJ5SW5kZXhcIiwoZnVuY3Rpb24obil7dmFyIGU9dC5zdGF0ZSxyPWUuaGlnaGxpZ2h0Q291bnRyeUluZGV4LG89ZS5vbmx5Q291bnRyaWVzLGE9ZS5wcmVmZXJyZWRDb3VudHJpZXMsaT1yK247cmV0dXJuIGk8MHx8aT49by5sZW5ndGgrYS5sZW5ndGg/aS1uOml9KSksQ24obW4odCksXCJzZWFyY2hDb3VudHJ5XCIsKGZ1bmN0aW9uKCl7dmFyIG49dC5zdGF0ZSxlPW4ucXVlcnlTdHJpbmcscj1uLm9ubHlDb3VudHJpZXMsbz1uLnByZWZlcnJlZENvdW50cmllcyxhPXQuZ2V0UHJvYmFibGVDYW5kaWRhdGUoZSl8fHJbMF0saT12KCkocixhKStvLmxlbmd0aDt0LnNjcm9sbFRvKHQuZ2V0RWxlbWVudChpKSwhMCksdC5zZXRTdGF0ZSh7cXVlcnlTdHJpbmc6XCJcIixoaWdobGlnaHRDb3VudHJ5SW5kZXg6aX0pfSkpLENuKG1uKHQpLFwiaGFuZGxlS2V5ZG93blwiLChmdW5jdGlvbihuKXt2YXIgZT10LnN0YXRlLHI9ZS5hbmNob3JFbCxvPWUuaGlnaGxpZ2h0Q291bnRyeUluZGV4LGE9ZS5wcmVmZXJyZWRDb3VudHJpZXMsaT1lLm9ubHlDb3VudHJpZXMsdT1lLnF1ZXJ5U3RyaW5nLGM9ZS5kZWJvdW5jZWRRdWVyeVN0aW5nU2VhcmNoZXIscz10LnByb3BzLHA9cy5rZXlzLGY9cy5kaXNhYmxlZDtpZihyJiYhZil7bi5wcmV2ZW50RGVmYXVsdD9uLnByZXZlbnREZWZhdWx0KCk6bi5yZXR1cm5WYWx1ZT0hMTt2YXIgbD1mdW5jdGlvbihuKXt0LnNldFN0YXRlKHtoaWdobGlnaHRDb3VudHJ5SW5kZXg6dC5nZXRIaWdobGlnaHRDb3VudHJ5SW5kZXgobil9LChmdW5jdGlvbigpe3Quc2Nyb2xsVG8odC5nZXRFbGVtZW50KG8rYS5sZW5ndGgpLCEwKX0pKX07c3dpdGNoKG4ud2hpY2gpe2Nhc2UgcC5ET1dOOmwoMSk7YnJlYWs7Y2FzZSBwLlVQOmwoLTEpO2JyZWFrO2Nhc2UgcC5FTlRFUjp0LmhhbmRsZUZsYWdJdGVtQ2xpY2soaVtvXSxuKTticmVhaztjYXNlIHAuRVNDOnQuc2V0U3RhdGUoe2FuY2hvckVsOm51bGx9LHQuY3Vyc29yVG9FbmQpO2JyZWFrO2RlZmF1bHQ6KG4ud2hpY2g+PXAuQSYmbi53aGljaDw9cC5afHxuLndoaWNoPT09cC5TUEFDRSkmJnQuc2V0U3RhdGUoe3F1ZXJ5U3RyaW5nOnUrU3RyaW5nLmZyb21DaGFyQ29kZShuLndoaWNoKX0sYyl9fX0pKSxDbihtbih0KSxcImhhbmRsZUlucHV0S2V5RG93blwiLChmdW5jdGlvbihuKXt2YXIgZT10LnByb3BzLHI9ZS5rZXlzLG89ZS5vbkVudGVyS2V5UHJlc3MsYT1lLm9uS2V5RG93bjtuLndoaWNoPT09ci5FTlRFUiYmbyYmbyhuKSxhJiZhKG4pfSkpLENuKG1uKHQpLFwiY2hlY2tJZlZhbGlkXCIsKGZ1bmN0aW9uKCl7dmFyIG49dC5zdGF0ZS5mb3JtYXR0ZWROdW1iZXI7cmV0dXJuKDAsdC5wcm9wcy5pc1ZhbGlkKShuLnJlcGxhY2UoL1xcRC9nLFwiXCIpKX0pKSxDbihtbih0KSxcInVwZGF0ZUZvcm1hdHRlZE51bWJlclwiLChmdW5jdGlvbihuKXt2YXIgZSxyPXQuc3RhdGUsbz1yLm9ubHlDb3VudHJpZXMsYT1yLmRlZmF1bHRDb3VudHJ5LHU9dC5wcm9wcy5kaXNhYmxlQ291bnRyeUNvZGUsYz1uLHM9bjtpZihjLnN0YXJ0c1dpdGgoXCIrXCIpKWM9Yy5yZXBsYWNlKC9cXEQvZyxcIlwiKSxlPXQuZ3Vlc3NTZWxlY3RlZENvdW50cnkoYy5zdWJzdHJpbmcoMCw2KSxvLGEpLHM9dC5mb3JtYXROdW1iZXIoYyxlLmZvcm1hdCk7ZWxzZXt2YXIgcD0oZT1PKCkobyx7aXNvMjphfSkpJiYhaSgpKGMucmVwbGFjZSgvXFxEL2csXCJcIiksZS5kaWFsQ29kZSk/ZS5kaWFsQ29kZTpcIlwiO3M9dC5mb3JtYXROdW1iZXIoKHU/XCJcIjpwKStjLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGU/ZS5mb3JtYXQ6dm9pZCAwKX10LnNldFN0YXRlKHtzZWxlY3RlZENvdW50cnk6ZSxmb3JtYXR0ZWROdW1iZXI6c30pfSkpLENuKG1uKHQpLFwiZ2V0RHJvcGRvd25Qcm9wc1wiLChmdW5jdGlvbigpe3ZhciBuPXQuc3RhdGUsZT1uLnNlbGVjdGVkQ291bnRyeSxyPW4uYW5jaG9yRWwsbz1uLnByZWZlcnJlZENvdW50cmllcyxhPW4ub25seUNvdW50cmllcyxpPXQucHJvcHMsdT1pLmNsYXNzZXMsYz1pLmRyb3Bkb3duQ2xhc3Mscz1pLmxvY2FsaXphdGlvbixwPWkuZGlzYWJsZURyb3Bkb3duLGY9aS5uYXRpdmUsbD1cImZsYWcgXCIuY29uY2F0KGUuaXNvMiksZz1mdW5jdGlvbihuKXtyZXR1cm4gQm9vbGVhbihlJiZlLmRpYWxDb2RlPT09bi5kaWFsQ29kZSl9O3JldHVybiBwP3t9OntzdGFydEFkb3JubWVudDpRLmEuY3JlYXRlRWxlbWVudChOLmEse2NsYXNzTmFtZTp1LnBvc2l0aW9uU3RhcnQscG9zaXRpb246XCJzdGFydFwifSxmP1EuYS5jcmVhdGVFbGVtZW50KFEuYS5GcmFnbWVudCxudWxsLFEuYS5jcmVhdGVFbGVtZW50KEouYSx7aWQ6XCJjb3VudHJ5LW1lbnVcIixvcGVuOkJvb2xlYW4ociksb25DbG9zZTpmdW5jdGlvbigpe3JldHVybiB0LnNldFN0YXRlKHthbmNob3JFbDpudWxsfSl9LGNsYXNzTmFtZTp1Lm5hdGl2ZSxjbGFzc2VzOntyb290OlIoKSh1Lm5hdGl2ZVJvb3QsXCJuYXRpdmVcIixsKSxzZWxlY3Q6dS5uYXRpdmVTZWxlY3R9LG9uQ2hhbmdlOmZ1bmN0aW9uKG4pe3JldHVybiB0LmhhbmRsZUZsYWdJdGVtQ2xpY2sobi50YXJnZXQudmFsdWUpfSxkaXNhYmxlVW5kZXJsaW5lOiEwfSwhIW8ubGVuZ3RoJiZ3KCkobywoZnVuY3Rpb24obixlKXtyZXR1cm4gUS5hLmNyZWF0ZUVsZW1lbnQobG4se2tleTpcInByZWZlcnJlZF9cIi5jb25jYXQobi5pc28yLFwiX1wiKS5jb25jYXQoZSksaXRlbVJlZjpmdW5jdGlvbihuKXt0LmZsYWdzW1wiZmxhZ19ub19cIi5jb25jYXQoZSldPW59LG5hbWU6bi5uYW1lLGlzbzI6bi5pc28yLGRpYWxDb2RlOm4uZGlhbENvZGUsbG9jYWxpemF0aW9uOnMmJnNbbi5uYW1lXSxuYXRpdmU6ITB9KX0pKSx3KCkoYSwoZnVuY3Rpb24obixlKXtyZXR1cm4gUS5hLmNyZWF0ZUVsZW1lbnQobG4se2tleTpcInByZWZlcnJlZF9cIi5jb25jYXQobi5pc28yLFwiX1wiKS5jb25jYXQoZSksaXRlbVJlZjpmdW5jdGlvbihuKXt0LmZsYWdzW1wiZmxhZ19ub19cIi5jb25jYXQoZSldPW59LG5hbWU6bi5uYW1lLGlzbzI6bi5pc28yLGRpYWxDb2RlOm4uZGlhbENvZGUsbG9jYWxpemF0aW9uOnMmJnNbbi5uYW1lXSxuYXRpdmU6ITB9KX0pKSkpOlEuYS5jcmVhdGVFbGVtZW50KFEuYS5GcmFnbWVudCxudWxsLFEuYS5jcmVhdGVFbGVtZW50KEsuYSx7Y2xhc3NOYW1lOnUuZmxhZ0J1dHRvbixcImFyaWEtb3duc1wiOnI/XCJjb3VudHJ5LW1lbnVcIjpudWxsLFwiYXJpYS1sYWJlbFwiOlwiU2VsZWN0IGNvdW50cnlcIixvbkNsaWNrOmZ1bmN0aW9uKG4pe3JldHVybiB0LnNldFN0YXRlKHthbmNob3JFbDpuLmN1cnJlbnRUYXJnZXR9KX0sXCJhcmlhLWhhc3BvcHVwXCI6ITB9LFEuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpsfSkpLFEuYS5jcmVhdGVFbGVtZW50KEguYSx7Y2xhc3NOYW1lOmMsaWQ6XCJjb3VudHJ5LW1lbnVcIixhbmNob3JFbDpyLG9wZW46Qm9vbGVhbihyKSxvbkNsb3NlOmZ1bmN0aW9uKCl7cmV0dXJuIHQuc2V0U3RhdGUoe2FuY2hvckVsOm51bGx9KX19LCEhby5sZW5ndGgmJncoKShvLChmdW5jdGlvbihuLGUpe3JldHVybiBRLmEuY3JlYXRlRWxlbWVudChsbix7a2V5OlwicHJlZmVycmVkX1wiLmNvbmNhdChuLmlzbzIsXCJfXCIpLmNvbmNhdChlKSxpdGVtUmVmOmZ1bmN0aW9uKG4pe3QuZmxhZ3NbXCJmbGFnX25vX1wiLmNvbmNhdChlKV09bn0sc2VsZWN0ZWQ6ZyhuKSxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHQuaGFuZGxlRmxhZ0l0ZW1DbGljayhuKX0sbmFtZTpuLm5hbWUsaXNvMjpuLmlzbzIsZGlhbENvZGU6bi5kaWFsQ29kZSxsb2NhbGl6YXRpb246cyYmc1tuLm5hbWVdfSl9KSksISFvLmxlbmd0aCYmUS5hLmNyZWF0ZUVsZW1lbnQoWS5hLG51bGwpLHcoKShhLChmdW5jdGlvbihuLGUpe3JldHVybiBRLmEuY3JlYXRlRWxlbWVudChsbix7a2V5OlwicHJlZmVycmVkX1wiLmNvbmNhdChuLmlzbzIsXCJfXCIpLmNvbmNhdChlKSxpdGVtUmVmOmZ1bmN0aW9uKG4pe3QuZmxhZ3NbXCJmbGFnX25vX1wiLmNvbmNhdChlKV09bn0sc2VsZWN0ZWQ6ZyhuKSxvbkNsaWNrOmZ1bmN0aW9uKCl7cmV0dXJuIHQuaGFuZGxlRmxhZ0l0ZW1DbGljayhuKX0sbmFtZTpuLm5hbWUsaXNvMjpuLmlzbzIsZGlhbENvZGU6bi5kaWFsQ29kZSxsb2NhbGl6YXRpb246cyYmc1tuLm5hbWVdfSl9KSkpKSl9fSkpO3ZhciByPV8uYS5hbGxDb3VudHJpZXM7bi5kaXNhYmxlQXJlYUNvZGVzJiYocj10LmRlbGV0ZUFyZWFDb2RlcyhyKSksbi5yZWdpb25zJiYocj10LmZpbHRlclJlZ2lvbnMobi5yZWdpb25zLHIpKTt2YXIgYSx1PXQuZXhjbHVkZUNvdW50cmllcyh0LmdldE9ubHlDb3VudHJpZXMobi5vbmx5Q291bnRyaWVzLHIpLG4uZXhjbHVkZUNvdW50cmllcykscz1DKCkociwoZnVuY3Rpb24oZSl7cmV0dXJuIEkoKShuLnByZWZlcnJlZENvdW50cmllcywoZnVuY3Rpb24obil7cmV0dXJuIG49PT1lLmlzbzJ9KSl9KSksZj1uLnZhbHVlfHxcIlwiO2E9Zi5sZW5ndGg+MT90Lmd1ZXNzU2VsZWN0ZWRDb3VudHJ5KGYucmVwbGFjZSgvXFxEL2csXCJcIikuc3Vic3RyaW5nKDAsNiksdSxuLmRlZmF1bHRDb3VudHJ5KXx8MDpuLmRlZmF1bHRDb3VudHJ5JiZPKCkodSx7aXNvMjpuLmRlZmF1bHRDb3VudHJ5fSl8fDA7dmFyIGc9digpKHQuYWxsQ291bnRyaWVzLGEpLGI9Zi5sZW5ndGg8MiYmYSYmIWkoKShmLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGEuZGlhbENvZGUpP2EuZGlhbENvZGU6XCJcIixBPVwiXCI9PT1mJiYwPT09YT9cIlwiOnQuZm9ybWF0TnVtYmVyKChuLmRpc2FibGVDb3VudHJ5Q29kZT9cIlwiOmIpK2YucmVwbGFjZSgvXFxEL2csXCJcIiksYS5uYW1lP2EuZm9ybWF0OnZvaWQgMCk7cmV0dXJuIHQuc3RhdGU9e2Zvcm1hdHRlZE51bWJlcjpBLHBsYWNlaG9sZGVyOm4ucGxhY2Vob2xkZXIsb25seUNvdW50cmllczp1LHByZWZlcnJlZENvdW50cmllczpzLGRlZmF1bHRDb3VudHJ5Om4uZGVmYXVsdENvdW50cnksc2VsZWN0ZWRDb3VudHJ5OmEsaGlnaGxpZ2h0Q291bnRyeUluZGV4OmcscXVlcnlTdHJpbmc6XCJcIixmcmVlemVTZWxlY3Rpb246ITEsZGVib3VuY2VkUXVlcnlTdGluZ1NlYXJjaGVyOmwoKSh0LnNlYXJjaENvdW50cnksMTAwKSxhbmNob3JFbDpudWxsfSx0fXZhciB0LHIsYTtyZXR1cm4gZnVuY3Rpb24obixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZudWxsIT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7bi5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlJiZlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOm4sd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJnluKG4sZSl9KGUsbiksdD1lLChyPVt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXImJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5oYW5kbGVLZXlkb3duKX19LHtrZXk6XCJjb21wb25lbnREaWRVcGRhdGVcIix2YWx1ZTpmdW5jdGlvbihuKXt2YXIgZT1uLnZhbHVlLHQ9dGhpcy5zdGF0ZSxyPXQuZGVmYXVsdENvdW50cnksbz10LmZvcm1hdHRlZE51bWJlcixhPXRoaXMucHJvcHMsaT1hLmRlZmF1bHRDb3VudHJ5LHU9YS52YWx1ZTtpJiZpIT09ciYmdGhpcy51cGRhdGVEZWZhdWx0Q291bnRyeShpKSxcInN0cmluZ1wiPT10eXBlb2YgdSYmdSE9PWUmJnUhPT1vJiZ0aGlzLnVwZGF0ZUZvcm1hdHRlZE51bWJlcih1KX19LHtrZXk6XCJjb21wb25lbnRXaWxsVW5tb3VudFwiLHZhbHVlOmZ1bmN0aW9uKCl7ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciYmZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLmhhbmRsZUtleWRvd24pfX0se2tleTpcInJlbmRlclwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5zdGF0ZSxlPW4uZm9ybWF0dGVkTnVtYmVyLHQ9bi5wbGFjZWhvbGRlcixyPXRoaXMucHJvcHMsbz0oci5uYXRpdmUsci5kZWZhdWx0Q291bnRyeSxyLmV4Y2x1ZGVDb3VudHJpZXMsci5vbmx5Q291bnRyaWVzLHIucHJlZmVycmVkQ291bnRyaWVzLHIuZHJvcGRvd25DbGFzcyxyLmF1dG9Gb3JtYXQsci5kaXNhYmxlQXJlYUNvZGVzLHIuaXNWYWxpZCxyLmRpc2FibGVDb3VudHJ5Q29kZSxyLmRpc2FibGVEcm9wZG93bixyLmVuYWJsZUxvbmdOdW1iZXJzLHIuY291bnRyeUNvZGVFZGl0YWJsZSxyLm9uRW50ZXJLZXlQcmVzcyxyLmlzTW9kZXJuQnJvd3NlcixyLmNsYXNzZXMsci5rZXlzLHIubG9jYWxpemF0aW9uLHIucGxhY2Vob2xkZXIsci5yZWdpb25zLHIub25DaGFuZ2Usci52YWx1ZSxyLmlucHV0Q2xhc3MpLGE9ci5lcnJvcixpPXIuSW5wdXRQcm9wcyx1PUFuKHIsW1wibmF0aXZlXCIsXCJkZWZhdWx0Q291bnRyeVwiLFwiZXhjbHVkZUNvdW50cmllc1wiLFwib25seUNvdW50cmllc1wiLFwicHJlZmVycmVkQ291bnRyaWVzXCIsXCJkcm9wZG93bkNsYXNzXCIsXCJhdXRvRm9ybWF0XCIsXCJkaXNhYmxlQXJlYUNvZGVzXCIsXCJpc1ZhbGlkXCIsXCJkaXNhYmxlQ291bnRyeUNvZGVcIixcImRpc2FibGVEcm9wZG93blwiLFwiZW5hYmxlTG9uZ051bWJlcnNcIixcImNvdW50cnlDb2RlRWRpdGFibGVcIixcIm9uRW50ZXJLZXlQcmVzc1wiLFwiaXNNb2Rlcm5Ccm93c2VyXCIsXCJjbGFzc2VzXCIsXCJrZXlzXCIsXCJsb2NhbGl6YXRpb25cIixcInBsYWNlaG9sZGVyXCIsXCJyZWdpb25zXCIsXCJvbkNoYW5nZVwiLFwidmFsdWVcIixcImlucHV0Q2xhc3NcIixcImVycm9yXCIsXCJJbnB1dFByb3BzXCJdKSxjPXRoaXMuZ2V0RHJvcGRvd25Qcm9wcygpO3JldHVybiBRLmEuY3JlYXRlRWxlbWVudChVLmEsZG4oe3BsYWNlaG9sZGVyOnQsdmFsdWU6ZSxjbGFzc05hbWU6byxpbnB1dFJlZjp0aGlzLmhhbmRsZVJlZklucHV0LGVycm9yOmF8fCF0aGlzLmNoZWNrSWZWYWxpZCgpLG9uQ2hhbmdlOnRoaXMuaGFuZGxlSW5wdXQsb25DbGljazp0aGlzLmhhbmRsZUlucHV0Q2xpY2ssb25Gb2N1czp0aGlzLmhhbmRsZUlucHV0Rm9jdXMsb25CbHVyOnRoaXMuaGFuZGxlSW5wdXRCbHVyLG9uS2V5RG93bjp0aGlzLmhhbmRsZUlucHV0S2V5RG93bix0eXBlOlwidGVsXCIsSW5wdXRQcm9wczp4bih7fSxjLHt9LGkpfSx1KSl9fV0pJiZ2bih0LnByb3RvdHlwZSxyKSxhJiZ2bih0LGEpLGV9KFEuYS5Db21wb25lbnQpO2tuLnByb3BUeXBlcz17Y2xhc3NlczpULmEub2JqZWN0LGV4Y2x1ZGVDb3VudHJpZXM6VC5hLmFycmF5T2YoVC5hLnN0cmluZyksb25seUNvdW50cmllczpULmEuYXJyYXlPZihULmEuc3RyaW5nKSxwcmVmZXJyZWRDb3VudHJpZXM6VC5hLmFycmF5T2YoVC5hLnN0cmluZyksZGVmYXVsdENvdW50cnk6VC5hLnN0cmluZyx2YWx1ZTpULmEuc3RyaW5nLHBsYWNlaG9sZGVyOlQuYS5zdHJpbmcsZGlzYWJsZWQ6VC5hLmJvb2wsZXJyb3I6VC5hLmJvb2wsdmFyaWFudDpULmEuc3RyaW5nLG5hdGl2ZTpULmEuYm9vbCxpbnB1dENsYXNzOlQuYS5zdHJpbmcsZHJvcGRvd25DbGFzczpULmEuc3RyaW5nLElucHV0UHJvcHM6VC5hLm9iamVjdCxpbnB1dFByb3BzOlQuYS5vYmplY3QsaW5wdXRSZWY6VC5hLmZ1bmMsYXV0b0Zvcm1hdDpULmEuYm9vbCxkaXNhYmxlQXJlYUNvZGVzOlQuYS5ib29sLGRpc2FibGVDb3VudHJ5Q29kZTpULmEuYm9vbCxkaXNhYmxlRHJvcGRvd246VC5hLmJvb2wsZW5hYmxlTG9uZ051bWJlcnM6VC5hLmJvb2wsY291bnRyeUNvZGVFZGl0YWJsZTpULmEuYm9vbCxyZWdpb25zOlQuYS5vbmVPZlR5cGUoW1QuYS5zdHJpbmcsVC5hLmFycmF5T2YoVC5hLnN0cmluZyldKSxsb2NhbGl6YXRpb246VC5hLm9iamVjdCxvbkNoYW5nZTpULmEuZnVuYyxvbkZvY3VzOlQuYS5mdW5jLG9uQmx1cjpULmEuZnVuYyxvbkNsaWNrOlQuYS5mdW5jLG9uS2V5RG93bjpULmEuZnVuYyxpc1ZhbGlkOlQuYS5mdW5jLGlzTW9kZXJuQnJvd3NlcjpULmEuZnVuYyxvbkVudGVyS2V5UHJlc3M6VC5hLmZ1bmMsa2V5czpULmEub2JqZWN0fSxrbi5kZWZhdWx0UHJvcHM9e2V4Y2x1ZGVDb3VudHJpZXM6W10sb25seUNvdW50cmllczpbXSxwcmVmZXJyZWRDb3VudHJpZXM6W10sZGVmYXVsdENvdW50cnk6XCJcIixwbGFjZWhvbGRlcjpcIisxICg3MDIpIDEyMy00NTY3XCIsZGlzYWJsZWQ6ITEsZXJyb3I6ITEsdmFyaWFudDpcInN0YW5kYXJkXCIsbmF0aXZlOiExLGlucHV0Q2xhc3M6XCJcIixkcm9wZG93bkNsYXNzOlwiXCIsYXV0b0Zvcm1hdDohMCxkaXNhYmxlQXJlYUNvZGVzOiExLGlzVmFsaWQ6ZnVuY3Rpb24obil7cmV0dXJuIEkoKShfLmEuYWxsQ291bnRyaWVzLChmdW5jdGlvbihlKXtyZXR1cm4gaSgpKG4sZS5kaWFsQ29kZSl8fGkoKShlLmRpYWxDb2RlLG4pfSkpfSxkaXNhYmxlQ291bnRyeUNvZGU6ITEsZGlzYWJsZURyb3Bkb3duOiExLGVuYWJsZUxvbmdOdW1iZXJzOiExLGNvdW50cnlDb2RlRWRpdGFibGU6ITAscmVnaW9uczpcIlwiLGxvY2FsaXphdGlvbjp7fSxvbkVudGVyS2V5UHJlc3M6ZnVuY3Rpb24oKXt9LG9uQ2hhbmdlOmZ1bmN0aW9uKCl7fSxpc01vZGVybkJyb3dzZXI6ZnVuY3Rpb24oKXtyZXR1cm4hIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQmJkJvb2xlYW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLnNldFNlbGVjdGlvblJhbmdlKX0sa2V5czp7VVA6MzgsRE9XTjo0MCxSSUdIVDozOSxMRUZUOjM3LEVOVEVSOjEzLEVTQzoyNyxQTFVTOjQzLEE6NjUsWjo5MCxTUEFDRTozMn19LGtuLmRpc3BsYXlOYW1lPVwiTXVpUGhvbmVOdW1iZXJcIjt2YXIgd249WigpKChmdW5jdGlvbigpe3JldHVybntmbGFnQnV0dG9uOnttaW5XaWR0aDozMCxwYWRkaW5nOjAsaGVpZ2h0OjMwfSxuYXRpdmU6e3dpZHRoOjMwLGhlaWdodDozMCxwYWRkaW5nOjh9LG5hdGl2ZVJvb3Q6e3BhZGRpbmc6MCxcIiYgKyBzdmdcIjp7ZGlzcGxheTpcIm5vbmVcIn19LG5hdGl2ZVNlbGVjdDp7cGFkZGluZzowLGxpbmVIZWlnaHQ6MCxoZWlnaHQ6MTF9LHBvc2l0aW9uU3RhcnQ6e3Bvc2l0aW9uOlwicmVsYXRpdmVcIn19fSkpKGtuKTtlLmRlZmF1bHQ9d259XSk7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xNC4wXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi4xNC4wJztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3JhcnlcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGJhdGNoJ3MgY29uZmlndXJhdGlvbiBzdWNoIGFzIGhvdyBsb25nIGFuIHVwZGF0ZVxuICogc2hvdWxkIHN1c3BlbmQgZm9yIGlmIGl0IG5lZWRzIHRvLlxuICovXG52YXIgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcgPSB7XG4gIHN1c3BlbnNlOiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuZnVuY3Rpb24gZGVzY3JpYmVDb21wb25lbnRGcmFtZSAobmFtZSwgc291cmNlLCBvd25lck5hbWUpIHtcbiAgdmFyIHNvdXJjZUluZm8gPSAnJztcblxuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuXG4gICAge1xuICAgICAgLy8gSW4gREVWLCBpbmNsdWRlIGNvZGUgZm9yIGEgY29tbW9uIHNwZWNpYWwgY2FzZTpcbiAgICAgIC8vIHByZWZlciBcImZvbGRlci9pbmRleC5qc1wiIGluc3RlYWQgb2YganVzdCBcImluZGV4LmpzXCIuXG4gICAgICBpZiAoL15pbmRleFxcLi8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gcGF0aC5tYXRjaChCRUZPUkVfU0xBU0hfUkUpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHZhciBwYXRoQmVmb3JlU2xhc2ggPSBtYXRjaFsxXTtcblxuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3VyY2VJbmZvID0gJyAoYXQgJyArIGZpbGVOYW1lICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKSc7XG4gIH0gZWxzZSBpZiAob3duZXJOYW1lKSB7XG4gICAgc291cmNlSW5mbyA9ICcgKGNyZWF0ZWQgYnkgJyArIG93bmVyTmFtZSArICcpJztcbiAgfVxuXG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgc291cmNlSW5mbztcbn1cblxudmFyIFJlc29sdmVkID0gMTtcbmZ1bmN0aW9uIHJlZmluZVJlc29sdmVkTGF6eUNvbXBvbmVudChsYXp5Q29tcG9uZW50KSB7XG4gIHJldHVybiBsYXp5Q29tcG9uZW50Ll9zdGF0dXMgPT09IFJlc29sdmVkID8gbGF6eUNvbXBvbmVudC5fcmVzdWx0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuIFwiUHJvZmlsZXJcIjtcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHJldHVybiAnQ29udGV4dC5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgdGhlbmFibGUgPSB0eXBlO1xuICAgICAgICAgIHZhciByZXNvbHZlZFRoZW5hYmxlID0gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KHRoZW5hYmxlKTtcblxuICAgICAgICAgIGlmIChyZXNvbHZlZFRoZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShyZXNvbHZlZFRoZW5hYmxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gbnVsbDtcbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG57XG4gIC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC50eXBlKTtcbiAgICAgIHZhciBvd25lciA9IGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50Ll9vd25lcjtcbiAgICAgIHN0YWNrICs9IGRlc2NyaWJlQ29tcG9uZW50RnJhbWUobmFtZSwgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX3NvdXJjZSwgb3duZXIgJiYgZ2V0Q29tcG9uZW50TmFtZShvd25lci50eXBlKSk7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBfYXNzaWduKFJlYWN0U2hhcmVkSW50ZXJuYWxzLCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgaGFzRXhpc3RpbmdTdGFjayA9IGFyZ3MubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyAmJiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0uaW5kZXhPZignXFxuICAgIGluJykgPT09IDA7XG5cbiAgICBpZiAoIWhhc0V4aXN0aW5nU3RhY2spIHtcbiAgICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vZmIubWUvcmVhY3Qtc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9ICgnJyArIGtleSkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuXG5mdW5jdGlvbiBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQobWFwUmVzdWx0LCBrZXlQcmVmaXgsIG1hcEZ1bmN0aW9uLCBtYXBDb250ZXh0KSB7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCkge1xuICAgIHZhciB0cmF2ZXJzZUNvbnRleHQgPSB0cmF2ZXJzZUNvbnRleHRQb29sLnBvcCgpO1xuICAgIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBtYXBSZXN1bHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IGtleVByZWZpeDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG1hcEZ1bmN0aW9uO1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbWFwQ29udGV4dDtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICAgIHJldHVybiB0cmF2ZXJzZUNvbnRleHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3VsdDogbWFwUmVzdWx0LFxuICAgICAga2V5UHJlZml4OiBrZXlQcmVmaXgsXG4gICAgICBmdW5jOiBtYXBGdW5jdGlvbixcbiAgICAgIGNvbnRleHQ6IG1hcENvbnRleHQsXG4gICAgICBjb3VudDogMFxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuZnVuYyA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb250ZXh0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcblxuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7IXN0cmluZ30gbmFtZVNvRmFyIE5hbWUgb2YgdGhlIGtleSBwYXRoIHNvIGZhci5cbiAqIEBwYXJhbSB7IWZ1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB0byBpbnZva2Ugd2l0aCBlYWNoIGNoaWxkIGZvdW5kLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IFVzZWQgdG8gcGFzcyBpbmZvcm1hdGlvbiB0aHJvdWdob3V0IHRoZSB0cmF2ZXJzYWxcbiAqIHByb2Nlc3MuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbiwgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzLlxuICAgIG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRDb21wb25lbnRLZXkoY2hpbGRyZW4sIDApIDogbmFtZVNvRmFyKTtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBjaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIGNvbnZlcnRpbmcgY2hpbGRyZW4gdG8gJyArICdhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcblxuICAgICAge1xuICAgICAgICBhZGRlbmR1bSA9ICcgSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyArIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuXCIgKyBhZGRlbmR1bSApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgJycsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgY29tcG9uZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGNvbXBvbmVudCBBIGNvbXBvbmVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFNpbmdsZUNoaWxkKGJvb2tLZWVwaW5nLCBjaGlsZCwgbmFtZSkge1xuICB2YXIgZnVuYyA9IGJvb2tLZWVwaW5nLmZ1bmMsXG4gICAgICBjb250ZXh0ID0gYm9va0tlZXBpbmcuY29udGV4dDtcbiAgZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbn1cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwobWFwcGVkQ2hpbGQsIHJlc3VsdCwgY2hpbGRLZXksIGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuXG4gIGlmIChwcmVmaXggIT0gbnVsbCkge1xuICAgIGVzY2FwZWRQcmVmaXggPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkocHJlZml4KSArICcvJztcbiAgfVxuXG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIE1hcHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cblxuXG5mdW5jdGlvbiBtYXBDaGlsZHJlbihjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIG51bGwpO1xufVxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW50b2FycmF5XG4gKi9cblxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICBlcnJvcignbWVtbzogVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wb25lbnQuIEluc3RlYWQgJyArICdyZWNlaXZlZDogJXMnLCB0eXBlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG5cbiAge1xuICAgIGlmICh1bnN0YWJsZV9vYnNlcnZlZEJpdHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IoJ3VzZUNvbnRleHQoKSBzZWNvbmQgYXJndW1lbnQgaXMgcmVzZXJ2ZWQgZm9yIGZ1dHVyZSAnICsgJ3VzZSBpbiBSZWFjdC4gUGFzc2luZyBpdCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1lvdSBwYXNzZWQ6ICVzLiVzJywgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzLCB0eXBlb2YgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSAnbnVtYmVyJyAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1syXSkgPyAnXFxuXFxuRGlkIHlvdSBjYWxsIGFycmF5Lm1hcCh1c2VDb250ZXh0KT8gJyArICdDYWxsaW5nIEhvb2tzIGluc2lkZSBhIGxvb3AgaXMgbm90IHN1cHBvcnRlZC4gJyArICdMZWFybiBtb3JlIGF0IGh0dHBzOi8vZmIubWUvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAge1xuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKTtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIG5hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgdmFyIHRlc3RNYXAgPSBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIHZhciB0ZXN0U2V0ID0gbmV3IFNldChbZnJvemVuT2JqZWN0XSk7IC8vIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBSb2xsdXAgdG8gbm90IGNvbnNpZGVyIHRoZXNlIHVudXNlZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTc3MVxuICAgIC8vIFRPRE86IHdlIGNhbiByZW1vdmUgdGhlc2UgaWYgUm9sbHVwIGZpeGVzIHRoZSBidWcuXG5cbiAgICB0ZXN0TWFwLnNldCgwLCAwKTtcbiAgICB0ZXN0U2V0LmFkZCgwKTtcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59XG5cbnZhciBjcmVhdGVFbGVtZW50JDEgPSAgY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjbG9uZUVsZW1lbnQkMSA9ICBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY3JlYXRlRmFjdG9yeSA9ICBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24gO1xudmFyIENoaWxkcmVuID0ge1xuICBtYXA6IG1hcENoaWxkcmVuLFxuICBmb3JFYWNoOiBmb3JFYWNoQ2hpbGRyZW4sXG4gIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICB0b0FycmF5OiB0b0FycmF5LFxuICBvbmx5OiBvbmx5Q2hpbGRcbn07XG5cbmV4cG9ydHMuQ2hpbGRyZW4gPSBDaGlsZHJlbjtcbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuZXhwb3J0cy5GcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG5leHBvcnRzLlByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9