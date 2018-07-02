'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _is = require('@helpdotcom/is');

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * CalderaValidators for common types of validation needed
 *
 * Empty values are not valid.
 * Ue isValidOrEmpty instead if you want empty values to pass
 */
exports.default = {
	/**
  * Check if a given value is an email address
  *
  * @param {String} value Value to check
  * @return {boolean}
  */
	email: function email(value) {
		return (0, _is.isEmail)(value);
	},

	/**
  * Check if given value is a non-empty string
  *
  * @param {String} value Value to check
  */
	string: function string(value) {
		return 'string' === typeof value && !_isEmpty2.default.string(value);
	},

	/**
  * Check if given value is a string
  *
  * @param {String} value Value to check
  */
	stringOrNumber: function stringOrNumber(value) {
		if (null !== value) {
			return this.string(value) || this.number(value);
		}
		return false;
	},

	/**
  * Check if a given value is a valid url
  *
  * @param {String} value Value to check
  * @return {boolean}
  */
	url: function url(value) {
		return (0, _is.isUrl)(value);
	},

	/**
  * Check if a given value is an date.
  *
  * Considers Date objects and strings conforming to ISO 8601 standard to be valid.
  *
  * @param {String|Date} value Value to check
  * @return {boolean}
  */
	date: function date(value) {
		return (0, _is.isDate)(value);
	},

	/**
  * Check if a given value is numeric
  *
  * @param {String|number} value Value to check
  * @return {boolean}
  */
	number: function number(value) {
		if ('' === value) {
			return false;
		}
		if (Array.isArray(value)) {
			return false;
		}
		return !isNaN(value);
	}
};