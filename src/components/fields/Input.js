import React from 'react';
import PropTypes from 'prop-types';

export const Input = (props) => {
	return (
		<input
			type={props.inputType ? props.inputType : 'text'}
			id={props.id}
			className={props.fieldClassName}
			aria-describedby={props.ariaDescribedbyAttr}
			required={props.isRequired}
		/>
	)

};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	fieldClassName: PropTypes.string.isRequired,
	inputType: PropTypes.string,
	ariaDescribedbyAttr: PropTypes.string,
	isRequired: PropTypes.bool
};

Input.defaultProps = {
	ariaDescribedbyAttr: '',
	isRequired: false
};