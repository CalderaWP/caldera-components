import React from 'react';
import {fieldPropTypes} from '../propTypes';
import classNames from 'classnames';
import {RenderGroup} from '../../RenderGroup';
/**
 * Password input component
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
export const Password = (props) => {

	/**
	 * Dispatches value of input when it changes
	 * @param event
	 * @return {*}
	 */
	function changeHandler(event){
		return props.onValueChange(event.target.value);
	}

	return (
		<input
			type={'password'}
			id={props.id}
			className={classNames(
				props.fieldClassName,
				RenderGroup.classNames.input
			)}
			aria-describedby={props.ariaDescribedbyAttr}
			required={props.isRequired}
			onChange={changeHandler}
			value={props.value}
			disabled={props.disabled}
			onBlur={props.onBlur}
			onFocus={props.onFocus}
		/>
	);

}


/**
 * Prop definitions for Password components
 */
Password.propTypes = fieldPropTypes;

/**
 * Default props for Password Component
 *
 * @type {{ariaDescribedbyAttr: string, isRequired: boolean, inputType: string}}
 */
Password.defaultProps = {
	ariaDescribedbyAttr: '',
	isRequired: false,
	inputType: 'text'
};