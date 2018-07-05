import React from 'react';
import {
	onValueChangePropType,
	optionsShapeProp,
	valuePropType
} from '../propTypes';
import classNames from 'classnames';
import Autocomplete from 'react-autocomplete'
import PropTypes from "prop-types";

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
		this.state = {
			currentList: props.defaultList,
			isOpen: props.isOpen
		};
		this.onChange = this.onChange.bind(this);
		this.items = this.items.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
	}

	/**
	 * Handle direct change events
	 *
	 * Probably not needed
	 * @param {Event} event
	 */
	onChange(event) {
		this.props.onValueChange(event.target.value);
	};

	/**
	 * Handle when the field gets focus
	 */
	onInputFocus() {
		this.setState({isOpen: true});
	}

	/**
	 * Handle when the option is chosen
	 * @param {String|number} value
	 */
	onSelect(value) {
		this.props.onValueChange(value);
		this.setState({isOpen: false});
	}

	/**
	 * Create the list of items
	 *
	 * @return {Array}
	 */
	items() {
		let items = [];
		if (Array.isArray(this.props.options) && this.props.options.length) {
			items = this.props.options;
		} else if ('system' === this.state.currentList) {
			items = this.props.systemTagsList
		} else {
			items = this.props.fieldsList;
		}

		if (items.length) {
			items.forEach((item, itemIndex) => {
				items[itemIndex].key = `${item.value}-${itemIndex}`;
			});
		}

		return items;

	}

	/**
	 * Render MagicSelect component
	 * @return {*}
	 */
	render() {
		return (
			<div
				className={classNames('magic-select', this.props.className)}
			>
				<Autocomplete
					getItemValue={(item) => item.value}
					items={this.items()}
					inputProps={{
						id: this.props.id,
						value: this.props.value,
						className: `${this.props.id}-magic-input`,
						onFocus: this.onInputFocus,
					}}
					renderItem={(item, isHighlighted) =>
						<div
							style={{background: isHighlighted ? 'lightgray' : 'white'}}
							className={classNames(`${this.props.id}-magic-input-option`, 'magic-input-option')}
						>
							{item.label}
						</div>
					}
					value={this.props.value}
					onChange={this.onChange}
					open={this.state.isOpen}
					selectOnBlur={true}
					onSelect={this.onSelect}

				/>
			</div>
		);
	};
}


/**
 * Prop definitions for MagicSelect component
 */
MagicSelect.propTypes = {
	id: PropTypes.string.isRequired,
	fieldsList: optionsShapeProp,
	systemTagsList: optionsShapeProp,
	options: optionsShapeProp,
	isRequired: PropTypes.bool,
	help: PropTypes.string,
	value: valuePropType,
	onValueChange: onValueChangePropType,
	disabled: PropTypes.bool,
	defaultList: PropTypes.string,
	isOpen: PropTypes.bool
};

/**
 * Default property values for MagicSelect component
 *
 * @type {{}}
 */
MagicSelect.defaultProps = {
	defaultList: 'fields',
	isOpen: false,
};