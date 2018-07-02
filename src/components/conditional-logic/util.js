/**
 * Get the current values for prepareConfigFields
 *
 * @param {Array} configFields
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
