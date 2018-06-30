

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
```js
 

```

### Check validators for a collection of config fields
```js

```
