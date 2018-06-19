'use strict';

var _FieldGroup = require('./FieldGroup');

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

describe('Field Group component', function () {
	describe('Field group component props', function () {
		it('Works with help text', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-22',
				label: 'Who',
				help: 'Who to say hi to',
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Help text is optional', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-22',
				label: 'Who',
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can show an input ', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-22',
				label: 'Who',
				type: 'input',
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Can mark inner input as required', function () {
			var component = _reactTestRenderer2.default.create(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'control-22',
				label: 'Who',
				type: 'input',
				isRequired: true,
				onValueChange: function onValueChange() {}
			}));
			expect(component.toJSON()).toMatchSnapshot();
		});
	});

	describe('Field group component rendering', function () {
		it('Has the right wrapper class', function () {
			var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FieldGroup.FieldGroup, {
				id: 'xpadasfsad',
				label: 'Who',
				type: 'input',
				onValueChange: function onValueChange() {}
			}));
			expect(wrapper.find('div.caldera-config-group')).toHaveLength(1);
		});

		describe('inner input', function () {
			it('Has inner input', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'Who',
					type: 'input',
					onValueChange: function onValueChange() {}
				}));

				expect(wrapper.find('#test-control input').length).toBeTruthy();
			});

			it('controls inner input  html5 type', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'Who',
					type: 'input',
					onValueChange: function onValueChange() {},
					value: 'Sivans',
					inputType: 'hidden'
				}));

				expect(wrapper.find('#test-control input').prop('type')).toEqual('hidden');
			});

			it('Can change inner input', function () {
				var setValue = '';

				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'Who',
					type: 'input',
					onValueChange: function onValueChange(newValue) {
						setValue = newValue;
					},
					value: 'Sivans'
				}));

				wrapper.find('#test-control input').simulate('change', { target: { value: 'r3s' } });
				expect(setValue).toEqual('r3s');
			});
		});

		describe('Label of Input', function () {
			it('Has no label for hidden fields ', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'I will not be outputeed',
					type: 'input',
					inputType: 'hidden',
					onValueChange: function onValueChange() {},
					value: 'Sivans'
				}));
				expect(wrapper.find('input')).toHaveLength(1);
				expect(wrapper.find('label')).toHaveLength(0);
			});

			it('Has has label for other input fields ', function () {
				var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_FieldGroup.FieldGroup, {
					id: 'test-control',
					label: 'I will not be outputeed',
					type: 'input',
					onValueChange: function onValueChange() {},
					value: 'Sivans'
				}));
				expect(wrapper.find('input')).toHaveLength(1);
				expect(wrapper.find('label')).toHaveLength(1);
			});
		});
	});
});