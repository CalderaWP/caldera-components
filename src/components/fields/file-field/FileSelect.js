import React from 'react';
import {
	fieldPropTypes
} from '../propTypes';
import ReactS3Uploader from 'react-s3-uploader';
import PropTypes from 'prop-types';

/**
 * Encapsulates the react-s3-iploader input field
 */
const FileSelect = ( props ) =>  {

	/**
	 * Render FileSelect component
	 * @return {*}
	 */
	return (
		<ReactS3Uploader
			id={props.id}
			signingUrl={props.signingUrl}
			signingUrlMethod={props.signingUrlMethod}
			accept={props.accept}
			s3path={props.s3path}
			preprocess={props.preprocess}
			onSignedUrl={props.onSignedUrl}
			onProgress={props.onProgress}
			onError={props.onError}
			onFinish={props.onFinish}
			signingUrlHeaders={props.signingUrlHeaders}
			signingUrlQueryParams={props.signingUrlQueryParams}
			signingUrlWithCredentials={props.signingUrlWithCredentials}
			uploadRequestHeaders={props.uploadRequestHeaders}
			contentDisposition={props.contentDisposition}
			scrubFilename={props.scrubFilename}
			server={props.server}
			inputRef={props.inputRef}
			autoUpload={props.autoUpload}
		/>
	);

}
export default FileSelect;

/**
 * Prop definitions for FileSelect component
 */
FileSelect.propTypes = {
	...fieldPropTypes,
	signingUrl: PropTypes.string,
	signingUrlMethod: PropTypes.string,
	accept: PropTypes.string,
	s3path: PropTypes.string,
	onUploadStart: PropTypes.func,
	onSignedUrl: PropTypes.func,
	preprocess: PropTypes.func,
	onProgress:  PropTypes.func,
	onError: PropTypes.func,
	onFinish:  PropTypes.func,
	signingUrlHeaders: PropTypes.object,
	signingUrlQueryParams: PropTypes.object,
	signingUrlWithCredentials: PropTypes.bool,
	uploadRequestHeaders: PropTypes.object,
	contentDisposition: PropTypes.string,
	scrubFilename: PropTypes.func,
	server: PropTypes.string,
	inputRef:  PropTypes.func,
	autoUpload:PropTypes.bool
};

/**
 * Default property values for FileSelect component
 *
 * @type {{}}
 */
FileSelect.defaultProps = {
	fieldClassName: "caldera-file-select",
};