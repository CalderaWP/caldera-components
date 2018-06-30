/**
 * Check configField conditionals.
 *
 * Returns false if any conditionals fail.
 * Returns true if no conditionals fail, or there are no conditionals.
 *
 * @param {Object} configField The field to check the conditionals of.
 * @param {Object} fieldValues Optional. Data to pass to conditional rule callbacks
 * @return {boolean}
 */
export const checkConfigFieldConditionals = (configField, fieldValues = {}) => {
	if (!configField.hasOwnProperty('conditionals') || !Array.isArray(configField.conditionals)) {
		return true;
	}

	let allRulesPassed = true;
	configField.conditionals.forEach(conditional => {
		if ('function' === typeof conditional && false === conditional.call(null, fieldValues)) {
			allRulesPassed = false;
			return false;
		}
	});

	return allRulesPassed;

};

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

/**
 * Get the current values for prepareConfigFields
 *
 * @param configFields
 */
export const reduceConfigFieldsToValues = (configFields) => {
	let values = {};
	configFields.forEach(field => {
		values[field.ID] = field.value
			? field.value
			: field.default
				? field.default
				: null;
	});
	return values;
};
