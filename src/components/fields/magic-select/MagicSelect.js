import React from 'react';
import {
	onValueChangePropType,
	optionsShapeProp,
	valuePropType
} from '../propTypes';
import classNames from 'classnames';
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
		this.state = {
			currentList: props.defaultList,
			isOpen: props.isOpen
		};
		this.onChange = this.onChange.bind(this);
		this.items = this.items.bind(this);
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
		this.setState({isOpen: true});
	}

	/**
	 * Handle when the field is blurred
	 */
	onInputBlur() {
		this.setState({isOpen: false});
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
	 * Create the list of items
	 *
	 * @return {Array}
	 */
	items() {
		const optionsOrEmpty =(options) => {
			return Array.isArray(options) && options.length ? options : [];
		};

		let items = [];

		if( optionsOrEmpty(this.props.options).length){
			items = optionsOrEmpty(this.props.options);
		}
		else if ('system' === this.state.currentList ) {
			items = optionsOrEmpty(this.props.systemTagsList);
		} else {
			items = optionsOrEmpty(this.props.fieldsList);
		}

		if (items.length) {
			items.forEach((item, itemIndex) => {
				items[itemIndex].innerKey = `${item.value}-${itemIndex}`;
			});
		}else{
			items.push({
				value: null,
				label: null,
				innerKey:this.props.id
			})
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
						onBlur:this.onInputBlur,
						onClick:this.onChange
					}}
					renderItem={this.renderItem}
					value={this.props.value}
					onChange={this.onChange}
					open={this.state.isOpen}
					selectOnBlur={true}
					onSelect={this.onSelect}
					onBlur={()=> { console.log('bo')}}

				/>
			</div>
		);
	}
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