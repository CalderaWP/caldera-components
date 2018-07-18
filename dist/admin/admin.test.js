'use strict';

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CalderaHeader = require('./CalderaHeader');

var _PageBody = require('./PageBody');

var _StatusIndicator = require('./StatusIndicator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('admin components', function () {
	it('CalderaHeader Matching Snapshot ', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_CalderaHeader.CalderaHeader, null));
		expect(component.toJSON()).toMatchSnapshot();
	});
	it('CalderaHeader Matching Snapshot with child li', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(
			_CalderaHeader.CalderaHeader,
			null,
			_react2.default.createElement(
				'li',
				null,
				'Hi Roy'
			)
		));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('PageBody Matching Snapshot ', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_PageBody.PageBody, null));
		expect(component.toJSON()).toMatchSnapshot();
	});
	it('PageBody Matching Snapshot with child ', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(
			_PageBody.PageBody,
			null,
			_react2.default.createElement(
				'div',
				null,
				'Hi Roy'
			)
		));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('StatusIndicator Matching Snapshot ', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_StatusIndicator.StatusIndicator, null));
		expect(component.toJSON()).toMatchSnapshot();
	});
	it('StatusIndicator Matching Snapshot with a message to show ', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_StatusIndicator.StatusIndicator, {
			message: 'Hi Roy',
			success: true,
			show: true
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});
	it('StatusIndicator Matching Snapshot with an error message to show ', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_StatusIndicator.StatusIndicator, {
			message: 'False Roy',
			success: false,
			show: true
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});
});