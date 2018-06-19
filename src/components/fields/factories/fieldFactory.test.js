import {
	fieldFactory,
} from './fieldFactory';
import {prepareFieldConfig} from './prepareFieldConfig';
import {fieldSetFactory} from './fieldSetFactory';
import {getHtmlInputTypes} from '../util';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });

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

const genericHandler = () => {};
configFields.map(config => {
	config.onValueChange = genericHandler;
});

describe( 'Factories', () => {
	describe('Field factory', () => {

		it( 'validates type arg, setting inputType arg', () => {
			let config = {
				...textFieldConfig,
				type: 'email',
				onValueChange: genericHandler
			};
			expect( config.type ).toBe('email');
			config = prepareFieldConfig(config);
			expect( config.inputType ).toBe('email');
		});


		describe( 'Sets inputType arg in config', () => {
			getHtmlInputTypes().forEach((type) => {
				it(`type arg with value of ${type} sets inputType arg`, () => {
					const config = prepareFieldConfig({
						...textFieldConfig,
						type,
						onValueChange: genericHandler
					});
					expect( config.inputType ).toBe( type );
				});
			});

		});

		it( 'Creates inputs', () => {
			const component = fieldFactory({
				...textFieldConfig,
				onValueChange:genericHandler,
			});
			expect( component.type ).toBe( 'div' );
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
						fieldFactory(config)
					);
					expect(wrapper.find('input').prop('type')).toBe(type);
				});

			});
		});

	});

	describe( 'Field set factory', () => {
		it( 'Creates the right number of elements', () => {
			const components = fieldSetFactory(configFields);
			expect( components ).toHaveLength(configFields.length);
		});

		it( 'Renders with elements', () => {
			const components = fieldSetFactory(configFields);
			const component = renderer.create(
				<div>
					{Array.from(components).map((field,i) => {
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

		it( 'Creates the elements', () => {
			const components = fieldSetFactory(configFields);
			const wrapper = mount(
				<div>
					{Array.from(components).map((field,i) => {
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
			expect( wrapper.children()).toHaveLength(configFields.length);
			expect( wrapper.find('.f-1')).toHaveLength(1);
			expect( wrapper.find('.f-1').text()).toBe('Sequence');
		});


	});
});
