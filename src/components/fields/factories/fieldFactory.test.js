import {
	fieldFactory,
} from './fieldFactory';
import {prepareFieldConfig} from './prepareFieldConfig';
import {fieldSetFactory} from './fieldSetFactory';
import {getHtmlInputTypes} from '../util';
import {mount} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';

Enzyme.configure({adapter: new Adapter()});

const textFieldConfig = {
	'id': 'cf-convertkit-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false
};

const hiddenFieldConfig = {
	'id': 'cf-convertkit-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false
};

const configFields = [
	{
		'id': 'cf-convertkit-apikey', 'label': 'API Key', 'type': 'text'
	},
	{
		'id': 'pid-1',
		'label': 'Sequence',
		'type': 'dropdown',
		'options': ['-- Select A ConvertKit Sequence --'],
		'desc': 'ConvertKit sequence to add subscriber to. Sequences are also referred to as courses.',
		'description': false,
		'extra_classes': 'field-Something is wrong',
		'magic': false
	},
	{
		'id': 'cf-convertkit-sequence-id',
		'type': 'hidden',
		'label': 'Sequence ID',
		'description': false
	},
	hiddenFieldConfig,
	{
		'id': 'cf-convertkit-email',
		'label': 'Email Address',
		'desc': 'Subscriber email address.',
		'type': 'advanced',
		'allow_types': ['email'],
		'description': true,
		'magic': false
	},
	{
		'id': 'cf-convertkit-name',
		'label': 'Name',
		'type': 'text',
		'desc': 'Subscriber name.',
		'description': true
	},
	textFieldConfig
];

const genericHandler = () => {
};
configFields.map(config => {
	config.onValueChange = genericHandler;
});

describe('Factories', () => {
	describe('Field factory', () => {

		it('validates type arg, setting inputType arg', () => {
			let config = {
				...textFieldConfig,
				type: 'email',
				onValueChange: genericHandler
			};
			expect(config.type).toBe('email');
			config = prepareFieldConfig(config);
			expect(config.inputType).toBe('email');
		});

		it('Allows fieldset', () => {
			const fieldSetField = {
				id: 'fieldset-30',
				label: 'How many?',
				type: 'fieldset',
				options: [
					{
						value: '1',
						label: 'One'
					},
					{
						value: '2',
						label: 'Two'
					}

				],
				value: [],
				onValueChange: () => {
				}
			};

			let config = {
				...textFieldConfig,
				type: 'email',
				onValueChange: genericHandler
			};
			config = prepareFieldConfig(fieldSetField);
			expect(config.type).toBe('fieldset');
		});

		const selectFieldOptions = [
			{
				label: 'HTML',
				value: 'html'
			},
			{
				label: 'Plain Text',
				value: 'plain'
			}
		];
		const selectFieldConfig = {
			'id': 'cf-something-select-id',
			'type': 'select',
			'label': 'Content type',
			'description': 'Choose content type, default is HTML',
			options: selectFieldOptions,
			value: '',
			onValueChange: genericHandler
		};
		it('Allows select fields', () => {
			expect(prepareFieldConfig(selectFieldConfig).type).toBe('select');
		});

		it('passes the field options for select fields', () => {
			expect(prepareFieldConfig(selectFieldConfig).options).toEqual(selectFieldOptions);

		});

		it('Changes "dropdown" to select', () => {
			const selectFieldConfig = {
				'id': 'cf-something-select-id',
				'type': 'dropdown',
				'label': 'Content type',
				'description': 'Choose content type, default is HTML',
				options: [
					{
						label: 'HTML',
						value: 'html'
					},
					{
						label: 'Plain Text',
						value: 'plain'
					}
				],
				value: '',
				onValueChange: genericHandler
			};
			expect(prepareFieldConfig(selectFieldConfig).type).toBe('select');
		});

		describe('Sets inputType arg in config', () => {
			getHtmlInputTypes().forEach((type) => {
				it(`type arg with value of ${type} sets inputType arg`, () => {
					const config = prepareFieldConfig({
						...textFieldConfig,
						type,
						onValueChange: genericHandler
					});
					expect(config.inputType).toBe(type);
				});
			});

		});

		describe('Works for all HTML5 input types via inputType prop', () => {
			getHtmlInputTypes().forEach((type) => {
				it(`inputType prop of ${type} works`, () => {
					let config = {
						...textFieldConfig,
						type,
						onValueChange: genericHandler
					};
					const wrapper = mount(
						React.createElement('div', {}, fieldFactory(config))
					);
					expect(wrapper.find('input').prop('type')).toBe(type);
				});
			});
		});

		describe('Works with disabled prop', () => {
			it('Sets disabled prop to false if not passed', () => {
				const selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					],
					value: '',
					onValueChange: genericHandler
				};
				expect(prepareFieldConfig(selectFieldConfig).disabled).toBe(false);
			});

			it('Sets disabled prop to true if passed a truthy value', () => {
				const selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					],
					value: '',
					onValueChange: genericHandler,
					disabled: 1
				};
				expect(prepareFieldConfig(selectFieldConfig).disabled).toBe(true);
			});

		});


		describe('messages prop', () => {
			it('Passes properly formatted message object', () => {
				const message = {
					message: 'Hi',
					error: true
				};
				const selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					],
					value: '',
					onValueChange: genericHandler,
					message: message
				};
				expect(prepareFieldConfig(selectFieldConfig).message).toEqual(message);
			});

			it('Validates message object', () => {
				const message = {
					message: 'Hi',
					error: 1
				};
				const selectFieldConfig = {
					'id': 'cf-something-select-id',
					'type': 'dropdown',
					'label': 'Content type',
					'description': 'Choose content type, default is HTML',
					options: [
						{
							label: 'HTML',
							value: 'html'
						},
						{
							label: 'Plain Text',
							value: 'plain'
						}
					],
					value: '',
					onValueChange: genericHandler,
					message: message
				};
				expect(prepareFieldConfig(selectFieldConfig).message).toEqual({
					...message,
					error: true
				});
			});
		});

		describe('validators array', () => {
			it('is empty array if none supplied', () => {
				expect(prepareFieldConfig(textFieldConfig).validators).toEqual([]);
			});
			it('is empty array if none supplied', () => {
				const validators = [
					() => {
						return true;
					}
				];
				expect(prepareFieldConfig({
					...textFieldConfig,
					validators
				}).validators).toEqual(validators);
			});
		});
	});

	describe('Field set factory', () => {
		it('Creates the right number of elements', () => {
			const components = fieldSetFactory(configFields);
			expect(components).toHaveLength(configFields.length);
		});

		it('Renders with elements', () => {
			const components = fieldSetFactory(configFields);
			const component = renderer.create(
				<div>
					{Array.from(components).map((field, i) => {
						return React.createElement(
							'div', {
								key: i,
								className: `f-${i}`
							},
							field
						);
					})}
				</div>
			);
			expect(component.toJSON()).toMatchSnapshot();
		});

		it('Creates the elements', () => {
			const components = fieldSetFactory(configFields);
			const wrapper = mount(
				<div>
					{Array.from(components).map((field, i) => {
						return React.createElement(
							'div', {
								key: i,
								className: `f-${i}`
							},
							field
						);
					})}
				</div>
			);
			expect(wrapper.children()).toHaveLength(configFields.length);
			expect(wrapper.find('.f-1')).toHaveLength(1);
			expect(wrapper.find('.f-1').text()).toBe('Sequence');
		});


	});
});
