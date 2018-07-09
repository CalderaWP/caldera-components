import Components from './index';
describe( 'conditionals export', () => {
	it( 'exports RenderGroup', () => {
		expect( typeof Components.RenderGroup ).toEqual( 'function' );
	});
	it( 'exports fields', () => {
		expect( typeof Components.fields ).toEqual( 'object' );
	});
	it( 'exports factories', () => {
		expect( typeof Components.factories ).toEqual( 'object' );
	});
	it( 'exports conditionals', () => {
		expect( typeof Components.conditionals ).toEqual( 'object' );
	});

	it( 'exports validation', () => {
		expect( typeof Components.validation ).toEqual( 'object' );
	});

	it( 'exports admin', () => {
		expect( typeof Components.Admin ).toEqual( 'object' );
	});

});

