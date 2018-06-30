import {checkConfigFieldConditionals} from "./checkConfigFieldConditionals";

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
export const checkConfigFieldsConditionals = (configFields, fieldValues = {}) => {
	let results = {};
	Object.values( configFields ).forEach(configField => {
		results[configField.ID] = checkConfigFieldConditionals(configField,fieldValues);
	});
	return results;

};