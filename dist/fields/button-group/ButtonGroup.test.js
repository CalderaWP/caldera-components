'use strict';

var _ButtonGroup = require('./ButtonGroup');

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

describe('Button Group component', function () {
	function genericChangeHandler() {}

	describe('options', function () {
		it('Creates with one option', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_ButtonGroup.ButtonGroup, {
				onChange: genericChangeHandler,
				options: [{
					value: 'Tags',
					label: 'Tags'
				}]
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});
		it('Renders two buttons', function () {
			var updateValue = null;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_ButtonGroup.ButtonGroup, {
				onChange: function onChange(newValue) {
					updateValue = newValue;
				},
				options: [{
					value: 'tags',
					label: 'Tags'
				}, {
					value: 'categories',
					label: 'Categories'
				}]
			}));
			expect(component.find('button')).toHaveLength(2);
		});

		it('Sends the right update value when clicked', function () {
			var updateValue = null;
			var component = (0, _enzyme.mount)(_react2.default.createElement(_ButtonGroup.ButtonGroup, {
				onChange: function onChange(newValue) {
					updateValue = newValue;
				},
				options: [{
					value: 'Tags',
					label: 'Tags'
				}]
			}));
			component.find('button').simulate('click');
			expect(updateValue).toBe('Tags');
		});

		it('Marks the value as selected if it should on initial load', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_ButtonGroup.ButtonGroup, {
				onChange: function onChange() {},
				options: [{
					value: 'a1',
					label: 'Tags'
				}],
				value: 'a1'
			}));

			expect(component.find('button').hasClass('selected')).toBe(true);
		});

		it('Sets aria-label to label  when ariaLabel not provided', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_ButtonGroup.ButtonGroup, {
				onChange: genericChangeHandler,
				options: [{
					value: 'a1',
					label: 'Tags'
				}]
			}));

			expect(component.find('button').prop('aria-label')).toBe('Tags');
		});

		it('Sets aria-label to explicit value when passed', function () {
			var component = (0, _enzyme.mount)(_react2.default.createElement(_ButtonGroup.ButtonGroup, {
				onChange: genericChangeHandler,
				options: [{
					value: 'a1',
					label: 'Tags',
					ariaLabel: 'Select field values'
				}]
			}));

			expect(component.find('button').prop('aria-label')).toBe('Select field values');
		});
	});

	describe('icon buttons', function () {
		it('Creates with an icon option', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_ButtonGroup.ButtonGroup, {
				onChange: genericChangeHandler,
				options: [{
					value: 'Tags',
					label: 'Tags',
					icon: 'fa-envelope'
				}]
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});
	});
});