'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldFactory = undefined;

var _prepareFieldConfig = require('./prepareFieldConfig');

var _FieldGroup = require('../FieldGroup');

/**
 * Generates field controls
 *
 * @param {Object} fieldArgs Field config
 * @returns {*}
 */
var fieldFactory = exports.fieldFactory = function fieldFactory(fieldArgs) {
  return (0, _FieldGroup.FieldGroup)((0, _prepareFieldConfig.prepareFieldConfig)(fieldArgs));
};