import CalderaConditionals from './index';


describe( 'conditionals export', () => {
	it( 'exports checkConfigFieldConditionals', () => {
		expect( typeof CalderaConditionals.checkConfigFieldConditionals ).toEqual( 'function' );
	});

	it( 'exports checkConfigFieldsConditionals', () => {
		expect( typeof CalderaConditionals.checkConfigFieldsConditionals ).toEqual( 'function' );
	});

	it( 'exports reduceConfigFieldsToValues', () => {
		expect( typeof CalderaConditionals.reduceConfigFieldsToValues ).toEqual( 'function' );
	});
});