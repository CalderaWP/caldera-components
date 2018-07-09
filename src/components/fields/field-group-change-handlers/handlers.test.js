import {fieldsetCheckboxHandler} from './fieldsetCheckboxHandler';

describe('checkbox handler', () => {
	let updateValue = null;
	beforeEach(() => {
		updateValue = null;
	});

	function handler(newValue) {
		updateValue = newValue;
	}
	it('Adds value to array of values', () => {
		fieldsetCheckboxHandler({
			value: '2',
			label: 'Two'
		}, [5, 'pants'], handler);
		expect(updateValue).toEqual([5, 'pants', '2']);
	});

	it('Removes value from array of values', () => {
		fieldsetCheckboxHandler({
			value: 1,
			label: 'One'
		}, [1, 2], handler);
		expect(updateValue).toEqual([2]);
	});

	it('Adds value to when values is a string', () => {
		fieldsetCheckboxHandler({
			value: 1,
			label: 'One'
		}, '2', handler);
		expect(updateValue).toEqual(['2',1]);
	});


	it('Adds value to when values is a number', () => {
		fieldsetCheckboxHandler({
			value: 1,
			label: 'One'
		}, 2, handler);
		expect(updateValue).toEqual([2,1]);
	});
});