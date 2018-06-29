'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.messageObjectFactory = undefined;

var _util = require('../util');

/**
 * Prepares messages object in fieldConfigs
 *
 * @param {Object} message
 * @param {Boolean} error
 * @return {{message: *, error: boolean}}
 */
var messageObjectFactory = exports.messageObjectFactory = function messageObjectFactory(_ref) {
	var message = _ref.message,
	    error = _ref.error;

	if ('string' !== typeof message) {
		message = '';
	}
	return {
		message: message,
		error: (0, _util.toBoolean)(error)
	};
};