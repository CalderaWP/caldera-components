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

export function isValidHtml5type(type ) {
	return getHtmlInputTypes().includes(type);
}