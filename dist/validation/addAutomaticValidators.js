'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.addAutomaticValidators = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getValidatorsFromConfigField = require('./getValidatorsFromConfigField');

var _getValidatorsFromConfigField2 = _interopRequireDefault(_getValidatorsFromConfigField);

var _isValidOrEmpty = require('./isValidOrEmpty');

var _isValidOrEmpty2 = _interopRequireDefault(_isValidOrEmpty);

var _util = require('./util');

var _isValid = require('./isValid');

var _isValid2 = _interopRequireDefault(_isValid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper function to curry validator functions
 *
 * Validators expect 1 value, not an object of values, this function solves that.
 *
 * @param {String} fieldId Field to look for
 * @param {Function} validator Validator function
 * @return {function(*=): *}
 */
function curryValidator(fieldId, validator) {
	return function (fieldValues) {
		return validator((0, _util.findFieldValueInFieldValues)(fieldId, fieldValues));
	};
}

/**
 * Create validation function based on type and required
 *
 * @param {Object} configField Field to create validations for
 * @param {Array} validators Current array of validators
 * @param {string} validationType Type of validators to add.
 * @return {Array}
 */
function addValidatorsForType(configField, validators, validationType) {
	if (configField.isRequired) {
		validators.push(curryValidator(configField.ID, _isValid2.default[validationType]));
	} else {
		validators.push(curryValidator(configField.ID, _isValidOrEmpty2.default[validationType]));
	}

	return validators;
}

/**
 * Adds sensible, automatic validation to fields -- if no validators have been added yet.
 *
 * @param {Object} configField
 * @return {*}
 */
var addAutomaticValidators = exports.addAutomaticValidators = function addAutomaticValidators(configField) {
	var validators = (0, _getValidatorsFromConfigField2.default)(configField);
	if (0 !== validators.length) {
		return configField;
	}

	switch (configField.type) {
		case 'input':
			if (['email', 'url', 'date', 'number'].includes(configField.inputType)) {
				validators = addValidatorsForType(configField, validators, configField.inputType);
			} else if ('text' === configField.inputType) {
				validators = addValidatorsForType(configField, validators, 'string');
			} else {
				validators = addValidatorsForType(configField, validators, 'anything');
			}

			break;
		case 'select':
			validators = addValidatorsForType(configField, validators, 'stringOrNumber');
			break;
	}

	return _extends({}, configField, {
		validators: validators
	});
};