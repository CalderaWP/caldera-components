'use strict';

var _index = require('./fields/index');

var fields = _interopRequireWildcard(_index);

var _index2 = require('./fields/factories/index');

var factories = _interopRequireWildcard(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*eslint no-undef: "error"*/
/*eslint-env node*/
module.exports = {
	fields: fields,
	factories: factories
};