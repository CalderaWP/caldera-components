/**
 * Create the aria-describedby attribute or id attribute for the describing element
 *
 * @param {String} id Id attribute of input being described
 * @param {String} help Optional. Help text. If empty return is null.
 * @returns {String|null}
 */
export const  ariaDescribedbyAttr = (id, help = '') => {
	let ariaDescribedby = null;
	if (help.length) {
		ariaDescribedby = `${id}-description`;
	}
	return ariaDescribedby;
};


/**
 * Get HTML5 input types that are valid
 * @returns {string[]}
 */
export function getHtmlInputTypes() {
	return [
		'text',
		'email',
		'number',
		'date',
		'datetime',
		'password',
		'submit',
		'reset',
		'checkbox',
		'hidden'
	];
}

/**
 * Checks if a given input type is an acceptable HTML5 input type
 *
 * @param {String} type
 * @returns {boolean}
 */
export function isValidHtml5type(type) {
	return getHtmlInputTypes().includes(type);
}