import isEmpty from './isEmpty';

describe('Is empty utilities', () => {

	describe('methods for data types', () => {
		it('Knows empty objects are empty', () => {
			expect(isEmpty.object({})).toBe(true);
		});

		it('Knows non-empty objects are not empty', () => {
			expect(isEmpty.object({roy: 'Mike'})).toBe(false);
		});

		it('Knows empty arrays are empty', () => {
			expect(isEmpty.object([])).toBe(true);
		});

		it('Knows non-empty arrays are not empty', () => {
			expect(isEmpty.object([{roy: 'Mike'}, 9])).toBe(false);
		});

		it('Knows empty strings are empty', () => {
			expect(isEmpty.string('')).toBe(true);
		});

		it('Knows non-empty strings are not empty', () => {
			expect(isEmpty.string('mike')).toBe(false);
		});

		it('Knows empty Maps are  empty', () => {
			expect(isEmpty.map(new Map())).toBe(true);
		});

		it('Knows non-empty Maps are not empty', () => {
			const map = new Map().set(1, 2);
			expect(isEmpty.map(map)).toBe(false);
		});
	});

	describe('anything method for testing all data types', () => {
		it('Knows empty objects are empty', () => {
			expect(isEmpty.anything({})).toBe(true);
		});

		it('Knows non-empty objects are not empty', () => {
			expect(isEmpty.anything({roy: 'Mike'})).toBe(false);
		});

		it('Knows empty arrays are empty', () => {
			expect(isEmpty.anything([])).toEqual(true);
		});

		it('Knows non-empty arrays are not empty', () => {
			expect(isEmpty.anything([7, 9])).toEqual(false);
		});

		it('Knows empty strings are empty', () => {
			expect(isEmpty.anything('')).toBe(true);
		});

		it('Knows non-empty strings are not empty', () => {
			expect(isEmpty.anything('mike')).toBe(false);
		});

		it('Knows empty Maps are  empty', () => {
			expect(isEmpty.anything(new Map())).toBe(true);
		});

		it('Knows non-empty Maps are not empty', () => {
			const map = new Map().set(1, 2);
			expect(isEmpty.anything(map)).toBe(false);
		});
	});

});