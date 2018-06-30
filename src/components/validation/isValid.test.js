import isValid from './isValid';

describe('Is valid utilities', () => {
	it('checks a valid email', () => {
		expect(isValid.email('roy@hiroy.club')).toBe(true);
	});

	it('checks an invalid email', () => {
		expect(isValid.email('roy.com')).toBe(false);
	});


	it('checks a valid url', () => {
		expect(isValid.url('https://hiroy.club')).toBe(true);
	});

	it('checks an invalid url', () => {
		expect(isValid.url('//pants')).toBe(false);
	});

	const date = new Date('13 October 1982 00:00 UTC');
	it('checks a valid date string', () => {
		expect(isValid.date(date.toISOString())).toBe(true);
	});

	it('checks a valid date object', () => {
		expect(isValid.date(date)).toBe(true);
	});

	it('checks an invalid date string', () => {
		expect(isValid.date('roy.com')).toBe(false);
	});
});