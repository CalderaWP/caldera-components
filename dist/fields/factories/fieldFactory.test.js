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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

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

var magicField = {
	'id': 'cf-magic-example',
	'type': 'magic',
	'label': 'Magic ID',
	'description': 'Select a value from list of magic tags or type a value',
	fieldsList: [{
		label: '0',
		value: 0
	}, {
		label: '1',
		value: 1
	}, {
		label: '3',
		value: 3
	}],
	systemTagsList: [{
		label: '3',
		value: 3
	}],
	onValueChange: function onValueChange() {}
};

var configFields = [{
	'id': 'cf-convertkit-apikey', 'label': 'API Key', 'type': 'text'
}, {
	'id': 'pid-1',
	'label': 'Sequence',
	'type': 'dropdown',
	'options': [{
		value: null,
		label: '-- Select --'
	}],
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

		it('validators array is empty array if none supplied', function () {
			expect((0, _prepareFieldConfig.prepareFieldConfig)(textFieldConfig).validators).toEqual([]);
		});
		it('Keeps valid validators if supplied', function () {

			var validators = [function () {
				return true;
			}];
			expect((0, _prepareFieldConfig.prepareFieldConfig)(_extends({}, textFieldConfig, {
				validators: validators
			})).validators).toEqual(validators);
		});

		it('validates type arg, setting inputType arg', function () {
			var config = _extends({}, textFieldConfig, {
				type: 'email',
				onValueChange: genericHandler
			});
			expect(config.type).toBe('email');
			config = (0, _prepareFieldConfig.prepareFieldConfig)(config);
			expect(config.inputType).toBe('email');
		});

		it('Allows fieldset', function () {
			var fieldSetField = {
				id: 'fieldset-30',
				label: 'How many?',
				type: 'fieldset',
				options: [{
					value: '1',
					label: 'One'
				}, {
					value: '2',
					label: 'Two'
				}],
				value: [],
				onValueChange: function onValueChange() {}
			};

			var config = _extends({}, textFieldConfig, {
				type: 'email',
				onValueChange: genericHandler
			});
			config = (0, _prepareFieldConfig.prepareFieldConfig)(fieldSetField);
			expect(config.type).toBe('fieldset');
		});

		var selectFieldOptions = [{
			label: 'HTML',
			value: 'html'
		}, {
			label: 'Plain Text',
			value: 'plain'
		}];
		var selectFieldConfig = {
			'id': 'cf-something-select-id',
			'type': 'select',
			'label': 'Content type',
			'description': 'Choose content type, default is HTML',
			options: selectFieldOptions,
			value: '',
			onValueChange: genericHandler
		};
		it('Allows select fields', function () {
			expect((0, _prepareFieldConfig.prepareFieldConfig)(selectFieldConfig).type).toBe('select');
		});

		it('passes the field options for select fields', function () {
			expect((0, _prepareFieldConfig.prepareFieldConfig)(selectFieldConfig).options).toEqual(selectFieldOptions);
		});

		it('Changes "dropdown" to select', function () {
			var selectFieldConfig = {
				'id': 'cf-something-select-id',
				'type': 'dropdown',
				'label': 'Content type',
				'description': 'Choose content type, default is HTML',
				options: [{
					label: 'HTML',
					value: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain'
				}],
				value: '',
				onValueChange: genericHandler
			};
			expect((0, _prepareFieldConfig.prepareFieldConfig)(selectFieldConfig).type).toBe('select');
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

		describe('Works for all HTML5 input types via inputType prop', function () {
			(0, _util.getHtmlInputTypes)().forEach(function (type) {
				it('inputType prop of ' + type + ' works', function () {
					var config = _extends({}, textFieldConfig, {
						type: type,
						onValueChange: genericHandler
					});
					var wrapper = (0, _enzyme.mount)(_react2.default.createElement('div', {}, (0, _fieldFactory.fieldFactory)(config)));
					expect(wrapper.find('input').prop('type')).toBe(type);
				});
			});
		});

		describe('Works with disabled prop', function () {
			it('Sets disabled prop to false if not passed', function () {
				var selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [{
						label: 'HTML',
						value: 'html'
					}, {
						label: 'Plain Text',
						value: 'plain'
					}],
					value: '',
					onValueChange: genericHandler
				};
				expect((0, _prepareFieldConfig.prepareFieldConfig)(selectFieldConfig).disabled).toBe(false);
			});

			it('Sets disabled prop to true if passed a truthy value', function () {
				var selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [{
						label: 'HTML',
						value: 'html'
					}, {
						label: 'Plain Text',
						value: 'plain'
					}],
					value: '',
					onValueChange: genericHandler,
					disabled: 1
				};
				expect((0, _prepareFieldConfig.prepareFieldConfig)(selectFieldConfig).disabled).toBe(true);
			});
		});

		describe('messages prop', function () {
			it('Passes properly formatted message object', function () {
				var message = {
					message: 'Hi',
					error: true
				};
				var selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [{
						label: 'HTML',
						value: 'html'
					}, {
						label: 'Plain Text',
						value: 'plain'
					}],
					value: '',
					onValueChange: genericHandler,
					message: message
				};
				expect((0, _prepareFieldConfig.prepareFieldConfig)(selectFieldConfig).message).toEqual(message);
			});

			it('Validates message object', function () {
				var message = {
					message: 'Hi',
					error: 1
				};
				var selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [{
						label: 'HTML',
						value: 'html'
					}, {
						label: 'Plain Text',
						value: 'plain'
					}],
					value: '',
					onValueChange: genericHandler,
					message: message
				};

				expect((0, _prepareFieldConfig.prepareFieldConfig)(selectFieldConfig).message).toEqual(_extends({}, message, {
					error: true
				}));
			});
		});
	});

	describe('Field set factory', function () {
		it('Creates the right number of elements', function () {
			var components = (0, _fieldSetFactory.fieldSetFactory)(configFields);
			expect(components).toHaveLength(configFields.length);
		});

		it('Renders with elements', function () {
			var components = (0, _fieldSetFactory.fieldSetFactory)(configFields);
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(
				'div',
				null,
				Array.from(components).map(function (field, i) {
					return _react2.default.createElement('div', {
						key: i,
						className: 'f-' + i
					}, field);
				})
			));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Creates the elements', function () {
			var components = (0, _fieldSetFactory.fieldSetFactory)(configFields);
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
				'div',
				null,
				Array.from(components).map(function (field, i) {
					return _react2.default.createElement('div', {
						key: i,
						className: 'f-' + i
					}, field);
				})
			));
			expect(wrapper.children()).toHaveLength(configFields.length);
			expect(wrapper.find('.f-1')).toHaveLength(1);
		});

		it('Creates the if a magic field is in collection', function () {
			var components = (0, _fieldSetFactory.fieldSetFactory)([magicField]);
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
				'div',
				null,
				Array.from(components).map(function (field, i) {
					return _react2.default.createElement('div', {
						key: i,
						className: 'f-' + i
					}, field);
				})
			));
			expect(wrapper.find('input')).toHaveLength(1);
		});
	});
});