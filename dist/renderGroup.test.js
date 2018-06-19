'use strict';

var _RenderGroup = require('./RenderGroup');

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

var textFieldConfig = {
	'id': 'cf-something-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false
};

var hiddenFieldConfig = {
	'id': 'cf-something-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false
};

var configFields = [{
	'id': 'cf-something-apikey', 'label': 'API Key', 'type': 'text'
}, hiddenFieldConfig, textFieldConfig];

var genericHandler = function genericHandler() {};
configFields.map(function (config) {
	config.onValueChange = genericHandler;
});

describe('The render group component', function () {

	describe('Rendering with fields', function () {
		it('Works with one text field', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [{
					'id': 'sz',
					'label': 'Tags',
					'desc': 'Comma separated list of tags.',
					'type': 'text',
					'description': false,
					onValueChange: genericHandler
				}] }));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Works with a few fields', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: configFields }));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Does not error when passed empty array of fields', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: [] }));
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('Creates the inner components correctly', function () {
		it('Creates array of components', function () {
			var component = new _RenderGroup.RenderGroup({
				configFields: configFields
			});
			expect(component.createComponents()).toBeInstanceOf(Array);
		});

		it('Has the right number of children', function () {
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, {
				className: 'x1',
				configFields: configFields
			}));
			expect(wrapper.find('.x1').children()).toHaveLength(4);
		});

		it('Wraps groups in div', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Comma separated list of tags.',
				'type': 'text',
				'description': false,
				onValueChange: genericHandler
			}];
			var props = {
				configFields: thisConfigFields
			};
			var component = new _RenderGroup.RenderGroup(props);
			var wrapper = (0, _enzyme.shallow)(component.createComponents()[0]);
			expect(wrapper.type()).toBe('div');
		});

		it('Creates the inner input', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Comma separated list of tags.',
				'type': 'text',
				'description': false,
				onValueChange: genericHandler
			}];
			var props = {
				configFields: thisConfigFields
			};
			var component = new _RenderGroup.RenderGroup(props);
			var wrapper = (0, _enzyme.mount)(component.createComponents()[0]);
			expect(wrapper.find('input')).toHaveLength(1);
		});

		it('Adds the description', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Do not expect this',
				'type': 'text',
				'description': 'Expect This',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));

			expect(wrapper.find('p.description')).toHaveLength(1);
		});

		it('Adds the right description', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Do not expect this',
				'type': 'text',
				'description': 'Expect This',
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('p.description').text()).toEqual('Expect This');
		});

		it('Sets aria-describedby prop on input to match description', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Do not expect this',
				'type': 'text',
				'description': 'Expect This',
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('input').prop('aria-describedby')).toEqual('sz-description');
		});

		it('Adds the description using .desc if .description is not provided to match old spec', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'type': 'text',
				'desc': 'Expect This',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));

			expect(wrapper.find('p.description')).toHaveLength(1);
			expect(wrapper.find('p.description').text()).toEqual('Expect This');
		});

		it('Adds the right description using .desc if .description is not provided to match old spec', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'type': 'text',
				'desc': 'Expect This',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));

			expect(wrapper.find('p.description').text()).toEqual('Expect This');
		});

		it('Adds no description if .description is false', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'type': 'text',
				onValueChange: genericHandler
			}];

			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('p.description')).toHaveLength(0);
		});

		it('Adds the label', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Comma separated list of tags.',
				'type': 'text',
				'description': false,
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('label')).toHaveLength(1);
			expect(wrapper.find('label').text()).toEqual(thisConfigFields[0].label);
		});

		it('Adds the right label', function () {
			var thisConfigFields = [{
				'id': 'sz',
				'label': 'Tags',
				'desc': 'Comma separated list of tags.',
				'type': 'text',
				'description': false,
				onValueChange: genericHandler
			}];
			var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_RenderGroup.RenderGroup, { configFields: thisConfigFields }));
			expect(wrapper.find('label').text()).toEqual(thisConfigFields[0].label);
		});
	});
});