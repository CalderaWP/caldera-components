import React from 'react';
import {
	fieldPropTypes
} from '../propTypes';
import ReactS3Uploader from 'react-s3-uploader';
import PropTypes from 'prop-types';


/**
 * Encapsulates a complete File field
 */
export class FileSelect extends React.PureComponent {

	/**
	 * Render FileSelect component
	 * @return {*}
	 */
	render() {
		return (
            <ReactS3Uploader
				id={this.props.id}
				value={this.props.value}
				onSelect={this.onSelect}
                signingUrl={this.props.signingUrl}
                signingUrlMethod={this.props.signingUrlMethod}
                accept={this.props.accept}
                s3path={this.props.s3path}
                signingUrlHeaders={this.props.signingUrlHeaders}
                signingUrlQueryParams={this.props.signingUrlQueryParams}
                signingUrlWithCredentials={this.props.signingUrlWithCredentials}
                uploadRequestHeaders={this.props.uploadRequestHeaders}
                contentDisposition={this.props.contentDisposition}
                scrubFilename={this.props.scrubFilename}
				server={this.props.server}
            />
		);
	}
}

/**
 * Prop definitions for FileSelect component
 */
FileSelect.propTypes = {
	...fieldPropTypes,
	signingUrl: PropTypes.string,
	signingUrlMethod: PropTypes.string,
	accept: PropTypes.string,
	s3path: PropTypes.string,
	signingUrlHeaders: PropTypes.object,
	signingUrlQueryParams: PropTypes.object,
	signingUrlWithCredentials: PropTypes.bool,
	uploadRequestHeaders: PropTypes.object,
	contentDisposition: PropTypes.string,
	scrubFilename: PropTypes.func,
	server: PropTypes.string,
};

/**
 * Default property values for FileSelect component
 *
 * @type {{}}
 */
FileSelect.defaultProps = {
	fieldClassName: "caldera-file-select",
	isOpen: false,
	signingUrl: "/s3/sign",
	signingUrlMethod: "GET",
	accept: "image/*",
	s3path: "/uploads/",
	signingUrlHeaders: { additional: "headers" },
	signingUrlQueryParams: { additional: "query-params" },
	signingUrlWithCredentials: true,     // in case when need to pass authentication credentials via CORS
	uploadRequestHeaders: { 'x-amz-acl': 'public-read' },  // this is the default
	contentDisposition: "auto",
	scrubFilename: (filename) => filename.replace(/[^\w\d_\-.]+/ig, ''),
	server: "http://cross-origin-server.com",
};