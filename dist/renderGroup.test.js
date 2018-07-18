'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _RenderGroup = require('./RenderGroup');

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
	'id': 'cf-something-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false
};

var hiddenFieldConfig = {
	'id': 'cf-something-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false
};

var configFields = [{
	'id': 'cf-something-apikey', 'label': 'API Key', 'type': 'text'
}, hiddenFieldConfig, textFieldConfig];

var genericHandler = function genericHandler() {};
configFields.map(function (config) {
	config.onValueChange = genericHandler;
});

describe('The render group component', function () {

	describe('Rendering with fields', function () {
		it('Works with one text field', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, {
				configFields: [{
					'id': 'sz',
					'label': 'Tags',
					'desc': 'Comma separated list of tags.',
					'type': 'text',
					'description': false,
					onValueChange: genericHandler
				}]
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Works with a few fields', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: configFields }));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Does not error when passed empty array of fields', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [] }));
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('Creates the inner components correctly', function () {
		it('Creates array of components', function () {
			var component = new _RenderGroup.RenderGroup({
				configFields: configFields
			});
			expect(component.createComponents()).toBeInstanceOf(Array);
		});

		it('Has the right number of children', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, {
				className: 'x1',
				configFields: configFields
			}));
			expect(wrapper.find('.x1').children()).toHaveLength(4);
		});

		it('Adds the description', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Do not expect this',
				'type': 'text',
				'description': 'Expect This',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));

			expect(wrapper.find('p.description')).toHaveLength(1);
		});

		it('Adds the right description', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Do not expect this',
				'type': 'text',
				'description': 'Expect This',
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('p.description').text()).toEqual('Expect This');
		});

		it('Sets aria-describedby prop on input to match description', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Do not expect this',
				'type': 'text',
				'description': 'Expect This',
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('input').prop('aria-describedby')).toEqual('sz-description');
		});

		it('Adds the description using .desc if .description is not provided to match old spec', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'type': 'text',
				'desc': 'Expect This',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));

			expect(wrapper.find('p.description')).toHaveLength(1);
			expect(wrapper.find('p.description').text()).toEqual('Expect This');
		});

		it('Adds the right description using .desc if .description is not provided to match old spec', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'type': 'text',
				'desc': 'Expect This',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));

			expect(wrapper.find('p.description').text()).toEqual('Expect This');
		});

		it('Adds no description if .description is false', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'type': 'text',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('p.description')).toHaveLength(0);
		});

		it('Adds the label', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Comma separated list of tags.',
				'type': 'text',
				'description': false,
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('label')).toHaveLength(1);
			expect(wrapper.find('label').text()).toEqual(thisConfigFields[0].label);
		});

		it('Adds the right label', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Comma separated list of tags.',
				'type': 'text',
				'description': false,
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('label').text()).toEqual(thisConfigFields[0].label);
		});
	});

	var fieldSetField = {
		id: 'fieldset-3',
		label: 'How many?',
		type: 'fieldset',
		options: [{
			value: 1,
			label: 'One'
		}, {
			value: 2,
			label: 'Two'
		}],
		value: [],
		onValueChange: genericHandler
	};

	describe('fieldsets', function () {
		it('Outputs a fieldset', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [fieldSetField] }));
			expect(wrapper.find('fieldset')).toHaveLength(1);
		});

		it('has inputs in the fieldset', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [fieldSetField] }));
			expect(wrapper.find('fieldset').children().find('input')).toHaveLength(2);
		});

		it('has inputs that are checbkoxes in the fieldset', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [fieldSetField] }));
			expect(wrapper.find('fieldset').children().find('input').first().prop('type')).toEqual('checkbox');
		});
	});

	describe('class structure', function () {
		var fieldConfigsForThisTest = [{
			'id': 'cf-something-else',
			'label': 'Thing',
			'type': 'text',
			onValueChange: genericHandler
		}, textFieldConfig];

		it('Puts .caldera-config-field-setup on outermost element', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: fieldConfigsForThisTest }));
			expect(wrapper.find('.caldera-config-field-setup')).toHaveLength(1);
		});

		it('It puts .caldera-config-group around each group', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: fieldConfigsForThisTest }));
			expect(wrapper.find('.caldera-config-field-setup').children().find('.caldera-config-group')).toHaveLength(2);
		});

		it('Matches snapshot', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: fieldConfigsForThisTest }));
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('Select fields', function () {
		it('Select fields have options', function () {
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
				}, {
					label: 'Imaginary',
					value: 'imaginary'
				}],
				value: '',
				onValueChange: genericHandler
			};

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [selectFieldConfig] }));
			expect(wrapper.find('select').children().find('option')).toHaveLength(3);
		});

		it('Select fields can have no options', function () {
			var selectFieldConfig = {
				'id': 'cf-something-select-id',
				'type': 'dropdown',
				'label': 'Content type',
				'description': 'Choose content type, default is HTML',
				options: null,
				value: '',
				onValueChange: genericHandler
			};

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [selectFieldConfig] }));
			expect(wrapper.find('select').children().find('option') //this would make an error if the select field was invalid
			).toHaveLength(0);
		});

		it('Select field change handlers receive value, not event ', function () {
			var updateValue = '';
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
				}, {
					label: 'Imaginary',
					value: 'imaginary'
				}],
				value: '',
				onValueChange: function onValueChange(newValue) {
					updateValue = newValue;
					return newValue;
				}
			};

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [selectFieldConfig] }));
			wrapper.find('select').simulate('change', { target: { value: 'imaginary' } });
			expect(wrapper.find('select').children().find('option')).toHaveLength(3);
		});
	});

	describe('adding blur and focus', function () {
		it('Adds the props', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, {
				configFields: [_extends({}, textFieldConfig, {
					onBlur: function onBlur() {},
					onFocus: function onFocus() {}
				})]
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Passes down the onFocus handler', function () {
			var itFired = false;
			var idArg = 'a1';
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, {
				configFields: [_extends({}, textFieldConfig, {
					id: idArg,
					onBlur: function onBlur() {},
					onFocus: function onFocus() {
						itFired = true;
					}
				})]
			}));

			wrapper.find('input').simulate('focus');
			expect(itFired).toBe(true);
		});

		it('Fires the onFocus handler', function () {
			var itFired = false;
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, {
				configFields: [_extends({}, textFieldConfig, {
					onBlur: function onBlur() {},
					onFocus: function onFocus() {
						itFired = true;
					}
				})]
			}));
			wrapper.find('input').simulate('focus');

			expect(itFired).toBe(true);
		});

		it('Fires the onBlur handler', function () {
			var itFired = false;
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, {
				configFields: [_extends({}, textFieldConfig, {
					onBlur: function onBlur() {
						itFired = true;
					}
				})]
			}));
			wrapper.find('input').simulate('blur');

			expect(itFired).toBe(true);
		});
	});

	describe('showing <Message> component in the child fields', function () {
		var successMessage = {
			message: 'Hi Roy',
			error: false
		};
		var errorMessage = {
			error: true,
			message: 'Fail'
		};

		it('shows success message', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, {
				configFields: [_extends({}, textFieldConfig, {
					message: successMessage,
					ID: 'sField',
					id: 'sField'
				})]
			}));
			expect(wrapper.find('.caldera-components-message').text()).toBe('Hi Roy');
		});

		it('shows error message', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, {
				configFields: [_extends({}, textFieldConfig, {
					message: errorMessage,
					ID: 'fField',
					id: 'fField'
				})]
			}));
			expect(wrapper.find('.caldera-components-message').text()).toBe('Fail');
		});
	});

	describe('Magic fields inside render groups', function () {
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
			isOpen: true,
			onValueChange: function onValueChange() {}
		};

		it('Has the input', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [magicField] }));
			expect(component.find('input')).toHaveLength(1);
		});

		it('Get values update ', function () {
			var value = '1';
			var component = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [_extends({}, magicField, {
					value: value,
					onValueChange: function onValueChange(newValue) {
						value = newValue;
					}
				})] }));
			component.find('input').simulate('change', { target: { value: 3 } });

			expect(value).toBe(3);
		});
	});
});