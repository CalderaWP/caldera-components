'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Check configField conditionals.
 *
 * Returns false if any conditionals fail.
 * Returns true if no conditionals fail, or there are no conditionals.
 *
 * @param {Object} configField The field to check the conditionals of.
 * @param {Object} fieldValues Optional. Data to pass to conditional rule callbacks
 * @return {boolean}
 */
var checkConfigFieldConditionals = exports.checkConfigFieldConditionals = function checkConfigFieldConditionals(configField) {
	var fieldValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (!configField.hasOwnProperty('conditionals') || !Array.isArray(configField.conditionals)) {
		return true;
	}

	var allRulesPassed = true;
	configField.conditionals.forEach(function (conditional) {
		if ('function' === typeof conditional && false === conditional.call(null, fieldValues)) {
			allRulesPassed = false;
			return false;
		}
	});

	return allRulesPassed;
};