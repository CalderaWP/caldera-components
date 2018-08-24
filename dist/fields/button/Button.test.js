'use strict';

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Button = require('./Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('Button component', function () {
	function genericChangeHandler() {}

	describe('props', function () {
		it('snapshot for submit', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_Button.Button, {
				onClick: genericChangeHandler,
				id: 'button-1',
				fieldClassName: 'foo'
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('snapshot for button', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_Button.Button, {
				onClick: genericChangeHandler,
				inputType: 'button',
				id: 'button-2',
				fieldClassName: 'foo'
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('clicks', function () {

		it('Has a submit button by default', function () {
			var component = (0, _enzyme.shallow)(_react2.default.createElement(_Button.Button, {
				onClick: genericChangeHandler,
				id: 'button-3',
				fieldClassName: 'foo'
			}));
			expect(component.find('input').length).toEqual(1);
		});

		it('Handler called when submit click', function () {
			var clicked = false;
			var component = (0, _enzyme.shallow)(_react2.default.createElement(_Button.Button, {
				onClick: function onClick() {
					clicked = true;
				},
				id: 'button-4',
				fieldClassName: 'foo'
			}));

			component.find('input').simulate('click');
			expect(clicked).toEqual(true);
		});

		it('Has a button when inputType is button', function () {
			var component = (0, _enzyme.shallow)(_react2.default.createElement(_Button.Button, {
				onClick: genericChangeHandler,
				id: 'button-5',
				fieldClassName: 'foo',
				inputType: 'button'
			}));

			expect(component.find('button').length).toEqual(1);
		});

		it('Handler called when submit click', function () {
			var clicked = false;
			var component = (0, _enzyme.shallow)(_react2.default.createElement(_Button.Button, {
				onClick: function onClick() {
					clicked = true;
				},
				id: 'button-4',
				fieldClassName: 'foo',
				inputType: 'button'

			}));
			component.find('button').simulate('click');
			expect(clicked).toEqual(true);
		});
	});
});