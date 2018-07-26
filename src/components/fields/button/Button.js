import React from 'react';
import {fieldPropTypes} from '../propTypes';
import classNames from 'classnames';
import {RenderGroup} from '../../RenderGroup';
import PropTypes from 'prop-types';


export const Button = (props) => {
	/**
	 * Get the className prop for inputs
	 *
	 * @return {String}
	 */
	function inputClassName() {
		return classNames(
			props.fieldClassName,
			RenderGroup.classNames.input
		);
	}

	if ('submit' === props.inputType) {
		return (
			<input
				type={'submit'}
				id={props.id}
				className={inputClassName()}
				aria-describedby={props.ariaDescribedbyAttr}
				required={props.isRequired}
				onClick={props.onClick}
				value={props.value}
				disabled={props.disabled}
				onBlur={props.onBlur}
				onFocus={props.onFocus}
			/>
		);
	}

	return (
		<button
			id={props.id}
			className={inputClassName()}
			aria-describedby={props.ariaDescribedbyAttr}
			onClick={props.onClick}
			disabled={props.disabled}
			onBlur={props.onBlur}
			onFocus={props.onFocus}
		>
			{props.value}
		</button>
	);
};

let propTypes = fieldPropTypes;
delete propTypes.onValueChange;

/**
 * Prop type definitions for Button Component
 * @type {{id: (*), fieldClassName: (*), help: shim, value: shim, onValueChange: (*), inputType: shim, onClick: *}}
 */
Button.propTypes = {
	...propTypes,
	innerType: PropTypes.oneOf(['submit','button'] ),
	onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
	inputType: 'submit'
}