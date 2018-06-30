/**
 * Check the validators for one field
 *
 * @param {Object} configField The field to check the validator of.
 * @param {Object} fieldValues Optional. Data to pass to validator rule callbacks
 * @return {boolean}
 */
import getValidatorsFromConfigField from "./getValidatorsFromConfigField";

export default function checkValidatorsForConfigField(configField,fieldValues) {
	if( ! getValidatorsFromConfigField(configField).length){
		return true;
	}
	let allRulesPassed = true;
	configField.validators.forEach(conditional => {
		if ('function' === typeof conditional && false === conditional.call(null, fieldValues)) {
			allRulesPassed = false;
			return false;
		}
	});

	return allRulesPassed;
}


