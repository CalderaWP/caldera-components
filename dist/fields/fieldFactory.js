'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fieldSetFactory = exports.fieldFactory = exports.prepareFieldConfig = undefined;

var _propTypes = require('./propTypes');

var _util = require('./util');

var _FieldGroup = require('./FieldGroup');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
/**
 * Generates field controls
 *
 * @param {Array} fieldArgs Field config
 * @returns {*}
 */
var fieldFactory = exports.fieldFactory = function fieldFactory(fieldArgs) {
	return (0, _FieldGroup.FieldGroup)(prepareFieldConfig(fieldArgs));
};

/**
 * Given an array of field configs, generates and array of field controls
 *
 * @param {Array} fields Field configs
 * @returns {Array}
 */
var fieldSetFactory = exports.fieldSetFactory = function fieldSetFactory(fields) {
	var out = [];
	Object.values(fields).forEach(function (field) {
		out.push(fieldFactory(field));
	});
	return out;
};