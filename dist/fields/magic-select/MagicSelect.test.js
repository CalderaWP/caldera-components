'use strict';

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _MagicSelect = require('./MagicSelect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

var genericChangeHandler = function genericChangeHandler() {};
describe('MagicSelect component', function () {

	it('Matches snapshot', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_MagicSelect.MagicSelect, {
			id: 'magic-1',
			fieldClassName: 'magic',
			onValueChange: genericChangeHandler,
			options: [{
				label: 'HTML',
				value: 'html',
				innerKey: 'html'
			}, {
				label: 'Plain Text',
				value: 'plain',
				innerKey: 'plain'
			}]
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Has inner input', function () {
		var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
			id: 'magic-2a',
			fieldClassName: 'magic',
			onValueChange: genericChangeHandler,
			options: [{
				label: 'HTML',
				value: 'html',
				innerKey: 'html'
			}, {
				label: 'Plain Text',
				value: 'plain',
				innerKey: 'plain'
			}]
		}));
		expect(component.find('input')).toHaveLength(1);
	});

	it('puts the right id attribute on inner input', function () {
		var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
			id: 'magic-2',
			fieldClassName: 'magic',
			onValueChange: genericChangeHandler,
			options: [{
				label: 'HTML',
				value: 'html',
				innerKey: 'html'
			}, {
				label: 'Plain Text',
				value: 'plain',
				innerKey: 'plain'
			}]
		}));
		expect(component.find('input').prop('id')).toBe('magic-2');
	});

	describe('Options', function () {
		it('shows no options if closed', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-3',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'HTML',
					value: 'html',
					innerKey: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain',
					innerKey: 'plain'
				}],
				isOpen: false
			}));
			expect(component.find('.magic-input-option')).toHaveLength(0);
		});

		it('shows  options if opened', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-3',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'HTML',
					value: 'html',
					innerKey: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain',
					innerKey: 'plain'
				}],
				isOpen: true
			}));
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Updates is open state when focused', function () {
			var isOpen = false;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-9-blur',
				fieldClassName: 'magic',
				onInputBlur: function onInputBlur() {
					isOpen = true;
				},
				onFocus: function onFocus() {
					isOpen = false;
				},
				onValueChange: genericChangeHandler,
				options: [{
					label: 'a1',
					value: 1,
					innerKey: '1'
				}, {
					label: 'a14',
					value: 14,
					innerKey: '2'

				}]
			}));
			component.find('input').simulate('focus');
			expect(component.prop('isOpen')).toEqual(false);
		});

		it('Updates is open state when blurred', function () {
			var isOpen = false;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-9-blur',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				onInputBlur: function onInputBlur() {
					isOpen = true;
				},
				onFocus: function onFocus() {
					isOpen = false;
				},
				options: [{
					label: 'a1',
					value: 1,
					innerKey: '1'
				}, {
					label: 'a14',
					value: 14,
					innerKey: '2'

				}]
			}));
			component.find('input').simulate('focus');
			component.find('input').simulate('blur');
			expect(component.prop('isOpen')).toEqual(false);
		});

		it('Uses options prop by default - right number of options', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-4',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'a1',
					value: 1,
					innerKey: '1'
				}, {
					label: 'a14',
					value: 14,
					innerKey: '2'

				}],
				isOpen: true
			}));
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});

		it('Uses options prop by default - right number of options', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-4',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: 'HTML',
					value: 'html',
					innerKey: 'html'
				}, {
					label: 'Plain Text',
					value: 'plain',
					innerKey: 'plain'
				}],
				isOpen: true
			}));
			expect(component.find('.magic-input-option')).toHaveLength(2);
		});
	});

	describe('Value', function () {
		it('Uses props.value to set value', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-7',
				fieldClassName: 'magic',
				onValueChange: genericChangeHandler,
				options: [{
					label: '1',
					value: 1,
					innerKey: '11'
				}],
				value: 1
			}));
			expect(component.find('input').prop('value')).toBe(1);
		});

		it('Passes updated value properly through the onSelect handler', function () {
			var updatedValue = null;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-9',
				fieldClassName: 'magic',
				onValueChange: function onValueChange(newValue) {
					updatedValue = newValue;
				},
				options: [{
					label: '1',
					value: 1,
					innerKey: '12'
				}, {
					label: '14',
					value: 14,
					innerKey: '13'

				}],
				value: 1
			}));

			component.instance().onSelect(14);
			expect(updatedValue).toEqual(14);
		});

		it('Passes updated value, not an event ', function () {
			var updatedValue = 1;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-9',
				fieldClassName: 'magic',
				onValueChange: function onValueChange(newValue) {
					updatedValue = newValue;
				},
				options: [{
					label: '1',
					value: 1,
					innerKey: '1'
				}, {
					label: '12',
					value: 12,
					innerKey: '12'
				}],
				value: updatedValue,
				isOpen: true
			}));

			component.instance().onChange({ target: { value: 12 } });
			expect(updatedValue).toEqual(12);
		});

		it('Receives the updated value ', function () {
			var updatedValue = 1;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-9',
				fieldClassName: 'magic',
				onValueChange: function onValueChange(newValue) {
					updatedValue = newValue;
				},
				options: [{
					label: '1',
					value: 1,
					innerKey: '1'
				}, {
					label: '12',
					value: 12,
					innerKey: '12'
				}],
				value: updatedValue,
				isOpen: true
			}));

			component.find('input').simulate('change', { target: { value: 12 } });
			expect(updatedValue).toEqual(12);
		});

		it('Gets the item value ', function () {
			var updatedValue = 1;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_MagicSelect.MagicSelect, {
				id: 'magic-9',
				fieldClassName: 'magic',
				onValueChange: function onValueChange(newValue) {
					updatedValue = newValue;
				},
				options: [{
					label: '1',
					value: 1,
					innerKey: '1'
				}, {
					label: '12',
					value: 12,
					innerKey: '12'
				}],
				value: updatedValue,
				isOpen: true
			}));
			expect(component.instance().getItemValue({ value: 12 })).toEqual(12);
		});
	});
});