'use strict';

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _MagicFieldGroup = require('./MagicFieldGroup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

var genericChangeHandler = function genericChangeHandler() {};
describe('MagicFieldGroup component', function () {

	it('matches snapshot with no message', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
			id: 'magic-3',
			label: 'Hi Roy',
			fieldClassName: 'magic',
			onValueChange: genericChangeHandler,
			options: [{
				label: 'HTML',
				value: 'html'
			}, {
				label: 'Plain Text',
				value: 'plain'
			}],
			isOpen: false
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('matches snapshot with message', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
			id: 'magic-3',
			label: 'Hi Roy',
			fieldClassName: 'magic',
			onValueChange: genericChangeHandler,
			options: [{
				label: 'HTML',
				value: 'html'
			}, {
				label: 'Plain Text',
				value: 'plain'
			}],
			isOpen: false,
			message: {
				message: 'Hi Roy',
				error: false
			}
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});

	describe('Inner input', function () {
		it('Has inner input', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-1',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'HTML',
					value: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain'
				}],
				isOpen: false
			}));
			expect(component.find('input')).toHaveLength(1);
		});
	});
	describe('Options', function () {
		it('shows no options if closed', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-3',
				label: 'Hi Roy',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'HTML',
					value: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain'
				}],
				isOpen: false
			}));
			expect(component.find('.magic-input-option')).toHaveLength(0);
		});

		it('Uses options prop by default - right number of options', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-4',
				label: 'Hi Roy',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'HTML',
					value: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain'
				}],
				isOpen: true
			}));
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses options prop by default', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-4',
				label: 'Hi Roy',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'HTML',
					value: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain'
				}],
				isOpen: true
			}));
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses fieldsList prop if no options prop', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				label: 'Hi Roy',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
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
				isOpen: true
			}));
			component.find('input').simulate('focus');
			expect(component.find('.magic-input-option')).toHaveLength(3);
		});

		it('Uses systemTagsList prop if no options prop and currentListType state is system', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: genericChangeHandler,
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
				isOpen: true
			}));
			component.find('input').simulate('focus');
			component.setState({ currentListType: 'system' });
			expect(component.find('.magic-input-option')).toHaveLength(1);
		});

		it('Receives updated value', function () {
			var value = '1';
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange(newValue) {
					value = newValue;
				},
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
				value: value,
				isOpen: true
			}));
			component.find('input').simulate('focus');
			component.find('input').simulate('change', { target: { value: '3' } });
			expect(value).toEqual('3');
		});
	});

	describe('Value', function () {
		it('Uses props.value to set value', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-7',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: genericChangeHandler,
				options: [{
					label: '1',
					value: 1
				}],
				value: 1
			}));
			expect(component.find('input').prop('value')).toBe(1);
		});

		it('Passes updated value properly through the onSelect handler', function () {
			var updatedValue = null;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-9',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange(newValue) {
					updatedValue = newValue;
				},
				options: [{
					label: '1',
					value: 1
				}, {
					label: '14',
					value: 14
				}],
				value: 1
			}));

			component.instance().onSelect(14);
			expect(updatedValue).toEqual(14);
		});
	});

	describe('Button group for type choice', function () {
		it('Outputs the buttons if open', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-50',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: genericChangeHandler,
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
				isOpen: true
			}));
			expect(component.find('button')).toHaveLength(2);
		});
		it('Does not output the buttons if not open', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-50',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: genericChangeHandler,
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
				isOpen: false
			}));
			expect(component.find('button')).toHaveLength(0);
		});
	});

	it('onChange passes value', function () {
		var value = 2;
		var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
			id: 'magic-5',
			fieldClassName: 'magic',
			label: 'Hi Roy',
			onValueChange: function onValueChange(newValue) {
				value = newValue;
			},
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
			value: value,
			isOpen: true
		}));
		component.instance().onChange(3);
		expect(value).toBe(3);
	});

	describe('updates state on focus', function () {
		it('Updates state when calling handler directly', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange() {},
				defaultList: 'fields',
				options: [],

				isOpen: false
			}));
			component.instance().onInputFocus();
			expect(component.state().isOpen).toBe(true);
		});

		it('Updates state when simulating focus', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange() {},
				defaultList: 'fields',
				options: [],

				isOpen: false
			}));
			component.find('input').simulate('focus');
			expect(component.state().isOpen).toBe(true);
		});
	});

	describe('updates state on blur', function () {

		it('Updates state when calling handler directly', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange() {},
				defaultList: 'fields',
				options: [],

				isOpen: true
			}));
			component.instance().onInputBlur();
			expect(component.state().isOpen).toBe(false);
		});
	});

	describe('Changing list type', function () {
		it('Opens whenever changing type', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange() {},
				defaultList: 'fields',
				options: [],

				isOpen: false
			}));
			component.instance().onChangeListType('system');
			expect(component.state().isOpen).toBe(true);
		});
		it('Stays opens changing type', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange() {},
				defaultList: 'fields',
				options: [],

				isOpen: true
			}));
			component.instance().onChangeListType('system');
			expect(component.state().isOpen).toBe(true);
		});

		it('Changes the type', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
				id: 'magic-5',
				fieldClassName: 'magic',
				label: 'Hi Roy',
				onValueChange: function onValueChange() {},
				defaultList: 'fields',
				options: [],

				isOpen: true
			}));
			component.instance().onChangeListType('system');
			expect(component.state().currentListType).toBe('system');
		});
	});

	it('Renders the inner items', function () {
		var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicFieldGroup.MagicFieldGroup, {
			id: 'magic-5',
			fieldClassName: 'magic',
			label: 'Hi Roy',
			onValueChange: function onValueChange() {},
			defaultList: 'fields',
			options: [],
			isOpen: true
		}));
		var innerComponent = _reactTestRenderer2.default.create(component.instance().renderItem({
			label: '1',
			value: '1',
			innerKey: '1'
		}, true));
		expect(innerComponent.toJSON()).toMatchSnapshot();
	});
});