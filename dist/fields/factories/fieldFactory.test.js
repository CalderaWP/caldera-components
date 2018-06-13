'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fieldFactory = require('./fieldFactory');

var _prepareFieldConfig = require('./prepareFieldConfig');

var _fieldSetFactory = require('./fieldSetFactory');

var _util = require('../util');

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

var textFieldConfig = {
	'id': 'cf-convertkit-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false
};

var hiddenFieldConfig = {
	'id': 'cf-convertkit-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false
};

var configFields = [{
	'id': 'cf-convertkit-apikey', 'label': 'API Key', 'type': 'text'
}, {
	'id': 'pid-1',
	'label': 'Sequence',
	'type': 'dropdown',
	'options': ['-- Select A ConvertKit Sequence --'],
	'desc': 'ConvertKit sequence to add subscriber to. Sequences are also referred to as courses.',
	'description': false,
	'extra_classes': 'field-Something is wrong',
	'magic': false
}, {
	'id': 'cf-convertkit-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false
}, hiddenFieldConfig, {
	'id': 'cf-convertkit-email',
	'label': 'Email Address',
	'desc': 'Subscriber email address.',
	'type': 'advanced',
	'allow_types': ['email'],
	'description': true,
	'magic': false
}, {
	'id': 'cf-convertkit-name',
	'label': 'Name',
	'type': 'text',
	'desc': 'Subscriber name.',
	'description': true
}, textFieldConfig];

var genericHandler = function genericHandler() {};
configFields.map(function (config) {
	config.onValueChange = genericHandler;
});

describe('Factories', function () {
	describe('Field factory', function () {

		it('validates type arg, setting inputType arg', function () {
			var config = _extends({}, textFieldConfig, {
				type: 'email',
				onValueChange: genericHandler
			});
			expect(config.type).toBe('email');
			config = (0, _prepareFieldConfig.prepareFieldConfig)(config);
			expect(config.inputType).toBe('email');
		});

		describe('Sets inputType arg in config', function () {
			(0, _util.getHtmlInputTypes)().forEach(function (type) {
				it('type arg with value of ' + type + ' sets inputType arg', function () {
					var config = (0, _prepareFieldConfig.prepareFieldConfig)(_extends({}, textFieldConfig, {
						type: type,
						onValueChange: genericHandler
					}));
					expect(config.inputType).toBe(type);
				});
			});
		});

		it('Creates inputs', function () {
			var component = (0, _fieldFactory.fieldFactory)(_extends({}, textFieldConfig, {
				onValueChange: genericHandler
			}));
			expect(component.type).toBe('div');
		});

		describe('Works for all HTML5 input types via inputType prop', function () {
			(0, _util.getHtmlInputTypes)().forEach(function (type) {
				it('inputType prop of ' + type + ' works', function () {
					var config = _extends({}, textFieldConfig, {
						type: type,
						onValueChange: genericHandler
					});
					var wrapper = (0, _enzyme.mount)((0, _fieldFactory.fieldFactory)(config));
					expect(wrapper.find('input').prop('type')).toBe(type);
				});
			});
		});
	});

	describe('Field set factory', function () {
		it('Creates the right number of element', function () {
			var components = (0, _fieldSetFactory.fieldSetFactory)(configFields);
			expect(components).toHaveLength(configFields.length);
		});
	});
});