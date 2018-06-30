'use strict';

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Input = require('./Input');

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('Input component', function () {
	describe('Input component props', function () {
		it('Passes its props', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_Input.Input, {
				id: 'bags',
				fieldClassName: 'foo',
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('passes the value', function () {
			var wrapper = _reactTestRenderer2.default.create(_react2.default.createElement(_Input.Input, {
				id: 'bags',
				fieldClassName: 'foo',
				onValueChange: function onValueChange() {},
				value: 'Sivans'
			}));
			expect(wrapper.toJSON()).toMatchSnapshot();
		});
	});

	describe('Input component rendering', function () {
		it('Has the correct id attribute', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
				id: 'bags',
				fieldClassName: 'foo',
				onValueChange: function onValueChange() {}

			}));
			expect(wrapper.find('#bags')).toHaveLength(1);
		});

		it('Has the correct class attribute', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
				id: 'bags',
				fieldClassName: 'foo',
				onValueChange: function onValueChange() {}
			}));
			expect(wrapper.find('.foo')).toHaveLength(1);
		});

		it('Has the value', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
				id: 'bags',
				fieldClassName: 'foo',
				onValueChange: function onValueChange() {},
				value: 'Sivans'
			}));
			expect(wrapper.find('input').prop('value')).toBe('Sivans');
		});

		it('Updates the value when changed', function () {
			var setValue = '';
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
				id: 'bags',
				fieldClassName: 'foo',
				onValueChange: function onValueChange(newValue) {
					setValue = newValue;
				},
				value: 'Sivans'
			}));
			wrapper.find('input').simulate('change', { target: { value: 'r3s' } });
			expect(setValue).toEqual('r3s');
		});

		describe('Disabled prop', function () {
			it('Does not disable by default', function () {
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
					id: 'i8',
					fieldClassName: 'foo',
					onValueChange: function onValueChange() {},
					value: 'Sivans'
				}));
				expect(wrapper.find('input').prop('disabled')).toBe(undefined);
			});

			it('Does  disable by default', function () {
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
					id: 'i8',
					fieldClassName: 'foo',
					onValueChange: function onValueChange() {},
					value: 'Sivans',
					disabled: true
				}));
				expect(wrapper.find('input').prop('disabled')).toBe(true);
			});
		});
	});

	describe('Works for all HTML5 input types via inputType prop', function () {
		(0, _util.getHtmlInputTypes)().forEach(function (type) {
			it('inputType prop of ' + type + ' works', function () {
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
					id: 'bags',
					fieldClassName: 'foo',
					onValueChange: function onValueChange() {},
					value: 'Sivans',
					inputType: type
				}));
				expect(wrapper.find('input').prop('type')).toBe(type);
			});
		});
	});

	describe('Checkbox', function () {
		describe('props for checkboxes', function () {
			it('Can be a checkbox', function () {
				var component = _reactTestRenderer2.default.create(_react2.default.createElement(_Input.Input, {
					id: 'check1',
					fieldClassName: 'check1',
					onValueChange: function onValueChange() {},
					value: 'true',
					inputType: 'checkbox'
				}));
				expect(component.toJSON()).toMatchSnapshot();
			});

			it('Has checkbox type', function () {
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
					id: 'check2',
					fieldClassName: 'check1',
					onValueChange: function onValueChange() {},
					value: 'true',
					inputType: 'checkbox'
				}));
				expect(wrapper.find('input').prop('type')).toEqual('checkbox');
			});

			it('Sets defaultChecked prop to true', function () {
				var value = true;
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
					id: 'check5',
					fieldClassName: 'check1',
					onValueChange: function onValueChange(newValue) {
						value = newValue;
					},
					value: value,
					inputType: 'checkbox'
				}));
				expect(wrapper.find('input').prop('defaultChecked')).toEqual(true);
			});

			it('Sets defaultChecked prop to false', function () {
				var value = false;
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
					id: 'check6',
					fieldClassName: 'check1',
					onValueChange: function onValueChange(newValue) {
						value = newValue;
					},
					value: value,
					inputType: 'checkbox'
				}));
				expect(wrapper.find('input').prop('defaultChecked')).toEqual(false);
			});

			it('Runs callback function when changed', function () {
				var setValue = '';
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Input.Input, {
					id: 'checkbox-value-update-test',
					fieldClassName: 'foo',
					onValueChange: function onValueChange() {
						setValue = 'itRan';
					},
					value: ['1'],
					inputType: 'checkbox'

				}));
				wrapper.find('input').simulate('change');
				expect(setValue).toEqual('itRan');
			});
		});
	});
});