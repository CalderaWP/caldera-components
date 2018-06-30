'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getValidatorsFromConfigField = require('./getValidatorsFromConfigField');

var _getValidatorsFromConfigField2 = _interopRequireDefault(_getValidatorsFromConfigField);

var _checkValidatorsForConfigField = require('./checkValidatorsForConfigField');

var _checkValidatorsForConfigField2 = _interopRequireDefault(_checkValidatorsForConfigField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * One export for validation system
 */
exports.default = {
	getValidatorsFromConfigField: _getValidatorsFromConfigField2.default,
	checkValidatorsForConfigFields: _checkValidatorsForConfigField2.default,
	checkValidatorsForConfigField: _checkValidatorsForConfigField2.default
}; /*eslint no-undef: "error"*/
/*eslint-env node*/