'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = checkValidatorsForConfigFields;

var _checkValidatorsForConfigField = require('./checkValidatorsForConfigField');

var _checkValidatorsForConfigField2 = _interopRequireDefault(_checkValidatorsForConfigField);

var _getValidatorsFromConfigField = require('./getValidatorsFromConfigField');

var _getValidatorsFromConfigField2 = _interopRequireDefault(_getValidatorsFromConfigField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check validators for a collection of configFields
 *
 * Returns false if any validators fail.
 * Returns true if no validators fail, or there are no validators.
 *
 * @param {Array} configFields The fields to check the validators of.
 * @param {Object} fieldValues Optional. Data to pass to validators rules' callbacks
 * @return {Object}
 */
function checkValidatorsForConfigFields(configFields, fieldValues) {
	var results = {};
	Object.values(configFields).forEach(function (configField) {
		var rules = (0, _getValidatorsFromConfigField2.default)(configField);
		var thisResult = true;
		if (rules.length) {
			thisResult = (0, _checkValidatorsForConfigField2.default)(configField, fieldValues);
		}
		results[configField.ID] = thisResult;
	});
	return results;
}