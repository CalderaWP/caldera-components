'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = checkValidatorsForConfigField;

var _getValidatorsFromConfigField = require('./getValidatorsFromConfigField');

var _getValidatorsFromConfigField2 = _interopRequireDefault(_getValidatorsFromConfigField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkValidatorsForConfigField(configField, fieldValues) {
	if (!(0, _getValidatorsFromConfigField2.default)(configField).length) {
		return true;
	}
	var allRulesPassed = true;
	configField.validators.forEach(function (conditional) {
		if ('function' === typeof conditional && false === conditional.call(null, fieldValues)) {
			allRulesPassed = false;
			return false;
		}
	});

	return allRulesPassed;
} /**
   * Check the validators for one field
   *
   * @param {Object} configField The field to check the validator of.
   * @param {Object} fieldValues Optional. Data to pass to validator rule callbacks
   * @return {boolean}
   */