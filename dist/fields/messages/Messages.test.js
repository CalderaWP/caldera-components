'use strict';

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Message = require('./Message');

var _messageObjectFactory = require('./messageObjectFactory');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('Message component', function () {
	describe('Classnames', function () {
		describe('Displaying message', function () {
			it('Shows a message', function () {
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Message.Message, {
					message: {
						message: 'Hi Roy'
					}
				}));
				expect(wrapper.length).toBe(1);
			});

			it('Shows the right message message', function () {
				var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Message.Message, {
					message: {
						message: 'Hi Roy'
					}
				}));
				expect(wrapper.text()).toBe('Hi Roy');
			});
		});

		it('shows classname prop as class', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Message.Message, {
				message: {
					message: 'Hi Roy'
				},
				className: 'mike'
			}));
			expect(wrapper.find('.mike').length).toBe(1);
		});

		it('Has error class when is an error', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Message.Message, {
				message: {
					message: 'Something bad has happened.',
					error: true
				}
			}));
			expect(wrapper.find('.has-error').length).toBe(1);
		});

		it('Does not have error class when is not an error', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Message.Message, {
				message: {
					message: 'Something good has happened.',
					error: false
				}
			}));
			expect(wrapper.find('.has-error').length).toBe(0);
		});

		it('Does have caldera-components-error class when an error', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Message.Message, {
				message: {
					message: 'Something',
					error: true
				}
			}));
			expect(wrapper.find('.caldera-components-error').length).toBe(1);
		});

		it('Does have caldera-components-error class when not an error', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Message.Message, {
				message: {
					message: 'Something',
					error: false
				}
			}));
			expect(wrapper.find('.caldera-components-error').length).toBe(1);
		});
	});
});

describe('messageObjectFactory', function () {
	it('casts truthy error to boolean', function () {
		expect((0, _messageObjectFactory.messageObjectFactory)({
			error: 1,
			message: 'Roy'
		}).error).toBe(true);
	});

	it('casts falsey error to boolean', function () {
		expect((0, _messageObjectFactory.messageObjectFactory)({
			error: 'false',
			message: 'Roy'
		}).error).toBe(false);
	});
});