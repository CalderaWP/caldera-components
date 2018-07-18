'use strict';

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MagicItem = require('./MagicItem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MagicSelect component', function () {

	it('Matches snapshot', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_MagicItem.MagicItem, {
			item: {
				label: 'HTML',
				value: 'html',
				key: 'a'
			},
			innerKey: 'a1',
			highlightColor: '#fff00',
			notHighlighterColor: 'white',
			isHighlighted: true
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Can render as span', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_MagicItem.MagicItem, {
			item: {
				label: 'HTML',
				value: 'html'
			},
			innerKey: '1',
			highlightColor: '#fff00',
			notHighlighterColor: 'white',
			isHighlighted: true,
			elementType: 'span'
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});

	it('Can render inner type as div', function () {
		var component = _reactTestRenderer2.default.create(_react2.default.createElement(_MagicItem.MagicItem, {
			item: {
				label: 'HTML',
				value: 'html'
			},
			innerKey: 'a1',
			highlightColor: '#fff00',
			notHighlighterColor: 'white',
			isHighlighted: true,
			innerElementType: 'div'
		}));
		expect(component.toJSON()).toMatchSnapshot();
	});
});