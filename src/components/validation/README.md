

## Structure
This module is structured differently than the others. It's an experiment that may be better than what I normally do. Not sure.

This will make moving it into its own npm module easier and **may** make use in Processor UI and other modules consuming this easier.

* One function per file, as the default export

```js
export default function checkValidatorsForConfigField(configField,fieldValues) {
    
}

```

* All functions get exported together in index.js
```js
/*eslint no-undef: "error"*/
/*eslint-env node*/
import getValidatorsFromConfigField from './getValidatorsFromConfigField';
import checkValidatorsForConfigFields from './checkValidatorsForConfigField';
import checkValidatorsForConfigField from './checkValidatorsForConfigField';

/**
 * One export for validation system
 */
export default {
	getValidatorsFromConfigField,
	checkValidatorsForConfigFields,
	checkValidatorsForConfigField
}
```

## Usage

### Get validation rules from config fields
```js
getValidatorsFromConfigField({
    ID: 'fld1',
    validators: [
    	//some functions
    ]
})
```

### Check validators for one config field
Validators are an array of functions that return true or false. This field is invalid.
```js
const isValid = checkValidatorsForConfigField({
    validators: [
        () => {return false; },
    ]
}); //false

```
 This field is invalid.

```js
const isValid = checkValidatorsForConfigField({
    validators: [
        () => {return false; },
        () => {return true; },
    ]
}); //true

```
This field is valid

```js
const isValid = checkValidatorsForConfigField({
    validators: [
        () => {return true; },
    ]
}); //true

```

### Check validators for a collection of config fields
The function `checkValidatorsForConfigFields` returns an object with each field it checked indexed by ID, with boolean value.
```js
const configFields = []; //add config fields, with value prop set.

const fieldValues = reduceConfigFieldsToValues(configFields);
const results = checkValidatorsForConfigFields(configFields,fieldValues);

```
