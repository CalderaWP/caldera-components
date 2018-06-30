import {isEmail,isUrl, isDate} from '@helpdotcom/is';

/**
 * Validators for common types of validation needed
 */
export default {
	/**
	 * Check if a given value is an email address
	 *
	 * @param {String} value Value to check
	 * @return {boolean}
	 */
	email(value){
		return isEmail(value);
	},
	/**
	 * Check if a given value is a valid url
	 *
	 * @param {String} value Value to check
	 * @return {boolean}
	 */
	url(value){
		return isUrl(value);
	},
	/**
	 * Check if a given value is an date.
	 *
	 * Considers Date objects and strings conforming to ISO 8601 standard to be valid.
	 *
	 * @param {String|Date} value Value to check
	 * @return {boolean}
	 */
	date(value){
		return isDate(value);
	},
	/**
	 * Check if a given value is numeric
	 *
	 * @param {String|number} value Value to check
	 * @return {boolean}
	 */
	number(value){
		if( Array.isArray( value ) ){
			return false;
		}
		return ! isNaN(value);
	}
}