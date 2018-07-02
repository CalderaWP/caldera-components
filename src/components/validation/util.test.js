import {findFieldValueInFieldValues} from './util';


describe( 'findFieldValueInFieldValues', () => {
	it( 'Finds  value if possible', () => {
		const values = {
			'fld0' : '01one',
			'fld1' : '11one',
			'fld2' : '22one'
		};
		expect( findFieldValueInFieldValues( 'fld1', values ) ).toBe('11one');
	});
	it( 'Finds null value if no value', () => {
		const values = {
			'fld0' : '0two',
			'fld2' : '22two'
		};
		expect( findFieldValueInFieldValues( 'fld1', values ) ).toBe(null);
	});
});
