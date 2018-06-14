import React from 'react';
import {fieldPropTypes} from '../propTypes';

/**
 * Basic input component
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
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

/**
 * Prop definitions for Input components
 */
Input.propTypes = fieldPropTypes;

/**
 * Default props for Input Component
 *
 * @type {{ariaDescribedbyAttr: string, isRequired: boolean, inputType: string}}
 */
Input.defaultProps = {
	ariaDescribedbyAttr: '',
	isRequired: false,
	inputType: 'text'
};