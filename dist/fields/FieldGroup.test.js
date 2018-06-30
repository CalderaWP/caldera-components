'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _FieldGroup = require('./FieldGroup');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('Field Group component', function () {
	describe('Field group component props', function () {
		it('Works with help text', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-20',
				label: 'Who',
				help: 'Who to say hi to',
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Help text is optional', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-21',
				label: 'Who',
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can show an input ', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-22',
				label: 'Who',
				type: 'input',
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can mark inner input as required', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-223',
				label: 'Who',
				type: 'input',
				isRequired: true,
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can mark inner input as disabled', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-224',
				label: 'Who',
				type: 'input',
				isRequired: true,
				onValueChange: function onValueChange() {},
				disabled: true
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('Field group component rendering', function () {

		describe('inner input', function () {
			it('Has inner input', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'Who',
					type: 'input',
					onValueChange: function onValueChange() {}
				}));

				expect(wrapper.find('#test-control input').length).toBeTruthy();
			});

			it('controls inner input  html5 type', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'Who',
					type: 'input',
					onValueChange: function onValueChange() {},
					value: 'Sivans',
					inputType: 'hidden'
				}));

				expect(wrapper.find('#test-control input').prop('type')).toEqual('hidden');
			});

			it('Can change inner input', function () {
				var setValue = '';

				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'Who',
					type: 'input',
					onValueChange: function onValueChange(newValue) {
						setValue = newValue;
					},
					value: 'Sivans'
				}));

				wrapper.find('#test-control input').simulate('change', { target: { value: 'r3s' } });
				expect(setValue).toEqual('r3s');
			});

			it('Can disable inner input', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'control-225',
					label: 'Who',
					type: 'input',
					isRequired: true,
					onValueChange: function onValueChange() {},
					disabled: true
				}));

				expect(wrapper.find('#control-225 input').prop('disabled')).toEqual(true);
			});
		});

		describe('Label of Input', function () {
			it('Has no label for hidden fields ', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'I will not be outputed',
					type: 'input',
					inputType: 'hidden',
					onValueChange: function onValueChange() {},
					value: 'Sivans'
				}));
				expect(wrapper.find('input')).toHaveLength(1);
				expect(wrapper.find('label')).toHaveLength(0);
			});

			it('Has has label for other input fields ', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'I will not be outputed',
					type: 'input',
					onValueChange: function onValueChange() {},
					value: 'Sivans'
				}));
				expect(wrapper.find('input')).toHaveLength(1);
				expect(wrapper.find('label')).toHaveLength(1);
			});
		});
	});

	describe('Using as a select field', function () {

		it('Outputs a select field', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}]
			}));
			expect(wrapper.find('select')).toHaveLength(1);
			expect(wrapper.find('label')).toHaveLength(1);
		});

		it('Outputs a select field label', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select2',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}]
			}));
			expect(wrapper.find('label')).toHaveLength(1);
		});

		it('Outputs the right select field label', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select3',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}]
			}));
			expect(wrapper.find('label').text()).toEqual('Basic select field');
		});

		it('Can disable inner select', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select3-b',
				label: 'Who',
				type: 'input',
				isRequired: true,
				onValueChange: function onValueChange() {},
				disabled: true
			}));

			expect(wrapper.find('#select3-b input').prop('disabled')).toEqual(true);
		});
	});

	describe('<fieldset>', function () {
		describe('checkbox fieldsets', function () {
			it('Has a fieldset wrapper', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'fieldset-1',
					label: 'How many',
					onValueChange: function onValueChange() {},
					inputType: 'checkbox',
					type: 'fieldset',
					options: [{
						value: 1,
						label: 'One'
					}, {
						value: 2,
						label: 'Two'
					}]
				}));
				expect(wrapper.find('fieldset')).toHaveLength(1);
			});

			it('Has a legend inside of the fieldset ', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'fieldset-2',
					label: 'How many',
					onValueChange: function onValueChange() {},
					inputType: 'checkbox',
					type: 'fieldset',
					options: [{
						value: 1,
						label: 'One'
					}, {
						value: 2,
						label: 'Two'
					}]
				}));
				expect(wrapper.find('fieldset').children().find('legend')).toHaveLength(1);
			});

			it('Has a the right legend inside of the fieldset ', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'fieldset-3',
					label: 'How many',
					onValueChange: function onValueChange() {},
					inputType: 'checkbox',
					type: 'fieldset',
					options: [{
						value: 1,
						label: 'One'
					}, {
						value: 2,
						label: 'Two'
					}]
				}));
				expect(wrapper.find('fieldset').children().find('legend').text()).toEqual('How many');
			});

			it('Has 2 checkboxes inside of the fieldset', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'fieldset-3',
					label: 'How many',
					onValueChange: function onValueChange() {},
					inputType: 'checkbox',
					type: 'fieldset',
					options: [{
						value: 1,
						label: 'One'
					}, {
						value: 2,
						label: 'Two'
					}]
				}));
				expect(wrapper.find('fieldset').children().find('input')).toHaveLength(2);
			});

			it('Checkboxes have onValueChange prop', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'fieldset-3',
					label: 'How many',
					onValueChange: function onValueChange() {},
					inputType: 'checkbox',
					type: 'fieldset',
					options: [{
						value: 1,
						label: 'One'
					}, {
						value: 2,
						label: 'Two'
					}]
				}));
				expect(_typeof(wrapper.find('fieldset').children().find('input').first().prop('onChange'))).toEqual('function');
			});
		});
	});

	describe('Message group in fieldgroup', function () {
		it('Renders error with message', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select-error-test',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}],
				message: {
					message: 'Hi Roy',
					error: true
				}

			}));
			expect(wrapper.find('.caldera-components-message')).toHaveLength(1);
		});

		it('Renders non-error with message', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select-error-test',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}],
				message: {
					message: 'Hi Roy',
					error: false
				}

			}));
			expect(wrapper.find('.caldera-components-message')).toHaveLength(1);
		});

		it('Renders the right error message', function () {
			var message = 'Hi Roy';
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select-error-test-2',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}],
				message: {
					message: message,
					error: true
				}

			}));
			expect(wrapper.find('.caldera-components-message').text()).toBe(message);
		});

		it('Renders the right non-error message', function () {
			var message = 'Hi Roy';
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select-error-test-3',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}],
				message: {
					message: message,
					error: false
				}

			}));
			expect(wrapper.find('.caldera-components-message').text()).toBe(message);
		});

		it('Renders nothing when message prop not passed', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select-error-test-3b',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}]

			}));
			expect(wrapper.find('.caldera-components-message')).toHaveLength(0);
		});

		it('Renders nothing when message prop passed, without a message', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'select-error-test-4',
				label: 'Basic select field',
				value: '1',
				type: 'select',
				onValueChange: function onValueChange() {},
				options: [{
					value: 1,
					label: 'One'
				}, {
					value: 2,
					label: 'Two'
				}],
				message: {
					error: true
				}

			}));
			expect(wrapper.find('.caldera-components-message')).toHaveLength(0);
		});
	});
});