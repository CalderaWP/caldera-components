'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkConfigFieldsConditionals = undefined;

var _checkConfigFieldConditionals = require('./checkConfigFieldConditionals');

/**
 * Check conditionals for a collection of configFields
 *
 * Returns false if any conditionals fail.
 * Returns true if no conditionals fail, or there are no conditionals.
 *
 * @param {Array} configFields The fields to check the conditionals of.
 * @param {Object} fieldValues Optional. Data to pass to conditional rules' callbacks
 * @return {boolean}
 */
var checkConfigFieldsConditionals = exports.checkConfigFieldsConditionals = function checkConfigFieldsConditionals(configFields) {
  var fieldValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var results = {};
  Object.values(configFields).forEach(function (configField) {
    results[configField.ID] = (0, _checkConfigFieldConditionals.checkConfigFieldConditionals)(configField, fieldValues);
  });
  return results;
};