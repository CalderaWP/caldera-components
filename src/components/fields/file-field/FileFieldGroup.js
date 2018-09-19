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

			const url = 'https://warm-parrot-19.localtunnel.me/api/file/upload';
			const formData = new FormData();
			formData.append('file', file, file.name);
			formData.append('filename', file.name);
			formData.append('public', '22w3-VPBS-7415b81f-6pOL');
			formData.append('account', '1');
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
					//getDataTransferItems={this.getDataTransferItems}
				>
					<p>Try dropping some files here, or click to select files to upload.</p>
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
	accept: '',
	//getDataTransferItems: this.getDataTransferItems(),
	inputProps: {
		type: 'file'
	}
};

/**
 * The names of classes used for HTML elements in FileFieldGroup component
 * @type {{fieldWrapper: string, input: string, option: string}}
 */
FileFieldGroup.classNames = {
	fieldWrapper: 'caldera-file-fielde-group',
	input: 'caldera-file-field'
};