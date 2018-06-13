import React from 'react';
import {
	fieldPropTypes
} from '../propTypes';

export const Input = (props) => {
	function changeHandler(event){
		return props.onValueChange(event.target.value);
	}
	return (
		<input
			type={props.inputType}
			id={props.id}
			className={props.fieldClassName}
			aria-describedby={props.ariaDescribedbyAttr}
			required={props.isRequired}
			onChange={changeHandler}
			value={props.value}
		/>
	);

};

Input.propTypes = fieldPropTypes;

Input.defaultProps = {
	ariaDescribedbyAttr: '',
	isRequired: false,
	inputType: 'text'
};