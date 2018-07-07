import React from 'react';
import {
	onValueChangePropType,
	optionsShapeProp,
	valuePropType
} from '../propTypes';
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';
import {MagicItem} from './MagicItem';

/**
 * Encapsulates a complete Magic Select field
 */
export class MagicSelect extends React.PureComponent {

	/**
	 * Create a MagicSelect component
	 *
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.onInputBlur = this.onInputBlur.bind(this);
	}

	/**
	 * Handle direct change events
	 *
	 * Probably not needed
	 * @param {Event} event
	 */
	onChange(event) {
		this.props.onValueChange(event.target.value);
	}

	/**
	 * Handle when the field gets focus
	 */
	onInputFocus() {
		if( 'function' === typeof this.props.onFocus ){
			this.props.onFocus();
		}
	}

	/**
	 * Handle when the field is blurred
	 */
	onInputBlur() {
		if( 'function' === typeof this.props.onBlur ){
			this.props.onBlur();
		}
	}


	/**
	 * Handle when the option is chosen
	 * @param {String|number} value
	 */
	onSelect(value) {
		this.props.onValueChange(value);
	}


	/**
	 * Render option
	 *
	 * @param {object} item
	 * @param {bool} isHighlighted
	 * @return {*}
	 */
	renderItem(item, isHighlighted){
		return <MagicItem item={item} isHighlighted={isHighlighted} innerKey={item.innerKey} key={item.innerKey} />
	}


	/**
	 * Render MagicSelect component
	 * @return {*}
	 */
	render() {
		return (

			<Autocomplete
				getItemValue={(item) => item.value}
				items={this.props.options}
				inputProps={{
					id: this.props.id,
					value: this.props.value,
					className: `${this.props.id}-magic-input`,
					onFocus: this.onInputFocus,
					onBlur:this.onInputBlur,
					onClick:this.onChange
				}}
				renderItem={this.renderItem}
				value={this.props.value}
				onChange={this.onChange}
				open={this.props.isOpen}
				selectOnBlur={true}
				onSelect={this.onSelect}
			/>

		);
	}
}


/**
 * Prop definitions for MagicSelect component
 */
MagicSelect.propTypes = {
	id: PropTypes.string.isRequired,
	options: optionsShapeProp,
	isRequired: PropTypes.bool,
	help: PropTypes.string,
	value: valuePropType,
	onValueChange: onValueChangePropType,
	disabled: PropTypes.bool,
	isOpen: PropTypes.bool,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func
};

/**
 * Default property values for MagicSelect component
 *
 * @type {{}}
 */
MagicSelect.defaultProps = {
	defaultList: 'fields',
	isOpen: false,
	options:[]
};