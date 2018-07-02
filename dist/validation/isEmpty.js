'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * CalderaValidators that check if a value is empty or not
 */
exports.default = {
	/**
  * Check if different types (numbers, strings, objects, arrays or Maps) are empty
  *
  * @param {String|number|Array|object|Map} value
  * @return {boolean}
  */
	anything: function anything(value) {
		if (Array.isArray(value)) {
			return this.array(value);
		}
		if (value instanceof Map) {
			return this.map(value);
		}
		switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
			case 'object':
				return this.object(value);
			case 'string':
				return this.string(value);
			default:
				return false; //
		}
		return false;
	},

	/**
  * Check if value is an empty object
  *
  * @param {Object} value The object to check
  * @return {boolean}
  */
	object: function object(value) {
		for (var key in value) {
			if (value.hasOwnProperty(key)) return false;
		}
		return true;
	},

	/**
  * Check if value is an empty array
  *
  * @param {Array} value Array to check
  * @return {boolean}
  */
	array: function array(value) {
		return 0 === value.length;
	},

	/**
  * Check if value is not an empty string
  *
  * @param {String} value String to check
  * @return {boolean}
  */
	string: function string(value) {
		return !value;
	},

	/**
  * Check if value is not an empty map
  *
  * @param {Map} value The Map to check
  * @return {boolean}
  */
	map: function map(value) {
		return 0 === value.size;
	}
};