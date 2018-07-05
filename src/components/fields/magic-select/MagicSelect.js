import React from 'react';
import {fieldInnerPropTypes, inputTypeProp, onValueChangePropType, optionsShapeProp, valuePropType} from '../propTypes';
import classNames from 'classnames';
import Autocomplete from 'react-autocomplete'
import PropTypes from "prop-types";
/**
 * Encapsulates a complete Magic Select field
 */
export const MagicSelect = (props) => {

	const onChange = (event) => {
		this.props.onValueChange(event.target.value);
	};

	return (
		<div
			className={classNames('', props.className)}
		>
			<Autocomplete
				id={props.id}
				getItemValue={(item) => item.label}
				items={[
					{ label: 'apple' },
					{ label: 'banana' },
					{ label: 'pear' }
				]}
				renderItem={(item, isHighlighted) =>
					<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
						{item.label}
					</div>
				}
				value={props.value}
				onChange={onChange}
				onSelect={(val) => value = val}
			/>
		</div>
	);
}

/**
 * Prop definitions for MagicSelect component
*/
MagicSelect.propTypes = {
	id: PropTypes.string.isRequired,
	fieldsList: optionsShapeProp,
	systemTagsList: optionsShapeProp,
	isRequired: PropTypes.bool,
	help: PropTypes.string,
	value: valuePropType,
	onValueChange: onValueChangePropType,
	options: PropTypes.array,
	disabled: PropTypes.bool,
};

/**
 * Default property values for MagicSelect component
 *
 * @type {{}}
 */
MagicSelect.defaultProps = {};