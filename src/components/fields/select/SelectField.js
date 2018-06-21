import React from 'react';
import {fieldPropTypes} from '../propTypes';

/**
 * Creates a select field
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
export const SelectField = (props) => {
	/**
	 * Dispatches new value(s) to parent
	 *
	 * @param selection
	 * @returns {*}
	 */
	function changeHandler(selection) {
		return props.onValueChange(selection);
	}

	return (
		<select
			id={props.id}
			className={props.className}
			value={props.value}
			onChange={changeHandler}
		>
			{props.options
				.map((item) => {
					return(
						<option
							key={item.value}
							className={ 'caldera-config-option' }
							value={item.value}
						>
							{item.label}
						</option>
					);
				})
			}
		</select>



	);
};

/**
 * Prop definition for select fields
 *
 * @type {{}}
 */
SelectField.propTypes = {
	...fieldPropTypes,
};

/**
 * Default props for select fields
 *
 * @type {{options: Array}}
 */
SelectField.defaultProps = {
	options: []
};