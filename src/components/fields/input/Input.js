import React from 'react';
import {fieldPropTypes} from '../propTypes';

/**
 * Input component for any HTML5 input type
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
export const Input = (props) => {
	/**
	 * Dispatches value of input when it changes
	 * @param event
	 * @return {*}
	 */
	function changeHandler(event){
		return props.onValueChange(event.target.value);
	}

	/**
	 * Dispatches value when checkbox is checked
	 * @return {*}
	 */
	function checkboxChangeHandler() {
		return props.onValueChange(! props.value);
	}

	if( 'checkbox' === props.inputType ){
		return (
			<input
				type={'checkbox'}
				id={props.id}
				className={props.fieldClassName}
				aria-describedby={props.ariaDescribedbyAttr}
				required={props.isRequired}
				onChange={checkboxChangeHandler}
				defaultChecked={props.value}
			/>
		);
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