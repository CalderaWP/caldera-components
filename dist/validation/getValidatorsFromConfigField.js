'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getValidatorsFromConfigField;
/**
 * Find the array of validators for a configField
 *
 * @param {Object} configField The config field to search in
 * @return {Array} Array of validators or empty array if non found
 */
function getValidatorsFromConfigField(configField) {
  if (!configField.hasOwnProperty('validators') || !Array.isArray(configField.validators)) {
    return [];
  }

  return configField.validators;
}