"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Get the current values for prepareConfigFields
 *
 * @param {Array} configFields
 */
var reduceConfigFieldsToValues = exports.reduceConfigFieldsToValues = function reduceConfigFieldsToValues(configFields) {
	var values = {};
	configFields.forEach(function (field) {
		values[field.ID] = field.value ? field.value : field.default ? field.default : null;
	});
	return values;
};