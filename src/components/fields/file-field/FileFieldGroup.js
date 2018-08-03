import React from 'react';
import classNames from 'classnames';
import {RenderGroup} from '../../RenderGroup';
import {Message} from '../messages/Message';
import {FieldGroup} from '../FieldGroup';
import {FileSelect} from './FileSelect';
import {fieldGroupPropTypes} from '../propTypes';

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
			isOpen: props.isOpen,
		};
		this.onChange = this.onChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
		this.onInputBlur = this.onInputBlur.bind(this);
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
				<label
					htmlFor={this.props.id}
				>{this.props.label}</label>
				{this.props.message.message &&
					<Message
						message={this.props.message}
					/>
				}

				<FileSelect
					id={this.props.id}
					onValueChange={this.props.onValueChange}
					value={this.props.value}
					isRequired={this.props.isRequired}
					isOpen={this.state.isOpen}
					onBlur={this.onInputBlur}
					onFocus={this.onInputFocus}
					className={this.props.fieldClassName}
					attachToMailer={this.props.attachToMailer}
					saveInLibrary={this.props.saveInLibrary}
				/>
			</div>
		);
	}
}

/**
 * Prop definitions for FileFieldGroup component
 */
FileFieldGroup.propTypes = fieldGroupPropTypes;

/**
 * Default property values for FileFieldGroup component
 *
 * @type {{}}
 */
FileFieldGroup.defaultProps = {
	message: {
		error: false,
		message: ''
	},
	isOpen: false,
	attachToMailer: false,
	saveInLibrary: false,
	type: 'file',
};

/**
 * The names of classes used for HTML elements in FileFieldGroup component
 * @type {{fieldWrapper: string, input: string, option: string}}
 */
FileFieldGroup.classNames = {
	fieldWrapper: 'caldera-file-select-group',
	input: 'caldera-file-input'
};