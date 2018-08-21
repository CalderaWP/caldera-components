import React from 'react';
import classNames from 'classnames';
import {RenderGroup} from '../../RenderGroup';
import {Message} from '../messages/Message';
import FileSelect from './FileSelect';
import {fileFieldPropTypes} from '../propTypes';
import {FieldGroup} from '../FieldGroup';

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
		this.onChange = this.onChange.bind(this);
		this.state = {
			file: null
	  	};
	}

	/**
	 * Handle direct change events
	 * @param {String} newValue
	 */
	onChange(newValue) {
		if( this.props.autoUpload !== false ) {
			this.props.onValueChange(newValue);
		}
	}

	/**
	 * Set value during change events
	 * @param {String} newValue
	 */
	onValueChange(newValue){
		this.props.value = newValue;
		this.setState({file: newValue});
		console.log(newValue);
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
			{this.props.message.message &&
				<Message
					message={this.props.message}
				/>
			}
				
				<FieldGroup.Label 
					id={this.props.id} 
					label={this.props.label} 
				/> 
				
				<FileSelect
					id={this.props.id}
					onValueChange={this.onValueChange.bind(this)}
					value={this.props.value}
					isRequired={this.props.isRequired}
					className={this.props.fieldClassName}
					attachToMailer={this.props.attachToMailer}
					saveInLibrary={this.props.saveInLibrary}
					signingUrl={this.props.signingUrl}
					signingUrlMethod={this.props.signingUrlMethod}
					accept={this.props.accept}
					s3path={this.props.s3path}
					preprocess={this.props.preprocess}
					onSignedUrl={this.props.onSignedUrl}
					onProgress={this.props.onProgress}
					onError={this.props.onUploadError}
					onFinish={this.props.onFinish}
					signingUrlHeaders={this.props.signingUrlHeaders}
					signingUrlQueryParams={this.props.signingUrlQueryParams}
					signingUrlWithCredentials={this.props.signingUrlWithCredentials}
					uploadRequestHeaders={this.props.uploadRequestHeaders}
					contentDisposition={this.props.contentDisposition}
					scrubFilename={this.props.scrubFilename}
					server={this.props.server}
					inputRef={this.props.inputRef}
					autoUpload={this.props.autoUpload}
				/>
			</div>
		);
	}
}

/**
 * Prop definitions for FileFieldGroup component
 */
FileFieldGroup.propTypes = fileFieldPropTypes;

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