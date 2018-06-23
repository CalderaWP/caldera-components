import {
	ariaDescribedbyAttr,
	isValidHtml5type,
	addOrRemoveFromArray
} from './util';

describe('aria described by attr', () => {
	it('Returns null with no help text', () => {
		expect(ariaDescribedbyAttr('foo')).toEqual(null);
	});

	it('Returns properly when passed help text', () => {
		expect(ariaDescribedbyAttr('foo', 'help me Obi-won Kenobi')).toEqual('foo-description');
	});
});

describe( 'HTML5 checks', () => {
	it( 'detects valid types', () => {
		expect( isValidHtml5type('email')).toBe(true);
	});
});

describe( 'addOrRemoveFromArray', () => {
	it( 'Add a string to an array', () => {
		let array = [];
		array = addOrRemoveFromArray('one', array );
		expect( array  ).toEqual( ['one']);
	});
	it( 'Add an integer to an array', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array );
		expect( array  ).toEqual( [2]);
	});


	it( 'Removes from an array', () => {
		let array = [];
		array = addOrRemoveFromArray('two', array );
		array = addOrRemoveFromArray('two', array );
		expect( array ).toEqual( []);
	});

	it( 'Add multiple values to an array', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array );
		array = addOrRemoveFromArray(3, array );
		expect( array ).toEqual( [2,3]);
	});

	it( 'Add multiple values to an array and removes one of them', () => {
		let array = [];
		array = addOrRemoveFromArray(2, array );
		array = addOrRemoveFromArray(3, array );
		array = addOrRemoveFromArray(5, array );
		array = addOrRemoveFromArray(3, array );
		expect( array ).toEqual( [2,5]);
	});

});