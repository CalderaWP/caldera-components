'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isEmpty = require('./isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isValid = require('./isValid');

var _isValid2 = _interopRequireDefault(_isValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Validators by type that consider an empty value valid.
 *
 * Combines the isEmpty and isValid validations
 */
exports.default = {
	/**
  * Check if a given value is an email address or empty
  *
  * @param {String} value Value to check
  * @return {boolean}
  */
	email: function email(value) {
		return _isEmpty2.default.anything(value) || _isValid2.default.email(value);
	},

	/**
  * Check if given value is a string or empty
  *
  * @param {String} value Value to check
  */
	string: function string(value) {
		return _isEmpty2.default.anything(value) || _isValid2.default.string(value);
	},

	/**
  * Check if given value is a string or number empty
  *
  * @param {String} value Value to check
  */
	stringOrNumber: function stringOrNumber(value) {
		return _isEmpty2.default.anything(value) || _isValid2.default.stringOrNumber(value);
	},

	/**
  * Check if a given value is a valid url or empty
  *
  * @param {String} value Value to check
  * @return {boolean}
  */
	url: function url(value) {
		return _isEmpty2.default.anything(value) || _isValid2.default.url(value);
	},

	/**
  * Check if a given value is an date.
  *
  * Considers Date objects and strings conforming to ISO 8601 standard to be valid.
  *
  * @param {String|Date} value Value to check or empty
  * @return {boolean}
  */
	date: function date(value) {
		return _isEmpty2.default.anything(value) || _isValid2.default.date(value);
	},

	/**
  * Check if a given value is numeric
  *
  * @param {String|number} value Value to check or empty
  * @return {boolean}
  */
	number: function number(value) {
		return _isEmpty2.default.anything(value) || _isValid2.default.number(value);
	}
};