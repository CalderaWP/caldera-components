import {
	fieldFactory,
	fieldSetFactory
} from './fieldFactory';

const textFieldConfig = {
	'id': 'cf-convertkit-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
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
	{
		'id': 'cf-convertkit-form-id',
		'type': 'hidden',
		'label': 'Form ID',
		'description': false
	},
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

describe('Field factory', () => {
	it( 'Creates a text input', () => {
		const component = fieldFactory({
			...textFieldConfig,
			onValueChange:() => {},
		});
		expect( typeof  component ).toBe( 'object' );
		expect( component.type ).toBe( 'div' );
	});

});

describe( 'Field set factory', () => {
	it( 'Creates the right number of element', () => {
		const components = fieldSetFactory(configFields);
		expect( components ).toHaveLength(configFields.length);
	});
});