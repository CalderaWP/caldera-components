

## DOM Testing
DOM testing uses [Enzyme](http://airbnb.io/enzyme) for testing.


#### Example

```js

import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it( 'Has the right wrapper class', () => {
    const wrapper = shallow(<FieldGroup
        id={'whatever'}
        label={'does not matter'}
        type={'input'}
    />);
    expect(wrapper.find('div.caldera-config-group').length).toBe(1);
});
```

### Important Notes

#### shallow vs full rendering
Shallow rendering is preferred. Full rendering with `mount` should be used for containers or testing decedents of a component.

* http://airbnb.io/enzyme/docs/api/shallow.html
* http://airbnb.io/enzyme/docs/api/mount.html

#### Be careful about copying from Enzyme's docs
Enzyme's docs use a different assertion library than we do. Therefore examples like this:

```js
it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
});
```
[original](http://airbnb.io/enzyme/docs/api/mount.html)

Would be rewritten as this:

```js
it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).toEqual('baz');
});
```

