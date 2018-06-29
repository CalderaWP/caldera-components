import {toBoolean} from '../util';

/**
 * Prepares messages object in fieldConfigs
 *
 * @param {Object} message
 * @param {Boolean} error
 * @return {{message: *, error: boolean}}
 */
export const messageObjectFactory = ({message,error}) => {
	if( 'string' !== typeof  message ){
		message = '';
	}
	return{
		message: message,
		error: toBoolean(error)
	};
};