# Component Factories


```js
import React from 'react';
import * as CalderaComponents from '@caldera-labs/components';


const textFieldConfig = {
	'id': 'post-tags',
	'label': 'Tags',
	'desc': 'Comma separated list of tags.',
	'type': 'text',
	'description': false
};

const hiddenFieldConfig = {
	'id': 'seq-field',
	'type': 'hidden',
	'label': 'Sequence ID',
	'description': false
};

const fields = CalderaComponents.factories.fieldSetFactory([
	textFieldConfig,
	hiddenFieldConfig
]);

{Array.from(fields).map((field,i) => {
    return React.createElement(
        React.Fragment, {
            key: i,
        },
        field
    );
})}
```