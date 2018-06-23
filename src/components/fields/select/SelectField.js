import React from 'react';
import {fieldPropTypes} from '../propTypes';
import classNames from 'classnames';
import {RenderGroup} from '../../RenderGroup';

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

	/**
	 * Get the className prop for the select element
	 *
	 * @return {String}
	 */
	function selectClassNames() {
		return classNames(
			props.fieldClassName,
			RenderGroup.classNames.input
		);
	}

	return (
		<select
			id={props.id}
			className={selectClassNames()}
			value={props.value}
			onChange={changeHandler}
		>
			{props.options
				.map((item,i) => {
					const key = 'string' === typeof item.value ? item.value : i;
					return(
						<option
							key={key}
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