import React from 'react';
import PropTypes from 'prop-types';
import {
	valuePropType,
	onValueChangePropType
} from './propTypes';

export const Input = (props) => {
	function changeHandler(event){
		return props.onValueChange(event.target.value);
	}
	return (
		<input
			type={props.inputType ? props.inputType : 'text'}
			id={props.id}
			className={props.fieldClassName}
			aria-describedby={props.ariaDescribedbyAttr}
			required={props.isRequired}
			onChange={changeHandler}
			value={props.value}
		/>
	);

};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	fieldClassName: PropTypes.string.isRequired,
	inputType: PropTypes.string,
	ariaDescribedbyAttr: PropTypes.string,
	isRequired: PropTypes.bool,
	value: valuePropType,
	onValueChange: onValueChangePropType
};

Input.defaultProps = {
	ariaDescribedbyAttr: '',
	isRequired: false
};