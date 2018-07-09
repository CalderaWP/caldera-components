import React from 'react';
import {optionShape} from '../propTypes';
import PropTypes from 'prop-types';
/**
 * Creates a button group field
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
export const ButtonGroup = (props) => {
	/**
	 * Dispatches new value(s) to parent
	 *
	 * @param selection
	 * @returns {*}
	 */
	function changeHandler(selection) {
		return props.onChange(selection);
	}

	/**
	 * Render a button group
	 */
	return (
		<div
			role="group"
		>
			{props.options.map(option => {
				return <button
					aria-label={option.ariaLabel ? option.ariaLabel : option.label}
					key={option.value}
					className={props.value === option.value ? 'selected' : 'not-selected' }
					onClick={() => {
						return changeHandler(option.value);
					}}
				>
					{option.hasOwnProperty('icon')&&
						<span className={option.icon}></span>
					}
					{!option.hasOwnProperty('icon') &&
						<React.Fragment>{option.label}</React.Fragment>
					}

				</button>;
			})}
		</div>
	);
};

/**
 * Prop definition for select fields
 *
 * @type {{}}
 */
ButtonGroup.propTypes = {
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			...optionShape,
			icon:PropTypes.string,
			ariaLabel:PropTypes.string
		})
	),
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	])
};

/**
 * Default props for select fields
 *
 * @type {{options: Array}}
 */
ButtonGroup.defaultProps = {
	options: []
};