import React from 'react';
import classNames from 'classnames';
import {RenderGroup} from '../../RenderGroup';
import {Message} from '../messages/Message';
import {FieldGroup} from '../FieldGroup';
import {FileSelect} from './FileSelect';

/**
 * Encapsulates a complete File field group
 */
export class FileFieldGroup extends React.PureComponent {

	/**
	 * Create a FileFieldGroup component
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
		//this.items = this.items.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
		//this.renderItem = this.renderItem.bind(this);
		this.onInputBlur = this.onInputBlur.bind(this);
		this.onChangeListType = this.onChangeListType.bind(this);
		//this.listTypeOptions = this.listTypeOptions.bind(this);
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
	 * Render FileFieldGroup component
	 * @return {*}
	 */
	render() {
		return (
			<div
				className={classNames(
					FileFieldGroup.classNames.fieldWrapper,
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

				<FileSelect
					id={this.props.id}
					//options={this.items()}
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
 * Default property values for FileFieldGroup component
 *
 * @type {{}}
 */
FileFieldGroup.defaultProps = {
	isOpen: false,
	message: {
		error: false,
		message: ''
	},
	type: 'file'
};

/**
 * The names of classes used for HTML elements in FileFieldGroup component
 * @type {{fieldWrapper: string, input: string, option: string}}
 */
FileFieldGroup.classNames = {
	fieldWrapper: 'caldera-file-select-group',
	input: 'caldera-file-input'
};