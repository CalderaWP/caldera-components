
## Usage


### Creating  Conditional Rules
Rules are functions that are passed the current values and return false if the conditional rule does not pass. Any return value besides the boolean `false` is indicates the rule has passed.

Rules are collected in arrays, let's call these "rule sets".
### Examples of conditional rules functions

#### Conceptual Examples
👀🌋 **Key concept** If any rules are false, the rule set is false.

This rule set would always pass:
```js
[
    () => {
        return true;
    }
]
```

This rule set would always pass:
```js
[
    () => {
        return 'false'; //Must return boolean false.
    }
]
```

^^ Must pass strict equality `===` test.

This rule set would always fail:

```js
[
    () => {
        return true;
    }
]
```

This rule set would always fail:

```js
[
	() => {
        return false;
    },
    () => {
        return true;
    }
]
```
^^ In this example, the last rule returns true, which is irrelevant. The first one returned `false`, so the rule set is `false`.

#### Examples Using Field Values
In reality, we probably want some logic for our conditionals. The conditional rule functions are passed an object of values. What values they are depends on the implimentation.


```js
[
	(fieldValues) => {
        if( fieldValues.hasOwnProperty('email') && 'roy@hiroy.club' fieldValues.email ){
        	return true;
        }
        return false;
    }
]
```


### Example of a config field with conditional rules


```js
const field4 = {
		ID: 'fld4',
		type: 'email'
	};

```


## Todo
* Same directory structure as validation?
* Docs