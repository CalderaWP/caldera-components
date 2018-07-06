import React from 'react';
import {optionsShapeProp} from '../propTypes';
import PropTypes from 'prop-types'
/**
 * Creates a select field
 *
 * @param {Object} props
 * @returns {*}
 * @constructor
 */
export const MagicChooser = (props) => {
	/**
	 * Dispatches new value(s) to parent
	 *
	 * @param selection
	 * @returns {*}
	 */
	function changeHandler(selection) {
		return props.onMagicChange(selection);
	}

	return (
		<div
			role="group"
		>
			{props.options.map(option => {
				return <button
					key={option.value}
					onClick={changeHandler(option.value)}
				>
					{option.label}
				</button>
			})}
		</div>



	);
};

/**
 * Prop definition for select fields
 *
 * @type {{}}
 */
MagicChooser.propTypes = {
	onMagicChange: PropTypes.func.isRequired,
	options: optionsShapeProp
};

/**
 * Default props for select fields
 *
 * @type {{options: Array}}
 */
MagicChooser.defaultProps = {
	options: []
};