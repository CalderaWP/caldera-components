'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fieldsetCheckboxHandler = undefined;

var _util = require('../util');

/**
 * Change handler for a checkbox that is a part of a group
 * @param {Object} option Option that is being changed. Shape: `{value:String|number,label:String}`,
 * @param {Array|string|number} values Current values
 * @param {Function} onValueChange Function to call with updated value
 */
var fieldsetCheckboxHandler = exports.fieldsetCheckboxHandler = function fieldsetCheckboxHandler(option, values, onValueChange) {
	if (!Array.isArray(values)) {
		if ('string' === typeof values || 'number' === typeof values) {
			values = [values];
		} else {
			values = [];
		}
	}
	values = (0, _util.addOrRemoveFromArray)(option.value, values);
	onValueChange(values);
};