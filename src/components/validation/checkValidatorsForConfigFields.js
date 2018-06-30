import checkValidatorsForConfigField from "./checkValidatorsForConfigField";
import getValidatorsFromConfigField from "./getValidatorsFromConfigField";

/**
 * Check validators for a collection of configFields
 *
 * Returns false if any validators fail.
 * Returns true if no validators fail, or there are no validators.
 *
 * @param {Array} configFields The fields to check the validators of.
 * @param {Object} fieldValues Optional. Data to pass to validators rules' callbacks
 * @return {Object}
 */
export default function checkValidatorsForConfigFields(configFields,fieldValues) {
	let results = {};
	Object.values( configFields ).forEach(configField => {
		const rules = getValidatorsFromConfigField(configField);
		let thisResult = true;
		if( rules.length ){
			thisResult = checkValidatorsForConfigField(configField,fieldValues);

		}
		results[configField.ID] = thisResult;
	});
	return results;
}

