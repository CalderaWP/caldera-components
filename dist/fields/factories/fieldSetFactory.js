'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldSetFactory = undefined;

var _fieldFactory = require('./fieldFactory');

/**
 * Given an array of field configs, generates and array of field controls
 *
 * Should be used for a group of settings, such as all settings for a processor.
 *
 * @param {Array} fields Field configs
 * @returns {Array}
 */
var fieldSetFactory = exports.fieldSetFactory = function fieldSetFactory(fields) {
  var out = [];
  Object.values(fields).forEach(function (field) {
    out.push((0, _fieldFactory.fieldFactory)(field));
  });
  return out;
};