import React from 'react';
import {
	onValueChangePropType,
	optionsShapeProp,
	valuePropType
} from '../propTypes';
import ReactS3Uploader from 'react-s3-uploader';
import PropTypes from 'prop-types';
import {FileFieldGroup} from './FileFieldGroup';
import classNames from 'classnames';


/**
 * Encapsulates a complete File field
 */
export class FileSelect extends React.PureComponent {

	/**
	 * Create a FileSelect component
	 *
	 * @param {Object} props
	 */
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onInputFocus = this.onInputFocus.bind(this);
		this.onInputBlur = this.onInputBlur.bind(this);
		this.getItemValue = this.getItemValue.bind(this);
	}

	/**
	 * Handle direct change events
	 *
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
	 * Get the value of the item
	 * @param {Object} item
	 * @return {*}
	 */
	getItemValue(item){
		return item.value;
	}


	/**
	 * Render FileSelect component
	 * @return {*}
	 */
	render() {
		return (
            <ReactS3Uploader
				inputProps={{
					id: this.props.id,
					value: this.props.value,
					dataField: this.props.dataField,
					dataControlid: this.props.dataControlid,
					className:classNames(
						FileFieldGroup.classNames.input,
						`${FileFieldGroup.classNames.input}-${this.props.id}`,
						this.props.className
					),
					onFocus: this.onInputFocus,
					onBlur:this.onInputBlur,
					onClick:this.onChange
				}}
                signingUrl="/s3/sign"
                signingUrlMethod="GET"
                accept="image/*"
                s3path="/uploads/"
                preprocess={this.onUploadStart}
                onSignedUrl={this.onSignedUrl}
                onProgress={this.onUploadProgress}
                onError={this.onUploadError}
                onFinish={this.onUploadFinish}
                /*signingUrlHeaders={{ additional: headers }}
                signingUrlQueryParams={{ additional: query-params }}*/
                signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
                uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
                contentDisposition="auto"
                scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                server="http://cross-origin-server.com"
                inputRef={cmp => this.uploadInput = cmp}
                autoUpload={true}
            />
		);
	}
}


/**
 * Prop definitions for FileSelect component
 */
FileSelect.propTypes = {
	id: PropTypes.string.isRequired,
	isRequired: PropTypes.bool,
	help: PropTypes.string,
	value: PropTypes.string,
	onValueChange: onValueChangePropType,
	disabled: PropTypes.bool,
	isOpen: PropTypes.bool,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	className: PropTypes.string,
	dataField: PropTypes.string,
	dataControlid: PropTypes.string
};

/**
 * Default property values for FileSelect component
 *
 * @type {{}}
 */
FileSelect.defaultProps = {
	defaultList: 'fields',
	isOpen: false,
	options:[]
};