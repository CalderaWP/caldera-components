'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequiredMessage = exports.getMessageStringByType = exports.getMessageStrings = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _strings = require('./strings');

var _strings2 = _interopRequireDefault(_strings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get translation strings by language
 *
 * @param {String|Object} lang Language code or an object containing properly formatted strings to search in.
 * @param {String} defaultLang Optional. Language code to use for missing strings.
 *
 * @return {Object}
 */
var getMessageStrings = exports.getMessageStrings = function getMessageStrings(lang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  if ('string' === typeof lang) {
    if (_strings2.default.hasOwnProperty(lang)) {
      return _strings2.default[lang];
    } else {
      return getMessageStrings(defaultLang);
    }
  }
  if ('object' === (typeof lang === 'undefined' ? 'undefined' : _typeof(lang))) {
    return Object.assign(getMessageStrings(defaultLang, 'en'), lang);
  }
};

/**
 * Get message for an invalid field, by field type
 *
 * @param {String}  inputType Type of input to get invalid message for.
 * @param {String|Object} lang Language code or an object containing properly formatted strings to search in.
 * @param {String} defaultLang Optional. Language code to use for missing strings.
 * @return {String}
 */
var getMessageStringByType = exports.getMessageStringByType = function getMessageStringByType(inputType, lang) {
  var defaultLang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';

  var strings = getMessageStrings(lang, defaultLang);
  if (strings.type.hasOwnProperty(inputType)) {
    return strings.type[inputType];
  }
  return strings.defaultMessage;
};

/**
 * Get the required message, by language.
 *
 * @param {String|Object} lang Language code or an object containing properly formatted strings to search in.
 * @param {String} defaultLang Optional. Language code to use for missing strings.
 * @return {String}
 */
var getRequiredMessage = exports.getRequiredMessage = function getRequiredMessage(lang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';

  return getMessageStrings(lang, defaultLang).required;
};

/**
 * Message string utilities for validation
 */
exports.default = {
  getMessageStrings: getMessageStrings,
  getMessageStringByType: getMessageStringByType,
  getRequiredMessage: getRequiredMessage
};