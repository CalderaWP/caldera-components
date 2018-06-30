import {checkConfigFieldConditionals} from "./checkConfigFieldConditionals";
import {checkConfigFieldsConditionals} from "./checkConfigFieldsConditionals";
import {reduceConfigFieldsToValues} from "./util";
describe('checking conditionals', () => {
	const field4 = {
		ID: 'fld4',
		type: 'email'
	};
	describe('Checking one field\'s conditionals', () => {
		it('returns true if no conditionals', () => {
			expect(checkConfigFieldConditionals(field4)).toBe(true);
		});
		it('returns true if one rule that should return true', () => {
			expect(checkConfigFieldConditionals({
				...field4,
				conditionals: [
					() => {
						return true;
					}
				]
			})).toBe(true);
		});
		it('returns false if one rule that should return false', () => {
			expect(checkConfigFieldConditionals({
				...field4,
				conditionals: [
					() => {
						return false;
					}
				]
			})).toBe(false);

		});
		it('returns false if one rule that should return true and one rule that should be false', () => {
			expect(checkConfigFieldConditionals({
				...field4,
				conditionals: [
					() => {
						return true;
					},
					() => {
						return false;
					}
				]
			})).toBe(false);

		});
		it('Passes values correctly', () => {
			const values = {
				a: 1,
				b: 2
			};
			let testValues = null;
			checkConfigFieldConditionals({
				...field4,
				conditionals: [
					(valuesPassed) => {
						testValues = valuesPassed;
					}
				]
			}, values);

			expect(testValues).toEqual(values);
		});
	});
	describe('Checking a collection of configFields\'s conditionals', () => {
		const configFields = [
			{
				type: 'email',
				ID: 'showField',
				conditionals: [
					() => {
						return true;
					},
				]
			},
			{
				type: 'email',
				ID: 'hideField',
				conditionals: [
					() => {
						return false;
					},
				]
			},
			{
				type: 'email',
				ID: 'otherField',
			},
		];
		it('returns valid results', () => {
			expect(checkConfigFieldsConditionals(configFields)).toEqual({
				showField: true,
				otherField: true,
				hideField: false,
			});
		});

	});

});

describe('reducing config fields to values', () => {
	const configFields = [
		{
			ID: 'fld44',
			value: 5
		},
		{
			ID: 'fld41',
			value: 2
		}

	];
	it('returns only values', () => {
		expect(reduceConfigFieldsToValues(configFields)).toEqual(
			{
				fld44: 5,
				fld41: 2
			}
		);
	});

	it('returns null if no value', () => {
		expect(reduceConfigFieldsToValues([
				...configFields,
				{
					ID: 'fld45',
				}
			]
		)).toEqual(
			{
				fld44: 5,
				fld41: 2,
				fld45: null
			}
		);
	});

	it('Returns default if has default and no value', () => {
		expect(reduceConfigFieldsToValues([
				...configFields,
				{
					ID: 'fld47',
					default: 'Roy',
				}
			]
		)).toEqual(
			{
				fld44: 5,
				fld41: 2,
				fld47: 'Roy'
			}
		);
	});

	it('Returns value if has default and  value', () => {
		expect(reduceConfigFieldsToValues([
				...configFields,
				{
					ID: 'fld48',
					default: 'Roy',
					value: 'Mike',
				}
			]
		)).toEqual(
			{
				fld44: 5,
				fld41: 2,
				fld48: 'Mike'
			}
		);
	});

});