import isEmpty from './isEmpty';
import isValid from './isValid';
/**
 * Validators by type that consider an empty value valid.
 *
 * Combines the isEmpty and isValid validations
 */
export default {
	/**
	 * Check if a given value is an email address or empty
	 *
	 * @param {String} value Value to check
	 * @return {boolean}
	 */
	email(value){
		return isEmpty.anything( value ) || isValid.email(value);
	},
	/**
	 * Check if given value is a string or empty
	 *
	 * @param {String} value Value to check
	 */
	string(value){
		return isEmpty.anything( value ) || isValid.string(value);
	},
	/**
	 * Check if given value is a string or number empty
	 *
	 * @param {String} value Value to check
	 */
	stringOrNumber(value){
		return isEmpty.anything(value) || isValid.stringOrNumber(value);
	},
	/**
	 * Check if a given value is a valid url or empty
	 *
	 * @param {String} value Value to check
	 * @return {boolean}
	 */
	url(value){
		return isEmpty.anything( value ) || isValid.url(value);
	},
	/**
	 * Check if a given value is an date.
	 *
	 * Considers Date objects and strings conforming to ISO 8601 standard to be valid.
	 *
	 * @param {String|Date} value Value to check or empty
	 * @return {boolean}
	 */
	date(value){
		return isEmpty.anything( value ) || isValid.date(value);
	},
	/**
	 * Check if a given value is numeric
	 *
	 * @param {String|number} value Value to check or empty
	 * @return {boolean}
	 */
	number(value){
		return isEmpty.anything( value ) || isValid.number(value);
	}
};