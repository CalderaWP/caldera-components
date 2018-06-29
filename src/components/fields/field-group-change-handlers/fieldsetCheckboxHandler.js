import {addOrRemoveFromArray} from '../util';

/**
 * Change handler for a checkbox that is a part of a group
 * @param {Object} option Option that is being changed. Shape: `{value:String|number,label:String}`,
 * @param {Array|string|number} values Current values
 * @param {Function} onValueChange Function to call with updated value
 */
export const fieldsetCheckboxHandler = (option, values, onValueChange)  => {
	if (!Array.isArray(values)) {
		if ('string' === typeof values || 'number' === typeof  values) {
			values = [values];
		} else {
			values = [];

		}
	}
	values = addOrRemoveFromArray(option.value, values);
	onValueChange(values);
};