import React from 'react';
import {magicGroupPropTypes} from '../propTypes';
import classNames from 'classnames';
import {MagicItem} from './MagicItem';
import {ButtonGroup} from '../button-group/ButtonGroup';
import {MagicSelect} from './MagicSelect';
import {RenderGroup} from '../../RenderGroup';
import {Message} from '../messages/Message';
import {FieldGroup} from '../FieldGroup';


/**
 * Encapsulates a complete Magic Select field group including label and the type chooser and the input
 */
export class MagicFieldGroup extends React.PureComponent {

	/**
	 * Create a MagicFieldGroup component
	 *
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			currentListType: props.defaultList,
			isOpen: props.isOpen,
		};
		this.onChange = this.onChange.bind(this);
		this.items = this.items.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.onInputBlur = this.onInputBlur.bind(this);
		this.onChangeListType = this.onChangeListType.bind(this);
		this.listTypeOptions = this.listTypeOptions.bind(this);
	}

	/**
	 * Handle direct change events
	 * @param {String|number} newValue
	 */
	onChange(newValue) {
		this.props.onValueChange(newValue);
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
		this.setState({isOpen: false});
	}

	/**
	 * Update list of tags to show
	 * @param {String}newType
	 */
	onChangeListType(newType){
		if( ! this.state.isOpen ){
			this.setState({isOpen:true});
		}
		this.setState({currentListType:newType});
	}

	/**
	 * Render option
	 *
	 * @param {object} item
	 * @param {bool} isHighlighted
	 * @return {*}
	 */
	renderItem(item, isHighlighted){
		return <MagicItem item={item} isHighlighted={isHighlighted} innerKey={item.innerKey} key={item.innerKey} />;
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
		else if ('system' === this.state.currentListType ) {
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
			});
		}

		return items;

	}

	/**
	 * Options for type chooser
	 *
	 * @return {*[]}
	 */
	listTypeOptions(){
		return [
			{
				value: 'fields',
				label: '%',
				ariaLabel: 'Select from field values'
			},
			{
				value: 'system',
				label: '{}',
				ariaLabel: 'Select from system values'
			},
		];
	}



	/**
	 * Render MagicFieldGroup component
	 * @return {*}
	 */
	render() {
		return (
			<div
				className={classNames(
					MagicFieldGroup.classNames.fieldWrapper,
					RenderGroup.classNames.fieldWrapper,
					this.props.className
				)
				}
			>
				<FieldGroup.Label
					id={this.props.id}
					label={this.props.label}
				/>
				{this.props.message.message &&
					<Message
						message={this.props.message}
					/>
				}
				{this.state.isOpen &&
					<ButtonGroup
						onChange={this.onChangeListType}
						options={this.listTypeOptions()}
						value={this.state.currentListType}
					/>
				}

				<MagicSelect
					id={this.props.id}
					options={this.items()}
					onValueChange={this.props.onValueChange}
					value={this.props.value}
					isRequired={this.props.isRequired}
					isOpen={this.state.isOpen}
					onBlur={this.onInputBlur}
					onFocus={this.onInputFocus}
					className={this.props.fieldClassName}
				/>
			</div>
		);
	}
}


/**
 * Prop definitions for MagicFieldGroup component
 */
MagicFieldGroup.propTypes = magicGroupPropTypes;

/**
 * Default property values for MagicFieldGroup component
 *
 * @type {{}}
 */
MagicFieldGroup.defaultProps = {
	defaultList: 'fields',
	isOpen: false,
	message: {
		error: false,
		message: ''
	},
	type: 'magic'
};

/**
 * The names of classes used for HTML elements in MagicFieldGroup component
 * @type {{fieldWrapper: string, input: string, option: string}}
 */
MagicFieldGroup.classNames = {
	fieldWrapper: 'caldera-magic-select-group',
	input: 'caldera-magic-input',
	option: 'caldera-magic-option'
};