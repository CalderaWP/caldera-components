import strings from './strings';

/**
 * Get translation strings by language
 *
 * @param {String} lang inputType Type of input to get invalid message for.
 * @param {String|Object} lang Language code or an object containing properly formatted strings to search in.
 *
 * @return {Object}
 */
export const getMessageStrings = (lang, defaultLang = 'en') => {
	if ('string' === typeof  lang) {
		if (strings.hasOwnProperty(lang)) {
			return strings[lang];
		} else {
			return getMessageStrings(defaultLang);
		}
	}
	if ('object' === typeof  lang) {
		return Object.assign(getMessageStrings(defaultLang, 'en'), lang);
	}
};

/**
 * Get message for an invalid field, by field type
 *
 * @param {String} lang inputType Type of input to get invalid message for.
 * @param {String|Object} lang Language code or an object containing properly formatted strings to search in.
 * @param {String} defaultLang Optional. Language code to use for missing strings.
 * @return {String}
 */
export const getMessageStringByType = (inputType, lang, defaultLang = 'en') => {
	const strings = getMessageStrings(lang, defaultLang);
	if (strings.type.hasOwnProperty(inputType)) {
		return strings.type[inputType];
	}
	return strings.defaultMessage;
};

/**
 * Get the required message, by language.
 *
 * @param {String|Object} lang Language code or an object containing properly formatted strings to search in.
 * @param {String} defaultLang Optional. Language code to use for missing strings.
 * @return {String}
 */
export  const getRequiredMessage = (lang, defaultLang = 'en' ) => {
	return getMessageStrings(lang, defaultLang).required;

}
