'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.prepareFieldConfig = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = require('../propTypes');

var _util = require('../util');

var _messageObjectFactory = require('../messages/messageObjectFactory');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Validates field configurations
 *
 * NOTE: This is called internally by factory. You probably do not want to call this.
 *
 * @param {Object}fieldArgs
 * @returns {*}
 */
var prepareFieldConfig = exports.prepareFieldConfig = function prepareFieldConfig(fieldArgs) {
	/**
  * Pick whitlisted keys from object
  *
  * @see http://www.jstips.co/en/javascript/picking-and-rejecting-object-properties/
  *
  * @param {Object} obj The object to pick from
  * @param {Array} keys The whitelist of keys
  * @return {*}
  */
	function pick(obj, keys) {
		return keys.map(function (k) {
			return k in obj ? _defineProperty({}, k, obj[k]) : {};
		}).reduce(function (res, o) {
			return Object.assign(res, o);
		}, {});
	}

	switch (fieldArgs.type) {
		case 'select':
		case 'dropdown':
			fieldArgs.type = 'select';
			break;
		case 'fieldset':
			fieldArgs.type = 'fieldset';
			break;
		case 'text':
		case 'number':
		default:
			fieldArgs.inputType = (0, _util.isValidHtml5type)(fieldArgs.type) ? fieldArgs.type : 'text';
			fieldArgs.type = 'input';
			break;
	}

	if (fieldArgs.hasOwnProperty('desc')) {
		fieldArgs.help = fieldArgs.desc;
	}
	if (fieldArgs.hasOwnProperty('description')) {
		fieldArgs.help = fieldArgs.description;
	}

	fieldArgs = pick(fieldArgs, Object.keys(_propTypes.fieldGroupPropTypes));
	fieldArgs.disabled = (0, _util.toBoolean)(fieldArgs.disabled);
	fieldArgs.message = 'object' === _typeof(fieldArgs.message) ? (0, _messageObjectFactory.messageObjectFactory)(fieldArgs.message) : (0, _messageObjectFactory.messageObjectFactory)({ message: null, error: false });
	return fieldArgs;
};