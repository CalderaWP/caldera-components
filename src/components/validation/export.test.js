import CalderaValidators from './index';
describe( 'CalderaValidators export', () => {
	it( 'exports getValidatorsFromConfigField', () => {
		expect( typeof CalderaValidators.getValidatorsFromConfigField ).toEqual( 'function' );
	});

	it( 'exports checkValidatorsForConfigFields', () => {
		expect( typeof CalderaValidators.checkValidatorsForConfigFields ).toEqual( 'function' );
	});

	it( 'exports checkValidatorsForConfigField', () => {
		expect( typeof CalderaValidators.checkValidatorsForConfigField ).toEqual( 'function' );
	});

	it( 'exports isEmpty', () => {
		expect( typeof CalderaValidators.isEmpty ).toEqual( 'object' );
	});

	it( 'can call a function on isEmpty export ', () => {
		expect(  CalderaValidators.isEmpty.string('roy@hiroy.club') ).toEqual( false );
	});

	it( 'exports isValid', () => {
		expect( typeof CalderaValidators.isValid ).toEqual( 'object' );
	});

	it( 'can call a function on isValid export ', () => {
		expect(  CalderaValidators.isValid.email('roy@hiroy.club') ).toEqual( true );
	});
});