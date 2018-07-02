import {getMessageStringByType, getMessageStrings, getRequiredMessage} from "./getMessageStrings";
import strings from './strings';

describe( 'strings export', () => {
	it( 'has English strings', () => {
		expect( typeof strings.en ).toEqual( 'object' );
	});

	it( 'Has Spanish strings', () => {
		expect( typeof strings.es ).toEqual( 'object' );

	});
});

describe( 'getMessageStrings', () => {

	it( 'gets the English strings when requested', () => {
		expect( getMessageStrings('en')).toEqual(strings.en)
	});

	it( 'gets the English strings invalid language requested', () => {
		expect( getMessageStrings('hfasdhasd')).toEqual(strings.en)
	});

	it( 'gets the Spanish strings when requested', () => {
		expect( getMessageStrings('es')).toEqual(strings.es)
	});

	it( 'gets the Spanish strings "es" is default and invalid language requested', () => {
		expect( getMessageStrings('111', 'es')).toEqual(strings.es)
	});

	it( 'merges strings with passed on object', () => {
		expect( getMessageStrings({
			required: 'MUST ENTER'
		} ).required).toEqual( 'MUST ENTER')
	});

	it( 'merges strings with english when passed on object', () => {
		expect( getMessageStrings({
			required: 'MUST ENTER'
		} ).defaultMessage).toEqual( strings.en.defaultMessage)
	});

	it( 'merges strings with Spanish when passed on object and "es" as default', () => {
		expect( getMessageStrings({
			required: 'MUST ENTER'
		},'es' ).defaultMessage).toEqual( strings.es.defaultMessage)
	});

	it( 'merges strings with english when passed on object and an invalid default language ', () => {
		expect( getMessageStrings({
			required: 'MUST ENTER'
		}, 'adsadssdas').required).toEqual(  'MUST ENTER')
	});

	it( 'merges strings with english when passed on object and an invalid default language', () => {
		expect( getMessageStrings({
			required: 'MUST ENTER'
		}, 'adsadssdas').defaultMessage).toEqual( strings.en.defaultMessage)
	});

});

describe( 'getMessageStringByType', () => {
	it( 'finds email message in Spanish by type', () => {
		expect( getMessageStringByType( 'email', 'es' )).toEqual( strings.es.type.email )
	});

	it( 'finds url message in Spanish by type', () => {
		expect( getMessageStringByType( 'url', 'es' )).toEqual( strings.es.type.url )
	});

	it( 'finds number message in Spanish by type', () => {
		expect( getMessageStringByType( 'number', 'es' )).toEqual( strings.es.type.number )
	});

	it( 'finds default message in English when asked for invalid type and language', () => {
		expect( getMessageStringByType( 'Goo', 'armsoooo' )).toEqual( strings.en.defaultMessage )
	});
});

describe( 'getRequiredMessage', () => {
	it( 'finds required message in Spanish', () => {
		expect( getRequiredMessage( 'es' )).toEqual( strings.es.required )
	});

	it( 'finds required message in English', () => {
		expect( getRequiredMessage( 'en' )).toEqual( strings.en.required )
	});

});