import {RenderGroup} from './RenderGroup';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
Enzyme.configure({ adapter: new Adapter() });

const textFieldConfig = {
	'id': 'cf-something-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false
};

const hiddenFieldConfig = {
	'id': 'cf-something-sequence-id',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false
};

const configFields = [
	{
		'id': 'cf-something-apikey', 'label': 'API Key', 'type': 'text'
	},
	hiddenFieldConfig,
	textFieldConfig
];

const genericHandler = () => {};
configFields.map(config => {
	config.onValueChange = genericHandler;
});

describe( 'The render group component', () => {

	describe( 'Rendering with fields', () => {
		it( 'Works with one text field', () => {
			const component = renderer.create(
				<RenderGroup configFields={[
					{
						'id': 'sz',
						'label': 'Tags',
						'desc': 'Comma separated list of tags.',
						'type': 'text',
						'description': false,
						onValueChange: genericHandler
					}
				]}/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		});

		it( 'Works with a few fields', () => {
			const component = renderer.create(
				<RenderGroup configFields={configFields}/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		});

		it( 'Does not error when passed empty array of fields', () => {
			const component = renderer.create(
				<RenderGroup configFields={[]}/>
			);
			expect( component.toJSON() ).toMatchSnapshot();
		});
	});


	describe( 'Creates the inner components correctly', ()  =>{
		it( 'Creates array of components', () => {
			const component = new RenderGroup({
				configFields:configFields
			});
			expect( component.createComponents() ).toBeInstanceOf(Array);
		});

		it( 'Has the right number of children', () => {
			const wrapper = mount(
				<RenderGroup
					className={'x1'}
					configFields={configFields}
				/>
			);
			expect( wrapper.find('.x1').children() ).toHaveLength(4);
		});


		it( 'Adds the description', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'desc': 'Do not expect this',
					'type': 'text',
					'description': 'Expect This',
					onValueChange: genericHandler
				}
			];

			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );

			expect( wrapper.find('p.description') ).toHaveLength(1);
		});

		it( 'Adds the right description', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'desc': 'Do not expect this',
					'type': 'text',
					'description': 'Expect This',
					onValueChange: genericHandler
				}
			];
			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );
			expect( wrapper.find('p.description').text() ).toEqual( 'Expect This' );
		});

		it( 'Sets aria-describedby prop on input to match description', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'desc': 'Do not expect this',
					'type': 'text',
					'description': 'Expect This',
					onValueChange: genericHandler
				}
			];
			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );
			expect( wrapper.find('input').prop('aria-describedby') ).toEqual( 'sz-description' );
		});

		it( 'Adds the description using .desc if .description is not provided to match old spec', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'type': 'text',
					'desc': 'Expect This',
					onValueChange: genericHandler
				}
			];

			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );

			expect( wrapper.find('p.description') ).toHaveLength(1);
			expect( wrapper.find('p.description').text() ).toEqual( 'Expect This' );
		});

		it( 'Adds the right description using .desc if .description is not provided to match old spec', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'type': 'text',
					'desc': 'Expect This',
					onValueChange: genericHandler
				}
			];

			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );

			expect( wrapper.find('p.description').text() ).toEqual( 'Expect This' );
		});

		it( 'Adds no description if .description is false', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'type': 'text',
					onValueChange: genericHandler
				}
			];

			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );
			expect( wrapper.find('p.description') ).toHaveLength(0);
		});

		it( 'Adds the label', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'desc': 'Comma separated list of tags.',
					'type': 'text',
					'description': false,
					onValueChange: genericHandler
				}
			];
			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );
			expect( wrapper.find('label') ).toHaveLength(1);
			expect( wrapper.find('label').text() ).toEqual(thisConfigFields[0].label);
		});

		it( 'Adds the right label', () => {
			const thisConfigFields = [
				{
					'id': 'sz',
					'label': 'Tags',
					'desc': 'Comma separated list of tags.',
					'type': 'text',
					'description': false,
					onValueChange: genericHandler
				}
			];
			const wrapper = mount( <RenderGroup configFields={thisConfigFields}/> );
			expect( wrapper.find('label').text() ).toEqual(thisConfigFields[0].label);
		});

	});

	const fieldSetField = {
		id: 'fieldset-3',
		label: 'How many?',
		type: 'fieldset',
		options: [
			{
				value: 1,
				label: 'One'
			},
			{
				value: 2,
				label: 'Two'
			}

		],
		value:[],
		onValueChange:genericHandler
	};

	describe( 'fieldsets', () => {
		it( 'Outputs a fieldset', () => {
			const wrapper = mount( <RenderGroup configFields={[fieldSetField]}/> );
			expect( wrapper.find('fieldset') ).toHaveLength(1);

		});

		it( 'has inputs in the fieldset', () =>{
			const wrapper = mount( <RenderGroup configFields={[fieldSetField]}/> );
			expect( wrapper.find('fieldset').children().find('input' ) ).toHaveLength(2);
		});

		it( 'has inputs that are checbkoxes in the fieldset', () =>{
			const wrapper = mount( <RenderGroup configFields={[fieldSetField]}/> );
			expect( wrapper.find('fieldset').children().find('input' ).first().prop('type') ).toEqual( 'checkbox' );
		});
	});


	describe( 'class structure', () => {
		const fieldConfigsForThisTest = [
			{
				'id': 'cf-something-else',
				'label': 'Thing',
				'type': 'text',
				onValueChange: genericHandler
			},
			textFieldConfig
		];

		it( 'Puts .caldera-config-field-setup on outermost element', () =>{
			const wrapper = mount( <RenderGroup configFields={fieldConfigsForThisTest}/> );
			expect( wrapper.find('.caldera-config-field-setup') ).toHaveLength(1);
		});

		it( 'It puts .caldera-config-group around each group', () => {
			const wrapper = mount( <RenderGroup configFields={fieldConfigsForThisTest}/> );
			expect(
				wrapper.find('.caldera-config-field-setup').children().find('.caldera-config-group')
			).toHaveLength(2);
		});

		it( 'Matches snapshot', () => {
			const component = renderer.create(<RenderGroup configFields={fieldConfigsForThisTest}/>);
			expect( component.toJSON()).toMatchSnapshot();
		});
	});

	describe( 'Select fields', () => {
		it( 'Select fields have options', () => {
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
					},
					{
						label: 'Imaginary',
						value: 'imaginary'
					}
				],
				value: '',
				onValueChange: genericHandler
			};

			const wrapper = mount( <RenderGroup configFields={[selectFieldConfig]}/> );
			expect(
				wrapper.find('select').children().find('option')
			).toHaveLength(3);
		});

		it( 'Select field change handlers recive value, not event ', () => {
			let updateValue = '';
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
					},
					{
						label: 'Imaginary',
						value: 'imaginary'
					}
				],
				value: '',
				onValueChange: (newValue) => {
					updateValue = newValue;
					return newValue;
				}
			};

			const wrapper = mount( <RenderGroup configFields={[selectFieldConfig]}/> );
			wrapper.find( 'select' ).simulate('change', { target: { value: 'imaginary' } });
			expect(
				wrapper.find('select').children().find('option')
			).toHaveLength(3);
		});
	});




	
});

