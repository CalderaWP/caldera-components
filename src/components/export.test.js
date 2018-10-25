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

	it( 'exports FieldGroup', () => {
		expect( typeof Components.FieldGroup ).toEqual( 'function' );
	});

	it( 'exports MagicFieldGroup', () => {
		expect( typeof Components.MagicFieldGroup ).toEqual( 'function' );
	});

	it( 'exports FileFieldGroup', () => {
		expect( typeof Components.FileFieldGroup ).toEqual( 'function' );
	});


	describe( 'fields export', () => {
		const {fields} = Components;
		it( 'exports FieldGroup', () => {
			expect( typeof fields.FieldGroup ).toEqual( 'function' );
		});
		it( 'exports SelectField', () => {
			expect( typeof fields.SelectField ).toEqual( 'function' );
		});
		it( 'exports Input', () => {
			expect( typeof fields.Input ).toEqual( 'function' );
		});
		it( 'exports Message', () => {
			expect( typeof fields.Message ).toEqual( 'function' );
		});
		it( 'exports ButtonGroup', () => {
			expect( typeof fields.ButtonGroup ).toEqual( 'function' );
		});
		it( 'exports Button', () => {
			expect( typeof fields.Button ).toEqual( 'function' );
		});
	});



});

