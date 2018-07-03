# Validation
The validation module handles the logic of determining if a field value is valid or not. It works a lot like conditional logic, in that configFields MAY have an array of validation functions. Each function is passed field values. If ANY of the validation functions returns the boolean `false`, the validation returns false. Return value of validators is checked with strict equality `false === validationFunction(fieldValues)`.

👀🌋 Validation is not implemented by default.

## Structure
This module is structured differently than the others. It's an experiment that may be better than what I normally do. Not sure.

This will make moving it into its own npm module easier and **may** make use in Processor UI and other modules consuming this easier.

* One function per file, as the default export
* All functions get exported together in index.js


## Import With webpack
`import {validation} from '@caldera-labs/components`;

## Automagic-ish Usage
### Add Sensible, Default Validators Automatically
In general, you can add the validators that you would expect a field to have, using `addAutomaticValidators`

In this example, the fields value will have to be an empty string or a valid email to be considered valid.
```js
import {validation} from '@caldera-labs/components';
validation.addAutomaticValidators({
    ID: 'fld1',
    type: 'input',
    inputType: 'url',
    isRequired: false,
})
```

In this example, the fields value will have to be a valid email to be considered valid.
```js
import {validation} from '@caldera-labs/components';
validation.addAutomaticValidators({
    ID: 'fld1',
    type: 'input',
    inputType: 'url',
    isRequired: true,
})
```

### Get The Message To Show When A Field Is Not Valid
Validation and is required messages, by language and type are available using
`valdidation.messageStrings`. There are helpful functions for finding those strings. They all accept an optional `defaultLang` argument. This is used to fill in any missing strings in incomplete translations. The default language, if not specified is English.

#### Find An Invalid Field Message By Input Type
For the English version:
```js
import {validation} from '@caldera-labs/components';
const message = {
	error: true,
	message: validation.messageStrings.getMessageStringByType('email', 'en' )
}
```

For the Spanish version:
```js
import {validation} from '@caldera-labs/components';
const message = {
	error: true,
	message: validation.messageStrings.getMessageStringByType('email', 'es' )
}
```

For the French version, with fallback to Spanish for missing strings:
```js
import {validation} from '@caldera-labs/components';
const message = {
	error: true,
	message: validation.messageStrings.getMessageStringByType('email', 'fr','es' )
}
```

#### Find an `isRequired` Field Message By Input Type
Get the message to show for a required field in English:
```js
import {validation} from '@caldera-labs/components';
const message = {
	error: true,
	message: validation.messageStrings.getRequiredMessage( 'es' )
}
```

Get the message to show for a required field in French, or Spanish if message isn't avaible in French:
```js
import {validation} from '@caldera-labs/components';
const message = {
	error: true,
	message: validation.messageStrings.getRequiredMessage( 'fr,', 'es' )
}
```
## Manual Usage

### Get validation rules from config fields

```js
import {validation} from '@caldera-labs/components';
validation.getValidatorsFromConfigField({
    ID: 'fld1',
    validators: [
    	//some functions
    ]
})
```

### Check validators for one config field
CalderaValidators are an array of functions that return true or false. This field is invalid.
```js
import {validation} from '@caldera-labs/components';
const isValid = validation.checkValidatorsForConfigField({
    validators: [
        () => {return false; },
    ]
}); //false

```
 This field is invalid.

```js
import {validation} from '@caldera-labs/components';
const isValid = validation.checkValidatorsForConfigField({
    validators: [
        () => {return false; },
        () => {return true; },
    ]
}); //true

```
This field is valid

```js
import {validation} from '@caldera-labs/components';
const isValid = validation.checkValidatorsForConfigField({
    validators: [
        () => {return true; },
    ]
}); //true

```

### Check validators for a collection of config fields
The function `checkValidatorsForConfigFields` returns an object with each field it checked indexed by ID, with boolean value.
```js
import {validation} from '@caldera-labs/components';
const configFields = [
	{
		ID: 'fromEmail',
        type: 'email',
        value: 'roy@hiroy.club'
    },
    {
    		ID: 'size',
            type: 'number',
            value: '1'
        }
]; //add config fields, with value prop set.
const fieldValues = validation.reduceConfigFieldsToValues(configFields);
const results = validation.checkValidatorsForConfigFields(configFields,fieldValues);
```

