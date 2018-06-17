# Component Factories


```js
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

const fields = fieldSetFactory([
	textFieldConfig,
	hiddenFieldConfig
]);

{Array.from(fields).map((field,i) => {
    return React.createElement(
        'div', {
            key: i,
        },
        field
    );
})}
```