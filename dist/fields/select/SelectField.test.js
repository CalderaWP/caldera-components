'use strict';

var _SelectField = require('./SelectField');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _index = require('enzyme/build/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('Select field component', function () {
	function genericChangeHandler() {}

	describe('Props', function () {
		it('Creates without options or value', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_SelectField.SelectField, {
				id: 'r',
				fieldClassName: 'rs',
				onValueChange: genericChangeHandler
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Creates with options', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_SelectField.SelectField, {
				id: 'r',
				fieldClassName: 'rs',
				onValueChange: genericChangeHandler,
				options: [{
					value: 1,
					label: 'One'
				}]
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Creates with options and value', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_SelectField.SelectField, {
				id: 'r',
				fieldClassName: 'rs',
				onValueChange: genericChangeHandler,
				options: [{
					value: '1',
					label: 'One'
				}],
				value: '1'
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('sets id attr', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SelectField.SelectField, {
				id: 'r3s',
				fieldClassName: 'rs',
				onValueChange: genericChangeHandler
			}));
			expect(wrapper.find('select').prop('id')).toBe('r3s');
		});

		describe('Options ', function () {
			it('Has option', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SelectField.SelectField, {
					id: 'r',
					fieldClassName: 'rs',
					onValueChange: genericChangeHandler,
					options: [{
						value: 1,
						label: 'One'
					}, {
						value: 2,
						label: 'Two'
					}]
				}));
				expect(wrapper.find('.caldera-config-option')).toHaveLength(2);
			});
		});

		describe('Value of field', function () {
			it('Set value from default', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_SelectField.SelectField, {
					id: 'r',
					fieldClassName: 'rs',
					onValueChange: function onValueChange() {},
					options: [{
						value: 'one',
						label: 'One'
					}, {
						value: '2',
						label: 'Two'
					}],
					value: '2'
				}));
				expect(wrapper.find('select').prop('value')).toEqual('2');
			});
		});

		describe('Disabled prop', function () {
			it('Does not disable by default', function () {
				var wrapper = (0, _index.shallow)(_react2.default.createElement(_SelectField.SelectField, {
					id: 'r11',
					fieldClassName: 'rs',
					onValueChange: function onValueChange() {},
					options: [{
						value: 'one',
						label: 'One'
					}, {
						value: '2',
						label: 'Two'
					}],
					value: '2'
				}));
				expect(wrapper.find('select').prop('disabled')).toBe(undefined);
			});

			it('Does  disable by default', function () {
				var wrapper = (0, _index.shallow)(_react2.default.createElement(_SelectField.SelectField, {
					id: 'r11',
					fieldClassName: 'rs',
					onValueChange: function onValueChange() {},
					options: [{
						value: 'one',
						label: 'One'
					}, {
						value: '2',
						label: 'Two'
					}],
					value: '2',
					disabled: true
				}));
				expect(wrapper.find('select').prop('disabled')).toBe(true);
			});
		});
	});
});