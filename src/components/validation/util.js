

/**
 * Find the value of a field by ID
 *
 * Returns null if field is not in collection
 *
 * @param {String} fieldId Field to look for
 * @param {Object} fieldValues Values to look for field in
 * @return {String|Array|boolean|number|null}
 */
export const findFieldValueInFieldValues = (fieldId, fieldValues) => {
	if (fieldValues.hasOwnProperty(fieldId)) {
		return fieldValues[fieldId];
	}

	return null;
};





