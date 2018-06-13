'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.prepareFieldConfig = undefined;

var _propTypes = require('../propTypes');

var _util = require('../util');

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
	function pick(obj, keys) {
		return keys.map(function (k) {
			return k in obj ? _defineProperty({}, k, obj[k]) : {};
		}).reduce(function (res, o) {
			return Object.assign(res, o);
		}, {});
	}

	switch (fieldArgs.type) {
		case 'text':
		case 'number':
		default:
			fieldArgs.inputType = (0, _util.isValidHtml5type)(fieldArgs.type) ? fieldArgs.type : 'text';
			fieldArgs.type = 'input';
			break;
	}
	if (fieldArgs.hasOwnProperty('desc')) {
		fieldArgs.help = 'desc';
	}
	return pick(fieldArgs, Object.keys(_propTypes.fieldGroupPropTypes));
};