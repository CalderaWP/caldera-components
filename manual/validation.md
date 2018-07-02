# Validation
The validation module handles the logic of determining if a field value is valid or not. It works a lot like conditional logic, in that configFields MAY have an array of validation functions. Each function is passed field values. If ANY of the validation functions returns the boolean `false`, the validation returns false. Return value of validators is checked with strict equality `false === validationFunction(fieldValues)`.

## Structure
This module is structured differently than the others. It's an experiment that may be better than what I normally do. Not sure.

This will make moving it into its own npm module easier and **may** make use in Processor UI and other modules consuming this easier.

* One function per file, as the default export
* All functions get exported together in index.js

## Usage
## Import With webpack
`import {validation} from '@caldera-labs/components`;


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
