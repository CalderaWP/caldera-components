import React from 'react';
import { post } from 'axios';
import classNames from 'classnames';
import {RenderGroup} from '../../RenderGroup';
import {Message} from '../messages/Message';
import {fileFieldPropTypes} from '../propTypes';
import {FieldGroup} from '../FieldGroup';
import Dropzone from 'react-dropzone';

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
	}



	onDrop(acceptedFiles, rejectedFiles) {

		acceptedFiles.forEach(file => {		

			const url = 'https://cfs3files.localtunnel.me/api/file/upload';
			const formData = new FormData();
			formData.append('file', file, file.name);
			formData.append('filename', file.name);
			formData.append('account', this.props.account);
			formData.append('entry_id', this.props.entryId);
			const config = {
				withCredentials: true,
				headers: {
					'content-type': 'multipart/form-data'
				}
			};
			post(url, formData, config)
				.then(function(response){
					console.log(response);
			});

		});
	
	}

	getDataTransferItems(files) {
		console.log(files);
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

				<Dropzone 
					onDrop={this.onDrop.bind(this)}
					style={this.props.style}
					className={this.props.className}
					accept={this.props.accept}
					disabled={this.props.disabled}
					inputProps={this.props.inputProps}
					account={this.props.account}
					cf_entry_id={this.props.entryId}
					disableClick={this.props.disableClick}
					multiple={this.props.multiple}
				>
					<p>{this.props.defaultText}</p>
				</Dropzone>
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
	defaultText: 'Try dropping some files here, or click to select files to upload.',
	style: {
		margin: "0 auto",
		position: "relative",
		width: "200px",
		height: "200px",
		borderWidth: "2px",
		borderColor: "rgb(102, 102, 102)",
		borderStyle: "dashed",
		borderRadius: "5px"
	},
	inputProps: {
		type: 'file'
	},
	disableClick: false,
	multiple: true
};

/**
 * The names of classes used for HTML elements in FileFieldGroup component
 * @type {{fieldWrapper: string, input: string, option: string}}
 */
FileFieldGroup.classNames = {
	fieldWrapper: 'caldera-file-field-group',
	input: 'caldera-file-field'
};